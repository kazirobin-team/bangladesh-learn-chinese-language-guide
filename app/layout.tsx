import type { Metadata } from "next";
import "./globals.css";
import seo from "./data/shared/seo.json";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ModalProvider } from "./components/modals/ModalProvider";

export const metadata: Metadata = {
  metadataBase: new URL(seo.site.baseUrl),
  title: {
    default: seo.site.title,
    template: seo.site.titleTemplate,
  },
  description: seo.site.description,
  icons: { icon: "/assets/logo.png" },
  openGraph: {
    title: seo.site.title,
    description: seo.site.socialDescription,
    images: [{ url: seo.site.ogImage, width: seo.site.ogImageWidth, height: seo.site.ogImageHeight, alt: seo.site.title }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.site.title,
    description: seo.site.socialDescription,
    images: [seo.site.ogImage],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="m-0 overflow-x-hidden bg-white font-sans text-stone-900 antialiased">
        <ModalProvider>
          <Header />
          {children}
          {/* <Footer /> */}
        </ModalProvider>
      </body>
    </html>
  );
}
