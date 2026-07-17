"use client";

import { CourseBooks } from "../CourseBooks";
import { resourcesData } from "../site-data";
import { ResourceTitle } from "./ResourceBlocks";

export function StudySection() {
  const { study } = resourcesData;
  return (
    <section className="resource-block resource-study mb-5 rounded-xl border border-stone-200 bg-white p-4 md:p-6">
      <ResourceTitle {...study.section} />
      <CourseBooks />
      <div className="study-types mt-6 grid grid-cols-2 gap-3 lg:grid-cols-5">
        {study.types.map(({ icon: Icon, title }) => (
          <div className="flex min-h-[52px] items-center justify-center gap-2.5 rounded-lg border border-stone-200 bg-white text-[10px] font-bold md:text-[11px]" key={title}>
            <Icon className="h-5 w-5 text-[#d92128]" /><span>{title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
