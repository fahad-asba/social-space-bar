'use client';

import { useEffect, useRef, useState } from 'react';
import { CALENDLY_INLINE_STYLE, CALENDLY_URL } from '@/lib/calendly';

export default function CalendlyInlineWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const parent = containerRef.current;
    if (!parent || parent.querySelector('iframe')) return;

    const init = () => {
      if (!containerRef.current || containerRef.current.querySelector('iframe')) return;
      const initInlineWidget = window.Calendly?.initInlineWidget;
      if (!initInlineWidget) return;
      initInlineWidget({
        url: CALENDLY_URL,
        parentElement: containerRef.current,
      });
    };

    if (window.Calendly) {
      init();
      return;
    }

    const interval = window.setInterval(() => {
      if (!window.Calendly) return;
      window.clearInterval(interval);
      init();
    }, 100);

    return () => window.clearInterval(interval);
  }, [mounted]);

  if (!mounted) {
    return (
      <div
        style={{
          ...CALENDLY_INLINE_STYLE,
          background: 'var(--card-bg, #1a1a2e)',
          borderRadius: 16,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--foreground-secondary, #888)',
          fontSize: '0.9rem',
        }}
      >
        Loading calendar...
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="calendly-inline-widget ty-calendly-inline"
      data-url={CALENDLY_URL}
      style={CALENDLY_INLINE_STYLE}
    />
  );
}
