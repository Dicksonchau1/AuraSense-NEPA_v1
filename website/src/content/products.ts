import type { PageContent, ProductSummary, SectionContent } from '../types/content';

export const productSummaries: ProductSummary[] = [
  {
    id: 'sfsvc',
    name: 'SFSVC',
    tagline: 'Spike-based Facade Surface Vision Codec',
    description:
      'Neuromorphic compression SDK for edge inspection. Spike-train classification on CPU with SIMD acceleration and structured defect telemetry. No GPU required. Offline-capable.',
    href: '/products/sfsvc',
    features: [
      'Spike-based temporal compression',
      'CPU-native with AVX2/NEON SIMD',
      'Structured defect telemetry output',
      'Offline Ed25519 license activation',
      'Replay-verified evidence chain',
      'Sub-millisecond frame classification',
    ],
  },
  {
    id: 'nermn',
    name: 'NERMN',
    tagline: 'Neuromorphic Edge Robotic Navigation Module',
    description:
      'Edge-native navigation for robotic platforms in GPS-denied environments. Spike-encoded sensor pipeline with bounded-latency path decisions and watchdog-supervised safety.',
    href: '/products/nermn',
    features: [
      'Event camera and LiDAR sensor fusion',
      'Spike-encoded sensor-to-decision pipeline',
      'Watchdog-supervised safety constraints',
      'Degraded-safe fallback policy',
      'GPS-denied navigation capability',
      'Bounded-latency path planning',
    ],
  },
  {
    id: 'nssim',
    name: 'NSSIM',
    tagline: 'Neuromorphic Smart Surveillance Intelligence Module',
    description:
      'Multi-sensor surveillance intelligence with temporal correlation and alert orchestration. Produces auditable alerts with chain-of-custody evidence for regulatory review.',
    href: '/products/nssim',
    features: [
      'Multi-sensor temporal event correlation',
      'Spike-based temporal reasoning engine',
      'Alert orchestration with severity tiering',
      'Chain-of-custody evidence packages',
      'Multi-site deployment coordination',
      'Continuous unattended operation',
    ],
  },
];

const comparisonSection: SectionContent = {
  id: 'comparison',
  eyebrow: 'Comparison',
  title: 'Module Comparison',
  description:
    'Each module targets a distinct domain with shared deterministic runtime, governance model, and replay verification architecture.',
  items: [
    {
      title: 'Primary Domain',
      description:
        'SFSVC: surface inspection. NERMN: autonomous navigation. NSSIM: multi-sensor surveillance and alert orchestration.',
    },
    {
      title: 'Sensor Inputs',
      description:
        'SFSVC: camera frames with temporal differencing. NERMN: event cameras and LiDAR. NSSIM: camera, acoustic, and environmental feeds.',
    },
    {
      title: 'Output Type',
      description:
        'SFSVC: structured defect telemetry. NERMN: navigation commands. NSSIM: alert packages with severity tiering and evidence.',
    },
    {
      title: 'Deployment Profile',
      description:
        'SFSVC: drones, cameras, gateways. NERMN: robotic platforms with real-time control. NSSIM: fixed surveillance and multi-site gateways.',
    },
    {
      title: 'Safety Model',
      description:
        'SFSVC: advisory classification. NERMN: watchdog-supervised with degraded-safe fallback. NSSIM: alert-and-retain with human-in-the-loop escalation.',
    },
  ],
};

const deploymentContextSection: SectionContent = {
  id: 'deployment-context',
  eyebrow: 'Deployment',
  title: 'Deployment Context',
  description:
    'Designed for environments where reliability, auditability, and offline capability are operational requirements — inspection, robotic operations, and facility surveillance.',
  items: [
    {
      title: 'Infrastructure Inspection',
      description:
        'Bridge decks, facades, runways, tunnels, pipelines. SFSVC and NERMN scan, classify, and navigate with full evidence retention for review.',
    },
    {
      title: 'Autonomous Robotic Operations',
      description:
        'Confined-space robots, drones, rail crawlers. NERMN navigates with watchdog supervision while SFSVC classifies. Both produce replay-verified evidence.',
    },
    {
      title: 'Critical Facility Surveillance',
      description:
        'Perimeter security and asset monitoring. NSSIM provides continuous multi-sensor intelligence with severity-tiered alerts and auditable evidence packages.',
    },
    {
      title: 'Multi-Site Operations',
      description:
        'Distributed infrastructure programs with site gateways for telemetry aggregation, model management, and evidence consolidation across devices.',
    },
  ],
};

export const productsPageContent: PageContent = {
  hero: {
    headline: 'Edge-Native Intelligence Modules',
    subheadline: 'Composable Perception for Critical Infrastructure',
    description:
      'Three edge-native modules sharing the NEPA deterministic runtime. Deploy independently or together for inspection, navigation, and surveillance. CPU-native. Offline-capable.',
    primaryCta: { label: 'Request Product Briefing', href: '/contact' },
    secondaryCta: { label: 'View Platform', href: '/platform' },
  },
  sections: [comparisonSection, deploymentContextSection],
};
