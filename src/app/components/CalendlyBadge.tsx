'use client';

import Script from 'next/script';
import { CALENDLY_URL } from '@/lib/calendly';
import { initCalendlyBadgeWidget } from '@/lib/calendly';

export default function CalendlyBadge() {
  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={() => {
          const initBadgeWidget = window.Calendly?.initBadgeWidget;
          if (!initBadgeWidget) return;
          initBadgeWidget({
            url: CALENDLY_URL,
            text: 'Schedule time with me',
            color: '#0069ff',
            textColor: '#ffffff',
            branding: true,
          });
        }}
      />
      <style>{`
        .calendly-badge-widget {
          right: auto !important;
          left: 20px !important;
        }
      `}</style>
    </>
  );
}
