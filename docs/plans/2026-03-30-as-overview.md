# As Overview Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Upgrade `/[locale]/p/as` from a narrow preposition-only page into a bilingual teaching-oriented overview page that explains how the core meaning of `as` extends into comparison, role, time, reason, and concession, while aligning the page with stronger Google-friendly SEO intent coverage.

**Architecture:** Keep the existing data-driven preposition page pipeline, metadata generation flow, and detail-page component chain. Rewrite the `as` content modules in both locales, add a small reusable overview/meaning-map component for pages that need semantic expansion, and introduce a dedicated SEO override so the page title, description, FAQ, and structured data all follow the new “single core meaning, multiple connected uses” narrative.

**Tech Stack:** Next.js 16 App Router, TypeScript, existing preposition data modules, React client components, `tsx`/Node assertion scripts when useful, current metadata + FAQ schema pipeline

---

### Task 1: Capture the New SEO and Content Expectations in a Targeted Validation Script

**Files:**
- Create: `scripts/check-as-overview.ts`
- Reference: `src/data/prepositions/index.ts`
- Reference: `src/lib/prepositionSeo.ts`

**Step 1: Write the failing test**

Create a deterministic `tsx` script with `node:assert/strict` assertions for:

- `as` exists in the preposition registry
- generated English SEO title for `as` no longer contains the old `abstract use` pattern
- generated English description mentions the connected use families (`comparison`, `role`, `time`, `reason` or equivalent)
- FAQ items for `as` include at least one question about `as vs like`
- FAQ items for `as` include at least one question about whether `as` is a preposition or conjunction

**Step 2: Run test to verify it fails**

Run:

```bash
tsx scripts/check-as-overview.ts
```

Expected: FAIL because the current `as` SEO/title/FAQ still reflects the narrow preposition-only version.

**Step 3: Keep the script deterministic**

- Use only imports and assertions
- No browser
- No network

**Step 4: Re-run to confirm the failure is the intended one**

Run:

```bash
tsx scripts/check-as-overview.ts
```

Expected: FAIL for the old `as` content/SEO assumptions, not because of syntax or import errors.

### Task 2: Add a Reusable Meaning-Map/Overview Component Slot

**Files:**
- Create: `src/components/PrepositionMeaningMap.tsx`
- Modify: `src/components/PrepositionDetail.tsx`
- Reference: `src/data/types.ts`

**Step 1: Keep the failing validation visible**

Run:

```bash
tsx scripts/check-as-overview.ts
```

Expected: FAIL until the page structure and content are updated.

**Step 2: Write minimal implementation**

In `src/components/PrepositionMeaningMap.tsx`:

- create a compact, reusable overview block component
- render a section title, a short core-meaning paragraph, and a list of connected usage branches
- keep the component generic enough that another multi-use word could reuse it later

In `src/components/PrepositionDetail.tsx`:

- add a conditional slot so `as` can render the meaning-map block near the top of the page
- keep the existing detail-page order stable for all other entries
- do not change unrelated viewer, related-gallery, quiz, or FAQ wiring

**Step 3: Verify the component compiles**

Run:

```bash
npm run lint
```

Expected: PASS, or only known pre-existing issues unrelated to this change.

**Step 4: Keep the UI enhancement minimal**

- no new routing
- no global data-model rewrite
- no attempt to solve related-thumbnail 404s in this task

### Task 3: Rewrite the English `as` Content Around the Core-Meaning Narrative

**Files:**
- Modify: `src/data/prepositions/as/content/en.ts`
- Test: `scripts/check-as-overview.ts`

**Step 1: Keep the failing validation**

Run:

```bash
tsx scripts/check-as-overview.ts
```

Expected: FAIL until the English content and FAQ are updated.

**Step 2: Write minimal implementation**

Rewrite the English `as` data so it:

- leads with the unified “sameness + accompanying relation” explanation
- removes the old “this page only explains the preposition use” framing
- includes overview examples that span more than one use family
- expands comparison coverage to at least:
  - `as vs like`
  - `as vs because`
  - `as vs when/while`
  - `as vs although/though`
- updates collocations, mistakes, quiz, and FAQ so they reflect the overview-page position

