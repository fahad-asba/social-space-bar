'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { reasons } from '@/data/why-us';
import ArrowIcon from '@/components/ui/ArrowIcon';
import SectionHeader from '@/components/ui/SectionHeader';
import FadeInView from '@/components/ui/FadeInView';
import PhoneLink from '@/components/ui/PhoneLink';
import { useModal } from './ModalProvider';

export default function WhyUs() {
  const { openModal, openScheduleModal, openLiveChat } = useModal();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section id="why-us" className="whyus-section" ref={sectionRef}>
      <motion.div className="whyus-parallax-bg" style={{ y: bgY }} />
      <div className="whyus-glow" />
      <div className="whyus-grid-pattern" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="whyus-header">
          <SectionHeader label="Why Choose Us" description="Increase brand visibility, engagement, and growth with expert social media strategies tailored to your unique story." descriptionClass="whyus-desc">
            Strategy To <span className="accent">Outperform</span><br />Your Competitors
          </SectionHeader>
        </div>

        <div className="whyus-grid">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              className="whyus-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <motion.div
                className="whyus-card-icon"
                whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}
              >
                {r.icon}
              </motion.div>
              <div>
                <h3 className="whyus-card-title">{r.title}</h3>
                <p className="whyus-card-desc">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <FadeInView className="whyus-banner" y={40} duration={0.6} delay={0.3} style={{ border: '2px solid rgba(102,199,192,0.3)' }}>
          <div className="whyus-banner-glow" style={{border:"2px solid var(--gold)"}} />
          <div className="whyus-banner-content" >
            <h3 className="whyus-banner-title">
              Ready to become a <span className="gold">market leader?</span>
            </h3>
            <p className="whyus-banner-desc">Join 500+ brands who&apos;ve transformed their social media presence with Social Space Bar.</p>
          </div>
          <div className="whyus-banner-cta">
            <motion.button
              type="button"
              onClick={openModal}
              className="btn-primary whyus-modal-btn"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Get Started Today
              <ArrowIcon />
            </motion.button>
            <button type="button" onClick={openScheduleModal} className="btn-outline">
              Schedule Appointment <ArrowIcon />
            </button>
            <PhoneLink className="btn-outline" label="Live Chat" mobileLabel="Call Now" iconSize={16} onClick={openLiveChat} />
          </div>
        </FadeInView>
      </div>

      <style>{`
        .whyus-section {
          padding: 100px 0; background: var(--background);
          position: relative; overflow: hidden; transition: background 0.3s ease;
        }
        .whyus-parallax-bg {
          position: absolute; inset: -20%; background: radial-gradient(ellipse at 80% 50%, rgba(102,199,192,0.03) 0%, transparent 60%);
          pointer-events: none;
        }
        .whyus-glow {
          position: absolute; top: 50%; right: -100px; transform: translateY(-50%);
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(102,199,192,0.06) 0%, transparent 70%);
          border-radius: 50%; pointer-events: none;
        }
        .whyus-grid-pattern {
          position: absolute; inset: 0; opacity: 0.015;
          background-image: radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .whyus-header { text-align: center; margin-bottom: 64px; }
        .whyus-desc { color: var(--foreground-muted); max-width: 540px; margin: 0 auto; line-height: 1.75; }
        .whyus-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px; margin-bottom: 60px;
        }
        .whyus-card {
          display: flex; gap: 20px; padding: 28px;
          background: var(--card-bg); border: 1px solid var(--border-light);
          border-radius: 20px; transition: all 0.3s ease;
        }
        .whyus-card:hover { background: var(--card-hover); border-color: rgba(102,199,192,0.3); box-shadow: var(--shadow-md); cursor: pointer; }
        .whyus-card-icon {
          width: 52px; height: 52px; border-radius: 14px; flex-shrink: 0;
          background: rgba(102,199,192,0.08); border: 1px solid rgba(102,199,192,0.2);
          display: flex; align-items: center; justify-content: center; font-size: 1.5rem;
        }
        .whyus-card-title { font-weight: 700; font-size: 1rem; color: var(--foreground); margin-bottom: 8px; }
        .whyus-card-desc { font-size: 0.87rem; color: var(--foreground-muted); line-height: 1.7; }
        .whyus-banner {
          background: var(--banner-overlay);
          border: 1px solid rgba(102,199,192,0.2); border-radius: 24px;
          padding: 48px 40px; display: flex; align-items: center;
          justify-content: space-between; gap: 32px; flex-wrap: wrap; position: relative; overflow: hidden;
        }
        .whyus-banner::before {
          content: ''; position: absolute; inset: 0; z-index: 0;
          background-image: url('/big-img-card.jpg'); background-size: cover; background-position: center;
          opacity: var(--banner-img-opacity);
        }
        .whyus-banner > * { position: relative; z-index: 1; }
        .whyus-banner-glow {
          position: absolute; top: -30px; right: -30px;
          width: 200px; height: 200px;
          background: radial-gradient(circle, rgba(102,199,192,0.12) 0%, transparent 70%);
          border-radius: 50%; z-index: 2;
        }
        .whyus-banner-title {
          font-family: var(--font-display); font-size: 1.8rem;
          font-weight: 700; color: #ffffff; margin-bottom: 8px;
        }
        .whyus-banner-desc { color: white; font-size: 1rem; }
        .whyus-banner-cta { display: flex; gap: 16px; flex-wrap: wrap; flex-shrink: 0; }

        @media (max-width: 1100px) { .whyus-section { padding: 80px 0; } .whyus-banner { padding: 40px 32px; } }
        @media (max-width: 900px) {
          .whyus-section { padding: 65px 0; }
          .whyus-header h2 br { display: none; }
          .whyus-grid { grid-template-columns: 1fr 1fr; gap: 18px; }
          .whyus-banner { flex-direction: column; text-align: center; padding: 36px 28px; }
          .whyus-banner-cta { justify-content: center; }
        }
        @media (max-width: 600px) {
          .whyus-section { padding: 50px 0; }
          .whyus-header { margin-bottom: 40px; }
          .whyus-header h2 { font-size: 2rem; }
          .whyus-desc { font-size: 0.92rem; }
          .whyus-grid { grid-template-columns: 1fr; gap: 16px; }
          .whyus-card { padding: 20px; }
          .whyus-banner { padding: 28px 20px; }
          .whyus-banner-title { font-size: 1.4rem; }
        }
        @media (max-width: 420px) {
          .whyus-section { padding: 40px 0; }
          .whyus-header { margin-bottom: 32px; }
          .whyus-header h2 { font-size: 1.7rem; }
          .whyus-card { padding: 18px; }
        }
      `}</style>
    </section>
  );
}
