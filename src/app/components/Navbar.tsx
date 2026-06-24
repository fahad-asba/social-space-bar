'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { navLinks } from '@/data/navigation';
import { Menu, X } from 'lucide-react';
import PhoneLink from '@/components/ui/PhoneLink';

export default function Navbar() {
  const scrolled = useScrollPosition(40);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  useEffect(() => {
    const sectionIds = navLinks.map(l => {
      const i = l.href.indexOf('#');
      return i !== -1 ? l.href.slice(i + 1) : '';
    }).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`navbar ${scrolled || menuOpen ? 'navbar-scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="container navbar-inner">
        <Link
          href="/"
          className="nav-logo"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <Image
            src="/navbar-logo.webp"
            alt="Social Space Bar Logo"
            width={150}
            height={40}
            className="nav-logo-img"
            priority
          />
        </Link>

        <div className="desktop-nav">
          <ul className="nav-links">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav-link ${activeSection && link.href.includes('#') && activeSection === link.href.split('#')[1] ? 'nav-link-active' : ''}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <PhoneLink className="btn-outline nav-cta-btn" iconSize={14} />
        </div>

        <div className="nav-mobile-right">
          <ThemeToggle />
          <button
            className={`hamburger-btn ${menuOpen ? 'hamburger-open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className={`mobile-menu-overlay ${menuOpen ? 'mobile-menu-overlay-open' : ''}`} onClick={() => setMenuOpen(false)} />
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu-open' : ''}`}>
        <div className="mobile-menu-header">
          <Image
            src="/navbar-logo.webp"
            alt="Social Space Bar"
            width={120}
            height={32}
            className="nav-logo-img"
            loading="lazy"
          />
          <button
            className="mobile-menu-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>
        <ul className="mobile-menu-links">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`mobile-menu-link ${activeSection && link.href.includes('#') && activeSection === link.href.split('#')[1] ? 'mobile-menu-link-active' : ''}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-menu-footer">
          <div onClick={() => setMenuOpen(false)}>
            <PhoneLink className="btn-outline mobile-menu-cta" iconSize={14} />
          </div>
        </div>
      </div>

      <style>{`
        .navbar {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
          background: var(--nav-bg);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-bottom: 1px solid var(--nav-border);
          box-shadow: 0 4px 30px var(--nav-shadow);
          transition: all 0.4s ease;
        }
        .navbar.navbar-scrolled.menu-open {
          background: #0d1526;
          background: var(--mobile-menu-bg, #0d1526);
        }
        .navbar-inner {
          display: flex; align-items: center; justify-content: space-between; height: 80px;
        }
        .nav-logo { display: flex; align-items: center; text-decoration: none; flex-shrink: 0; }
        .nav-logo-img { object-fit: contain; width: 140px; max-width: 100%; height: auto; transition: all 0.3s ease; filter: brightness(0); }
        [data-theme="dark"] .nav-logo-img { filter: brightness(0) invert(1); }
        .desktop-nav { display: flex; align-items: center; gap: 28px; }
        .nav-links { display: flex; list-style: none; gap: 32px; align-items: center; }
        .nav-link {
          color: var(--cyan); text-decoration: none; font-size: 0.88rem;
          font-weight: 500; letter-spacing: 0.02em; transition: all 0.3s;
          padding: 4px 0; position: relative;
        }
        .nav-link::after {
          content: ''; position: absolute; bottom: -2px; left: 0; right: 0;
          height: 2px; background: var(--gold); border-radius: 1px;
          transform: scaleX(0); transition: transform 0.3s ease;
        }
        .nav-link:hover { color: var(--gold); }
        .nav-link:hover::after { transform: scaleX(1); }
        .nav-link-active { color: var(--gold); }
        .nav-link-active::after { transform: scaleX(1); }
        .nav-phone {
          display: flex; align-items: center; gap: 8px; color: var(--foreground-secondary);
          text-decoration: none; font-size: 0.88rem; font-weight: 500; transition: color 0.3s;
        }
        .nav-phone:hover { color: var(--gold); }
        .nav-cta-btn { padding: 10px 22px; font-size: 0.85rem; }
        .nav-mobile-right { display: none; align-items: center; gap: 10px; }
        .hamburger-btn {
          display: none; align-items: center; justify-content: center;
          background: var(--card-bg); border: 1px solid var(--border);
          border-radius: 10px; cursor: pointer;
          width: 36px; height: 36px;
          color: var(--foreground-secondary); transition: all 0.3s;
          flex-shrink: 0;
        }
        .hamburger-btn:hover { border-color: var(--gold); color: var(--gold); background: rgba(102,199,192,0.1); }

        .mobile-menu-overlay {
          position: fixed; inset: 0; z-index: 998;
          background: var(--mobile-overlay);
          backdrop-filter: blur(4px);
          opacity: 0; pointer-events: none; transition: opacity 0.3s ease;
        }
        .mobile-menu-overlay-open { opacity: 1; pointer-events: auto; }

        .mobile-menu {
          position: fixed; top: 0; right: 0; bottom: 0; z-index: 999;
          width: min(85vw, 380px); background: #0d1526;
          background: var(--mobile-menu-bg, #0d1526);
          border-left: 1px solid var(--border);
          display: flex; flex-direction: column;
          transform: translateX(100%); transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
          box-shadow: -20px 0 60px rgba(0,0,0,0.2);
        }
        .mobile-menu-open { transform: translateX(0); }
        .mobile-menu-header {
          padding: 24px 24px 16px; border-bottom: 1px solid rgba(255,255,255,0.08);
          display: flex; align-items: center; justify-content: space-between;
        }
        .mobile-menu-header .nav-logo-img { filter: brightness(0) invert(1); }
        .mobile-menu-close {
          display: flex; align-items: center; justify-content: center;
          width: 36px; height: 36px; border-radius: 10px;
          background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
          color: var(--mobile-menu-foreground); cursor: pointer;
          transition: all 0.2s; flex-shrink: 0;
        }
        .mobile-menu-close:hover { background: rgba(102,199,192,0.15); border-color: #66C7C0; color: #66C7C0; }
        .mobile-menu-links { list-style: none; padding: 16px 24px; flex: 1; display: flex; flex-direction: column; gap: 4px; background: #0d1526; background: var(--mobile-menu-bg, #0d1526); }
        .mobile-menu-link {
          display: block; padding: 14px 16px; color: var(--mobile-menu-foreground); text-decoration: none;
          font-size: 1.05rem; font-weight: 500; border-radius: var(--radius-sm);
          transition: all 0.2s;
        }
        .mobile-menu-link:hover { background: rgba(102,199,192,0.08); color: #66C7C0; }
        .mobile-menu-link-active { background: rgba(102,199,192,0.1); color: #66C7C0; font-weight: 600; }
        .mobile-menu-footer { padding: 16px 24px 32px; border-top: 1px solid rgba(255,255,255,0.08); display: flex; flex-direction: column; gap: 12px; background: #0d1526; background: var(--mobile-menu-bg, #0d1526); }
        .mobile-menu-phone {
          display: flex; align-items: center; gap: 8px; color: var(--mobile-menu-foreground);
          text-decoration: none; font-weight: 500; font-size: 0.95rem; padding: 12px 16px;
          border-radius: var(--radius-sm); transition: all 0.2s;
        }
        .mobile-menu-phone:hover { background: rgba(102,199,192,0.08); color: #66C7C0; }
        .mobile-menu-cta { width: 100%; justify-content: center; display: inline-flex; }

        @media (max-width: 1100px) { .nav-links { gap: 24px; } }
        @media (max-width: 1024px) {
          .navbar-inner { height: 74px; padding: 0 20px; }
          .nav-logo-img { width: 120px; }
        }
        @media (max-width: 900px) {
          .desktop-nav { display: none; }
          .hamburger-btn { display: flex; align-items: center; justify-content: center; }
          .nav-mobile-right { display: flex; }
          .navbar-inner { height: 70px; padding: 0 18px; }
          .nav-logo-img { width: 110px; }
        }
        @media (max-width: 768px) {
          .navbar-inner { height: 66px; padding: 0 16px; }
          .nav-logo-img { width: 100px; }
        }
        @media (max-width: 600px) {
          .navbar-inner { height: 60px; padding: 0 14px; }
          .nav-logo-img { width: 95px; }
          .mobile-menu { width: 100vw; }
        }
        @media (max-width: 420px) {
          .navbar-inner { height: 56px; }
          .nav-logo-img { width: 85px; }
          .mobile-menu-link { font-size: 1rem; padding: 12px 14px; }
        }
      `}</style>
    </nav>
  );
}
