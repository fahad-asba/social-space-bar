'use client';
import Image from 'next/image';
import { MessageCircle, Phone, CalendarDays } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import FadeInView from '@/components/ui/FadeInView';
import { useModal } from './ModalProvider';
import { copyPhoneNumber } from './PhoneLinkEnhancer';

const platforms = [
  { name: 'Facebook', src: '/facebook_icon.webp', w: 100, h: 100 },
  { name: 'Instagram', src: '/Instagram_icon.webp', w: 100, h: 100 },
  { name: 'Pinterest', src: '/pintrest-logo.png', w: 100, h: 100 },
  { name: 'YouTube', src: '/Youtube_logo.webp', w: 120, h: 80 },
  { name: 'LinkedIn', src: '/linkdein_icon.webp', w: 100, h: 100 },
  { name: 'TikTok', src: '/tiktok_icon.webp', w: 100, h: 100 },
  { name: 'X (Twitter)', src: '/twitter-x_icon.webp', w: 100, h: 100 },
];

export default function SocialMediaPlatforms() {
  const { openModal, openScheduleModal, openLiveChat } = useModal();
  const handleLiveChat = () => {
    if (window.innerWidth <= 600) { copyPhoneNumber(); }
    else { openLiveChat(); }
  };
  return (
    <section className="smp-section">
      <div className="smp-glow" />
      <div className="container">
        <div className="smp-header">
          <SectionHeader label="Platforms We Master" className="section-label-teal" description="We dominate every major social channel to put your brand in front of the right audience at the right time." descriptionClass="smp-desc" headingStyle={{ marginBottom: '16px' }}>
            Social Media <span className="accent-teal">Platforms</span>
          </SectionHeader>
        </div>

        <div className="smp-marquee-wrap">
          <div className="smp-marquee-track">
            {[...platforms, ...platforms].map((p, i) => (
              <div key={`${p.name}-${i}`} className="smp-card">
                <div className="smp-card-inner">
                  <div className="smp-logo-wrap">
                    <Image src={p.src} alt={p.name} width={p.w} height={p.h} className="smp-logo" loading="lazy" />
                  </div>
                  <span className="smp-name">{p.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <FadeInView className="smp-cta" y={20} duration={0.5} delay={0.6} margin="-30px">
          <div className="smp-cta-buttons">
            <button type="button" onClick={openModal} className="btn-teal">
              Get Your Social Strategy
            </button>
            <button type="button" onClick={handleLiveChat} className="btn-outline smp-chat-btn">
              <MessageCircle size={16} className="smp-chat-icon" />
              <Phone size={16} className="smp-call-icon" />
              <span className="smp-chat-text">Live Chat</span>
              <span className="smp-call-text">Call Now</span>
            </button>
            <button type="button" onClick={openScheduleModal} className="btn-outline">
              <CalendarDays size={16} />
              Schedule Appointment
            </button>
          </div>
        </FadeInView>
      </div>

      <style>{`
        .smp-section {
          padding: 100px 0; background: var(--background);
          position: relative; overflow: hidden; transition: background 0.3s ease;
        }
        .smp-glow {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
          width: 700px; height: 400px;
          background: radial-gradient(ellipse, rgba(0,198,185,0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .smp-header { text-align: center; margin-bottom: 56px; }
        .smp-desc { color: var(--foreground-muted); max-width: 520px; margin: 0 auto; line-height: 1.75; }
        .smp-marquee-wrap {
          display: flex; white-space: nowrap; overflow: hidden; position: relative;
          mask-image: linear-gradient(90deg, transparent 0%, #000 5%, #000 95%, transparent 100%);
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 5%, #000 95%, transparent 100%);
        }
        .smp-marquee-track {
          display: flex; align-items: center; gap: 20px;
          animation: smp-marquee 40s linear infinite;
          flex-shrink: 0;
        }
        .smp-card {
          background: var(--card-bg); border: 1px solid var(--border);
          border-radius: 20px; padding: 28px 20px; cursor: pointer;
          transition: all 0.3s ease; position: relative; overflow: hidden;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; min-width: 140px;
        }
        .smp-card::before {
          content: ''; position: absolute; inset: 0; opacity: 0;
          background: linear-gradient(135deg, rgba(0,198,185,0.06), rgba(0,198,185,0.02));
          transition: opacity 0.3s ease;
        }
        .smp-card:hover { border-color: rgba(0,198,185,0.3); box-shadow: 0 8px 30px rgba(0,198,185,0.1); }
        .smp-card:hover::before { opacity: 1; }
        .smp-card-inner {
          display: flex; flex-direction: column; align-items: center; gap: 16px;
          position: relative; z-index: 1;
        }
        .smp-logo-wrap {
          width: 64px; height: 64px; display: flex; align-items: center;
          justify-content: center; transition: transform 0.3s ease;
        }
        .smp-card:hover .smp-logo-wrap { transform: scale(1.1); }
        .smp-logo { object-fit: contain; max-width: 100%; max-height: 100%; }
        .smp-name {
          font-size: 0.78rem; font-weight: 600; color: var(--foreground-muted);
          letter-spacing: 0.02em; text-align: center; white-space: nowrap;
        }
        .smp-card:hover .smp-name { color: var(--teal); }
        @keyframes smp-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .smp-cta { margin-top: 48px; }
        .smp-cta-buttons { display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; }
        .smp-chat-icon { display: inline; }
        .smp-call-icon { display: none; }
        .smp-chat-text { display: inline; }
        .smp-call-text { display: none; }

        @media (max-width: 900px) {
          .smp-section { padding: 65px 0; }
          .smp-marquee-track { gap: 14px; animation-duration: 30s; }
          .smp-card { padding: 22px 16px; min-width: 120px; }
        }
        @media (max-width: 600px) {
          .smp-section { padding: 50px 0; }
          .smp-header h2 { font-size: 1.9rem; }
          .smp-desc { font-size: 0.92rem; }
          .smp-marquee-track { gap: 12px; animation-duration: 25s; }
          .smp-card { padding: 18px 12px; border-radius: 16px; min-width: 100px; }
          .smp-logo-wrap { width: 48px; height: 48px; }
          .smp-name { font-size: 0.7rem; }
          .smp-cta { margin-top: 32px; }
          .smp-chat-icon { display: none; }
          .smp-call-icon { display: inline; }
          .smp-chat-text { display: none; }
          .smp-call-text { display: inline; }
          .smp-cta-buttons { flex-direction: column; align-items: center; width: 100%; }
          .smp-cta-buttons a, .smp-cta-buttons button { width: 100%; max-width: 300px; justify-content: center; }
        }
        @media (max-width: 420px) {
          .smp-section { padding: 40px 0; }
          .smp-card { padding: 14px 10px; min-width: 85px; }
          .smp-logo-wrap { width: 40px; height: 40px; }
        }
      `}</style>
    </section>
  );
}
