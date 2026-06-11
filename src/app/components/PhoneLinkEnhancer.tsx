'use client';

import { useEffect } from 'react';

const TOAST_ID = 'phone-link-toast';
const TOAST_DURATION = 2200;
const PHONE_DISPLAY = '+1 (210) 493-8277';

const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return /Mobi|Android|iPhone|iPad|iPod/i.test(window.navigator.userAgent);
};

const showToast = (number: string) => {
  let toast = document.getElementById(TOAST_ID);
  if (!toast) {
    toast = document.createElement('div');
    toast.id = TOAST_ID;
    Object.assign(toast.style, {
      position: 'fixed',
      bottom: '24px',
      left: '50%',
      transform: 'translateX(-50%) translateY(20px)',
      padding: '12px 20px',
      background: 'var(--card-bg, #111)',
      color: 'var(--foreground, #fff)',
      border: '1px solid var(--gold, #66C7C0)',
      borderRadius: '12px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.35)',
      fontSize: '14px',
      fontWeight: '500',
      zIndex: '999999',
      opacity: '0',
      transition: 'opacity 0.25s ease, transform 0.25s ease',
      pointerEvents: 'none',
      maxWidth: '92vw',
      textAlign: 'center',
      backdropFilter: 'blur(10px)',
    } as CSSStyleDeclaration);
    document.body.appendChild(toast);
  }

  toast.innerHTML = `Number copied: <strong style="color:var(--gold,#66C7C0)">${number}</strong>`;
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
};

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
      const pretty = anchor.textContent?.trim() || number;
      copyToClipboard(number).then((ok) => {
        showToast(ok ? `Number copied: ${pretty}` : `Call us at: ${pretty}`);
      });
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
}
