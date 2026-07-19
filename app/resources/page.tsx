import type { Metadata } from "next";
import seo from "../data/shared/seo.json";
import { CtaBanner } from "../components/Footer";
import { resourcesData } from "../components/site-data";
import { AudioSection, ExamSection, HanziSection, PinyinSection } from "../components/resources/ResourceBlocks";
import { GallerySection } from "../components/resources/GalleryLightbox";
import { DownloadLibrary, NoticeTemplates, StudentTemplate } from "../components/resources/ResourceLibrary";
import { StudySection } from "../components/resources/StudySection";

export const metadata: Metadata = { title: seo.resources.title, description: seo.resources.description };

export default function ResourcesPage() {
  const { page } = resourcesData;
  return (
    <main>
      <section className="resource-hero"><div className="site-container"><h1>{page.title} <em>{page.accent}</em></h1><p>{page.description}</p></div></section>
      <div className="resources-page site-container">
        <DownloadLibrary /><NoticeTemplates /><StudentTemplate />
        <StudySection /><AudioSection /><PinyinSection /><HanziSection /><ExamSection /><GallerySection />
      </div>
      <CtaBanner resource />
    </main>
  );
}
