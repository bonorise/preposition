# instead of Page Optimization Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Optimize the `instead of` page so its content, decision tree, detail visual, and homepage thumbnail all teach `instead of = A replaces B`.

**Architecture:** Keep the change scoped to `instead-of` content and a small reusable detail visual mapping. Use SVG assets for the replacement animation and card thumbnail so the visual style can match the existing minimalist line-art thumbnails without expanding the Three.js renderer.

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind CSS, SVG animation, existing project data modules.

---

### Task 1: Add Regression Coverage For instead of Content

**Files:**
- Modify: `src/components/PrepositionSinceBehavior.test.tsx`

**Step 1: Write the failing tests**

Add tests for Chinese and English `instead of` behavior:

```tsx
import { render, screen } from "@testing-library/react";
import PrepositionDecisionTree from "@/components/PrepositionDecisionTree";
import { PREPOSITIONS } from "@/data/prepositions";
import { LocaleProvider } from "@/components/LocaleProvider";

const insteadOf = PREPOSITIONS.find((entry) => entry.id === "instead-of");

test("instead of comparison uses replacement-specific contrasts in Chinese", () => {
  expect(insteadOf?.comparison?.i18n["zh-CN"].differences.map((item) => item.term)).toEqual([
    "rather than",
    "as",
    "without",
  ]);
});

test("instead of decision tree explains replacement in Chinese", () => {
  expect(insteadOf).toBeDefined();
  render(
    <LocaleProvider locale="zh-CN">
      <PrepositionDecisionTree entry={insteadOf!} />
    </LocaleProvider>,
  );
  expect(screen.getByText(/A 明确替代 B/)).toBeInTheDocument();
  expect(screen.getByText(/名词词组或 -ing/)).toBeInTheDocument();
  expect(screen.getByText(/只是说“没有 B”/)).toBeInTheDocument();
});

test("instead of decision tree explains replacement in English", () => {
  expect(insteadOf).toBeDefined();
  render(
    <LocaleProvider locale="en">
      <PrepositionDecisionTree entry={insteadOf!} />
    </LocaleProvider>,
  );
  expect(screen.getByText(/A clearly replaces B/)).toBeInTheDocument();
  expect(screen.getByText(/noun phrase or -ing form/)).toBeInTheDocument();
  expect(screen.getByText(/no B, without a replacement/)).toBeInTheDocument();
});
```

If this file already has helper functions for locale rendering, reuse them instead of duplicating setup.

**Step 2: Run the tests to verify they fail**

Run:

```bash
npm test -- src/components/PrepositionSinceBehavior.test.tsx
```

Expected: tests fail because `instead of` comparison still lacks `rather than`, and the decision tree falls back to generic questions.

**Step 3: Commit**

Do not commit yet. Keep the failing tests for the implementation tasks.

### Task 2: Update instead of Comparison Content

**Files:**
- Modify: `src/data/prepositions/instead-of/content/zh-CN.ts`
- Modify: `src/data/prepositions/instead-of/content/en.ts`

**Step 1: Update Chinese comparison**

Set the Chinese comparison summary and differences to:

```ts
comparison: {
  summary:
    "instead of 的核心是“替代关系”：A 取代 B，B 原本的位置或选择被 A 占了。最容易混的是 rather than（偏好/对比）、as（角色/功能）和 without（没有但不一定替代）。",
  differences: [
    {
      term: "rather than",
      description:
        "rather than 强调偏好或对比选择；instead of 更强调 A 实际替代 B。",
      examples: [
        {
          term: "rather than",
          sentence: "I would rather walk than wait for the bus.",
          translation: "我宁愿走路，也不想等公交。",
        },
        {
          term: "instead of",
          sentence: "We walked instead of taking the bus.",
          translation: "我们走路，替代了坐公交这个选择。",
        },
      ],
    },
    {
      term: "as",
      description:
        "as 强调身份、角色或功能；instead of 强调用一个东西替掉另一个。",
      examples: [
        {
          term: "as",
          sentence: "Use this box as a table.",
          translation: "把这个盒子当桌子用。",
        },
        {
          term: "instead of",
          sentence: "Use this box instead of the table.",
          translation: "用这个盒子替代那张桌子。",
        },
      ],
    },
    {
      term: "without",
      description:
        "without 只是表示没有某物；instead of 表示有 A 来替代 B。",
      examples: [
        {
          term: "without",
          sentence: "He left without an umbrella.",
          translation: "他没带伞就走了。",
        },
        {
          term: "instead of",
          sentence: "He took a raincoat instead of an umbrella.",
          translation: "他带了雨衣来替代雨伞。",
        },
      ],
    },
  ],
}
```

