"use client";

import { useMemo, useState } from "react";

import type { Locale, PrepositionEntry } from "@/data/types";
import { getUiText } from "@/data/i18n";
import { partitionByHomeCategory } from "@/lib/prepositionCategory";
import { filterPrepositions } from "@/lib/search";
import type { ThumbnailFormat } from "@/lib/thumbnail";
import { Input } from "@/components/ui/input";
import PrepositionCard from "@/components/PrepositionCard";
import SpatialPlayground from "@/components/SpatialPlayground";
import { useLocale } from "@/components/LocaleProvider";

type PrepositionGalleryProps = {
  entries: PrepositionEntry[];
  locale?: Locale;
  thumbnailFormat?: ThumbnailFormat;
};

export default function PrepositionGallery({
  entries,
  locale,
  thumbnailFormat,
}: PrepositionGalleryProps) {
  const { locale: contextLocale } = useLocale();
  const activeLocale = locale ?? contextLocale;
  const ui = getUiText(activeLocale);
  const [query, setQuery] = useState("");

  const results = useMemo(
    () => filterPrepositions(entries, query, activeLocale),
    [entries, query, activeLocale],
  );
  const groupedResults = useMemo(
    () => partitionByHomeCategory(results),
    [results],
  );
  const sections = [
    {
      key: "space",
      title: ui.sectionSpaceTitle,
      description: ui.sectionSpaceDesc,
      entries: groupedResults.space,
    },
    {
      key: "time",
      title: ui.sectionTimeTitle,
      description: ui.sectionTimeDesc,
      entries: groupedResults.time,
    },
    {
      key: "dynamic",
      title: ui.sectionDynamicTitle,
      description: ui.sectionDynamicDesc,
      entries: groupedResults.dynamic,
    },
  ] as const;

  return (
    <section className="space-y-10">
      <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--color-edge)] bg-white/70 p-8 shadow-[var(--shadow-soft)] animate-rise">
        <div className="absolute -right-16 -top-24 h-56 w-56 rounded-full bg-[color:var(--color-accent)]/20 blur-3xl" />
        <div className="absolute -left-12 bottom-0 h-48 w-48 rounded-full bg-[color:var(--color-accent-2)]/20 blur-3xl" />
        <div className="relative space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            {ui.featureChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-[color:var(--color-edge)] bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]"
              >
                {chip}
              </span>
            ))}
          </div>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--color-muted)]">
              {ui.siteTagline}
            </p>
            <h1 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
              {ui.siteTitle}
            </h1>
            <p className="max-w-2xl text-base text-[color:var(--color-muted)]">
              {ui.siteSubtitle}
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={ui.searchPlaceholder}
              aria-label={ui.searchPlaceholder}
              className="md:max-w-xl"
            />
            <div className="flex flex-wrap items-center gap-3 text-sm text-[color:var(--color-muted)]">
              <span className="rounded-full border border-[color:var(--color-edge)] px-3 py-1">
                {results.length} {ui.countLabel}
              </span>
              <span className="hidden text-xs uppercase tracking-[0.2em] md:inline">
                {ui.searchHint}
              </span>
            </div>
          </div>
        </div>
      </div>

      <SpatialPlayground />

      <div className="space-y-4">
        <h2 className="font-display text-2xl tracking-tight text-[color:var(--color-ink)]">
          {ui.galleryLabel}
        </h2>
        {results.length === 0 ? (
          <div className="rounded-[var(--radius-md)] border border-dashed border-[color:var(--color-edge)] bg-white/60 p-8 text-center text-[color:var(--color-muted)]">
            <p className="text-base font-semibold">{ui.emptyTitle}</p>
            <p className="mt-2 text-sm">{ui.emptyBody}</p>
          </div>
        ) : (
          <div className="space-y-8">
            {sections.map((section) => (
              <section
                key={section.key}
                className="space-y-4 rounded-[var(--radius-md)] border border-[color:var(--color-edge)] bg-white/55 p-5"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="space-y-1">
                    <h3 className="font-display text-xl tracking-tight text-[color:var(--color-ink)]">
                      {section.title}
                    </h3>
                    <p className="text-sm text-[color:var(--color-muted)]">
                      {section.description}
                    </p>
                  </div>
                  <span className="rounded-full border border-[color:var(--color-edge)] bg-white/70 px-3 py-1 text-xs uppercase tracking-[0.15em] text-[color:var(--color-muted)]">
                    {section.entries.length} {ui.countLabel}
                  </span>
                </div>

                {section.entries.length === 0 ? (
                  <div className="rounded-[var(--radius-md)] border border-dashed border-[color:var(--color-edge)] bg-white/60 p-4 text-sm text-[color:var(--color-muted)]">
                    {ui.sectionEmpty}
                  </div>
                ) : (
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {section.entries.map((entry, index) => (
                      <PrepositionCard
                        key={entry.id}
                        entry={entry}
                        locale={activeLocale}
                        index={index}
                        category={section.key}
                        thumbnailFormat={thumbnailFormat}
                      />
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
