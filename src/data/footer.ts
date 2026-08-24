import type { ElementType } from 'react';
import { createElement } from 'react';
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/phone';

export interface FooterLink {
  label: string;
  href: string;
  icon?: ElementType;
}

export interface FooterColumn {
  title: string;
  items: FooterLink[];
}

export interface SocialItem {
  label: string;
  icon: ElementType;
  href: string;
}

export const footerColumns: FooterColumn[] = [
  {
    title: 'Company',
    items: [
      { label: 'About Us', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Why Choose Us', href: '#why-us' },
    ],
  },
  {
    title: 'Packages',
    items: [
      { label: 'Starter Package', href: '#pricing' },
      { label: 'Pro Package', href: '#pricing' },
      { label: 'Premium Package', href: '#pricing' },
      { label: 'Custom Solutions', href: '#contact' },
    ],
  },
  {
    title: 'Contact',
    items: [
      { label: PHONE_DISPLAY, href: PHONE_HREF },
      { label: 'info@socialspacebar.com', href: 'mailto:info@socialspacebar.com' },
      { label: 'Office Hours: 8 AM - 6 PM PST', href: '#' },
    ],
  },
];

const FacebookIcon = () => createElement('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'currentColor' },
  createElement('path', { d: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' })
);
const InstagramIcon = () => createElement('svg', {
  width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none',
  stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round',
},
  createElement('rect', { x: 2, y: 2, width: 20, height: 20, rx: 5, ry: 5 }),
  createElement('path', { d: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' }),
  createElement('line', { x1: 17.5, y1: 6.5, x2: 17.51, y2: 6.5 }),
);
const LinkedinIcon = () => createElement('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'currentColor' },
  createElement('path', { d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' }),
  createElement('rect', { x: 2, y: 9, width: 4, height: 12 }),
  createElement('circle', { cx: 4, cy: 4, r: 2 })
);

export const socials: SocialItem[] = [
  { label: 'Facebook', icon: FacebookIcon, href: 'https://www.facebook.com/profile.php?id=61593842817422' },
  { label: 'Instagram', icon: InstagramIcon, href: 'https://www.instagram.com/social_spacebar_llc' },
  { label: 'LinkedIn', icon: LinkedinIcon, href: 'https://www.linkedin.com/company/social-spacebar-llc/' },
];
