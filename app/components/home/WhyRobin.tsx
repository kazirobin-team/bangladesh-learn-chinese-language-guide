import { homeData } from "../site-data";

export function WhyRobin() {
  const data = homeData.whyRobin;
  if (!data.visible) return null;
  return (
    <section className="why-robin section">
      <div className="site-container">
        <div className="library-heading">
          <span>{data.kicker}</span>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </div>
        <div className="why-robin-grid">
          {data.items.map(({ icon: Icon, title, description }) => (
            <article key={title}>
              <Icon />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>{" "}
      </div>
    </section>
  );
}
