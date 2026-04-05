export const homepageContent = {
  hero: {
    eyebrow: "AURASENSE / NEPA PLATFORM",
    headline: "Deterministic neuromorphic edge infrastructure for inspection, robotics, and surveillance.",
    subheadline:
      "AuraSense builds deployable edge intelligence systems for environments where latency, traceability, and operational accountability matter. NEPA provides the platform foundation for compression, navigation, and surveillance modules running on drones, cameras, and robotic systems.",
    primaryCta: { label: "Request briefing", href: "/contact" },
    secondaryCta: { label: "Explore platform", href: "/platform" },
    stats: [
      { label: "Execution model", value: "Deterministic" },
      { label: "Replay status", value: "Verified" },
      { label: "Edge posture", value: "Deployable" },
      { label: "Governance mode", value: "Audit-ready" },
    ],
  },

  credibility: {
    title: "Built for environments that have to withstand scrutiny.",
    body: [
      "Inspection and monitoring systems increasingly influence maintenance decisions, asset valuation, operational continuity, and regulatory reporting. In those environments, a model output alone is not enough. The system must also preserve how the output was produced, under which configuration it ran, and whether the result can be independently re-derived.",
      "NEPA is AuraSense's deterministic edge platform for that class of problem. It is designed around bounded execution, replay verification, structured telemetry, and evidence traceability so that edge intelligence can operate as infrastructure rather than exploratory analytics.",
    ],
  },

  platformPillars: {
    title: "Why deterministic edge infrastructure",
    items: [
      {
        title: "Bounded execution",
        description:
          "Time-critical paths are separated from secondary analytics so operational behavior remains predictable under load.",
      },
      {
        title: "Replay verification",
        description:
          "Runs can be re-derived against preserved evidence and recorded configuration state for technical review and audit support.",
      },
      {
        title: "Governance by design",
        description:
          "Configuration locking, append-only evidence handling, and chain-aware validation make accountability part of the architecture.",
      },
      {
        title: "Real deployment posture",
        description:
          "The platform is designed for drones, cameras, robots, and site-edge systems rather than cloud-only demonstration flows.",
      },
    ],
  },

  products: {
    title: "Product modules on the AuraSense stack",
    intro:
      "AuraSense products are organized as operational modules on top of the NEPA platform. Each module addresses a distinct edge intelligence problem while sharing the same discipline around determinism, traceability, and deployment realism.",
    items: [
      {
        name: "SFSVC",
        href: "/products/sfsvc",
        summary:
          "Neuromorphic compression and perception SDK for low-bandwidth edge inspection, built for CPU-first deployment and offline operation.",
      },
      {
        name: "NERMN",
        href: "/products/nermn",
        summary:
          "Neuromorphic edge robotic navigation module for drones and robotic systems operating under constrained compute and telemetry conditions.",
      },
      {
        name: "NSSIM",
        href: "/products/nssim",
        summary:
          "Neuromorphic surveillance intelligence module for temporal event reasoning, operator visibility, and multi-site risk workflows.",
      },
    ],
  },

  deployment: {
    title: "Designed for the real edge.",
    body: [
      "AuraSense systems are structured for deployment across drone nodes, robotic platforms, fixed cameras, site gateways, and enterprise oversight layers. The objective is not to replace the entire stack, but to add accountable intelligence at the point where perception, action, and evidence matter most.",
      "This makes the platform suitable for inspection operations, secure facilities, distributed sensing environments, and field systems where compute, bandwidth, and audit requirements all exist at once.",
    ],
  },

  governance: {
    title: "Evidence, replay, and chain of custody are first-class concerns.",
    items: [
      "Append-only evidence handling for preserved operational records",
      "Replay-oriented validation for technical review and audit support",
      "Configuration binding and version consistency checks before trust decisions",
      "Structured telemetry and operator accountability across edge runs",
    ],
  },

  closing: {
    title: "Deterministic. Deployable. Reviewable.",
    body:
      "Request a technical briefing if you are evaluating AuraSense for infrastructure inspection, neuromorphic edge deployment, robotics navigation, or surveillance intelligence under enterprise constraints.",
    primaryCta: { label: "Request briefing", href: "/contact" },
    secondaryCta: { label: "View products", href: "/products" },
  },
};
