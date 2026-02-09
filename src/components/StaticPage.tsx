import Link from "next/link";

import type { Locale } from "@/data/types";
import { getUiText, localeToPathSegment } from "@/data/i18n";
import type { StaticPageContent } from "@/data/staticPages";

export default function StaticPage({
  locale,
  content,
}: {
  locale: Locale;
  content: StaticPageContent;
}) {
  const ui = getUiText(locale);
  const localePath = localeToPathSegment(locale);

  return (
    <main className="mx-auto max-w-3xl px-6 pb-20 pt-12">
      <header className="space-y-4">
        <Link
          href={`/${localePath}`}
          className="inline-flex text-sm font-semibold text-[color:var(--color-muted)] underline decoration-transparent underline-offset-4 transition hover:decoration-current"
        >
          {ui.headerHome}
        </Link>
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight text-[color:var(--color-ink)] md:text-4xl">
            {content.title}
          </h1>
          <p className="text-base text-[color:var(--color-muted)]">
            {content.description}
          </p>
          <p className="text-sm text-[color:var(--color-muted)]">
            {ui.pageUpdatedLabel}: {content.updatedAt}
          </p>
        </div>
      </header>

      <div className="mt-10 space-y-10">
        {content.sections.map((section) => (
          <section key={section.heading} className="space-y-3">
            <h2 className="text-lg font-semibold text-[color:var(--color-ink)]">
              {section.heading}
            </h2>
            {section.body?.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-relaxed text-[color:var(--color-ink)]"
              >
                {paragraph}
              </p>
            ))}
            {section.bullets ? (
              <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-[color:var(--color-ink)]">
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>
    </main>
  );
}

