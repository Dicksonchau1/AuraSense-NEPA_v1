import { careersContent as content } from "../content/careers";
import {
  HeroSection,
  TextSection,
  CardGrid,
  Card,
  ListSection,
  SectionHeading,
  CtaGroup,
} from "../components/Sections";

export default function CareersPage() {
  return (
    <main>
      <HeroSection
        eyebrow={content.hero.eyebrow}
        headline={content.hero.headline}
        subheadline={content.hero.subheadline}
      />

      <TextSection title={content.mission.title} body={content.mission.body} />

      <ListSection title={content.domains.title} items={content.domains.items} />

      <CardGrid title={content.roles.title}>
        {content.roles.items.map((item) => (
          <Card
            key={item.role}
            title={item.role}
            description={item.description}
          />
        ))}
      </CardGrid>

      <TextSection title={content.culture.title} body={content.culture.body} />

      <ListSection
        title={content.expectations.title}
        items={content.expectations.items}
      />

      <section className="closing-section">
        <div className="container">
          <SectionHeading>{content.openings.title}</SectionHeading>
          <p>{content.openings.body}</p>
          <CtaGroup primary={content.openings.primaryCta} />
        </div>
      </section>
    </main>
  );
}
