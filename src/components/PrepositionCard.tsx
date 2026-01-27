"use client";

import Image from "next/image";
import Link from "next/link";

import type { Locale, PrepositionEntry } from "@/data/types";
import type { ThumbnailFormat } from "@/lib/thumbnail";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type PrepositionCardProps = {
  entry: PrepositionEntry;
  locale: Locale;
  index: number;
  thumbnailFormat?: ThumbnailFormat;
};

export default function PrepositionCard({
  entry,
  locale,
  index,
  thumbnailFormat = "svg",
}: PrepositionCardProps) {
  const meaning = entry.i18n[locale]?.meaning ?? entry.i18n["zh-CN"].meaning;
  const imgSrc = `/thumbnails/${entry.id}.${thumbnailFormat}`;
  return (
    <Link href={`/p/${entry.id}`} className="group">
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
        <CardHeader className="relative space-y-3">
          <div className="rounded-[var(--radius-md)] bg-white/70 p-3">
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
