"use client";

import Link from "next/link";
import { Play } from "lucide-react";
import { useState } from "react";
import { resourcesData } from "../site-data";
import { MediaPlayer } from "../media/MediaPlayer";
import { useSiteModal } from "../modals/ModalProvider";
import { Button } from "../ui/Button";

type SectionMeta = { number: string; title: string; description: string; tone: string; viewAllButton: string };

export function ResourceTitle({ number, title, description, tone, viewAllButton }: SectionMeta) {
  return (
    <div className="resource-title">
      <span style={{ background: tone }}>{number}</span><div><h2 style={{ color: tone }}>{title}</h2><p>{description}</p></div>
      <Button style={{ background: tone }} arrow>{viewAllButton}</Button>
    </div>
  );
}

export function AudioSection() {
  const { audio } = resourcesData;
  const [active, setActive] = useState(0);
  return (
    <section className="resource-block resource-audio">
      <ResourceTitle {...audio.section} />
      <div className="resource-card-grid four">
        {audio.items.map(({ icon: Icon, title, count }, index) => (
          <button className={`resource-card ${active === index ? "active" : ""}`} key={title} onClick={() => setActive(index)}>
            <div className="resource-card-top"><Icon /><div><h3>{title}</h3><p>{count}</p></div></div>
            <div className="resource-card-foot"><Play fill="currentColor" /><span>{audio.downloadLabel}</span></div>
          </button>
        ))}
      </div>
      <MediaPlayer compact item={audio.items[active]} kind="audio" />
      <div className="center-link"><Link className="button button-green" href="/audio">{audio.downloadAllButton}</Link></div>
    </section>
  );
}

function MiniSection({ data, className }: { data: typeof resourcesData.pinyin; className: string }) {
  return (
    <section className={`resource-block ${className}`}><ResourceTitle {...data.section} />
      <div className="resource-card-grid six">
        {data.items.map(({ icon: Icon, title, text }) => <article className="mini-resource" key={title}><Icon /><div><h3>{title}</h3><p>{text}</p></div></article>)}
      </div>
    </section>
  );
}

export function PinyinSection() { return <MiniSection className="resource-pinyin" data={resourcesData.pinyin} />; }

export function HanziSection() {
  const { hanzi } = resourcesData;
  return (
    <section className="resource-block resource-hanzi"><ResourceTitle {...hanzi.section} />
      <div className="hanzi-grid">{hanzi.items.map(({ icon: Icon, title, visual, text }) => <article key={title}><Icon /><h3>{title}</h3><b>{visual}</b><p>{text}</p></article>)}</div>
    </section>
  );
}

export function ExamSection() {
  const { exams } = resourcesData;
  const { openExam } = useSiteModal();
  return (
    <section className="resource-block resource-exams"><ResourceTitle {...exams.section} />
      <div className="resource-card-grid five">{exams.items.map(({ icon: Icon, title, text }) => <button className="mini-resource" key={title} onClick={openExam}><Icon /><div><h3>{title}</h3><p>{text}<br />{exams.marksLabel}</p></div></button>)}</div>
      <Button className="center-button" onClick={openExam} style={{ background: exams.section.tone }}>{exams.primaryButton}</Button>
    </section>
  );
}
