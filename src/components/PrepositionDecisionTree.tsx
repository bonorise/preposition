"use client";

import type { Locale } from "@/data/types";
import { useLocale } from "@/components/LocaleProvider";

type PrepositionDecisionTreeProps = {
  locale?: Locale;
  className?: string;
};

export default function PrepositionDecisionTree({
  locale,
  className = "",
}: PrepositionDecisionTreeProps) {
  const { locale: contextLocale } = useLocale();
  const activeLocale = locale ?? contextLocale;
  const content =
    activeLocale === "zh-CN"
      ? {
          title: "快速判断问句（决策树）",
          items: [
            { question: "它在容器/边界内部吗？", answer: "是 -> 优先用 in" },
            { question: "它接触某个表面吗？", answer: "是 -> 优先用 on" },
            { question: "这是明确的时间点吗？", answer: "是 -> 优先用 at" },
            {
              question: "这是时间段（月份/年份/早中晚）吗？",
              answer: "是 -> 优先用 in",
            },
            {
              question: "这是向内进入的运动过程吗？",
              answer: "是 -> 优先用 into（不是 in）",
            },
          ],
        }
      : {
          title: "Quick check questions (decision tree)",
          items: [
            {
              question: "Is it inside a container or boundary?",
              answer: "Yes -> usually use in",
            },
            {
              question: "Is it touching a surface?",
              answer: "Yes -> usually use on",
            },
            {
              question: "Is it a specific time point?",
              answer: "Yes -> usually use at",
            },
            {
              question: "Is it a time period (month/year/morning)?",
              answer: "Yes -> usually use in",
            },
            {
              question: "Is there motion into an interior space?",
              answer: "Yes -> usually use into (not in)",
            },
          ],
        };

  return (
    <div
      className={`rounded-[var(--radius-md)] bg-white/80 p-4 ${className}`.trim()}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-muted)]">
        {content.title}
      </p>
      <ul className="mt-3 space-y-2">
        {content.items.map((item) => (
          <li
            key={item.question}
            className="rounded-[var(--radius-sm)] bg-slate-50/80 px-3 py-2 text-sm"
          >
            <p className="text-[color:var(--color-ink)]">{item.question}</p>
            <p className="mt-1 text-[color:var(--color-muted)]">{item.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
