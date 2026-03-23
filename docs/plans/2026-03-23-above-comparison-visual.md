# Above Comparison Visual Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 在不改变详情页整体结构的前提下，为 `above` 页新增可复用的 `Key differences` 对比图能力，并同步完成 `above` 的中英文教学内容与单页 SEO/GEO 精修。

**Architecture:** 实现保持数据驱动。先扩展词条数据类型与装配层，让单词页可声明 `comparisonVisual`；再新增一个只负责 SVG 规则图的展示组件，并在现有 `PrepositionComparison` 模块内部按条件渲染；最后重写 `above` 的双语内容和 metadata，配合 QA 与构建回归确认不影响其他词条。

**Tech Stack:** Next.js 16, TypeScript, React 19, `react-dom/server`, `tsx`, ESLint, 自定义内容 QA 脚本

---

### Task 1: 扩展词条数据结构并为 `above` 接入对比图配置

**Files:**
- Create: `scripts/check-above-comparison-visual.ts`
- Modify: `src/data/types.ts`
- Modify: `src/data/prepositions/shared/types.ts`
- Modify: `src/data/prepositions/shared/assemble.ts`
- Modify: `src/data/prepositions/above/content/en.ts`
- Modify: `src/data/prepositions/above/content/zh-CN.ts`
- Verify: `src/data/prepositions/above/index.ts`

**Step 1: Write the failing test**

```ts
import assert from "node:assert/strict";

import { getPrepositionById } from "../src/data/prepositions";

const entry = getPrepositionById("above");
assert.ok(entry, "above entry should exist");
assert.ok(entry?.comparisonVisual, "above should expose comparisonVisual");
assert.equal(entry?.comparisonVisual?.type, "vertical-range");
assert.equal(entry?.comparisonVisual?.items.length, 4);

const terms = entry?.comparisonVisual?.items.map((item) => item.term);
assert.deepEqual(terms, ["on", "over", "above", "below"]);

assert.equal(
  entry?.comparisonVisual?.i18n["zh-CN"].title,
  "一张图看懂 on / over / above / below",
);
assert.match(
  entry?.comparisonVisual?.items.find((item) => item.term === "above")?.note["en"] ?? "",
  /higher than, not touching/i,
);
```

**Step 2: Run test to verify it fails**

Run: `npx tsx scripts/check-above-comparison-visual.ts`
Expected: FAIL because `scripts/check-above-comparison-visual.ts` does not exist yet, and after creating it the `above` entry still has no `comparisonVisual`.

**Step 3: Write minimal implementation**

```ts
// src/data/types.ts
export type PrepositionComparisonVisualItem = {
  term: string;
  xRange: [number, number];
  yRange: [number, number];
  marker: "contact" | "hover" | "crossing" | "below";
  note: Record<Locale, string>;
};

export type PrepositionComparisonVisual = {
  type: "vertical-range";
  i18n: Record<Locale, { title: string; caption: string }>;
  items: PrepositionComparisonVisualItem[];
};

// src/data/prepositions/shared/types.ts
export type LocalizedComparisonVisual = NonNullable<
  NonNullable<PrepositionEntry["comparisonVisual"]>
>;

export type LocalizedPrepositionContent = {
  // ...
  comparisonVisual?: LocalizedComparisonVisual;
};

// src/data/prepositions/shared/assemble.ts
function buildComparisonVisual(module: PrepositionModule) {
  return getPrimaryContent(module)?.comparisonVisual;
}

// in assemblePreposition(...)
comparisonVisual: buildComparisonVisual(module),

// src/data/prepositions/above/content/en.ts
comparisonVisual: {
  type: "vertical-range",
  i18n: {
    en: {
      title: "See on / over / above / below in one picture",
      caption: "The dashed rectangle is the reference object. Compare contact, crossing, and higher/lower range.",
    },
    "zh-CN": {
      title: "一张图看懂 on / over / above / below",
      caption: "虚线矩形代表参照物。对比是否接触、是否跨越，以及高于/低于的适用范围。",
    },
  },
  items: [
    {
      term: "on",
      xRange: [0.08, 0.22],
      yRange: [0.5, 0.5],
      marker: "contact",
      note: {
        en: "touching the surface",
        "zh-CN": "接触表面",
      },
    },
    {
      term: "over",
      xRange: [0.3, 0.48],
      yRange: [0.28, 0.58],
      marker: "crossing",
      note: {
        en: "above and crossing",
        "zh-CN": "在上方并跨过",
      },
    },
    {
      term: "above",
      xRange: [0.56, 0.72],
      yRange: [0.16, 0.32],
      marker: "hover",
      note: {
        en: "higher than, not touching",
        "zh-CN": "高于，不接触",
      },
    },
    {
      term: "below",
      xRange: [0.8, 0.94],
      yRange: [0.7, 0.86],
      marker: "below",
      note: {
        en: "lower than",
        "zh-CN": "低于",
      },
    },
  ],
},
```

