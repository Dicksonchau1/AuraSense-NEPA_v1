import { PageContainer } from '../layout/PageContainer';
import { CTAButton } from '../ui/CTAButton';

interface ContactCTASectionProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function ContactCTASection({
  title = 'Ready to evaluate?',
  subtitle = 'Contact our engineering team for technical evaluation, deployment planning, or procurement documentation.',
  primaryLabel = 'Contact Engineering',
  primaryHref = '/contact',
  secondaryLabel = 'View Products',
  secondaryHref = '/products',
}: ContactCTASectionProps) {
  return (
    <section className="py-20 border-t border-border-default">
      <PageContainer>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">{title}</h2>
          <p className="text-text-secondary mb-8">{subtitle}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton label={primaryLabel} href={primaryHref} variant="primary" size="lg" />
            <CTAButton label={secondaryLabel} href={secondaryHref} variant="ghost" size="lg" />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
