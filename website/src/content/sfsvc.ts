import type { ProductPageContent } from '../types/content';

export const sfsvcContent: ProductPageContent = {
  hero: {
    headline: 'SFSVC — Neuromorphic Compression and Perception SDK',
    subheadline: 'Spike-based Facade Surface Vision Codec',
    description:
      'Neuromorphic compression and perception SDK for edge inspection. Spike-train encoding, CPU-only classification with SIMD, structured defect telemetry. No GPU. Offline-capable.',
    primaryCta: { label: 'Request SFSVC Evaluation', href: '/contact' },
    secondaryCta: { label: 'View All Products', href: '/products' },
  },
  sections: [
    {
      id: 'why-sfsvc',
      eyebrow: 'Overview',
      title: 'Why SFSVC',
      description:
        'Spike-based temporal encoding produces structured defect telemetry at sub-millisecond latency on commodity CPUs. Deterministic, auditable, no GPU dependency.',
      items: [
        {
          title: 'CPU-First Architecture',
          description:
            'Runs entirely on CPU with AVX2/NEON SIMD. No GPU, no CUDA, no driver matrix. Deploys on drones, gateways, and ruggedized field units.',
        },
        {
          title: 'Spike-Based Temporal Encoding',
          description:
            'Encodes temporal frame differences as sparse spike events capturing structural changes. 10–50× compression over raw frames while discarding static background.',
        },
        {
          title: 'Deterministic Classification',
          description:
            'Identical outputs for identical inputs regardless of timing or platform. No GPU non-determinism. Every classification is replay-verifiable.',
        },
        {
          title: 'Offline Operation',
          description:
            'No network required. Ed25519 offline license verification. Self-contained binaries, models, and local evidence storage. Post-mission retrieval via physical media.',
        },
      ],
    },
    {
      id: 'compression-pipeline',
      eyebrow: 'Architecture',
      title: 'Compression Pipeline',
      description:
        'Deterministic stages: temporal differencing, spike encoding, feature extraction, anomaly scoring, classification. Each stage bounded-latency with artifacts retained for replay.',
      items: [
        {
          title: 'Temporal Differencing',
          description:
            'SIMD-accelerated pixel-wise subtraction highlights structural changes. Static background suppressed, reducing downstream processing 80–95%.',
        },
        {
          title: 'Spike Encoding',
          description:
            'Temporal differences encoded as discrete, timestamped spike events. Configurable threshold per deployment. Naturally compressed, temporally precise.',
        },
        {
          title: 'Feature Extraction and Anomaly Scoring',
          description:
            'Cosine similarity matching against D=256 prototypes. Advisory threshold at 0.35, high-severity at 0.55. Anomaly scores drive telemetry emission.',
        },
        {
          title: 'Structured Telemetry Output',
          description:
            'Structured records with defect type, severity, zone, anomaly score, and model version. Chain-sealed into evidence log for review and replay.',
        },
      ],
    },
    {
      id: 'deployment-profile',
      eyebrow: 'Deployment',
      title: 'Deployment Profile',
      description:
        'Native shared library with C headers and Python bindings. Linux x86_64 and ARM64 with SIMD. Offline-capable with Ed25519 activation.',
      items: [
        {
          title: 'Platform Targets',
          description:
            'Linux x86_64 with AVX2 (primary). ARM64 with NEON (embedded). Minimum 2GB RAM. No GPU or specialized accelerator required.',
        },
        {
          title: 'SIMD Acceleration',
          description:
            '256-bit SIMD with _mm256_fmadd_ps, 4-way unrolling, 32-byte aligned buffers. Compile-time target selection with scalar fallback.',
        },
        {
          title: 'Offline Activation',
          description:
            'Ed25519 public-key verification. Offline token, no server callback, no network dependency. Persists across reboots.',
        },
        {
          title: 'Model Bundle Management',
          description:
            'Versioned bundles with SHA-256 integrity. Governed promotion pipeline with human approval gates. No autonomous bundle promotion.',
        },
      ],
    },
    {
      id: 'supported-environments',
      eyebrow: 'Compatibility',
      title: 'Supported Environments',
      description:
        'Validated target environments. Deployment outside these targets may work but is not covered by support guarantees.',
      items: [
        {
          title: 'Linux x86_64 (Primary)',
          description:
            'Ubuntu 20.04+, Debian 11+, RHEL 8+. AVX2-capable CPU (Haswell+/Excavator+). Recommended 4+ cores, 4GB+ RAM.',
        },
        {
          title: 'Linux ARM64 (Embedded)',
          description:
            'Ubuntu 20.04+ aarch64, Yocto/Buildroot. NEON-capable Cortex-A53+. Validated on Jetson, Raspberry Pi 4/5, and Qualcomm RB5.',
        },
        {
          title: 'Containerized Deployment',
          description:
            'Docker multi-stage build. Compatible with Kubernetes, Docker Compose, and standalone runtimes. CPU pinning recommended for latency-sensitive use.',
        },
        {
          title: 'Cross-Compilation',
          description:
            'CMake cross-compilation for ARM64 from x86_64 hosts. Toolchain files for common embedded Linux configurations.',
        },
      ],
    },
    {
      id: 'licensing',
      eyebrow: 'Licensing',
      title: 'Licensing',
      description:
        'Commercial license with offline activation. Evaluation access for qualified operators, integrators, and enterprise teams.',
      items: [
        {
          title: 'Activation Model',
          description:
            'Ed25519-signed tokens bound to hardware fingerprint. No network required. Terms and expiration encoded in-token.',
        },
        {
          title: 'Evaluation Access',
          description:
            'Time-limited evaluation with full SDK, sample bundles, documentation, and engineering support. Contact engineering to discuss scope.',
        },
        {
          title: 'Deployment Licensing',
          description:
            'Production licenses scoped by device count, site, and term. Volume and enterprise licensing available for multi-site deployments.',
          cta: { label: 'Read Licensing FAQ', href: '/faq' },
        },
      ],
    },
    {
      id: 'integration-path',
      eyebrow: 'Integration',
      title: 'Integration Path',
      description:
        'Public C headers, Python bindings, and documented API. Integration engineers receive documentation, examples, and onboarding support.',
      items: [
        {
          title: 'Public Headers',
          description:
            'Stable versioned C API in a single header. ABI stable across minor versions. Breaking changes reserved for major increments.',
        },
        {
          title: 'Python Bindings',
          description:
            'SpikeCodec, CrackDetector, VideoProcessor via ctypes/cffi. NumPy interop for frame data. For prototyping, evaluation, and testing.',
        },
        {
          title: 'Example Code and Documentation',
          description:
            'Documented examples for initialization, processing, telemetry, and export. Quickstart guide for first-frame classification in under 10 minutes.',
        },
        {
          title: 'Developer Onboarding',
          description:
            'Guided onboarding during evaluation — architecture walkthrough, integration planning, configuration review, and engineering support.',
        },
      ],
    },
  ],
  specs: [
    { label: 'Classification Latency (P95)', value: '< 0.5ms at 720p' },
    { label: 'Classification Latency (P99)', value: '< 0.8ms at 720p' },
    { label: 'Throughput', value: '125+ FPS on commodity x86_64' },
    { label: 'Compression Ratio', value: '10–50× over raw frames' },
    { label: 'Embedding Dimension', value: '256 (float32)' },
    { label: 'Similarity Metric', value: 'Cosine (L2-normalized dot product)' },
    { label: 'SIMD Requirement', value: 'AVX2 (x86_64) / NEON (ARM64)' },
    { label: 'Memory Allocation', value: 'Pre-allocated, no hot-path heap' },
    { label: 'License Verification', value: 'Ed25519 offline activation' },
    { label: 'Platform', value: 'Linux x86_64, Linux ARM64' },
  ],
  faqItems: [
    {
      question: 'Does SFSVC require a GPU?',
      answer:
        'No. SFSVC runs entirely on CPU using AVX2 (x86_64) or NEON (ARM64) SIMD acceleration. There is no GPU dependency, no CUDA requirement, and no driver compatibility concern.',
    },
    {
      question: 'Can SFSVC operate offline?',
      answer:
        'Yes. SFSVC is designed for offline operation. License activation uses Ed25519 offline verification. Model bundles, runtime, and evidence storage are self-contained. No network connectivity is required for inference or evidence retention.',
    },
    {
      question: 'What defect types does SFSVC classify?',
      answer:
        'SFSVC classifies structural surface defects including cracks, spalling, delamination, corrosion, and surface anomalies. Defect types and severity grades are configurable per deployment context through the model bundle.',
    },
    {
      question: 'How is evidence integrity maintained?',
      answer:
        'Every telemetry record is chain-sealed — each entry includes the SHA-256 hash of the previous entry in canonical JSON form. The evidence chain is append-only and tamper-evident. Replay verification confirms output correctness from sealed session logs.',
    },
  ],
};