**Step 3: Re-run the targeted validation**

Run:

```bash
tsx scripts/check-as-overview.ts
```

Expected: partial PASS or reduced failures, with remaining failures now isolated to Chinese content or SEO override gaps.

**Step 4: Sanity-check content quality**

Manually inspect the rewritten content file for:

- short extractable definition paragraphs
- natural examples
- no contradictory “preposition-only” language left behind

### Task 4: Rewrite the Chinese `as` Content for Chinese Learners

**Files:**
- Modify: `src/data/prepositions/as/content/zh-CN.ts`
- Test: `scripts/check-as-overview.ts`

**Step 1: Keep the targeted validation handy**

Run:

```bash
tsx scripts/check-as-overview.ts
```

Expected: still FAIL or remain incomplete until localized content and FAQ align with the new page strategy.

**Step 2: Write minimal implementation**

Rewrite the Chinese content so it:

- explains `as` as a “单词总览页”而不是“单一介词义页”
- turns the origin/core-meaning model into natural Chinese teaching language
- mirrors the English information architecture without sounding translated
- includes learner-friendly comparisons and traps that Chinese-speaking learners actually confuse

**Step 3: Re-run the targeted validation**

Run:

```bash
tsx scripts/check-as-overview.ts
```

Expected: PASS for FAQ/overview-related assertions that depend on shared data output.

**Step 4: Re-read the Chinese content for tone**

Check manually that:

- the text is concise
- the explanation reads like a teacher, not a glossary
- “词源” is framed as a learning model, not overstated as strict historical proof

### Task 5: Add Dedicated SEO Overrides for `as`

**Files:**
- Modify: `src/lib/prepositionSeo.ts`
- Test: `scripts/check-as-overview.ts`

**Step 1: Keep the validation script as the guardrail**

Run:

```bash
tsx scripts/check-as-overview.ts
```

Expected: FAIL until the generated title/description stop using the old abstract-template phrasing.

**Step 2: Write minimal implementation**

In `src/lib/prepositionSeo.ts`:

- add a dedicated English SEO override for `as`
- add a dedicated Chinese SEO override for `as`
- ensure the title and description emphasize:
  - connected uses
  - comparison / role / time / reason (and concession if it fits cleanly)
- avoid keyword stuffing and keep the copy readable

**Step 3: Re-run the targeted validation**

Run:

```bash
tsx scripts/check-as-overview.ts
```

Expected: PASS.

**Step 4: Verify metadata consistency manually**

Check that the SEO override narrative does not contradict the page’s first visible explanation.

### Task 6: Final Verification and Progress Update

**Files:**
- Modify: `docs/PROGRESS.md`
- Reference: `docs/PRD.md`
- Reference: `docs/plans/2026-03-30-as-overview-design.md`

**Step 1: Run the final checks**

Run:

```bash
tsx scripts/check-as-overview.ts
npm run check:prepositions
npm run lint
```

Expected: all PASS.

**Step 2: Verify the SSR/metadata output**

Run:

```bash
curl -s http://localhost:3000/en/p/as | sed -n '1,220p'
```

Expected:

- title no longer uses the old `abstract use` wording
- description reflects the overview-page positioning
- FAQ schema aligns with the new questions

**Step 3: Update project progress**

In `docs/PROGRESS.md`:

- mark the `as` overview implementation item complete if all work is done
- keep unrelated blocked items blocked
- add any newly discovered follow-ups as unchecked items

**Step 4: Self-check against PRD**

Confirm the finished work satisfies:

- beginner-friendly explanation
- bilingual dictionary-driven content
- SEO-strengthened detail-page content
- minimal, extensible component changes

**Step 5: Commit**

```bash
git add docs/PROGRESS.md docs/plans/2026-03-30-as-overview-design.md docs/plans/2026-03-30-as-overview.md scripts/check-as-overview.ts src/components/PrepositionMeaningMap.tsx src/components/PrepositionDetail.tsx src/data/prepositions/as/content/en.ts src/data/prepositions/as/content/zh-CN.ts src/lib/prepositionSeo.ts
git commit -m "feat: upgrade as page to overview format"
```
