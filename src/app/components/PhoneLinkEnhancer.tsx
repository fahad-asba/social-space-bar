'use client';

import { useEffect } from 'react';

const TOAST_ID = 'phone-link-toast';
const TOAST_DURATION = 2200;
export const PHONE_DISPLAY = '+1 (210) 493-8277';

const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return /Mobi|Android|iPhone|iPad|iPod/i.test(window.navigator.userAgent);
};

export function showPhoneToast(copied: boolean) {
  let toast = document.getElementById(TOAST_ID);
  if (!toast) {
    toast = document.createElement('div');
    toast.id = TOAST_ID;
    Object.assign(toast.style, {
      position: 'fixed',
      bottom: '24px',
      left: '50%',
      transform: 'translateX(-50%) translateY(20px)',
      padding: '14px 22px',
      background: 'var(--card-bg, #111)',
      color: 'var(--foreground, #fff)',
      border: '1px solid var(--gold, #66C7C0)',
      borderRadius: '14px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.35)',
      fontSize: '14px',
      fontWeight: '500',
      zIndex: '999999',
      opacity: '0',
      transition: 'opacity 0.25s ease, transform 0.25s ease',
      pointerEvents: 'none',
      maxWidth: '92vw',
      backdropFilter: 'blur(10px)',
    } as CSSStyleDeclaration);
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <div style="display:flex;align-items:center;gap:12px;text-align:left;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#66C7C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
      <div>
        <div style="font-size:0.75rem;color:var(--foreground-muted,#aaa);line-height:1.4;">Phone</div>
        <div style="font-weight:700;color:var(--gold,#66C7C0);font-size:0.9rem;">${PHONE_DISPLAY}</div>
      </div>
    </div>
    ${copied ? '<div style="font-size:0.7rem;color:var(--foreground-muted,#aaa);margin-top:6px;padding-left:32px;">Copied to clipboard</div>' : ''}
  `;

  requestAnimationFrame(() => {
    if (!toast) return;
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
  });

  window.clearTimeout((toast as unknown as { _t?: number })._t);
  (toast as unknown as { _t?: number })._t = window.setTimeout(() => {
    if (!toast) return;
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(20px)';
  }, TOAST_DURATION);
}

const copyToClipboard = async (text: string) => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.top = '-1000px';
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
};

export async function copyPhoneNumber() {
  const ok = await copyToClipboard(PHONE_DISPLAY);
  showPhoneToast(ok);
}

export default function PhoneLinkEnhancer() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest('a[href^="tel:"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      if (isMobile()) return;

      e.preventDefault();
      const number = anchor.getAttribute('href')?.replace(/^tel:/, '') || PHONE_DISPLAY;
      copyToClipboard(number).then((ok) => {
        showPhoneToast(ok);
      });
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
}
