"use client";

import { useMemo, useRef } from "react";

import type { Locale, PrepositionEntry } from "@/data/types";
import { getUiText } from "@/data/i18n";
import type { ThumbnailFormat } from "@/lib/thumbnail";
import PrepositionViewer3D, {
  type ViewerHandle,
} from "@/components/PrepositionViewer3D";
import PrepositionTextPanel from "@/components/PrepositionTextPanel";
import NavPrevNext from "@/components/NavPrevNext";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/components/LocaleProvider";
import PrepositionRelatedGallery from "@/components/PrepositionRelatedGallery";

type PrepositionDetailProps = {
  entry: PrepositionEntry;
  prev?: PrepositionEntry;
  next?: PrepositionEntry;
  related?: PrepositionEntry[];
  locale?: Locale;
  showGroundOverride?: boolean;
  thumbnailFormat?: ThumbnailFormat;
};

export default function PrepositionDetail({
  entry,
  prev,
  next,
  related = [],
  locale,
  showGroundOverride,
  thumbnailFormat,
}: PrepositionDetailProps) {
  const { locale: contextLocale } = useLocale();
  const activeLocale = locale ?? contextLocale;
  const ui = getUiText(activeLocale);
  const viewerRef = useRef<ViewerHandle | null>(null);
  const meaning = useMemo(
    () => entry.i18n[activeLocale]?.meaning ?? entry.i18n["zh-CN"].meaning,
    [entry, activeLocale],
  );
  const hasAnimation = Boolean(entry.scene.animation);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
              {entry.word}
            </h1>
            <p className="text-base text-[color:var(--color-muted)]">{meaning}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {entry.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[color:var(--color-edge)] px-3 py-1 text-[11px] uppercase tracking-wide text-[color:var(--color-ink)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <NavPrevNext prev={prev} next={next} locale={activeLocale} />
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]">
        <div className="space-y-4">
          <div className="relative overflow-hidden rounded-[var(--radius-lg)] bg-white/70 shadow-[var(--shadow-soft)]">
            <PrepositionViewer3D
              ref={viewerRef}
              entry={entry}
              frontLabel={ui.directionFront}
              showGroundOverride={showGroundOverride}
            />
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[color:var(--color-edge)] bg-white/70 px-5 py-4 text-sm">
              <div className="space-y-1 text-[color:var(--color-muted)]">
                <p className="text-xs uppercase tracking-[0.3em]">
                  {ui.detailControlsTitle}
                </p>
                <p className="text-sm">{ui.detailViewerHint}</p>
                <p className="text-xs">{ui.detailViewerHelper}</p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {hasAnimation ? (
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => viewerRef.current?.playAnimation?.()}
                  >
                    {ui.detailPlayAnimation}
                  </Button>
                ) : null}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => viewerRef.current?.reset()}
                >
                  {ui.detailResetCamera}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <PrepositionTextPanel
          entry={entry}
          locale={activeLocale}
          tipsTitle={ui.detailTipsTitle}
          examplesTitle={ui.detailExamplesTitle}
        />
      </div>

      <PrepositionRelatedGallery
        entries={related}
        thumbnailFormat={thumbnailFormat}
      />
    </div>
  );
}
