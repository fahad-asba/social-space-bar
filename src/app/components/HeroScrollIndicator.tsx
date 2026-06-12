'use client';
import Image from 'next/image';
import { ArrowUp } from 'lucide-react';

export default function HeroScrollIndicator() {
  return (
    <div className="hero-rotate-circle">
      <div className="rotate-wrap">
        <Image
          src="/h3-circle-img-1.webp"
          alt=""
          width={160}
          height={160}
          className="rotate-img"
        />
        <div className="rotate-arrow-center">
          <ArrowUp size={32} strokeWidth={2.5} />
        </div>
      </div>

      <style>{`
        .hero-rotate-circle {
          position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%);
          z-index: 5;
        }
        .rotate-wrap {
          position: relative; width: 120px; height: 120px;
          display: flex; align-items: center; justify-content: center;
        }
        .rotate-img {
          object-fit: contain; width: 100%; height: 100%;
          animation: spin-slow 8s linear infinite;
        }
        .rotate-arrow-center {
          position: absolute; inset: 0; display: flex;
          align-items: center; justify-content: center;
          color: #66C7C0; pointer-events: none;
        }

        @media (max-width: 768px) {
          .hero-rotate-circle { bottom: 24px; }
          .rotate-wrap { width: 90px; height: 90px; }
          .rotate-arrow-center svg { width: 24px; height: 24px; }
        }
        @media (max-width: 600px) {
          .hero-rotate-circle {
            position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%);
            z-index: 999;
          }
          .rotate-wrap { width: 70px; height: 70px; }
          .rotate-arrow-center svg { width: 20px; height: 20px; }
        }
      `}</style>
    </div>
  );
}
