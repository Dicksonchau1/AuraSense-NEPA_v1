import { useEffect, useState } from 'react';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { Button } from '../components/ui/Button';
import { sfsvcContent } from '../content/sfsvc';

export function ProductSFSVCPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    hero,
    proofStrip,
    overview,
    visualBand,
    architecture,
    capabilityOne,
    capabilityTwo,
    capabilityThree,
    deployment,
    governance,
    integration,
    technicalProfile,
    faq,
    finalCta,
  } = sfsvcContent;

  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative flex items-center justify-center text-center py-16 lg:py-24">
        <div className="relative z-10 max-w-4xl mx-auto px-6 hero-animate">
          <p className="hero-float text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-5"
             style={{ animationDelay: '0s' }}>
            {hero.eyebrow}
          </p>
          <h1 className="hero-float text-text-primary font-bold leading-[1.1] tracking-tight text-3xl md:text-4xl lg:text-5xl"
              style={{ animationDelay: '0.2s' }}>
            {hero.title}
          </h1>
          <p className="hero-float text-text-secondary text-base md:text-lg max-w-2xl mx-auto mt-5 leading-relaxed"
             style={{ animationDelay: '0.4s' }}>
            {hero.description}
          </p>
          <div className="hero-float mt-8 flex flex-wrap items-center justify-center gap-4"
               style={{ animationDelay: '0.6s' }}>
            <Button variant="primary" size="lg" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </Button>
            <Button variant="secondary" size="lg" href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </Button>
          </div>
          <p className="hero-float text-text-secondary text-sm mt-6 opacity-70"
             style={{ animationDelay: '0.8s' }}>
            {hero.supportLine}
          </p>
        </div>
      </section>

      {/* ── Proof Strip ── */}
      <div className="bg-surface-raised border-y border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {proofStrip.map((tag) => (
            <span
              key={tag}
              className="text-accent text-xs font-semibold tracking-[0.15em] uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ── Overview ── */}
      <SectionWrapper id="overview">
        <header className="section-header">
          <span className="section-eyebrow">{overview.eyebrow}</span>
          <h2>{overview.title}</h2>
          <p className="max-w-3xl mx-auto">{overview.description}</p>
        </header>
      </SectionWrapper>

      {/* ── Visual Band ── */}
      <SectionWrapper id="live-output" dark>
        <header className="section-header">
          <span className="section-eyebrow">{visualBand.eyebrow}</span>
          <h2>{visualBand.title}</h2>
          <p className="max-w-3xl mx-auto">{visualBand.description}</p>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
          <figure className="rounded-lg overflow-hidden border border-border-subtle">
            <img
              src="/assets/Website_SFSVC_livefeeddemo.png"
              alt="NEPA live feed — LiDAR overlay, thermal heatmap, and spike stream on a facade surface"
              className="w-full h-auto"
              loading="lazy"
            />
            <figcaption className="bg-surface-raised px-4 py-2 text-text-secondary text-xs text-center">
              Live Feed — LiDAR overlay · Thermal heatmap · Spike stream
            </figcaption>
          </figure>
          <figure className="rounded-lg overflow-hidden border border-border-subtle">
            <img
              src="/assets/Website_SFSVC_Inference.png"
              alt="NEPA inference engine — crack detection, growth analysis, risk scoring, and carbonation depth profile"
              className="w-full h-auto"
              loading="lazy"
            />
            <figcaption className="bg-surface-raised px-4 py-2 text-text-secondary text-xs text-center">
              Inference Engine — Crack detect · Growth · Risk · Chemical map
            </figcaption>
          </figure>
        </div>
      </SectionWrapper>

      {/* ── Architecture ── */}
      <SectionWrapper id="architecture">
        <header className="section-header">
          <span className="section-eyebrow">{architecture.eyebrow}</span>
          <h2>{architecture.title}</h2>
          <p className="max-w-3xl mx-auto">{architecture.description}</p>
        </header>

        {/* Flow strip */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mt-10">
          {architecture.flow.map((step, i) => (
            <span key={step} className="flex items-center gap-2 md:gap-3">
              <span className="px-4 py-2 rounded-md bg-surface-raised border border-border-subtle text-text-primary text-sm font-medium">
                {step}
              </span>
              {i < architecture.flow.length - 1 && (
                <span className="text-accent text-lg">→</span>
              )}
            </span>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-10 stagger-children animate-on-scroll">
          {architecture.cards.map((card) => (
            <div
              key={card.title}
              className="rounded-lg bg-surface-raised border border-border-subtle p-5"
            >
              <h3 className="text-text-primary font-semibold text-sm mb-2">{card.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Capability: Edge Processing ── */}
      <CapabilityBand section={capabilityOne} dark />

      {/* ── Capability: Detection Logic ── */}
      <CapabilityBand section={capabilityTwo} />

      {/* ── Capability: Operational Output ── */}
      <CapabilityBand section={capabilityThree} dark />

      {/* ── Deployment + Governance split ── */}
      <SectionWrapper id="deployment">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Deployment */}
          <div>
            <span className="section-eyebrow">{deployment.eyebrow}</span>
            <h2 className="text-text-primary text-2xl font-bold mt-2">{deployment.title}</h2>
            <p className="text-text-secondary mt-3 leading-relaxed">{deployment.description}</p>
            <div className="flex flex-wrap gap-3 mt-6">
              {deployment.bands.map((band) => (
                <span
                  key={band}
                  className="px-3 py-1.5 rounded-md bg-surface-raised border border-border-subtle text-text-primary text-xs font-medium"
                >
                  {band}
                </span>
              ))}
            </div>
          </div>
          {/* Governance */}
          <div>
            <span className="section-eyebrow">{governance.eyebrow}</span>
            <h2 className="text-text-primary text-2xl font-bold mt-2">{governance.title}</h2>
            <p className="text-text-secondary mt-3 leading-relaxed">{governance.description}</p>
            <ul className="mt-6 space-y-3">
              {governance.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">✓</span>
                  <span className="text-text-secondary text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Integration ── */}
      <SectionWrapper id="integration" dark>
        <header className="section-header">
          <span className="section-eyebrow">{integration.eyebrow}</span>
          <h2>{integration.title}</h2>
          <p className="max-w-3xl mx-auto">{integration.description}</p>
        </header>
        <ul className="flex flex-wrap items-center justify-center gap-6 mt-8">
          {integration.items.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="text-accent">✓</span>
              <span className="text-text-secondary text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </SectionWrapper>

      {/* ── Technical Profile ── */}
      <SectionWrapper id="technical-profile">
        <header className="section-header">
          <span className="section-eyebrow">{technicalProfile.eyebrow}</span>
          <h2>{technicalProfile.title}</h2>
          <p className="max-w-3xl mx-auto">{technicalProfile.description}</p>
        </header>
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          {technicalProfile.chips.map((chip) => (
            <span
              key={chip}
              className="px-4 py-2 rounded-full bg-surface-raised border border-border-subtle text-text-primary text-sm font-medium"
            >
              {chip}
            </span>
          ))}
        </div>
      </SectionWrapper>

      {/* ── FAQ ── */}
      <SectionWrapper id="faq" dark>
        <header className="section-header">
          <span className="section-eyebrow">{faq.eyebrow}</span>
          <h2>{faq.title}</h2>
        </header>
        <div className="max-w-2xl mx-auto mt-8">
          {faq.items.map((item) => (
            <FAQItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
      </SectionWrapper>

      {/* ── Final CTA ── */}
      <SectionWrapper id="sfsvc-cta">
        <header className="section-header">
          <span className="section-eyebrow">{finalCta.eyebrow}</span>
          <h2>{finalCta.title}</h2>
          <p className="max-w-2xl mx-auto">{finalCta.description}</p>
        </header>
        <div className="cta-actions mt-8">
          <Button variant="primary" href={finalCta.primaryCta.href}>
            {finalCta.primaryCta.label}
          </Button>
          <Button variant="secondary" href={finalCta.secondaryCta.href}>
            {finalCta.secondaryCta.label}
          </Button>
        </div>
      </SectionWrapper>
    </main>
  );
}

/* ── Capability Band (reused for three sections) ── */
function CapabilityBand({
  section,
  dark = false,
}: {
  section: { eyebrow: string; title: string; description: string; items: string[] };
  dark?: boolean;
}) {
  return (
    <SectionWrapper dark={dark}>
      <div className="max-w-3xl mx-auto text-center">
        <span className="section-eyebrow">{section.eyebrow}</span>
        <h2 className="text-text-primary text-2xl md:text-3xl font-bold mt-2">{section.title}</h2>
        <p className="text-text-secondary mt-3 leading-relaxed">{section.description}</p>
        <ul className="flex flex-wrap items-center justify-center gap-5 mt-8">
          {section.items.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="text-accent">✓</span>
              <span className="text-text-secondary text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}

/* ── FAQ accordion item ── */
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border-subtle py-5">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between text-left cursor-pointer bg-transparent border-0 text-text-primary font-semibold text-base p-0"
      >
        <span>{question}</span>
        <span className="text-accent text-xl ml-4" aria-hidden="true">
          {open ? '−' : '+'}
        </span>
      </button>
      {open && (
        <p className="text-text-secondary mt-3 leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
}
