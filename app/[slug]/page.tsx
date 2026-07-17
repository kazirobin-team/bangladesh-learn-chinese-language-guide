import type { Metadata } from "next";
import { notFound } from "next/navigation";
import footerPages from "../data/shared/footer-pages.json";
import { CtaBanner } from "../components/Footer";
import { GenericInfoPage } from "../components/GenericInfoPage";
import { PageHero } from "../components/PageHero";

export function generateStaticParams() {
  return footerPages.pages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = footerPages.pages.find((item) => item.slug === slug);
  return page ? { title: `${page.title} ${page.accent}`, description: page.description } : {};
}

export default async function FooterInfoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = footerPages.pages.find((item) => item.slug === slug);
  if (!page) notFound();
  return <main><PageHero eyebrow={page.eyebrow} title={page.title} accent={page.accent} description={page.description} /><GenericInfoPage sections={page.sections} /><CtaBanner /></main>;
}
