'use client';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { steps } from '@/data/thank-you';

export default function ThankYouSteps() {
  return (
    <section className="ty-steps-section section-padding">
      <div className="container">
        <div className="ty-section-header">
          <div className="section-label">Next Steps</div>
          <h2 className="section-heading" style={{ marginBottom: '12px' }}>
            What Happens <span className="accent">Next</span>
          </h2>
          <p className="ty-section-desc">
            Here&apos;s exactly what you can expect after submitting your request.
          </p>
        </div>

        <div className="ty-timeline">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              className="ty-timeline-item"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' as const }}
            >
              {i < steps.length - 1 && (
                <div className="ty-connector">
                  <div className="ty-connector-line" />
                  <div className="ty-connector-arrow">
                    <ChevronRight size={14} />
                  </div>
                </div>
              )}

              <div className="ty-step-card glass-card">
                <div className="ty-step-num">{i + 1}</div>
                <div className="ty-step-icon-wrap">{item.icon}</div>
                <div className="ty-step-label">{item.step}</div>
                <h3 className="ty-step-title">{item.title}</h3>
                <p className="ty-step-desc">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
