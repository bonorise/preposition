import type { Metadata } from "next";
import { headers } from "next/headers";
import Script from "next/script";
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
        <Script
          id="google-tag-manager-src"
          src="https://www.googletagmanager.com/gtag/js?id=G-EDMLRLP33R"
          strategy="beforeInteractive"
        />
        <Script id="google-tag-manager-init" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-EDMLRLP33R');`}
        </Script>
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
