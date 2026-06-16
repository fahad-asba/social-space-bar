'use client';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import Link from 'next/link';
import { useModal } from '@/app/components/ModalProvider';
import { copyPhoneNumber } from '@/app/components/PhoneLinkEnhancer';

const sections = [
  {
    title: 'Acceptance of Terms',
    content: 'By using our website and services, you agree to follow our terms and conditions. Please read them carefully before placing an order.',
  },
  {
    title: 'Author Rights & Ownership',
    content: 'Authors keep full ownership and copyright of their work. We only provide publishing, design, and marketing services with the author\'s permission.',
  },
  {
    title: 'Payments & Refunds',
    content: 'All payments must be made as agreed. Refunds are not applicable once the project work has started or services have been delivered.',
  },
  {
    title: 'Project Delivery',
    content: 'Delivery timelines may vary depending on project complexity, revisions, and client responses.',
  },
  {
    title: 'Content Responsibility',
    content: 'Authors are responsible for ensuring their content does not violate copyright, trademark, or legal regulations.',
  },
  {
    title: 'Changes to Terms',
    content: 'We reserve the right to update or modify these terms at any time without prior notice.',
  },
];

export default function TermsContent() {
  const { openLiveChat } = useModal();
  const handleLiveChat = () => {
    if (window.innerWidth <= 600) { copyPhoneNumber(); }
    else { openLiveChat(); }
  };
  return (
    <section className="terms-section">
      <div className="terms-glow" />
      <div className="container">
        <div className="terms-header">
          <div className="terms-badge">Terms & Conditions</div>
          <h1 className="terms-title">Our <span className="accent">Terms & Conditions</span></h1>
          <p className="terms-subtitle">Please read these terms carefully before using our services</p>
        </div>

        <div className="terms-body">
          {sections.map((sec, i) => (
            <div key={i} className="terms-block">
              <h2 className="terms-block-title">{sec.title}</h2>
              <p className="terms-block-text">{sec.content}</p>
            </div>
          ))}
        </div>

        <div className="terms-cta">
          <p className="terms-cta-label">Let&apos;s Get Started with Us. Call Us Now!</p>
          <button type="button" onClick={handleLiveChat} className="btn-primary terms-cta-btn">
            <MessageCircle size={18} className="terms-cta-icon-chat" />
            <Phone size={18} className="terms-cta-icon-phone" />
            <span className="terms-cta-text-chat">Live Chat</span>
            <span className="terms-cta-text-call">Call Now</span>
          </button>
          <Link href="/" className="btn-outline terms-cta-home">
            <ArrowUp size={16} />
            Back to Home
          </Link>
        </div>
      </div>

      <style>{`
        .terms-section {
          padding: 140px 0 80px;
          background: var(--background);
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          transition: background 0.3s ease;
        }
        .terms-glow {
          position: absolute;
          top: -100px; right: -100px;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(102,199,192,0.05) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }
        .terms-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .terms-badge {
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
        .terms-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: var(--foreground);
          margin-bottom: 12px;
          line-height: 1.15;
          transition: color 0.3s ease;
        }
        .terms-subtitle {
          font-size: 1.05rem;
          color: var(--foreground-muted);
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.7;
          transition: color 0.3s ease;
        }
        .terms-body {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        .terms-block {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 32px;
          transition: background 0.3s ease, border-color 0.3s ease;
        }
        .terms-block:hover {
          border-color: rgba(102,199,192,0.2);
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
        }
        .terms-block-title {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 700;
          color: #66C7C0;
          margin-bottom: 12px;
          line-height: 1.3;
        }
        .terms-block-text {
          font-size: 0.95rem;
          color: var(--foreground-secondary);
          line-height: 1.8;
          transition: color 0.3s ease;
        }

        .terms-cta {
          text-align: center;
          margin-top: 64px;
          padding: 48px;
          background: var(--section-gradient);
          border-radius: 20px;
          border: 1px solid var(--border-light);
          transition: background 0.3s ease, border-color 0.3s ease;
        }
        .terms-cta-label {
          font-family: var(--font-display);
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--foreground);
          margin-bottom: 24px;
          line-height: 1.3;
          transition: color 0.3s ease;
        }
        .terms-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 32px;
          font-size: 1rem;
        }
        .terms-cta-icon-chat { display: inline; }
        .terms-cta-icon-phone { display: none; }
        .terms-cta-text-chat { display: inline; }
        .terms-cta-text-call { display: none; }
        .terms-cta-home {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-left: 16px;
          padding: 14px 28px;
          font-size: 1rem;
        }

        @media (max-width: 900px) {
          .terms-section { padding: 120px 0 60px; }
          .terms-body { gap: 24px; }
          .terms-block { padding: 28px; }
          .terms-cta { padding: 40px 24px; }
          .terms-cta-label { font-size: 1.2rem; }
          .terms-cta-home { margin-left: 0; margin-top: 12px; }
        }
        @media (max-width: 600px) {
          .terms-section { padding: 100px 0 40px; }
          .terms-header { margin-bottom: 40px; }
          .terms-badge { font-size: 0.7rem; padding: 6px 14px; }
          .terms-block { padding: 24px; }
          .terms-block-title { font-size: 1.05rem; }
          .terms-block-text { font-size: 0.9rem; }
          .terms-cta { padding: 32px 20px; margin-top: 48px; }
          .terms-cta-label { font-size: 1.1rem; margin-bottom: 20px; }
          .terms-cta-btn { width: 100%; justify-content: center; }
          .terms-cta-home { width: 100%; justify-content: center; margin-left: 0; margin-top: 12px; }
          .terms-cta-icon-chat { display: none; }
          .terms-cta-icon-phone { display: inline; }
          .terms-cta-text-chat { display: none; }
          .terms-cta-text-call { display: inline; }
        }
      `}</style>
    </section>
  );
}
