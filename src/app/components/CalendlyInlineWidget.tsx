'use client';

import { useEffect, useRef } from 'react';
import { CALENDLY_URL } from '@/lib/calendly';

export default function CalendlyInlineWidget() {  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
  }, []);

  return (
    <div
      ref={containerRef}
      className="calendly-inline-widget ty-calendly-inline"
      data-url={CALENDLY_URL}
      style={{ minWidth: '620px', height: '700px' }}
    />
  );
}