**Step 2: Update English comparison**

Mirror the same semantic axis in English:

```ts
comparison: {
  summary:
    "Instead of is about replacement: A takes the place of B. Learners often confuse it with rather than (preference/contrast), as (role/function), and without (absence without replacement).",
  differences: [
    {
      term: "rather than",
      description:
        "Rather than highlights preference or contrast. Instead of more clearly says one option replaces another.",
      examples: [
        {
          term: "rather than",
          sentence: "I would rather walk than wait for the bus.",
        },
        {
          term: "instead of",
          sentence: "We walked instead of taking the bus.",
        },
      ],
    },
    {
      term: "as",
      description:
        "As shows role or function. Instead of shows replacement.",
      examples: [
        {
          term: "as",
          sentence: "Use this box as a table.",
        },
        {
          term: "instead of",
          sentence: "Use this box instead of the table.",
        },
      ],
    },
    {
      term: "without",
      description:
        "Without means not having something. Instead of means using or choosing A in place of B.",
      examples: [
        {
          term: "without",
          sentence: "He left without an umbrella.",
        },
        {
          term: "instead of",
          sentence: "He took a raincoat instead of an umbrella.",
        },
      ],
    },
  ],
}
```

**Step 3: Run the content tests**

Run:

```bash
npm test -- src/components/PrepositionSinceBehavior.test.tsx
```

Expected: comparison test passes; decision tree tests still fail.

### Task 3: Add instead of Decision Tree Branch

**Files:**
- Modify: `src/components/PrepositionDecisionTree.tsx`

**Step 1: Add the dedicated branch**

Insert a branch before the generic fallback:

```tsx
  } else if (word === "instead of" && !isDynamic) {
    if (activeLocale === "zh-CN") {
      questions.push({
        question: "是否是“选择/使用/做 A，而不是 B”，A 明确替代 B？",
        answer: "是 -> 用 instead of；它表示 A replaces B。",
      });
      questions.push({
        question: "instead of 后面是否接名词词组或 -ing 动作？",
        answer: "是 -> 结构正确，如 instead of coffee / instead of driving。",
      });
      questions.push({
        question: "你只是表达偏好对比或“宁愿 A 而不是 B”吗？",
        answer: "是 -> rather than 也常见；instead of 更强调实际替代。",
      });
      questions.push({
        question: "你是在说 A 充当某个角色或功能吗？",
        answer: "是 -> 用 as，不用 instead of。",
      });
      questions.push({
        question: "你只是说“没有 B”，并没有 A 来替代吗？",
        answer: "是 -> 用 without，不用 instead of。",
      });
    } else {
      questions.push({
        question: "Are you choosing, using, or doing A so A clearly replaces B?",
        answer: "Yes -> use instead of; it means A replaces B.",
      });
      questions.push({
        question: "Is instead of followed by a noun phrase or -ing form?",
        answer: "Yes -> the structure is correct: instead of coffee / instead of driving.",
      });
      questions.push({
        question: "Are you mainly expressing preference or contrast?",
        answer: "Yes -> rather than may also work; instead of sounds more like real replacement.",
      });
      questions.push({
        question: "Does A serve in a role or function?",
        answer: "Yes -> use as, not instead of.",
      });
      questions.push({
        question: "Do you only mean no B, without a replacement?",
        answer: "Yes -> use without, not instead of.",
      });
    }
```

**Step 2: Run the tests**

Run:

```bash
npm test -- src/components/PrepositionSinceBehavior.test.tsx
```

Expected: all `instead of` behavior tests pass.

**Step 3: Commit content and decision tree**

Run:

```bash
git add src/components/PrepositionSinceBehavior.test.tsx src/components/PrepositionDecisionTree.tsx src/data/prepositions/instead-of/content/zh-CN.ts src/data/prepositions/instead-of/content/en.ts
git commit -m "fix: clarify instead of replacement content"
```

### Task 4: Add SVG Visual Assets

**Files:**
- Create: `public/visuals/instead-of.svg`
- Create: `public/thumbnails/instead-of.svg`

**Step 1: Create the detail animation SVG**

Create `public/visuals/instead-of.svg` with:

