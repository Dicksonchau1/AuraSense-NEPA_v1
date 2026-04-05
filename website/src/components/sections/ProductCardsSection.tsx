import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SurfaceCard } from '../ui/SurfaceCard';
import { StatusBadge } from '../ui/StatusBadge';
import { PageContainer } from '../layout/PageContainer';
import { SectionHeading } from '../ui/SectionHeading';
import type { ProductConfig } from '../../types/content';

interface ProductCardsSectionProps {
  products: readonly ProductConfig[];
}

export function ProductCardsSection({ products }: ProductCardsSectionProps) {
  const statusMap: Record<string, 'Active' | 'Launching Soon'> = {
    'active': 'Active',
    'launching-soon': 'Launching Soon',
  };

  return (
    <section className="py-20">
      <PageContainer>
        <SectionHeading
          tag="Product Modules"
          title="Three Modules. One Platform."
          subtitle="Each module operates on the NEPA deterministic runtime with shared infrastructure for audit, replay, and governance."
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link key={product.slug} to={`/products/${product.slug}`} className="group">
              <SurfaceCard hover className="h-full flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-mono font-medium text-accent-primary tracking-widest">
                    {product.shortLabel}
                  </span>
                  <StatusBadge status={statusMap[product.status] || 'Active'} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {product.headline}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed flex-1">
                  {product.subheadline}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm text-accent-primary group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </SurfaceCard>
            </Link>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
