import { homeData } from "../site-data";
import { SectionHeading } from "../ui/SectionHeading";

export function StatsFeatures() {
  const { stats, features } = homeData;
  return (
    <>
      <section className="stats-panel site-container relative z-[3] mx-auto -mt-[54px] grid w-[calc(100%-24px)] max-w-[1260px] grid-cols-2 rounded-xl border border-stone-200 bg-white p-4 shadow-2xl md:w-full md:grid-cols-5 md:p-6">
        {stats.items.map(({ icon: Icon, value, label }) => (
          <div className="stat flex flex-col items-center gap-1.5 border-b border-stone-200 p-3 text-center md:border-r md:border-b-0" key={label}>
            <Icon className="h-8 w-8 text-[#d92128]" /><b className="text-2xl">{value}</b><span className="text-[11px] text-stone-500">{label}</span>
          </div>
        ))}
      </section>
      <section className="section site-container mx-auto w-full max-w-[1260px] px-4 py-11 md:px-6 md:py-16 ">
        <SectionHeading eyebrow={features.heading.eyebrow} title={features.heading.title} redText={features.heading.accent} />
        <div className="feature-grid grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6">
          {features.items.map(({ icon: Icon, title, text }) => (
            <article className="feature-card min-h-[165px] border border-stone-200 px-4 py-5 text-center transition hover:-translate-y-1 hover:shadow-xl md:min-h-[172px]" key={title}>
              <div className="feature-icon mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-[#d92128]"><Icon className="h-5 w-5" /></div>
              <h3 className="my-3 mb-1.5 text-[13px] font-bold">{title}</h3><p className="m-0 text-[10px] leading-relaxed text-stone-500">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
