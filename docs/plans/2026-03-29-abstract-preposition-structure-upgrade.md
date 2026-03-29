# Abstract Preposition Structure Upgrade and 11 New Pages Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Upgrade Preposition Dino from a three-category model to a four-category model with `abstract` support, then ship 11 new formal preposition detail pages without destabilizing the existing site.

**Architecture:** Keep the current data-driven preposition module system and page layout. Extend the learning-category layer from `space / time / dynamic` to `space / time / dynamic / abstract`, wire the new category through homepage grouping, detail-page category switching, examples, SEO, and scene selection, then add 11 new modules that conform to the existing `meta / scene / content / index` folder contract. Avoid introducing a new rendering engine; use existing scene variants, time-axis scenes, or neutral static scenes where needed.

**Tech Stack:** Next.js 16, React 19, TypeScript, existing preposition data modules under `src/data/prepositions`, `tsx` scripts, ESLint, existing QA/content scripts

---

## Pre-Read

Read these files before making any code changes:

- `docs/plans/2026-03-29-abstract-preposition-structure-upgrade-design.md`
- `docs/PRD.md`
- `docs/PROGRESS.md`
- `src/data/types.ts`
- `src/lib/prepositionCategory.ts`
- `src/lib/categoryScene.ts`
- `src/components/PrepositionGallery.tsx`
- `src/components/PrepositionDetail.tsx`
- `src/components/PrepositionTextPanel.tsx`
- `src/components/SpatialPlayground.tsx`
- `src/app/[locale]/p/[id]/page.tsx`
- `src/data/prepositions/shared/order.ts`
- `src/data/prepositions/shared/registry.ts`
- `scripts/check-preposition-data-structure.ts`

Important current behavior:

- The site currently assumes only `space / time / dynamic`.
- Homepage grouping is derived from `partitionByHomeCategory`.
- Detail-page category switching is derived from `getEntryCategories`.
- Example sections are hard-coded to `space / time / dynamic`.
- SEO category inference in `src/app/[locale]/p/[id]/page.tsx` does not know about `abstract`.
- The preposition registry is generated from `src/data/prepositions/shared/order.ts`.

## Task 1: Add a Validation Script for Four-Category Support

**Files:**

- Create: `scripts/check-abstract-category-support.ts`
- Reference: `src/lib/prepositionCategory.ts`
- Reference: `src/data/i18n.ts`

**Step 1: Write the failing test**

Create a new script that imports category utilities and UI text, then asserts:

- `LearningCategory` consumers expose `abstract`
- homepage section copy exists in both locales
- detail-page category copy exists in both locales

Use concrete assertions such as:

```ts
import assert from "node:assert/strict";
import { getUiText } from "../src/data/i18n";
import { getEntryCategories } from "../src/lib/prepositionCategory";
import { getPrepositionById } from "../src/data/prepositions";

const zh = getUiText("zh-CN");
const en = getUiText("en");

assert.ok(zh.sectionAbstractTitle, "zh sectionAbstractTitle should exist");
assert.ok(en.sectionAbstractTitle, "en sectionAbstractTitle should exist");
assert.ok(zh.detailSceneCategoryAbstract, "zh abstract scene label should exist");
assert.ok(en.detailSceneCategoryAbstract, "en abstract scene label should exist");

const about = getPrepositionById("about");
assert.ok(about, "about should exist");
assert.ok(
  getEntryCategories(about).includes("abstract"),
  "about should expose abstract as a category after the upgrade",
);
```

**Step 2: Run test to verify it fails**

Run:

```bash
tsx scripts/check-abstract-category-support.ts
```

Expected: FAIL because the current codebase does not expose `abstract` yet.

**Step 3: Write minimal implementation**

Keep the script deterministic:

- no DOM rendering
- no network
- only utility imports and assertions

**Step 4: Run test to verify it still fails for the right reason**

Run:

```bash
tsx scripts/check-abstract-category-support.ts
```

Expected: FAIL with missing copy or missing category support, not with import/runtime errors.

**Step 5: Commit**

