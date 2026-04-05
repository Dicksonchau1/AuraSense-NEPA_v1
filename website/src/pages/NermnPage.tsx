import { nermnContent as content } from "../content/nermn";
import {
  HeroSection,
  TextSection,
  ListSection,
  ClosingSection,
} from "../components/Sections";

export default function NermnPage() {
  return (
    <main>
      <HeroSection
        eyebrow={content.hero.eyebrow}
        headline={content.hero.headline}
        subheadline={content.hero.subheadline}
        primaryCta={content.hero.primaryCta}
        secondaryCta={content.hero.secondaryCta}
      />

      <TextSection
        title={content.overview.title}
        body={content.overview.body}
      />

      <ListSection
        title={content.pipeline.title}
        items={content.pipeline.items}
      />

      <TextSection title={content.safety.title} body={content.safety.body} />

      <TextSection title={content.runtime.title} body={content.runtime.body} />

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
