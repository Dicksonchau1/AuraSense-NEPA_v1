import { nssimContent as content } from "../content/nssim";
import {
  HeroSection,
  TextSection,
  ListSection,
  ClosingSection,
} from "../components/Sections";

export default function NssimPage() {
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

      <TextSection
        title={content.temporal.title}
        body={content.temporal.body}
      />

      <TextSection title={content.audit.title} body={content.audit.body} />

      <TextSection
        title={content.deployment.title}
        body={content.deployment.body}
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
