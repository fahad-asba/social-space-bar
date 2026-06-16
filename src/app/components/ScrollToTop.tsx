'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <>
      <button type="button" className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
        <ArrowUp size={24} />
      </button>
      <style>{`
        .scroll-top-btn {
          position: fixed; bottom: 84px; right: 20px; z-index: 9998;
          width: 56px; height: 56px; border-radius: 50%;
          background: var(--card-bg); border: 1px solid var(--border);
          color: #66C7C0; display: none; align-items: center; justify-content: center;
          cursor: pointer; box-shadow: 0 4px 20px rgba(0,0,0,0.25);
          transition: all 0.3s ease;
        }
        .scroll-top-btn:hover { transform: scale(1.08); border-color: #66C7C0; box-shadow: 0 6px 28px rgba(102,199,192,0.35); }
        .scroll-top-btn:active { transform: scale(0.95); }
        @media (max-width: 768px) {
          .scroll-top-btn { display: flex; }
        }
      `}</style>
    </>
  );
}
