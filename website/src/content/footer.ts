import type { FooterColumn } from '../types/content';

export const footerColumns: FooterColumn[] = [
  {
    title: 'Platform',
    links: [
      { label: 'NEPA Overview', href: '/platform' },
      { label: 'Architecture', href: '/platform#architecture' },
      { label: 'Replay Verification', href: '/platform#replay-verification' },
      { label: 'Governance', href: '/platform#governance' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'SFSVC', href: '/products/sfsvc' },
      { label: 'NERMN', href: '/products/nermn' },
      { label: 'NSSIM', href: '/products/nssim' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
      { label: 'About', href: '/about' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '/resources#documentation' },
      { label: 'FAQ', href: '/resources#faq' },
      { label: 'Support', href: '/resources#support' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms of Service', href: '/legal/terms.html' },
      { label: 'Privacy Policy', href: '/legal/privacy.html' },
      { label: 'Refund Policy', href: '/legal/refund.html' },
      { label: 'Cookie Policy', href: '/legal/cookies.html' },
    ],
  },
];

export const supportEmail = 'support@aurasensehk.com';
