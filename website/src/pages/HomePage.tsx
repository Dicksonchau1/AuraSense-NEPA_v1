import { Link } from "react-router-dom";
import { homepageContent as content } from "../content/homepage";
import {
  HeroSection,
  TextSection,
  CardGrid,
  Card,
  ClosingSection,
  SectionHeading,
} from "../components/Sections";

export default function HomePage() {
  return (
    <main>
      <HeroSection
        eyebrow={content.hero.eyebrow}
        headline={content.hero.headline}
        subheadline={content.hero.subheadline}
        primaryCta={content.hero.primaryCta}
        secondaryCta={content.hero.secondaryCta}
        stats={content.hero.stats}
      />

      <TextSection
        title={content.credibility.title}
        body={content.credibility.body}
      />

      <CardGrid title={content.platformPillars.title}>
        {content.platformPillars.items.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </CardGrid>

      <CardGrid
        title={content.products.title}
        intro={content.products.intro}
      >
        {content.products.items.map((item) => (
          <Link key={item.name} to={item.href} className="card card-link">
            <h3>{item.name}</h3>
            <p>{item.summary}</p>
          </Link>
        ))}
      </CardGrid>

      <TextSection
        title={content.deployment.title}
        body={content.deployment.body}
      />

      <section className="list-section">
        <div className="container">
          <SectionHeading>{content.governance.title}</SectionHeading>
          <ul>
            {content.governance.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <ClosingSection
        title={content.closing.title}
        body={content.closing.body}
        primaryCta={content.closing.primaryCta}
        secondaryCta={content.closing.secondaryCta}
      />
    </main>
  );
}
