'use client';
import Image from 'next/image';
import { footerColumns, type FooterLink } from '@/data/footer';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Image src="/footer-logo.webp" alt="Social Space Bar" width={170} height={96} className="footer-logo-img" loading="lazy" />
            <p className="footer-desc">
              Professional social media marketing strategies to grow your brand, boost engagement, and build your online presence.
            </p>

          </div>

          {footerColumns.map(col => (
            <div key={col.title} className="footer-col">
              <h4 className="footer-col-title">{col.title}</h4>
              <ul className="footer-col-links">
                {col.items.map((item: FooterLink) => (
                    <li key={item.label}>
                      <a href={item.href} aria-label={item.href.startsWith('tel:') ? `Call ${item.label}` : undefined} className="footer-link">
                        {item.label}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Social Space Bar. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="/privacy-policy" className="footer-bottom-link">Privacy Policy</a>
            <a href="/terms-conditions" className="footer-bottom-link">Terms &amp; Conditions</a>
          </div>
        </div>

        <div className="footer-disclaimer">
          <p>Disclaimer: Once the services provided by the Social Space Bar are delivered, they become the sole property of the clients.</p>
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
        .footer-grid { display: grid; grid-template-columns: 1.5fr repeat(3, 1fr); gap: 60px; margin-bottom: 24px; }
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

        .footer-disclaimer { background: var(--footer-bg); padding: 24px 0; text-align: center; border-top: 1px solid var(--border-light); }
        .footer-disclaimer p { color: var(--footer-foreground-muted); font-size: 0.82rem; line-height: 1.6; max-width: 720px; margin: 0 auto; }

        .footer-bottom { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; padding: 24px 0; background: var(--footer-bg); }
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
        }
        @media (max-width: 600px) {
          .footer { padding-top: 48px; }
          .footer-grid { grid-template-columns: 1fr; gap: 28px; }
          .footer-col { text-align: center; display: flex; flex-direction: column; align-items: center; }
          .footer-col-links { align-items: center; }
          .footer-social-link { width: 38px; height: 38px; }
          .footer-bottom { flex-direction: column; text-align: center; }
        }
      `}</style>
    </footer>
  );
}
