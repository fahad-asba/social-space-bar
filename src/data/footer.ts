import type { ElementType } from 'react';
import { createElement } from 'react';

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
      { label: 'About Us', href: '#services' },
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
      { label: '+1 (210) 493-8277', href: 'tel:+12104938277' },
      { label: 'info@socialspacebar.com', href: 'mailto:info@socialspacebar.com' },
      { label: 'Office Hours: 8 AM - 6 PM PST', href: '#' },
    ],
  },
];

const FacebookIcon = () => createElement('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'currentColor' },
  createElement('path', { d: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' })
);
const TwitterIcon = () => createElement('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'currentColor' },
  createElement('path', { d: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' })
);
const InstagramIcon = () => createElement('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'currentColor' },
  createElement('rect', { x: 2, y: 2, width: 20, height: 20, rx: 5 }),
  createElement('circle', { cx: 12, cy: 12, r: 5 }),
  createElement('circle', { cx: 17.5, cy: 6.5, r: 1.5 })
);
const LinkedinIcon = () => createElement('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'currentColor' },
  createElement('path', { d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' }),
  createElement('rect', { x: 2, y: 9, width: 4, height: 12 }),
  createElement('circle', { cx: 4, cy: 4, r: 2 })
);

export const socials: SocialItem[] = [
  { label: 'Facebook', icon: FacebookIcon, href: '#' },
  { label: 'Twitter', icon: TwitterIcon, href: '#' },
  { label: 'Instagram', icon: InstagramIcon, href: '#' },
  { label: 'LinkedIn', icon: LinkedinIcon, href: '#' },
];
