import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    // Observe the element itself and any children with the class
    const targets = el.querySelectorAll('.animate-on-scroll, .stagger-children');
    targets.forEach((t) => observer.observe(t));
    if (el.classList.contains('animate-on-scroll') || el.classList.contains('stagger-children')) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}
