'use client';
import ArrowIcon from '@/components/ui/ArrowIcon';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import ModalOverlay from '@/components/ui/ModalOverlay';
import { submitContactForm } from '@/lib/submitContactForm';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ScheduleModal({ isOpen, onClose }: ScheduleModalProps) {
  const router = useRouter();

  const [formLoading, setFormLoading] = useState(false);
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formLoading) return;
    setFormLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await submitContactForm({
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        phone,
        message: (formData.get('message') as string) || undefined,
        source: 'Schedule Appointment',
      });
      onClose();
      router.push('/thank-you');
    } catch {
      alert('Something went wrong. Please try again.');
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <><ModalOverlay isOpen={isOpen} onClose={onClose}>
      <div className="sch-modal-cal-side">
          <div className="sch-cal-glow" />
          <div className="sch-cal-header">
            <div className="sch-cal-month">
              <span>June 2026</span>
            </div>
            <div className="sch-cal-days">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                <span key={d} className="sch-cal-day-name">{d}</span>
              ))}
              {Array.from({ length: 30 }, (_, i) => (
                <span
                  key={i}
                  className={`sch-cal-day ${i + 1 === 16 ? 'sch-cal-day-active' : ''} ${i + 1 >= 16 && i + 1 <= 20 ? 'sch-cal-day-available' : ''}`}
                >
                  {i + 1}
                </span>
              ))}
            </div>
          </div>
          <div className="sch-cal-info">
            <div className="sch-cal-time">Available slots today</div>
            <div className="sch-cal-slots">
              {['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM'].map(t => (
                <span key={t} className="sch-cal-slot">{t}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="sch-modal-form-side">
          <div className="modal-top-bar" />
          <div className="sch-badge">Schedule Appointment</div>
          <h2 className="sch-heading">Book a Call</h2>
          <p className="sch-subheading">Fill in your details and we&apos;ll confirm your appointment.</p>

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
              placeholder="Preferred date/time or message (optional)"
              rows={3}
            />

            <button
              type="submit"
              disabled={formLoading}
              className="btn-primary modal-submit-btn"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              {formLoading ? (
                <>
                  <span className="modal-spinner" />
                  Sending…
                </>
              ) : (
                <>
                  Schedule Now
                  <ArrowIcon />
                </>
              )}
            </button>
          </form>

          <p className="modal-privacy">We&apos;ll confirm your appointment within 24 hours.</p>
        </div>
    </ModalOverlay>

      <style>{`
        .mo-content { display: grid; grid-template-columns: 1fr 1fr; max-width: 820px; }
        @media (max-width: 900px) { .mo-content { grid-template-columns: 1fr; } }
        .modal-top-bar {
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #66C7C0, #7c3aed);
        }
        .modal-form { display: flex; flex-direction: column; gap: 10px; }
        .modal-submit-btn { margin-bottom: 12px; }
        .modal-phone-wrap { width: 100%; position: relative; }
        .modal-phone-wrap .react-international-phone-input-container {
          display: flex !important;
          gap: 0 !important;
          align-items: stretch !important;
          border: none !important;
          border-radius: var(--radius-sm) !important;
          overflow: hidden !important;
        }
        .modal-phone-input {
          flex: 1 !important; width: 100% !important; padding: 14px 18px !important;
          background: var(--card-hover) !important; border: 1px solid var(--border) !important;
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0 !important;
          color: var(--foreground) !important; font-size: 0.95rem !important;
          font-family: var(--font-body) !important; outline: none !important;
          height: 48px !important; box-sizing: border-box !important;
        }
        .modal-phone-input:focus { border-color: #66C7C0 !important; box-shadow: 0 0 0 3px rgba(102,199,192,0.12) !important; }
        .modal-country-btn {
          background: var(--card-hover) !important; border: 1px solid var(--border) !important;
          border-right: none !important;
          border-radius: var(--radius-sm) 0 0 var(--radius-sm) !important;
          padding: 0 12px !important; height: 48px !important;
          min-height: 48px !important; box-sizing: border-box !important;
        }
        .modal-spinner {
          width: 18px; height: 18px; border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff; border-radius: 50%; animation: spin-slow 0.8s linear infinite;
        }
        .modal-privacy {
          text-align: center; font-size: 0.75rem; color: var(--foreground-muted);
          margin-top: 14px;
        }
        .react-international-phone-country-selector-dropdown {
          position: absolute !important;
          top: 105% !important;
          left: 0 !important;
          z-index: 99999 !important;
          background: var(--card-bg) !important;
          border: 1px solid var(--border) !important;
          border-radius: 12px !important;
          box-shadow: 0 20px 50px rgba(0,0,0,0.28) !important;
          max-height: 200px !important;
          overflow-y: auto !important;
          width: 360px !important;
          padding: 6px !important;
          scrollbar-width: thin;
          scrollbar-color: var(--gold) transparent;
        }
        [data-theme="dark"] .react-international-phone-country-selector-dropdown {
          background: #0d1526 !important;
        }
        .react-international-phone-country-selector-dropdown::-webkit-scrollbar { width: 4px; }
        .react-international-phone-country-selector-dropdown::-webkit-scrollbar-thumb {
          background: var(--gold);
          border-radius: 2px;
        }
        .react-international-phone-country-selector-dropdown__search-wrapper {
          padding: 4px 4px 8px !important;
          position: sticky !important;
          top: 0 !important;
          background: var(--card-bg) !important;
          z-index: 1 !important;
        }
        [data-theme="dark"] .react-international-phone-country-selector-dropdown__search-wrapper {
          background: #0d1526 !important;
        }
        .react-international-phone-country-selector-dropdown__search {
          width: 100% !important;
          padding: 9px 12px !important;
          background: var(--card-hover) !important;
          border: 1px solid var(--border) !important;
          border-radius: 8px !important;
          color: var(--foreground) !important;
          font-size: 0.88rem !important;
          outline: none !important;
          box-sizing: border-box !important;
        }
        .react-international-phone-country-selector-dropdown__search:focus {
          border-color: var(--gold) !important;
        }
        .react-international-phone-country-selector-dropdown__list-item {
          display: flex !important;
          align-items: center !important;
          gap: 10px !important;
          padding: 9px 12px !important;
          border-radius: 8px !important;
          cursor: pointer !important;
          border: 1px solid transparent !important;
          transition: all 0.15s !important;
          color: var(--foreground) !important;
          font-size: 0.88rem !important;
          width: 100% !important;
          box-sizing: border-box !important;
        }
        .react-international-phone-country-selector-dropdown__list-item:hover {
          background: var(--card-hover) !important;
        }
        .react-international-phone-country-selector-dropdown__list-item--selected {
          background: rgba(102,199,192,0.1) !important;
          border-color: rgba(102,199,192,0.25) !important;
        }
        @media (max-width: 560px) {
          .react-international-phone-country-selector-dropdown {
            width: 300px !important; max-height: 150px !important;
          }
        }
        @media (max-width: 480px) {
          .react-international-phone-country-selector-dropdown {
            width: 260px !important; max-height: 150px !important;
          }
        }
        @media (max-width: 380px) {
          .react-international-phone-country-selector-dropdown {
            width: 220px !important; max-height: 150px !important;
          }
        }
        .sch-modal-cal-side {
          background: linear-gradient(135deg, #0d1526, #080d1a);
          padding: 32px 28px;
          display: flex; flex-direction: column;
          position: relative; overflow: hidden;
        }
        .sch-cal-glow {
          position: absolute; top: -80px; left: -80px;
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(102,199,192,0.12) 0%, transparent 70%);
          border-radius: 50%; pointer-events: none;
        }
        .sch-cal-header { position: relative; z-index: 1; margin-bottom: 20px; }
        .sch-cal-month {
          font-family: var(--font-display);
          font-size: 1.1rem; font-weight: 700;
          color: #fff; margin-bottom: 16px; text-align: center;
        }
        .sch-cal-days {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 4px;
        }
        .sch-cal-day-name {
          text-align: center; font-size: 0.68rem;
          font-weight: 600; color: rgba(255,255,255,0.4);
          padding: 6px 0;
        }
        .sch-cal-day {
          aspect-ratio: 1; display: flex; align-items: center;
          justify-content: center; font-size: 0.78rem;
          border-radius: 8px; color: rgba(255,255,255,0.6);
        }
        .sch-cal-day-available {
          color: #66C7C0; background: rgba(102,199,192,0.1);
          cursor: pointer; font-weight: 600;
        }
        .sch-cal-day-available:hover { background: rgba(102,199,192,0.2); }
        .sch-cal-day-active {
          background: #66C7C0 !important; color: #0d1526 !important;
          font-weight: 800;
        }
        .sch-cal-info {
          position: relative; z-index: 1;
          margin-top: auto;
        }
        .sch-cal-time {
          font-size: 0.78rem; font-weight: 600;
          color: rgba(255,255,255,0.5); margin-bottom: 10px;
          letter-spacing: 0.04em;
        }
        .sch-cal-slots {
          display: flex; flex-wrap: wrap; gap: 6px;
        }
        .sch-cal-slot {
          padding: 6px 14px; border-radius: 100px;
          background: rgba(102,199,192,0.1);
          border: 1px solid rgba(102,199,192,0.2);
          font-size: 0.72rem; font-weight: 600;
          color: #66C7C0; cursor: pointer;
          transition: all 0.2s;
        }
        .sch-cal-slot:hover { background: #66C7C0; color: #0d1526; }
        .sch-modal-form-side {
          padding: 24px 28px 28px; position: relative; overflow-y: auto;
        }
        .sch-badge {
          display: inline-block; padding: 4px 12px; border-radius: 100px;
          background: rgba(102,199,192,0.12); border: 1px solid rgba(102,199,192,0.25);
          font-size: 0.7rem; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; color: #66C7C0; margin-bottom: 8px;
        }
        .sch-heading {
          font-family: var(--font-display); font-size: 1.4rem;
          font-weight: 800; color: var(--foreground); margin-bottom: 3px;
        }
        .sch-subheading {
          font-size: 0.85rem; color: var(--foreground-muted); margin-bottom: 10px;
          line-height: 1.5;
        }
        @media (max-width: 900px) {
          .sch-modal-cal-side { display: none; }
          .sch-modal-form-side { padding: 24px 28px 28px; }
        }
        @media (max-width: 600px) {
          .sch-modal-form-side { padding: 20px 20px 28px; }
          .sch-heading { font-size: 1.3rem; }
          .modal-phone-input { padding: 12px 14px !important; font-size: 0.9rem !important; height: 44px !important; }
          .modal-country-btn { padding: 0 10px !important; height: 44px !important; min-height: 44px !important; }
        }
        @media (max-width: 480px) {
          .sch-modal-form-side { padding: 18px 18px 28px; }
          .sch-heading { font-size: 1.15rem; }
          .sch-subheading { font-size: 0.82rem; }
          .modal-form { gap: 10px; }
          .modal-form .form-input { padding: 12px 14px; font-size: 0.9rem; }
          .modal-phone-input { padding: 10px 12px !important; font-size: 0.9rem !important; height: 44px !important; }
          .modal-country-btn { padding: 0 8px !important; min-width: 48px !important; height: 44px !important; min-height: 44px !important; }
          .modal-privacy { font-size: 0.7rem; margin-top: 14px; }
        }
        @media (max-width: 380px) {
          .sch-modal-form-side { padding: 16px 14px 24px; }
          .sch-heading { font-size: 1.05rem; }
          .modal-form .form-input { padding: 10px 12px; font-size: 0.85rem; }
          .modal-phone-input { padding: 8px 10px !important; font-size: 0.85rem !important; height: 40px !important; }
          .modal-country-btn { padding: 0 6px !important; min-width: 42px !important; height: 40px !important; min-height: 40px !important; }
          .sch-subheading { font-size: 0.78rem; }
        }
      `}</style>
    </>
  );
}
