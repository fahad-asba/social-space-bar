'use client';
import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Users, Heart, TrendingUp, Star } from 'lucide-react';

const statData = [
  { icon: <Users size={28} />, value: 500, suffix: '+', label: 'Clients Served' },
  { icon: <Heart size={28} />, value: 98, suffix: '%', label: 'Satisfaction Rate' },
  { icon: <TrendingUp size={28} />, value: 3, suffix: 'x', label: 'Avg Engagement Growth' },
  { icon: <Star size={28} />, value: 49, suffix: '', label: 'Client Rating', prefix: '4.' },
];

function Counter({ value, suffix, prefix = '' }: { value: number; suffix: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <span ref={ref}>
      {prefix}
      {isInView ? (
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <CountUp from={0} to={value} />
        </motion.span>
      ) : 0}
      {suffix}
    </span>
  );
}

function CountUp({ from, to }: { from: number; to: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onAnimationStart={() => {
        if (!ref.current) return;
        const duration = 2000;
        const start = performance.now();
        const tick = (now: number) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(from + (to - from) * eased);
          if (ref.current) ref.current.textContent = current.toString();
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }}
    />
  );
}

export default function StatsCounter() {
  return (
    <section className="stats-section">
      <div className="stats-bg-glow" />
      <div className="container">
        <div className="stats-grid">
          {statData.map((stat) => (
            <motion.div
              key={stat.label}
              className="stats-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6 }}
            >
              <motion.div
                className="stats-icon"
                whileHover={{ scale: 1.15, rotate: 5 }}
              >
                {stat.icon}
              </motion.div>
              <div className="stats-value">
                <Counter value={stat.value} suffix={stat.suffix} prefix={stat.prefix || ''} />
              </div>
              <div className="stats-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .stats-section {
          padding: 80px 0; background: var(--section-gradient);
          position: relative; overflow: hidden; transition: background 0.3s ease;
        }
        .stats-bg-glow {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
          width: 800px; height: 400px;
          background: radial-gradient(ellipse, rgba(102,199,192,0.05) 0%, transparent 70%);
          pointer-events: none;
        }
        .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
        .stats-card {
          text-align: center; padding: 36px 24px;
          background: var(--card-bg); border: 1px solid var(--border);
          border-radius: 20px; transition: all 0.3s ease; cursor: default;
        }
        .stats-card:hover { border-color: rgba(102,199,192,0.25); box-shadow: var(--shadow-lg); }
        .stats-icon {
          width: 56px; height: 56px; margin: 0 auto 16px;
          border-radius: 16px; background: rgba(102,199,192,0.08);
          border: 1px solid rgba(102,199,192,0.2);
          display: flex; align-items: center; justify-content: center;
          color: var(--gold); transition: all 0.3s ease;
        }
        .stats-value {
          font-family: var(--font-display); font-size: 2.6rem;
          font-weight: 800; color: var(--gold); line-height: 1; margin-bottom: 6px;
        }
        .stats-label { font-size: 0.85rem; color: var(--foreground-muted); letter-spacing: 0.04em; }

        @media (max-width: 1024px) { .stats-grid { gap: 20px; } }
        @media (max-width: 900px) {
          .stats-section { padding: 60px 0; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 18px; }
          .stats-value { font-size: 2.2rem; }
        }
        @media (max-width: 600px) {
          .stats-section { padding: 50px 0; }
          .stats-card { padding: 28px 18px; }
          .stats-value { font-size: 1.8rem; }
          .stats-icon { width: 48px; height: 48px; }
          .stats-icon svg { width: 22px; height: 22px; }
        }
        @media (max-width: 420px) {
          .stats-grid { grid-template-columns: 1fr 1fr; gap: 14px; }
          .stats-card { padding: 22px 16px; border-radius: 16px; }
          .stats-value { font-size: 1.5rem; }
        }
      `}</style>
    </section>
  );
}
