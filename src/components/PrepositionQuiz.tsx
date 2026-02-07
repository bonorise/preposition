"use client";

import { useState } from "react";

import type { Locale, PrepositionEntry } from "@/data/types";
import { getUiText } from "@/data/i18n";
import { useLocale } from "@/components/LocaleProvider";

type PrepositionQuizProps = {
  entry: PrepositionEntry;
  locale?: Locale;
};

export default function PrepositionQuiz({ entry, locale }: PrepositionQuizProps) {
  const { locale: contextLocale } = useLocale();
  const activeLocale = locale ?? contextLocale;
  const ui = getUiText(activeLocale);
  const quiz = entry.quiz?.[activeLocale] ?? entry.quiz?.["zh-CN"] ?? [];
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>(
    {},
  );

  return (
    <section className="space-y-4 pt-8">
      <h2 className="font-display text-2xl tracking-tight text-[color:var(--color-ink)]">
        {ui.detailQuizTitle}
      </h2>
      <div className="rounded-[var(--radius-lg)] border border-[color:var(--color-edge)] bg-white/70 p-6 shadow-[var(--shadow-soft)]">
        {quiz.length ? (
          <div className="space-y-4">
            {quiz.map((question, index) => {
              const selected = selectedAnswers[index];
              const hasSelected = typeof selected === "string";
              const isCorrect = hasSelected && selected === question.answer;
              return (
                <div
                  key={`quiz-${entry.id}-${index}`}
                  className="rounded-[var(--radius-md)] bg-white/80 p-4"
                >
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[color:var(--color-muted)]">
                    {ui.detailQuizPromptLabel} {index + 1}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[color:var(--color-ink)]">
                    {question.prompt}
                  </p>
                  <p className="mt-3 text-xs text-[color:var(--color-muted)]">
                    {ui.detailQuizChooseLabel}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {question.options.map((option) => (
                      <button
                        key={`${entry.id}-${index}-${option}`}
                        type="button"
                        onClick={() =>
                          setSelectedAnswers((prev) => ({
                            ...prev,
                            [index]: option,
                          }))
                        }
                        className={`rounded-full border px-3 py-1.5 text-sm transition ${
                          selected === option
                            ? "border-[#7c3aed] bg-[#7c3aed]/10 text-[#5b21b6]"
                            : "border-[color:var(--color-edge)] bg-white text-[color:var(--color-ink)] hover:border-[#7c3aed]/50"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  {hasSelected ? (
                    <div
                      className={`mt-3 rounded-[var(--radius-sm)] px-3 py-2 text-sm ${
                        isCorrect
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-amber-50 text-amber-700"
                      }`}
                    >
                      <p className="font-semibold">
                        {isCorrect ? ui.detailQuizCorrect : ui.detailQuizIncorrect}
                      </p>
                      {!isCorrect ? (
                        <p className="mt-1">
                          {ui.detailQuizAnswerPrefix} {question.answer}
                        </p>
                      ) : null}
                      <p className="mt-1">
                        {ui.detailQuizExplanationLabel} {question.explanation}
                      </p>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-sm text-[color:var(--color-muted)]">
            {ui.detailQuizPlaceholder}
          </p>
        )}
      </div>
    </section>
  );
}
