import type { PageContent } from '../types/content';

export const platformContent: PageContent = {
  hero: {
    subheadline: 'Deterministic Edge Middleware for Critical Infrastructure',
    headline: 'Perceive. Percept. Process.',
    description:
      'NEPA is the middleware layer between raw sensor input and structured operational output. Bounded latency. Replay-verified evidence. Offline-capable. Audit-ready.',
    primaryCta: { label: 'Request Technical Briefing', href: '/contact' },
    secondaryCta: { label: 'View Products', href: '/products' },
  },
  sections: [
    {
      id: 'what-deterministic-means',
      eyebrow: 'Foundation',
      title: 'What Deterministic Inspection Infrastructure Means',
      description:
        'Every frame, classification, and artifact is traceable from input through model state to output. Replay verification is an architectural invariant enabling third-party audit and regulatory submission.',
      items: [
        {
          title: 'Reproducible Outputs',
          description:
            'Bit-identical outputs across runs and platforms given the same inputs and model state. No GPU non-determinism, no hidden state mutation.',
        },
        {
          title: 'Structural Traceability',
          description:
            'Every processing decision is logged with model version, configuration, input digest, and output — bound together in a verifiable evidence record.',
        },
        {
          title: 'Independent Verification',
          description:
            'Auditors and regulators verify outputs without live runtime access. Sealed session logs and the replay tool confirm correctness independently.',
        },
      ],
    },
    {
      id: 'bounded-latency',
      eyebrow: 'Runtime',
      title: 'Parallel Processing and Bounded Latency',
      description:
        'Isolated, pre-allocated processing lanes with P95 < 0.5ms, P99 < 0.8ms at 720p. SIMD-accelerated, lock-free, no GC, no GPU dependency.',
      items: [
        {
          title: 'Pre-Allocated Processing Lanes',
          description:
            'All buffers allocated at startup. No heap allocation during frame processing. Deterministic, cache-friendly memory layout with aligned SIMD buffers.',
        },
        {
          title: 'SIMD-Accelerated Frame Differencing',
          description:
            '256-bit SIMD frame differencing — AVX2 on x86_64, NEON on ARM64. Fused multiply-add inner loop achieves 8–12× throughput over scalar.',
        },
        {
          title: 'Lock-Free Communication',
          description:
            'Lock-free SPSC queues between stages. No mutex, no condition variable, no priority inversion. Bounded ring buffers with atomic updates.',
        },
        {
          title: 'No Shared Mutable State',
          description:
            'Each lane owns its buffers and model snapshot. Cross-lane coordination uses message passing on control channels, never shared memory mutation.',
        },
      ],
    },
    {
      id: 'replay-verification',
      eyebrow: 'Verification',
      title: 'Replay Verification',
      description:
        'Sealed session logs capture inputs, model references, and outputs. The replay tool re-executes and confirms bit-identical results — the primary evidence mechanism for audit.',
      items: [
        {
          title: 'Sealed Session Logs',
          description:
            'Complete processing context sealed with chain hashes — input digests, model version, configuration, and outputs. Each entry references the previous SHA-256 hash.',
        },
        {
          title: 'Bit-Identical Replay',
          description:
            'Re-executes the pipeline from sealed logs. Output must be bit-identical. Any divergence indicates tampering, drift, or defect.',
        },
        {
          title: 'Third-Party Verifiability',
          description:
            'Requires only the sealed log, model artifact, and replay tool. No live runtime access needed. Self-contained verification package for auditors.',
        },
      ],
    },
    {
      id: 'audit-chain-of-custody',
      eyebrow: 'Governance',
      title: 'Audit and Chain-of-Custody',
      description:
        'Every classification and artifact is recorded in an append-only audit chain with cryptographic integrity. Evidence provenance is traceable from capture to archival.',
      items: [
        {
          title: 'Append-Only Audit Chain',
          description:
            'Append-only hash chain with SHA-256 canonical JSON linking. Any insertion, deletion, or reordering is independently detectable.',
        },
        {
          title: 'Model Provenance',
          description:
            'Every deployed model traces to a versioned bundle with known build hash and approval chain. No production deployment without a signed release tag.',
        },
        {
          title: 'Evidence Lifecycle',
          description:
            'Defined lifecycle: capture → seal → retain → archive → dispose. Retention enforced at storage layer. Disposal requires authorization and audit.',
        },
      ],
    },
    {
      id: 'evidence-immutability',
      eyebrow: 'Evidence',
      title: 'Evidence Immutability',
      description:
        'Structured telemetry retained as immutable records with cryptographic digests and chain references. Enforced at the storage layer through append-only writes and integrity checks.',
      items: [
        {
          title: 'Cryptographic Integrity',
          description:
            'SHA-256 digest over canonical JSON for every record. Independently verifiable without trust in the producing runtime.',
        },
        {
          title: 'Structured Telemetry Retention',
          description:
            'Queryable structured telemetry — defect type, severity, zone, anomaly score, model version, and timestamp as first-class fields in every record.',
        },
        {
          title: 'Immutable Storage Enforcement',
          description:
            'Append-only at the filesystem layer. Application code cannot overwrite or delete records. Retention governed by infrastructure policy.',
        },
      ],
    },
    {
      id: 'enterprise-integration',
      eyebrow: 'Integration',
      title: 'Enterprise Integration',
      description:
        'Composable edge layer integrating with existing asset management, compliance, and OT systems. Enterprise-grade API versioning, authentication, and auditability.',
      items: [
        {
          title: 'Compliance Posture',
          description:
            'Configurable compliance profiles mapping audit behavior, retention, and access control to regulatory requirements. Versioned and auditable configuration.',
        },
        {
          title: 'API Surfaces',
          description:
            'gRPC and REST APIs for telemetry, configuration, health, and evidence export. Semver versioning with mTLS or API key authentication.',
        },
        {
          title: 'Deployment Models',
          description:
            'Air-gapped, connected, or hybrid deployment models. Offline activation, periodic uplink, or selective cloud sync — configured at provisioning time.',
        },
      ],
    },
  ],
};
