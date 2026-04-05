import { Tag } from '../ui/Tag';
import { CTAButton } from '../ui/CTAButton';
import { PageContainer } from '../layout/PageContainer';
import type { ProductConfig } from '../../types/content';

interface ProductHeroProps {
  product: ProductConfig;
}

export function ProductHero({ product }: ProductHeroProps) {
  const statusLabel = product.status === 'launching-soon' ? 'Launching Soon' : 'Available';

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />
      <PageContainer className="relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <Tag label="NEPA Platform" variant="default" />
            <Tag label={product.shortLabel} variant="accent" />
            {product.status === 'launching-soon' && <Tag label={statusLabel} variant="status" />}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-text-primary leading-tight tracking-tight">
            {product.fullName}
          </h1>
          <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-3xl">
            {product.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CTAButton label={product.ctaLabel} href={product.ctaHref} variant="primary" size="lg" />
            {product.secondaryCtaLabel && product.secondaryCtaHref && (
              <CTAButton label={product.secondaryCtaLabel} href={product.secondaryCtaHref} variant="ghost" size="lg" />
            )}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
