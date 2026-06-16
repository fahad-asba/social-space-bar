'use client';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import Link from 'next/link';
import { useModal } from '@/app/components/ModalProvider';
import { copyPhoneNumber } from '@/app/components/PhoneLinkEnhancer';

const sections = [
  {
    title: 'Information We Collect',
    content: 'We may collect personal information such as your name, email address, phone number, and project details when you contact us or use our services.',
  },
  {
    title: 'How We Use Your Information',
    content: 'Your information is used to provide publishing services, communicate with you, process payments, and improve our customer experience.',
  },
  {
    title: 'Data Protection',
    content: 'We value your privacy and take reasonable steps to protect your personal information from unauthorized access or misuse.',
  },
  {
    title: 'Sharing of Information',
    content: 'We do not sell, trade, or share your personal information with third parties except when required to deliver our services or comply with legal obligations.',
  },
  {
    title: 'Cookies & Website Usage',
    content: 'Our website may use cookies to improve user experience and analyze website performance.',
  },
  {
    title: 'Your Rights',
    content: 'You may request access, updates, or removal of your personal information by contacting our support team.',
  },
  {
    title: 'Policy Updates',
    content: 'We may update this Privacy Policy from time to time. Continued use of our services means you accept any updated changes.',
  },
];

export default function PolicyContent() {
  const { openLiveChat } = useModal();
  const handleLiveChat = () => {
    if (window.innerWidth <= 600) { copyPhoneNumber(); }
    else { openLiveChat(); }
  };
  return (
    <section className="policy-section">
      <div className="policy-glow" />
      <div className="container">
        <div className="policy-header">
          <div className="policy-badge">Privacy Policy</div>
          <h1 className="policy-title">Our <span className="accent">Privacy Policy</span></h1>
          <p className="policy-subtitle">How we collect, use, and protect your information</p>
        </div>

        <div className="policy-body">
          {sections.map((sec, i) => (
            <div key={i} className="policy-block">
              <h2 className="policy-block-title">{sec.title}</h2>
              <p className="policy-block-text">{sec.content}</p>
            </div>
          ))}
        </div>

        <div className="policy-cta">
          <p className="policy-cta-label">Let&apos;s Get Started with Us. Call Us Now!</p>
          <button type="button" onClick={handleLiveChat} className="btn-primary policy-cta-btn">
            <MessageCircle size={18} className="policy-cta-icon-chat" />
            <Phone size={18} className="policy-cta-icon-phone" />
            <span className="policy-cta-text-chat">Live Chat</span>
            <span className="policy-cta-text-call">Call Now</span>
          </button>
          <Link href="/" className="btn-outline policy-cta-home">
            <ArrowUp size={16} />
            Back to Home
          </Link>
        </div>
      </div>

      <style>{`
        .policy-section {
          padding: 140px 0 80px;
          background: var(--background);
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          transition: background 0.3s ease;
        }
        .policy-glow {
          position: absolute;
          top: -100px; right: -100px;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(102,199,192,0.05) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }
        .policy-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .policy-badge {
          display: inline-flex;
          padding: 8px 18px;
          background: rgba(102,199,192,0.1);
          border: 1px solid rgba(102,199,192,0.25);
          border-radius: 100px;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #66C7C0;
          margin-bottom: 24px;
        }
        .policy-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: var(--foreground);
          margin-bottom: 12px;
          line-height: 1.15;
          transition: color 0.3s ease;
        }
        .policy-subtitle {
          font-size: 1.05rem;
          color: var(--foreground-muted);
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.7;
          transition: color 0.3s ease;
        }
        .policy-body {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        .policy-block {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 32px;
          transition: background 0.3s ease, border-color 0.3s ease;
        }
        .policy-block:hover {
          border-color: rgba(102,199,192,0.2);
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
        }
        .policy-block-title {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 700;
          color: #66C7C0;
          margin-bottom: 12px;
          line-height: 1.3;
        }
        .policy-block-text {
          font-size: 0.95rem;
          color: var(--foreground-secondary);
          line-height: 1.8;
          transition: color 0.3s ease;
        }

        .policy-cta {
          text-align: center;
          margin-top: 64px;
          padding: 48px;
          background: var(--section-gradient);
          border-radius: 20px;
          border: 1px solid var(--border-light);
          transition: background 0.3s ease, border-color 0.3s ease;
        }
        .policy-cta-label {
          font-family: var(--font-display);
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--foreground);
          margin-bottom: 24px;
          line-height: 1.3;
          transition: color 0.3s ease;
        }
        .policy-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 32px;
          font-size: 1rem;
        }
        .policy-cta-icon-chat { display: inline; }
        .policy-cta-icon-phone { display: none; }
        .policy-cta-text-chat { display: inline; }
        .policy-cta-text-call { display: none; }
        .policy-cta-home {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-left: 16px;
          padding: 14px 28px;
          font-size: 1rem;
        }

        @media (max-width: 900px) {
          .policy-section { padding: 120px 0 60px; }
          .policy-body { gap: 24px; }
          .policy-block { padding: 28px; }
          .policy-cta { padding: 40px 24px; }
          .policy-cta-label { font-size: 1.2rem; }
          .policy-cta-home { margin-left: 0; margin-top: 12px; }
        }
        @media (max-width: 600px) {
          .policy-section { padding: 100px 0 40px; }
          .policy-header { margin-bottom: 40px; }
          .policy-badge { font-size: 0.7rem; padding: 6px 14px; }
          .policy-block { padding: 24px; }
          .policy-block-title { font-size: 1.05rem; }
          .policy-block-text { font-size: 0.9rem; }
          .policy-cta { padding: 32px 20px; margin-top: 48px; }
          .policy-cta-label { font-size: 1.1rem; margin-bottom: 20px; }
          .policy-cta-btn { width: 100%; justify-content: center; }
          .policy-cta-home { width: 100%; justify-content: center; margin-left: 0; margin-top: 12px; }
          .policy-cta-icon-chat { display: none; }
          .policy-cta-icon-phone { display: inline; }
          .policy-cta-text-chat { display: none; }
          .policy-cta-text-call { display: inline; }
        }
      `}</style>
    </section>
  );
}
