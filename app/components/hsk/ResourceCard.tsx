// src/components/hsk/ResourceCard.tsx

"use client";

import { FC } from "react";
import Link from "next/link";
import { ResourceItem } from "@/app/data/hsk/hskData";

interface ResourceCardProps {
  resource: ResourceItem;
}

const ResourceCard: FC<ResourceCardProps> = ({ resource }) => {
  return (
    <Link href={resource.link} target="_blank" rel="noopener noreferrer">
      <div className="bg-white border border-slate-200 rounded-xl p-5 text-center hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group">
        <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
          {resource.icon}
        </div>
        <h4 className="font-semibold text-slate-800 text-sm">{resource.title}</h4>
        <p className="text-xs text-slate-500 mt-1">{resource.description}</p>
      </div>
    </Link>
  );
};

export default ResourceCard;