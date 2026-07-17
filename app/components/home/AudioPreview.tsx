import Link from "next/link";
import { ArrowRight, Headphones } from "lucide-react";
import { homeData } from "../site-data";

export function AudioPreview() {
  const audio = homeData.audio;
  return (
    <section className="home-audio section">
      <div className="site-container">
        <div className="library-heading"><span>{audio.kicker}</span><h2>{audio.title}</h2><p>{audio.description}</p></div>
        <div className="home-audio-grid">
          {audio.items.map((item) => (
            <article key={item.title}>
              <Headphones /><div><h3>{item.title}</h3><p>{item.pinyin}</p></div>
              <audio controls preload="metadata" src={item.sourceUrl} />
            </article>
          ))}
        </div>
        <div className="center-link"><Link className="button button-primary" href="/audio">{audio.viewAllButton}<ArrowRight size={16} /></Link></div>
      </div>
    </section>
  );
}
