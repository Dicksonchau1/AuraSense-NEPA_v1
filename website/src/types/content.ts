export interface ProductConfig {
  slug: string;
  shortLabel: string;
  fullName: string;
  headline: string;
  subheadline: string;
  summary: string;
  status: 'active' | 'launching-soon' | 'roadmap';
  pillars: Pillar[];
  architectureNodes: ArchitectureNode[];
  deploymentBullets: string[];
  governanceBullets: string[];
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  specs?: SpecItem[];
  faqItems?: FAQItem[];
}

export interface Pillar {
  title: string;
  description: string;
  icon?: string;
}

export interface ArchitectureNode {
  id: string;
  label: string;
  type: 'input' | 'process' | 'core' | 'output' | 'monitor';
  position: number;
  annotations?: string[];
}

export interface SpecItem {
  label: string;
  value: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PlatformConfig {
  headline: string;
  subheadline: string;
  summary: string;
  metrics: MetricItem[];
  pillars: Pillar[];
  deploymentLayers: DeploymentLayer[];
  evidenceCapabilities: Pillar[];
  governanceItems: GovernanceItem[];
  integrationBenefits: Pillar[];
}

export interface MetricItem {
  value: string;
  label: string;
  detail?: string;
}

export interface DeploymentLayer {
  id: string;
  label: string;
  description: string;
}

export interface GovernanceItem {
  title: string;
  status: 'Active' | 'In Review' | 'On Request';
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface LegalPage {
  slug: string;
  title: string;
  lastUpdated: string;
  jurisdiction: string;
}
