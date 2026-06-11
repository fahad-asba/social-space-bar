'use client';

import { useEffect } from 'react';

const isModifiedClick = (e: MouseEvent) =>
  e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;

const cleanUrl = () => {
  if (typeof window === 'undefined') return;
  if (!window.location.hash) return;
  if (!window.history || !window.history.replaceState) return;
  window.history.replaceState(
    null,
    '',
    window.location.pathname + window.location.search
  );
};

const getNavOffset = () => {
  const nav = document.querySelector('.navbar') as HTMLElement | null;
  return nav ? nav.offsetHeight : 0;
};

export default function SmoothScrollAnchor() {
  useEffect(() => {
    cleanUrl();
    window.addEventListener('hashchange', cleanUrl);

    const onClick = (e: MouseEvent) => {
      if (isModifiedClick(e)) return;

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute('href') || '';
      if (href === '#' || href.length < 2) return;

      const id = decodeURIComponent(href.slice(1));
      const el = document.getElementById(id);
      if (!el) return;

      e.preventDefault();
      const top = el.getBoundingClientRect().top + window.scrollY - getNavOffset();
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
      cleanUrl();
    };

    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('click', onClick);
      window.removeEventListener('hashchange', cleanUrl);
    };
  }, []);

  return null;
}
