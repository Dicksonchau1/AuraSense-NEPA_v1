import type { ReactNode } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: ReactNode;
  dark?: boolean;
}

export function SectionWrapper({
  id,
  className = '',
  children,
  dark = false,
}: SectionWrapperProps) {
  const ref = useScrollReveal();

  return (
    <section
      id={id}
      ref={ref}
      className={`${dark ? 'bg-surface-raised' : ''} ${className}`.trim()}
    >
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">{children}</div>
    </section>
  );
}
