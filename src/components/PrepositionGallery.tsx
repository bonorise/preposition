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
  const isChinese = activeLocale === "zh-CN";
  const heroLines = isChinese
    ? [ui.heroSloganZhLine1, ui.heroSloganZhLine2]
    : [ui.heroSloganEnLine1, ui.heroSloganEnLine2];
  const [query, setQuery] = useState("");
  const [playgroundSeedId, setPlaygroundSeedId] = useState<string | null>(null);
  const playgroundSeedEntry = useMemo(() => {
    if (!playgroundSeedId) return null;
    return entries.find((entry) => entry.id === playgroundSeedId) ?? null;
  }, [entries, playgroundSeedId]);

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
      <div className="relative py-10 animate-rise">
        <div className="absolute left-1/2 top-0 h-44 w-44 -translate-x-1/2 rounded-full bg-[color:var(--color-accent)]/22 blur-3xl" />
        <div className="absolute left-1/2 top-16 h-40 w-40 -translate-x-[140%] rounded-full bg-[color:var(--color-accent-2)]/18 blur-3xl" />
        <div className="absolute left-1/2 top-24 h-36 w-36 translate-x-[65%] rounded-full bg-[color:var(--color-accent)]/16 blur-3xl" />
        <div className="relative mx-auto max-w-4xl space-y-7 text-center">
          <h1
            className={`font-display font-semibold leading-tight tracking-tight text-[color:var(--color-ink)] drop-shadow-[0_10px_24px_rgba(15,23,42,0.2)] ${
              isChinese
                ? "text-3xl md:text-6xl"
                : "text-3xl md:text-5xl lg:text-[3.15rem]"
            }`}
          >
            <span className={`block ${isChinese ? "" : "md:whitespace-nowrap"}`}>
              {heroLines[0]}
            </span>
            <span className={`mt-1 block ${isChinese ? "" : "md:whitespace-nowrap"}`}>
              {heroLines[1]}
            </span>
          </h1>
          <div className="mx-auto grid max-w-2xl gap-4">
            <Input
              value={query}
              onChange={(event) => {
                const value = event.target.value;
                setQuery(value);
                const normalized = value.toLowerCase().replace(/\s+/g, "").trim();
                if (!normalized) {
                  setPlaygroundSeedId(null);
                  return;
                }
                const match =
                  entries.find(
                    (entry) =>
                      entry.word.toLowerCase().replace(/\s+/g, "").trim() === normalized,
                  ) ?? null;
                if (match) {
                  setPlaygroundSeedId(match.id);
                }
              }}
              placeholder={ui.searchPlaceholder}
              aria-label={ui.searchPlaceholder}
              className="mx-auto w-full border-[color:var(--color-edge)] bg-white/70 text-center text-base shadow-[var(--shadow-tight)] focus:placeholder:text-transparent"
            />
            <p className="text-center text-sm font-medium text-[color:var(--color-ink)]">
              {ui.heroMasteryLine}
            </p>
          </div>
        </div>
      </div>

      <SpatialPlayground
        key={playgroundSeedId ?? "default"}
        seedEntry={playgroundSeedEntry}
      />

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
