import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { homeData } from "../site-data";
import { CommunityButton } from "../CommunityButton";

export function Hero() {
  const { hero } = homeData;
  return (
    <section className="hero relative min-h-[640px] overflow-hidden bg-[#fdf6f0] max-md:min-h-[690px]">
      <div className="site-container hero-inner relative mx-auto min-h-[640px] w-full max-w-[1260px] px-4 md:px-6 max-md:min-h-[690px]">
        <div className="hero-copy w-[54%] pt-16 max-lg:w-[61%] max-md:w-full max-md:pt-11">
          <span className="hero-kicker inline-block rounded-full bg-amber-50 px-3 py-2 text-[11px] font-bold text-amber-600">{hero.kicker}</span>
          <h1 className="my-5 text-[clamp(47px,5.2vw,74px)] font-extrabold leading-[.99] tracking-[-3.5px] max-md:text-5xl">
            {hero.headline.map((line, lineIndex) => (
              <span className="block" key={lineIndex}>
                {line.map((segment, segmentIndex) => (
                  <span className={"accent" in segment && segment.accent ? "text-[#d92128]" : ""} key={segmentIndex}>{segment.text}</span>
                ))}
              </span>
            ))}
          </h1>
          <p className="max-w-132.5 text-sm leading-7 text-stone-600">{hero.description}</p>
          <div className="hero-actions mt-6 flex flex-wrap gap-3">
            <CommunityButton variant="primary" />
            <Link className="button button-outline" href={hero.secondaryAction.href}>{hero.secondaryAction.label}<ArrowRight size={15} /></Link>
          </div>
          <div className="social-proof mt-6 flex flex-wrap items-center gap-3">
            <div className="avatars flex pl-2">{hero.socialProof.avatars.map((avatar) => <span key={avatar}>{avatar}</span>)}</div>
            <div className="flex flex-col"><b className="text-xs">{hero.socialProof.title}</b><small className="text-[10px] text-stone-500">{hero.socialProof.subtitle}</small></div>
            <div className="rating ml-2 flex gap-0.5 text-amber-400">{Array.from({ length: hero.socialProof.rating }, (_, index) => <Star className="h-3 w-3" fill="currentColor" key={index} />)}</div>
          </div>
        </div>
        {/* <div className="benefit-stack absolute right-4 top-20  flex-col gap-3 hidden">
          {hero.benefits.map(({ icon: Icon, title, text }) => (
            <div className="benefit-card flex min-w-45 items-center gap-3 rounded-xl border border-white/90 bg-white/90 p-3 shadow-xl backdrop-blur-md" key={title}>
              <Icon className="h-7 w-7 text-[#d92128]" />
              <div className="flex flex-col"><b className="text-[13px]">{title}</b><span className="mt-0.5 text-[10px] text-stone-500">{text}</span></div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
