# Homepage FAQ Method Refresh Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the homepage FAQ with a method-first bilingual question set that explains why Preposition Dino teaches prepositions through spatial intuition, interaction, and comparison.

**Architecture:** This is a data-first content refresh. The homepage UI and JSON-LD wiring already read `faqTitle`, `faqSubtitle`, and `faqItems` from `src/data/i18n.ts`, so implementation should keep `src/components/FaqSection.tsx` and `src/app/[locale]/page.tsx` unchanged and focus on replacing the bilingual copy at the source. Add one lightweight validation script in `scripts/` so the new FAQ title, count, and core method phrases can be checked without adding a full test framework.

**Tech Stack:** Next.js 16, React 19, TypeScript, `tsx` scripts, existing i18n dictionary in `src/data/i18n.ts`

---

## Pre-Read

Read these files before making any code changes:

- `docs/plans/2026-03-23-homepage-faq-method-design.md`
- `src/data/i18n.ts`
- `src/components/FaqSection.tsx`
- `src/app/[locale]/page.tsx`

Important current behavior:

- Homepage FAQ title and items come directly from `getUiText(locale)` in `src/data/i18n.ts`.
- `src/components/FaqSection.tsx` renders the accordion UI and does not need structural changes.
- `src/app/[locale]/page.tsx` maps `ui.faqItems` into `FAQPage` JSON-LD, so any copy change automatically updates structured data.

## Task 1: Add a Homepage FAQ Validation Script

**Files:**

- Create: `scripts/check-homepage-faq.ts`
- Reference: `src/data/i18n.ts`

**Step 1: Write the failing test**

Create `scripts/check-homepage-faq.ts` with assertions for both locales. The first run should fail because the current titles and FAQ items still use the old copy.

```ts
import { getUiText } from "../src/data/i18n";

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

const zh = getUiText("zh-CN");
const en = getUiText("en");

assert(
  zh.faqTitle === "FAQ · 这个网站如何帮助你学会介词",
  `Unexpected zh-CN faqTitle: ${zh.faqTitle}`,
);
assert(
  en.faqTitle === "FAQ · How This Site Teaches Prepositions",
  `Unexpected en faqTitle: ${en.faqTitle}`,
);
assert(zh.faqItems.length >= 12, `Expected >=12 zh FAQ items, got ${zh.faqItems.length}`);
assert(en.faqItems.length >= 12, `Expected >=12 en FAQ items, got ${en.faqItems.length}`);
assert(
  zh.faqItems.some((item) => item.question.includes("为什么只背中文意思还是会用错")),
  "Missing zh method-oriented translation question",
);
assert(
  en.faqItems.some((item) => item.question.includes("Why do learners still misuse prepositions")),
  "Missing en translation question",
);
assert(
  en.faqItems.some((item) => item.answer.includes("relationship")),
  "Missing en method language about relationships",
);
```

**Step 2: Run test to verify it fails**

Run:

```bash
tsx scripts/check-homepage-faq.ts
```

Expected: FAIL with an error about the old FAQ title or missing items.

**Step 3: Write minimal implementation**

Keep the script small and deterministic:

- no network
- no DOM rendering
- only import `getUiText`
- only verify title, item count, and a few anchor phrases

**Step 4: Run test to verify it passes later**

Do not expect a pass yet. This script should continue failing until Tasks 2 and 3 are complete.

**Step 5: Commit**

```bash
git add scripts/check-homepage-faq.ts
git commit -m "test: add homepage faq validation script"
```

## Task 2: Replace the Chinese Homepage FAQ Copy

**Files:**

- Modify: `src/data/i18n.ts:203-246`
- Reference: `docs/plans/2026-03-23-homepage-faq-method-design.md`
- Validation: `scripts/check-homepage-faq.ts`

**Step 1: Write the failing test**

Run the new validation script before editing Chinese copy.

```bash
tsx scripts/check-homepage-faq.ts
```

Expected: FAIL because `zh-CN` still has the old title and 8 old FAQ items.

**Step 2: Write minimal implementation**

Replace the Chinese homepage FAQ block in `src/data/i18n.ts` with:

- `faqTitle: "FAQ · 这个网站如何帮助你学会介词"`
- a subtitle centered on method questions, for example `学习方法问答`
- 12 to 13 FAQ items aligned with the approved design

Use this exact question structure:

1. 为什么介词这么容易学了又混？
2. 为什么只背中文意思还是会用错介词？
3. 为什么这个网站先从空间直觉开始教？
4. 为什么这里先讲空间关系，而不是先讲语法术语？
5. 为什么学习介词要用 3D 场景？
6. 为什么互动操作会让介词更容易记住？
7. 为什么对比学习比孤立记定义更有效？
8. 为什么这里先讲最常见的意思？
9. 为什么这里的解释和例句都故意写得很短？
10. 为什么这个网站要保留中英双语？
11. 初学者应该怎么使用这个网站？
12. 这个网站更适合自学还是课堂教学？
13. 先学空间义，真的能帮助后面理解时间义和抽象义吗？

Answer writing rules:

- 2 to 4 sentences each
- explicitly explain “关系 / 边界 / 视角 / 对比 / 认知负担”
- do not mention concrete word pairs such as `in / on / at`
- do not mention future updates or feature inventory

