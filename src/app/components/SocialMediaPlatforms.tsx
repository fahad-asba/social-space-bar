'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';
import FadeInView from '@/components/ui/FadeInView';

const platforms = [
  { name: 'Facebook', src: '/facebook_icon.webp', w: 100, h: 100 },
  { name: 'Instagram', src: '/Instagram_icon.webp', w: 100, h: 100 },
  { name: 'YouTube', src: '/Youtube_logo.webp', w: 120, h: 80 },
  { name: 'LinkedIn', src: '/linkdein_icon.webp', w: 100, h: 100 },
  { name: 'TikTok', src: '/tiktok_icon.webp', w: 100, h: 100 },
  { name: 'X (Twitter)', src: '/twitter-x_icon.webp', w: 100, h: 100 },
];

export default function SocialMediaPlatforms() {
  return (
    <section className="smp-section">
      <div className="smp-glow" />
      <div className="container">
        <div className="smp-header">
          <SectionHeader label="Platforms We Master" className="section-label-teal" description="We dominate every major social channel to put your brand in front of the right audience at the right time." descriptionClass="smp-desc" headingStyle={{ marginBottom: '16px' }}>
            Social Media <span className="accent-teal">Platforms</span>
          </SectionHeader>
        </div>

        <div className="smp-grid">
          {platforms.map((p, i) => (
            <motion.div
              key={p.name}
              className="smp-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -6, scale: 1.04 }}
            >
              <div className="smp-card-inner">
                <div className="smp-logo-wrap">
                  <Image src={p.src} alt={p.name} width={p.w} height={p.h} className="smp-logo" />
                </div>
                <span className="smp-name">{p.name}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <FadeInView className="smp-cta" y={20} duration={0.5} delay={0.6} margin="-30px">
          <a href="#contact" className="btn-teal">
            Get Your Social Strategy
          </a>
        </FadeInView>
      </div>

      <style>{`
        .smp-section {
          padding: 100px 0; background: var(--background);
          position: relative; overflow: hidden; transition: background 0.3s ease;
        }
        .smp-glow {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
          width: 700px; height: 400px;
          background: radial-gradient(ellipse, rgba(0,198,185,0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .smp-header { text-align: center; margin-bottom: 56px; }
        .smp-desc { color: var(--foreground-muted); max-width: 520px; margin: 0 auto; line-height: 1.75; }
        .smp-grid {
          display: grid; grid-template-columns: repeat(6, 1fr); gap: 20px;
          max-width: 900px; margin: 0 auto;
        }
        .smp-card {
          background: var(--card-bg); border: 1px solid var(--border);
          border-radius: 20px; padding: 28px 16px; cursor: pointer;
          transition: all 0.3s ease; position: relative; overflow: hidden;
          display: flex; align-items: center; justify-content: center;
        }
        .smp-card::before {
          content: ''; position: absolute; inset: 0; opacity: 0;
          background: linear-gradient(135deg, rgba(0,198,185,0.06), rgba(0,198,185,0.02));
          transition: opacity 0.3s ease;
        }
        .smp-card:hover { border-color: rgba(0,198,185,0.3); box-shadow: 0 8px 30px rgba(0,198,185,0.1); }
        .smp-card:hover::before { opacity: 1; }
        .smp-card-inner {
          display: flex; flex-direction: column; align-items: center; gap: 16px;
          position: relative; z-index: 1;
        }
        .smp-logo-wrap {
          width: 64px; height: 64px; display: flex; align-items: center;
          justify-content: center; transition: transform 0.3s ease;
        }
        .smp-card:hover .smp-logo-wrap { transform: scale(1.1); }
        .smp-logo { object-fit: contain; max-width: 100%; max-height: 100%; }
        .smp-name {
          font-size: 0.78rem; font-weight: 600; color: var(--foreground-muted);
          letter-spacing: 0.02em; text-align: center; white-space: nowrap;
        }
        .smp-card:hover .smp-name { color: var(--teal); }
        .smp-cta { display: flex; justify-content: center; margin-top: 48px; }

        @media (max-width: 1024px) {
          .smp-section { padding: 80px 0; }
          .smp-grid { grid-template-columns: repeat(3, 1fr); gap: 16px; max-width: 600px; }
        }
        @media (max-width: 900px) {
          .smp-section { padding: 65px 0; }
        }
        @media (max-width: 600px) {
          .smp-section { padding: 50px 0; }
          .smp-header h2 { font-size: 1.9rem; }
          .smp-desc { font-size: 0.92rem; }
          .smp-grid { grid-template-columns: repeat(3, 1fr); gap: 12px; max-width: 100%; }
          .smp-card { padding: 20px 12px; border-radius: 16px; }
          .smp-logo-wrap { width: 48px; height: 48px; }
          .smp-name { font-size: 0.7rem; }
          .smp-cta { margin-top: 32px; }
        }
        @media (max-width: 420px) {
          .smp-section { padding: 40px 0; }
          .smp-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
          .smp-card { padding: 16px 10px; }
          .smp-logo-wrap { width: 40px; height: 40px; }
        }
      `}</style>
    </section>
  );
}
