import type { Metadata } from "next";
import seo from "../data/shared/seo.json";
import { CtaBanner } from "../components/Footer";
import { PageHero } from "../components/PageHero";
import { CommunityContent } from "../components/community/CommunityContent";
import { communityPageData } from "../components/site-data";

export const metadata: Metadata = { title: seo.community.title, description: seo.community.description };

export default function CommunityPage() {
  return <main><PageHero {...communityPageData.page.hero} tone="green" /><CommunityContent /><CtaBanner /></main>;
}
