'use client';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { services } from '@/data/services';
import ArrowIcon from '@/components/ui/ArrowIcon';
import SectionHeader from '@/components/ui/SectionHeader';
import PhoneLink from '@/components/ui/PhoneLink';
import { useModal } from './ModalProvider';

export default function Services() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const { openModal } = useModal();

  return (
    <section id="services" className="services-section">
      <div className="services-glow" />
      <div className="services-grid-bg" />

      <div className="container">
        <div className="services-header">
          <SectionHeader label="Precision in Every Pixel">
            Drive Real Results with Our Targeted{' '}
            <span className="accent">Social Media Services</span>
          </SectionHeader>
        </div>

        <div className="services-carousel-outer">
          <button
            onClick={() => swiperInstance?.slidePrev()}
            className="services-nav services-nav-left"
            aria-label="Previous service"
          >
            <ChevronLeft size={20} />
          </button>

          <Swiper
            modules={[Autoplay, EffectCoverflow]}
            effect="coverflow"
            centeredSlides
            loop
            speed={800}
            grabCursor
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            onSwiper={setSwiperInstance}
            coverflowEffect={{
              rotate: 15,
              stretch: 0,
              depth: 40,
              modifier: 1,
              slideShadows: false,
            }}
            slidesPerView="auto"
            className="services-swiper"
            breakpoints={{
              769: { slidesPerView: 'auto' as const },
              0: {
                slidesPerView: 1,
                spaceBetween: 0,
                centeredSlides: true,
                coverflowEffect: { rotate: 0, stretch: 0, depth: 0, modifier: 1, slideShadows: false },
              },
            }}
          >
            {services.map((svc) => (
              <SwiperSlide key={svc.id} className="services-slide">
                <div className="service-card" style={{ borderTop: `4px solid ${svc.color}` }}>
                  <div className="service-card-image">
                    <Image
                      src={svc.img}
                      alt={svc.title}
                      fill
                      sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 420px"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="service-card-content">
                    <h3 className="service-card-title">{svc.title}</h3>
                    <p className="service-card-desc">{svc.desc}</p>
                    <a href="#contact" className="service-card-cta">
                      Learn More <ArrowIcon />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            onClick={() => swiperInstance?.slideNext()}
            className="services-nav services-nav-right"
            aria-label="Next service"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="services-cta">
          <button type="button" onClick={openModal} className="btn-primary">
            Get Started Today <ArrowIcon />
          </button>
          <PhoneLink className="btn-ghost" iconSize={16} />
        </div>
      </div>

      <style>{`
        .services-section {
          padding: 100px 0; background: var(--section-gradient);
          position: relative; transition: background 0.3s ease;
        }
        .services-glow {
          position: absolute; top: 50%; left: -200px;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%);
          border-radius: 50%; transform: translateY(-50%); pointer-events: none;
        }
        .services-grid-bg {
          position: absolute; inset: 0; opacity: 0.02; pointer-events: none;
          background-image: linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .services-header { text-align: center; margin-bottom: 56px; }

        .services-carousel-outer {
          position: relative; padding: 0 52px;
        }
        .services-swiper {
          overflow: visible !important; padding: 20px 0;
        }
        .services-slide {
          width: 420px !important; height: auto !important; margin-right: 24px !important;
        }

        .services-nav {
          position: absolute; top: 50%; transform: translateY(-50%); z-index: 10;
          width: 44px; height: 44px; border-radius: 50%; border: 1px solid var(--border);
          background: var(--card-bg); backdrop-filter: blur(12px); cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          color: var(--foreground); transition: all 0.3s ease;
          box-shadow: var(--shadow-md);
        }
        .services-nav:hover { background: #66C7C0; color: #fff; border-color: #66C7C0; }
        .services-nav.swiper-button-disabled { opacity: 0.3; cursor: not-allowed; }
        .services-nav-left { left: 0; }
        .services-nav-right { right: 0; }

        .service-card {
          background: var(--card-bg); border: 1px solid var(--border);
          border-radius: 20px; overflow: hidden;
          transition: all 0.4s ease; box-shadow: var(--shadow-md);
          height: 100%; display: flex; flex-direction: column;
        }
        .service-card:hover { box-shadow: var(--shadow-xl); transform: translateY(-4px); cursor: pointer; }
        .service-card-image {
          position: relative; width: 100%; height: 200px; overflow: hidden; flex-shrink: 0;
        }
        .service-card-image img { transition: transform 0.6s ease; }
        .service-card:hover .service-card-image img { transform: scale(1.08); }
        .service-card-content {
          padding: 24px; flex: 1; display: flex; flex-direction: column;
          background: var(--card-bg);
        }
        .service-card-title {
          font-family: var(--font-display); font-size: 1.15rem;
          font-weight: 700; color: var(--foreground); margin-bottom: 8px; line-height: 1.3;
        }
        .service-card-desc {
          font-size: 0.85rem; color: var(--foreground-muted);
          line-height: 1.7; flex: 1; margin-bottom: 16px;
        }
        .service-card-cta {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 0.85rem; font-weight: 600; color: #66C7C0; text-decoration: none;
          transition: gap 0.3s; flex-shrink: 0;
        }
        .service-card-cta:hover { gap: 10px; }

        .services-cta { display: flex; justify-content: center; gap: 16px; margin-top: 48px; flex-wrap: wrap; }

        @media (max-width: 1024px) {
          .services-section { padding: 80px 0; }
          .services-header { margin-bottom: 48px; }
          .services-slide { width: 360px !important; }
        }
        @media (max-width: 900px) {
          .services-section { padding: 65px 0; }
          .services-header { margin-bottom: 42px; }
          .services-slide { width: 320px !important; }
          .service-card-image { height: 170px; }
          .services-carousel-outer { padding: 0 44px; }
        }
        @media (max-width: 768px) {
          .services-nav { width: 40px; height: 40px; }
          .services-carousel-outer { padding: 0 0; overflow: hidden; }
          .services-nav-left { left: 12px; }
          .services-nav-right { right: 12px; }
          .services-swiper { overflow: hidden !important; }
          .services-slide { width: 100% !important; margin-right: 0 !important; }
        }
        @media (max-width: 600px) {
          .services-section { padding: 50px 0; }
          .services-header { margin-bottom: 32px; }
          .services-header h2 { font-size: 1.9rem; }
          .services-slide { width: 100% !important; margin-right: 0 !important; }
          .services-swiper { overflow: hidden !important; }
          .service-card-image { height: 150px; }
          .service-card-content { padding: 18px; }
          .service-card-title { font-size: 1rem; }
          .service-card-desc { font-size: 0.82rem; }
          .services-cta { flex-direction: column; align-items: center; margin-top: 32px; }
          .services-cta a { width: 100%; max-width: 300px; justify-content: center; }
        }
        @media (max-width: 480px) {
          .services-nav { width: 36px; height: 36px; }
          .services-nav-left { left: 10px; }
          .services-nav-right { right: 10px; }
          .service-card-image { height: 130px; }
          .service-card-content { padding: 14px; }
        }
      `}</style>
    </section>
  );
}
