export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: '#about', label: 'Who We Are' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#pricing', label: 'Packages' },
];
