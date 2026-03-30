# By Page and Shared SEO Logic Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Fix the `by` page so its teaching flow and SEO both lead with the core spatial meaning, then update shared SEO inference so multi-sense prepositions no longer default to the wrong category.

**Architecture:** Keep the current data-driven preposition module system. Update `by` content data directly, add a small reusable SEO helper layer for “primary teaching category” inference, and validate the behavior with deterministic `tsx` scripts instead of introducing a full test runner. Do not introduce new persistent SEO fields into the preposition data model in this round.

**Tech Stack:** Next.js 16, TypeScript, existing `tsx` validation scripts, data modules under `src/data/prepositions`, App Router metadata generation

---

### Task 1: Add a Failing SEO Validation Script

**Files:**
- Create: `scripts/check-by-seo.ts`
- Reference: `src/data/prepositions/index.ts`
- Reference: `src/lib/prepositionCategory.ts`
- Reference: `src/lib/prepositionSeo.ts`

**Step 1: Write the failing test**

Create a `tsx` script with assertions for:

- `by` exists
- `by` exposes `abstract` in its categories
- shared SEO inference picks `space` as the primary SEO category for `by`
- generated English title for `by` does not lead with `time preposition`
- generated description for `by` starts from the spatial core idea

**Step 2: Run test to verify it fails**

Run:

```bash
tsx scripts/check-by-seo.ts
```

Expected: FAIL because the shared SEO helper does not exist yet and `by` is not yet classified/content-optimized for this behavior.

**Step 3: Keep the script deterministic**

- Use only imports plus `node:assert/strict`
- No browser
- No network

**Step 4: Re-run to confirm the failure is about missing behavior**

Run:

```bash
tsx scripts/check-by-seo.ts
```

Expected: FAIL for the intended reason, not due to syntax/runtime mistakes.

### Task 2: Add Shared SEO Helper Logic

**Files:**
- Create: `src/lib/prepositionSeo.ts`
- Modify: `src/app/[locale]/p/[id]/page.tsx`
- Test: `scripts/check-by-seo.ts`

**Step 1: Write/keep the failing test**

Run:

```bash
tsx scripts/check-by-seo.ts
```

Expected: FAIL because the helper is still missing or returning the wrong category.

**Step 2: Write minimal implementation**

In `src/lib/prepositionSeo.ts`:

- centralize SEO primary-category inference
- use default priority `dynamic > space > time > abstract`
- keep a small override map for exceptions like `about` and `around`
- export a reusable builder for title/description/keywords inputs

In `src/app/[locale]/p/[id]/page.tsx`:

- replace inline SEO inference with the shared helper
- keep existing localized template behavior where it still fits
- ensure metadata and structured data use the same resolved description

**Step 3: Run test to verify it passes**

Run:

```bash
tsx scripts/check-by-seo.ts
```

Expected: PASS for SEO-category and generated-title assertions.

**Step 4: Run build-safety checks**

Run:

```bash
npm run lint
```

Expected: PASS.

### Task 3: Rebuild `by` Content Around the Core Meaning

**Files:**
- Modify: `src/data/prepositions/by/content/en.ts`
- Modify: `src/data/prepositions/by/content/zh-CN.ts`
- Modify: `src/lib/prepositionCategory.ts`
- Test: `scripts/check-by-seo.ts`

**Step 1: Keep the validation failing if needed**

If the test still expects `by` to include `abstract`, confirm:

```bash
tsx scripts/check-by-seo.ts
```

Expected: FAIL until `by` content and category coverage are complete.

**Step 2: Write minimal implementation**

Update `by` content so it:

- leads with `at the side of / close to`
- explains the extension path to time, method, basis, and amount
- provides `space / time / abstract` examples
- rewrites comparison, mistakes, quiz, and FAQ to fit the new teaching flow

Update `src/lib/prepositionCategory.ts` so `by` is recognized as having an `abstract` use in the site’s four-category system.

**Step 3: Run the targeted validation**

Run:

```bash
tsx scripts/check-by-seo.ts
```

Expected: PASS.

**Step 4: Run existing content/data checks**

Run:

```bash
npm run check:prepositions
```

Expected: PASS.

### Task 4: Final Verification and Progress Update

**Files:**
- Modify: `docs/PROGRESS.md`
- Reference: `docs/PRD.md`
- Reference: `docs/plans/2026-03-30-by-seo-logic-design.md`

**Step 1: Verify final behavior**

Run:

```bash
tsx scripts/check-by-seo.ts
npm run check:prepositions
npm run lint
```

Expected: all PASS.

**Step 2: Update project progress**

In `docs/PROGRESS.md`:

- mark the by/SEO work complete if finished
- add any newly discovered follow-up items as unchecked tasks
- keep blocked items blocked unless this round actually resolves them

**Step 3: Self-check against PRD**

Confirm the final work satisfies:

- beginner-friendly explanation
- clear examples
- SEO-oriented detail-page content quality
- data-driven implementation

**Step 4: Prepare final handoff**

Summarize:

- what changed
- what remains for future schema-driven SEO work
- whether manual browser verification is still recommended
