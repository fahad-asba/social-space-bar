declare global {
  interface Window {
    LiveChatWidget?: {
      call: (method: string, ...args: unknown[]) => void;
    };
  }
}

export function openLiveChat() {
  if (typeof window === 'undefined') return;
  window.LiveChatWidget?.call('maximize');
}
