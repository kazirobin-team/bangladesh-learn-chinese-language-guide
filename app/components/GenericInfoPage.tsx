import Link from "next/link";

type LinkItem = { label: string; href: string };
type Section = { title: string; body: string; items?: string[]; links?: LinkItem[] };

export function GenericInfoPage({ sections }: { sections: Section[] }) {
  return (
    <section className="generic-page section">
      <div className="site-container generic-grid">
        {sections.map((section) => (
          <article key={section.title}>
            <h2>{section.title}</h2><p>{section.body}</p>
            {section.items ? <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul> : null}
            {section.links ? <div className="media-actions">{section.links.map((item) => <Link className="button button-primary" href={item.href} key={item.label}>{item.label}</Link>)}</div> : null}
          </article>
        ))}
      </div>
    </section>
  );
}
