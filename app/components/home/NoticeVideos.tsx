"use client";

import Link from "next/link";
import { ExternalLink, Play } from "lucide-react";
import { useState } from "react";
import { homeData } from "../site-data";
import { useSiteModal } from "../modals/ModalProvider";
import { ModalShell } from "../modals/ModalShell";
import { MediaPlayer } from "../media/MediaPlayer";
import { Button } from "../ui/Button";

export function NoticeVideos() {
  const { notices, videos } = homeData;
  const { openExam, openSuccess } = useSiteModal();
  const [active, setActive] = useState<number | null>(null);
  const actions = { exam: openExam, success: openSuccess };
  const selected = active === null ? null : videos.items[active];

  return (
    <>
      <section className="info-grid section site-container" id="notice">
        <div className="info-panel">
          <div className="panel-title"><span>{notices.title}</span></div>
          {notices.items.map(({ icon: Icon, title, text, tag, tone, action }) => (
            <article className="notice-row" key={title}>
              <Icon className={`tone-${tone}`} />
              <div><h3>{title}</h3><p>{text}</p></div>
              <button className={`tag tone-${tone}`} onClick={action ? actions[action as keyof typeof actions] : undefined}>{tag}</button>
            </article>
          ))}
          <Button variant="ghost" arrow>{notices.viewAllButton}</Button>
        </div>
        <div className="info-panel" id="videos">
          <div className="panel-title"><span>{videos.title}</span><Link href="/videos">{videos.viewAllButton}<ExternalLink size={13} /></Link></div>
          {videos.items.map((video, index) => (
            <article className="video-row" key={video.title}>
              <button className="video-thumb" onClick={() => setActive(index)} style={{ background: video.color }}>
                <b>{video.hanzi}</b><span>{video.pinyin}</span><small>{video.time}</small><i><Play fill="currentColor" /></i>
              </button>
              <div><h3>{video.title}</h3><p>{videos.description}</p></div>
              <Button className="max-md:hidden" onClick={() => setActive(index)} variant="outline"><Play size={14} />Play</Button>
            </article>
          ))}
        </div>
      </section>
      {selected ? <ModalShell dark label={selected.title} onClose={() => setActive(null)} wide><MediaPlayer item={selected} kind="video" /></ModalShell> : null}
    </>
  );
}
