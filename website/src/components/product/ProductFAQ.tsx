import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { PageContainer } from '../layout/PageContainer';
import { SectionHeading } from '../ui/SectionHeading';
import type { FAQItem } from '../../types/content';

interface ProductFAQProps {
  items: FAQItem[];
}

export function ProductFAQ({ items }: ProductFAQProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-20">
      <PageContainer>
        <SectionHeading
          tag="FAQ"
          title="Frequently Asked Questions"
        />
        <div className="max-w-3xl border border-border-default rounded-sm overflow-hidden">
          {items.map((item, idx) => (
            <div key={idx} className={idx < items.length - 1 ? 'border-b border-border-default' : ''}>
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-bg-surface/50 transition-colors"
                aria-expanded={openIdx === idx}
              >
                <span className="text-sm font-medium text-text-primary pr-4">{item.question}</span>
                <ChevronDown className={`w-4 h-4 text-text-muted shrink-0 transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} />
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-4">
                  <p className="text-sm text-text-secondary leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
