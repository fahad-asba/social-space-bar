'use client';

import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '@/context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="theme-toggle"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '36px',
        height: '36px',
        borderRadius: '10px',
        border: '1px solid var(--border)',
        background: 'var(--card-bg)',
        color: 'var(--foreground-secondary)',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        position: 'relative',
        outline: 'none',
        flexShrink: 0,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--gold)';
        e.currentTarget.style.color = 'var(--gold)';
        e.currentTarget.style.background = 'rgba(102,199,192,0.1)';
        e.currentTarget.style.transform = 'rotate(15deg) scale(1.1)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.color = 'var(--foreground-secondary)';
        e.currentTarget.style.background = 'var(--card-bg)';
        e.currentTarget.style.transform = 'none';
      }}
    >
      <span
        style={{
          display: 'flex',
          transition: 'transform 0.4s ease, opacity 0.3s ease',
          transform: isDark ? 'rotate(0deg)' : 'rotate(-90deg)',
          opacity: 1,
          fontSize: '1.1rem',
          lineHeight: 1,
        }}
      >
        {isDark ? <FiMoon /> : <FiSun />}
      </span>

      <style>{`
        .theme-toggle:focus-visible {
          box-shadow: 0 0 0 2px var(--gold) !important;
          border-color: var(--gold) !important;
        }
        .theme-toggle:active {
          transform: scale(0.92) !important;
        }
      `}</style>
    </button>
  );
}
