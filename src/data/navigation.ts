export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/#services', label: 'About' },
  { href: '/#about', label: 'Services' },
  { href: '/#portfolio', label: 'Portfolio' },
  { href: '/#why-us', label: 'Why Us' },
  { href: '/#pricing', label: 'Packages' },
];
