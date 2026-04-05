import type { NavLink } from '../types/content';

export const mainNavLinks: NavLink[] = [
  {
    label: 'Platform',
    href: '/platform',
    children: [
      { label: 'NEPA', href: '/platform' },
      { label: 'Architecture', href: '/platform#architecture' },
      { label: 'Replay Verification', href: '/platform#replay-verification' },
      { label: 'Governance', href: '/platform#governance' },
    ],
  },
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'SFSVC', href: '/products/sfsvc' },
      { label: 'NERMN', href: '/products/nermn' },
      { label: 'NSSIM', href: '/products/nssim' },
    ],
  },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Company', href: '/about' },
      { label: 'Careers', href: '/careers' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export const navActions = [
  { label: 'Sign in', href: '/login', variant: 'primary' as const },
];
