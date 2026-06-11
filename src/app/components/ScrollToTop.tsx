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
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="
        fixed bottom-6 right-6 z-50
        group
        flex items-center justify-center
        w-12 h-12 md:w-14 md:h-14
        rounded-full
        bg-[var(--card-bg)]
        border border-[var(--border)]
        backdrop-blur-xl
        shadow-lg
        transition-all duration-300
        hover:scale-110 hover:border-[var(--gold)]
        hover:shadow-[0_0_25px_rgba(102,199,192,0.35)]
        active:scale-95
        animate-fade-in
      "
      aria-label="Scroll to top"
    >
      <ArrowUp
        className="
          text-[var(--gold)]
          transition-all duration-300
          group-hover:-translate-y-1
          group-hover:scale-110
          group-hover:animate-pulse
        "
        size={20}
      />
    </button>
  );
}