实现要求：

- `comparisonVisual` 先挂在词条内容层，再由装配层输出到 `PrepositionEntry`
- 只支持首版 `vertical-range` 类型，不预先抽象更多图表协议
- `above` 的图必须同时携带中英标题、图注和每项短注
- 其他词条不需要同时接入，缺省时页面应继续保持原样

**Step 4: Run test to verify it passes**

Run: `npx tsx scripts/check-above-comparison-visual.ts`
Expected: PASS with no output

**Step 5: Commit**

```bash
git add scripts/check-above-comparison-visual.ts src/data/types.ts src/data/prepositions/shared/types.ts src/data/prepositions/shared/assemble.ts src/data/prepositions/above/content/en.ts src/data/prepositions/above/content/zh-CN.ts
git commit -m "feat: add above comparison visual data"
```

### Task 2: 新增可复用 SVG 组件并接入 `Key differences`

**Files:**
- Create: `scripts/check-comparison-visual-render.tsx`
- Create: `src/components/PrepositionComparisonVisual.tsx`
- Modify: `src/components/PrepositionComparison.tsx`
- Verify: `src/components/PrepositionDetail.tsx`

**Step 1: Write the failing test**

```tsx
import assert from "node:assert/strict";
import { renderToStaticMarkup } from "react-dom/server";

import PrepositionComparisonVisual from "../src/components/PrepositionComparisonVisual";
import { getPrepositionById } from "../src/data/prepositions";

const entry = getPrepositionById("above");
assert.ok(entry?.comparisonVisual, "above comparison visual should exist");

const html = renderToStaticMarkup(
  <PrepositionComparisonVisual
    visual={entry!.comparisonVisual!}
    locale="en"
  />,
);

assert.match(html, /<svg/i);
assert.match(html, /See on \/ over \/ above \/ below in one picture/);
assert.match(html, /touching the surface/);
assert.match(html, /higher than, not touching/);
```

**Step 2: Run test to verify it fails**

Run: `npx tsx scripts/check-comparison-visual-render.tsx`
Expected: FAIL because `src/components/PrepositionComparisonVisual.tsx` does not exist yet.

**Step 3: Write minimal implementation**

```tsx
// src/components/PrepositionComparisonVisual.tsx
type Props = {
  visual: PrepositionComparisonVisual;
  locale: Locale;
};

export default function PrepositionComparisonVisual({ visual, locale }: Props) {
  const localized = visual.i18n[locale] ?? visual.i18n["zh-CN"];

  return (
    <figure className="rounded-[var(--radius-md)] border border-[color:var(--color-edge)] bg-slate-50/80 p-4">
      <figcaption className="space-y-1">
        <p className="text-sm font-semibold text-[color:var(--color-ink)]">
          {localized.title}
        </p>
        <p className="text-xs text-[color:var(--color-muted)]">
          {localized.caption}
        </p>
      </figcaption>
      <svg viewBox="0 0 720 280" className="mt-4 h-auto w-full">
        <rect
          x="250"
          y="92"
          width="220"
          height="96"
          fill="none"
          stroke="currentColor"
          strokeDasharray="8 8"
          opacity="0.35"
          rx="16"
        />
        {/* map visual.items to contact / crossing / hover / below shapes */}
      </svg>
      <div className="mt-4 grid gap-3 md:grid-cols-4">
        {visual.items.map((item) => (
          <div key={item.term} className="rounded-[var(--radius-sm)] bg-white/80 p-3">
            <p className="text-sm font-semibold text-[color:var(--color-ink)]">
              {item.term}
            </p>
            <p className="mt-1 text-xs text-[color:var(--color-muted)]">
              {item.note[locale] ?? item.note["zh-CN"]}
            </p>
          </div>
        ))}
      </div>
    </figure>
  );
}

// src/components/PrepositionComparison.tsx
{entry.comparisonVisual ? (
  <PrepositionComparisonVisual
    visual={entry.comparisonVisual}
    locale={activeLocale}
  />
) : null}
```

