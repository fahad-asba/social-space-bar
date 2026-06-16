'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MessageCircle, Phone } from 'lucide-react';
import ArrowIcon from '@/components/ui/ArrowIcon';
import SectionHeader from '@/components/ui/SectionHeader';
import FadeInView from '@/components/ui/FadeInView';
import { useModal } from './ModalProvider';

const faqs = [
  {
    q: 'How long does it take to see results from social media marketing?',
    a: 'Most brands see noticeable improvement in engagement and followers within the first 4–6 weeks of a campaign. However, results vary based on your industry, current visibility, and the marketing package selected.',
  },
  {
    q: 'Which social media platforms do you market on?',
    a: 'We market across Facebook, Instagram, LinkedIn, Pinterest, X (Twitter), YouTube, TikTok, and emerging platforms. Our team selects the best channels based on your brand\'s target audience and goals.',
  },
  {
    q: 'Do you offer paid ad management services?',
    a: 'Yes. Paid social advertising is a core part of our service. We create and manage ad campaigns on Facebook Ads, Instagram Ads, LinkedIn Ads, Pinterest Ads, TikTok Ads, and YouTube Ads to maximize ROI.',
  },
  {
    q: 'Can you help with content creation?',
    a: 'Absolutely. Our content creation services include graphic design, short-form video production, copywriting, and brand storytelling - all tailored to your brand\'s voice and audience.',
  },
  {
    q: 'What information do you need to get started?',
    a: 'We need your brand details, target audience information, current social media accounts, and your marketing goals. We\'ll handle the rest.',
  },
  {
    q: 'Do you offer a satisfaction guarantee?',
    a: 'Yes, we stand behind our work. If you\'re not satisfied with the strategy within the first 30 days, we\'ll revise it at no extra cost. Our track record speaks for itself with a 98% satisfaction rate.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { openModal, openLiveChat } = useModal();

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="faq-section">
      <div className="faq-glow" />
      <div className="container">
        <div className="faq-header">
          <SectionHeader label="FAQ" description="Everything you need to know about our social media marketing services." descriptionClass="faq-desc">
            Frequently Asked <span className="accent">Questions</span>
          </SectionHeader>
        </div>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <FadeInView
              key={i}
              className={`faq-item ${openIndex === i ? 'faq-item-open' : ''}`}
              y={20}
              duration={0.4}
              delay={i * 0.06}
              margin="-30px"
            >
              <button className="faq-question" onClick={() => toggle(i)}>
                <span>{faq.q}</span>
                <motion.div
                  className="faq-chevron"
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={18} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <p>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </FadeInView>
          ))}
        </div>

        <div className="faq-cta">
          <p>Still have questions?</p>
          <div className="faq-cta-buttons">
            <button type="button" onClick={openModal} className="btn-primary">
              Contact Us <ArrowIcon />
            </button>
            <button type="button" onClick={openLiveChat} className="btn-outline faq-chat-btn">
              <MessageCircle size={16} className="faq-chat-icon" />
              <Phone size={16} className="faq-call-icon" />
              <span className="faq-chat-text">Live Chat</span>
              <span className="faq-call-text">Call Now</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .faq-section {
          padding: 100px 0; background: var(--section-gradient);
          position: relative; overflow: hidden; transition: background 0.3s ease;
        }
        .faq-glow {
          position: absolute; top: -100px; right: -100px;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(102,199,192,0.05) 0%, transparent 70%);
          border-radius: 50%; pointer-events: none;
        }
        .faq-header { text-align: center; margin-bottom: 56px; }
        .faq-desc { color: var(--foreground-muted); max-width: 480px; margin: 0 auto; line-height: 1.75; }
        .faq-list { max-width: 720px; margin: 0 auto; display: flex; flex-direction: column; gap: 12px; }
        .faq-item {
          background: var(--card-bg); border: 1px solid var(--border);
          border-radius: 16px; overflow: hidden; transition: all 0.3s ease;
        }
        .faq-item:hover { border-color: rgba(102,199,192,0.2); }
        .faq-item-open { border-color: rgba(102,199,192,0.3); box-shadow: var(--shadow-md); }
        .faq-question {
          width: 100%; display: flex; align-items: center; justify-content: space-between;
          gap: 16px; padding: 20px 24px; background: none; border: none;
          cursor: pointer; color: var(--foreground); font-size: 0.95rem;
          font-weight: 600; text-align: left; font-family: inherit;
          transition: color 0.3s;
        }
        .faq-question:hover { color: var(--gold); }
        .faq-chevron { color: var(--gold); flex-shrink: 0; }
        .faq-answer { overflow: hidden; }
        .faq-answer p {
          padding: 0 24px 20px; margin: 0; font-size: 0.9rem;
          color: var(--foreground-muted); line-height: 1.75;
        }
        .faq-cta { text-align: center; margin-top: 48px; }
        .faq-cta p { color: var(--foreground-muted); margin-bottom: 20px; font-size: 0.95rem; }
        .faq-cta-buttons { display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; }
        .faq-chat-icon { display: inline; }
        .faq-call-icon { display: none; }
        .faq-chat-text { display: inline; }
        .faq-call-text { display: none; }

        @media (max-width: 900px) {
          .faq-section { padding: 70px 0; }
        }
        @media (max-width: 600px) {
          .faq-section { padding: 50px 0; }
          .faq-header h2 { font-size: 1.9rem; }
          .faq-question { padding: 16px 18px; font-size: 0.9rem; }
          .faq-answer p { padding: 0 18px 16px; font-size: 0.85rem; }
          .faq-chat-icon { display: none; }
          .faq-call-icon { display: inline; }
          .faq-chat-text { display: none; }
          .faq-call-text { display: inline; }
          .faq-cta-buttons { flex-direction: column; align-items: center; width: 100%; }
          .faq-cta-buttons a, .faq-cta-buttons button { width: 100%; max-width: 300px; justify-content: center; }
        }
        @media (max-width: 420px) {
          .faq-section { padding: 40px 0; }
          .faq-header h2 { font-size: 1.6rem; }
          .faq-question { padding: 14px 16px; font-size: 0.85rem; }
          .faq-answer p { padding: 0 16px 14px; font-size: 0.82rem; }
        }
      `}</style>
    </section>
  );
}
