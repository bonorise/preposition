"use client";

import Link from "next/link";

import type { Locale, PrepositionEntry } from "@/data/types";
import { getUiText } from "@/data/i18n";
import { buttonVariants } from "@/components/ui/button";

type NavPrevNextProps = {
  prev?: PrepositionEntry;
  next?: PrepositionEntry;
  locale: Locale;
};

export default function NavPrevNext({ prev, next, locale }: NavPrevNextProps) {
  const ui = getUiText(locale);
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Link
        className={buttonVariants({ variant: "outline", size: "sm" })}
        href={`/${locale}`}
      >
        {ui.detailBack}
      </Link>
      {prev ? (
        <Link
          className={buttonVariants({ variant: "secondary", size: "sm" })}
          href={`/${locale}/p/${prev.id}`}
        >
          {ui.detailPrev}
        </Link>
      ) : null}
      {next ? (
        <Link
          className={buttonVariants({ variant: "secondary", size: "sm" })}
          href={`/${locale}/p/${next.id}`}
        >
          {ui.detailNext}
        </Link>
      ) : null}
    </div>
  );
}
