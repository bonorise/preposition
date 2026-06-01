# due to Page Optimization Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a bilingual `due to` page update with a minimal 3D cause-to-result infographic, accurate comparison content, and a dedicated decision tree.

**Architecture:** Extend the existing data-driven scene model instead of adding a one-off renderer. `abstractDiagram` nodes will support a cube shape, and `due-to` will use that shape for the abstract scene while content and decision logic stay in the existing data/component modules.

**Tech Stack:** Next.js App Router, React, TypeScript, Three.js, Tailwind CSS, existing preposition data modules.

---

### Task 1: Add Failing Type And Render Coverage For Cube Diagram Nodes

**Files:**
- Modify: `src/data/types.ts`
- Modify: `src/components/PrepositionViewer3D.tsx`
- Test: `scripts/check-due-to-page.ts`

**Step 1: Create a focused check script**

Create `scripts/check-due-to-page.ts` with assertions that:

- `due-to` abstract scene has `abstractDiagram.nodes` with `shape === "cube"` for cause and result.
- Labels are `cause` and `result` in both locales.
- There is an arrow from `cause` to `result`.

Suggested script:

```ts
import assert from "node:assert/strict";
import { getPrepositionById } from "../src/data/prepositions";

const entry = getPrepositionById("due-to");
assert(entry, "due-to entry should exist");

const scene = entry.scenesByCategory?.abstract ?? entry.scene;
const diagram = scene.abstractDiagram;
assert(diagram, "due-to abstract scene should use abstractDiagram");

const cause = diagram.nodes.find((node) => node.id === "cause");
const result = diagram.nodes.find((node) => node.id === "result");
assert(cause, "cause node should exist");
assert(result, "result node should exist");
assert.equal(cause.shape, "cube");
assert.equal(result.shape, "cube");
assert.equal(cause.label?.en, "cause");
assert.equal(cause.label?.["zh-CN"], "cause");
assert.equal(result.label?.en, "result");
assert.equal(result.label?.["zh-CN"], "result");
assert(diagram.arrows.some((arrow) => arrow.from === "cause" && arrow.to === "result"));
```

**Step 2: Run the check and verify it fails**

Run:

```bash
npx tsx scripts/check-due-to-page.ts
```

Expected: FAIL because `shape` is not typed or not present yet.

**Step 3: Extend diagram node typing**

In `src/data/types.ts`, update `AbstractDiagramNode`:

```ts
export type AbstractDiagramNode = {
  id: string;
  position: [number, number, number];
  radius?: number;
  size?: number;
  shape?: "circle" | "cube";
  fillColor?: string;
  label?: Partial<Record<Locale, string>>;
};
```

**Step 4: Render cube-shaped nodes**

In `buildAbstractDiagramGroup` in `src/components/PrepositionViewer3D.tsx`, branch on `node.shape`.

For `shape === "cube"`:

- Create a `THREE.BoxGeometry(size, size, size)`.
- Add a transparent `MeshStandardMaterial` face mesh with low opacity.
- Add `THREE.EdgesGeometry` + `THREE.LineSegments`.
- Use the existing gray line color and soft fill.
- Push all geometries/materials into cleanup arrays.

Keep the existing circle rendering as the default for old data.

**Step 5: Run the check**

Run:

```bash
npx tsx scripts/check-due-to-page.ts
```

Expected: still FAIL until `due-to/scene.ts` is updated.

### Task 2: Replace due-to Abstract Scene With Cause-To-Result Cube Infographic

**Files:**
- Modify: `src/data/prepositions/due-to/scene.ts`
- Test: `scripts/check-due-to-page.ts`

**Step 1: Update the abstract scene**

Modify `src/data/prepositions/due-to/scene.ts` so `scenesByCategory.abstract` uses:

- `camera.position: [0.25, 0.35, 4.6]`
- `camera.target: [0, 0, 0]`
- `render.showGround: false`
- `ball.radius: 0.08`
- `abstractDiagram.nodes`: cause at `[-1.05, 0.12, 0]`, result at `[1.05, 0.12, 0]`
- `shape: "cube"`
- `size: 0.68`
- labels `cause` and `result` in both locales
- arrow from `cause` to `result`

