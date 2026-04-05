import { useEffect } from 'react';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { Button } from '../components/ui/Button';

export function LoginPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <SectionWrapper>
        <div className="max-w-md mx-auto text-center py-16 lg:py-24">
          <span className="section-eyebrow">Platform Access</span>
          <h1 className="text-text-primary text-3xl md:text-4xl font-bold mt-4">
            Sign in
          </h1>
          <p className="text-text-secondary mt-4 leading-relaxed">
            Platform access is available to authorized evaluators, integration
            partners, and enterprise teams. Contact engineering to request
            credentials.
          </p>
          <div className="mt-10 space-y-4">
            <div>
              <label htmlFor="email" className="block text-left text-text-secondary text-sm mb-1.5">
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                className="w-full px-4 py-2.5 rounded-md bg-surface-raised border border-border-subtle text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-left text-text-secondary text-sm mb-1.5">
                Password
              </label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-md bg-surface-raised border border-border-subtle text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>
            <Button variant="primary" className="w-full mt-2">
              Sign in
            </Button>
          </div>
          <p className="text-text-muted text-xs mt-8">
            Don't have access?{' '}
            <a href="/contact" className="text-accent hover:underline">
              Request evaluation credentials
            </a>
          </p>
        </div>
      </SectionWrapper>
    </main>
  );
}
