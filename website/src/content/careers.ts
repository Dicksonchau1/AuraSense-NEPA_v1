import type { PageContent, RoleCategory } from '../types/content';

export const roleCategories: RoleCategory[] = [
  {
    title: 'C++ / Systems Engineers',
    description:
      'Low-latency runtime development, SIMD pipelines, lock-free structures, deterministic memory. C++17 with hard latency SLAs. Experience with AVX2/NEON and real-time scheduling.',
  },
  {
    title: 'Computer Vision / ML Engineers',
    description:
      'Spike-based encoding, temporal differencing, anomaly detection. Build deterministic, auditable perception systems. Experience with neuromorphic computing or structured CV applies directly.',
  },
  {
    title: 'Edge AI / Embedded Engineers',
    description:
      'Deploy ML on ARM64 embedded platforms with real power and thermal constraints. Cross-compilation, offline operation. Jetson, Pi, Qualcomm experience relevant.',
  },
  {
    title: 'Robotics / Autonomy Engineers',
    description:
      'Navigation, sensor fusion, safety supervision, watchdog architectures. Build systems that move platforms safely in unstructured environments. ROS2, MAVLink, event cameras, LiDAR experience relevant.',
  },
  {
    title: 'Full-Stack Product Engineers',
    description:
      'Dashboards, telemetry visualization, configuration tools, deployment tooling. TypeScript, React, real-time data visualization. Build tools operators rely on under pressure.',
  },
  {
    title: 'Technical Product / Deployment Operators',
    description:
      'Field deployment, customer onboarding, integration engineering, documentation. Bridge the gap between engineering and operational reality. Edge or industrial IoT experience valued.',
  },
];

const whatWeWorkOnSection = {
  id: 'what-we-work-on',
  eyebrow: 'Work',
  title: 'What We Work On',
  description:
    'Deterministic edge intelligence for critical infrastructure — neuromorphic computing, edge inference, robotic autonomy, surveillance, and governance. Everything runs on real hardware under real constraints.',
  items: [
    {
      title: 'Neuromorphic Computing',
      description:
        'Spike-based encoding and event-driven perception deployed on commodity CPUs with deterministic timing. Production systems, not academic exercises.',
    },
    {
      title: 'Edge Inference and Low-Latency Processing',
      description:
        'SIMD-accelerated pipelines, lock-free queues, pre-allocated buffers. P95 < 0.5ms classification on x86_64. Cache-aware, branch-free, zero hot-path allocation.',
    },
    {
      title: 'Robotic Autonomy and Navigation',
      description:
        'Event camera ingestion, spike-encoded sensor fusion, bounded-latency planning, watchdog safety. GPS-denied and confined environments. Safety is structural.',
    },
    {
      title: 'Surveillance Intelligence',
      description:
        'Multi-sensor temporal correlation, alert orchestration, severity tiering, evidence retention. Actionable alerts with full chain-of-custody evidence packages.',
    },
    {
      title: 'Deterministic Systems and Governance',
      description:
        'Replay verification, chain-sealed audit logs, model provenance, versioned bundle promotion. Every output is replay-verifiable and evidence-grade.',
    },
    {
      title: 'Infrastructure and Deployment',
      description:
        'Offline deployment, Ed25519 activation, air-gapped operation, multi-site coordination. Deploy on drones, robots, surveillance, and gateways. Deployment engineering is first-class.',
    },
  ],
};

const whoWeHireSection = {
  id: 'who-we-hire',
  eyebrow: 'Roles',
  title: 'Who We Hire',
  description:
    'We hire engineers who build systems that work in operational environments. No exact title matches required — cross-domain experience is often more valuable.',
  items: roleCategories.map((role) => ({
    title: role.title,
    description: role.description,
  })),
};

const howWeWorkSection = {
  id: 'how-we-work',
  eyebrow: 'Culture',
  title: 'How We Work',
  description:
    'Small engineering team building production infrastructure for critical applications. Careful, accountable, technically rigorous. Not consumer product. Not growth metrics.',
  items: [
    {
      title: 'Ownership',
      description:
        'Own your systems from design through deployment. You build it, you support it. This produces engineers who build operable systems.',
    },
    {
      title: 'Technical Depth',
      description:
        'Understand systems at the detail level that matters for production reliability. Know your SIMD throughput. Know your evidence chain integrity.',
    },
    {
      title: 'Deployment Realism',
      description:
        'Every design decision evaluated against power, compute, connectivity, and operational reality. Optimize for systems that work where they actually run.',
    },
    {
      title: 'Careful Engineering',
      description:
        'Ship carefully, not cautiously. Understand risk, bound it, ship with confidence. Thorough testing and explicit safety margins over reckless speed.',
    },
    {
      title: 'Low-Ego, High-Accountability',
      description:
        'Technical disagreements resolved with evidence, not seniority. Mistakes addressed without blame, but failure to learn is not tolerated.',
    },
  ],
};

const whatCandidatesShouldExpectSection = {
  id: 'interview-process',
  eyebrow: 'Process',
  title: 'What Candidates Should Expect',
  description:
    'Assess whether you can do the work — not algorithmic puzzles. We look for technical depth, practical judgment, and clear communication.',
  items: [
    {
      title: 'Technical Conversation',
      description:
        'Discuss your background, systems you built, and decisions you made. We care about engineering judgment and tradeoffs, not rote answers.',
    },
    {
      title: 'Project Discussion',
      description:
        'Deep dive into a specific project — architecture, challenges, and lessons. Bring a project you are proud of or one that taught you something.',
    },
    {
      title: 'Practical Relevance',
      description:
        'Problems drawn from our actual work — edge processing, sensor fusion, real-time systems, evidence integrity. Not algorithmic puzzle collections.',
    },
    {
      title: 'Writing Clarity',
      description:
        'Clear technical writing is part of the job — documentation, design proposals, incident reports. Clarity and precision matter more than volume.',
    },
  ],
};

const openRolesSection = {
  id: 'open-roles',
  eyebrow: 'Roles',
  title: 'Open Roles',
  description:
    'Selectively hiring in systems, robotics, edge AI, CV, and product engineering. We hire when backgrounds align with our work and technical depth.',
  items: [
    {
      title: 'How to Apply',
      description:
        'Send a short note with portfolio or GitHub to careers@aurasensehk.com. Tell us what you built and why AuraSense fits.',
    },
    {
      title: 'What to Include',
      description:
        'Technical background, links to work (GitHub, papers, portfolios), and which domain interests you most. No formal resume required.',
    },
    {
      title: 'Location and Structure',
      description:
        'Hong Kong based with distributed team. Remote supported where effective. Some roles require physical presence. Competitive compensation.',
    },
  ],
};

export const careersPageContent: PageContent = {
  hero: {
    headline: 'Build Systems That Survive Contact with Reality',
    subheadline: 'Engineering at AuraSense',
    description:
      'We build real edge infrastructure for inspection, surveillance, and autonomy. If you ship reliable systems under operational constraints, not demos, we should talk.',
    primaryCta: { label: 'View Open Roles', href: '#open-roles' },
    secondaryCta: { label: 'Contact Careers', href: 'mailto:careers@aurasensehk.com' },
  },
  sections: [
    whatWeWorkOnSection,
    whoWeHireSection,
    howWeWorkSection,
    whatCandidatesShouldExpectSection,
    openRolesSection,
  ],
};
