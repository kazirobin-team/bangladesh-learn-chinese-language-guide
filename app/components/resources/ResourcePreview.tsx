"use client";

import Image from "next/image";
import { Download } from "lucide-react";

export type PreviewResource = {
  title: string;
  kind: "pdf" | "image" | "book";
  url?: string;
  downloadUrl?: string;
  color?: string;
  level?: number;
  subtitle?: string;
  coverChinese?: string;
  coverTitle?: string;
};

export function ResourcePreview({ resource }: { resource: PreviewResource }) {
  return (
    <div className="resource-preview">
      <div className="resource-preview-bar">
        <div>
          <small>PREVIEW</small>
          <h2>{resource.title}</h2>
        </div>
        {resource.downloadUrl ? (
          <a
            className="button button-primary"
            download
            href={resource.downloadUrl}
          >
            <Download size={16} />
            Download
          </a>
        ) : null}
      </div>
      <div
        className={`resource-preview-stage resource-preview-${resource.kind}`}
      >
        {resource.kind === "pdf" && resource.url ? (
          <iframe
            src={`${resource.url}#toolbar=1&navpanes=0&view=FitH`}
            title={resource.title}
          />
        ) : null}
        {resource.kind === "image" && resource.url ? (
          <Image alt={resource.title} fill sizes="95vw" src={resource.url} />
        ) : null}
        {resource.kind === "book" ? (
          <div className="resource-preview-book-card">
            <div
              className="book-cover preview-book-cover"
              style={{ background: resource.color }}
            >
              <small>{resource.coverChinese}</small>
              <span>{resource.coverTitle}</span>
              <strong>{resource.level}</strong>
            </div>
            <h3>{resource.title}</h3>
            <p>{resource.subtitle}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
