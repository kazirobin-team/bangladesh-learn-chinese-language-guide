"use client";

import { homeData } from "./site-data";
import { useSiteModal } from "./modals/ModalProvider";
import { Button } from "./ui/Button";

export function CourseBooks() {
  const { courses } = homeData;
  const { openPreview } = useSiteModal();
  return (
    <div className="course-grid grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 xl:grid-cols-6">
      {courses.items.map((course) => (
        <article className="course-card rounded-lg border border-stone-200 bg-white p-2.5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl" key={course.level}>
          <div className="book-cover relative mb-4 flex h-[210px] flex-col justify-center overflow-hidden rounded text-white shadow-lg md:h-[250px] xl:h-[230px]" style={{ background: course.color }}>
            <small className="font-serif text-[13px]">{courses.coverChinese}</small>
            <span className="mt-1 text-xs font-extrabold leading-tight">{courses.coverTitle}</span>
            <strong className="mt-4 text-7xl font-normal leading-none">{course.level}</strong>
          </div>
          <h3 className="text-[13px] font-bold">HSK {course.level}</h3>
          <p className="my-1 text-[9px] text-stone-500">{course.subtitle}</p>
          <div className="course-actions mt-3 grid grid-cols-2 gap-1.5">
            <Button onClick={() => openPreview(course.level === 1 ? {
              title: "HSK 1 Starter Guide",
              kind: "pdf",
              url: "/assets/documents/hsk1-starter-guide.pdf",
              downloadUrl: "/assets/documents/hsk1-starter-guide.pdf",
            } : {
              title: `HSK ${course.level}`,
              kind: "book",
              color: course.color,
              level: course.level,
              subtitle: course.subtitle,
              coverChinese: courses.coverChinese,
              coverTitle: courses.coverTitle,
            })} variant="outline">{courses.previewButton}</Button>
            <Button>{courses.downloadButton}</Button>
          </div>
        </article>
      ))}
    </div>
  );
}
