import type { ProductConfig } from '../types/content';

export const sfsvcConfig: ProductConfig = {
  slug: 'sfsvc',
  shortLabel: 'SFSVC',
  fullName: 'SFSVC — Neuromorphic Compression and Perception SDK',
  headline: 'Neuromorphic Compression and Perception SDK',
  subheadline: 'Low-bandwidth edge inspection and temporal signal reduction for embedded deployment.',
  summary: 'SFSVC is the neuromorphic perception core that powers facade inspection. It converts UAV video into sparse spike representations, detects cracks and surface anomalies deterministically on the edge, and emits tamper-evident audit logs for every inspection session.',
  status: 'active',
  pillars: [
    {
      title: 'Air-Gapped Operation',
      description: 'Runs fully offline. No internet required during flights. All spike encoding, detection logic, and audit logging execute locally on the edge controller.',
    },
    {
      title: 'Neuromorphic Encoding',
      description: 'Converts video frames into sparse spike representations, achieving up to 9.97× compression while preserving crack-relevant temporal edge signals.',
    },
    {
      title: 'Cryptographic Audit Trail',
      description: 'Every session emits a hash-chained, Ed25519-signed audit log. Tamper detection is deterministic via replay verification.',
    },
    {
      title: 'Deterministic Detection',
      description: 'Crack detection runs under deterministic control loop. P99 latency ≤ 2.81 ms. Zero SLA violations across benchmark runs.',
    },
    {
      title: 'CPU-Only Inference',
      description: 'AVX2-optimised codec path requires no dedicated GPU. Typical draw: 2–4 W vs. 15–30 W for GPU-based pipelines. Suitable for battery-operated edge nodes.',
    },
    {
      title: 'MBIS-Aligned Output',
      description: 'Structured defect tables, severity bands, and colour-coded risk maps generated in formats compatible with Hong Kong MBIS reporting workflows.',
    },
  ],
  architectureNodes: [
    { id: 'ingest', label: 'UAV Video Ingest', type: 'input', position: 0 },
    { id: 'spike', label: 'Spike Encoder', type: 'process', position: 1, annotations: ['AVX2 / NEON'] },
    { id: 'detect', label: 'Deterministic Detection', type: 'core', position: 2, annotations: ['P99 ≤ 2.81ms'] },
    { id: 'audit', label: 'Audit Log (Ed25519)', type: 'process', position: 3 },
    { id: 'output', label: 'Inspection Report', type: 'output', position: 4 },
  ],
  deploymentBullets: [
    'CPU-only operation — no GPU required',
    'SIMD acceleration via AVX2 (x86_64) and NEON (ARM64)',
    'Ubuntu 22.04 LTS primary, Ubuntu 20.04 LTS supported',
    'x86_64 Intel/AMD with AVX2; ARM64 Jetson and Raspberry Pi 5',
    'Edge-native Linux process with optional REST status endpoint',
    'DJI / ArduPilot telemetry bus integration',
  ],
  governanceBullets: [
    'Ed25519 cryptographically signed license tokens',
    'Hardware fingerprint binding on first activation',
    'Local license validation — BVLOS compatible',
    'Offline operation with 30-day check-in cycle',
    'Hash-chained audit logs for evidentiary workflows',
  ],
  ctaLabel: 'Request SDK Access',
  ctaHref: '/contact',
  secondaryCtaLabel: 'View Technical Specs',
  secondaryCtaHref: '/products/sfsvc#specs',
  specs: [
    { label: 'CPU Architecture', value: 'x86_64 with AVX2 (Intel Haswell+ / AMD Ryzen). ARM64 with NEON fallback.' },
    { label: 'Operating System', value: 'Ubuntu 22.04 LTS (primary). Ubuntu 20.04 LTS supported. Other Linux distros on request.' },
    { label: 'Storage', value: 'SATA or NVMe SSD, sustained ≥ 50 MB/s write. Minimum 64 GB free for log retention.' },
    { label: 'GPU Requirement', value: 'None. Entirely CPU-based. AVX2 SIMD provides sufficient throughput for 1080p 30 fps.' },
    { label: 'Network (Runtime)', value: 'Not required during inspection flights. Internet needed only for initial activation and signed Rule Bundle updates.' },
    { label: 'Encoding Latency', value: 'Avg 2.50 ms, P99 ≤ 2.81 ms per frame at 1080p 30 fps on reference hardware (Intel Core i7-12700, 32 GB DDR5).' },
    { label: 'Compression Ratio', value: '9.97× vs raw H.264. 89.97% bandwidth reduction at 1080p 30 fps continuous operation.' },
    { label: 'Audit Log Format', value: 'Hash-chained, Ed25519-signed binary log. Verified offline via replay CLI utility.' },
    { label: 'Detection Control Loop', value: 'Deterministic control at ~106 Hz. 6 ms safety contract. 0% SLA violations on benchmark dataset.' },
    { label: 'Rule Bundle Signing', value: 'Ed25519 keypair. Public keys shipped in device licence. Custom Rule Authoring on Enterprise tier.' },
    { label: 'SDK Language', value: 'C++ (private). SIMD AVX2 optimised with lock-free queues. Python bindings on Professional+.' },
    { label: 'Deployment Model', value: 'Edge-native Linux process. DJI / ArduPilot telemetry integration. Optional REST endpoint.' },
  ],
  faqItems: [
    {
      question: 'Does SFSVC require a GPU?',
      answer: 'No. SFSVC is designed specifically to run without a GPU. It uses SIMD CPU instructions (AVX2 on x86, NEON on ARM) for all processing. This enables sub-2ms latency at 2–4W power draw.',
    },
    {
      question: 'Does it work offline / BVLOS?',
      answer: 'Yes. SFSVC validates licenses using Ed25519 local cryptographic verification. No internet connection is required during drone operations. Online validation only occurs at initial activation and periodic check-in (every 30 days).',
    },
    {
      question: 'What platforms are supported?',
      answer: 'Ubuntu 22.04 on x86_64 (Intel/AMD) and ARM64 (Jetson, Raspberry Pi 5). ARM32 support is in beta. Windows support is on the roadmap.',
    },
    {
      question: 'Can I integrate SFSVC with ROS2?',
      answer: 'ROS2 integration is on the roadmap. Currently SFSVC provides a standard C++ API and can be called from any ROS2 node as a library.',
    },
    {
      question: 'How is SFSVC different from OpenCV?',
      answer: 'OpenCV processes every pixel in every frame. SFSVC uses neuromorphic spike encoding to process only temporal changes — reducing data volume by ~98% before detection. This is why latency is under 2ms with no GPU.',
    },
  ],
};

