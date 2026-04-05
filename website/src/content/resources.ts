import type { PageContent, ResourceEntry } from '../types/content';

export const resourceCategories: string[] = [
  'Platform Overview',
  'Product Briefs',
  'Integration Guides',
  'Deployment Guidance',
  'Architecture Notes',
  'Governance Materials',
  'FAQ',
  'Support',
];

export const featuredResources: ResourceEntry[] = [
  {
    title: 'NEPA Platform Overview',
    description:
      'A high-level overview of the NEPA platform, including runtime structure, evidence handling, operator review, and governance approach for technical evaluation and deployment planning.',
    type: 'Architecture brief',
    audience: 'Enterprise evaluators',
    cta: { label: 'Request Access', href: '/contact' },
  },
  {
    title: 'SFSVC Deployment Guide',
    description:
      'Deployment guidance for SFSVC across supported environments, covering installation flow, runtime setup, operational configuration, and engineering onboarding.',
    type: 'Deployment guide',
    audience: 'Engineering teams',
    cta: { label: 'View Guide', href: '/resources/sfsvc-deployment-guide' },
  },
  {
    title: 'NSSIM Surveillance Intelligence Overview',
    description:
      'Overview of NSSIM for surveillance intelligence workflows, including event detection, operator review, alert handling, and evidence-aware operational coordination.',
    type: 'Product brief',
    audience: 'Security teams',
    cta: { label: 'Request Access', href: '/contact' },
  },
  {
    title: 'NERMN Navigation Stack Brief',
    description:
      'Technical briefing for robotics and autonomy teams covering navigation workflows, runtime supervision, fallback handling, and deployment considerations.',
    type: 'Product brief',
    audience: 'Robotics engineers',
    cta: { label: 'Request Access', href: '/contact' },
  },
  {
    title: 'Edge Deployment Architecture',
    description:
      'Reference material for edge and multi-site deployment planning, including device roles, coordination layers, monitoring expectations, and system integration considerations.',
    type: 'Architecture note',
    audience: 'Infrastructure teams',
    cta: { label: 'Request Access', href: '/contact' },
  },
  {
    title: 'Governance and Replay Brief',
    description:
      'Overview of auditability, evidence traceability, replay workflows, and governance controls for regulated, safety-sensitive, or high-trust environments.',
    type: 'Governance brief',
    audience: 'Technical evaluators',
    cta: { label: 'Request Access', href: '/contact' },
  },
  {
    title: 'Integration Overview',
    description:
      'General guidance for teams evaluating system integration, data exchange, deployment alignment, and technical onboarding across AuraSense products.',
    type: 'Integration overview',
    audience: 'Engineering teams',
    cta: { label: 'Contact Engineering', href: '/contact' },
  },
  {
    title: 'FAQ and Access Support',
    description:
      'Answers to common questions on evaluation access, documentation availability, onboarding pathways, and technical support channels.',
    type: 'Support resource',
    audience: 'All teams',
    cta: { label: 'Read FAQ', href: '/faq' },
  },
];

export const audienceSegments: { title: string; description: string }[] = [
  {
    title: 'Engineering Teams',
    description:
      'Integration guidance, deployment materials, product documentation, and technical onboarding resources for implementation teams.',
  },
  {
    title: 'Technical Evaluators',
    description:
      'Architecture notes, platform overviews, governance materials, and evaluation briefs for technical assessment and internal review.',
  },
  {
    title: 'Operations and Deployment',
    description:
      'Deployment planning materials, environment guidance, monitoring expectations, and rollout support references for operational teams.',
  },
  {
    title: 'Procurement and Partners',
    description:
      'Commercial evaluation materials, access pathways, support models, and engagement references for qualified partners and enterprise stakeholders.',
  },
];

export const resourcesIntro = {
  heading: 'Technical resources and evaluation materials',
  body: 'AuraSense provides structured documentation and technical reference materials to support evaluation, integration, deployment planning, and product understanding. Materials are organized by audience, product area, and operational function.',
};

export const accessModel = {
  heading: 'Access and support model',
  body: 'Technical resources are provided through guided evaluation access, engineering engagement, or active platform programs. Public materials provide overview-level information, while deeper documentation is shared through approved access channels.',
  items: [
    {
      title: 'Evaluation Access',
      description:
        'Qualified teams can request access to technical materials, guided onboarding resources, and product-specific documentation for structured evaluation.',
    },
    {
      title: 'Engineering Support',
      description:
        'Engineering contact is available for integration discussions, deployment planning, and technical evaluation support.',
    },
    {
      title: 'Documentation Access',
      description:
        'Selected materials are available publicly, while deeper implementation and deployment documentation is shared through approved programs or licensed engagement.',
    },
  ],
};

export const signInPanel = {
  eyebrow: 'Platform Access',
  title: 'Sign in for workspace and operational access.',
  description:
    'Authorized users can sign in to access platform workspaces, evaluation materials, and connected operational interfaces across surveillance, drone, and robotics environments.',
  primaryCta: { label: 'Sign in', href: '/contact' },
  secondaryCta: { label: 'Request Access', href: '/contact' },
};

export const resourcesCta = {
  heading: 'Request evaluation access',
  body: 'Access the documentation library, technical materials, and engineering support through the AuraSense evaluation process.',
  primaryCta: { label: 'Request Access', href: '/contact' },
  secondaryCta: { label: 'View Platform', href: '/platform' },
};

export const resourcesPageContent: PageContent = {
  hero: {
    headline: 'Documentation, guides, and technical materials.',
    subheadline: 'Resources',
    description:
      'Access platform overviews, deployment guidance, product briefs, and evaluation materials for engineers, technical evaluators, and deployment partners.',
    primaryCta: { label: 'Request Access', href: '/contact' },
    secondaryCta: { label: 'Contact Engineering', href: '/contact' },
  },
  sections: [],
};