实现要求：

- 图片插入位置必须在 `Key differences` 标题后的首屏区域，且位于 summary 之前
- 不改详情页整体顺序，也不挪动 `PrepositionDecisionTree`
- 组件本身不依赖 hover 才能读懂，移动端必须完整可读
- 缺少 `comparisonVisual` 的词条页必须静默跳过，不出现占位空白

**Step 4: Run test to verify it passes**

Run: `npx tsx scripts/check-comparison-visual-render.tsx`
Expected: PASS with no output

再跑一次类型/构建回归：

Run: `npm run build`
Expected: PASS with successful Next.js production build

**Step 5: Commit**

```bash
git add scripts/check-comparison-visual-render.tsx src/components/PrepositionComparisonVisual.tsx src/components/PrepositionComparison.tsx
git commit -m "feat: render reusable preposition comparison visual"
```

### Task 3: 重写 `above` 的双语教学内容与单页 metadata

**Files:**
- Create: `scripts/check-above-seo.ts`
- Modify: `src/data/prepositions/above/content/en.ts`
- Modify: `src/data/prepositions/above/content/zh-CN.ts`
- Modify: `src/app/[locale]/p/[id]/page.tsx`
- Verify: `src/lib/prepositionFaq.ts`
- Verify: `scripts/qa-content.ts`

**Step 1: Write the failing test**

```ts
import assert from "node:assert/strict";

import { getPrepositionById } from "../src/data/prepositions";
import { generateMetadata } from "../src/app/[locale]/p/[id]/page";

const entry = getPrepositionById("above");
assert.ok(entry, "above entry should exist");

assert.equal(
  entry?.i18n["zh-CN"].meaning,
  "在……上方（不接触）；高于、超过（数值/水平/能力范围）",
);
assert.match(
  entry?.i18n.en.meaning ?? "",
  /higher than something and not touching it/i,
);
assert.match(
  entry?.comparison?.i18n.en.summary ?? "",
  /If there is contact, use on/i,
);

const enMeta = await generateMetadata({
  params: Promise.resolve({ locale: "en", id: "above" }),
});

assert.match(String(enMeta.title), /above/i);
assert.match(String(enMeta.title), /on/i);
assert.match(String(enMeta.title), /over/i);
assert.match(String(enMeta.description), /higher than/i);
assert.match(String(enMeta.description), /above average/i);
```

**Step 2: Run test to verify it fails**

Run: `npx tsx scripts/check-above-seo.ts`
Expected: FAIL because `above` still uses the old meaning, summary, and generic metadata.

**Step 3: Write minimal implementation**

