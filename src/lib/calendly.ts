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

export const CALENDLY_URL = 'https://calendly.com/socialspacebar-30min-introductory-call/30min';

export const CALENDLY_BADGE_OPTIONS = {
  url: CALENDLY_URL,
  text: 'Schedule time with me',
  color: '#0069ff',
  textColor: '#ffffff',
  branding: true,
} as const;

export const CALENDLY_INLINE_STYLE = {
  minWidth: '320px',
  height: '700px',
} as const;

export function openCalendlySchedule() {
  window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
}

export function initCalendlyBadgeWidget() {
  const initBadgeWidget = window.Calendly?.initBadgeWidget;
  if (!initBadgeWidget) return;
  initBadgeWidget({ ...CALENDLY_BADGE_OPTIONS });
}
