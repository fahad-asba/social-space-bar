'use client';
import { motion } from 'motion/react';
import { trustStats } from '@/data/thank-you';

export default function ThankYouTrust() {
  return (
    <section className="ty-trust-section section-padding">
      <div className="container">
        <div className="ty-trust-header">
          <div className="section-label">Proven Results</div>
          <h2 className="section-heading" style={{ marginBottom: '12px' }}>
            Trusted by <span className="accent">Clients Worldwide</span>
          </h2>
        </div>

        <div className="ty-trust-grid">
          {trustStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="ty-trust-card glass-card-premium"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: 'easeOut' as const }}
            >
              <div className="ty-trust-icon">{stat.icon}</div>
              <motion.div
                className="ty-trust-value"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 150, damping: 12, delay: 0.2 + i * 0.15 }}
              >
                {stat.value}
              </motion.div>
              <div className="ty-trust-label">{stat.label}</div>
              <div className="ty-trust-glow" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
