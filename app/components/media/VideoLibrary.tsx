"use client";

import { Play } from "lucide-react";
import { useMemo, useState } from "react";
import { videoPageData } from "../site-data";
import { ModalShell } from "../modals/ModalShell";
import { MediaPlayer } from "./MediaPlayer";

export function VideoLibrary() {
  const { library } = videoPageData;
  const [filter, setFilter] = useState(library.filters[0]);
  const [active, setActive] = useState<number | null>(null);
  const items = useMemo(
    () => library.items.filter((item) => filter === library.filters[0] || item.category === filter),
    [filter, library],
  );
  const selected = active === null ? null : library.items[active];

  return (
    <>
      <section className="library-section site-container">
        <div className="library-heading"><span>{library.kicker}</span><h2>{library.title}</h2><p>{library.description}</p></div>
        <div className="filter-row">
          {library.filters.map((item) => <button className={filter === item ? "active" : ""} key={item} onClick={() => setFilter(item)}>{item}</button>)}
        </div>
        <div className="video-library-grid">
          {items.map((item) => {
            const originalIndex = library.items.findIndex((video) => video.title === item.title);
            return (
              <article className="library-video-card" key={item.title}>
                <button className="library-video-poster" onClick={() => setActive(originalIndex)} style={{ backgroundImage: `linear-gradient(135deg, ${item.color}e8, #10101099), url(${item.poster})` }}>
                  <span><Play fill="currentColor" /></span><small>{item.duration}</small>
                </button>
                <div><span>{item.category}</span><h3>{item.title}</h3><p>{item.description}</p></div>
              </article>
            );
          })}
        </div>
      </section>
      {selected ? (
        <ModalShell dark label={selected.title} onClose={() => setActive(null)} wide>
          <MediaPlayer item={selected} kind="video" />
        </ModalShell>
      ) : null}
    </>
  );
}
