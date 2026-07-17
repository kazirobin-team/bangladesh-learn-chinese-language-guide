"use client";

import { FileQuestion } from "lucide-react";
import { MediaActions } from "./MediaActions";

export type MediaSource = {
  title: string;
  sourceType?: string;
  sourceUrl?: string;
  embedUrl?: string;
  poster?: string;
  downloadUrl?: string;
  externalUrl?: string;
  credit?: string;
};

type Props = {
  item: MediaSource;
  kind: "audio" | "video";
  compact?: boolean;
};

export function MediaPlayer({ item, kind, compact }: Props) {
  const hasSource = item.sourceUrl || item.embedUrl;
  return (
    <div className={`media-player ${compact ? "media-player-compact" : ""}`}>
      <div className="media-frame">
        {item.embedUrl ? (
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            src={item.embedUrl}
            title={item.title}
          />
        ) : kind === "video" && item.sourceUrl ? (
          <video controls playsInline poster={item.poster} preload="metadata" src={item.sourceUrl} />
        ) : kind === "audio" && item.sourceUrl ? (
          <audio controls preload="metadata" src={item.sourceUrl} />
        ) : (
          <div className="media-empty"><FileQuestion /><span>Media URL is not configured</span></div>
        )}
      </div>
      <div className="media-player-meta">
        <div><h3>{item.title}</h3>{item.credit ? <p>{item.credit}</p> : null}</div>
        {hasSource ? <MediaActions downloadUrl={item.downloadUrl} externalUrl={item.externalUrl} /> : null}
      </div>
    </div>
  );
}
