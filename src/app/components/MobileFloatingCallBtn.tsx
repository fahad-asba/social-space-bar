'use client';
import { Phone } from 'lucide-react';

export default function MobileFloatingCallBtn() {
  return (
    <>
      <a href="tel:+12104938277" className="float-call-btn" aria-label="Call us">
        <Phone size={20} />
        <span>Call Now</span>
      </a>

      <style>{`
        .float-call-btn {
          display: none; position: fixed; bottom: 24px; right: 24px; z-index: 9999;
          align-items: center; gap: 10px;
          padding: 14px 24px;
          background: #66C7C0;
          color: #fff; font-weight: 700; font-size: 0.9rem;
          border: none; border-radius: 50px; text-decoration: none;
          box-shadow: 0 4px 24px rgba(102, 199, 192, 0.4);
          animation: pulse-teal 2.5s ease-in-out infinite;
          transition: all 0.3s ease;
        }
        .float-call-btn:hover {
          background: #4db8b0;
          transform: translateY(-3px);
          box-shadow: 0 8px 32px rgba(102, 199, 192, 0.55);
        }

        @media (max-width: 767px) {
          .float-call-btn { display: flex; }
        }
        @media (max-width: 480px) {
          .float-call-btn {
            bottom: 16px; right: 16px;
            padding: 12px 18px; font-size: 0.82rem;
          }
        }
      `}</style>
    </>
  );
}
