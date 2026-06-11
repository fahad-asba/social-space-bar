import type { Metadata } from 'next';
import Footer from '@/app/components/Footer';
import ThankYouHero from '@/app/components/ThankYouHero';
import ThankYouSteps from '@/app/components/ThankYouSteps';
import ThankYouConsultation from '@/app/components/ThankYouConsultation';
import ThankYouTrust from '@/app/components/ThankYouTrust';
import ThankYouCTA from '@/app/components/ThankYouCTA';
import ThankYouNavbar from '@/app/components/ThankYouNavbar';

export const metadata: Metadata = {
  title: 'Thank You',
  description:
    'Thank you for reaching out to Social Space Bar. A marketing specialist will contact you within 24 hours to discuss your social media marketing strategy.',
  alternates: {
    canonical: '/thank-you',
  },
  openGraph: {
    title: 'Thank You | Social Space Bar',
    description:
      'Your submission has been received. Our team will reach out within 24 hours.',
    url: 'https://socialspacebar.com/thank-you',
  },
};

export default function ThankYouPage() {
  return (
    <>
      <ThankYouNavbar />
      <div className="ty-page">
        <ThankYouHero />
        <ThankYouSteps />
        <ThankYouConsultation />
        <ThankYouTrust />
        <ThankYouCTA />
      </div>
      <Footer />

      <style>{`
        /* ─── Page Wrapper ─── */
        .ty-page {
          min-height: 100vh;
          background: var(--background);
          transition: background 0.3s ease;
        }

        /* ─── Canvas ─── */
        .ty-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        /* ─── Hero ─── */
        .ty-hero {
          position: relative;
          padding: 160px 0 90px;
          text-align: center;
          overflow: hidden;
          background: var(--hero-gradient);
          transition: background 0.3s ease;
        }
        .ty-hero-glow-1 {
          position: absolute;
          top: -120px; left: 50%;
          transform: translateX(-50%);
          width: 800px; height: 800px;
          background: radial-gradient(circle, rgba(102,199,192,0.07) 0%, transparent 65%);
          pointer-events: none;
        }
        .ty-hero-glow-2 {
          position: absolute;
          bottom: -150px; right: -80px;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 65%);
          pointer-events: none;
        }
        .ty-hero-glow-3 {
          position: absolute;
          top: 30%; left: -80px;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 65%);
          pointer-events: none;
        }
        .ty-hero-inner {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Success badge */
        .ty-success-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          background: rgba(16,185,129,0.12);
          border: 1px solid rgba(16,185,129,0.3);
          border-radius: 100px;
          margin-bottom: 32px;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #10b981;
        }
        .ty-badge-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #10b981;
          animation: pulse-glow 2s ease-in-out infinite;
          box-shadow: 0 0 0 0 rgba(16,185,129,0.4);
        }

        /* Checkmark ring */
        .ty-check-ring {
          margin-bottom: 36px;
          position: relative;
        }
        .ty-check-outer {
          width: 96px; height: 96px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(102,199,192,0.15), rgba(102,199,192,0.03));
          border: 2px solid rgba(102,199,192,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: pulse-glow 3s ease-in-out infinite;
          position: relative;
        }
        .ty-check-outer::before {
          content: '';
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          border: 1px solid rgba(102,199,192,0.1);
          animation: spin-slow 8s linear infinite;
        }
        .ty-check-inner {
          width: 68px; height: 68px;
          border-radius: 50%;
          background: linear-gradient(135deg, #66C7C0, #4db8b0);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          box-shadow: 0 8px 24px rgba(102,199,192,0.4);
        }

        /* Heading + gradient text */
        .ty-hero-heading {
          font-family: var(--font-display);
          font-size: clamp(2.2rem, 5vw, 3.8rem);
          font-weight: 800;
          line-height: 1.15;
          color: var(--foreground);
          margin-bottom: 18px;
          transition: color 0.3s ease;
        }
        .ty-gradient-text {
          background: linear-gradient(135deg, #66C7C0, #8fd9d4, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ty-hero-sub {
          font-size: 1.1rem;
          line-height: 1.75;
          color: var(--foreground-secondary);
          max-width: 500px;
          margin-bottom: 40px;
          transition: color 0.3s ease;
        }
        .ty-hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 48px;
        }
        .ty-scroll-hint {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          letter-spacing: 0.08em;
          color: var(--foreground-muted);
          animation: float 3s ease-in-out infinite;
          transition: color 0.3s ease;
        }

        /* ─── Steps Timeline ─── */
        .ty-section-header {
          text-align: center;
          margin-bottom: 64px;
        }
        .ty-section-desc {
          color: var(--foreground-muted);
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.7;
          font-size: 1rem;
          transition: color 0.3s ease;
        }
        .ty-timeline {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          position: relative;
        }
        .ty-timeline-item {
          position: relative;
        }
        .ty-connector {
          position: absolute;
          top: 44px;
          right: -12px;
          z-index: 2;
          display: flex;
          align-items: center;
        }
        .ty-connector-line {
          width: 24px;
          height: 1px;
          background: linear-gradient(90deg, rgba(102,199,192,0.3), rgba(102,199,192,0.6));
        }
        .ty-connector-arrow {
          color: rgba(102,199,192,0.5);
          display: flex;
          align-items: center;
        }
        .ty-step-card {
          padding: 32px 24px;
          text-align: center;
          position: relative;
          transition: all 0.4s ease;
          height: 100%;
        }
        .ty-step-card:hover {
          transform: translateY(-8px);
          border-color: rgba(102,199,192,0.35) !important;
          box-shadow: 0 24px 48px rgba(0,0,0,0.15), 0 0 0 1px rgba(102,199,192,0.1);
        }
        .ty-step-num {
          position: absolute;
          top: 14px; right: 14px;
          width: 26px; height: 26px;
          border-radius: 50%;
          background: rgba(102,199,192,0.1);
          border: 1px solid rgba(102,199,192,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.72rem;
          font-weight: 800;
          color: var(--gold);
        }
        .ty-step-icon-wrap {
          width: 56px; height: 56px;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(102,199,192,0.15), rgba(102,199,192,0.04));
          border: 1px solid rgba(102,199,192,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
          color: var(--gold);
          transition: all 0.3s ease;
        }
        .ty-step-card:hover .ty-step-icon-wrap {
          background: linear-gradient(135deg, rgba(102,199,192,0.25), rgba(102,199,192,0.08));
          box-shadow: 0 8px 20px rgba(102,199,192,0.2);
        }
        .ty-step-label {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 8px;
        }
        .ty-step-title {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--foreground);
          margin-bottom: 8px;
          transition: color 0.3s ease;
        }
        .ty-step-desc {
          font-size: 0.84rem;
          color: var(--foreground-muted);
          line-height: 1.65;
          transition: color 0.3s ease;
        }

        /* ─── Calendly Section ─── */
        .ty-cal-section {
          padding: 80px 0;
          background: var(--section-gradient);
          position: relative;
          overflow: hidden;
          transition: background 0.3s ease;
        }
        .ty-cal-bg-glow {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 700px; height: 700px;
          background: radial-gradient(circle, rgba(102,199,192,0.05) 0%, transparent 65%);
          pointer-events: none;
        }
        .ty-cal-inner {
          position: relative;
          z-index: 1;
        }
        .ty-cal-card {
          position: relative;
          overflow: hidden;
        }
        .ty-cal-topbar {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #7c3aed, #66C7C0, #06b6d4);
        }
        .ty-cal-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          padding: 56px 52px;
        }
        .ty-cal-icon-wrap {
          width: 64px; height: 64px;
          border-radius: 18px;
          background: linear-gradient(135deg, rgba(102,199,192,0.18), rgba(102,199,192,0.05));
          border: 1px solid rgba(102,199,192,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          color: var(--gold);
        }
        .ty-cal-heading {
          font-family: var(--font-display);
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 700;
          color: var(--foreground);
          margin-bottom: 16px;
          line-height: 1.25;
          transition: color 0.3s ease;
        }
        .ty-cal-desc {
          font-size: 1rem;
          color: var(--foreground-secondary);
          line-height: 1.75;
          margin-bottom: 28px;
          transition: color 0.3s ease;
        }
        .ty-cal-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 32px;
        }
        .ty-cal-feature {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          color: var(--foreground-secondary);
          transition: color 0.3s ease;
        }
        .ty-cal-check {
          width: 20px; height: 20px;
          border-radius: 50%;
          background: rgba(16,185,129,0.15);
          border: 1px solid rgba(16,185,129,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #10b981;
          flex-shrink: 0;
        }
        .ty-cal-btn {
          padding: 15px 32px;
          font-size: 0.95rem;
        }

        /* Calendar Preview */
        .ty-cal-preview {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .ty-cal-preview-card {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 24px;
          width: 100%;
          max-width: 320px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.1);
          transition: background 0.3s ease, border-color 0.3s ease;
        }
        .ty-cal-preview-header {
          margin-bottom: 16px;
        }
        .ty-cal-preview-month {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--foreground);
          transition: color 0.3s ease;
        }
        .ty-cal-preview-month svg {
          color: var(--foreground-muted);
          cursor: pointer;
        }
        .ty-cal-days-header {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 4px;
          margin-bottom: 8px;
        }
        .ty-cal-day-name {
          text-align: center;
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: var(--foreground-muted);
          padding: 4px 0;
          transition: color 0.3s ease;
        }
        .ty-cal-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 4px;
        }
        .ty-cal-day {
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          border-radius: 8px;
          color: var(--foreground-muted);
          cursor: default;
          transition: all 0.2s ease;
        }
        .ty-cal-day-empty {
          color: transparent;
        }
        .ty-cal-day-available {
          color: var(--gold);
          background: rgba(102,199,192,0.08);
          cursor: pointer;
          font-weight: 600;
        }
        .ty-cal-day-available:hover {
          background: rgba(102,199,192,0.18);
        }
        .ty-cal-day-active {
          background: var(--gold) !important;
          color: #0d1526 !important;
          font-weight: 800;
          box-shadow: 0 4px 12px rgba(102,199,192,0.4);
        }
        .ty-cal-preview-footer {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid var(--border);
          font-size: 0.82rem;
          color: var(--foreground-muted);
          transition: color 0.3s ease, border-color 0.3s ease;
        }

        /* ─── Trust Section ─── */
        .ty-trust-header {
          text-align: center;
          margin-bottom: 56px;
        }
        .ty-trust-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          max-width: 900px;
          margin: 0 auto;
        }
        .ty-trust-card {
          padding: 40px 28px;
          text-align: center;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease !important;
        }
        .ty-trust-card:hover {
          transform: translateY(-8px);
          border-color: rgba(102,199,192,0.3) !important;
          box-shadow: 0 24px 50px rgba(0,0,0,0.12) !important;
        }
        .ty-trust-glow {
          position: absolute;
          bottom: -40px; right: -40px;
          width: 120px; height: 120px;
          background: radial-gradient(circle, rgba(102,199,192,0.08) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }
        .ty-trust-card:hover .ty-trust-glow {
          opacity: 2;
          transform: scale(1.5);
        }
        .ty-trust-icon {
          width: 52px; height: 52px;
          border-radius: 14px;
          background: rgba(102,199,192,0.1);
          border: 1px solid rgba(102,199,192,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 18px;
          color: var(--gold);
          transition: all 0.3s ease;
        }
        .ty-trust-card:hover .ty-trust-icon {
          background: rgba(102,199,192,0.2);
          box-shadow: 0 8px 20px rgba(102,199,192,0.2);
        }
        .ty-trust-value {
          font-family: var(--font-display);
          font-size: 2.8rem;
          font-weight: 800;
          color: var(--gold);
          margin-bottom: 6px;
          line-height: 1;
        }
        .ty-trust-label {
          font-size: 0.88rem;
          font-weight: 500;
          color: var(--foreground-muted);
          letter-spacing: 0.04em;
          transition: color 0.3s ease;
        }

        /* ─── Bottom CTA ─── */
        .ty-cta-section {
          padding: 80px 0;
          background: var(--background);
          position: relative;
          overflow: hidden;
          transition: background 0.3s ease;
        }
        .ty-cta-glow-left {
          position: absolute;
          top: -50px; left: -50px;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 65%);
          pointer-events: none;
        }
        .ty-cta-glow-right {
          position: absolute;
          bottom: -50px; right: -50px;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(102,199,192,0.06) 0%, transparent 65%);
          pointer-events: none;
        }
        .ty-cta-inner {
          position: relative;
          z-index: 1;
        }
        .ty-cta-card {
          max-width: 720px;
          margin: 0 auto;
          text-align: center;
          padding: 60px 48px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 24px 60px rgba(0,0,0,0.12);
        }
        .ty-cta-topbar {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #66C7C0, #7c3aed);
        }
        .ty-cta-heading {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 700;
          color: var(--foreground);
          margin-bottom: 14px;
          transition: color 0.3s ease;
        }
        .ty-cta-desc {
          font-size: 1rem;
          color: var(--foreground-secondary);
          margin-bottom: 36px;
          transition: color 0.3s ease;
        }
        .ty-cta-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* ─── Responsive ─── */
        @media (max-width: 1100px) {
          .ty-timeline { grid-template-columns: repeat(2, 1fr); }
          .ty-connector { display: none; }
        }
        @media (max-width: 900px) {
          .ty-hero { padding: 120px 0 70px; }
          .ty-cal-body {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 44px 36px;
          }
          .ty-cal-preview { order: -1; }
          .ty-cal-preview-card { max-width: 100%; }
          .ty-trust-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
          .ty-cta-card { padding: 48px 36px; }
        }
        @media (max-width: 640px) {
          .ty-hero { padding: 110px 0 60px; }
          .ty-check-outer { width: 80px; height: 80px; }
          .ty-check-inner { width: 56px; height: 56px; }
          .ty-check-inner svg { width: 28px; height: 28px; }
          .ty-hero-heading { font-size: 1.9rem; }
          .ty-hero-sub { font-size: 0.95rem; margin-bottom: 32px; }
          .ty-hero-actions { flex-direction: column; align-items: stretch; width: 100%; max-width: 320px; }
          .ty-hero-actions a, .ty-hero-actions button { justify-content: center; text-align: center; }
          .ty-section-header { margin-bottom: 40px; }
          .ty-timeline { grid-template-columns: 1fr; gap: 16px; }
          .ty-step-card { padding: 28px 20px; }
          .ty-cal-section { padding: 60px 0; }
          .ty-cal-body { padding: 36px 24px; gap: 32px; }
          .ty-cal-heading { font-size: 1.5rem; }
          .ty-cal-desc { font-size: 0.93rem; }
          .ty-cal-btn { width: 100%; justify-content: center; }
          .ty-trust-grid { grid-template-columns: 1fr; max-width: 360px; }
          .ty-trust-card { padding: 32px 24px; }
          .ty-trust-value { font-size: 2.4rem; }
          .ty-cta-card { padding: 40px 24px; border-radius: 18px !important; }
          .ty-cta-heading { font-size: 1.6rem; }
          .ty-cta-actions { flex-direction: column; align-items: stretch; }
          .ty-cta-actions a { justify-content: center; }
        }
        /* ─── SEO Links ─── */
        .ty-seo-links {
          margin-top: 56px;
          text-align: center;
        }
        .ty-seo-links-label {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--foreground-muted);
          margin-bottom: 16px;
        }
        .ty-seo-links-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px 20px;
        }
        .ty-seo-links-row a {
          color: var(--foreground-secondary);
          text-decoration: none;
          font-size: 0.85rem;
          transition: color 0.2s ease;
          position: relative;
        }
        .ty-seo-links-row a:hover {
          color: var(--gold);
        }
        .ty-seo-links-row a::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0; right: 0;
          height: 1px;
          background: var(--gold);
          opacity: 0;
          transition: opacity 0.2s ease;
        }
        .ty-seo-links-row a:hover::after {
          opacity: 0.4;
        }
        @media (max-width: 420px) {
          .ty-hero { padding: 100px 0 50px; }
          .ty-hero-heading { font-size: 1.6rem; }
          .ty-hero-sub { font-size: 0.88rem; }
          .ty-success-badge { font-size: 0.7rem; padding: 6px 14px; }
          .ty-cal-icon-wrap { width: 52px; height: 52px; }
          .ty-cal-body { padding: 28px 18px; }
        }
      `}</style>
    </>
  );
}
