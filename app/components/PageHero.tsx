type Props = { eyebrow: string; title: string; accent: string; description: string; tone?: "red" | "green" | "blue" };

export function PageHero({ eyebrow, title, accent, description, tone = "red" }: Props) {
  return (
    <section className={`page-hero page-hero-${tone}`}>
      <div className="site-container"><span>{eyebrow}</span><h1>{title} <em>{accent}</em></h1><p>{description}</p></div>
    </section>
  );
}