**Step 2: Run the scene check**

Run:

```bash
npx tsx scripts/check-due-to-page.ts
```

Expected: PASS.

### Task 3: Rewrite Bilingual due-to Comparison Content

**Files:**
- Modify: `src/data/prepositions/due-to/content/zh-CN.ts`
- Modify: `src/data/prepositions/due-to/content/en.ts`
- Test: `scripts/check-due-to-page.ts`

**Step 1: Extend the check script**

Add assertions that the comparison terms are exactly:

```ts
["because of", "because", "according to"]
```

Check both English and Chinese localized comparison data.

**Step 2: Run and verify failure**

Run:

```bash
npx tsx scripts/check-due-to-page.ts
```

Expected: FAIL because current comparison lacks `because`.

**Step 3: Update Chinese content**

In `src/data/prepositions/due-to/content/zh-CN.ts`:

- Tighten `meaning` around “原因导致结果 / 由……造成”。
- Keep tips focused on noun phrase, formal tone, and `because + clause`.
- Rewrite `comparison.summary`.
- Replace differences with `because of`、`because`、`according to`.

**Step 4: Update English content**

Mirror the same semantic axis in `src/data/prepositions/due-to/content/en.ts`.

**Step 5: Run the content check**

Run:

```bash
npx tsx scripts/check-due-to-page.ts
```

Expected: PASS.

### Task 4: Add Dedicated due-to Decision Tree

**Files:**
- Modify: `src/components/PrepositionDecisionTree.tsx`
- Test: `scripts/check-due-to-page.ts`

**Step 1: Extend the check script**

Add a source-text assertion that `PrepositionDecisionTree.tsx` contains a `word === "due to"` branch and includes:

- `noun phrase`
- `because`
- `because of`
- `according to`
- `due date`

**Step 2: Run and verify failure**

Run:

```bash
npx tsx scripts/check-due-to-page.ts
```

Expected: FAIL because the dedicated branch does not exist yet.

**Step 3: Add the branch**

Insert the `word === "due to" && !isDynamic` branch before the `according to` branch.

Chinese questions:

```ts
questions.push({
  question: "后面是名词词组，表示导致结果的原因吗？",
  answer: "是 -> 用 due to，表示“由于…… / 由……造成”。",
});
questions.push({
  question: "后面是完整句子，比如 it rained / the system failed 吗？",
  answer: "是 -> 用 because；due to 后面通常接名词词组。",
});
questions.push({
  question: "你想要更口语、更普通的原因表达吗？",
  answer: "是 -> because of 也常用；due to 往往稍正式、更书面。",
});
questions.push({
  question: "后面是报告、数据、规则或某人的说法等信息来源吗？",
  answer: "是 -> 用 according to，不用 due to。",
});
questions.push({
  question: "你表达的是“到期 / 预定应做”，如 due date 或 be due to do 吗？",
  answer: "是 -> 这是 due 的另一类用法，不是本页的 due to + 名词词组因果用法。",
});
```

English questions should mirror the same logic.

**Step 4: Run the check**

Run:

```bash
npx tsx scripts/check-due-to-page.ts
```

Expected: PASS.

### Task 5: Run Project Verification And Update Progress

**Files:**
- Modify: `docs/PROGRESS.md`

**Step 1: Run checks**

Run:

```bash
npx tsx scripts/check-due-to-page.ts
npm run lint
npm run build
```

Expected: all commands pass.

**Step 2: Update progress**

In `docs/PROGRESS.md`, add a completed item under `Meta｜流程与文档` or the relevant content section:

```md
- [x] 优化 due to 词条：新增 cause -> result 双立方体抽象示意图，重写中英文差异解析，并加入专属决策树。（2026-06-01）
```

Keep unfinished items as `[ ]` and preserve their blocking reason sentence.

**Step 3: Final commit**

Run:

```bash
git add src/data/types.ts src/components/PrepositionViewer3D.tsx src/components/PrepositionDecisionTree.tsx src/data/prepositions/due-to/scene.ts src/data/prepositions/due-to/content/zh-CN.ts src/data/prepositions/due-to/content/en.ts scripts/check-due-to-page.ts docs/PROGRESS.md
git commit -m "feat: optimize due to page"
```

