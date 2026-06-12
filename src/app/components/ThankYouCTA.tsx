'use client';
import { motion } from 'motion/react';
import { Home } from 'lucide-react';
import Link from 'next/link';
import PhoneLink from '@/components/ui/PhoneLink';

export default function ThankYouCTA() {
  return (
    <section className="ty-cta-section">
      <div className="ty-cta-glow-left" />
      <div className="ty-cta-glow-right" />
      <div className="container ty-cta-inner">
        <motion.div
          className="ty-cta-card glass-card-premium"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="ty-cta-topbar" />
          <motion.h2
            className="ty-cta-heading"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Ready To Start Your <span className="gold">Journey?</span>
          </motion.h2>
          <motion.p
            className="ty-cta-desc"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            Our team is standing by to help you achieve market dominance.
          </motion.p>
          <motion.div
            className="ty-cta-actions"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <Link href="/" className="btn-primary">
              <Home size={16} /> Back To Home
            </Link>
            <PhoneLink className="btn-outline" label="Call Now" iconSize={16} />
          </motion.div>
        </motion.div>

        <motion.div
          className="ty-seo-links"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="ty-seo-links-label">Explore Our Services</p>
          <div className="ty-seo-links-row">
            <a href="https://socialspacebar.com/services/facebook-marketing/" target="_blank" rel="noopener noreferrer">Facebook Marketing</a>
            <a href="https://socialspacebar.com/services/instagram-marketing/" target="_blank" rel="noopener noreferrer">Instagram Marketing</a>
            <a href="https://socialspacebar.com/services/linkedin-marketing/" target="_blank" rel="noopener noreferrer">LinkedIn Marketing</a>
            <a href="https://socialspacebar.com/services/twitter-marketing/" target="_blank" rel="noopener noreferrer">Twitter Marketing</a>
            <a href="https://socialspacebar.com/services/youtube-marketing/" target="_blank" rel="noopener noreferrer">YouTube Marketing</a>
            <a href="https://socialspacebar.com/services/tiktok-marketing/" target="_blank" rel="noopener noreferrer">TikTok Marketing</a>
            <a href="https://socialspacebar.com/portfolio/" target="_blank" rel="noopener noreferrer">Our Portfolio</a>
            <a href="https://socialspacebar.com/contact-us/" target="_blank" rel="noopener noreferrer">Contact Us</a>
          </div>
        </motion.div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'Thank You - Social Space Bar',
              description: 'Thank you page confirming submission of a social media marketing consultation request.',
              url: 'https://socialspacebar.com/thank-you',
              about: { '@type': 'Service', name: 'Social Media Marketing Services', provider: { '@type': 'Organization', name: 'Social Space Bar', url: 'https://socialspacebar.com' } },
            }),
          }}
        />
      </div>
    </section>
  );
}
