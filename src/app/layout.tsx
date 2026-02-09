import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

import { LocaleProvider } from "@/components/LocaleProvider";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { DEFAULT_LOCALE, isSupportedLocale } from "@/data/i18n";
import { getOpenGraphLocale, getSiteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: "Preposition Dino | Spatial learning for English prepositions",
  description:
    "Build spatial intuition for common English prepositions with 3D scenes, search, and bilingual examples.",
  applicationName: "Preposition Dino",
  keywords: [
    "prepositions",
    "English learning",
    "3D",
    "spatial",
    "language learning",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Preposition Dino | Spatial learning for English prepositions",
    description:
      "Build spatial intuition for common English prepositions with 3D scenes, search, and bilingual examples.",
    type: "website",
    locale: getOpenGraphLocale("en"),
  },
  twitter: {
    card: "summary",
    title: "Preposition Dino | Spatial learning for English prepositions",
    description:
      "Build spatial intuition for common English prepositions with 3D scenes, search, and bilingual examples.",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerStore = await headers();
  const requestedLocale = headerStore.get("x-locale");
  const activeLocale =
    requestedLocale && isSupportedLocale(requestedLocale)
      ? requestedLocale
      : DEFAULT_LOCALE;

  return (
    <html lang={activeLocale}>
      <body className="antialiased">
        <LocaleProvider initialLocale={activeLocale}>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <div className="flex-1">{children}</div>
            <SiteFooter />
          </div>
        </LocaleProvider>
      </body>
    </html>
  );
}
