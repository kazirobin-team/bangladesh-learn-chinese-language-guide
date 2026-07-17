"use client";

import { Headphones, Play } from "lucide-react";
import { useMemo, useState } from "react";
import { audioPageData } from "../site-data";
import { MediaPlayer } from "./MediaPlayer";

export function AudioLibrary() {
  const { library } = audioPageData;
  const [filter, setFilter] = useState(library.filters[0]);
  const [active, setActive] = useState(0);
  const items = useMemo(
    () => library.items.filter((item) => filter === library.filters[0] || item.category === filter),
    [filter, library],
  );
  const selected = library.items[active];

  return (
    <section className="library-section site-container">
      <div className="library-heading"><span>{library.kicker}</span><h2>{library.title}</h2><p>{library.description}</p></div>
      <div className="filter-row">
        {library.filters.map((item) => <button className={filter === item ? "active" : ""} key={item} onClick={() => setFilter(item)}>{item}</button>)}
      </div>
      <div className="audio-layout">
        <div className="audio-library-list">
          {items.map((item) => {
            const originalIndex = library.items.findIndex((audio) => audio.title === item.title);
            return (
              <button className={originalIndex === active ? "active" : ""} key={item.title} onClick={() => setActive(originalIndex)}>
                <span className="audio-list-icon">{originalIndex === active ? <Play fill="currentColor" /> : <Headphones />}</span>
                <span><b>{item.title}</b><small>{item.category} · {item.duration}</small></span>
                <em>{item.pinyin}</em>
              </button>
            );
          })}
        </div>
        <div className="sticky-player"><MediaPlayer item={selected} kind="audio" /></div>
      </div>
    </section>
  );
}
