'use client';

import { useEffect, useRef, useState } from 'react';
import { CALENDLY_INLINE_STYLE, CALENDLY_URL } from '@/lib/calendly';

function loadCalendlyScript(): Promise<void> {
  return new Promise((resolve) => {
    if (window.Calendly) {
      resolve();
      return;
    }
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src*="calendly.com/assets/external/widget.js"]'
    );
    if (existing) {
      existing.addEventListener('load', () => resolve(), { once: true });
      if (window.Calendly) resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => resolve();
    document.head.appendChild(script);
  });
}

export default function CalendlyInlineWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    loadCalendlyScript().then(() => setLoaded(true));
  }, [mounted]);

  useEffect(() => {
    if (!loaded) return;
    const parent = containerRef.current;
    if (!parent || parent.querySelector('iframe')) return;

    const initInlineWidget = window.Calendly?.initInlineWidget;
    if (!initInlineWidget) return;

    initInlineWidget({
      url: CALENDLY_URL,
      parentElement: parent,
    });
  }, [loaded]);

  if (!mounted || !loaded) {
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
