import { useState, useRef, useCallback, useEffect } from 'react';
import type { HeroContent } from '../../types/content';
import { Button } from '../ui/Button';

interface HeroProps {
  content: HeroContent;
  large?: boolean;
  videoSrc?: string;
  /** Seconds into first play when hero content fades in (default 3.5) */
  videoFadeAt?: number;
}

export function Hero({ content, large = false, videoSrc, videoFadeAt = 3.5 }: HeroProps) {
  const headlineWords = content.headline.split(' ');
  const [contentVisible, setContentVisible] = useState(!videoSrc);
  const [videoReady, setVideoReady] = useState(false);
  const hasFired = useRef(false);

  const show = useCallback(() => {
    if (hasFired.current) return;
    hasFired.current = true;
    setContentVisible(true);
  }, []);

  // Fallback: always show content after videoFadeAt + 1s even if video fails
  useEffect(() => {
    if (!videoSrc) return;
    const timer = setTimeout(show, (videoFadeAt + 1) * 1000);
    return () => clearTimeout(timer);
  }, [videoSrc, videoFadeAt, show]);

  const handleTimeUpdate = useCallback(
    (e: React.SyntheticEvent<HTMLVideoElement>) => {
      if (hasFired.current) return;
      const video = e.currentTarget;
      if (video.currentTime >= videoFadeAt) {
        show();
      }
    },
    [videoFadeAt, show],
  );

  return (
    <section
      className={`relative flex items-center overflow-hidden ${
        large ? 'min-h-[100vh] justify-start text-left' : 'justify-center text-center py-16 lg:py-24'
      }`}
      style={large ? { perspective: '1200px' } : undefined}
    >
      {/* ── Background video ── */}
      {videoSrc && (
        <video
          className={`hero-video ${videoReady ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          onCanPlay={() => setVideoReady(true)}
          onTimeUpdate={handleTimeUpdate}
          onError={show}
        />
      )}

      {/* ── Dark overlay for readability ── */}
      {videoSrc && <div className="hero-video-overlay" />}

      {/* ── Content (fades in after video cue) ── */}
      <div
        className={`relative z-10 px-6 transition-opacity duration-[1200ms] ease-out ${
          contentVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } ${large ? 'hero-3d ml-8 md:ml-16 lg:ml-24 max-w-2xl' : 'hero-animate mx-auto max-w-4xl'}`}
      >
        {content.subheadline && (
          <p className="hero-float text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-5"
             style={{ animationDelay: '0s' }}>
            {content.subheadline}
          </p>
        )}
        <h1
          className={`hero-float text-text-primary font-bold leading-[1.1] tracking-tight ${
            large
              ? 'text-4xl md:text-5xl lg:text-6xl'
              : 'text-3xl md:text-4xl lg:text-5xl'
          }`}
          style={{ animationDelay: '0.2s' }}
        >
          {large ? (
            headlineWords.map((word, i) => (
              <span
                key={i}
                className="hero-3d-word"
                style={{ animationDelay: `${0.3 + i * 0.18}s` }}
              >
                {word}{' '}
              </span>
            ))
          ) : (
            content.headline
          )}
        </h1>
        <p className="hero-float text-text-secondary text-base md:text-lg max-w-2xl mt-5 leading-relaxed"
           style={{ animationDelay: '0.4s' }}>
          {content.description}
        </p>
        <div className={`hero-float mt-8 flex flex-wrap items-center gap-4 ${large ? 'justify-start' : 'justify-center'}`}
             style={{ animationDelay: '0.6s' }}>
          <Button variant="primary" size="lg" href={content.primaryCta.href}>
            {content.primaryCta.label}
          </Button>
          {content.secondaryCta && (
            <Button variant="secondary" size="lg" href={content.secondaryCta.href}>
              {content.secondaryCta.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
