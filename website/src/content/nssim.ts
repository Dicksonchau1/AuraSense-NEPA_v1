import type { ProductPageContent } from '../types/content';

export const nssimContent: ProductPageContent = {
  hero: {
    subheadline: 'NSSIM — Neuromorphic Smart Surveillance Intelligence Module',
    headline: 'Camera Intelligence at the Edge',
    description:
      'Multi-sensor ingest. Temporal event reasoning. Real-time alerting with structured evidence retention. No cloud dependency. Operator-ready from day one.',
    primaryCta: { label: 'Request NSSIM Briefing', href: '/contact' },
    secondaryCta: { label: 'View All Products', href: '/products' },
  },
  sections: [
    {
      id: 'intelligence-pipeline',
      eyebrow: 'Architecture',
      title: 'Intelligence Pipeline',
      description:
        'Deterministic spike-based pipeline from raw sensor feeds to actionable alerts. Identical inputs produce identical outputs. Every stage logged for replay.',
      items: [
        {
          title: 'Multi-Sensor Ingestion',
          description:
            'Ingests RGB, thermal, IR cameras, acoustic, environmental telemetry, and access control. Nanosecond timestamping with sensor health monitoring.',
        },
        {
          title: 'Spike-Based Encoding',
          description:
            'Each modality encoded into sparse spike representation. Video uses temporal differencing, audio uses spectral change, sensors use threshold-crossing.',
        },
        {
          title: 'Feature Correlation Engine',
          description:
            'Cross-modal temporal correlation of spike events. Multi-sensor coincidence produces higher-confidence alerts than single-sensor detection.',
        },
        {
          title: 'Classification and Alert Generation',
          description:
            'Spike-timing pattern matching against threat profiles. Alerts with confidence scores, severity tiers, and full sensor provenance.',
        },
      ],
    },
    {
      id: 'temporal-reasoning',
      eyebrow: 'Intelligence',
      title: 'Temporal Reasoning',
      description:
        'Temporal reasoning over spike streams — detecting patterns across seconds to hours. Behavioral patterns and multi-stage events that frame-by-frame processing misses.',
      items: [
        {
          title: 'Temporal Event Windows',
          description:
            'Configurable windows from milliseconds to hours. Multiple scales operate simultaneously for immediate threats and slow-evolving anomalies.',
        },
        {
          title: 'Sequential Pattern Detection',
          description:
            'Detects sequential event patterns with temporal constraints and confidence thresholds. Repeated access attempts, gradual probes, coordinated sequences.',
        },
        {
          title: 'Behavioral Baseline Adaptation',
          description:
            'Per-zone activity baselines with gated learning. Deviations detected as anomalies. Only confirmed non-threats update the baseline.',
        },
        {
          title: 'Cross-Sensor Temporal Correlation',
          description:
            'Events from different sensors correlated across time. Multi-modal evidence packages with higher reliability than single-sensor detection.',
        },
      ],
    },
    {
      id: 'alert-orchestration',
      eyebrow: 'Operations',
      title: 'Alert Orchestration',
      description:
        'Aggregates, deduplicates, prioritizes, and routes detections into actionable alerts. Prevents alert fatigue while ensuring genuine threats surface.',
      items: [
        {
          title: 'Severity Tiering',
          description:
            'Configurable tiers: informational, advisory, elevated, critical. Based on anomaly score, multi-sensor corroboration, and zone sensitivity.',
        },
        {
          title: 'Alert Deduplication',
          description:
            'Duplicate detections consolidated using spatial proximity and temporal overlap. Contributing detections preserved in the evidence chain.',
        },
        {
          title: 'Routing and Escalation',
          description:
            'Zone-aware routing to consoles, SIEM, and notification channels. Escalation rules promote unacknowledged alerts after timeout.',
        },
        {
          title: 'Alert Context Packaging',
          description:
            'Each alert packaged with sensor data, timeline, classification details, and zone metadata. Operators receive full context for response.',
        },
      ],
    },
    {
      id: 'audit-evidence',
      eyebrow: 'Governance',
      title: 'Audit and Evidence',
      description:
        'Evidence integrity as a structural requirement. Every detection, alert, and operator action recorded in a chain-sealed log with cryptographic integrity.',
      items: [
        {
          title: 'Chain-of-Custody Evidence',
          description:
            'Raw excerpts, spike encodings, classifications, and correlations chain-sealed with SHA-256. Tamper-evident and independently verifiable.',
        },
        {
          title: 'Operator Action Logging',
          description:
            'Operator responses recorded with identity, timestamp, and context. Audit trail captures both system detections and human actions.',
        },
        {
          title: 'Replay Verification',
          description:
            'Sessions replayed from sealed logs producing bit-identical alerts. Post-incident review without live system access.',
        },
        {
          title: 'Evidence Retention and Export',
          description:
            'Local append-only storage with configurable retention. Self-contained export packages for regulatory submission and legal discovery.',
        },
      ],
    },
    {
      id: 'multi-site-deployment',
      eyebrow: 'Deployment',
      title: 'Multi-Site Deployment',
      description:
        'Multi-site deployment with site gateways for local intelligence aggregation, alert routing, and evidence consolidation across installations.',
      items: [
        {
          title: 'Site Gateway Architecture',
          description:
            'Edge instances per site with gateway aggregation. Independent operation during connectivity outages with uninterrupted local alerting.',
        },
        {
          title: 'Cross-Site Alert Correlation',
          description:
            'Central coordination correlates events across sites. Simultaneous multi-location activity detected and escalated as correlated events.',
        },
        {
          title: 'Centralized Configuration Management',
          description:
            'Detection rules, thresholds, routing, and bundles managed centrally. Versioned, auditable, with approval required before deployment.',
        },
        {
          title: 'Bandwidth-Efficient Uplink',
          description:
            'Structured alert metadata transmitted — not raw streams. Full data retained locally, retrieved on demand over constrained connectivity.',
        },
      ],
    },
  ],
  specs: [
    { label: 'Sensor Modalities', value: 'Video (RGB/thermal/IR), Acoustic, Environmental, Access Control' },
    { label: 'Temporal Window Range', value: 'Milliseconds to hours (configurable)' },
    { label: 'Alert Severity Tiers', value: 'Informational, Advisory, Elevated, Critical' },
    { label: 'Evidence Format', value: 'Chain-sealed canonical JSON with SHA-256' },
    { label: 'Replay Verification', value: 'Bit-identical alert reproduction from session logs' },
    { label: 'Multi-Site Support', value: 'Gateway-mediated with cross-site correlation' },
    { label: 'Connectivity Requirement', value: 'None (offline-capable with local retention)' },
    { label: 'Platform', value: 'Linux x86_64, Linux ARM64' },
    { label: 'Integration', value: 'REST/gRPC API, SIEM webhook, SNMP traps' },
    { label: 'License Verification', value: 'Ed25519 offline activation' },
  ],
};
