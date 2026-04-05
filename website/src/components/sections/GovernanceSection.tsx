import { PageContainer } from '../layout/PageContainer';
import { SectionHeading } from '../ui/SectionHeading';
import { StatusBadge } from '../ui/StatusBadge';
import type { GovernanceItem } from '../../types/content';

interface GovernanceSectionProps {
  items: GovernanceItem[];
}

export function GovernanceSection({ items }: GovernanceSectionProps) {
  return (
    <section className="py-20 bg-bg-surface/50">
      <PageContainer>
        <SectionHeading
          tag="Governance"
          title="Engineered for Procurement Review"
          subtitle="NEPA is supported by structured governance documentation designed to meet enterprise procurement review, technical due diligence, and regulatory evaluation standards."
        />
        <div className="border border-border-default rounded-sm overflow-hidden">
          {items.map((item, idx) => (
            <div
              key={item.title}
              className={`flex items-center justify-between px-6 py-4 ${
                idx < items.length - 1 ? 'border-b border-border-default' : ''
              }`}
            >
              <span className="text-sm text-text-primary">{item.title}</span>
              <StatusBadge status={item.status} />
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
