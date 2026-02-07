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
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Link
        className={buttonVariants({ variant: "outline", size: "sm" })}
        href={`/${localePath}`}
      >
        {ui.detailBack}
      </Link>
      {prev ? (
        <Link
          className={buttonVariants({ variant: "secondary", size: "sm" })}
          href={`/${localePath}/p/${prev.id}`}
        >
          {ui.detailPrev}
        </Link>
      ) : null}
      {next ? (
        <Link
          className={buttonVariants({ variant: "secondary", size: "sm" })}
          href={`/${localePath}/p/${next.id}`}
        >
          {ui.detailNext}
        </Link>
      ) : null}
    </div>
  );
}
