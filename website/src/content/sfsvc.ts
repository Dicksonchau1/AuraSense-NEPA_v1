import type { SFSVCPageContent } from '../types/content';

export const sfsvcContent: SFSVCPageContent = {
  hero: {
    eyebrow: 'SFSVC',
    title: 'Spike-based Facade Surface Vision Codec.',
    description:
      'Neuromorphic compression and perception for edge inspection. SFSVC converts live surface video into sparse events, visual overlays, and structured telemetry on CPU-first edge systems.',
    primaryCta: { label: 'Request SFSVC Evaluation', href: '/contact' },
    secondaryCta: { label: 'View All Products', href: '/products' },
    supportLine:
      'Built for inspection workflows on drones, gateways, and field systems.',
  },

  proofStrip: ['CPU-first', 'Spike-based', 'Deterministic', 'Offline-capable'],

  overview: {
    eyebrow: 'Overview',
    title: 'Compression, perception, and evidence in one edge pipeline.',
    description:
      'SFSVC is designed for inspection environments where compute, power, and reliability matter. It suppresses static background, encodes temporal change as sparse events, and produces replay-ready output for review, analysis, and downstream action.',
  },

  visualBand: {
    eyebrow: 'Live Output',
    title: 'From live feed to inspection overlay.',
    description:
      'Use live video, spike plots, anomaly graphs, and surface overlays to show how SFSVC turns raw inspection footage into structured output.',
    mediaLabels: [
      'Live Feed',
      'Spike Activity',
      'Surface Overlay',
      'Telemetry Output',
    ],
  },

  architecture: {
    eyebrow: 'Architecture',
    title: 'Surface in. Structured output out.',
    description:
      'A deterministic edge pipeline for live inspection and replay-ready telemetry.',
    flow: [
      'Live Feed',
      'Temporal Change',
      'Spike Encoding',
      'Anomaly Scoring',
      'Overlay + Telemetry',
    ],
    cards: [
      {
        title: 'Live feed',
        description:
          'Ingests facade or inspection video directly from edge devices.',
      },
      {
        title: 'Temporal change',
        description:
          'Suppresses static background and isolates surface change.',
      },
      {
        title: 'Spike encoding',
        description: 'Converts change into sparse timestamped events.',
      },
      {
        title: 'Anomaly scoring',
        description: 'Measures deviation and flags surface risk.',
      },
      {
        title: 'Structured output',
        description:
          'Emits overlay, severity, region, and replay-ready telemetry.',
      },
    ],
  },

  capabilityOne: {
    eyebrow: 'Edge Processing',
    title: 'CPU-first by design.',
    description:
      'SFSVC runs on CPUs with SIMD acceleration and does not depend on GPU infrastructure. It is built for deployable inspection systems where thermal budget, portability, and reliability matter.',
    items: [
      'AVX2 / NEON acceleration',
      'No GPU dependency',
      'Deployable on edge hardware',
    ],
  },

  capabilityTwo: {
    eyebrow: 'Detection Logic',
    title: 'Sparse signals, not full-frame waste.',
    description:
      'SFSVC tracks structural change instead of reprocessing static background. This keeps the pipeline compact, fast, and better aligned with real inspection scenes.',
    items: [
      'Temporal differencing',
      'Spike-based event streams',
      'Reduced background load',
    ],
  },

  capabilityThree: {
    eyebrow: 'Operational Output',
    title: 'Built for review and downstream action.',
    description:
      'SFSVC output is structured for dashboards, replay, audit trails, and engineering workflows. It does not stop at a raw model score.',
    items: [
      'Surface region and severity',
      'Replay-ready records',
      'Telemetry for NEPA workflows',
    ],
  },

  deployment: {
    eyebrow: 'Deployment',
    title: 'Runs where inspection actually happens.',
    description:
      'Deploy SFSVC on drones, gateways, inspection rigs, and field devices. Offline-capable operation and local evidence retention make it suitable for constrained or air-gapped environments.',
    bands: [
      'Linux x86_64',
      'Linux ARM64',
      'Offline activation',
      'Local evidence retention',
    ],
  },

  governance: {
    eyebrow: 'Governance',
    title: 'Traceable by design.',
    description:
      'SFSVC is built for deterministic replay, structured evidence, and governed model use. Outputs remain reviewable, attributable, and fit for technical evaluation.',
    items: [
      'Replay-ready artifacts',
      'Versioned bundle control',
      'Evidence-grade telemetry',
    ],
  },

  integration: {
    eyebrow: 'Integration',
    title: 'Fits into existing inspection systems.',
    description:
      'SFSVC is designed to connect cleanly with mission software, inspection dashboards, edge runtimes, and downstream analysis pipelines.',
    items: [
      'C and Python integration paths',
      'Dashboard and telemetry compatibility',
      'Engineering onboarding available',
    ],
  },

  technicalProfile: {
    eyebrow: 'Technical Profile',
    title: 'High-speed edge perception under real constraints.',
    description:
      'Latency, throughput, compression behavior, and deployment profiles can be demonstrated through evaluator materials, plots, and live reference outputs rather than long static specification tables.',
    chips: [
      'Sub-millisecond classification',
      'High-frame-rate operation',
      'Sparse event compression',
      'CPU-only deployment',
    ],
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Common questions.',
    items: [
      {
        question: 'Does SFSVC require a GPU?',
        answer:
          'No. SFSVC is designed for CPU-first execution with SIMD acceleration.',
      },
      {
        question: 'Can SFSVC run offline?',
        answer:
          'Yes. Activation and evidence handling are designed for offline and controlled environments.',
      },
      {
        question: 'What does SFSVC output?',
        answer:
          'Visual overlays, anomaly signals, and structured telemetry for inspection and review.',
      },
      {
        question: 'Is SFSVC replay-ready?',
        answer:
          'Yes. Output artifacts are designed to support replay, traceability, and audit workflows.',
      },
    ],
  },

  finalCta: {
    eyebrow: 'Evaluate SFSVC',
    title: 'See the codec in a real inspection workflow.',
    description:
      'Request evaluation access, review deployment materials, or schedule a technical discussion with AuraSense engineering.',
    primaryCta: { label: 'Request SFSVC Evaluation', href: '/contact' },
    secondaryCta: { label: 'View All Products', href: '/products' },
  },
};
