type Props = {
  eyebrow?: string;
  title: string;
  redText?: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, redText, description }: Props) {
  return (
    <div className="section-heading mx-auto mb-8 max-w-[720px] text-center">
      {eyebrow ? <span className="text-[11px] font-extrabold tracking-[1.2px] text-[#d92128]">{eyebrow}</span> : null}
      <h2 className="mt-1 text-[clamp(27px,3vw,38px)] font-extrabold tracking-[-1.2px]">{title} {redText ? <em className="not-italic text-[#d92128]">{redText}</em> : null}</h2>
      {description ? <p className="mt-2 text-sm text-stone-500">{description}</p> : null}
    </div>
  );
}
