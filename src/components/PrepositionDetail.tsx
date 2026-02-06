"use client";

import { useEffect, useMemo, useRef, useState } from "react";

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
import PrepositionComparison from "@/components/PrepositionComparison";
import PrepositionCollocations from "@/components/PrepositionCollocations";

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
  const viewerContainerRef = useRef<HTMLDivElement | null>(null);
  const fullscreenIntentRef = useRef(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const meaning = useMemo(
    () => entry.i18n[activeLocale]?.meaning ?? entry.i18n["zh-CN"].meaning,
    [entry, activeLocale],
  );
  const hasAnimation = Boolean(entry.scene.animation);
  const enterFullscreen = (element: HTMLDivElement) => {
    const target = element as HTMLDivElement & {
      webkitRequestFullscreen?: () => Promise<void>;
      msRequestFullscreen?: () => Promise<void>;
    };
    if (target.requestFullscreen) {
      target.requestFullscreen();
    } else if (target.webkitRequestFullscreen) {
      target.webkitRequestFullscreen();
    } else if (target.msRequestFullscreen) {
      target.msRequestFullscreen();
    }
  };

  const requestFullscreen = () => {
    const element = viewerContainerRef.current;
    if (!element) return;
    if (document.fullscreenElement === element) {
      fullscreenIntentRef.current = false;
      document.exitFullscreen?.();
      return;
    }
    fullscreenIntentRef.current = true;
    enterFullscreen(element);
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      const element = viewerContainerRef.current;
      const isNowFullscreen = document.fullscreenElement === element;
      setIsFullscreen(isNowFullscreen);
      if (!isNowFullscreen && fullscreenIntentRef.current && element) {
        window.setTimeout(() => enterFullscreen(element), 50);
      }
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

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
          <div
            ref={viewerContainerRef}
            className={`viewer-fullscreen relative overflow-hidden bg-white/70 shadow-[var(--shadow-soft)] ${
              isFullscreen ? "flex h-full w-full flex-col rounded-none" : "rounded-[var(--radius-lg)]"
            }`}
          >
            <PrepositionViewer3D
              ref={viewerRef}
              entry={entry}
              frontLabel={ui.directionFront}
              showGroundOverride={showGroundOverride}
              className={isFullscreen ? "flex-1 h-full rounded-none border-b border-[color:var(--color-edge)]" : undefined}
            />
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[color:var(--color-edge)] bg-white/70 px-5 py-4 text-sm">
              <div className="space-y-1 text-[color:var(--color-muted)]">
                <p className="text-xs uppercase tracking-[0.3em]">
                  {ui.detailControlsTitle}
                </p>
                <p className="text-sm">{ui.detailViewerHint}</p>
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
                <Button variant="outline" size="sm" onClick={requestFullscreen}>
                  {isFullscreen ? ui.detailExitFullscreen : ui.detailFullscreen}
                </Button>
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
      <PrepositionComparison entry={entry} locale={activeLocale} />
      <PrepositionCollocations entry={entry} locale={activeLocale} />
    </div>
  );
}
