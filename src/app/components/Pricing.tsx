'use client';
import { useState } from 'react';
import Image from 'next/image';
import ArrowIcon from '@/components/ui/ArrowIcon';
import SectionHeader from '@/components/ui/SectionHeader';
import { plans } from '@/data/pricing';

const planIcons: Record<string, string> = {
  'Starter Growth': '/Starter-Growth.png',
  'Pro Growth': '/Pro-Growth.png',
  'Premium Domination': '/Premium-Domination.png',
};

export default function Pricing() {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-glow" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="pricing-header">
          <SectionHeader label="Pricing Plans" description="Choose the plan that fits your business goals" descriptionClass="pricing-desc">
            Social Media Growth <span className="accent">Packages</span>
          </SectionHeader>
        </div>

        <div className="pricing-grid">
          {plans.map(plan => (
            <div
              key={plan.name}
              onMouseEnter={() => setHoveredPlan(plan.name)}
              onMouseLeave={() => setHoveredPlan(null)}
              className={`pricing-card ${plan.featured ? 'pricing-card-featured' : ''}`}
              style={{
                border: plan.featured ? `2px solid ${plan.color}` : '1px solid var(--border)',
                background: plan.featured ? `linear-gradient(145deg, rgba(102,199,192,0.08), rgba(102,199,192,0.03))` : 'var(--card-bg)',
                transform: plan.featured ? 'scale(1.03)' : hoveredPlan === plan.name ? 'scale(1.02)' : 'scale(1)',
                boxShadow: plan.featured ? `0 0 40px rgba(102,199,192,0.15)` : hoveredPlan === plan.name ? '0 16px 40px rgba(0,0,0,0.3)' : 'none',
                cursor: 'pointer',
                '--plan-color': plan.color,
              } as React.CSSProperties}
            >
              <div className="pricing-card-header" style={{
                background: `linear-gradient(135deg, ${plan.color}20, ${plan.color}08)`,
                borderBottom: `1px solid ${plan.color}30`,
              }}>
                <div className="pricing-card-icon">
                  <Image
                    src={planIcons[plan.name]}
                    alt={plan.name}
                    width={56}
                    height={56}
                    className="pricing-icon-img"
                  />
                </div>
                {plan.badge && (
                  <div className="pricing-badge" style={{
                    background: plan.color,
                    color: plan.featured ? 'var(--background-secondary)' : '#ffffff',
                  }}>{plan.badge}</div>
                )}
                <h3 className="pricing-plan-name" style={{ color: plan.color }}>{plan.name}</h3>
                <div className="pricing-price-row">
                  <span className="pricing-price" style={{ color: plan.color }}>${plan.price}</span>
                  <span className="pricing-period">/ Month</span>
                </div>
                <p className="pricing-plan-desc">{plan.desc}</p>
              </div>

              <div className="pricing-card-body">
                <a
                  href="#contact"
                  className="pricing-cta-btn"
                  style={{
                    background: plan.featured ? plan.color : 'transparent',
                    color: plan.featured ? 'var(--background-secondary)' : plan.color,
                    border: `2px solid ${plan.color}`,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = plan.color;
                    e.currentTarget.style.color = plan.featured ? 'var(--background-secondary)' : '#ffffff';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = `0 8px 20px ${plan.color}40`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = plan.featured ? plan.color : 'transparent';
                    e.currentTarget.style.color = plan.featured ? 'var(--background-secondary)' : plan.color;
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Get Price Estimate
                  <ArrowIcon size={13} />
                </a>

                <ul className="pricing-features">
                  {plan.features.map(feat => (
                    <li key={feat} className="pricing-feature" style={{ color: plan.color }}>
                      <span>✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>

                <p className="pricing-ideal-for" style={{ borderLeftColor: plan.color }}>
                  <strong>Ideal For:</strong> {plan.idealFor}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="pricing-footer">
          All packages include dedicated support. <a href="#contact" style={{ color: '#66C7C0', textDecoration: 'none' }}>Contact us</a> for custom solutions.
        </p>
      </div>

      <style>{`
        .pricing-section {
          padding: 100px 0;
          background: var(--section-gradient);
          position: relative;
          overflow: hidden;
          transition: background 0.3s ease;
        }
        .pricing-glow {
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 800px; height: 400px;
          background: radial-gradient(ellipse, rgba(124,58,237,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .pricing-header {
          text-align: center;
          margin-bottom: 64px;
        }
        .pricing-desc {
          color: var(--foreground-muted);
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.75;
          transition: color 0.3s ease;
        }
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          align-items: start;
        }
        .pricing-card {
          border-radius: 24px;
          overflow: hidden;
          position: relative;
          transition: all 0.4s ease;
        }
        .pricing-card-featured {
          border-radius: 24px;
        }
        .pricing-card-header {
          padding: 32px 28px 24px;
          position: relative;
        }
        .pricing-card-icon {
          display: flex;
          justify-content: center;
          margin-bottom: 16px;
        }
        .pricing-icon-img {
          object-fit: contain;
          transition: filter 0.3s ease, transform 0.3s ease;
          width: 56px;
          height: 56px;
        }
        .pricing-card:hover .pricing-icon-img {
          filter: drop-shadow(0 0 16px color-mix(in srgb, var(--plan-color) 60%, transparent));
          transform: scale(1.08);
        }
        [data-theme="dark"] .pricing-card:hover .pricing-icon-img {
          filter: brightness(1.2) drop-shadow(0 0 18px color-mix(in srgb, var(--plan-color) 50%, transparent));
        }
        .pricing-badge {
          position: absolute;
          top: 16px; left: 16px;
          padding: 4px 12px;
          border-radius: 100px;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.08em;
        }
        .pricing-plan-name {
          font-family: var(--font-display);
          font-size: 1.6rem;
          font-weight: 800;
          margin-bottom: 8px;
        }
        .pricing-plan-subtitle {
          font-size: 0.88rem;
          color: var(--foreground-secondary);
          font-weight: 500;
          margin-bottom: 6px;
          transition: color 0.3s ease;
        }
        .pricing-plan-desc {
          font-size: 0.8rem;
          color: var(--foreground-muted);
          transition: color 0.3s ease;
        }
        .pricing-price-row {
          display: flex;
          align-items: baseline;
          gap: 4px;
          margin-bottom: 8px;
        }
        .pricing-price {
          font-family: var(--font-display);
          font-size: 2.2rem;
          font-weight: 800;
        }
        .pricing-period {
          font-size: 0.85rem;
          color: var(--foreground-muted);
        }
        .pricing-card-body {
          padding: 28px;
        }
        .pricing-cta-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 14px 24px;
          margin-bottom: 28px;
          border-radius: 10px;
          font-weight: 800;
          font-size: 0.9rem;
          text-decoration: none;
          transition: all 0.3s;
          letter-spacing: 0.05em;
        }
        .pricing-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .pricing-feature {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.88rem;
          color: var(--foreground-secondary);
          transition: color 0.3s ease;
        }
        .pricing-feature span {
          font-weight: 700;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .pricing-ideal-for {
          margin-top: 20px;
          padding: 12px 16px;
          border-left: 4px solid var(--gold);
          border-radius: 0 8px 8px 0;
          background: var(--card-hover);
          font-size: 0.78rem;
          color: var(--foreground-muted);
          line-height: 1.6;
        }
        .pricing-ideal-for strong {
          color: var(--foreground-secondary);
        }
        .pricing-footer {
          text-align: center;
          color: var(--foreground-muted);
          font-size: 0.85rem;
          margin-top: 40px;
          transition: color 0.3s ease;
        }

        @media (max-width: 1100px) {
          .pricing-section { padding: 80px 0; }
          .pricing-grid { gap: 20px; }
        }
        @media (max-width: 900px) {
          .pricing-section { padding: 65px 0; }
          .pricing-header { margin-bottom: 40px; padding: 0 16px; }
          .pricing-header h2 { font-size: 2.2rem; line-height: 1.3; }
          .pricing-header p { font-size: 0.95rem; line-height: 1.7; }
          .pricing-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .pricing-card { transform: scale(1) !important; }
        }
        @media (max-width: 700px) {
          .pricing-grid { grid-template-columns: 1fr; gap: 18px; }
          .pricing-card { max-width: 100%; }
        }
        @media (max-width: 600px) {
          .pricing-section { padding: 50px 0; overflow: hidden; }
          .pricing-header { margin-bottom: 32px; }
          .pricing-header h2 { font-size: 1.9rem; line-height: 1.3; margin-bottom: 14px; }
          .pricing-header p { font-size: 0.9rem; line-height: 1.7; }
          .pricing-grid { gap: 16px; }
          .pricing-card { border-radius: 18px; transform: scale(1) !important; }
          .pricing-card-header { padding: 24px 20px 20px; }
          .pricing-card-icon { margin-bottom: 12px; }
          .pricing-icon-img { width: 48px; height: 48px; }
          .pricing-badge { top: 12px; left: 12px; font-size: 0.65rem; padding: 3px 10px; }
          .pricing-plan-name { font-size: 1.4rem; }
          .pricing-plan-subtitle { font-size: 0.85rem; }
          .pricing-price { font-size: 1.9rem; }
          .pricing-period { font-size: 0.8rem; }
          .pricing-card-body { padding: 22px 20px; }
          .pricing-cta-btn { padding: 13px 18px; font-size: 0.85rem; }
          .pricing-ideal-for { font-size: 0.75rem; }
          .pricing-features { gap: 10px; }
          .pricing-feature { font-size: 0.84rem; line-height: 1.6; }
          .pricing-footer { margin-top: 28px; font-size: 0.8rem; padding: 0 10px; }
        }
        @media (max-width: 420px) {
          .pricing-section { padding: 40px 0; }
          .pricing-header { margin-bottom: 24px; }
          .pricing-header h2 { font-size: 1.6rem; line-height: 1.35; }
          .pricing-header p { font-size: 0.85rem; line-height: 1.6; }
          .pricing-grid { gap: 14px; }
          .pricing-card { border-radius: 16px; transform: scale(1) !important; }
          .pricing-card-header { padding: 20px 16px 18px; }
          .pricing-card-icon { margin-bottom: 10px; }
          .pricing-icon-img { width: 44px; height: 44px; }
          .pricing-badge { top: 10px; left: 10px; font-size: 0.6rem; padding: 2px 8px; }
          .pricing-plan-name { font-size: 1.2rem; }
          .pricing-plan-subtitle { font-size: 0.8rem; line-height: 1.5; }
          .pricing-price { font-size: 1.6rem; }
          .pricing-period { font-size: 0.75rem; }
          .pricing-card-body { padding: 18px 16px; }
          .pricing-ideal-for { font-size: 0.7rem; }
          .pricing-cta-btn { padding: 12px 14px; font-size: 0.82rem; }
          .pricing-features { gap: 8px; }
          .pricing-feature { font-size: 0.8rem; line-height: 1.5; gap: 8px; }
          .pricing-footer { margin-top: 24px; font-size: 0.75rem; line-height: 1.5; }
        }
      `}</style>
    </section>
  );
}
