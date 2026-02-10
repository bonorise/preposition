"use client";

import type { LearningCategory } from "@/data/types";

const STORAGE_KEY = "preposition:last-scene-category";
const MAX_AGE_MS = 1000 * 60 * 10;

type Payload = {
  entryId: string;
  category: LearningCategory;
  timestamp: number;
};

export function persistSourceCategory(entryId: string, category: LearningCategory) {
  if (typeof window === "undefined") return;
  const payload: Payload = {
    entryId,
    category,
    timestamp: Date.now(),
  };
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // Ignore storage errors (private mode, quota, etc.)
  }
}

export function consumeSourceCategory(
  entryId: string,
  categories: LearningCategory[],
): LearningCategory | null {
  if (typeof window === "undefined") return null;
  let raw: string | null = null;
  try {
    raw = window.sessionStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }

  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw) as Partial<Payload>;
    if (
      parsed.entryId !== entryId ||
      typeof parsed.category !== "string" ||
      !categories.includes(parsed.category as LearningCategory)
    ) {
      return null;
    }
    if (
      typeof parsed.timestamp === "number" &&
      Date.now() - parsed.timestamp > MAX_AGE_MS
    ) {
      return null;
    }
    return parsed.category as LearningCategory;
  } catch {
    return null;
  }
}

export function clearSourceCategory() {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.removeItem(STORAGE_KEY);
  } catch {
    // Ignore cleanup errors.
  }
}
