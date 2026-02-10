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
  } else if (word === "upon" && !isDynamic) {
    if (activeLocale === "zh-CN") {
      questions.push({
        question: "你是否需要较正式/书面/故事语气？",
        answer: "是 -> 可用 upon（≈ on）；日常口语一般用 on 更自然。",
      });
      questions.push({
        question: "是否是固定搭配 once upon a time？",
        answer: "是 -> 用 upon。",
      });
      questions.push({
        question: "你要表达“在……时/一……就”（upon + 名词/动名词）吗？",
        answer:
          "是 -> 用 upon arrival / upon arriving；不要说 Upon I arrived（完整从句用 when/after）。",
      });
      questions.push({
        question: "是否是“移动到表面并到达”的动作？",
        answer: "是 -> 用 onto；upon 多用于状态或书面表达。",
      });
    } else {
      questions.push({
        question: "Is it formal or literary writing (not everyday chat)?",
        answer: "Yes -> upon works (≈ on). In daily speech, on is more natural.",
      });
      questions.push({
        question: "Is it the fixed phrase \"once upon a time\"?",
        answer: "Yes -> use upon.",
      });
      questions.push({
        question: "Do you mean \"when/as soon as\" (upon + noun/-ing)?",
        answer:
          "Yes -> upon arrival / upon arriving. Avoid \"Upon I arrived\" (use when/after for a full clause).",
      });
      questions.push({
        question: "Is it movement to a surface (reach an endpoint)?",
        answer: "Yes -> use onto; upon is usually static contact/formal style.",
      });
    }
  } else if (word === "outside" && !isDynamic) {
    if (activeLocale === "zh-CN") {
      questions.push({
        question: "这是位置：不在某个房间/建筑/边界内部，而是在外面吗？",
        answer: "是 -> 用 outside（outside the house / outside the room）。",
      });
      questions.push({
        question: "这是动作：从里面出来/离开（从内到外）吗？",
        answer: "是 -> 用 out of（go out of the room）；outside 主要描述位置。",
      });
      questions.push({
        question: "你要表达“超出范围/不在规定内/不在时间段内”吗？",
        answer: "是 -> 用 outside（outside the scope / outside office hours）。",
      });
      questions.push({
        question: "你要表达“没带/缺少/没有”吗？",
        answer: "是 -> 用 without（without money / without my keys）。",
      });
      questions.push({
        question: "你只是想表达“在附近/旁边”，不强调边界内外吗？",
        answer: "是 -> 用 near/next to/beside；outside 强调“边界之外”。",
      });
    } else {
      questions.push({
        question: "Is it a location (not inside a boundary/building/room)?",
        answer: "Yes -> use outside (outside the house / outside the room).",
      });
      questions.push({
        question: "Is it movement from inside to outside (leaving)?",
        answer: "Yes -> use out of (go out of the room). Outside is mainly location.",
      });
      questions.push({
        question: 'Do you mean "beyond a range" (scope/rules/hours)?',
        answer: "Yes -> use outside (outside the scope, outside office hours).",
      });
      questions.push({
        question: 'Do you mean "lacking / not having"?',
        answer: "Yes -> use without (without money, without my keys).",
      });
      questions.push({
        question: "Do you only mean near a place (not boundary-based)?",
        answer: "Yes -> consider near / next to / beside.",
      });
    }
  } else if (word === "close to" && !isDynamic) {
    if (activeLocale === "zh-CN") {
      questions.push({
        question: "你要强调的是“非常近/很靠近”的距离感吗？",
        answer: "是 -> 用 close to。",
      });
      questions.push({
        question: "场景是否必须“紧挨着/并排相邻”，几乎无间隔？",
        answer: "是 -> next to / beside 更清楚。",
      });
      questions.push({
        question: "你只是想表达“离得不远”，不需要很强的“很近”强调吗？",
        answer: "是 -> near 更中性。",
      });
      questions.push({
        question: "这是数值/时间的近似（几乎、接近）吗？",
        answer: "是 -> close to 也常用于近似（close to 100 / close to midnight）。",
      });
    } else {
      questions.push({
        question: "Do you want to emphasize very short distance?",
        answer: "Yes -> close to is a strong choice.",
      });
      questions.push({
        question: "Is strict side-by-side adjacency required?",
        answer: "Yes -> next to / beside is clearer.",
      });
      questions.push({
        question: "Do you only mean general closeness without strong emphasis?",
        answer: "Yes -> near is more neutral.",
      });
      questions.push({
        question: "Is it an approximation for a number or time?",
        answer: "Yes -> close to can mean almost (close to 100, close to midnight).",
      });
    }
  } else if (word === "behind" && !isDynamic) {
    if (activeLocale === "zh-CN") {
      questions.push({
        question: "这是空间位置：在参照物的后方（看不见/被遮挡的那一侧）吗？",
        answer: "是 -> 用 behind（与 in front of 相对）。",
      });
      questions.push({
        question: "这是进度语境：落后于计划或他人吗？",
        answer: "是 -> 用 behind（behind schedule / behind in math / behind on rent）。",
      });
      questions.push({
        question: "你只是表达时间顺序“在……之后/更晚”吗？",
        answer: "是 -> 用 after，不用 behind。",
      });
      questions.push({
        question: "你要表达的是上下关系（在下面）而不是前后吗？",
        answer: "是 -> 用 under/below；behind 只描述前后方向。",
      });
    } else {
      questions.push({
        question: "Is it a spatial back position (opposite of in front of)?",
        answer: "Yes -> use behind.",
      });
      questions.push({
        question: "Is it progress language (late compared to a plan)?",
        answer: "Yes -> use behind (behind schedule, behind in math, behind on rent).",
      });
      questions.push({
        question: "Do you only mean time order (later than a time point)?",
        answer: "Yes -> use after, not behind.",
      });
      questions.push({
        question: "Is it vertical (under/below) rather than front-back?",
        answer: "Yes -> use under/below; behind is front-back direction.",
      });
    }
  } else if (word === "after" && !isDynamic) {
    if (activeLocale === "zh-CN") {
      questions.push({
        question: "你要表达的是时间顺序：在某个时间点/事件之后吗？",
        answer: "是 -> 用 after（after dinner / after 8 p.m. / after I finish）。",
      });
      questions.push({
        question: "你表达的是“从现在起多久之后”（两小时后/三天后）吗？",
        answer: "是 -> 多用 in（in two hours），不是 after（除非句子里有明确参照事件）。",
      });
      questions.push({
        question: "after 后面没有宾语，只想表达“之后/然后”吗？",
        answer: "是 -> 用 afterwards / later。",
      });
      questions.push({
        question: "你要表达的是“从某个时间点持续到现在”吗？",
        answer: "是 -> 用 since（since 2020 / since Monday），不是 after。",
      });
    } else {
      questions.push({
        question: "Is it time order: later than a time point or event?",
        answer: "Yes -> use after (after dinner / after 8 p.m. / after I finish).",
      });
      questions.push({
        question: 'Is it a duration counted from now ("two hours from now")?',
        answer:
          'Yes -> prefer in ("in two hours"), not after unless a clear reference event exists.',
      });
      questions.push({
        question: "Is there no object after after and you only mean then?",
        answer: "Yes -> use afterwards / later.",
      });
      questions.push({
        question: "Is it a continuing state from a starting point up to now?",
        answer: "Yes -> use since (since 2020 / since Monday), not after.",
      });
    }
  } else if (word === "near" && !isDynamic) {
    if (activeLocale === "zh-CN") {
      questions.push({
        question: "你只是想表达“离得不远/在附近”，不要求紧挨吗？",
        answer: "是 -> 用 near。",
      });
      questions.push({
        question: "场景是否必须“紧挨着/并排/隔壁”，几乎无间隔？",
        answer: "是 -> 更可能用 next to / beside。",
      });
      questions.push({
        question: "你要强调“非常近”，让人感觉几乎就在旁边吗？",
        answer: "是 -> close to / right next to 更有力度。",
      });
      questions.push({
        question: "关系其实是“在表面/在内部/在上方或下方”吗？",
        answer: "是 -> 改用 on / in / above(under)；near 只说明距离。",
      });
    } else {
      questions.push({
        question: "Do you only mean close by in distance (not strict adjacency)?",
        answer: "Yes -> use near.",
      });
      questions.push({
        question: "Is immediate side-by-side adjacency required?",
        answer: "Yes -> next to / beside is often better.",
      });
      questions.push({
        question: "Do you want to emphasize very short distance?",
        answer: "Yes -> close to / right next to is stronger.",
      });
      questions.push({
        question: "Is the real relation on/in/above-below rather than distance?",
        answer: "Switch to on/in/above(under); near only describes distance.",
      });
    }
  } else if (word === "next to" && !isDynamic) {
    if (activeLocale === "zh-CN") {
      questions.push({
        question: "两者是否“紧挨着、几乎无间隔”地并排？",
        answer: "是 -> 优先用 next to。",
      });
      questions.push({
        question: "你只是表达“离得近”，但不强调紧邻吗？",
        answer: "是 -> 优先用 near。",
      });
      questions.push({
        question: "句子关系其实是“在表面/在内部/在上方或下方”吗？",
        answer: "是 -> 改用 on / in / above(under)；next to 只表示侧向邻接。",
      });
      questions.push({
        question: "你要的是更书面的旁侧表达吗？",
        answer: "是 -> beside 也可；日常对话和教学优先 next to。",
      });
    } else {
      questions.push({
        question: "Are the two things directly adjacent with almost no gap?",
        answer: "Yes -> next to is the best default.",
      });
      questions.push({
        question: "Do you only mean general closeness?",
        answer: "Yes -> use near.",
      });
      questions.push({
        question: "Is the relation actually on/in/above-below rather than side adjacency?",
        answer: "Switch to on/in/above(under); next to is only for side relation.",
      });
      questions.push({
        question: "Do you want a slightly more formal side word?",
        answer: "Use beside. For daily beginner usage, next to is often clearer.",
      });
    }
  } else if (word === "beside" && !isDynamic) {
    if (activeLocale === "zh-CN") {
      questions.push({
        question: "你要表达的是“同一侧并排且距离很近”吗？",
        answer: "是 -> 优先用 beside。",
      });
      questions.push({
        question: "你只是想说“在附近”，并不强调并排同侧吗？",
        answer: "是 -> 更可能用 near。",
      });
      questions.push({
        question: "你要强调“紧贴、几乎无间隔”的并排吗？",
        answer: "是 -> next to 往往更直接；一般并排可继续用 beside。",
      });
      questions.push({
        question: "目标其实在表面上、内部或上下方吗？",
        answer: "是 -> 分别改用 on / in / under(above)；beside 只管“侧边并排”。",
      });
    } else {
      questions.push({
        question: "Do you mean side-by-side and close on one side?",
        answer: "Yes -> beside is a strong choice.",
      });
      questions.push({
        question: "Do you only mean general proximity without side orientation?",
        answer: "Yes -> near is usually better.",
      });
      questions.push({
        question: "Do you want to stress the tightest adjacency?",
        answer: "Yes -> next to is often the clearest option.",
      });
      questions.push({
        question: "Is the real relation surface/inside/above-below instead of side?",
        answer: "Use on/in/under(above) accordingly; beside is for side relation only.",
      });
    }
  } else if (word === "on top of" && !isDynamic) {
    if (activeLocale === "zh-CN") {
      questions.push({
        question: "这个物体是否接触到下方表面？",
        answer: "接触 -> 可用 on 或 on top of；不接触 -> 更可能是 above/over。",
      });
      questions.push({
        question: "你要强调“就在最顶部”这个位置吗？",
        answer: "是 -> 用 on top of；否 -> 一般用 on 更自然。",
      });
      questions.push({
        question: "句子是在表达“移动到顶部”的动作吗？",
        answer: "是 -> 用 onto；不是动作而是位置 -> 用 on top of。",
      });
      questions.push({
        question: "这是“从上方跨过”而不是停在顶部吗？",
        answer: "是 -> 用 over；on top of 表示停留在顶面。",
      });
    } else {
      questions.push({
        question: "Is there contact with the lower surface?",
        answer: "Contact -> on/on top of are possible; no contact -> think above/over.",
      });
      questions.push({
        question: "Do you need explicit topmost-position emphasis?",
        answer: "Yes -> use on top of. No -> on is often the natural default.",
      });
      questions.push({
        question: "Is this movement to the top or a final static position?",
        answer: "Movement to top -> onto. Final static top position -> on top of.",
      });
      questions.push({
        question: "Is it crossing above instead of staying on top?",
        answer: "Yes -> use over. On top of means staying at the top surface.",
      });
    }
  } else if (word === "above" && !isDynamic) {
    if (activeLocale === "zh-CN") {
      questions.push({
        question: "这个物体是否接触到下方表面？",
        answer: "是 -> 多用 on；否 -> 继续判断 above/over。",
      });
      questions.push({
        question: "你是在描述静态高位，还是“从上方跨过”的动作？",
        answer: "静态高位 -> 用 above；强调跨越动作 -> 更可能用 over。",
      });
      questions.push({
        question: "这是在比较数值或标准高低吗？",
        answer: "是 -> 用 above（above average / above zero / above 90%）。",
      });
      questions.push({
        question: "方向是否相反（低于某标准）？",
        answer: "是 -> 改用 below；above 只表示高于。",
      });
    } else {
      questions.push({
        question: "Is there surface contact with the lower object?",
        answer: "Yes -> use on. No contact -> continue with above/over checks.",
      });
      questions.push({
        question: "Is it static higher position or crossing movement?",
        answer: "Static higher position -> use above. Crossing movement -> over is often better.",
      });
      questions.push({
        question: "Is it about level/number comparison?",
        answer: "Yes -> use above (above average, above zero, above 90%).",
      });
      questions.push({
        question: "Is the intended meaning lower than a reference?",
        answer: "Yes -> use below, not above.",
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
    if (word === "over" && activeLocale === "zh-CN") {
      questions.push({
        question: "物体是否与表面接触？",
        answer: "接触 -> 常用 on；不接触且在上方 -> 再考虑 over/above。",
      });
      questions.push({
        question: "是否有“从上方跨过去”的路径动作？",
        answer: "有 -> 用 over；若只是静态“更高位置”且无跨越，常用 above。",
      });
      questions.push({
        question: "路径是“从一侧到另一侧”还是“从内部穿过”？",
        answer: "侧向跨过平面 -> 常是 across；进入内部通道 -> 用 through。",
      });
      questions.push({
        question: "这是在表达“在一段时间里”吗？",
        answer: "是 -> 可用 over（over the weekend / over time）。",
      });
      questions.push({
        question: "这是在表达“超过某个数值”吗？",
        answer: "是 -> 用 over（over $50 / over 100 people）。",
      });
    } else if (word === "over") {
      questions.push({
        question: "Is there direct contact with a surface?",
        answer: "If yes, use on. If no contact and above relation, then check over/above.",
      });
      questions.push({
        question: "Is there a crossing path above something?",
        answer: "Yes -> use over. If it is only static higher position, use above.",
      });
      questions.push({
        question: "Is the movement side-to-side or inside an enclosed path?",
        answer: "Side-to-side across an area -> often across. Inside a channel -> through.",
      });
      questions.push({
        question: "Does it mean during a period of time?",
        answer: "Yes -> over works (over the weekend, over time).",
      });
      questions.push({
        question: "Does it mean more than a number or limit?",
        answer: "Yes -> use over (over $50, over 100 people).",
      });
    } else if (activeLocale === "zh-CN") {
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
