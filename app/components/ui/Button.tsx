"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "outline" | "green" | "ghost";
  arrow?: boolean;
};

const variants = {
  primary: "border-transparent bg-[#d92128] text-white hover:bg-[#b7151c]",
  green: "border-transparent bg-[#12a34a] text-white hover:bg-[#0d873c]",
  outline: "border-stone-300 bg-white text-stone-800 hover:bg-stone-50",
  ghost: "border-transparent bg-transparent text-stone-800 hover:bg-stone-100",
};

export function Button({ children, variant = "primary", arrow, className = "", ...props }: Props) {
  return (
    <button className={`button inline-flex min-h-[42px] items-center justify-center gap-2 rounded-lg border px-[18px] py-2.5 text-[13px] font-bold transition hover:-translate-y-px hover:shadow-lg ${variants[variant]} ${className}`} {...props}>
      {children}
      {arrow ? <ArrowRight size={15} /> : null}
    </button>
  );
}
