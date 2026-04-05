import { PageContainer } from '../layout/PageContainer';
import { SectionHeading } from '../ui/SectionHeading';
import { Check } from 'lucide-react';

interface ProductDeploymentSectionProps {
  bullets: string[];
  governanceBullets: string[];
}

export function ProductDeploymentSection({ bullets, governanceBullets }: ProductDeploymentSectionProps) {
  return (
    <section className="py-20 bg-bg-surface/50">
      <PageContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading tag="Deployment" title="Edge-Native Deployment" />
            <ul className="space-y-3">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-accent-secondary mt-0.5 shrink-0" />
                  <span className="text-sm text-text-secondary">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading tag="Governance" title="Audit and Compliance" />
            <ul className="space-y-3">
              {governanceBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-accent-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-text-secondary">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
