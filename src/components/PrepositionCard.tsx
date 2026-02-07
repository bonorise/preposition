"use client";

import Image from "next/image";
import Link from "next/link";

import type { Locale, PrepositionEntry } from "@/data/types";
import type { HomeCategory } from "@/lib/prepositionCategory";
import type { ThumbnailFormat } from "@/lib/thumbnail";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { localeToPathSegment } from "@/data/i18n";

type PrepositionCardProps = {
  entry: PrepositionEntry;
  locale: Locale;
  index: number;
  category?: HomeCategory;
  thumbnailFormat?: ThumbnailFormat;
};

export default function PrepositionCard({
  entry,
  locale,
  index,
  category,
  thumbnailFormat = "svg",
}: PrepositionCardProps) {
  const meaning = entry.i18n[locale]?.meaning ?? entry.i18n["zh-CN"].meaning;
  const imgSrc = `/thumbnails/${entry.id}.${thumbnailFormat}`;
  const isTemporal = category === "time";
  const localePath = localeToPathSegment(locale);
  return (
    <Link href={`/${localePath}/p/${entry.id}`} className="group">
      <Card
        className={cn(
          "relative h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--color-accent)] hover:shadow-[var(--shadow-soft)]",
          "animate-fade-up",
        )}
        style={{ animationDelay: `${index * 40}ms` }}
      >
        <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute -right-10 -top-14 h-32 w-32 rounded-full bg-[color:var(--color-accent)]/20 blur-3xl" />
        </div>
        <CardHeader className="relative space-y-3 pb-2">
          <div
            className={cn(
              "relative rounded-[var(--radius-md)] bg-white/70 p-3",
              isTemporal ? "ring-1 ring-slate-300/80" : "",
            )}
          >
            {thumbnailFormat === "png" ? (
              <Image
                src={imgSrc}
                alt={`${entry.word} spatial thumbnail`}
                width={150}
                height={120}
                className="h-20 w-full object-contain"
              />
            ) : (
              <img
                src={imgSrc}
                alt={`${entry.word} spatial thumbnail`}
                loading="lazy"
                className="h-20 w-full object-contain"
              />
            )}
            {isTemporal ? (
              <span className="pointer-events-none absolute right-2 top-2 inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-300 bg-white/90 text-slate-500">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="8" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </span>
            ) : null}
          </div>
          <CardTitle className="text-2xl font-semibold tracking-tight mt-2">
            {entry.word}
          </CardTitle>
        </CardHeader>
        <CardContent className="relative space-y-2">
          <p className="text-sm leading-relaxed text-[color:var(--color-muted)]">
            {meaning}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
