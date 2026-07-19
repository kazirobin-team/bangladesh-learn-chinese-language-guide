import { CalendarDays, CheckCircle2, MessageCircleMore, Users } from "lucide-react";
import { CommunityButton } from "../CommunityButton";
import { communityPageData } from "../site-data";

export function CommunityContent() {
  const { benefits, groups, events } = communityPageData;
  return (
    <>
      <section className="community-benefits section site-container">
        <div className="library-heading"><span>{benefits.kicker}</span><h2>{benefits.title}</h2><p>{benefits.description}</p></div>
        <div className="community-benefit-grid">
          {benefits.items.map((item) => (
            <article key={item.title}><CheckCircle2 /><h3>{item.title}</h3><p>{item.description}</p></article>
          ))}
        </div>
      </section>
      <section className="community-groups section">
        <div className="site-container">
          <div className="library-heading"><span>{groups.kicker}</span><h2>{groups.title}</h2></div>
          <div className="group-grid">
            {groups.items.map((item) => (
              <article key={item.title}><Users /><div><span>{item.level}</span><h3>{item.title}</h3><p>{item.description}</p><small>{item.members}</small></div></article>
            ))}
          </div>
        </div>
      </section>
      <section className="community-events section site-container">
        <div className="library-heading"><span>{events.kicker}</span><h2>{events.title}</h2></div>
        <div className="event-grid">
          {events.items.map((item) => (
            <article key={item.title}><CalendarDays /><div><b>{item.date}</b><h3>{item.title}</h3><p>{item.time}</p></div></article>
          ))}
        </div>
        <div className="community-join"><MessageCircleMore /><div><h2>{events.joinTitle}</h2><p>{events.joinDescription}</p></div><CommunityButton /></div>
      </section>
    </>
  );
}
