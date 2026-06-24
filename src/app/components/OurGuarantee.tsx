'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import ArrowIcon from '@/components/ui/ArrowIcon';
import PhoneLink from '@/components/ui/PhoneLink';
import { useModal } from './ModalProvider';

export default function OurGuarantee() {
  const { openModal, openLiveChat } = useModal();

  return (
    <section className="dist-cta-section">
      <div className="container">
        <div className="dist-cta-grid">
          <motion.div
            className="dist-cta-image"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/social-icons-img.jpg"
              alt="Social media marketing"
              width={460}
              height={280}
              className="dist-tablet-img"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            className="dist-cta-content"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="section-label">Our Guarantee</div>
            <h3 className="dist-cta-title" style={{border: "2px solid var(--accent)", display: "inline-block", padding: "4px 12px", borderRadius: "8px"}}>
              <span style={{color: 'var(--accent)'}}>Quality Coverage</span> &amp;<br />Global <span className="gold">Outreach Guaranteed!</span>
            </h3>
            <p className="dist-cta-desc">
              We don&apos;t just <span style={{color: 'var(--accent)', fontWeight: 600}}>promise results</span>  we <span className="gold" style={{fontWeight: 600}}>guarantee</span> them. Your brand will appear on <span style={{color: 'var(--accent)', fontWeight: 600}}>every major platform</span> with <span style={{color: 'var(--foreground-secondary)'}}>optimized content</span> designed to <span style={{color: 'var(--accent)', fontWeight: 600}}>convert viewers into customers</span>.
            </p>
            <div className="dist-cta-buttons">
              <button type="button" onClick={openModal} className="btn-primary">
                Get Started <ArrowIcon />
              </button>
              <PhoneLink className="btn-ghost" label="Live Chat" mobileLabel="Call Now" iconSize={16} onClick={openLiveChat} />
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .dist-cta-section { background: var(--background); border-top: 1px solid var(--border-light); }
        .dist-cta-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; padding: 80px 0; }
        .dist-cta-image { display: flex; justify-content: center; animation: float 4s ease-in-out infinite; }
        .dist-tablet-img { object-fit: contain; max-width: 100%; height: auto; border-radius: 12px; filter: drop-shadow(0 20px 40px rgba(102,199,192,0.2)); }
        .dist-cta-content { text-align: left; }
        .dist-cta-title { font-family: var(--font-display); font-size: clamp(1.6rem, 3vw, 2.4rem); font-weight: 800; color: var(--foreground-secondary); margin-bottom: 20px; line-height: 1.2; }
        .dist-cta-desc { color: var(--foreground-secondary); line-height: 1.8; margin-bottom: 32px; }
        .dist-cta-buttons { display: flex; gap: 16px; flex-wrap: wrap; }

        @media (max-width: 1024px) { .dist-cta-grid { gap: 40px; } .dist-tablet-img { width: 280px; } }
        @media (max-width: 900px) {
          .dist-cta-grid { grid-template-columns: 1fr; gap: 40px; padding: 60px 0; }
          .dist-cta-content { text-align: center; display: flex; flex-direction: column; align-items: center; }
          .dist-cta-buttons { justify-content: center; }
        }
        @media (max-width: 600px) {
          .dist-cta-title br { display: none; }
          .dist-cta-desc { font-size: 0.92rem; }
          .dist-cta-buttons { flex-direction: column; align-items: center; width: 100%; gap: 12px; }
          .dist-cta-buttons a, .dist-cta-buttons button { width: 100%; max-width: 300px; justify-content: center; box-sizing: border-box; }
        }
        @media (max-width: 420px) {
          .dist-tablet-img { width: 200px; }
        }
      `}</style>
    </section>
  );
}
