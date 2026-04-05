import { resourcesContent as content } from "../content/resources";
import {
  HeroSection,
  TextSection,
  CardGrid,
  Card,
  SectionHeading,
  CtaGroup,
} from "../components/Sections";

export default function ResourcesPage() {
  return (
    <main>
      <HeroSection
        eyebrow={content.hero.eyebrow}
        headline={content.hero.headline}
        subheadline={content.hero.subheadline}
      />

      <TextSection title={content.intro.title} body={content.intro.body} />

      <CardGrid title={content.categories.title}>
        {content.categories.items.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </CardGrid>

      <section className="card-grid-section">
        <div className="container">
          <SectionHeading>{content.featured.title}</SectionHeading>
          <div className="card-grid">
            {content.featured.items.map((item) => (
              <div key={item.title} className="card">
                <span className="card-meta">
                  {item.type} · {item.audience}
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="card-cta">{item.cta}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CardGrid title={content.audience.title}>
        {content.audience.groups.map((group) => (
          <Card
            key={group.name}
            title={group.name}
            description={group.description}
          />
        ))}
      </CardGrid>

      <section className="closing-section">
        <div className="container">
          <SectionHeading>{content.support.title}</SectionHeading>
          <p>{content.support.body}</p>
          <CtaGroup
            primary={content.support.primaryCta}
            secondary={content.support.secondaryCta}
          />
        </div>
      </section>
    </main>
  );
}
