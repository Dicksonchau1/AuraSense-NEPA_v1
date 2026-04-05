import { Link } from "react-router-dom";

interface CtaButton {
  label: string;
  href: string;
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="section-heading">{children}</h2>;
}

export function CtaGroup({
  primary,
  secondary,
}: {
  primary?: CtaButton;
  secondary?: CtaButton;
}) {
  return (
    <div className="cta-group">
      {primary && (
        <Link to={primary.href} className="cta cta-primary">
          {primary.label}
        </Link>
      )}
      {secondary && (
        <Link to={secondary.href} className="cta cta-secondary">
          {secondary.label}
        </Link>
      )}
    </div>
  );
}

export function HeroSection({
  eyebrow,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  stats,
}: {
  eyebrow: string;
  headline: string;
  subheadline: string;
  primaryCta?: CtaButton;
  secondaryCta?: CtaButton;
  stats?: { label: string; value: string }[];
}) {
  return (
    <section className="hero">
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{headline}</h1>
        <p className="subheadline">{subheadline}</p>
        <CtaGroup primary={primaryCta} secondary={secondaryCta} />
        {stats && (
          <div className="stats-row">
            {stats.map((stat) => (
              <div key={stat.label} className="stat">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export function TextSection({
  title,
  body,
}: {
  title: string;
  body: string | string[];
}) {
  const paragraphs = Array.isArray(body) ? body : [body];
  return (
    <section className="text-section">
      <div className="container">
        <SectionHeading>{title}</SectionHeading>
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}

export function CardGrid({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="card-grid-section">
      <div className="container">
        <SectionHeading>{title}</SectionHeading>
        {intro && <p className="section-intro">{intro}</p>}
        <div className="card-grid">{children}</div>
      </div>
    </section>
  );
}

export function Card({
  title,
  description,
  meta,
}: {
  title: string;
  description: string;
  meta?: string;
}) {
  return (
    <div className="card">
      {meta && <span className="card-meta">{meta}</span>}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export function ListSection({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <section className="list-section">
      <div className="container">
        <SectionHeading>{title}</SectionHeading>
        <ul>
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ClosingSection({
  title,
  body,
  primaryCta,
  secondaryCta,
}: {
  title: string;
  body: string;
  primaryCta?: CtaButton;
  secondaryCta?: CtaButton;
}) {
  return (
    <section className="closing-section">
      <div className="container">
        <SectionHeading>{title}</SectionHeading>
        <p>{body}</p>
        <CtaGroup primary={primaryCta} secondary={secondaryCta} />
      </div>
    </section>
  );
}
