import { Download, ExternalLink } from "lucide-react";

type Props = {
  downloadLabel?: string;
  downloadUrl?: string;
  externalLabel?: string;
  externalUrl?: string;
};

export function MediaActions({
  downloadLabel = "Download",
  downloadUrl,
  externalLabel = "Open link",
  externalUrl,
}: Props) {
  if (!downloadUrl && !externalUrl) return null;
  return (
    <div className="media-actions">
      {downloadUrl ? (
        <a className="button button-primary button-compact" download href={downloadUrl}>
          <Download size={15} />{downloadLabel}
        </a>
      ) : null}
      {externalUrl ? (
        <a className="button button-outline button-compact" href={externalUrl} rel="noreferrer" target="_blank">
          <ExternalLink size={15} />{externalLabel}
        </a>
      ) : null}
    </div>
  );
}
