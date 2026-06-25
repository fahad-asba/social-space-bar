'use client';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Check, ChevronDown, Home, Mail } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';
import CalendlyInlineWidget from './CalendlyInlineWidget';

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } } };

export default function ThankYouHero() {
  return (
    <section className="ty-hero">
      <ParticlesBackground particleCount={60} speed={0.25} />
      <div className="ty-hero-glow-1" />
      <div className="ty-hero-glow-2" />
      <div className="ty-hero-glow-3" />

      <motion.div className="container ty-hero-inner" variants={stagger} initial="hidden" animate="visible">
        <motion.div className="ty-success-badge" variants={fadeUp}>
          <span className="ty-badge-dot" />
          <span>Submission Confirmed</span>
        </motion.div>

        <motion.div className="ty-check-ring" variants={fadeUp}>
          <div className="ty-check-outer">
            <div className="ty-check-inner">
              <Check size={36} strokeWidth={2.5} />
            </div>
          </div>
        </motion.div>

        <motion.h1 className="ty-hero-heading" variants={fadeUp}>
          Thank You For{' '}
          <span className="gradient-text">Reaching Out!</span>
        </motion.h1>

        <motion.p className="ty-hero-sub" variants={fadeUp}>
          We&apos;ve received your request and a marketing specialist will contact you within{' '}
          <strong style={{ color: 'var(--gold)', fontWeight: 700 }}>24 hours</strong>.
        </motion.p>

        <motion.div className="ty-hero-actions" variants={fadeUp}>
          <Link href="/" className="btn-primary">
            <Home size={16} /> Back To Home
          </Link>
          <a href="mailto:kyle@socialspacebar.com" className="btn-outline">
            <Mail size={16} /> Contact Support
          </a>
        </motion.div>

        <motion.div className="ty-scroll-hint" variants={fadeUp}>
          <span>See what happens next</span>
          <ChevronDown size={16} />
        </motion.div>

        <motion.div id="consultation" className="ty-calendly-wrap" variants={fadeUp}>
          <CalendlyInlineWidget />
        </motion.div>
      </motion.div>
    </section>
  );
}
