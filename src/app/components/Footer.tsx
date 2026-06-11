'use client';
import Image from 'next/image';
import type { ElementType } from 'react';
import { footerColumns, socials } from '@/data/footer';
import type { FooterLink } from '@/data/footer';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Image src="/footer-logo.webp" alt="Social Space Bar" width={170} height={96} className="footer-logo-img" />
            <p className="footer-desc">
              Professional social media marketing strategies to grow your brand, boost engagement, and build your online presence. Office Hours: 9 AM - 6 PM
            </p>
            <div className="footer-socials">
              {socials.map(({ label, icon: Icon, href }) => (
                <a key={label} href={href} aria-label={label} className="footer-social-link">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map(col => (
            <div key={col.title} className="footer-col">
              <h4 className="footer-col-title">{col.title}</h4>
              <ul className="footer-col-links">
                {col.items.map((item: FooterLink) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.label}>
                      <a href={item.href} aria-label={item.href.startsWith('tel:') ? `Call ${item.label}` : undefined} className="footer-link">
                        {Icon && <Icon style={{ fontSize: '0.8rem' }} />}
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-newsletter">
          <div className="footer-newsletter-content">
            <h4 className="footer-newsletter-title">Stay Updated</h4>
            <p className="footer-newsletter-desc">Get social media marketing tips and industry insights delivered to your inbox.</p>
          </div>
          <form className="footer-newsletter-form" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" className="footer-newsletter-input" />
            <button type="submit" className="footer-newsletter-btn">Subscribe</button>
          </form>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Social Space Bar. All rights reserved.</p>
          <div className="footer-bottom-links">
            {['Privacy Policy', 'Terms of Service', 'Refund Policy'].map(link => (
              <a key={link} href="#" className="footer-bottom-link">{link}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background: var(--footer-bg); border-top: 1px solid var(--border-light);
          padding-top: 80px; position: relative; overflow: hidden;
          transition: background 0.3s ease, border-color 0.3s ease;
        }
        .footer-glow {
          position: absolute; top: -200px; right: -200px;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(102,199,192,0.05) 0%, transparent 70%);
          border-radius: 50%; pointer-events: none;
        }
        .footer-logo-img { object-fit: contain; margin-bottom: 10px; }
        [data-theme="dark"] .footer-logo-img { filter: brightness(0) invert(1); }
        .footer-grid { display: grid; grid-template-columns: 1.5fr repeat(3, 1fr); gap: 60px; margin-bottom: 48px; }
        .footer-desc { color: var(--footer-foreground-muted); font-size: 0.9rem; line-height: 1.8; margin-bottom: 28px; max-width: 280px; }
        .footer-socials { display: flex; gap: 10px; flex-wrap: wrap; }
        .footer-social-link {
          width: 40px; height: 40px; border-radius: 12px;
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
          display: flex; align-items: center; justify-content: center; font-size: 0.9rem;
          color: var(--gold); cursor: pointer; transition: all 0.3s; text-decoration: none;
        }
        .footer-social-link:hover { background: rgba(102,199,192,0.15); border-color: rgba(102,199,192,0.3); color: #66C7C0; transform: translateY(-3px); }
        .footer-col-title { font-weight: 700; color: var(--footer-foreground); font-size: 0.88rem; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 20px; }
        .footer-col-links { list-style: none; display: flex; flex-direction: column; gap: 12px; }
        .footer-link { color: var(--footer-foreground-muted); text-decoration: none; font-size: 0.9rem; transition: color 0.3s; display: inline-flex; align-items: center; gap: 8px; }
        .footer-link:hover { color: #66C7C0; }

        .footer-newsletter {
          border-top: 1px solid rgba(255,255,255,0.06); border-bottom: 1px solid rgba(255,255,255,0.06);
          padding: 40px 0; display: flex; align-items: center; justify-content: space-between;
          gap: 32px; flex-wrap: wrap; margin-bottom: 24px;
        }
        .footer-newsletter-content { flex: 1; min-width: 240px; }
        .footer-newsletter-title { font-weight: 700; color: var(--footer-foreground); font-size: 1rem; margin-bottom: 4px; }
        .footer-newsletter-desc { color: var(--footer-foreground-muted); font-size: 0.85rem; }
        .footer-newsletter-form { display: flex; gap: 10px; flex-shrink: 0; }
        .footer-newsletter-input {
          padding: 12px 18px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px; color: #fff; font-size: 0.9rem; outline: none;
          min-width: 240px; font-family: inherit; transition: border-color 0.3s;
        }
        .footer-newsletter-input:focus { border-color: var(--gold); }
        .footer-newsletter-input::placeholder { color: rgba(255,255,255,0.35); }
        .footer-newsletter-btn {
          padding: 12px 24px; background: #66C7C0;
          color: #ffffff; font-weight: 700; font-size: 0.85rem; border: none;
          border-radius: 8px; cursor: pointer; transition: all 0.3s; white-space: nowrap;
        }
        .footer-newsletter-btn:hover { background: #4db8b0; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(102,199,192,0.3); }

        .footer-bottom { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; padding: 24px 0; }
        .footer-bottom p { color: var(--footer-foreground-muted); font-size: 0.85rem; }
        .footer-bottom-links { display: flex; gap: 24px; flex-wrap: wrap; }
        .footer-bottom-link { color: var(--footer-foreground-muted); text-decoration: none; font-size: 0.85rem; transition: color 0.3s; }
        .footer-bottom-link:hover { color: #66C7C0; }

        @media (max-width: 1024px) { .footer-grid { gap: 40px; } }
        @media (max-width: 900px) {
          .footer { padding-top: 60px; }
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
          .footer-brand { grid-column: 1 / -1; text-align: center; display: flex; flex-direction: column; align-items: center; }
          .footer-desc { max-width: 100%; }
          .footer-socials { justify-content: center; }
          .footer-newsletter { flex-direction: column; text-align: center; }
          .footer-newsletter-form { width: 100%; justify-content: center; }
        }
        @media (max-width: 600px) {
          .footer { padding-top: 48px; }
          .footer-grid { grid-template-columns: 1fr; gap: 28px; }
          .footer-col { text-align: center; display: flex; flex-direction: column; align-items: center; }
          .footer-col-links { align-items: center; }
          .footer-social-link { width: 38px; height: 38px; }
          .footer-newsletter-form { flex-direction: column; align-items: center; }
          .footer-newsletter-input { width: 100%; min-width: unset; }
          .footer-newsletter-btn { width: 100%; }
          .footer-bottom { flex-direction: column; text-align: center; }
        }
      `}</style>
    </footer>
  );
}
