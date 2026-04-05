import type { PageContent } from '../types/content';

export const contactPageContent: PageContent = {
  hero: {
    headline: 'Talk to Engineering',
    subheadline: 'Technical Evaluation, Partnership, and Support',
    description:
      'Engineering handles inquiries directly. Evaluating NEPA for inspection, integration for robotic deployment, or seeking support — reach the team that builds the systems.',
    primaryCta: { label: 'Email Engineering', href: 'mailto:contact@aurasensehk.com' },
  },
  sections: [
    {
      id: 'technical-evaluation',
      eyebrow: 'Evaluation',
      title: 'Technical Evaluation',
      description:
        'Evaluating NEPA, SFSVC, NERMN, or NSSIM for inspection, autonomy, or surveillance. Technical briefings by engineering — architecture-level detail for assessment.',
      items: [
        {
          title: 'Request a Technical Briefing',
          description:
            'Schedule a technical briefing on architecture, capabilities, and deployment. Email contact@aurasensehk.com with your organization and evaluation objectives.',
        },
        {
          title: 'Evaluation Access',
          description:
            'Time-limited evaluation access with SDK, documentation, sample bundles, and engineering support. Scope defined collaboratively based on deployment requirements.',
        },
      ],
    },
    {
      id: 'enterprise-partnership',
      eyebrow: 'Partnership',
      title: 'Enterprise and Partner Inquiry',
      description:
        'For system integrators, partners, and enterprises exploring NEPA integration into operational inspection, surveillance, or autonomy programs.',
      items: [
        {
          title: 'Integration Partnership',
          description:
            'Integration architecture guidance, co-deployment support, and joint solution validation. Contact contact@aurasensehk.com to discuss partnership scope.',
        },
        {
          title: 'Enterprise Deployment',
          description:
            'Multi-site deployment, volume licensing, enterprise support, and dedicated engineering liaison. Contact contact@aurasensehk.com for enterprise inquiries.',
        },
      ],
    },
    {
      id: 'support',
      eyebrow: 'Support',
      title: 'Support',
      description:
        'For existing deployments or active evaluations. Covers runtime issues, bundle management, evidence integrity, configuration, and integration troubleshooting.',
      items: [
        {
          title: 'Production Support',
          description:
            'Contact support@aurasensehk.com for runtime issues and configuration. SLAs and escalation defined in your support agreement.',
        },
        {
          title: 'Evaluation Support',
          description:
            'Engineering support during active evaluation. Contact support@aurasensehk.com with your evaluation reference for technical questions.',
        },
        {
          title: 'Documentation and FAQ',
          description:
            'Public documentation, product overviews, and FAQ available in the resources section for common questions.',
          cta: { label: 'View Resources', href: '/resources' },
        },
      ],
    },
    {
      id: 'careers-inquiry',
      eyebrow: 'Careers',
      title: 'Careers Inquiry',
      description:
        'For engineers interested in working on deterministic edge intelligence, neuromorphic computing, robotic autonomy, or surveillance intelligence at AuraSense.',
      items: [
        {
          title: 'Engineering Roles',
          description:
            'Selectively hiring in systems, CV, edge AI, robotics, and product engineering. Send portfolio or GitHub to careers@aurasensehk.com.',
          cta: { label: 'View Careers', href: '/careers' },
        },
      ],
    },
  ],
};

export const contactEmails = {
  general: 'contact@aurasensehk.com',
  support: 'support@aurasensehk.com',
  careers: 'careers@aurasensehk.com',
};
