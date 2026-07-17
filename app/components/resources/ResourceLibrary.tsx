import { Download, ExternalLink, FileText, ImageDown } from "lucide-react";
import { resourcesData } from "../site-data";
import { iconMap, type IconName } from "../icon-map";

export function DownloadLibrary() {
  const { library } = resourcesData;
  return (
    <section className="download-library resource-block">
      <div className="library-heading"><span>{library.kicker}</span><h2>{library.title}</h2><p>{library.description}</p></div>
      <div className="download-grid">
        {library.items.map((item) => {
          const Icon = iconMap[item.icon as IconName] ?? FileText;
          return (
            <article key={item.title}>
              <span className="download-icon" style={{ background: item.soft, color: item.tone }}><Icon /></span>
              <div><small>{item.type} · {item.size}</small><h3>{item.title}</h3><p>{item.description}</p></div>
              <div className="download-links">
                <a download href={item.downloadUrl}><Download />{library.downloadLabel}</a>
                {item.externalUrl ? <a href={item.externalUrl} rel="noreferrer" target="_blank"><ExternalLink />{library.openLabel}</a> : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function PdfViewer() {
  const { pdfViewer } = resourcesData.library;
  return (
    <section className="pdf-section resource-block">
      <div className="pdf-copy"><span>{pdfViewer.kicker}</span><h2>{pdfViewer.title}</h2><p>{pdfViewer.description}</p>
        <div className="media-actions"><a className="button button-primary" download href={pdfViewer.downloadUrl}><Download size={16} />{pdfViewer.downloadLabel}</a><a className="button button-outline" href={pdfViewer.fileUrl} target="_blank"><ExternalLink size={16} />{pdfViewer.openLabel}</a></div>
      </div>
      <iframe src={`${pdfViewer.fileUrl}#toolbar=1&navpanes=0`} title={pdfViewer.title} />
    </section>
  );
}

export function NoticeTemplates() {
  const { notices } = resourcesData;
  return (
    <section className="notice-templates resource-block" id="notices">
      <div className="library-heading"><span>{notices.kicker}</span><h2>{notices.title}</h2><p>{notices.description}</p></div>
      <div className="template-grid">
        {notices.items.map((item) => (
          <article key={item.title}><span style={{ background: item.tone }}>{item.badge}</span><small>{item.date}</small><h3>{item.title}</h3><p>{item.description}</p><a download href={item.downloadUrl}><Download />{notices.downloadLabel}</a></article>
        ))}
      </div>
    </section>
  );
}

export function StudentTemplate() {
  const { students } = resourcesData;
  return (
    <section className="student-template resource-block">
      <div className="student-template-head"><div><span>{students.kicker}</span><h2>{students.title}</h2><p>{students.description}</p></div><a className="button button-primary" download href={students.downloadUrl}><Download size={16} />{students.downloadLabel}</a></div>
      <div className="student-table-wrap"><table><thead><tr>{students.columns.map((column) => <th key={column}>{column}</th>)}</tr></thead><tbody>{students.rows.map((row) => <tr key={row.id}><td>{row.id}</td><td>{row.name}</td><td>{row.level}</td><td>{row.attendance}</td><td><span>{row.status}</span></td></tr>)}</tbody></table></div>
      <div className="student-formats"><ImageDown />{students.formatsLabel}: {students.formats.join(" · ")}</div>
    </section>
  );
}
