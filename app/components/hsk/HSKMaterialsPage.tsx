// src/components/hsk/HSKMaterialsPage.tsx

"use client";

import { useState } from "react";
import Link from "next/link";
import { hskLevels, allResources } from "@/app/data/hsk/hskData";
import HSKLevelCard from "./HSKLevelCard";
import ResourceCard from "./ResourceCard";

export default function HSKMaterialsPage() {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  const filteredLevels = selectedLevel
    ? hskLevels.filter((level) => level.id === selectedLevel)
    : hskLevels;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 sm:py-20 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-0 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            📚 HSK Books & All Materials
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
            Find, Download & Learn Chinese Easily
          </p>

          {/* Level Selector Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
            <button
              onClick={() => setSelectedLevel(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                !selectedLevel
                  ? "bg-white text-blue-600 shadow-lg"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              All Levels
            </button>
            {hskLevels.map((level) => (
              <button
                key={level.id}
                onClick={() => setSelectedLevel(level.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedLevel === level.id
                    ? "bg-white text-blue-600 shadow-lg"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                {level.level}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8 md:p-10 border border-blue-100">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 text-center">
            🎯 Welcome to HSK Resource Hub!
          </h2>
          <p className="mt-3 text-slate-600 text-center max-w-3xl mx-auto">
            Here you will find all HSK level books and complete learning materials.
            Choose your preferred level and download PDF, audio, mock test, vocabulary
            and more.
          </p>
        </div>
      </section>

      {/* HSK Levels Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 sm:mb-8 text-center">
          📖 HSK Books & Materials
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredLevels.map((level) => (
            <HSKLevelCard key={level.id} level={level} />
          ))}
        </div>
      </section>

      {/* All-in-One Resources Section */}
      <section className="bg-slate-50 border-t border-slate-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 sm:mb-8 text-center">
            📦 All-in-One Learning Materials
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {allResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 sm:p-12 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold">
            🌟 Learn Chinese with Kazi Robin
          </h2>
          <p className="mt-3 text-blue-100 max-w-2xl mx-auto">
            Your One Stop Solution for HSK Books & Materials. Study, Practice & Succeed!
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/community"
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Join Community
            </Link>
            <Link
              href="/classes"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              Browse Classes
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm sm:text-base text-slate-400">
            © 2026 Learn Chinese with Kazi Robin. All Rights Reserved.
          </p>
          <div className="mt-4 flex justify-center gap-6">
            <Link href="#" className="text-slate-400 hover:text-white transition">
              Telegram
            </Link>
            <Link href="#" className="text-slate-400 hover:text-white transition">
              YouTube
            </Link>
            <Link href="#" className="text-slate-400 hover:text-white transition">
              WhatsApp
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}