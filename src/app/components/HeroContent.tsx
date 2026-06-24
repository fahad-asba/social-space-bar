'use client';
import { motion } from 'motion/react';
import { CalendarDays, MessageCircle, Phone } from 'lucide-react';
import ArrowIcon from '@/components/ui/ArrowIcon';
import Image from 'next/image';
import { useModal } from './ModalProvider';
import { callPhoneNumber } from '@/lib/phone';

interface HeroContentProps { onOpenModal: () => void; }

export default function HeroContent({ onOpenModal }: HeroContentProps) {
  const { openScheduleModal, openLiveChat } = useModal();
  const handleLiveChat = () => {
    if (window.innerWidth <= 600) { callPhoneNumber(); }
    else { openLiveChat(); }
  };
  return (
    <div className="hero-content">
      <motion.div
        className="hero-badge"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="hero-badge-dot" />
        <span>Professional Social Media Marketing Agency</span>
      </motion.div>

      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Social Presence <span className="gold">Powerful</span> Impact
        <span className="hero-premier-line">Premier Social Media Marketing Agency</span>
      </motion.h1>

      <motion.p
        className="hero-subtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Professional social media strategies to grow your brand, boost engagement, and build your online presence across every major platform.
      </motion.p>



      <motion.div
        className="hero-cta-row"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.button
          type="button"
          onClick={onOpenModal}
          className="btn-primary"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Get Started Today
          <ArrowIcon />
        </motion.button>
        <button type="button" onClick={openScheduleModal} className="btn-outline">
          <CalendarDays size={16} />
          Schedule Appointment
        </button>
        <button type="button" onClick={handleLiveChat} aria-label="Live Chat" className="btn-outline hero-chat-btn">
          <MessageCircle size={16} className="hero-chat-icon" />
          <Phone size={16} className="hero-call-icon" />
          <span className="hero-chat-text">Live Chat</span>
          <span className="hero-call-text">Call Now</span>
        </button>
      </motion.div>

      <motion.div
        className="hero-trust-row"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Image src="/testimonial-logo.webp" alt="Clients" width={80} height={36} style={{ borderRadius: '100px', objectFit: 'contain' }} />
        <div>
          <div className="gold" style={{ fontSize: '0.95rem', letterSpacing: '0.05em' }}>★★★★★</div>
          <div style={{ fontSize: '0.8rem', color: 'var(--gold)' }}>Trusted by 500+ clients worldwide</div>
        </div>
      </motion.div>

      <style>{`
        .hero-content {
          max-width: 620px; position: relative;
        }
        .hero-content > * { position: relative; z-index: 1; }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 16px; background: rgba(102,199,192,0.08);
          border: 1px solid rgba(102,199,192,0.25); border-radius: 100px; margin-bottom: 32px;
        }
        .hero-badge span:last-child { font-size: 0.78rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #66C7C0; }
        .hero-badge-dot { width: 8px; height: 8px; border-radius: 50%; background: #66C7C0; display: inline-block; animation: pulse-teal 2s ease-in-out infinite; }
        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(2.4rem, 5vw, 3.8rem); font-weight: 800; line-height: 1.08;
          color: var(--hero-heading-color); margin-bottom: 24px;
          text-shadow: var(--hero-heading-shadow);
          background: rgba(102,199,192,0.1); padding: 8px 14px; border-radius: 12px;
        }
        .hero-gradient-text {
          background: linear-gradient(135deg, #66C7C0, #a78bfa);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .hero-premier-line {
          display: block; margin-top: 12px;
          font-size: clamp(0.85rem, 2.5vw, 1.1rem); font-weight: 500;
          letter-spacing: 0.15em; text-transform: uppercase; color: var(--hero-premier-color);
          text-shadow: var(--hero-premier-shadow);
        }
        .hero-subtitle {
          font-size: 1.1rem; line-height: 1.75; color: var(--hero-subtitle-color);
          margin-bottom: 40px; max-width: 520px;
          text-shadow: var(--hero-subtitle-shadow);
          background: rgba(102,199,192,0.08); padding: 6px 14px; border-radius: 10px;
        }
        .hero-stats { display: flex; gap: 40px; margin-bottom: 40px; flex-wrap: wrap; }
        .hero-stat-value { font-size: 2rem; font-weight: 800; color: #66C7C0; font-family: var(--font-display); cursor: default; }
        .hero-stat-label { font-size: 0.78rem; color: var(--gold); letter-spacing: 0.05em; text-transform: uppercase; }
        .hero-cta-row { display: flex; gap: 16px; flex-wrap: wrap; }
        .hero-cta-row .btn-outline { color: #ffffff; border-color: rgba(255,255,255,0.25); }
        .hero-cta-row .btn-outline:hover { border-color: #66C7C0; color: #66C7C0; }
        .hero-trust-row { display: flex; align-items: center; gap: 14px; margin-top: 40px; }
        .hero-chat-icon { display: inline-block; }
        .hero-call-icon { display: none; }
        .hero-chat-text { display: inline; }
        .hero-call-text { display: none; }

        @media (max-width: 1100px) {
          .hero-content { max-width: 100%; margin: 0 auto; }
          .hero-badge { margin: 0 auto 32px; }
          .hero-subtitle { margin: 0 auto 40px; max-width: 680px; }
          .hero-stats { justify-content: center; }
          .hero-cta-row { justify-content: center; }
          .hero-trust-row { justify-content: center; }
        }
        @media (max-width: 768px) {
          .hero-content { max-width: 100%; }
          .hero-title { font-size: clamp(2rem, 7.5vw, 2.8rem) !important; line-height: 1.15 !important; margin-bottom: 20px !important; }
          .hero-subtitle { font-size: 1rem !important; line-height: 1.7 !important; margin-bottom: 32px !important; }
          .hero-stats { gap: 24px; margin-bottom: 32px; }
          .hero-stat-value { font-size: 1.6rem !important; }
          .hero-cta-row { gap: 14px; }
          .hero-trust-row { margin-top: 32px; }
        }
        @media (max-width: 600px) {
          .hero-content { max-width: 100%; }
          .hero-title { font-size: clamp(1.8rem, 8vw, 2.2rem) !important; }
          .hero-subtitle { font-size: 0.92rem !important; margin-bottom: 28px !important; }
          .hero-stat-value { font-size: 1.3rem !important; }
          .hero-cta-row { width: 100%; gap: 12px; }
          .hero-cta-row a, .hero-cta-row button { flex: 1 1 100%; justify-content: center; text-align: center; }
          .hero-stats { gap: 16px; }
          .hero-badge { padding: 6px 12px; margin-bottom: 20px; }
          .hero-chat-icon { display: none; }
          .hero-call-icon { display: inline-block; }
          .hero-chat-text { display: none; }
          .hero-call-text { display: inline; }
        }
        @media (max-width: 420px) {
          .hero-content { max-width: 100%; }
          .hero-title { font-size: 1.6rem !important; }
          .hero-subtitle { font-size: 0.85rem !important; }
          .hero-stat-value { font-size: 1.1rem !important; }
          .hero-cta-row { flex-direction: column; gap: 10px; }
          .hero-cta-row a, .hero-cta-row button { width: 100%; box-sizing: border-box; }
          .hero-cta-row .btn-outline { white-space: normal; font-size: 0.82rem; padding: 10px 16px; }
        }
      `}</style>
    </div>
  );
}