- White background.
- Three aligned white translucent cubes.
- Middle cube initially labeled `B`.
- Purple cube `A` outside the left side.
- CSS/SVG animation that moves `A` into the middle slot and pushes `B` to the right outside the row.
- Existing visual style colors:
  - purple: `#7c3aed`
  - purple highlight: `#a78bfa`, `#c4b5fd`
  - grey strokes: `#94a3b8`, `#cbd5e1`, `#334155`
  - ordinary fills: `#ffffff`, `#f8fafc`
  - line widths near `1.1` to `1.55`

Use grouped cube faces and animate only transforms/opacities. Keep the file pure SVG with inline `<style>`.

**Step 2: Create the homepage thumbnail SVG**

Create `public/thumbnails/instead-of.svg` as a static keyframe:

- Three aligned cubes.
- Middle slot contains purple `A`.
- `B` sits outside to the right.
- Optional light arrow from left to center.
- Same color and stroke system as the detail SVG.

**Step 3: Inspect the SVG files**

Run:

```bash
sed -n '1,240p' public/visuals/instead-of.svg
sed -n '1,220p' public/thumbnails/instead-of.svg
```

Expected: both files are valid SVG, contain no external image references, and use only the agreed color palette.

### Task 5: Connect Dedicated Visuals To The Detail Page

**Files:**
- Modify: `src/components/PrepositionDetail.tsx`
- Modify only if needed: `src/data/i18n.ts`

**Step 1: Replace one-off including visual logic with a mapping**

In `PrepositionDetail.tsx`, replace:

```tsx
const usesStaticIncludingVisual = entry.id === "including";
```

with a mapping near the top of the file:

```tsx
const DETAIL_VISUALS: Partial<Record<string, { src: string; alt: string }>> = {
  including: {
    src: "/thumbnails/including.svg",
    alt: "including visual",
  },
  "instead-of": {
    src: "/visuals/instead-of.svg",
    alt: "instead of replacement visual",
  },
};
```

Then derive:

```tsx
const dedicatedVisual = DETAIL_VISUALS[entry.id];
const usesDedicatedVisual = Boolean(dedicatedVisual);
```

Update all `usesStaticIncludingVisual` branches to `usesDedicatedVisual`, and use `dedicatedVisual.src` / `dedicatedVisual.alt` in the `Image` component.

**Step 2: Preserve controls behavior**

Keep these behaviors:

- Dedicated SVG visual shows the static visual title/hint.
- Dedicated SVG visual keeps fullscreen.
- Dedicated SVG visual hides reset camera.
- Three.js views still show reset camera.

**Step 3: Run tests**

Run:

```bash
npm test -- src/components/PrepositionSinceBehavior.test.tsx
```

Expected: PASS.

**Step 4: Commit SVG visual integration**

Run:

```bash
git add src/components/PrepositionDetail.tsx public/visuals/instead-of.svg public/thumbnails/instead-of.svg src/data/i18n.ts
git commit -m "feat: add instead of replacement visual"
```

If `src/data/i18n.ts` was not changed, omit it from `git add`.

### Task 6: Final Verification And Progress Update

**Files:**
- Modify: `docs/PROGRESS.md`

**Step 1: Run project checks**

Run the most relevant checks:

```bash
npm test -- src/components/PrepositionSinceBehavior.test.tsx
npm run lint
npm run build
```

Expected: all pass. If any command is unavailable or too broad for the repo, record the exact result in the final response.

**Step 2: Manually inspect locally**

Start the dev server if needed:

```bash
npm run dev
```

Open:

- `http://localhost:3000/zh-CN/p/instead-of`
- `http://localhost:3000/en/p/instead-of`
- `http://localhost:3000/zh-CN`

Verify:

- Detail visual shows the animated replacement SVG.
- Homepage card uses `public/thumbnails/instead-of.svg`.
- Comparison terms are `rather than`, `as`, `without`.
- Decision tree uses the `instead of` dedicated questions.
- SVG style matches existing site diagrams.

**Step 3: Update progress**

In `docs/PROGRESS.md`, mark this task complete by adding:

```md
- [x] 优化 instead of 词条：差异解析改为 rather than / as / without，增加专属决策树，新增替换关系动态详情 SVG 与首页静态封面图。（2026-06-01）
```

**Step 4: Commit verification and progress**

Run:

```bash
git add docs/PROGRESS.md
git commit -m "docs: record instead of optimization progress"
```

**Step 5: Final response**

Final response must include:

- PRD sections reviewed.
- Completion status.
- Files changed.
- Verification commands and results.
- Manual confirmation needed, especially visual style match if browser inspection was limited.
