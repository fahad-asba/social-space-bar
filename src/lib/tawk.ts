declare global {
  interface Window {
    Tawk_API?: {
      maximize?: () => void;
      showWidget?: () => void;
      toggle?: () => void;
      onLoad?: () => void;
    };
  }
}

function openTawkWidget() {
  const api = window.Tawk_API;
  if (!api) return;

  if (typeof api.showWidget === 'function') {
    api.showWidget();
  }

  if (typeof api.maximize === 'function') {
    api.maximize();
  } else if (typeof api.toggle === 'function') {
    api.toggle();
  }
}

export function openTawkChat() {
  if (typeof window === 'undefined') return;

  window.Tawk_API = window.Tawk_API || {};

  if (typeof window.Tawk_API.maximize === 'function' || typeof window.Tawk_API.toggle === 'function') {
    openTawkWidget();
    return;
  }

  const previousOnLoad = window.Tawk_API.onLoad;
  window.Tawk_API.onLoad = function () {
    previousOnLoad?.();
    openTawkWidget();
  };
}