Example answer style for item 2:

```ts
{
  question: "为什么只背中文意思还是会用错介词？",
  answer:
    "因为中文翻译通常只能给你一个大概意思，不能把真正决定选择的关系讲清楚。介词之间常常差在是否接触、是否越过边界、方向朝哪里、观察角度是什么。真正会用，不是记住一个中文标签，而是看清这个关系本身。",
}
```

**Step 3: Run test to verify progress**

Run:

```bash
tsx scripts/check-homepage-faq.ts
```

Expected: still FAIL, but now the remaining failure should come from the English FAQ block.

**Step 4: Sanity-check TypeScript**

Run:

```bash
npx tsc --noEmit
```

Expected: PASS

**Step 5: Commit**

```bash
git add src/data/i18n.ts
git commit -m "feat: rewrite zh homepage faq copy"
```

## Task 3: Replace the English Homepage FAQ Copy

**Files:**

- Modify: `src/data/i18n.ts:341-384`
- Reference: `docs/plans/2026-03-23-homepage-faq-method-design.md`
- Validation: `scripts/check-homepage-faq.ts`

**Step 1: Write the failing test**

Run:

```bash
tsx scripts/check-homepage-faq.ts
```

Expected: FAIL because the English FAQ title and items still use the old functional wording.

**Step 2: Write minimal implementation**

Replace the English homepage FAQ block in `src/data/i18n.ts` with:

- `faqTitle: "FAQ · How This Site Teaches Prepositions"`
- a subtitle centered on method questions, for example `Method and learning questions`
- the approved 12 to 13 method-oriented items

Use the approved question set:

1. `Why are prepositions so difficult to learn well?`
2. `Why do learners still misuse prepositions after memorizing the translation?`
3. `Why does this website begin with spatial intuition?`
4. `Why teach prepositions through space instead of grammar first?`
5. `Why use 3D scenes on a preposition learning website?`
6. `Why does interaction matter in this kind of learning?`
7. `Why do comparisons matter so much when learning prepositions?`
8. `Why focus on the most common meaning first?`
9. `Why are the explanations and examples intentionally short?`
10. `Why does the site use bilingual support?`
11. `How should a beginner use this website well?`
12. `Is this website meant for self-study or for teaching?`
13. `Can this approach support later learning beyond spatial meaning?`

Answer writing rules:

- 2 to 4 sentences each
- keep the “brand / method” tone from the design doc
- use method language like `relationship`, `boundary`, `perspective`, `comparison`, `cognitive load`
- avoid specific word-pair comparisons
- avoid “we provide / we will add later” phrasing

Example answer style for item 7:

```ts
{
  question: "Why do comparisons matter so much when learning prepositions?",
  answer:
    "Because confusion usually lives in the gap between similar words. A learner does not struggle with one preposition in isolation as much as with the boundary between nearby choices. Comparison sharpens that boundary and helps the brain notice the one feature that actually controls the choice.",
}
```

**Step 3: Run test to verify it passes**

Run:

```bash
tsx scripts/check-homepage-faq.ts
```

Expected: PASS

**Step 4: Run build-level verification**

Run:

```bash
npm run build
```

Expected: PASS

**Step 5: Commit**

```bash
git add src/data/i18n.ts
git commit -m "feat: rewrite en homepage faq copy"
```

## Task 4: Final Verification and Progress Update

**Files:**

- Modify: `docs/PROGRESS.md`
- Verify: `src/components/FaqSection.tsx:9-88`
- Verify: `src/app/[locale]/page.tsx:103-142`

**Step 1: Verify homepage rendering path**

Confirm no component changes are needed:

- `src/components/FaqSection.tsx` should still read `ui.faqTitle`, `ui.faqSubtitle`, and `ui.faqItems`
- `src/app/[locale]/page.tsx` should still map `ui.faqItems` into `FAQPage` JSON-LD

No code changes should be required in either file unless the implementation unexpectedly exposes a layout problem.

**Step 2: Run the validation commands again**

Run:

```bash
tsx scripts/check-homepage-faq.ts
npm run build
```

Expected: both PASS

**Step 3: Update progress tracking**

Add completed meta items to `docs/PROGRESS.md`:

- `[x] 产出首页 FAQ 方法论改版设计文档（2026-03-23）`
- `[x] 产出首页 FAQ 方法论改版实施计划（2026-03-23）`

Add the implementation task if it does not already exist:

- `[ ] 首页 FAQ 方法论改版：替换中英文 FAQ 标题、方法论问答与结构化数据输出验证。（阻塞：待执行文案替换并跑通校验脚本与 build。）`

If implementation is completed in the same execution session, flip that last line to `[x]` and remove the blocker text.

**Step 4: Commit**

```bash
git add docs/PROGRESS.md docs/plans/2026-03-23-homepage-faq-method.md
git commit -m "docs: add homepage faq implementation plan"
```

## Notes for the Implementer

- Do not touch `src/components/FaqSection.tsx` unless the new copy causes a clear layout issue.
- Do not add homepage FAQ logic outside `src/data/i18n.ts`; keep this as a dictionary-driven change.
- Keep the homepage and detail-page FAQ responsibilities separate.
- Preserve valid JSON-LD output by keeping every answer as a plain string.
