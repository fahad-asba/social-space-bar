'use client';
import Image from 'next/image';
import { books, newBooks } from '@/data/portfolio';
import ArrowIcon from '@/components/ui/ArrowIcon';
import SectionHeader from '@/components/ui/SectionHeader';
import PhoneLink from '@/components/ui/PhoneLink';
import { useModal } from './ModalProvider';

export default function Portfolio() {
  const { openModal } = useModal();
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container portfolio-header">
        <SectionHeader label="Our Work" headingStyle={{ marginBottom: '16px' }} descriptionClass="portfolio-desc" description="Brands we&apos;ve helped grow across social media platforms with data-driven marketing campaigns.">
          Featured <span className="accent">Portfolio</span>
        </SectionHeader>
      </div>

      <div className="portfolio-marquee">
        <div className="portfolio-marquee-fade-left" />
        <div className="portfolio-marquee-fade-right" />
        <div className="portfolio-track">
          {[...books, ...books].map((src, i) => (
            <div key={i} className="portfolio-marquee-book">
              <Image src={src} alt={`Portfolio ${i + 1}`} fill style={{ objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </div>

      <div className="portfolio-marquee portfolio-marquee-reverse">
        <div className="portfolio-marquee-fade-left" />
        <div className="portfolio-marquee-fade-right" />
        <div className="portfolio-track portfolio-track-reverse">
          {[...newBooks, ...newBooks].map((src, i) => (
            <div key={i} className="portfolio-marquee-book">
              <Image src={src} alt={`Portfolio ${i + 1}`} fill style={{ objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </div>

      <div className="portfolio-marquee portfolio-marquee-pulse">
        <div className="portfolio-marquee-fade-left" />
        <div className="portfolio-marquee-fade-right" />
        <div className="portfolio-track portfolio-track-pulse">
          {[...books, ...newBooks, ...books, ...newBooks].map((src, i) => (
            <div key={i} className="portfolio-marquee-book">
              <Image src={src} alt={`Portfolio ${i + 1}`} fill style={{ objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </div>

      <div className="portfolio-cta">
        <button type="button" onClick={openModal} className="btn-primary">
          Get Started Today <ArrowIcon />
        </button>
        <PhoneLink className="btn-ghost" label="Call Now" iconSize={16} />
      </div>

      <style>{`
        .portfolio-section {
          padding: 100px 0; background: var(--section-gradient);
          overflow: hidden; transition: background 0.3s ease;
        }
        .portfolio-header { margin-bottom: 60px; text-align: center; }
        .portfolio-desc { color: var(--foreground-muted); max-width: 540px; margin: 0 auto; line-height: 1.75; }
        .portfolio-marquee { position: relative; overflow: hidden; margin-bottom: 24px; }
        .portfolio-marquee + .portfolio-marquee { margin-top: 24px; }
        .portfolio-marquee-fade-left {
          position: absolute; top: 0; left: 0; bottom: 0; width: 120px;
          background: linear-gradient(90deg, var(--background-secondary), transparent);
          z-index: 2; pointer-events: none;
        }
        .portfolio-marquee-fade-right {
          position: absolute; top: 0; right: 0; bottom: 0; width: 120px;
          background: linear-gradient(-90deg, var(--background-secondary), transparent);
          z-index: 2; pointer-events: none;
        }
        .portfolio-track { display: flex; gap: 24px; animation: marquee 25s linear infinite; width: max-content; }
        .portfolio-track-reverse { animation: marquee-reverse 25s linear infinite; }
        .portfolio-track-pulse { display: flex; gap: 24px; animation: marquee-pulse 30s ease-in-out infinite; width: max-content; }
        .portfolio-marquee-book {
          flex-shrink: 0; width: 260px; height: 340px; border-radius: 12px;
          overflow: hidden; border: 1px solid var(--border);
          transition: all 0.3s; position: relative;
        }
        .portfolio-marquee-book:hover { transform: scale(1.05) translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.4); z-index: 10; }
        .portfolio-cta { display: flex; justify-content: center; gap: 16px; margin-top: 56px; flex-wrap: wrap; }

        @keyframes marquee-pulse {
          0% { transform: translateX(0); }
          25% { transform: translateX(-25%); }
          35% { transform: translateX(-25%); }
          60% { transform: translateX(-50%); }
          70% { transform: translateX(-50%); }
          100% { transform: translateX(-75%); }
        }

        @media (max-width: 1024px) {
          .portfolio-section { padding: 80px 0; }
          .portfolio-marquee-fade-left, .portfolio-marquee-fade-right { width: 80px; }
          .portfolio-marquee-book { width: 220px; height: 290px; }
        }
        @media (max-width: 900px) {
          .portfolio-section { padding: 65px 0; }
          .portfolio-marquee-fade-left, .portfolio-marquee-fade-right { width: 60px; }
        }
        @media (max-width: 600px) {
          .portfolio-section { padding: 50px 0; }
          .portfolio-marquee-book { width: 160px; height: 210px; }
          .portfolio-marquee-fade-left, .portfolio-marquee-fade-right { width: 35px; }
          .portfolio-track { gap: 16px; }
          .portfolio-track-pulse { gap: 16px; }
          .portfolio-cta { flex-direction: column; align-items: center; gap: 12px; }
          .portfolio-cta a, .portfolio-cta button { width: 100%; max-width: 300px; justify-content: center; box-sizing: border-box; }
        }
        @media (max-width: 420px) {
          .portfolio-section { padding: 40px 0; }
          .portfolio-marquee-book { width: 120px; height: 160px; }
        }
      `}</style>
    </section>
  );
}