```bash
git add scripts/check-abstract-category-support.ts
git commit -m "test: add abstract category support validation"
```

## Task 2: Extend the Type Layer and Category Utilities

**Files:**

- Modify: `src/data/types.ts`
- Modify: `src/lib/prepositionCategory.ts`
- Test: `scripts/check-abstract-category-support.ts`

**Step 1: Write the failing test**

Run:

```bash
tsx scripts/check-abstract-category-support.ts
```

Expected: FAIL because `abstract` is not recognized yet.

**Step 2: Write minimal implementation**

Update `src/data/types.ts`:

- add `abstract` to `LearningCategory`

Update `src/lib/prepositionCategory.ts`:

- add `ABSTRACT_IDS`
- add `isAbstractPreposition(entry)`
- update `getEntryCategories(entry)`
- update `getHomeCategory(entry)` with priority `dynamic > time > abstract > space`
- update `partitionByHomeCategory(entries)` to return four buckets

Initial `ABSTRACT_IDS` should include at least:

- `about`
- `according-to`
- `as`
- `apart-from`
- `including`
- `due-to`
- `instead-of`
- `via`

Leave room to add more later.

**Step 3: Run test to verify it passes this slice**

Run:

```bash
tsx scripts/check-abstract-category-support.ts
```

Expected: PASS for utility-level category support if the temporary test target is available.

**Step 4: Run existing data checks**

Run:

```bash
npm run check:prepositions
```

Expected: PASS. No existing preposition should fail data assembly because of the new category type.

**Step 5: Commit**

```bash
git add src/data/types.ts src/lib/prepositionCategory.ts scripts/check-abstract-category-support.ts
git commit -m "feat: add abstract learning category support"
```

## Task 3: Add Bilingual UI Copy for the New Category

**Files:**

- Modify: `src/data/i18n.ts`
- Test: `scripts/check-abstract-category-support.ts`

**Step 1: Write the failing test**

Run:

```bash
tsx scripts/check-abstract-category-support.ts
```

Expected: FAIL because the new `abstract` labels and section copy are still missing.

**Step 2: Write minimal implementation**

Add bilingual UI keys for:

- homepage abstract section title
- homepage abstract section description
- detail-page abstract category button
- abstract examples section title

Recommended values:

- zh-CN:
  - `sectionAbstractTitle: "抽象关系"`
  - `detailSceneCategoryAbstract: "抽象"`
  - `detailExamplesAbstract: "抽象用法例句"`
- en:
  - `sectionAbstractTitle: "Abstract relations"`
  - `detailSceneCategoryAbstract: "Abstract"`
  - `detailExamplesAbstract: "Abstract examples"`

Follow the existing key organization in `src/data/i18n.ts`. Do not scatter string literals into components.

**Step 3: Run test to verify it passes**

Run:

```bash
tsx scripts/check-abstract-category-support.ts
```

Expected: PASS for the copy assertions.

**Step 4: Run lint for the dictionary file**

Run:

```bash
npm run lint -- src/data/i18n.ts
```

Expected: PASS

**Step 5: Commit**

```bash
git add src/data/i18n.ts scripts/check-abstract-category-support.ts
git commit -m "feat: add abstract category ui copy"
```

## Task 4: Wire Abstract Support Through Homepage and Detail UI

**Files:**

- Modify: `src/components/PrepositionGallery.tsx`
- Modify: `src/components/PrepositionDetail.tsx`
- Modify: `src/components/PrepositionTextPanel.tsx`
- Modify: `src/components/SpatialPlayground.tsx` (only if needed for compatibility)
- Test: `scripts/check-abstract-category-support.ts`

**Step 1: Write the failing test**

Use the validation script plus a focused manual expectation list:

```bash
tsx scripts/check-abstract-category-support.ts
```

Expected: the script may already pass, but the UI is still not rendering `abstract`.

**Step 2: Write minimal implementation**

Update `src/components/PrepositionGallery.tsx`:

- add an `abstract` section after `time` and before `dynamic`, or another consistent final order approved by the design
- read the new title/description from `getUiText`