```ts
// src/data/prepositions/above/content/zh-CN.ts
meaning: "在……上方（不接触）；高于、超过（数值/水平/能力范围）",
tips: [
  "先记一句话：above = higher than, not touching。",
  "on 表示“在上面并接触表面”；above 表示“在上方但不接触”。",
  "当后面是 average、zero、your level 这类标准或范围时，above 表示“高于、超过”。",
],
comparison: {
  summary:
    "above 的核心不是“正上方”，而是“高于某物”。它通常不接触，也不强调跨越；如果有接触，多用 on；如果强调从上方跨过去，多用 over。",
  differences: [
    {
      term: "on",
      description: "on 强调接触表面；above 强调在更高位置且不接触。",
      examples: [
        { term: "on", sentence: "The book is on the table.", translation: "书在桌子上（接触）。" },
        { term: "above", sentence: "The lamp is above the table.", translation: "灯在桌子上方（不接触）。" },
      ],
    },
    {
      term: "over",
      description: "over 常带跨越或覆盖感；above 只强调高于，不必正好在中心正上方。",
      examples: [
        { term: "over", sentence: "A bird flew over the wall.", translation: "一只鸟飞过墙上方。" },
        { term: "above", sentence: "The clock is above the door.", translation: "时钟在门上方。" },
      ],
    },
    {
      term: "below",
      description: "below 与 above 方向相反，表示低于某物或某个标准。",
      examples: [
        { term: "below", sentence: "The temperature is below zero.", translation: "温度在零度以下。" },
        { term: "above", sentence: "The temperature is above zero.", translation: "温度在零度以上。" },
      ],
    },
  ],
},

// src/app/[locale]/p/[id]/page.tsx
above: {
  en: {
    title: "above: meaning, examples, and above vs on vs over | Preposition Dino",
    description:
      "Above means higher than something without touching it. Learn above vs on vs over, see clear examples, and understand why we say above average.",
  },
  "zh-CN": {
    title: "above 介词用法：在……上方 vs on / over｜含义、例句与区别 | Preposition Dino",
    description:
      "above 表示“高于某物且不接触”。本页讲清 above vs on / over 的区别，并解释为什么会有 above average 这类“高于标准”的用法。",
  },
},
```

实现要求：

- 英文文案必须是自然教学英文，不写成生硬关键词堆叠
- `meaning / tips / comparison / collocationGroups / FAQ / commonMistakes / quiz` 都要同步更新
- FAQ 必须覆盖 `above vs on`、`above vs over`、`why above average`、`not exactly over the center`
- `Examples` 区保持空间义优先，不新增 `abstract` 分类

**Step 4: Run test to verify it passes**

Run: `npx tsx scripts/check-above-seo.ts`
Expected: PASS with no output

再做内容与构建回归：

Run: `npm run qa:content`
Expected: PASS with no `above` 相关 error

Run: `npm run build`
Expected: PASS with successful Next.js production build

**Step 5: Commit**

```bash
git add scripts/check-above-seo.ts src/data/prepositions/above/content/en.ts src/data/prepositions/above/content/zh-CN.ts src/app/[locale]/p/[id]/page.tsx
git commit -m "feat: refine above page content and seo"
```

### Task 4: 回写进度文档并完成最终回归

**Files:**
- Modify: `docs/PROGRESS.md`
- Verify: `docs/PRD.md`

**Step 1: Write the failing test**

```bash
git diff -- docs/PROGRESS.md
```

**Step 2: Run test to verify it fails**

Run: `git diff -- docs/PROGRESS.md`
Expected: 看到尚未回写的进度变更，或者发现 `above` 相关实现项仍未勾选。

**Step 3: Write minimal implementation**

```md
- [x] 落地 above 对比图复用能力与 above 页面双语内容优化。（2026-03-23）
```

实现要求：

- 回读 `docs/PRD.md`，确认本次实现对应 `2.2 / 4.1 / 4.2 / 5.1 / 5.2 / 7.3`
- 将已完成的设计与实施计划保留为 `[x]`
- 将 `above` 实现项改为 `[x]`，删除其阻塞说明
- 如果实现过程中发现新的后续子任务，再追加新的 `[ ]` 项

**Step 4: Run test to verify it passes**

Run: `git diff -- docs/PROGRESS.md`
Expected: 只剩本次明确回写的进度改动，内容与实现结果一致

再做最终总回归：

Run: `npm run qa:content && npm run build`
Expected: 两个命令都 PASS

**Step 5: Commit**

```bash
git add docs/PROGRESS.md
git commit -m "docs: update progress for above comparison visual"
```
