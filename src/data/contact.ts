import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/phone';

export interface ContactLink {
  icon: string;
  label: string;
  value: string;
  href: string;
}

export const contactLinks: ContactLink[] = [
  { icon: '\u{1F4DE}', label: 'Phone', value: PHONE_DISPLAY, href: PHONE_HREF },
  { icon: '\u{1F4E7}', label: 'Email', value: 'info@socialspacebar.com', href: 'mailto:info@socialspacebar.com' },
  { icon: '\u{1F550}', label: 'Office Hours', value: '8 AM - 6 PM - (PST)', href: '/#services' },
];
