import type { Metadata } from "next";
import seo from "../data/shared/seo.json";
import { CtaBanner } from "../components/Footer";
import { PageHero } from "../components/PageHero";
import { VideoLibrary } from "../components/media/VideoLibrary";
import { videoPageData } from "../components/site-data";

export const metadata: Metadata = { title: seo.videos.title, description: seo.videos.description };

export default function VideosPage() {
  return <main><PageHero {...videoPageData.page.hero} tone="red" /><VideoLibrary /><CtaBanner /></main>;
}
