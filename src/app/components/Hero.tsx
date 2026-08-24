'use client';
import { motion } from 'motion/react';
import dynamic from 'next/dynamic';
import HeroContent from './HeroContent';
import HeroScrollIndicator from './HeroScrollIndicator';
import { useModal } from './ModalProvider';

const ContactForm = dynamic(() => import('./ContactForm'));
const ParticlesBackground = dynamic(() => import('./ParticlesBackground'));

export default function Hero() {
  const { openModal } = useModal();

  return (
    <section id="hero" className="hero-section">
      <ParticlesBackground />
      <div className="hero-glow-purple" />
      <div className="hero-glow-gold" />

      <motion.div
        className="hero-floating-shape hero-shape-1"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="hero-floating-shape hero-shape-2"
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="hero-floating-shape hero-shape-3"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <div className="container hero-grid">
        <HeroContent onOpenModal={openModal} />
        <motion.div
          className="hero-form-wrapper"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
        >
          <ContactForm compact title="Start Your Social Media Marketing Today" description="Fill in your details and we'll create a custom social media marketing plan for your brand." />
        </motion.div>
      </div>

      <HeroScrollIndicator />

      <style>{`
        .hero-section {
          position: relative; min-height: auto;
          display: flex; flex-direction: column; justify-content: center;
          overflow: hidden; background: var(--hero-gradient);
          padding: 100px 0 80px; transition: background 0.3s ease;
        }
        .hero-section::before {
          content: ''; position: absolute; inset: 0; z-index: 0;
          background-image: url('/social-icons-img.jpg'); background-size: cover; background-position: center;
          opacity: var(--hero-bg-opacity, 0.3);
        }
        .hero-section::after {
          content: ''; position: absolute; inset: 0; z-index: 0;
          background: var(--hero-overlay);
        }
        .hero-glow-purple {
          position: absolute; top: 15%; left: 5%;
          width: 700px; height: 700px;
          background: var(--hero-glow-purple); pointer-events: none; border-radius: 50%; z-index: 1;
        }
        .hero-glow-gold {
          position: absolute; bottom: -10%; right: 5%;
          width: 600px; height: 600px;
          background: var(--hero-glow-gold); pointer-events: none; border-radius: 50%; z-index: 1;
        }
        .hero-floating-shape {
          position: absolute; border-radius: 50%; pointer-events: none; z-index: 1;
          background: linear-gradient(135deg, rgba(102,199,192,0.06), rgba(124,58,237,0.04));
          border: 1px solid rgba(102,199,192,0.08);
        }
        .hero-shape-1 { top: 20%; right: 12%; width: 80px; height: 80px; }
        .hero-shape-2 { bottom: 25%; left: 8%; width: 60px; height: 60px; }
        .hero-shape-3 { top: 60%; right: 25%; width: 40px; height: 40px; }
        .hero-grid {
          position: relative; z-index: 1;
          display: grid; grid-template-columns: 1fr 500px; gap: 60px;
          align-items: center; padding: 30px 0;
        }
        .hero-form-wrapper { margin-bottom: 76px; }
        @media (max-width: 1100px) {
          .hero-grid { grid-template-columns: 1fr; text-align: center; gap: 48px; padding: 40px 24px; }
         .hero-form-wrapper { width: 100%; display: flex; justify-content: center; }
        }
        @media (max-width: 768px) {
          .hero-section { padding: 80px 0 60px; }
          .hero-grid { padding: 30px 20px; gap: 40px; }
        }
        @media (max-width: 600px) {
          .hero-section { padding: 60px 0 40px; }
          .hero-grid { padding: 20px 16px; gap: 32px; }
          .hero-shape-1, .hero-shape-2, .hero-shape-3 { display: none; }
        }
        @media (max-width: 420px) { .hero-grid { padding: 16px 14px; gap: 28px; } }
      `}</style>
    </section>
  );
}
