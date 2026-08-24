'use client';

import Script from 'next/script';
import { CALENDLY_URL, initCalendlyBadgeWidget } from '@/lib/calendly';

export default function CalendlyBadge() {
  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={initCalendlyBadgeWidget}
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
