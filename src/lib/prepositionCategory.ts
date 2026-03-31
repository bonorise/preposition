import type { LearningCategory, PrepositionEntry } from "@/data/types";

export type HomeCategory = LearningCategory;

const HOME_CATEGORY_OVERRIDES: Partial<Record<string, HomeCategory>> = {
  by: "space",
  "away-from": "space",
};

const TEMPORAL_IDS = new Set([
  "at",
  "in",
  "on",
  "upon",
  "after",
  "by",
  "between",
  "through",
  "over",
  "around",
  "about",
  "from",
  "to",
  "past",
  "within",
  "throughout",
  "under",
  "ahead-of",
  "behind",
  "since",
  "until",
  "during",
]);

const ABSTRACT_IDS = new Set([
  "by",
  "about",
  "according-to",
  "apart-from",
  "as",
  "due-to",
  "including",
  "instead-of",
  "since",
  "via",
]);

export function isSpatialPreposition(entry: PrepositionEntry) {
  return entry.tags.includes("space");
}

export function isDynamicPreposition(entry: PrepositionEntry) {
  return Boolean(entry.scene.animation);
}

export function isTemporalPreposition(entry: PrepositionEntry) {
  return TEMPORAL_IDS.has(entry.id);
}

export function isAbstractPreposition(entry: PrepositionEntry) {
  return ABSTRACT_IDS.has(entry.id);
}

export function getEntryCategories(entry: PrepositionEntry): LearningCategory[] {
  const categories: LearningCategory[] = [];
  if (isSpatialPreposition(entry)) categories.push("space");
  if (isTemporalPreposition(entry)) categories.push("time");
  if (isDynamicPreposition(entry)) categories.push("dynamic");
  if (isAbstractPreposition(entry)) categories.push("abstract");
  return categories;
}

export function getHomeCategory(entry: PrepositionEntry): HomeCategory {
  const override = HOME_CATEGORY_OVERRIDES[entry.id];
  if (override) {
    return override;
  }
  if (isDynamicPreposition(entry)) {
    return "dynamic";
  }
  if (isTemporalPreposition(entry)) {
    return "time";
  }
  if (isAbstractPreposition(entry)) {
    return "abstract";
  }
  return "space";
}

export function partitionByHomeCategory(entries: PrepositionEntry[]) {
  const groups: Record<HomeCategory, PrepositionEntry[]> = {
    space: [],
    time: [],
    dynamic: [],
    abstract: [],
  };

  entries.forEach((entry) => {
    groups[getHomeCategory(entry)].push(entry);
  });

  return groups;
}
