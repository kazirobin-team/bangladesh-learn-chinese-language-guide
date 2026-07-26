import type { Metadata } from "next";
import seo from "./data/shared/seo.json";
import { CtaBanner } from "./components/Footer";
import { Hero } from "./components/home/Hero";
import { RoadmapBooks } from "./components/home/RoadmapBooks";
import { WhyRobin } from "./components/home/WhyRobin";

export const metadata: Metadata = { title: seo.home.title, description: seo.home.description };

export default function Home() {
  return <main><Hero /><RoadmapBooks /><WhyRobin /><CtaBanner /></main>;
}
