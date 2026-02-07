"use client";

import type { Locale, PrepositionEntry } from "@/data/types";
import { useLocale } from "@/components/LocaleProvider";

type PrepositionDecisionTreeProps = {
  entry: PrepositionEntry;
  locale?: Locale;
  className?: string;
};

export default function PrepositionDecisionTree({
  entry,
  locale,
  className = "",
}: PrepositionDecisionTreeProps) {
  const { locale: contextLocale } = useLocale();
  const activeLocale = locale ?? contextLocale;
  const localized = entry.i18n[activeLocale] ?? entry.i18n["zh-CN"];
  const comparison =
    entry.comparison?.i18n[activeLocale] ?? entry.comparison?.i18n["zh-CN"];

  const comparisonTerms = (comparison?.differences ?? [])
    .map((difference) => difference.term)
    .filter((term) => term && term.toLowerCase() !== entry.word.toLowerCase());
  const primaryContrast = comparisonTerms[0];
  const secondaryContrast = comparisonTerms[1];
  const hasContrast = Boolean(primaryContrast);

  const isDynamic = Boolean(entry.scene.animation);
  const looksTemporal = [
    "at",
    "in",
    "on",
    "by",
    "between",
    "from",
    "to",
    "past",
    "within",
    "through",
    "throughout",
    "over",
    "around",
    "ahead of",
    "behind",
    "beyond",
    "under",
  ].includes(entry.word.toLowerCase());

  const title =
    activeLocale === "zh-CN"
      ? "快速判断问句（决策树）"
      : "Quick check questions (decision tree)";

  const questions: Array<{ question: string; answer: string }> = [];

  if (looksTemporal && !isDynamic) {
    const a = primaryContrast ?? "at";
    const b = secondaryContrast ?? "in";
    if (activeLocale === "zh-CN") {
      questions.push({
        question: "这是“具体的一天/日期/星期”吗？",
        answer: `是 -> 常用 ${entry.word}（对比：月份/年份/时段多用 ${b}；精确时刻多用 ${a}）。`,
      });
      questions.push({
        question: "这是“精确时刻”（几点几分）吗？",
        answer: `是 -> 更可能用 ${a}；若不是时刻而是日期/星期，才用 ${entry.word}。`,
      });
      questions.push({
        question: "这是“月份/年份/季节/早中晚”等较长时间段吗？",
        answer: `是 -> 更可能用 ${b}；${entry.word} 更常落在“具体的一天”。`,
      });
      if (hasContrast) {
        questions.push({
          question: "句子是否在强调“截止/不晚于”或“区间两端”这种关系？",
          answer: "是 -> 优先换成对应截止/区间介词；不是 -> 回到日期/时刻/时间段判断。",
        });
      }
    } else {
      questions.push({
        question: "Is it a specific day/date (a particular day) or weekday?",
        answer: `Yes -> often ${entry.word} (compare: months/years/periods often use ${b}; exact clock times often use ${a}).`,
      });
      questions.push({
        question: "Is it an exact clock time (hour/minute)?",
        answer: `Yes -> more likely ${a}; if it's a date/weekday, use ${entry.word}.`,
      });
      questions.push({
        question: "Is it a longer time period (month/year/season/part of day)?",
        answer: `Yes -> more likely ${b}; ${entry.word} is often for a specific day/date.`,
      });
      if (hasContrast) {
        questions.push({
          question: "Is the meaning a deadline ('no later than') or a bounded range?",
          answer:
            "Yes -> switch to a deadline/range preposition; No -> stay with day/time/period checks.",
        });
      }
    }
  } else if (isDynamic) {
    const a = primaryContrast ?? "through";
    const b = secondaryContrast ?? "to";
    if (activeLocale === "zh-CN") {
      questions.push({
        question: "句子里有明显的“运动/路径”吗（走、跑、飞、滚、爬）？",
        answer: `有 -> 优先考虑 ${entry.word}；若只是静态位置，用空间类介词。`,
      });
      questions.push({
        question: "这条运动是在强调“穿过/横穿/沿着/朝向”哪一种路径关系？",
        answer: `如果不是该页的路径关系，优先换成更贴切的 ${a}/${b} 等近义介词。`,
      });
      if (hasContrast) {
        questions.push({
          question: "有没有“到达终点/进入/落到表面”的动作结果？",
          answer:
            "有 -> 终点型介词（into/onto/to）更合适；无 -> 继续按路径本身选词。",
        });
      }
    } else {
      questions.push({
        question: "Is there clear motion or a path (walk/run/fly/roll/climb)?",
        answer: `Yes -> consider ${entry.word}; if it's static position only, use a spatial preposition.`,
      });
      questions.push({
        question: "What is the path relation: through, across, along, toward, into, onto?",
        answer: `If it is not this page's relation, switch to a closer option like ${a} or ${b}.`,
      });
      if (hasContrast) {
        questions.push({
          question: "Is the sentence about reaching an endpoint (enter/land/arrive)?",
          answer:
            "Yes -> an endpoint preposition (into/onto/to) may fit better; No -> choose by the path itself.",
        });
      }
    }
  } else {
    const a = primaryContrast ?? "in";
    const b = secondaryContrast ?? "over";
    if (activeLocale === "zh-CN") {
      questions.push({
        question: "物体是否接触某个表面？",
        answer: `接触表面 -> 多用 on；若本页介词不是 on，则优先按“接触/不接触”选近义介词。`,
      });
      questions.push({
        question: "物体是在容器/边界内部吗？",
        answer: `在内部 -> 更可能用 ${a}；不在内部 -> 继续判断方位/距离/遮挡。`,
      });
      questions.push({
        question: "它只是“在上方不接触”还是“在下方/被遮挡”？",
        answer: `仅上方不接触 -> 倾向 ${b}；下方遮挡 -> 倾向 under/beneath 等。`,
      });
    } else {
      questions.push({
        question: "Is it touching a surface?",
        answer:
          "Touching -> often on; if this page is not on, use the closest surface/contact preposition.",
      });
      questions.push({
        question: "Is it inside a container or boundary?",
        answer: `Inside -> more likely ${a}; if not inside, check position/distance/covering.`,
      });
      questions.push({
        question: "Is it above without contact, or below/covered?",
        answer: `Above without contact -> lean toward ${b}; below/covered -> under/beneath/underneath.`,
      });
    }
  }

  const items = questions.slice(0, 6);

  return (
    <div
      className={`rounded-[var(--radius-md)] bg-white/80 p-4 ${className}`.trim()}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-muted)]">
        {title}
      </p>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
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
