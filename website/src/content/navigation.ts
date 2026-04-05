import type { NavItem } from '../types/content';

export const mainNavItems: NavItem[] = [
  {
    label: 'Platform',
    href: '/platform',
    children: [
      { label: 'Platform Overview', href: '/platform' },
      { label: 'SFSVC', href: '/products/sfsvc' },
      { label: 'NERMN', href: '/products/nermn' },
      { label: 'NSSIM', href: '/products/nssim' },
    ],
  },
  { label: 'Products', href: '/products' },
  {
    label: 'Company',
    href: '#',
    children: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact', href: '/contact' },
      { label: 'Legal', href: '/legal/terms' },
    ],
  },
];

export const footerNavSections = [
  {
    title: 'Platform',
    items: [
      { label: 'NEPA Overview', href: '/platform' },
      { label: 'Architecture', href: '/platform#architecture' },
      { label: 'Governance', href: '/platform#governance' },
    ],
  },
  {
    title: 'Products',
    items: [
      { label: 'SFSVC', href: '/products/sfsvc' },
      { label: 'NERMN', href: '/products/nermn' },
      { label: 'NSSIM', href: '/products/nssim' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Documentation', href: '/products/sfsvc#specs' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    items: [
      { label: 'Terms of Service', href: '/legal/terms' },
      { label: 'Privacy Policy', href: '/legal/privacy' },
      { label: 'Refund Policy', href: '/legal/refund' },
      { label: 'Cookie Policy', href: '/legal/cookies' },
    ],
  },
];
