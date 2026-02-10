"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import type { Locale, PrepositionEntry } from "@/data/types";
import type { HomeCategory } from "@/lib/prepositionCategory";
import { persistSourceCategory } from "@/lib/sceneCategorySession";
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
  const localePath = localeToPathSegment(locale);
  const preferredSrc = category
    ? category === "time"
      ? `/thumbnails/${entry.id}--time--${locale}.svg`
      : `/thumbnails/${entry.id}--${category}.svg`
    : `/thumbnails/${entry.id}.${thumbnailFormat}`;
  const fallbackSrc = category
    ? `/thumbnails/${entry.id}--${category}.svg`
    : `/thumbnails/${entry.id}.svg`;
  const [imgSrc, setImgSrc] = useState(preferredSrc);

  useEffect(() => {
    setImgSrc(preferredSrc);
  }, [preferredSrc]);

  const isSvgThumbnail = imgSrc.endsWith(".svg");
  const handleCardClick = () => {
    if (!category) return;
    persistSourceCategory(entry.id, category);
  };

  return (
    <Link
      href={`/${localePath}/p/${entry.id}`}
      className="group"
      onClick={handleCardClick}
    >
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
          <div className="relative rounded-[var(--radius-md)] bg-white/70 p-3">
            {isSvgThumbnail ? (
              <Image
                src={imgSrc}
                alt={`${entry.word} ${category ?? "default"} thumbnail`}
                width={150}
                height={120}
                unoptimized
                className="h-20 w-full object-contain"
                onError={() => {
                  if (imgSrc !== fallbackSrc) setImgSrc(fallbackSrc);
                }}
              />
            ) : (
              <Image
                src={imgSrc}
                alt={`${entry.word} ${category ?? "default"} thumbnail`}
                width={150}
                height={120}
                className="h-20 w-full object-contain"
                onError={() => {
                  if (imgSrc !== fallbackSrc) setImgSrc(fallbackSrc);
                }}
              />
            )}
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