export const nermnConfig: ProductConfig = {
  slug: 'nermn',
  shortLabel: 'NERMN',
  fullName: 'NERMN — Neuromorphic Edge Robotic Navigation Module',
  headline: 'Neuromorphic Edge Robotic Navigation Module',
  subheadline: 'Deterministic edge navigation intelligence for autonomous drones and robotic platforms.',
  summary: 'Sub-millisecond sensor fusion with spike-based encoding delivers mission-critical spatial awareness in GPS-denied and degraded environments. Built on NEPA infrastructure with full audit chain and telemetry retention.',
  status: 'launching-soon',
  pillars: [
    {
      title: 'Event-Driven Sensing',
      description: 'Ingests data from event cameras, IMU, and LiDAR sensors. Spike-based encoding reduces data volume at the sensor boundary before any inference computation.',
    },
    {
      title: 'Neuromorphic Inference Core',
      description: 'Temporal pattern matching on spike-encoded sensor streams. Spatial features are extracted through spike-timing-dependent plasticity rules without frame-based batch processing.',
    },
    {
      title: 'Spatial Mapping',
      description: 'Constructs and maintains real-time spatial representations from sparse spike data. Operates in GPS-denied and visually degraded environments.',
    },
    {
      title: 'Mission Planning and Navigation Arbitration',
      description: 'Waypoint planning and command generation from fused spatial state. Navigation arbiter resolves conflicting sensor inputs with deterministic priority arbitration.',
    },
    {
      title: 'Watchdog Supervision',
      description: 'Independent watchdog monitors inference latency, sensor health, and command validity. Violations trigger degraded-safe policy transitions with operator alerting.',
    },
    {
      title: 'Degraded-Safe Policy Layer',
      description: 'Predefined fallback behaviours for sensor loss, communication interruption, or inference timeout. Policy transitions are logged and auditable.',
    },
  ],
  architectureNodes: [
    { id: 'sensors', label: 'Event Sensors', type: 'input', position: 0, annotations: ['IMU / LiDAR'] },
    { id: 'encoder', label: 'Spike Encoder', type: 'process', position: 1, annotations: ['Spike bus'] },
    { id: 'inference', label: 'Neuromorphic Inference Core', type: 'core', position: 2, annotations: ['Inference watchdog'] },
    { id: 'mapper', label: 'Spatial Mapper', type: 'process', position: 3, annotations: ['Waypoint planner'] },
    { id: 'arbiter', label: 'Navigation Arbiter', type: 'output', position: 4, annotations: ['Command output'] },
  ],
  deploymentBullets: [
    'Edge-native Linux runtime for drones and ground robots',
    'Sub-millisecond sensor-to-command latency on reference hardware',
    'GPS-denied and visually degraded environment operation',
    'Telemetry stream for real-time operator visibility',
    'Health monitoring with degraded-safe policy transitions',
    'Compatible with DJI, ArduPilot, and ROS2 platforms',
  ],
  governanceBullets: [
    'Full mission telemetry retention with audit chain',
    'Deterministic replay of navigation decisions',
    'Watchdog event logging for post-mission analysis',
    'Policy transition records for regulatory compliance',
    'Sensor calibration certificate linkage per mission',
  ],
  ctaLabel: 'Join Early Access',
  ctaHref: '/contact',
  secondaryCtaLabel: 'View Architecture',
  secondaryCtaHref: '/products/nermn#architecture',
};

