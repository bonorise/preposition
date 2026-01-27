"use client";

import type { PrepositionEntry } from "@/data/types";
import { getUiText } from "@/data/i18n";
import type { ThumbnailFormat } from "@/lib/thumbnail";
import { useLocale } from "@/components/LocaleProvider";
import PrepositionCard from "@/components/PrepositionCard";

type PrepositionRelatedGalleryProps = {
  entries: PrepositionEntry[];
  title?: string;
  thumbnailFormat?: ThumbnailFormat;
};

export default function PrepositionRelatedGallery({
  entries,
  title,
  thumbnailFormat,
}: PrepositionRelatedGalleryProps) {
  const { locale } = useLocale();
  const ui = getUiText(locale);
  if (!entries.length) return null;

  return (
    <section className="space-y-4 pt-8">
      <h2 className="font-display text-2xl tracking-tight text-[color:var(--color-ink)]">
        {title ?? ui.detailRelatedTitle}
      </h2>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {entries.slice(0, 4).map((entry, index) => (
          <PrepositionCard
            key={entry.id}
            entry={entry}
            locale={locale}
            index={index}
            thumbnailFormat={thumbnailFormat}
          />
        ))}
      </div>
    </section>
  );
}
