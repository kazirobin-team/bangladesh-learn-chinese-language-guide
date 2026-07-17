"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Download, ExternalLink, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { resourcesData } from "../site-data";
import { ModalShell } from "../modals/ModalShell";
import { ResourceTitle } from "./ResourceBlocks";

export function GallerySection() {
  const { gallery } = resourcesData;
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(100);
  const activeItem = gallery.items[active];
  const show = (index: number) => { setActive(index); setZoom(100); setOpen(true); };
  const move = (direction: number) => setActive((active + direction + gallery.items.length) % gallery.items.length);

  return (
    <>
      <section className="resource-block resource-gallery">
        <ResourceTitle {...gallery.section} />
        <div className="gallery-grid">
          {gallery.items.map(({ icon: Icon, title, className, content, image }, index) => (
            <button key={title} onClick={() => show(index)}>
              <div className={`gallery-art ${className}`}>{image ? <Image alt={title} fill sizes="220px" src={image} /> : <><Icon /><b>{content}</b></>}</div>
              <span>{title}</span>
            </button>
          ))}
        </div>
      </section>
      {open ? (
        <ModalShell dark label={gallery.lightboxLabel} onClose={() => setOpen(false)} wide>
          <div className="lightbox">
            <div className="lightbox-stage">
              {activeItem.image ? <Image alt={gallery.imageAlt} fill sizes="90vw" src={activeItem.image} style={{ transform: `scale(${zoom / 100})` }} /> : <div className={`lightbox-chart ${activeItem.className}`} style={{ transform: `scale(${zoom / 100})` }}><b>{activeItem.content}</b></div>}
              <button className="lightbox-prev" onClick={() => move(-1)}><ChevronLeft /></button><button className="lightbox-next" onClick={() => move(1)}><ChevronRight /></button>
              <div className="lightbox-tools">
                <button onClick={() => setZoom(Math.max(75, zoom - 25))}><Minus /></button><span>{zoom}%</span><button onClick={() => setZoom(Math.min(175, zoom + 25))}><Plus /></button>
                {"downloadUrl" in activeItem && activeItem.downloadUrl ? <a download href={activeItem.downloadUrl} title={gallery.downloadLabel}><Download /></a> : null}
                {"externalUrl" in activeItem && activeItem.externalUrl ? <a href={activeItem.externalUrl} target="_blank" title={gallery.openLabel}><ExternalLink /></a> : null}
              </div>
            </div>
            <div className="lightbox-thumbs">
              {gallery.items.map((item, index) => <button className={index === active ? "active" : ""} key={item.title} onClick={() => setActive(index)}>{item.image ? <Image alt="" fill sizes="130px" src={item.image} /> : <b>{item.content}</b>}</button>)}
              <span>{gallery.moreCount}<br /><small>{gallery.moreLabel}</small></span>
            </div>
          </div>
        </ModalShell>
      ) : null}
    </>
  );
}