export const nssimConfig: ProductConfig = {
  slug: 'nssim',
  shortLabel: 'NSSIM',
  fullName: 'NSSIM — Neuromorphic Smart Surveillance Intelligence Module',
  headline: 'Neuromorphic Smart Surveillance Intelligence Module',
  subheadline: 'Temporal surveillance intelligence for CCTV and multi-sensor environments.',
  summary: 'Enterprise security intelligence built on NEPA infrastructure. Temporal event reasoning with real-time risk detection, auditability, and multi-site operational orchestration for secure commercial and infrastructure environments.',
  status: 'launching-soon',
  pillars: [
    {
      title: 'Camera and Sensor Ingest',
      description: 'RTSP / ONVIF camera feeds and multi-sensor data ingested at the edge. Spike-based temporal encoding reduces bandwidth before any intelligence processing.',
    },
    {
      title: 'Edge Temporal Intelligence',
      description: 'Event correlation across time and space. Temporal patterns are matched using spike-domain inference, enabling detection of behavioural anomalies invisible to frame-by-frame analysis.',
    },
    {
      title: 'Alert and Risk Engine',
      description: 'Risk scoring and alert orchestration with configurable severity bands. Alert suppression, escalation, and operator routing based on policy rules.',
    },
    {
      title: 'Audit and Evidence Model',
      description: 'Every alert, sensor event, and operator action enters a tamper-evident audit chain. Evidence retention policies enforced per deployment configuration.',
    },
    {
      title: 'Multi-Site Control Plane',
      description: 'Centralised visibility across distributed deployments. Cross-site event correlation, fleet health monitoring, and compliance dashboard for security operations.',
    },
    {
      title: 'Operator Visibility',
      description: 'Real-time dashboards with temporal event timelines, risk heatmaps, and alert status. Designed for security operations centres and enterprise control rooms.',
    },
  ],
  architectureNodes: [
    { id: 'ingest', label: 'Camera & Sensor Ingest', type: 'input', position: 0, annotations: ['RTSP / ONVIF feeds'] },
    { id: 'temporal', label: 'Edge Temporal Intelligence', type: 'process', position: 1, annotations: ['Temporal correlation'] },
    { id: 'risk', label: 'Alert & Risk Engine', type: 'core', position: 2, annotations: ['Alert orchestration'] },
    { id: 'audit', label: 'Audit Log', type: 'process', position: 3, annotations: ['Evidence retention'] },
    { id: 'control', label: 'Multi-Site Control Plane', type: 'output', position: 4, annotations: ['Operator visibility'] },
  ],
  deploymentBullets: [
    'Edge deployment alongside existing CCTV infrastructure',
    'RTSP and ONVIF camera feed ingestion',
    'Multi-site centralised control plane',
    'Secure infrastructure and commercial environment applicability',
    'SOC 2 and ISO 27001 compliant architecture design',
    'Operator dashboards for security operations centres',
  ],
  governanceBullets: [
    'Tamper-evident audit chain for all events and actions',
    'Evidence retention policy enforcement per site',
    'Operator action logging and accountability',
    'Cross-site compliance reporting',
    'Third-party audit access and export capabilities',
  ],
  ctaLabel: 'Join Early Access',
  ctaHref: '/contact',
  secondaryCtaLabel: 'View Architecture',
  secondaryCtaHref: '/products/nssim#architecture',
};

export const allProducts = [sfsvcConfig, nermnConfig, nssimConfig] as const;