Update `src/components/PrepositionDetail.tsx`:

- add `abstract` to `CATEGORY_PRIORITY`
- add the abstract label to `categoryLabels`

Update `src/components/PrepositionTextPanel.tsx`:

- add `abstract` to section labels
- allow `entry.examplesByCategory?.abstract`
- include `abstract` in the section generation loop

Update `src/components/SpatialPlayground.tsx` only if it assumes there are exactly three categories. Keep behavior compatible, but do not build a dedicated abstract playground path in this task.

**Step 3: Run lint on the touched components**

Run:

```bash
npm run lint -- src/components/PrepositionGallery.tsx src/components/PrepositionDetail.tsx src/components/PrepositionTextPanel.tsx src/components/SpatialPlayground.tsx
```

Expected: PASS

**Step 4: Run a full preposition data check**

Run:

```bash
npm run check:prepositions
```

Expected: PASS

**Step 5: Commit**

```bash
git add src/components/PrepositionGallery.tsx src/components/PrepositionDetail.tsx src/components/PrepositionTextPanel.tsx src/components/SpatialPlayground.tsx
git commit -m "feat: wire abstract category through gallery and detail ui"
```

## Task 5: Extend SEO Category Logic and Time-Axis Support

**Files:**

- Modify: `src/app/[locale]/p/[id]/page.tsx`
- Modify: `src/lib/categoryScene.ts`
- Reference: `src/lib/prepositionCategory.ts`

**Step 1: Write the failing test**

Use a manual validation checklist first:

- `since` should be treated as time
- `until` should be treated as time
- `during` should be treated as time
- `according-to` and `as` should not fall back to `space` in SEO

If useful, extend `scripts/check-abstract-category-support.ts` with assertions for category inference once implementation starts.

**Step 2: Write minimal implementation**

Update `src/app/[locale]/p/[id]/page.tsx`:

- extend SEO template types to allow `abstract`
- add `abstract` title suffix / description patterns
- update `getSeoCategories(entry)` to include `abstract`

Update `src/lib/categoryScene.ts`:

- add `since` to a “time start-to-now” rule path
- add `until` to a “time boundary” rule path
- add `during` to a “time duration inside a period” rule path

Keep the scene implementation minimal and consistent with the existing axis system. Do not invent a second time renderer.

**Step 3: Run build-oriented validation**

Run:

```bash
npm run build
```

Expected: PASS. The page metadata generation must compile with the new category.

**Step 4: Run data validation**

Run:

```bash
npm run check:prepositions
```

Expected: PASS

**Step 5: Commit**

```bash
git add src/app/[locale]/p/[id]/page.tsx src/lib/categoryScene.ts
git commit -m "feat: add abstract seo support and time-axis rules"
```

## Task 6: Register the 11 New Slugs and Add Module Scaffolding

**Files:**

- Modify: `src/data/prepositions/shared/order.ts`
- Create:
  - `src/data/prepositions/apart-from/index.ts`
  - `src/data/prepositions/according-to/index.ts`
  - `src/data/prepositions/away-from/index.ts`
  - `src/data/prepositions/as/index.ts`
  - `src/data/prepositions/since/index.ts`
  - `src/data/prepositions/until/index.ts`
  - `src/data/prepositions/including/index.ts`
  - `src/data/prepositions/due-to/index.ts`
  - `src/data/prepositions/during/index.ts`
  - `src/data/prepositions/instead-of/index.ts`
  - `src/data/prepositions/via/index.ts`
- Create matching `meta.ts`, `scene.ts`, `content/en.ts`, `content/zh-CN.ts` under each directory

**Step 1: Write the failing test**

Run:

```bash
npm run check:prepositions
```

Expected: FAIL as soon as `shared/order.ts` includes new ids without all required files on disk.

**Step 2: Write minimal implementation**

Update `src/data/prepositions/shared/order.ts` with the approved slug order.

Create all 11 directories with a complete folder skeleton:

- `meta.ts`
- `scene.ts`
- `content/en.ts`
- `content/zh-CN.ts`
- `index.ts`

