import type { MetadataRoute } from "next";

import { localeToPathSegment, SUPPORTED_LOCALES } from "@/data/i18n";
import { PREPOSITIONS } from "@/data/prepositions";
import { STATIC_PAGE_SLUGS } from "@/data/staticPages";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  entries.push({
    url: absoluteUrl("/"),
    lastModified,
  });

  for (const locale of SUPPORTED_LOCALES) {
    const localePath = localeToPathSegment(locale);

    entries.push({
      url: absoluteUrl(`/${localePath}`),
      lastModified,
    });

    for (const slug of STATIC_PAGE_SLUGS) {
      entries.push({
        url: absoluteUrl(`/${localePath}/${slug}`),
        lastModified,
      });
    }

    for (const entry of PREPOSITIONS) {
      entries.push({
        url: absoluteUrl(`/${localePath}/p/${entry.id}`),
        lastModified,
      });
    }
  }

  return entries;
}

