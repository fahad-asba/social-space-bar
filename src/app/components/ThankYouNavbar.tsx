'use client';
import { Home } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import PhoneLink from '@/components/ui/PhoneLink';

export default function ThankYouNavbar() {
  return (
    <nav className="ty-navbar">
      <div className="container ty-navbar-inner">
        <Link href="/" className="ty-nav-logo">
          <Image src="/navbar-logo.webp" alt="Social Space Bar Logo" width={150} height={40} className="nav-logo-img" />
        </Link>

        <div className="ty-nav-right">
          <ThemeToggle />
          <span className="ty-nav-divider" />
          <PhoneLink className="btn-outline ty-nav-btn" iconSize={14} />
          <Link href="/" className="btn-primary ty-nav-btn">
            <Home size={14} />
            Back To Home
          </Link>
        </div>
      </div>

      <style>{`
        .ty-navbar {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
          background: var(--nav-bg); backdrop-filter: blur(24px);
          border-bottom: 1px solid var(--nav-border); box-shadow: 0 4px 30px var(--nav-shadow);
        }
        .ty-navbar-inner { display: flex; align-items: center; justify-content: space-between; height: 80px; }
        .ty-nav-logo { display: flex; align-items: center; text-decoration: none; flex-shrink: 0; }
        [data-theme="dark"] .nav-logo-img { filter: brightness(0) invert(1); }
        .ty-nav-right { display: flex; align-items: center; gap: 16px; }
        .ty-nav-divider { width: 1px; height: 28px; background: var(--nav-border); flex-shrink: 0; }
        .ty-nav-btn { padding: 10px 22px; font-size: 0.85rem; }
        .ty-nav-btn svg { margin-right: 4px; }

        @media (max-width: 1024px) { .ty-navbar-inner { height: 74px; padding: 0 20px; } }
        @media (max-width: 900px) {
          .ty-nav-divider { display: none; }
        }
        @media (max-width: 600px) {
          .ty-navbar-inner { height: 60px; padding: 0 14px; }
          .ty-nav-btn { padding: 8px 16px; font-size: 0.8rem; }
          .ty-nav-btn svg { margin-right: 0; }
        }
        @media (max-width: 420px) {
          .ty-navbar-inner { height: 56px; padding: 0 12px; }
        }
      `}</style>
    </nav>
  );
}
