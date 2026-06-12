'use client';
import ArrowIcon from '@/components/ui/ArrowIcon';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

interface HeroModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HeroModal({ isOpen, onClose }: HeroModalProps) {
  const router = useRouter();

  const [formLoading, setFormLoading] = useState(false);
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formLoading) return;
    setFormLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    data.set('phone', phone);

    try {
      await fetch('https://formsubmit.co/ajax/info@socialspacebar.com', {
        method: 'POST',
        body: data,
      });
      onClose();
      router.push('/thank-you');
    } catch {
      onClose();
      router.push('/thank-you');
    } finally {
      setFormLoading(false);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button
          type="button"
          onClick={onClose}
          className="modal-close-btn"
          aria-label="Close modal"
        >
          ×
        </button>

        <div className="modal-image-side">
          <div className="modal-glow-purple" />
          <div className="modal-glow-gold" />
          <div className="modal-tablet-wrap">
            <Image
              src="/social-media.webp"
              alt="3D Tablet"
              width={400}
              height={400}
              className="modal-tablet-img"
              sizes="(max-width: 900px) 0px, (max-width: 1100px) 280px, 340px"
              priority
            />
          </div>
          <div className="modal-brand">Social Space Bar</div>
        </div>

        <div className="modal-form-side">
          <div className="modal-top-bar" />

          {false ? (
            <div className="modal-success">
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🎉</div>
              <h3 className="modal-success-title">Thank You!</h3>
              <p className="modal-success-desc">We&apos;ll get back to you within 24 hours with your personalized plan.</p>
            </div>
          ) : (
            <>
              <div className="modal-badge">GET 30% OFF - Limited Time</div>

              <h2 className="modal-heading">Start Your Journey</h2>
              <p className="modal-subheading">Fill in your details and we&apos;ll create a custom social media marketing plan for your brand.</p>

              <form onSubmit={handleSubmit} className="modal-form">
                <input type="hidden" name="_captcha" value="false" />

                <input className="form-input" type="text" name="name" placeholder="Full Name *" required disabled={formLoading} />

                <input className="form-input" type="email" name="email" placeholder="Email Address *" required disabled={formLoading} />

                <div className="modal-phone-wrap">
                  <PhoneInput
                    value={phone}
                    onChange={(val) => setPhone(val)}
                    defaultCountry="us"
                    placeholder="Phone Number *"
                    inputClassName="modal-phone-input"
                    disabled={formLoading}
                    countrySelectorStyleProps={{
                      buttonClassName: 'modal-country-btn',
                      dropdownStyleProps: {
                        style: {
                          position: 'fixed',
                          zIndex: 99999,
                        },
                      },
                    }}
                  />
                </div>

                <textarea
                  className="form-input"
                  name="message"
                  placeholder="Your Message (optional)"
                  rows={3}
                />

                <button
                  type="submit"
                  disabled={formLoading}
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  {formLoading ? (
                    <>
                      <span className="modal-spinner" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Get Started
                      <ArrowIcon />
                    </>
                  )}
                </button>
              </form>

              <p className="modal-privacy">No spam. We respect your privacy.</p>
            </>
          )}
        </div>
      </div>
    </div>

      <style>{`
        .modal-overlay {
          position: fixed; inset: 0; z-index: 99999;
          background: rgba(0,0,0,0.65); backdrop-filter: blur(8px);
          display: flex; align-items: center; justify-content: center;
          padding: 20px; animation: fadeIn 0.25s ease;
        }
        .modal-content {
          background: var(--card-bg); border: 1px solid var(--border);
          border-radius: 24px; max-width: 920px; width: 100%;
          display: grid; grid-template-columns: 1fr 1fr;
          overflow: hidden; position: relative;
          box-shadow: 0 24px 60px rgba(0,0,0,0.4);
          animation: modalSlideUp 0.35s ease;
          max-height: 90vh;
        }
        .modal-close-btn {
          position: absolute; top: 14px; right: 14px; z-index: 10;
          width: 36px; height: 36px; border-radius: 50%;
          background: var(--card-bg); border: 1px solid var(--border);
          color: var(--foreground); font-size: 1.4rem; line-height: 1;
          cursor: pointer; display: flex; align-items: center; justify-content: center;
          transition: all 0.3s;
        }
        .modal-close-btn:hover { background: #66C7C0; color: #fff; border-color: #66C7C0; }
        .modal-image-side {
          position: relative; display: flex; flex-direction: column;
          align-items: center; justify-content: center; padding: 40px;
          background: linear-gradient(135deg, #0d1526, #080d1a);
          overflow: hidden;
        }
        .modal-glow-purple {
          position: absolute; top: -80px; left: -80px;
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%);
          border-radius: 50%; pointer-events: none;
        }
        .modal-glow-gold {
          position: absolute; bottom: -80px; right: -80px;
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(102,199,192,0.12) 0%, transparent 70%);
          border-radius: 50%; pointer-events: none;
        }
        .modal-tablet-wrap {
          position: relative; z-index: 1; animation: float 4s ease-in-out infinite;
        }
        .modal-tablet-img { object-fit: contain; filter: drop-shadow(0 20px 40px rgba(102,199,192,0.2)); }
        .modal-brand {
          margin-top: 24px; color: rgba(255,255,255,0.3); font-size: 0.75rem;
          letter-spacing: 0.15em; text-transform: uppercase;
        }
        .modal-form-side {
          padding: 48px 36px; position: relative; overflow-y: auto;
        }
        .modal-top-bar {
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #66C7C0, #7c3aed);
        }
        .modal-badge {
          display: inline-block; padding: 4px 12px; border-radius: 100px;
          background: rgba(102,199,192,0.12); border: 1px solid rgba(102,199,192,0.25);
          font-size: 0.7rem; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; color: #66C7C0; margin-bottom: 16px;
        }
        .modal-heading {
          font-family: var(--font-display); font-size: 1.6rem;
          font-weight: 800; color: var(--foreground); margin-bottom: 8px;
        }
        .modal-subheading {
          font-size: 0.9rem; color: var(--foreground-muted); margin-bottom: 28px;
          line-height: 1.6;
        }
        .modal-form { display: flex; flex-direction: column; gap: 14px; }
        .modal-phone-wrap { width: 100%; }
        .modal-phone-wrap .react-international-phone-input-container {
          display: flex !important;
          gap: 0 !important;
        }
        .modal-phone-input {
          width: 100% !important; padding: 14px 18px !important;
          background: var(--card-hover) !important; border: 1px solid var(--border) !important;
          border-radius: var(--radius-sm) !important;
          color: var(--foreground) !important; font-size: 0.95rem !important;
          font-family: var(--font-body) !important; outline: none !important;
        }
        .modal-phone-input:focus { border-color: #66C7C0 !important; box-shadow: 0 0 0 3px rgba(102,199,192,0.12) !important; }
        .modal-country-btn {
          background: var(--card-hover) !important; border: 1px solid var(--border) !important;
          border-radius: var(--radius-sm) 0 0 var(--radius-sm) !important;
          padding: 0 12px !important; height: auto !important;
        }
        .modal-success { text-align: center; padding: 40px 0; }
        .modal-success-title { font-family: var(--font-display); font-size: 1.6rem; font-weight: 800; color: var(--foreground); margin-bottom: 12px; }
        .modal-success-desc { font-size: 0.9rem; color: var(--foreground-muted); line-height: 1.6; }
        .modal-spinner {
          width: 18px; height: 18px; border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff; border-radius: 50%; animation: spin-slow 0.8s linear infinite;
        }
        .modal-privacy {
          text-align: center; font-size: 0.75rem; color: var(--foreground-muted);
          margin-top: 20px;
        }
        .react-international-phone-country-selector-dropdown {
          max-height: 220px !important;
        }
        @media (max-width: 480px) {
          .react-international-phone-country-selector-dropdown {
            max-height: 180px !important; width: 280px !important;
          }
        }
        @media (max-width: 380px) {
          .react-international-phone-country-selector-dropdown {
            max-height: 150px !important; width: 240px !important;
          }
        }

        @media (max-width: 900px) {
          .modal-content { grid-template-columns: 1fr; max-width: 520px; }
          .modal-image-side { display: none; }
          .modal-form-side { padding: 36px 28px; }
        }
        @media (max-width: 600px) {
          .modal-overlay { padding: 12px; }
          .modal-content { border-radius: 18px; max-height: 90vh; }
          .modal-form-side { padding: 28px 20px; }
          .modal-heading { font-size: 1.3rem; }
          .modal-form { gap: 12px; }
          .modal-subheading { font-size: 0.85rem; margin-bottom: 20px; }
          .modal-phone-input { padding: 12px 14px !important; font-size: 0.9rem !important; }
          .modal-country-btn { padding: 0 10px !important; }
        }
        @media (max-width: 480px) {
          .modal-overlay { padding: 8px; align-items: flex-end; }
          .modal-content { border-radius: 16px 16px 0 0; max-height: 92vh; }
          .modal-form-side { padding: 24px 18px; }
          .modal-close-btn { top: 10px; right: 10px; width: 32px; height: 32px; font-size: 1.2rem; }
          .modal-heading { font-size: 1.15rem; }
          .modal-subheading { font-size: 0.82rem; margin-bottom: 16px; }
          .modal-badge { font-size: 0.65rem; padding: 3px 10px; }
          .modal-form { gap: 10px; }
          .modal-form .form-input { padding: 12px 14px; font-size: 0.9rem; }
          .modal-phone-input { padding: 10px 12px !important; font-size: 0.9rem !important; }
          .modal-country-btn { padding: 0 8px !important; min-width: 48px !important; }
          .modal-privacy { font-size: 0.7rem; margin-top: 14px; }
        }
        @media (max-width: 380px) {
          .modal-overlay { padding: 4px; }
          .modal-form-side { padding: 20px 14px; }
          .modal-heading { font-size: 1.05rem; }
          .modal-form .form-input { padding: 10px 12px; font-size: 0.85rem; }
          .modal-phone-input { padding: 8px 10px !important; font-size: 0.85rem !important; }
          .modal-country-btn { padding: 0 6px !important; min-width: 42px !important; }
          .modal-subheading { font-size: 0.78rem; }
        }
      `}</style>
    </>
  );
}
