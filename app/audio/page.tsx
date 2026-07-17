import type { Metadata } from "next";
import seo from "../data/shared/seo.json";
import { CtaBanner } from "../components/Footer";
import { PageHero } from "../components/PageHero";
import { AudioLibrary } from "../components/media/AudioLibrary";
import { audioPageData } from "../components/site-data";

export const metadata: Metadata = { title: seo.audio.title, description: seo.audio.description };

export default function AudioPage() {
  return <main><PageHero {...audioPageData.page.hero} tone="blue" /><AudioLibrary /><CtaBanner /></main>;
}
