'use client';
import { motion } from 'motion/react';
import { offerings } from '@/data/solutions';
import ArrowIcon from '@/components/ui/ArrowIcon';
import SectionHeader from '@/components/ui/SectionHeader';
import { useModal } from './ModalProvider';

export default function Solutions() {
  const { openModal } = useModal();
  return (
    <section id="about" className="solutions-section">
      <div className="solutions-grid-bg" />
      <div className="solutions-glow" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="solutions-grid">
          <motion.div
            className="solutions-left"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeader label="Services" headingStyle={{ marginBottom: '16px' }}>
              Complete Marketing<br />
              <span className="accent">Solutions for Your Brand</span>
            </SectionHeader>
            <p className="solutions-desc">
              From your first campaign to market dominance - we provide end-to-end social media marketing solutions that deliver real, measurable results.
            </p>
            <div className="solutions-features">
              {['Data-driven campaigns', 'Multi-platform strategy', 'Dedicated support team', 'Proven ROI'].map((f, i) => (
                <motion.div
                  key={f}
                  className="solutions-check-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <span className="solutions-check-icon">✓</span>
                  <span>{f}</span>
                </motion.div>
              ))}
            </div>
            <div className="solutions-cta">
              <button type="button" onClick={openModal} className="btn-primary">
                Start Your Journey <ArrowIcon />
              </button>
              <a href="#pricing" className="btn-outline">View Packages</a>
            </div>
          </motion.div>

          <div className="solutions-right">
            {offerings.map((item, i) => (
              <motion.div
                key={item.title}
                className="solution-item"
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
              >
                <motion.span className="solution-icon" whileHover={{ scale: 1.2, rotate: 10 }}>
                  {item.icon}
                </motion.span>
                <div>
                  <div className="solution-item-title">{item.title}</div>
                  <div className="solution-item-desc">{item.desc}</div>
                </div>
                <motion.div className="solution-arrow" whileHover={{ x: 6, opacity: 1 }}>
                  {'\u2192'}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .solutions-section {
          padding: 100px 0; background: var(--background);
          position: relative; overflow: hidden; transition: background 0.3s ease;
        }
        .solutions-glow {
          position: absolute; top: -100px; right: -100px;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(102,199,192,0.05) 0%, transparent 70%);
          border-radius: 50%; pointer-events: none;
        }
        .solutions-grid-bg {
          position: absolute; inset: 0; opacity: 0.02;
          background-image: linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .solutions-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .solutions-desc { color: var(--foreground-muted); line-height: 1.75; margin-bottom: 28px; }
        .solutions-features { display: flex; flex-direction: column; gap: 12px; margin-bottom: 36px; }
        .solutions-check-item { display: flex; align-items: center; gap: 10px; font-size: 0.92rem; color: var(--foreground-secondary); }
        .solutions-check-icon {
          width: 22px; height: 22px; border-radius: 50%; background: rgba(16,185,129,0.12);
          border: 1px solid rgba(16,185,129,0.3); display: flex; align-items: center;
          justify-content: center; color: #10b981; font-size: 0.7rem; font-weight: 700; flex-shrink: 0;
        }
        .solutions-cta { display: flex; gap: 16px; flex-wrap: wrap; }
        .solutions-right { display: flex; flex-direction: column; gap: 14px; }
        .solution-item {
          display: flex; align-items: center; gap: 16px; padding: 18px 22px;
          background: var(--card-bg); border: 1px solid var(--border-light);
          border-radius: 16px; transition: all 0.35s ease; cursor: default;
          backdrop-filter: blur(10px);
        }
        .solution-item:hover { background: rgba(102,199,192,0.06); border-color: rgba(102,199,192,0.2); box-shadow: var(--shadow-md); cursor: pointer; }
        .solution-icon { font-size: 1.4rem; flex-shrink: 0; }
        .solution-item-title { font-weight: 700; color: var(--foreground); font-size: 0.95rem; }
        .solution-item-desc { font-size: 0.82rem; color: var(--foreground-muted); margin-top: 2px; }
        [data-theme="dark"] .solution-item-desc { color: rgba(255,255,255,0.85); }
        .solution-arrow { margin-left: auto; color: #66C7C0; opacity: 0.4; flex-shrink: 0; font-size: 1.1rem; }

        @media (max-width: 1100px) { .solutions-section { padding: 80px 0; } .solutions-grid { gap: 50px; } }
        @media (max-width: 900px) {
          .solutions-section { padding: 70px 0; }
          .solutions-grid { grid-template-columns: 1fr; gap: 40px; }
          .solutions-left { text-align: center; }
          .solutions-desc { max-width: 700px; margin-left: auto; margin-right: auto; }
          .solutions-features { align-items: center; }
          .solutions-cta { justify-content: center; }
        }
        @media (max-width: 600px) {
          .solutions-section { padding: 52px 0; }
          .solutions-left h2 { font-size: 2rem; }
          .solutions-left h2 br { display: none; }
          .solutions-desc { font-size: 0.92rem; }
          .solutions-cta { flex-direction: column; align-items: center; }
          .solutions-cta a { width: 100%; max-width: 100%; justify-content: center; }
          .solution-item { padding: 16px; gap: 14px; }
          .solution-item-title { font-size: 0.9rem; }
          .solution-item-desc { font-size: 0.8rem; }
        }
        @media (max-width: 420px) {
          .solutions-section { padding: 42px 0; }
          .solutions-left h2 { font-size: 1.7rem; }
          .solution-item { padding: 14px; }
        }
      `}</style>
    </section>
  );
}
