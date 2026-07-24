// src/app/hsk-materials/page.tsx

import { Metadata } from "next";
import HSKMaterialsPage from "@/app/components/hsk/HSKMaterialsPage";

export const metadata: Metadata = {
  title: "HSK Books & All Materials - Learn Chinese with Kazi Robin",
  description:
    "Find, download & learn Chinese easily with HSK books, audio, mock tests, vocabulary and more for all levels.",
};

export default function Page() {
  return <HSKMaterialsPage />;
}