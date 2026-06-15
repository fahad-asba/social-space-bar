'use client';
import { useState, useEffect, useRef } from 'react';
import { countries, type Country } from '@/lib/countries';

interface CountryPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (country: Country) => void;
  selectedCode?: string;
}

export default function CountryPickerModal({ isOpen, onClose, onSelect, selectedCode }: CountryPickerModalProps) {
  const [search, setSearch] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const filtered = countries.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.dial.includes(search) ||
    c.code.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setSearch('');
      setTimeout(() => searchRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

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
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '16px',
    }}>
      <div
        onClick={onClose}
        style={{
          position: 'absolute', inset: 0,
          background: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
        }}
      />

      <div className="country-picker-modal" style={{
        position: 'relative',
        width: '100%', maxWidth: '440px',
        maxHeight: '75vh',
        background: 'var(--card-bg)',
        border: '1px solid var(--border)',
        borderRadius: '20px',
        overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        boxShadow: '0 24px 60px rgba(0,0,0,0.3)',
      }}>
        <div style={{
          padding: '20px 20px 12px',
          borderBottom: '1px solid var(--border)',
          flexShrink: 0,
        }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            marginBottom: '12px',
          }}>
            <h3 style={{
              fontSize: '1.1rem', fontWeight: 700,
              color: 'var(--foreground)',
              margin: 0,
            }}>Select Country</h3>
            <button
              onClick={onClose}
              style={{
                background: 'var(--card-hover)',
                border: '1px solid var(--border)',
                color: 'var(--foreground)',
                cursor: 'pointer', fontSize: '1.2rem',
                width: '36px', height: '36px',
                borderRadius: '50%',
                lineHeight: '36px', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
                transition: 'all 0.2s',
                zIndex: 1,
              }}
              aria-label="Close"
              onMouseEnter={e => { e.currentTarget.style.background = '#66C7C0'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#66C7C0'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--card-hover)'; e.currentTarget.style.color = 'var(--foreground)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
            >
              ×
            </button>
          </div>
          <input
            ref={searchRef}
            type="text"
            placeholder="Search country name, code or dial..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width: '100%',
              padding: '11px 14px',
              background: 'var(--card-hover)',
              border: '1px solid var(--border)',
              borderRadius: '10px',
              color: 'var(--foreground)',
              fontSize: '0.9rem',
              fontFamily: 'inherit',
              outline: 'none',
              transition: 'border-color 0.3s',
              boxSizing: 'border-box',
            }}
            onFocus={e => { e.currentTarget.style.borderColor = '#66C7C0'; }}
            onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}
          />
        </div>

        <div
          ref={listRef}
          style={{
            overflowY: 'auto',
            flex: 1,
            padding: '6px',
          }}
        >
          {filtered.map(c => (
            <button
              key={c.code}
              onClick={() => { onSelect(c); onClose(); }}
              style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                width: '100%', padding: '11px 14px',
                background: selectedCode === c.code
                  ? 'rgba(102,199,192,0.1)'
                  : 'transparent',
                border: selectedCode === c.code
                  ? '1px solid rgba(102,199,192,0.25)'
                  : '1px solid transparent',
                borderRadius: '10px',
                cursor: 'pointer', color: 'var(--foreground)',
                fontSize: '0.92rem', textAlign: 'left',
                transition: 'all 0.15s',
                marginBottom: '2px',
                fontFamily: 'inherit',
              }}
              onMouseEnter={e => {
                if (selectedCode !== c.code) {
                  e.currentTarget.style.background = 'var(--card-hover)';
                }
              }}
              onMouseLeave={e => {
                if (selectedCode !== c.code) {
                  e.currentTarget.style.background = 'transparent';
                }
              }}
            >
              <span style={{
                fontSize: '1.3rem', width: '28px',
                textAlign: 'center', flexShrink: 0,
              }}>{c.flag}</span>
              <span style={{
                flex: 1, fontWeight: 500,
                color: 'var(--foreground)',
              }}>{c.name}</span>
              <span style={{
                color: 'var(--foreground-muted)',
                fontSize: '0.85rem', flexShrink: 0,
              }}>{c.dial}</span>
            </button>
          ))}
          {filtered.length === 0 && (
            <div style={{
              textAlign: 'center', padding: '40px 0',
              color: 'var(--foreground-muted)',
              fontSize: '0.9rem',
            }}>
              No countries found
            </div>
          )}
        </div>
      </div>

      <style>{`
        .country-picker-modal {
          animation: fadeUp 0.2s ease;
        }
        .country-picker-modal > div:last-child::-webkit-scrollbar {
          width: 4px;
        }
        .country-picker-modal > div:last-child::-webkit-scrollbar-track {
          background: transparent;
        }
        .country-picker-modal > div:last-child::-webkit-scrollbar-thumb {
          background: var(--border);
          border-radius: 2px;
        }
        @media (max-width: 480px) {
          .country-picker-modal {
            max-width: 100% !important;
            max-height: 85vh !important;
            border-radius: 16px !important;
          }
        }
        @media (max-width: 380px) {
          .country-picker-modal {
            max-height: 90vh !important;
            border-radius: 12px !important;
          }
        }
      `}</style>
    </div>
  );
}
