export const sfsvcContent = {
  hero: {
    eyebrow: "SFSVC",
    headline: "Neuromorphic compression and perception for low-bandwidth edge inspection.",
    subheadline:
      "SFSVC is AuraSense's neuromorphic compression and perception SDK for edge environments where bandwidth, power, and latency budgets make conventional video-first pipelines inefficient. It is built for CPU-first deployment, offline operation, and practical integration into inspection workflows.",
    primaryCta: { label: "Request technical access", href: "/contact" },
    secondaryCta: { label: "Open FAQ", href: "/faq" },
  },

  why: {
    title: "Why SFSVC",
    body: [
      "Conventional vision pipelines process every frame and every pixel, even when most of the scene is operationally irrelevant. That approach increases bandwidth, compute pressure, and latency before detection even begins.",
      "SFSVC applies neuromorphic spike encoding so the pipeline emphasizes temporal change rather than full-frame redundancy. The result is a perception path better suited to constrained edge systems, especially in drone inspection and low-power deployments.",
    ],
  },

  pipeline: {
    title: "Compression before the heavy path",
    items: [
      "Temporal changes are encoded into spike-oriented representations before downstream perception stages.",
      "The pipeline reduces unnecessary data movement early, improving runtime efficiency in edge conditions.",
      "The system is designed to preserve deployability by avoiding GPU dependence and supporting CPU-accelerated execution.",
    ],
  },

  deployment: {
    title: "Designed for real edge runtime conditions",
    body: [
      "SFSVC is designed to run without a GPU and uses SIMD acceleration on supported CPU architectures. This supports low-power, low-latency deployment on practical edge hardware rather than forcing a cloud or datacenter dependency.",
      "It is a suitable fit for drone inspection, field sensing, and other environments where power, thermal envelope, bandwidth, and offline operation all matter at the same time.",
    ],
  },

  platforms: {
    title: "Runtime and platform posture",
    items: [
      "CPU-only operation with no GPU requirement",
      "SIMD acceleration on AVX2 and NEON-capable systems",
      "Supported Linux deployment on x86_64 and ARM64 environments",
      "Structured onboarding through SDK delivery, public headers, and examples",
    ],
  },

  licensing: {
    title: "Offline-capable activation and controlled licensing",
    body: [
      "SFSVC is designed for operational environments that may not have persistent connectivity. License validation is structured so runtime use does not depend on continuous online access.",
      "This makes the product suitable for workflows such as BVLOS-aligned or field-edge operations where deployment continuity matters more than permanent cloud reachability.",
    ],
  },

  integration: {
    title: "Integration path for engineering teams",
    body:
      "SFSVC is intended to be embedded into existing edge or autonomy pipelines rather than treated as a closed appliance. The product should be presented with clear technical entry points, deployment assumptions, and support hooks for teams evaluating integration.",
  },

  closing: {
    title: "A practical compression layer for deployable edge perception.",
    body:
      "Request a technical briefing if you are evaluating SFSVC for drone inspection, constrained edge environments, or low-bandwidth neuromorphic perception workflows.",
    primaryCta: { label: "Request briefing", href: "/contact" },
    secondaryCta: { label: "Read FAQ", href: "/faq" },
  },
};
