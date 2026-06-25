declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget?: (options: {
        url: string;
        text: string;
        color: string;
        textColor: string;
        branding: boolean;
      }) => void;
      initInlineWidget?: (options: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

export const CALENDLY_URL = 'https://calendly.com/chris-razquick/30min';

export function openCalendlySchedule() {
  window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
}
