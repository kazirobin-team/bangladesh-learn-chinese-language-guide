// src/components/hsk/HSKLevelCard.tsx

"use client";

import { FC } from "react";
import Link from "next/link";
import { HSKLevel } from "@/app/data/hsk/hskData";

interface HSKLevelCardProps {
  level: HSKLevel;
}

const HSKLevelCard: FC<HSKLevelCardProps> = ({ level }) => {
  const { driveLinks } = level;

  const renderResourceButton = (
    label: string,
    icon: string,
    link?: string
  ) => {
    if (!link) return null;
    
    return (
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium bg-white/70 text-slate-700 rounded-full hover:bg-blue-100 hover:text-blue-600 hover:shadow-md transition-all"
      >
        {icon} {label}
      </Link>
    );
  };

  return (
    <div
      className={`${level.bgColor} border ${level.borderColor} rounded-xl p-6 transition-all hover:shadow-lg hover:-translate-y-1`}
    >
      <div className="flex items-start justify-between">
        <div>
          <span className="text-2xl">{level.icon}</span>
          <h3 className={`text-lg font-bold mt-2 ${level.color}`}>
            {level.level}
          </h3>
          <span className="inline-block px-3 py-1 text-xs font-medium bg-white/80 rounded-full mt-1">
            {level.title}
          </span>
        </div>
      </div>

      <p className="text-sm text-slate-600 mt-3 leading-relaxed">
        {level.description}
      </p>

      <div className="mt-4 pt-4 border-t border-slate-200/50 flex flex-wrap gap-2">
        {renderResourceButton("Books", "📖", driveLinks?.books)}
        {renderResourceButton("Audio", "🎧", driveLinks?.audio)}
        {renderResourceButton("Mock Test", "📝", driveLinks?.mockTest)}
        {renderResourceButton("Vocabulary", "📋", driveLinks?.vocabulary)}
      </div>
    </div>
  );
};

export default HSKLevelCard;