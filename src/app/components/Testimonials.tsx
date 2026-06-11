'use client';
import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials, stats } from '@/data/testimonials';

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const next = useCallback(() => setActive(p => (p + 1) % testimonials.length), []);
  const prev = useCallback(() => setActive(p => (p - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section className="testimonials-section">
      <div className="testimonial-dot-pattern" />
      <div className="testimonial-glow" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="testimonial-header">
          <div className="section-label">Testimonials</div>
          <h2 className="section-heading" style={{ marginBottom: '16px' }}>
            What Clients <span className="accent">Say About Us</span>
          </h2>
        </div>

        <div className="testimonial-slider">
          <button className="testimonial-nav testimonial-nav-left" onClick={prev} aria-label="Previous testimonial">
            <ChevronLeft size={20} />
          </button>

          <div className="testimonial-viewport">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="testimonial-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                style={{ border: `1px solid ${testimonials[active].color}30` }}
              >
                <div className="testimonial-quote-mark" style={{ color: testimonials[active].color }}>&ldquo;</div>
                <div className="testimonial-card-top-bar" style={{ background: `linear-gradient(90deg, transparent, ${testimonials[active].color}, transparent)` }} />

                <div className="testimonial-inner">
                  <div className="testimonial-stars">
                    {Array.from({ length: testimonials[active].stars }).map((_, i) => (
                      <Star key={i} size={18} fill="#66C7C0" color="#66C7C0" />
                    ))}
                  </div>

                  <p className="testimonial-quote">&ldquo;{testimonials[active].quote}&rdquo;</p>

                  <div className="testimonial-author">
                    <div className="testimonial-avatar" style={{
                      background: `linear-gradient(135deg, ${testimonials[active].color}, ${testimonials[active].color}80)`,
                    }}>
                      {testimonials[active].initials}
                    </div>
                    <div style={{ textAlign: 'left' }}>
                      <div className="testimonial-name">{testimonials[active].name}</div>
                      <div className="testimonial-role">{testimonials[active].role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button className="testimonial-nav testimonial-nav-right" onClick={next} aria-label="Next testimonial">
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="testimonial-tabs">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setActive(i)}
              className={`testimonial-tab ${active === i ? 'testimonial-tab-active' : ''}`}
              style={{
                border: `2px solid ${active === i ? t.color : 'var(--border)'}`,
                background: active === i ? `${t.color}20` : 'transparent',
                color: active === i ? t.color : 'var(--foreground-muted)',
              }}
            >{t.name}</button>
          ))}
        </div>

        <div className="testimonial-stats-grid">
          {stats.map(stat => (
            <div key={stat.label} className="testimonial-stat">
              <div className="testimonial-stat-value">{stat.value}</div>
              <div className="testimonial-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .testimonials-section {
          padding: 100px 0; background: var(--background);
          position: relative; overflow: hidden; transition: background 0.3s ease;
        }
        .testimonial-dot-pattern {
          position: absolute; inset: 0;
          background-image: radial-gradient(rgba(255,255,255,0.015) 1px, transparent 1px);
          background-size: 30px 30px;
        }
        .testimonial-glow {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
          width: 700px; height: 400px;
          background: radial-gradient(ellipse, rgba(124,58,237,0.07) 0%, transparent 70%);
          pointer-events: none;
        }
        .testimonial-header { text-align: center; margin-bottom: 64px; }
        .testimonial-slider { display: flex; align-items: center; gap: 24px; margin-bottom: 40px; }
        .testimonial-viewport { flex: 1; overflow: hidden; }
        .testimonial-nav {
          width: 48px; height: 48px; border-radius: 50%; border: 1px solid var(--border);
          background: var(--card-bg); backdrop-filter: blur(12px); cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          color: var(--foreground); transition: all 0.3s ease; flex-shrink: 0;
          box-shadow: var(--shadow-sm);
        }
        .testimonial-nav:hover { background: var(--gold); color: #080d1a; border-color: var(--gold); }
        .testimonial-card {
          background: var(--card-bg); border-radius: 24px;
          padding: 48px; position: relative; overflow: hidden;
          box-shadow: var(--shadow-lg);
        }
        .testimonial-quote-mark {
          position: absolute; top: 24px; left: 32px;
          font-size: 4rem; opacity: 0.15; font-family: serif; line-height: 1;
        }
        .testimonial-card-top-bar { position: absolute; top: 0; left: 0; right: 0; height: 3px; }
        .testimonial-inner { max-width: 700px; margin: 0 auto; text-align: center; }
        .testimonial-stars { display: flex; justify-content: center; gap: 4px; margin-bottom: 24px; }
        .testimonial-quote {
          font-size: 1.15rem; line-height: 1.8; color: var(--foreground-secondary);
          font-style: italic; margin-bottom: 32px; font-family: 'Playfair Display', serif;
        }
        .testimonial-author { display: flex; align-items: center; justify-content: center; gap: 16px; }
        .testimonial-avatar {
          width: 52px; height: 52px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-weight: 800; font-size: 1rem; color: var(--background-secondary); flex-shrink: 0;
        }
        .testimonial-name { font-weight: 700; color: var(--foreground); }
        .testimonial-role { font-size: 0.82rem; color: var(--foreground-muted); }
        .testimonial-tabs { display: flex; justify-content: center; gap: 16px; margin-bottom: 56px; flex-wrap: wrap; }
        .testimonial-tab {
          padding: 12px 24px; border-radius: 100px; font-weight: 600;
          font-size: 0.88rem; cursor: pointer; transition: all 0.3s;
        }
        .testimonial-stats-grid {
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 1px; background: var(--border-light);
          border-radius: 20px; overflow: hidden;
        }
        .testimonial-stat {
          padding: 32px 24px; text-align: center; background: var(--background);
        }
        .testimonial-stat-value {
          font-family: 'Playfair Display', serif; font-size: 2.2rem;
          font-weight: 800; color: #66C7C0; margin-bottom: 6px;
        }
        .testimonial-stat-label { font-size: 0.8rem; color: var(--foreground-muted); letter-spacing: 0.05em; }

        @media (max-width: 1024px) {
          .testimonials-section { padding: 80px 0; }
          .testimonial-card { padding: 40px; }
        }
        @media (max-width: 900px) {
          .testimonials-section { padding: 70px 0; }
          .testimonial-card { padding: 36px 28px; }
          .testimonial-quote { font-size: 1.05rem; }
          .testimonial-nav { display: none; }
          .testimonial-stats-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .testimonials-section { padding: 55px 0; }
          .testimonial-card { padding: 28px 20px; border-radius: 18px; }
          .testimonial-quote { font-size: 0.95rem; }
          .testimonial-tab { padding: 10px 16px; font-size: 0.8rem; }
          .testimonial-stat { padding: 24px 16px; }
          .testimonial-stat-value { font-size: 1.8rem; }
        }
        @media (max-width: 420px) {
          .testimonials-section { padding: 42px 0; }
          .testimonial-card { padding: 22px 16px; }
          .testimonial-quote { font-size: 0.85rem; }
          .testimonial-tab { width: calc(50% - 8px); text-align: center; }
          .testimonial-stats-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
