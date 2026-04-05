import type { ProductPageContent } from '../types/content';

export const nermnContent: ProductPageContent = {
  hero: {
    subheadline: 'NERMN — Neuromorphic Edge Robotic Navigation Module',
    headline: 'Edge-Native Navigation for Inspection Platforms',
    description:
      'Spike-encoded sensor pipeline. Bounded-latency path decisions. Watchdog-supervised safety with degraded-safe fallback. Built for GPS-denied, confined, and structurally complex environments.',
    primaryCta: { label: 'Request NERMN Briefing', href: '/contact' },
    secondaryCta: { label: 'View All Products', href: '/products' },
  },
  sections: [
    {
      id: 'navigation-stack',
      eyebrow: 'Architecture',
      title: 'Navigation Stack',
      description:
        'Layered navigation for platforms with limited compute, unreliable GPS, and confined paths. Spike-encoded pipeline with bounded-latency commands and safety supervision.',
      items: [
        {
          title: 'Sensor Ingestion Layer',
          description:
            'Ingests DVS/DAVIS event cameras, LiDAR, IMU, and odometry. Timestamped at ingestion with clock sync and sensor health monitoring.',
        },
        {
          title: 'Spike Encoding Stage',
          description:
            'Transforms raw data into sparse temporal spike signals. Event cameras are natively compatible. LiDAR and IMU use rate-coding and temporal differencing.',
        },
        {
          title: 'Path Planning Engine',
          description:
            'Produces heading, velocity, and avoidance decisions within hard latency bounds over a local occupancy grid updated at sensor rate.',
        },
        {
          title: 'Command Output Interface',
          description:
            'Deterministic command output via MAVLink, ROS2, or serial/CAN bus. Configurable format, rate, and safety bounds per platform.',
        },
      ],
    },
    {
      id: 'sensor-to-decision',
      eyebrow: 'Pipeline',
      title: 'Sensor-to-Decision Pipeline',
      description:
        'Deterministic stages from raw input to navigation commands. Bounded-latency at every stage with all intermediates logged for replay.',
      items: [
        {
          title: 'Event Camera Processing',
          description:
            'DVS events accumulated into temporal windows as spike frames. Microsecond resolution with batch processing at 100–500Hz.',
        },
        {
          title: 'LiDAR Integration',
          description:
            'LiDAR projected into occupancy grid with temporal differencing. New obstacles trigger spikes, stable geometry suppressed for sparse representation.',
        },
        {
          title: 'Spike-Encoded Inference',
          description:
            'Neuromorphic inference computes obstacle proximity and traversability using spike-timing. CPU with SIMD — no GPU dependency.',
        },
        {
          title: 'Decision Arbitration',
          description:
            'Priority: safety constraints → obstacle avoidance → mission waypoints. Decisions logged with full context for post-mission review.',
        },
      ],
    },
    {
      id: 'safety-supervision',
      eyebrow: 'Safety',
      title: 'Safety and Supervision',
      description:
        'Independent watchdog supervision overrides commands when safety invariants are violated. Pre-configured degraded-safe fallback on pipeline failure.',
      items: [
        {
          title: 'Watchdog Supervision',
          description:
            'Independent process monitoring liveness, latency, and output bounds. Triggers fallback on missed deadline. Runs on separate core with RT priority.',
        },
        {
          title: 'Degraded-Safe Fallback',
          description:
            'Controlled deceleration and station-keeping on pipeline failure. Configurable: hover, retreat-to-waypoint, or controlled landing.',
        },
        {
          title: 'Command Bounds Enforcement',
          description:
            'Every command validated against per-platform safety envelopes. Out-of-bounds velocity, acceleration, and heading clamped and logged.',
        },
        {
          title: 'Safety Event Logging',
          description:
            'Every intervention recorded as chain-sealed safety event. Same integrity as classification telemetry, retained for post-mission review.',
        },
      ],
    },
    {
      id: 'edge-runtime',
      eyebrow: 'Runtime',
      title: 'Edge Runtime Profile',
      description:
        'Commodity edge hardware, no GPU. Designed for compute, power, and thermal constraints of drones, ground robots, and rail crawlers.',
      items: [
        {
          title: 'Compute Requirements',
          description:
            'Minimum 4-core ARM64/x86_64 with SIMD. 2GB RAM min, 4GB recommended. 5–15W typical for ARM64 embedded.',
        },
        {
          title: 'Real-Time Scheduling',
          description:
            'SCHED_FIFO with CPU affinity. Dedicated cores per stage. Lock-free inter-stage communication eliminates priority inversion.',
        },
        {
          title: 'Latency Characteristics',
          description:
            'Full pipeline P95 < 5ms, P99 < 10ms. Path planning iterations under 2ms. Bounds hold under full sensor load.',
        },
        {
          title: 'Offline Operation',
          description:
            'No network required. Models and configs loaded at startup. Local evidence retention. Post-mission retrieval via physical media or selective uplink.',
        },
      ],
    },
    {
      id: 'robotics-integration',
      eyebrow: 'Integration',
      title: 'Robotics and Drone Integration',
      description:
        'Configurable command interface validated against representative inspection platforms. Supports common robotics protocols.',
      items: [
        {
          title: 'MAVLink Integration',
          description:
            'Native MAVLink v2 with offboard mode, configurable heartbeat and failsafe. Validated against PX4 and ArduPilot.',
        },
        {
          title: 'ROS2 Integration',
          description:
            'ROS2 node with configurable topics for navigation, sensors, and telemetry. Standard message types. Compatible with Humble and Iron.',
        },
        {
          title: 'Direct Serial/CAN Interface',
          description:
            'Direct UART and CAN bus output for custom platforms, rail crawlers, and legacy inspection systems.',
        },
        {
          title: 'Co-Deployment with SFSVC',
          description:
            'NERMN and SFSVC run simultaneously on the same edge platform. Shared evidence layer with coordinated post-mission telemetry.',
        },
      ],
    },
    {
      id: 'deployment-model',
      eyebrow: 'Deployment',
      title: 'Deployment Model',
      description:
        'Native binary with versioned bundles, human approval gates, and offline activation via NEPA governance pipeline.',
      items: [
        {
          title: 'Platform Provisioning',
          description:
            'Hardware-specific configuration with sensor mapping, safety bounds, and comm settings. Declarative format validated at startup.',
        },
        {
          title: 'Mission Configuration',
          description:
            'Waypoints, inspection zones, and survey patterns loaded from config files. Pre-programmed or dynamically updated within safety bounds.',
        },
        {
          title: 'Model and Safety Bundle Updates',
          description:
            'Versioned bundles with SHA-256 integrity. Governed promotion pipeline with human approval at each gate.',
        },
        {
          title: 'Post-Mission Data Handling',
          description:
            'Evidence logs and telemetry retained on-platform in chain-sealed format. Retrieval via USB, ethernet, or wireless uplink.',
        },
      ],
    },
  ],
  specs: [
    { label: 'Sensor-to-Command Latency (P95)', value: '< 5ms' },
    { label: 'Sensor-to-Command Latency (P99)', value: '< 10ms' },
    { label: 'Path Planning Iteration', value: '< 2ms' },
    { label: 'Sensor Update Rate', value: '100–500Hz (configurable)' },
    { label: 'Minimum Compute', value: '4-core ARM64/x86_64 with SIMD' },
    { label: 'Minimum RAM', value: '2GB (4GB recommended)' },
    { label: 'Power Budget', value: '5–15W typical (ARM64)' },
    { label: 'Communication Protocols', value: 'MAVLink v2, ROS2, Serial, CAN' },
    { label: 'Safety Supervision', value: 'Independent watchdog with fallback' },
    { label: 'License Verification', value: 'Ed25519 offline activation' },
  ],
};
