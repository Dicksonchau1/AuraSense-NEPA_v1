import { Tag } from '../ui/Tag';
import { CTAButton } from '../ui/CTAButton';
import { PageContainer } from '../layout/PageContainer';

interface HeroSectionProps {
  tag?: string;
  title: string;
  subtitle: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  metrics?: { value: string; label: string }[];
}

export function HeroSection({ tag, title, subtitle, primaryCta, secondaryCta, metrics }: HeroSectionProps) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />
      
      <PageContainer className="relative z-10">
        <div className="max-w-4xl">
          {tag && <Tag label={tag} variant="accent" />}
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-[1.1] tracking-tight">
            {title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl">
            {subtitle}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap gap-4">
              {primaryCta && <CTAButton label={primaryCta.label} href={primaryCta.href} variant="primary" size="lg" />}
              {secondaryCta && <CTAButton label={secondaryCta.label} href={secondaryCta.href} variant="ghost" size="lg" />}
            </div>
          )}
        </div>

        {metrics && metrics.length > 0 && (
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border-default rounded-sm overflow-hidden border border-border-default">
            {metrics.map((m) => (
              <div key={m.label} className="bg-bg-surface p-4 text-center">
                <div className="text-sm font-mono font-medium text-accent-primary">{m.value}</div>
                <div className="text-xs text-text-muted mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        )}
      </PageContainer>
    </section>
  );
}
