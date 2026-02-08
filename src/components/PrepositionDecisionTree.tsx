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
  const word = entry.word.toLowerCase();

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
  ].includes(word);
  const isLowerGroup = ["under", "below", "beneath", "underneath"].includes(word);

  const title =
    activeLocale === "zh-CN"
      ? "快速判断问句（决策树）"
      : "Quick check questions (decision tree)";

  const questions: Array<{ question: string; answer: string }> = [];

  if (isLowerGroup && !isDynamic) {
    if (word === "under" && activeLocale === "zh-CN") {
      questions.push({
        question: "这是“在某物正下方”，且有覆盖/压在上方的画面吗？",
        answer: "是 -> 先用 under（空间位置）。",
      });
      questions.push({
        question: "这是“少于某上限”（时间/金额/人数/年龄）吗？",
        answer: "是 -> 用 under（如 under an hour / under $50 / under 18）。",
      });
      questions.push({
        question: "你只是表达“更低的层级或数值”，不强调覆盖关系吗？",
        answer: "是 -> below 通常更中性更合适。",
      });
      questions.push({
        question: "你在表达“在截止时间内完成”吗？",
        answer: "是 -> 优先 within/by，而不是 under。",
      });
    } else if (word === "under") {
      questions.push({
        question: "Is it directly beneath something, often with cover from above?",
        answer: "Yes -> choose under for physical position.",
      });
      questions.push({
        question: "Does it mean less than a limit (time/price/age/number)?",
        answer: "Yes -> use under (under an hour, under $50, under 18).",
      });
      questions.push({
        question: "Is it only a neutral lower level without cover meaning?",
        answer: "Yes -> below is often the better neutral choice.",
      });
      questions.push({
        question: "Do you mean completion before a deadline window?",
        answer: "Yes -> prefer within/by, not under.",
      });
    } else if (word === "below" && activeLocale === "zh-CN") {
      questions.push({
        question: "这是在比较“数值/温度/等级/标准线”吗？",
        answer: "是 -> 用 below（如 below zero / below average）。",
      });
      questions.push({
        question: "这是中性地表示“位置更低”，不强调贴近底面吗？",
        answer: "是 -> 用 below。",
      });
      questions.push({
        question: "这是具体物体在某物正下方、贴近底面吗？",
        answer: "是 -> 更可能用 under 或 underneath。",
      });
      questions.push({
        question: "你需要更正式或文学化的语气吗？",
        answer: "是 -> 可考虑 beneath；日常表达仍优先 below。",
      });
    } else if (word === "below") {
      questions.push({
        question: "Are you comparing a level, number, or benchmark?",
        answer: "Yes -> use below (below zero, below average).",
      });
      questions.push({
        question: "Is it a neutral lower position without underside contact focus?",
        answer: "Yes -> below fits well.",
      });
      questions.push({
        question: "Is it a concrete object directly under another object?",
        answer: "Yes -> under or underneath may sound more natural.",
      });
      questions.push({
        question: "Do you want a formal or literary tone?",
        answer: "Yes -> consider beneath.",
      });
    } else if (word === "beneath" && activeLocale === "zh-CN") {
      questions.push({
        question: "你是否需要更正式、书面或文学化的语气？",
        answer: "是 -> 用 beneath。",
      });
      questions.push({
        question: "你在表达“有失身份/不屑于”这类抽象含义吗？",
        answer: "是 -> 用 beneath（beneath one's dignity）。",
      });
      questions.push({
        question: "这是中性数值或层级比较吗？",
        answer: "是 -> 更常用 below。",
      });
      questions.push({
        question: "这是日常口语里的具体空间关系吗？",
        answer: "是 -> under / underneath 往往更自然。",
      });
    } else if (word === "beneath") {
      questions.push({
        question: "Do you need a formal or literary tone?",
        answer: "Yes -> choose beneath.",
      });
      questions.push({
        question: "Is it the abstract pattern 'beneath one's dignity'?",
        answer: "Yes -> use beneath.",
      });
      questions.push({
        question: "Is it a neutral number or level comparison?",
        answer: "Yes -> below is usually better.",
      });
      questions.push({
        question: "Is it everyday concrete spatial talk?",
        answer: "Yes -> under or underneath is often more natural.",
      });
    } else if (activeLocale === "zh-CN") {
      questions.push({
        question: "你要表达“就在底面下方、贴近下面那一面”吗？",
        answer: "是 -> 用 underneath。",
      });
      questions.push({
        question: "这是日常口语、需要更直观画面感吗？",
        answer: "是 -> underneath 常更自然。",
      });
      questions.push({
        question: "你只是表达中性“更低位置”吗？",
        answer: "是 -> below 更合适。",
      });
      questions.push({
        question: "需要更正式语体吗？",
        answer: "是 -> 可考虑 beneath；一般叙述可用 under。",
      });
    } else {
      questions.push({
        question: "Is it directly under the underside, with close physical relation?",
        answer: "Yes -> use underneath.",
      });
      questions.push({
        question: "Do you want an everyday vivid spoken style?",
        answer: "Yes -> underneath is a strong choice.",
      });
      questions.push({
        question: "Do you only need a neutral lower-level relation?",
        answer: "Yes -> below is usually better.",
      });
      questions.push({
        question: "Do you need formal style?",
        answer: "Yes -> consider beneath; for neutral usage, under is fine.",
      });
    }
  } else if (looksTemporal && !isDynamic) {
    const isUnder = word === "under";
    const a = primaryContrast ?? "at";
    const b = secondaryContrast ?? "in";
    if (isUnder && activeLocale === "zh-CN") {
      questions.push({
        question: "这是“在某物正下方/被上方覆盖”的空间关系吗？",
        answer: "是 -> 用 under；它比 below 更有“在下面且贴近/被覆盖”的画面感。",
      });
      questions.push({
        question: "这是“少于某个上限”（时间/数量/价格）吗？",
        answer: "是 -> 用 under（如 under an hour, under $50, under five years old）。",
      });
      questions.push({
        question: "你是在表达“在截止时间内完成”吗？",
        answer: "是 -> 优先用 within/by；under 不是“截止前完成”的首选表达。",
      });
      questions.push({
        question: "你只是想说“更低的数值/高度”，不强调覆盖关系吗？",
        answer: "是 -> below 往往更中性；需要具体“在下面”场景时再用 under。",
      });
    } else if (isUnder) {
      questions.push({
        question: "Is this a physical relation directly beneath something?",
        answer:
          "Yes -> use under. It is more concrete than below and often implies cover from above.",
      });
      questions.push({
        question: "Do you mean less than a threshold (time/number/price)?",
        answer:
          "Yes -> use under (under an hour, under $50, under five years old).",
      });
      questions.push({
        question: "Do you mean completion before a deadline window?",
        answer:
          "Yes -> prefer within/by. Under is usually for amount less than a limit, not deadline framing.",
      });
      questions.push({
        question: "Do you only need a neutral lower-level relation?",
        answer:
          "If yes, below may be more neutral; use under when you want concrete under-position meaning.",
      });
    } else if (activeLocale === "zh-CN") {
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
