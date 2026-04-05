export const nermnContent = {
  hero: {
    eyebrow: "NERMN",
    headline: "Neuromorphic edge navigation for drones and robotic systems.",
    subheadline:
      "NERMN is AuraSense's robotic navigation module for edge environments where decision speed, telemetry discipline, and deployment constraints must be handled together. Built in alignment with NEPA, it is designed for event-driven sensing, bounded inference, and operational supervision.",
    primaryCta: { label: "Request briefing", href: "/contact" },
    secondaryCta: { label: "View platform", href: "/platform" },
  },

  overview: {
    title: "A navigation stack designed for constrained operational reality.",
    body: [
      "Robotic navigation in the field is not just a planning problem. It is a sensing, timing, safety, and systems accountability problem. NERMN is framed as a module for that full stack, not just for isolated inference.",
      "The architecture combines event-oriented sensing, neuromorphic inference, mapping or mission planning stages, and a controlled action layer that can operate with supervision and degraded-safe behavior when conditions diverge.",
    ],
  },

  pipeline: {
    title: "Sensor to decision pipeline",
    items: [
      "Event and sensor ingest for time-sensitive edge perception",
      "Spike encoding to emphasize temporal signal structure",
      "Neuromorphic inference core for low-latency state interpretation",
      "Spatial mapping or mission planning layer depending on deployment mode",
      "Navigation arbitration or command output under supervisory constraints",
    ],
  },

  safety: {
    title: "Safety and supervision are part of the module.",
    body: [
      "NERMN should not be described as autonomous decisioning without oversight. A serious deployment posture includes watchdog supervision, telemetry visibility, health monitoring, and a degraded-safe policy layer for uncertain or faulted conditions.",
      "That framing makes the module more credible for enterprise, robotics, and field use than treating navigation as a pure model demo.",
    ],
  },

  runtime: {
    title: "Edge runtime profile",
    body:
      "NERMN is intended for compute-constrained environments where latency, power, and communications cannot be assumed away. The product narrative should make clear that the module is built for edge execution and operator-aware deployment, not for cloud-first control loops.",
  },

  integration: {
    title: "Robotics and drone integration",
    body:
      "The product should be presented as integrable with robotic platforms, drone systems, telemetry layers, and mission pipelines. Integration language should emphasize interoperability, supervision, and deployment suitability rather than claiming a one-size-fits-all autonomy stack.",
  },

  closing: {
    title: "Navigation intelligence with operational discipline.",
    body:
      "Request a technical briefing if you are evaluating NERMN for drone autonomy, robotic navigation, or neuromorphic decisioning under constrained edge conditions.",
    primaryCta: { label: "Request briefing", href: "/contact" },
    secondaryCta: { label: "Explore products", href: "/products" },
  },
};
