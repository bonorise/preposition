import type { PrepositionEntry } from "@/data/types";

export type HomeCategory = "space" | "time" | "dynamic";

const TEMPORAL_IDS = new Set([
  "at",
  "in",
  "on",
  "by",
  "between",
  "through",
  "over",
  "around",
  "from",
  "to",
  "past",
  "within",
  "throughout",
]);

export function isSpatialPreposition(entry: PrepositionEntry) {
  return entry.sense === "space" || entry.tags.includes("space");
}

export function isDynamicPreposition(entry: PrepositionEntry) {
  return Boolean(entry.scene.animation);
}

export function isTemporalPreposition(entry: PrepositionEntry) {
  return TEMPORAL_IDS.has(entry.id);
}

export function getHomeCategory(entry: PrepositionEntry): HomeCategory {
  if (isDynamicPreposition(entry)) {
    return "dynamic";
  }
  if (isTemporalPreposition(entry)) {
    return "time";
  }
  return "space";
}

export function partitionByHomeCategory(entries: PrepositionEntry[]) {
  const groups: Record<HomeCategory, PrepositionEntry[]> = {
    space: [],
    time: [],
    dynamic: [],
  };

  entries.forEach((entry) => {
    if (isSpatialPreposition(entry)) {
      groups.space.push(entry);
    }
    if (isTemporalPreposition(entry)) {
      groups.time.push(entry);
    }
    if (isDynamicPreposition(entry)) {
      groups.dynamic.push(entry);
    }
  });

  return groups;
}
