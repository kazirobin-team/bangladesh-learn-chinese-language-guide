import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CourseBooks } from "../CourseBooks";
import { homeData } from "../site-data";
import { SectionHeading } from "../ui/SectionHeading";

export function RoadmapBooks() {
  const { roadmap, courses } = homeData;
  return (
    <>
      <section className="section site-container mx-auto w-full max-w-[1260px] px-4 py-11 md:px-6 md:py-16">
        <SectionHeading eyebrow={roadmap.heading.eyebrow} title={roadmap.heading.title} redText={roadmap.heading.accent} />
        <div className="roadmap mt-10 flex flex-wrap justify-between gap-y-8">
          {roadmap.items.map((step, index) => (
            <div className="roadmap-step relative basis-1/3 text-center md:basis-1/5 xl:flex-1" key={step.title}>
              <div className="roadmap-dot mx-auto flex h-[58px] w-[58px] items-center justify-center rounded-full border-[6px] border-white/80 font-serif text-[22px] text-white shadow-lg" style={{ background: step.color }}>{step.short}</div>
              <h3 className="mt-3 mb-1 text-xs font-bold">{step.title}</h3><p className="mx-auto max-w-[85px] text-[9px] leading-snug text-stone-500">{step.sub}</p>
              {index < roadmap.items.length - 1 ? <span className="roadmap-arrow absolute -right-2 top-4 hidden text-2xl text-teal-700/50 xl:block">→</span> : null}
            </div>
          ))}
        </div>
      </section>
      <section className="books-section section site-container mx-auto w-full max-w-[1260px] border border-stone-200 px-4 py-11 text-center md:px-6 md:py-16">
        <SectionHeading eyebrow={courses.heading.eyebrow} title={courses.heading.title} redText={courses.heading.accent} />
        <CourseBooks />
        <Link className="button button-outline view-all mt-6" href="/resources">{courses.viewAllButton}<ArrowRight size={15} /></Link>
      </section>
    </>
  );
}
