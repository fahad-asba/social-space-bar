'use client';
import ContactForm from './ContactForm';
import { contactLinks } from '@/data/contact';
import SectionHeader from '@/components/ui/SectionHeader';

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-glow-left" />
      <div className="contact-glow-right" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="contact-grid">
          <div className="contact-info">
            <SectionHeader label="Get In Touch" description="Take the first step toward market leadership. Our team will craft a personalized social media strategy for your brand - completely free." descriptionClass="contact-desc">
              Ready To Grow Your<br />
              <span className="accent">Brand Growth?</span>
            </SectionHeader>

            <div className="contact-links">
              {contactLinks.map(item => (
                <a key={item.label} href={item.href} aria-label={item.href.startsWith('tel:') ? `Call ${item.value}` : undefined} className="contact-link-card">
                  <div className="contact-link-icon">{item.icon}</div>
                  <div>
                    <div className="contact-link-label">{item.label}</div>
                    <div className="contact-link-value">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="contact-offer">
              <span className="contact-offer-emoji">{'\u{1F381}'}</span>
              <div>
                <div className="contact-offer-title">Limited Time: 30% OFF</div>
                <div className="contact-offer-desc">Fill the form now to claim your discount</div>
              </div>
            </div>
          </div>

          <div className="contact-form-col">
            <ContactForm title="Get Your Free Plan" subtitle="Claim 30% Off Today" />
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          padding: 100px 0; background: var(--section-gradient);
          position: relative; overflow: hidden; transition: background 0.3s ease;
        }
        .contact-glow-left {
          position: absolute; top: -100px; left: -100px;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%);
          border-radius: 50%; pointer-events: none;
        }
        .contact-glow-right {
          position: absolute; bottom: -100px; right: -100px;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(102,199,192,0.08) 0%, transparent 70%);
          border-radius: 50%; pointer-events: none;
        }
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .contact-desc { color: var(--foreground-secondary); line-height: 1.8; margin-bottom: 40px; }
        .contact-links { display: flex; flex-direction: column; gap: 14px; }
        .contact-link-card {
          display: flex; align-items: center; gap: 16px; padding: 20px 24px;
          background: var(--card-bg); border: 1px solid var(--border);
          border-radius: 16px; text-decoration: none; transition: all 0.3s;
        }
        .contact-link-card:hover { border-color: rgba(102,199,192,0.35); background: rgba(102,199,192,0.06); transform: translateX(8px); cursor: pointer; }
        .contact-link-icon {
          width: 44px; height: 44px; border-radius: 12px;
          background: rgba(102,199,192,0.12); border: 1px solid rgba(102,199,192,0.22);
          display: flex; align-items: center; justify-content: center; font-size: 1.2rem;
        }
        .contact-link-label {
          font-size: 0.75rem; color: var(--foreground-muted);
          letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 2px;
        }
        .contact-link-value { color: var(--foreground); font-weight: 600; font-size: 0.95rem; }
        .contact-offer {
          margin-top: 32px; padding: 20px 24px;
          background: linear-gradient(135deg, rgba(102,199,192,0.12), rgba(102,199,192,0.04));
          border: 1px solid rgba(102,199,192,0.25); border-radius: 16px;
          display: flex; align-items: center; gap: 14px;
        }
        .contact-offer-emoji { font-size: 1.8rem; }
        .contact-offer-title { font-weight: 700; color: #66C7C0; margin-bottom: 2px; }
        .contact-offer-desc { font-size: 0.85rem; color: var(--foreground-muted); }
        .contact-form-col { display: flex; justify-content: center; }

        @media (max-width: 1024px) { .contact-grid { gap: 40px; } }
        @media (max-width: 860px) {
          .contact-grid { grid-template-columns: 1fr; gap: 40px; }
          .contact-info { text-align: center; display: flex; flex-direction: column; align-items: center; }
          .contact-links { width: 100%; }
          .contact-section h2 br { display: none; }
        }
        @media (max-width: 600px) {
          .contact-section { padding: 50px 16px; }
          .contact-grid { gap: 32px; }
          .contact-desc { font-size: 0.95rem; margin-bottom: 28px; }
          .contact-link-card { padding: 16px; }
          .contact-offer { margin-top: 20px; }
        }
        @media (max-width: 420px) {
          .contact-section h2 { font-size: 1.7rem; }
          .contact-link-card { padding: 14px; gap: 12px; }
          .contact-link-icon { width: 36px; height: 36px; }
        }
      `}</style>
    </section>
  );
}
