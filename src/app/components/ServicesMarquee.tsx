'use client';
import { services } from '@/data/services';

export default function ServicesMarquee() {
  const items = services.map(s => s.title);
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <section className="marquee-section" aria-hidden="true">
      <div className="marquee-track-wrap">
        <div className="marquee-track">
          {repeated.map((text, i) => (
            <span key={i} className="marquee-item">
              <span className="marquee-dot">●</span>
              <span className="marquee-text">{text}</span>
            </span>
          ))}
        </div>
        <div className="marquee-track marquee-track-clone">
          {repeated.map((text, i) => (
            <span key={i} className="marquee-item">
              <span className="marquee-dot">●</span>
              <span className="marquee-text">{text}</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .marquee-section {
          padding: 24px 0; background: var(--background-secondary);
          overflow: hidden; position: relative; transition: background 0.3s ease;
          border-top: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
        }
        .marquee-track-wrap {
          display: flex; white-space: nowrap; overflow: hidden;
          mask-image: linear-gradient(90deg, transparent 0%, #000 5%, #000 95%, transparent 100%);
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 5%, #000 95%, transparent 100%);
        }
        .marquee-track {
          display: flex; align-items: center; gap: 8px;
          animation: marquee-text 40s linear infinite;
          flex-shrink: 0; min-width: 100%;
        }
        .marquee-track-clone { position: absolute; left: 100%; top: 0; }
        .marquee-item {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem; font-weight: 600; color: var(--foreground-muted);
          letter-spacing: 0.08em; text-transform: uppercase; white-space: nowrap;
          transition: color 0.3s ease;
        }
        .marquee-dot {
          font-size: 0.35rem; color: var(--teal);
          margin: 0 8px; vertical-align: middle;
        }
        .marquee-item:hover .marquee-text { color: var(--teal); }
        .marquee-text { transition: color 0.3s ease; }

        @media (max-width: 768px) {
          .marquee-section { padding: 18px 0; }
          .marquee-item { font-size: 0.9rem; }
        }
        @media (max-width: 480px) {
          .marquee-section { padding: 14px 0; }
          .marquee-item { font-size: 0.8rem; }
          .marquee-track { animation-duration: 30s; }
        }
      `}</style>
    </section>
  );
}
