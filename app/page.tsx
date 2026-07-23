import type { Metadata } from "next"
import seo from "./data/shared/seo.json"
import { CtaBanner } from "./components/Footer"
import { AudioPreview } from "./components/home/AudioPreview"
import { Hero } from "./components/home/Hero"
import { NoticeVideos } from "./components/home/NoticeVideos"
import { RoadmapBooks } from "./components/home/RoadmapBooks"
import { StatsFeatures } from "./components/home/StatsFeatures"
import { WhyRobin } from "./components/home/WhyRobin"

export const metadata: Metadata = {
  title: seo.home.title,
  description: seo.home.description,
}

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsFeatures />
      <RoadmapBooks />
      <NoticeVideos />
      <AudioPreview />
      <WhyRobin />
      <CtaBanner />
    </main>
  )
}
