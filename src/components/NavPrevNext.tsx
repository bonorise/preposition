"use client";

import Link from "next/link";

import type { Locale, PrepositionEntry } from "@/data/types";
import { getUiText, localeToPathSegment } from "@/data/i18n";
import { buttonVariants } from "@/components/ui/button";

type NavPrevNextProps = {
  prev?: PrepositionEntry;
  next?: PrepositionEntry;
  locale: Locale;
};

export default function NavPrevNext({ prev, next, locale }: NavPrevNextProps) {
  const ui = getUiText(locale);
  const localePath = localeToPathSegment(locale);

  const itemClass =
    "h-8 w-full min-w-0 justify-center px-2 text-center text-xs font-normal whitespace-nowrap sm:px-3 sm:text-sm";

  const renderPlaceholder = (label: string, variant: "outline" | "secondary") => (
    <span
      aria-disabled="true"
      className={buttonVariants({
        variant,
        size: "sm",
        className: `${itemClass} pointer-events-none border-[color:var(--color-edge)] opacity-45`,
      })}
    >
      {label}
    </span>
  );

  return (
    <div className="grid w-full grid-cols-3 gap-3">
      {prev ? (
        <Link
          className={buttonVariants({
            variant: "secondary",
            size: "sm",
            className: itemClass,
          })}
          href={`/${localePath}/p/${prev.id}`}
        >
          {ui.detailPrev}
        </Link>
      ) : (
        renderPlaceholder(ui.detailPrev, "secondary")
      )}
      <Link
        className={buttonVariants({
          variant: "outline",
          size: "sm",
          className: itemClass,
        })}
        href={`/${localePath}`}
      >
        {ui.detailBack}
      </Link>
      {next ? (
        <Link
          className={buttonVariants({
            variant: "secondary",
            size: "sm",
            className: itemClass,
          })}
          href={`/${localePath}/p/${next.id}`}
        >
          {ui.detailNext}
        </Link>
      ) : (
        renderPlaceholder(ui.detailNext, "secondary")
      )}
    </div>
  );
}
