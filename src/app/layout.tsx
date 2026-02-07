import type { Metadata } from "next";
import { headers } from "next/headers";
import { Chakra_Petch, Noto_Sans_SC } from "next/font/google";
import "./globals.css";

import { LocaleProvider } from "@/components/LocaleProvider";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { DEFAULT_LOCALE, isSupportedLocale } from "@/data/i18n";
import { getOpenGraphLocale, getSiteUrl } from "@/lib/seo";
const displayFont = Chakra_Petch({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Noto_Sans_SC({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: "Preposition 3D | Spatial learning for English prepositions",
  description:
    "Build spatial intuition for common English prepositions with 3D scenes, search, and bilingual examples.",
  applicationName: "Preposition 3D",
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
    title: "Preposition 3D | Spatial learning for English prepositions",
    description:
      "Build spatial intuition for common English prepositions with 3D scenes, search, and bilingual examples.",
    type: "website",
    locale: getOpenGraphLocale("en"),
  },
  twitter: {
    card: "summary",
    title: "Preposition 3D | Spatial learning for English prepositions",
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
      <body className={`${displayFont.variable} ${bodyFont.variable} antialiased`}>
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
