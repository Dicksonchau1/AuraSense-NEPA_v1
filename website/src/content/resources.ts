import type { PageContent, ResourceEntry, SectionContent } from '../types/content';

export const resourceCategories: string[] = [
  'Platform Documentation',
  'Product Documentation',
  'Integration Guides',
  'Deployment Notes',
  'Licensing & Legal',
  'FAQ & Support',
  'Architecture Briefs',
  'Product Briefings',
];

export const featuredResources: ResourceEntry[] = [
  {
    title: 'NEPA Platform Overview',
    description:
      'NEPA deterministic runtime, evidence retention, and governance. For technical leadership assessing platform suitability.',
    type: 'Architecture brief',
    audience: 'Enterprise evaluators',
    cta: { label: 'Request Access', href: '/contact' },
  },
  {
    title: 'SFSVC Deployment Guide',
    description:
      'Step-by-step SFSVC deployment on Linux x86_64 and ARM64. Installation, activation, pipeline setup, and evidence export with C and Python examples.',
    type: 'Integration guide',
    audience: 'Engineering teams',
    cta: { label: 'View Guide', href: '/resources/sfsvc-deployment-guide' },
  },
  {
    title: 'SFSVC Licensing & Activation FAQ',
    description:
      'Offline Ed25519 activation, hardware fingerprint binding, evaluation terms, production licensing, and renewal procedures.',
    type: 'FAQ',
    audience: 'Engineering teams',
    cta: { label: 'Read FAQ', href: '/faq' },
  },
  {
    title: 'NERMN Navigation Stack Brief',
    description:
      'NERMN sensor ingestion, spike encoding, path planning, and safety supervision. Latency specs and deployment profiles for robotics engineers.',
    type: 'Product brief',
    audience: 'Robotics engineers',
    cta: { label: 'Request Access', href: '/contact' },
  },
  {
    title: 'NSSIM Surveillance Intelligence Overview',
    description:
      'NSSIM temporal correlation, alert orchestration, evidence retention, and multi-site deployment for security operations.',
    type: 'Product brief',
    audience: 'Security teams',
    cta: { label: 'Request Access', href: '/contact' },
  },
  {
    title: 'Edge Deployment Reference Architecture',
    description:
      'Standalone devices, site gateways, multi-site coordination, and enterprise uplink. Hardware specs and monitoring guidance.',
    type: 'Architecture brief',
    audience: 'Infrastructure engineers',
    cta: { label: 'Request Access', href: '/contact' },
  },
  {
    title: 'Governance and Replay Verification Brief',
    description:
      'Chain-sealed audit logs, replay verification, model provenance, and bundle promotion for regulatory and legal compliance.',
    type: 'Governance document',
    audience: 'Enterprise evaluators',
    cta: { label: 'Request Access', href: '/contact' },
  },
  {
    title: 'Integration API Reference',
    description:
      'gRPC and REST API for telemetry, configuration, health, and evidence export. Authentication, error codes, and versioning.',
    type: 'Technical documentation',
    audience: 'Engineering teams',
    cta: { label: 'Contact for Docs', href: '/contact' },
  },
];

export const audienceSegments: { title: string; description: string }[] = [
  {
    title: 'Engineering Teams',
    description:
      'Integration guides, API references, SDK documentation. C/C++ headers, Python bindings, and platform-specific deployment.',
  },
  {
    title: 'Enterprise Evaluators',
    description:
      'Architecture briefs, platform overviews, governance docs, and compliance materials for technical leadership.',
  },
  {
    title: 'Security & Operations',
    description:
      'Deployment architecture and operational docs for surveillance, alert orchestration, evidence handling, and multi-site coordination.',
  },
  {
    title: 'Partners & Integrators',
    description:
      'Integration architecture, co-deployment guides, and partnership materials. API surfaces, deployment models, and joint solutions.',
  },
];

const categoriesSection: SectionContent = {
  id: 'categories',
  eyebrow: 'Library',
  title: 'Resource Categories',
  description:
    'Resources organized by type and function — platform docs, product docs, integration guides, architecture briefs for evaluation and planning.',
  items: [
    {
      title: 'Platform Documentation',
      description:
        'NEPA architecture, processing model, evidence retention, governance. Foundation documentation across all product modules.',
    },
    {
      title: 'Product Documentation',
      description:
        'Module-specific docs for SFSVC, NERMN, and NSSIM. Architecture, API reference, configuration, deployment, and operations.',
    },
    {
      title: 'Integration Guides',
      description:
        'Step-by-step deployment on target hardware, system integration, and parameter configuration. Includes code examples and platform instructions.',
    },
    {
      title: 'Architecture Briefs',
      description:
        'High-level technical overviews for evaluation and planning. Processing model, deployment topology, evidence architecture, and governance.',
    },
    {
      title: 'Licensing & Legal',
      description:
        'License activation guides, terms, privacy, and compliance. Covers offline activation, hardware fingerprint binding, and deployment licensing.',
    },
    {
      title: 'FAQ & Support',
      description:
        'FAQs, troubleshooting guides, and support contacts organized by product module and deployment context.',
    },
  ],
};

const audienceSection: SectionContent = {
  id: 'audience',
  eyebrow: 'Audience',
  title: 'Resources by Audience',
  description:
    'Materials organized by audience — engineers find integration details, evaluators find architecture overviews, operators find deployment guidance.',
  items: audienceSegments.map((segment) => ({
    title: segment.title,
    description: segment.description,
  })),
};

const supportModelSection: SectionContent = {
  id: 'support',
  eyebrow: 'Support',
  title: 'Support Model',
  description:
    'Tiered support by engagement stage. Public docs available on website. Guided onboarding during evaluation. Enterprise agreements for production.',
  items: [
    {
      title: 'Public Documentation',
      description:
        'Product overviews, architecture briefs, and FAQ available on the website without registration. Sufficient for assessment and evaluation planning.',
    },
    {
      title: 'Guided Onboarding',
      description:
        'Architecture walkthrough, integration planning, configuration review, and engineering access during active evaluation. Scoped to evaluation agreement.',
    },
    {
      title: 'Enterprise Briefings',
      description:
        'In-depth platform briefings for enterprise evaluation teams. Scheduled through the contact page, conducted by AuraSense engineering.',
      cta: { label: 'Schedule Briefing', href: '/contact' },
    },
    {
      title: 'Production Support',
      description:
        'Defined SLAs, escalation paths, and engineering access for production deployments. Contact support@aurasensehk.com for inquiries.',
    },
  ],
};

export const resourcesPageContent: PageContent = {
  hero: {
    headline: 'Technical Resources and Evaluation Materials',
    subheadline: 'Documentation, Guides, and Architecture Briefs',
    description:
      'Platform documentation, deployment guides, product briefs, and governance materials for evaluators, engineers, and partners. Organized by audience and function.',
    primaryCta: { label: 'Request Access', href: '/contact' },
    secondaryCta: { label: 'Contact Engineering', href: '/contact' },
  },
  sections: [categoriesSection, audienceSection, supportModelSection],
};
