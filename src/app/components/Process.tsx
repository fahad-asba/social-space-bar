'use client';
import { motion } from 'motion/react';
import { Search, ClipboardCheck, Users, BarChart3, Rocket, Star } from 'lucide-react';
import ArrowIcon from '@/components/ui/ArrowIcon';
import SectionHeader from '@/components/ui/SectionHeader';
import FadeInView from '@/components/ui/FadeInView';

const processSteps = [
  {
    icon: <Search size={24} />,
    step: 'Step 1',
    title: 'Discovery Call',
    desc: 'We learn about your brand, goals, and target audience to craft the perfect strategy.',
  },
  {
    icon: <ClipboardCheck size={24} />,
    step: 'Step 2',
    title: 'Strategy Development',
    desc: 'Our team builds a custom marketing plan tailored to your brand&apos;s unique needs.',
  },
  {
    icon: <Users size={24} />,
    step: 'Step 3',
    title: 'Campaign Launch',
    desc: 'We execute your campaign across all relevant platforms and channels.',
  },
  {
    icon: <BarChart3 size={24} />,
    step: 'Step 4',
    title: 'Monitoring & Optimization',
    desc: 'Real-time tracking and adjustments ensure maximum ROI for your campaign.',
  },
  {
    icon: <Rocket size={24} />,
    step: 'Step 5',
    title: 'Growth & Scaling',
    desc: 'We scale what works, expanding your reach and driving more engagement.',
  },
  {
    icon: <Star size={24} />,
    step: 'Step 6',
    title: 'Dominate Market',
    desc: 'Achieve sustained visibility, engagement, and ongoing brand growth.',
  },
];

export default function Process() {
  return (
    <section className="process-section">
      <div className="process-glow" />
      <div className="container">
        <div className="process-header">
          <SectionHeader label="How It Works">
            Your Path To <span className="accent">Market</span><br />Dominance
          </SectionHeader>
          <p className="process-desc">
            A proven 6-step process that takes your brand from obscurity to industry leader.
          </p>
        </div>

        <div className="process-timeline">
          {processSteps.map((step, i) => (
            <FadeInView key={step.step} className="process-step" y={40} duration={0.5} delay={i * 0.1}>
              <div className="process-step-connector">
                {i < processSteps.length - 1 && <div className="process-connector-line" />}
              </div>
              <motion.div
                className="process-step-card"
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <div className="process-step-number">{i + 1}</div>
                <motion.div
                  className="process-step-icon"
                  whileHover={{ scale: 1.15, rotate: 10 }}
                >
                  {step.icon}
                </motion.div>
                <div className="process-step-label">{step.step}</div>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-desc">{step.desc}</p>
              </motion.div>
            </FadeInView>
          ))}
        </div>

        <FadeInView className="process-cta" y={20} delay={0.4} margin="-30px">
          <a href="#contact" className="btn-primary">
            Start Your Journey <ArrowIcon />
          </a>
        </FadeInView>
      </div>

      <style>{`
        .process-section {
          padding: 100px 0; background: var(--background);
          position: relative; overflow: hidden; transition: background 0.3s ease;
        }
        .process-glow {
          position: absolute; top: 50%; left: -200px; transform: translateY(-50%);
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%);
          border-radius: 50%; pointer-events: none;
        }
        .process-header { text-align: center; margin-bottom: 64px; }
        .process-desc { color: var(--foreground-muted); max-width: 540px; margin: 0 auto; line-height: 1.75; font-size: 1rem; }
        .process-timeline {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
          position: relative; max-width: 900px; margin: 0 auto;
        }
        .process-step { position: relative; }
        .process-step-connector {
          position: absolute; top: 36px; right: -12px; left: calc(100% + 12px);
          height: 2px; z-index: 1; display: none;
        }
        .process-connector-line {
          height: 100%; background: linear-gradient(90deg, rgba(102,199,192,0.3), rgba(102,199,192,0.6));
          border-radius: 1px;
        }
        .process-step:nth-child(3n) .process-step-connector { display: none; }
        .process-step-card {
          padding: 32px 24px; text-align: center; position: relative;
          background: var(--card-bg); border: 1px solid var(--border);
          border-radius: 20px; transition: all 0.3s ease; height: 100%;
        }
        .process-step-card:hover { border-color: rgba(102,199,192,0.3); box-shadow: var(--shadow-lg); cursor: pointer; }
        .process-step-number {
          position: absolute; top: 12px; right: 12px;
          width: 28px; height: 28px; border-radius: 50%;
          background: rgba(102,199,192,0.1); border: 1px solid rgba(102,199,192,0.25);
          display: flex; align-items: center; justify-content: center;
          font-size: 0.78rem; font-weight: 800; color: var(--gold);
        }
        .process-step-icon {
          width: 56px; height: 56px; margin: 0 auto 16px;
          border-radius: 16px; background: linear-gradient(135deg, rgba(102,199,192,0.12), rgba(102,199,192,0.04));
          border: 1px solid rgba(102,199,192,0.2); display: flex;
          align-items: center; justify-content: center; color: var(--gold);
          transition: all 0.3s ease;
        }
        .process-step-card:hover .process-step-icon { background: linear-gradient(135deg, rgba(102,199,192,0.2), rgba(102,199,192,0.08)); box-shadow: 0 8px 20px rgba(102,199,192,0.15); }
        .process-step-label {
          font-size: 0.7rem; font-weight: 700; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--gold); margin-bottom: 8px;
        }
        .process-step-title { font-family: var(--font-display); font-size: 1.05rem; font-weight: 700; color: var(--foreground); margin-bottom: 8px; }
        .process-step-desc { font-size: 0.84rem; color: var(--foreground-muted); line-height: 1.65; }
        .process-cta { text-align: center; margin-top: 56px; }

        @media (min-width: 901px) {
          .process-step:nth-child(3n) .process-step-connector { display: none; }
          .process-step:not(:nth-child(3n)) .process-step-connector { display: block; }
        }
        @media (max-width: 900px) {
          .process-section { padding: 70px 0; }
          .process-timeline { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .process-step-connector { display: none; }
          .process-step:nth-child(odd):not(:last-child) .process-step-connector { display: block; right: -10px; left: calc(100% + 10px); }
          .process-step:nth-child(even) .process-step-connector { display: none; }
        }
        @media (max-width: 600px) {
          .process-section { padding: 50px 0; }
          .process-header h2 br { display: none; }
          .process-header h2 { font-size: 2rem; }
          .process-header p { font-size: 0.92rem; }
          .process-timeline { grid-template-columns: 1fr; gap: 16px; max-width: 100%; }
          .process-step-card { padding: 28px 20px; }
          .process-step-title { font-size: 1rem; }
          .process-cta { margin-top: 36px; }
          .process-step-connector { display: none !important; }
        }
        @media (max-width: 420px) {
          .process-section { padding: 40px 0; }
          .process-header h2 { font-size: 1.7rem; }
          .process-step-card { padding: 24px 16px; border-radius: 16px; }
        }
      `}</style>
    </section>
  );
}
