import { PageContainer } from '../layout/PageContainer';
import { SectionHeading } from '../ui/SectionHeading';
import type { SpecItem } from '../../types/content';

interface ProductSpecsTableProps {
  specs: SpecItem[];
}

export function ProductSpecsTable({ specs }: ProductSpecsTableProps) {
  return (
    <section id="specs" className="py-20">
      <PageContainer>
        <SectionHeading
          tag="Technical Specification"
          title="System Requirements and Performance"
        />
        <div className="border border-border-default rounded-sm overflow-hidden">
          {specs.map((spec, idx) => (
            <div
              key={spec.label}
              className={`grid grid-cols-1 md:grid-cols-3 ${
                idx < specs.length - 1 ? 'border-b border-border-default' : ''
              }`}
            >
              <div className="px-6 py-4 bg-bg-surface/50 md:border-r border-border-default">
                <span className="text-sm font-medium text-text-primary">{spec.label}</span>
              </div>
              <div className="px-6 py-4 md:col-span-2">
                <span className="text-sm text-text-secondary">{spec.value}</span>
              </div>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
