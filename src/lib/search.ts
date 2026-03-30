import type { Locale, PrepositionEntry } from "@/data/types";

function normalize(value: string) {
  return value.toLowerCase().replace(/\s+/g, "").trim();
}

function matchByWord(entries: PrepositionEntry[], normalizedQuery: string) {
  return entries.filter((entry) =>
    normalize(entry.word).includes(normalizedQuery),
  );
}

function matchByMeaning(
  entries: PrepositionEntry[],
  normalizedQuery: string,
  locale: Locale,
) {
  return entries.filter((entry) => {
    const meaning = entry.i18n[locale]?.meaning ?? "";
    return normalize(meaning).includes(normalizedQuery);
  });
}

export type PrepositionSearchMatchMode = "word" | "fallback-meaning";

export type PrepositionSearchResult = {
  results: PrepositionEntry[];
  matchMode: PrepositionSearchMatchMode;
};

export function filterPrepositions(
  entries: PrepositionEntry[],
  query: string,
  locale: Locale,
): PrepositionSearchResult {
  const normalized = normalize(query);
  if (!normalized) {
    return {
      results: entries,
      matchMode: "word",
    };
  }

  const wordMatches = matchByWord(entries, normalized);
  if (wordMatches.length > 0 || locale === "en") {
    return {
      results: wordMatches,
      matchMode: "word",
    };
  }

  return {
    results: matchByMeaning(entries, normalized, locale),
    matchMode: "fallback-meaning",
  };
}
