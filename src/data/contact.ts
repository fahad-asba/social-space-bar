export interface ContactLink {
  icon: string;
  label: string;
  value: string;
  href: string;
}

export const contactLinks: ContactLink[] = [
  { icon: '\u{1F4DE}', label: 'Phone', value: '+1 (210) 493-8277', href: 'tel:+12104938277' },
  { icon: '\u{1F4E7}', label: 'Email', value: 'info@socialspacebar.com', href: 'mailto:info@socialspacebar.com' },
  { icon: '\u{1F550}', label: 'Office Hours', value: '9 AM - 6 PM', href: '#' },
];
