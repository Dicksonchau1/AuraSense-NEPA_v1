import { sfsvcContent as content } from "../content/sfsvc";
import {
  HeroSection,
  TextSection,
  ListSection,
  ClosingSection,
} from "../components/Sections";

export default function SfsvcPage() {
  return (
    <main>
      <HeroSection
        eyebrow={content.hero.eyebrow}
        headline={content.hero.headline}
        subheadline={content.hero.subheadline}
        primaryCta={content.hero.primaryCta}
        secondaryCta={content.hero.secondaryCta}
      />

      <TextSection title={content.why.title} body={content.why.body} />

      <ListSection
        title={content.pipeline.title}
        items={content.pipeline.items}
      />

      <TextSection
        title={content.deployment.title}
        body={content.deployment.body}
      />

      <ListSection
        title={content.platforms.title}
        items={content.platforms.items}
      />

      <TextSection
        title={content.licensing.title}
        body={content.licensing.body}
      />

      <TextSection
        title={content.integration.title}
        body={content.integration.body}
      />

      <ClosingSection
        title={content.closing.title}
        body={content.closing.body}
        primaryCta={content.closing.primaryCta}
        secondaryCta={content.closing.secondaryCta}
      />
    </main>
  );
}
