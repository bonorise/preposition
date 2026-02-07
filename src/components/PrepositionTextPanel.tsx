"use client";

import { CATEGORY_EXAMPLE_BANK } from "@/data/categoryExamples";
import type {
  LearningCategory,
  Locale,
  PrepositionEntry,
  PrepositionExample,
} from "@/data/types";
import {
  isDynamicPreposition,
  isSpatialPreposition,
  isTemporalPreposition,
} from "@/lib/prepositionCategory";

type PrepositionTextPanelProps = {
  entry: PrepositionEntry;
  locale: Locale;
  examplesTitle: string;
};

export default function PrepositionTextPanel({
  entry,
  locale,
  examplesTitle,
}: PrepositionTextPanelProps) {
  const exampleSectionLabels: Record<Locale, Record<LearningCategory, string>> = {
    "zh-CN": {
      space: "空间介词例句",
      time: "时间介词例句",
      dynamic: "动态介词例句",
    },
    en: {
      space: "Spatial examples",
      time: "Time examples",
      dynamic: "Dynamic examples",
    },
  };
  const resolveCategoryExamples = (category: LearningCategory) => {
    const entryExamples = entry.examplesByCategory?.[category];
    if (entryExamples?.length) {
      return entryExamples;
    }
    const bankExamples = CATEGORY_EXAMPLE_BANK[entry.id]?.[category];
    if (bankExamples?.length) {
      return bankExamples;
    }
    if (category === "space" && isSpatialPreposition(entry)) {
      return entry.examples;
    }
    if (category === "dynamic" && isDynamicPreposition(entry)) {
      return entry.examples;
    }
    if (category === "time" && isTemporalPreposition(entry)) {
      return entry.examples;
    }
    return [] as PrepositionExample[];
  };
  const exampleSections = (
    ["space", "time", "dynamic"] as LearningCategory[]
  )
    .filter((category) => {
      if (category === "space") return isSpatialPreposition(entry);
      if (category === "time") return isTemporalPreposition(entry);
      return isDynamicPreposition(entry);
    })
    .map((category) => ({
      category,
      title: exampleSectionLabels[locale]?.[category] ??
        exampleSectionLabels["zh-CN"][category],
      examples: resolveCategoryExamples(category),
    }))
    .filter((section) => section.examples.length > 0);

  return (
    <div className="space-y-6">
      <div className="rounded-[var(--radius-md)] border border-[color:var(--color-edge)] bg-white/80 p-5 shadow-[var(--shadow-tight)]">
        <p className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
          {examplesTitle}
        </p>
        <div className="mt-4 space-y-4">
          {exampleSections.map((section) => (
            <div
              key={section.category}
              className="space-y-3 rounded-[var(--radius-md)] border border-[color:var(--color-edge)]/70 bg-white/70 p-3"
            >
              <p className="text-[10px] uppercase tracking-[0.24em] text-[color:var(--color-muted)]">
                {section.title}
              </p>
              {section.examples.map((example) => {
                const translation =
                  example.i18n[locale]?.translation ??
                  example.i18n["zh-CN"].translation;
                return (
                  <div key={`${section.category}-${example.en}`} className="space-y-1">
                    <p className="text-sm font-semibold text-[color:var(--color-ink)]">
                      {example.en}
                    </p>
                    <p className="text-sm text-[color:var(--color-muted)]">
                      {translation}
                    </p>
                  </div>
                );
              })}
            </div>
          ))}
          {exampleSections.length === 0 ? (
            <div className="rounded-[var(--radius-md)] border border-dashed border-[color:var(--color-edge)] bg-white/60 p-3 text-sm text-[color:var(--color-muted)]">
              {locale === "zh-CN"
                ? "示例内容整理中，后续补充。"
                : "Example content is being prepared."}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
