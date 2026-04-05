export const resourcesContent = {
  hero: {
    eyebrow: "RESOURCES",
    headline: "Technical materials for evaluation, deployment, and integration.",
    subheadline:
      "AuraSense publishes product, platform, deployment, and governance materials for engineers, enterprise evaluators, and integration partners. The goal is to make technical review easier, not noisier.",
  },

  intro: {
    title: "A documentation surface for real evaluation.",
    body: [
      "Resources should help a technical team understand what the system does, how it deploys, what constraints it operates under, and where it fits inside an existing stack. They should also help enterprise reviewers assess traceability, supportability, and operational readiness.",
      "For that reason, AuraSense organizes materials around platform architecture, product deployment, integration pathways, governance posture, and support access rather than generic content marketing.",
    ],
  },

  categories: {
    title: "Resource categories",
    items: [
      {
        title: "Platform documentation",
        description:
          "Materials covering NEPA architecture, deterministic execution, replay verification, evidence handling, and governance controls.",
      },
      {
        title: "Product documentation",
        description:
          "Product-specific overviews and technical briefs for SFSVC, NERMN, and NSSIM.",
      },
      {
        title: "Integration guides",
        description:
          "Developer-oriented materials for embedding AuraSense modules into edge, robotics, camera, and enterprise workflows.",
      },
      {
        title: "Deployment notes",
        description:
          "Operational guidance covering runtime environments, supported hardware classes, activation models, and field deployment considerations.",
      },
      {
        title: "Licensing and legal",
        description:
          "Public trust materials including FAQ, terms, privacy, refund, cookies, and product activation guidance.",
      },
      {
        title: "Architecture briefs",
        description:
          "Short explainers for evaluators who need product and platform structure without reading full technical references.",
      },
    ],
  },

  featured: {
    title: "Featured materials",
    items: [
      {
        title: "NEPA Platform Overview",
        type: "Platform brief",
        audience: "Enterprise evaluators",
        description:
          "A concise overview of deterministic inspection infrastructure, replay verification, and governance-oriented edge deployment.",
        cta: "View brief",
      },
      {
        title: "SFSVC Deployment Guide",
        type: "Technical guide",
        audience: "Engineering teams",
        description:
          "Runtime assumptions, supported environments, and deployment considerations for neuromorphic compression at the edge.",
        cta: "Read guide",
      },
      {
        title: "SFSVC Licensing and Activation FAQ",
        type: "Support resource",
        audience: "Operators and buyers",
        description:
          "Activation model, offline validation posture, trial path, and operational licensing behavior.",
        cta: "Open FAQ",
      },
      {
        title: "NERMN Navigation Stack Brief",
        type: "Architecture brief",
        audience: "Robotics teams",
        description:
          "Sensor-to-decision pipeline summary for neuromorphic edge navigation under constrained compute conditions.",
        cta: "Request access",
      },
      {
        title: "NSSIM Surveillance Intelligence Overview",
        type: "Product overview",
        audience: "Security and operations teams",
        description:
          "Temporal intelligence, audit logging, and multi-site visibility for surveillance deployments.",
        cta: "Request brief",
      },
      {
        title: "Edge Deployment Reference Architecture",
        type: "Reference architecture",
        audience: "Partners and integrators",
        description:
          "A reference model covering edge nodes, site gateways, centralized governance, and long-term evidence retention.",
        cta: "View architecture",
      },
      {
        title: "Governance and Replay Verification Brief",
        type: "Governance brief",
        audience: "Procurement and compliance reviewers",
        description:
          "How AuraSense approaches accountability, determinism, replay, and evidence traceability in operational systems.",
        cta: "Request briefing",
      },
    ],
  },

  audience: {
    title: "Start from the material that matches your role.",
    groups: [
      {
        name: "Engineering teams",
        description:
          "Start with platform documentation, deployment notes, integration guides, and product architecture briefs.",
      },
      {
        name: "Enterprise evaluators",
        description:
          "Start with the platform overview, governance brief, product overviews, and legal/support materials.",
      },
      {
        name: "Security and operations teams",
        description:
          "Start with NSSIM materials, evidence-handling notes, audit-oriented resources, and deployment workflows.",
      },
      {
        name: "Partners and integrators",
        description:
          "Start with reference architecture documents, integration notes, and product-specific technical briefings.",
      },
    ],
  },

  support: {
    title: "Need something beyond the public resources?",
    body:
      "Some materials are public, while others are shared during guided evaluation or enterprise onboarding. If you need product briefings, deployment notes, or integration support that is not listed here, contact AuraSense for the appropriate documentation path.",
    primaryCta: { label: "Contact support", href: "/contact" },
    secondaryCta: { label: "Open FAQ", href: "/faq" },
  },
};
