'use client';
import ArrowIcon from '@/components/ui/ArrowIcon';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { submitContactForm } from '@/lib/submitContactForm';

interface ContactFormProps {
  compact?: boolean;
  title?: string;
  subtitle?: string;
  dark?: boolean;
  description?: string;
}

export default function ContactForm({
  compact = false,
  title = 'Get in Touch',
  subtitle = 'GET 30% OFF - Limited Time Offer',
  dark = false,
  description,
}: ContactFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    
    if (phone.length < 5) {
      alert('Please enter a valid phone number');
      return;
    }

    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await submitContactForm({
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        phone,
        message: (formData.get('message') as string) || undefined,
        source: 'Contact Form',
      });
      router.push('/thank-you');
    } catch {
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`cf-card${compact ? ' cf-compact' : ''}`}
      style={{
        background: 'var(--card-bg)',
        border: '1px solid var(--border)',
        borderRadius: compact ? '20px' : '24px',
        backdropFilter: 'blur(24px)',
        width: '100%',
        maxWidth: compact ? '480px' : '520px',
        boxShadow: dark
          ? '0 24px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)'
          : '0 24px 60px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.5)',
        position: 'relative',
        transition: 'background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      <div className="cf-body">
        <div className="cf-badge">{subtitle}</div>
          <h2 className="cf-title">{title}</h2>
          {description && <p className="cf-desc">{description}</p>}

        <form onSubmit={handleSubmit} className="cf-form">
          <input type="hidden" name="_captcha" value="false" />

          <input
            className="form-input"
            type="text"
            name="name"
            placeholder="Full Name *"
            required
            disabled={loading}
          />

          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Email Address *"
            required
            disabled={loading}
          />

        
          <div className="cf-phone-wrap">
            <PhoneInput
              value={phone}
              onChange={(val) => setPhone(val)}
              defaultCountry="us"
              placeholder="Phone Number *"
              inputClassName="cf-phone-input"
              countrySelectorStyleProps={{
                buttonClassName: 'cf-country-btn',
              }}
              disabled={loading}
            />
          </div>

          <textarea
            className="form-input"
            name="message"
            placeholder="Your Message (optional)"
            rows={3}
            disabled={loading}
          />

          <button
            type="submit"
            disabled={loading}
            className="form-submit-btn"
            style={{ width: '100%' }}
          >
            {loading ? (
              <>
                <span className="cf-spinner" />
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

        <p className="cf-privacy">No spam. We respect your privacy.</p>
      </div>

      <style>{`
        .cf-card .cf-body { padding: 28px 28px 24px; }
        .cf-compact .cf-body { padding: 24px 24px 20px; }

        .cf-badge {
          display: inline-block;
          padding: 4px 11px;
          border-radius: 100px;
          background: rgba(102,199,192,0.15);
          border: 1px solid rgba(102,199,192,0.3);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #66C7C0;
          margin-bottom: 10px;
        }

        .cf-title {
          font-family: var(--font-display);
          font-size: 1.45rem;
          font-weight: 700;
          color: var(--foreground);
          margin-bottom: 8px;
          line-height: 1.25;
          transition: color 0.3s ease;
        }
        .cf-compact .cf-title { font-size: 1.3rem; }

        .cf-desc {
          font-size: 0.85rem;
          color: var(--foreground-muted);
          margin-bottom: 16px;
          line-height: 1.6;
        }

        .cf-form {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .cf-form textarea.form-input {
          min-height: 68px;
          resize: vertical;
        }

        .cf-form input:disabled,
        .cf-form textarea:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .cf-phone-wrap {
          width: 100%;
          position: relative;
        }
        
        .cf-phone-wrap .react-international-phone-input-container {
          display: flex !important;
          align-items: stretch !important;
          width: 100% !important;
          border: 1px solid var(--border) !important;
          border-radius: 8px !important;
          background: var(--card-hover) !important;
          overflow: visible !important;
          transition: border-color 0.3s, background 0.3s, box-shadow 0.3s;
        }
        .cf-phone-wrap .react-international-phone-input-container:focus-within {
          border-color: var(--gold) !important;
          background: var(--card-bg) !important;
          box-shadow: 0 0 0 3px rgba(102,199,192,0.15) !important;
        }

        .cf-phone-wrap .cf-country-btn,
        .cf-phone-wrap .react-international-phone-country-selector-button {
          all: unset !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 4px !important;
          padding: 0 10px !important;
          border-right: 1px solid var(--border) !important;
          background: transparent !important;
          cursor: pointer !important;
          min-width: 56px !important;
          flex-shrink: 0 !important;
          border-radius: 8px 0 0 8px !important;
          transition: background 0.2s !important;
          box-sizing: border-box !important;
        }
        .cf-phone-wrap .cf-country-btn:hover,
        .cf-phone-wrap .react-international-phone-country-selector-button:hover {
          background: rgba(102,199,192,0.08) !important;
        }

        .cf-phone-wrap .react-international-phone-flag-emoji {
          font-size: 1.15rem !important;
          line-height: 1 !important;
          pointer-events: none;
        }
        .cf-phone-wrap .react-international-phone-country-selector-button__dropdown-arrow {
          font-size: 0.5rem !important;
          color: var(--foreground-muted) !important;
          pointer-events: none;
          border-top-color: var(--foreground-muted) !important;
        }

        .cf-phone-wrap .cf-phone-input,
        .cf-phone-wrap .react-international-phone-input {
          flex: 1 1 0% !important;
          width: 100% !important;
          min-width: 0 !important;
          padding: 13px 14px !important;
          background: transparent !important;
          border: none !important;
          border-radius: 0 8px 8px 0 !important;
          color: var(--foreground) !important;
          font-size: 0.95rem !important;
          font-family: var(--font-body) !important;
          outline: none !important;
          box-shadow: none !important;
          transition: color 0.3s !important;
        }
        .cf-phone-wrap .cf-phone-input::placeholder,
        .cf-phone-wrap .react-international-phone-input::placeholder {
          color: var(--foreground-muted) !important;
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

        .cf-spinner {
          display: inline-block;
          width: 14px;
          height: 14px;
          border: 2px solid rgba(13,21,38,0.3);
          border-top-color: #0d1526;
          border-radius: 50%;
          animation: cf-spin 0.7s linear infinite;
        }
        @keyframes cf-spin { to { transform: rotate(360deg); } }

        .cf-privacy {
          font-size: 0.72rem;
          color: var(--foreground-muted);
          text-align: center;
          margin-top: 12px;
        }

        @media (max-width: 560px) {
          .react-international-phone-country-selector-dropdown {
            width: 300px !important; max-height: 110px !important;
          }
        }
        @media (max-width: 480px) {
          .cf-card .cf-body, .cf-compact .cf-body { padding: 22px 16px 18px; }
          .cf-title { font-size: 1.2rem !important; margin-bottom: 14px !important; }
          .react-international-phone-country-selector-dropdown {
            width: 260px !important; max-height: 110px !important;
          }
        }
        @media (max-width: 360px) {
          .react-international-phone-country-selector-dropdown {
            width: 220px !important;
            max-height: 110px !important;
          }
        }
      `}</style>
    </div>
  );
}