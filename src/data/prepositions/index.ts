import type { PrepositionEntry } from "@/data/types";

import { assemblePreposition } from "./shared/assemble";
import { PREPOSITION_MODULES } from "./shared/registry";

export const PREPOSITIONS: PrepositionEntry[] = PREPOSITION_MODULES.map(
  assemblePreposition,
);

const PREPOSITIONS_BY_ID = new Map(
  PREPOSITIONS.map((entry) => [entry.id, entry] as const),
);

export function getPrepositionById(id: string) {
  return PREPOSITIONS_BY_ID.get(id);
}

export function getPrepositionIndex(id: string) {
  return PREPOSITIONS.findIndex((entry) => entry.id === id);
}

export function getRelatedPrepositions(entryId: string, limit = 4) {
  const entry = getPrepositionById(entryId);
  if (!entry) return [];

  const safeLimit = Math.max(0, limit);
  const related: PrepositionEntry[] = [];
  const seen = new Set<string>();

  for (const relatedId of entry.relatedIds) {
    if (related.length >= safeLimit) break;
    if (seen.has(relatedId)) continue;
    const relatedEntry = getPrepositionById(relatedId);
    if (!relatedEntry || relatedEntry.id === entry.id) continue;
    seen.add(relatedEntry.id);
    related.push(relatedEntry);
  }

  return related;
}
