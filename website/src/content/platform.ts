import type { PlatformConfig } from '../types/content';

export const platformConfig: PlatformConfig = {
  headline: 'The NEPA Inspection Platform',
  subheadline: 'Deterministic inspection infrastructure engineered for auditability, replay verification, and governance control.',
  summary: 'NEPA is designed for safety-critical environments where inspection systems must withstand independent scrutiny. Every finding references the exact engine version, configuration state, and sensor calibration record that produced it.',
  metrics: [
    { value: '8', label: 'Parallel Processing Lanes', detail: 'Independent lanes with hard-bounded latency guarantees' },
    { value: '<2ms', label: 'Real-Time Target (P95)', detail: 'Under controlled runtime configuration' },
    { value: '0', label: 'Shared Mutable State', detail: 'Complete lane isolation at data, memory, and scheduling levels' },
    { value: 'TRL 6', label: 'Readiness Level', detail: 'System demonstrated in relevant environment' },
  ],
  pillars: [
    {
      title: 'Deterministic Multi-Lane Architecture',
      description: 'Eight parallel processing lanes with hard-bounded latency guarantees. Each lane operates independently with its own watchdog and telemetry channel. No shared mutable state between lanes.',
    },
    {
      title: 'Continuous Latency Monitoring',
      description: 'Per-frame metric capture and watchdog enforcement. Latency exceedance events are flagged, logged, and escalated before affecting downstream reporting pipelines.',
    },
    {
      title: 'Validated Under Sustained Load',
      description: 'Performance characteristics confirmed across multi-hour operational workloads at representative inspection throughput. Benchmark suites run continuously in CI with regression detection.',
    },
    {
      title: 'Structured Spike Processing',
      description: 'Spike-timing-dependent plasticity rules govern adaptive weight updates. Gated modulation signals preserve stability on safety-critical processing pathways under variable load conditions.',
    },
    {
      title: 'Edge-Native Inference',
      description: 'C++ core engine with hardware-accelerated inference delivers sub-threshold latency on edge-class devices. Deployable without cloud round-trips on standard embedded compute hardware.',
    },
    {
      title: 'Multi-Modal Sensor Fusion',
      description: 'Simultaneous ingestion of RGB, LiDAR point cloud, and thermal imaging streams. Each modality processed in a dedicated lane before evidence-weighted fusion at the aggregation stage.',
    },
  ],
  deploymentLayers: [
    { id: 'L1', label: 'Edge Node', description: 'NEPA engine at drone, real-time spike processing, latency contract enforced' },
    { id: 'L2', label: 'Site Gateway', description: 'Multi-node aggregation, local evidence store, site-level audit chain' },
    { id: 'L3', label: 'Enterprise Hub', description: 'Centralised governance, cross-site analytics, compliance reporting' },
    { id: 'L4', label: 'Audit Vault', description: 'Immutable long-term evidence storage, third-party auditor access portal' },
  ],
  evidenceCapabilities: [
    {
      title: 'Immutable Evidence Storage',
      description: 'All raw sensor frames, processed spike representations, and derived findings are written to append-only storage with cryptographic sealing. No record can be modified without detection.',
    },
    {
      title: 'Version Consistency Validation',
      description: 'Before any replay attempt, the system validates that stored configuration hashes match the requested engine version. Mismatches halt replay and generate a compliance incident record.',
    },
    {
      title: 'Structured Replay Verification',
      description: 'Byte-level deterministic replay reproduces every intermediate processing state. Third-party auditors receive a signed attestation package alongside the replay artifacts.',
    },
    {
      title: 'Tamper-Evident Chain Sealing',
      description: 'Every system event enters a tamper-evident chain. Each block references its predecessor hash, making retrospective modification detectable during any subsequent audit review.',
    },
  ],
  governanceItems: [
    { title: 'Determinism Policy', status: 'Active' },
    { title: 'Change Control Discipline', status: 'Active' },
    { title: 'Parameter Locking', status: 'Active' },
    { title: 'Fault Injection Testing', status: 'Active' },
    { title: 'Readiness Review', status: 'In Review' },
    { title: 'Third-Party Audit Support', status: 'On Request' },
  ],
  integrationBenefits: [
    {
      title: 'Hardware Agnostic',
      description: 'Operates on standard CPU hardware. No proprietary silicon required.',
    },
    {
      title: 'Bandwidth Reduction',
      description: 'Spike-encoded representations substantially reduce bandwidth versus raw video streaming.',
    },
    {
      title: 'REST + gRPC APIs',
      description: 'Standard programmatic interfaces for CMMS, ERP, and GIS integration.',
    },
    {
      title: 'Distributed Scale',
      description: 'Coordinate inspection operations across multiple nodes with centralised evidence aggregation.',
    },
  ],
};