Use the existing `about` and `after` module shape as the scaffolding reference.

Keep content temporary but structurally complete if needed for this task:

- `meaning`
- `cardMeaning`
- `tips`
- `examples`
- `comparison`
- `collocationGroups`
- `commonMistakes`
- `quiz`
- `faq`

Temporary copy is allowed only if it keeps the structure valid; real copy quality is handled in later tasks.

**Step 3: Regenerate the registry**

Run:

```bash
npm run generate:preposition-registry
```

Expected: `src/data/prepositions/shared/registry.ts` updates with the 11 imports.

**Step 4: Run data validation**

Run:

```bash
npm run check:prepositions
```

Expected: PASS for on-disk structure and registry assembly.

**Step 5: Commit**

```bash
git add src/data/prepositions/shared/order.ts src/data/prepositions/shared/registry.ts src/data/prepositions/apart-from src/data/prepositions/according-to src/data/prepositions/away-from src/data/prepositions/as src/data/prepositions/since src/data/prepositions/until src/data/prepositions/including src/data/prepositions/due-to src/data/prepositions/during src/data/prepositions/instead-of src/data/prepositions/via
git commit -m "feat: scaffold 11 new preposition modules"
```

## Task 7: Complete the Time-Focused New Pages

**Files:**

- Modify:
  - `src/data/prepositions/since/meta.ts`
  - `src/data/prepositions/since/scene.ts`
  - `src/data/prepositions/since/content/en.ts`
  - `src/data/prepositions/since/content/zh-CN.ts`
  - `src/data/prepositions/until/meta.ts`
  - `src/data/prepositions/until/scene.ts`
  - `src/data/prepositions/until/content/en.ts`
  - `src/data/prepositions/until/content/zh-CN.ts`
  - `src/data/prepositions/during/meta.ts`
  - `src/data/prepositions/during/scene.ts`
  - `src/data/prepositions/during/content/en.ts`
  - `src/data/prepositions/during/content/zh-CN.ts`

**Step 1: Write the failing test**

Run:

```bash
npm run qa:content
```

Expected: FAIL or report weak content coverage for the new time pages if the placeholder copy is still too thin.

**Step 2: Write minimal implementation**

For each of `since`, `until`, and `during`:

- finalize `meta.ts` tags and `relatedIds`
- use a proper time-axis-based scene
- write natural bilingual content
- add `examplesByCategory.time`
- ensure `comparison` covers at least two real confusions

Minimum content standard per page:

- 2 core examples
- 2 comparison targets
- 3 collocation groups
- 2-3 mistakes
- 3 quiz items
- 6-8 FAQ items

**Step 3: Run content QA**

Run:

```bash
npm run qa:content
```

Expected: PASS or no critical issue for these three pages.

**Step 4: Run build**

Run:

```bash
npm run build
```

Expected: PASS

**Step 5: Commit**

```bash
git add src/data/prepositions/since src/data/prepositions/until src/data/prepositions/during
git commit -m "feat: add time-focused preposition pages"
```

## Task 8: Complete the Abstract-Relation New Pages

**Files:**

- Modify:
  - `src/data/prepositions/according-to/*`
  - `src/data/prepositions/as/*`
  - `src/data/prepositions/due-to/*`
  - `src/data/prepositions/instead-of/*`

**Step 1: Write the failing test**

Run:

```bash
npm run qa:content
```

Expected: FAIL or flag thin content/weak comparisons if placeholder copy remains.

**Step 2: Write minimal implementation**

For each page:

- finalize bilingual `meaning` and `cardMeaning`
- add `examplesByCategory.abstract`
- use neutral static scenes where a literal spatial reading would mislead
- add strong comparison blocks with internal links where possible
- keep the page strictly within preposition use, especially for `as`

Specific content boundaries:

- `as`: preposition use only (`as a teacher`, `as a guide`)
- `due to`: preposition phrase use only
- `according to`: source/basis use, not a reporting-verb lesson
- `instead of`: substitution relation

