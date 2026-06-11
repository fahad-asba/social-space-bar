import type { ElementType } from 'react';
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope } from 'react-icons/fa6';

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
      { label: 'Who We Are', href: '#about' },
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
      { label: '+1 (210) 493-8277', href: 'tel:+12104938277', icon: FaPhone },
      { label: 'info@socialspacebar.com', href: 'mailto:info@socialspacebar.com', icon: FaEnvelope },
      { label: 'Office Hours: 9 AM - 6 PM', href: '#' },
    ],
  },
];

export const socials: SocialItem[] = [
  { label: 'Facebook', icon: FaFacebookF, href: '#' },
  { label: 'Twitter', icon: FaXTwitter, href: '#' },
  { label: 'Instagram', icon: FaInstagram, href: '#' },
  { label: 'LinkedIn', icon: FaLinkedinIn, href: '#' },
];
