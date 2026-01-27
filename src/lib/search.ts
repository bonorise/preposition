import type { Locale, PrepositionEntry } from "@/data/types";

function normalize(value: string) {
  return value.toLowerCase().replace(/\s+/g, "").trim();
}

export function filterPrepositions(
  entries: PrepositionEntry[],
  query: string,
  locale: Locale,
) {
  const normalized = normalize(query);
  if (!normalized) return entries;

  return entries.filter((entry) => {
    const meaning = entry.i18n[locale]?.meaning ?? "";
    return (
      normalize(entry.word).includes(normalized) ||
      normalize(meaning).includes(normalized)
    );
  });
}