**Step 3: Run content QA**

Run:

```bash
npm run qa:content
```

Expected: PASS or no critical issue for these four pages.

**Step 4: Run lint on the touched modules**

Run:

```bash
npm run lint -- src/data/prepositions/according-to src/data/prepositions/as src/data/prepositions/due-to src/data/prepositions/instead-of
```

Expected: PASS

**Step 5: Commit**

```bash
git add src/data/prepositions/according-to src/data/prepositions/as src/data/prepositions/due-to src/data/prepositions/instead-of
git commit -m "feat: add abstract relation preposition pages"
```

## Task 9: Complete the Set/Route/Distance New Pages

**Files:**

- Modify:
  - `src/data/prepositions/apart-from/*`
  - `src/data/prepositions/including/*`
  - `src/data/prepositions/away-from/*`
  - `src/data/prepositions/via/*`

**Step 1: Write the failing test**

Run:

```bash
npm run qa:content
```

Expected: FAIL or surface weak/placeholder content if these pages are not complete yet.

**Step 2: Write minimal implementation**

For each page:

- finalize `meta.ts` and `relatedIds`
- choose the approved scene strategy
- add bilingual examples, collocations, mistakes, quiz, FAQ
- use `examplesByCategory.abstract`, `examplesByCategory.space`, or `examplesByCategory.dynamic` where appropriate

Specific requirements:

- `apart-from`: explain exclusion first, “besides/furthermore” second
- `including`: focus on membership/inclusion, not exhaustive-list grammar
- `away-from`: contrast with `far-from`
- `via`: cover physical route plus abstract channel

**Step 3: Run data and content validation**

Run:

```bash
npm run check:prepositions
npm run qa:content
```

Expected: PASS

**Step 4: Run build**

Run:

```bash
npm run build
```

Expected: PASS

**Step 5: Commit**

```bash
git add src/data/prepositions/apart-from src/data/prepositions/including src/data/prepositions/away-from src/data/prepositions/via
git commit -m "feat: add set and route preposition pages"
```

## Task 10: Final Regression, Progress Update, and Documentation Sync

**Files:**

- Modify: `docs/PROGRESS.md`
- Reference: `docs/PRD.md`
- Reference: `docs/plans/2026-03-29-abstract-preposition-structure-upgrade-design.md`

**Step 1: Write the failing test**

Use a manual regression checklist:

- homepage shows four sections
- old pages such as `about`, `after`, `from`, `over`, `among`, `close-to` still render correctly
- all 11 new pages resolve under both locales
- FAQ JSON-LD still appears on detail pages

**Step 2: Run the regression commands**

Run:

```bash
npm run check:prepositions
npm run qa:content
npm run build
```

Expected: PASS for all three.

**Step 3: Update progress**

Update `docs/PROGRESS.md`:

- mark the design/plan items completed if not already marked
- add or update the implementation task status for abstract-category support and the 11 new pages
- leave any unfinished content-polish work unchecked with a one-line blocker

**Step 4: Review diff and confirm no registry drift**

Run:

```bash
git diff --stat
git diff -- src/data/prepositions/shared/order.ts src/data/prepositions/shared/registry.ts docs/PROGRESS.md
```

Expected: only the intended files change, and registry order matches the approved slug list.

**Step 5: Commit**

```bash
git add docs/PROGRESS.md
git commit -m "docs: update progress for abstract preposition rollout"
```

## Suggested QA Sample Pages

Open and check these pages manually after implementation:

- `/zh/p/since`
- `/en/p/since`
- `/zh/p/as`
- `/en/p/according-to`
- `/zh/p/including`
- `/en/p/via`
- `/zh/p/away-from`
- `/en/p/until`

Also regression-check:

- `/zh/p/about`
- `/en/p/from`
- `/zh/p/over`

## Handoff Notes

- Keep `by` untouched in this rollout.
- Do not let abstract pages fall back to fake spatial explanations just to fit the old product model.
- If content quality is still thin after the first pass, ship structure-complete pages first, then schedule a second editorial polish pass.

