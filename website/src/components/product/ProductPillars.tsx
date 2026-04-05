import { SurfaceCard } from '../ui/SurfaceCard';
import { PageContainer } from '../layout/PageContainer';
import { SectionHeading } from '../ui/SectionHeading';
import type { Pillar } from '../../types/content';

interface ProductPillarsProps {
  tag?: string;
  title: string;
  subtitle?: string;
  pillars: Pillar[];
}

export function ProductPillars({ tag, title, subtitle, pillars }: ProductPillarsProps) {
  return (
    <section className="py-20">
      <PageContainer>
        <SectionHeading tag={tag} title={title} subtitle={subtitle} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <SurfaceCard key={pillar.title}>
              <h3 className="text-base font-semibold text-text-primary mb-2">{pillar.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{pillar.description}</p>
            </SurfaceCard>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
