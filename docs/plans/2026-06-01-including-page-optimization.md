# including Page Optimization Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Optimize the `including` page so its comparison text, decision tree, and homepage thumbnail all teach the core idea of “counted inside the whole.”

**Architecture:** Keep the change scoped to the existing data-driven page structure. Update only the `including` locale content, the `including` branch in the decision-tree component, the `including` scene data if needed, and the static thumbnail file consumed by existing homepage card logic. Do not modify shared 3D rendering components or introduce new scene variants.

**Tech Stack:** Next.js App Router, TypeScript, static SVG, existing preposition data modules, existing project QA scripts.

---

### Task 1: Update bilingual comparison content

**Files:**
- Modify: `src/data/prepositions/including/content/zh-CN.ts`
- Modify: `src/data/prepositions/including/content/en.ts`

**Step 1: Inspect current comparison shape**

Run:

```bash
sed -n '70,115p' src/data/prepositions/including/content/zh-CN.ts
sed -n '70,115p' src/data/prepositions/including/content/en.ts
```

Expected: both files contain `comparison.summary` and `comparison.differences`.

**Step 2: Replace comparison differences**

In both locale files, set the three comparison terms to:

- `apart from`
- `except for`
- `among`

Chinese summary should emphasize “点名某项，并明确算进整体”。 English summary should emphasize “names an item and counts it inside the whole.”

Use examples like:

```ts
{
  term: "except for",
  description: "except for 是排除这一项；including 是把这一项也算进去。",
  examples: [
    {
      term: "except for",
      sentence: "Everyone paid except for Leo.",
      translation: "除了 Leo 没付，其他人都付了。"
    },
    {
      term: "including",
      sentence: "Everyone paid, including Leo.",
      translation: "大家都付了，包括 Leo。"
    }
  ]
}
```

**Step 3: Run TypeScript/content validation**

Run:

```bash
npm run lint
npm run build
```

Expected: both commands pass.

**Step 4: Commit**

```bash
git add src/data/prepositions/including/content/zh-CN.ts src/data/prepositions/including/content/en.ts
git commit -m "fix: refine including comparison content"
```

### Task 2: Add an including-specific decision tree

**Files:**
- Modify: `src/components/PrepositionDecisionTree.tsx`

**Step 1: Locate the current special-case branches**

Run:

```bash
rg -n "word === \"apart from\"|word === \"according to\"|Generic fallback" src/components/PrepositionDecisionTree.tsx
```

Expected: the file has special branches before the generic fallback.

**Step 2: Add `including` branch before generic fallback**

Insert a branch near the other abstract-preposition special cases:

```ts
  } else if (word === "including" && !isDynamic) {
    if (activeLocale === "zh-CN") {
      questions.push({
        question: "这项是否被算进总数、费用、名单或范围？",
        answer: "是 -> 用 including；它表示这项已经在整体里面。",
      });
      questions.push({
        question: "你是否在点名举出整体中的一个成员、例子或附加项目？",
        answer: "是 -> 用 including，如 five people, including Leo。",
      });
      questions.push({
        question: "你是否想表达“除了这项不算 / 排除这项”？",
        answer: "是 -> 用 except for 或 apart from，不用 including。",
      });
      questions.push({
        question: "你只是说某人或某物处在一群之中吗？",
        answer: "是 -> 用 among；including 强调列名并计入整体。",
      });
      questions.push({
        question: "including 后面是否误加了 of？",
        answer: "不要加 of；直接说 including tax / including lunch。",
      });
    } else {
      questions.push({
        question: "Is this item counted inside a total, fee, list, or range?",
        answer: "Yes -> use including; the item is already inside the whole.",
      });
      questions.push({
        question: "Are you naming one member, example, or extra item inside the whole?",
        answer: "Yes -> use including, as in five people, including Leo.",
      });
      questions.push({
        question: "Do you mean this item is excluded or not counted?",
        answer: "Yes -> use except for or apart from, not including.",
      });
      questions.push({
        question: "Do you only mean someone or something is in the middle of a group?",
        answer: "Yes -> use among; including highlights named membership in the whole.",
      });
      questions.push({
        question: "Did you add of after including?",
        answer: "Remove of; say including tax / including lunch.",
      });
    }
```

**Step 3: Add or update a focused check**

If an existing behavior test covers decision tree special cases, add `including` there. If not, add a lightweight test beside existing component tests that renders `PrepositionDecisionTree` with the `including` entry and asserts the Chinese text includes `算进总数` and does not include the generic `物体是否接触某个表面`.

**Step 4: Run tests**

Run:

```bash
npm test -- --runInBand
```

If the project does not provide that test command, run:

```bash
npm run build
```

Expected: tests or build pass.

**Step 5: Commit**

```bash
git add src/components/PrepositionDecisionTree.tsx
git commit -m "fix: add including decision tree"
```

### Task 3: Create the including thumbnail SVG

**Files:**
- Create or Modify: `public/thumbnails/including.svg`

**Step 1: Confirm card lookup convention**

Run:

```bash
sed -n '28,48p' src/components/PrepositionCard.tsx
```

Expected: default thumbnail path is `/thumbnails/${entry.id}.svg`.

**Step 2: Create static SVG**

Write `public/thumbnails/including.svg` as a 120x120 white-background SVG:

- large transparent wireframe cube container
- 3 small semi-transparent gray cubes inside
- 1 small purple cube inside
- no people, no decorations, no complex background

Keep the purple cube visibly inside the large container, not outside the boundary.

**Step 3: Visual check**

Run:

```bash
npm run dev
```

Open the homepage and inspect the `including` card. Also inspect `/zh-CN/p/including`.

Expected: homepage thumbnail clearly communicates “included inside the group.”

**Step 4: Commit**

```bash
git add public/thumbnails/including.svg
git commit -m "fix: add including thumbnail"
```

### Task 4: Optional including scene data adjustment

**Files:**
- Modify if needed: `src/data/prepositions/including/scene.ts`

**Step 1: Inspect current scene**

Run:

```bash
sed -n '1,120p' src/data/prepositions/including/scene.ts
```

Expected: current scene uses existing `ringCubes` or another supported variant.

**Step 2: Adjust only data parameters if the 3D scene reads as outside**

Allowed changes:

- `ball.position`
- `camera.position`
- `camera.target`
- `highlightedCubeIndex`
- `render.showGround`

Forbidden changes:

- no new `SceneVariant`
- no changes to `PrepositionViewer3D`
- no changes to shared rendering logic

**Step 3: Run build**

Run:

```bash
npm run build
```

Expected: build passes.

**Step 4: Commit if changed**

```bash
git add src/data/prepositions/including/scene.ts
git commit -m "fix: tune including scene"
```

### Task 5: Update progress and final validation

**Files:**
- Modify: `docs/PROGRESS.md`

**Step 1: Re-read PRD**

Run:

```bash
sed -n '1,220p' docs/PRD.md
```

Record the relevant sections in the final response:

- `0. 背景与目标`
- `2.2 页面信息架构`
- `3.2 3D 视觉`
- `4. 文本与例句规范`
- `5. 多语言架构`

**Step 2: Update progress**

Add a completed item under `Meta｜流程与文档` or the content optimization area:

```markdown
- [x] 优化 including 词条：重写差异解析、增加专属决策树，并更新首页卡片封面为“整体容器内包含对象”的 SVG 视觉。（2026-06-01）
```

If any intended part is not completed, keep it unchecked and add a one-sentence blocker.

**Step 3: Run final checks**

Run:

```bash
npm run lint
npm run build
git status --short
```

Expected: lint/build pass; only intended files are changed before final commit.

**Step 4: Commit**

```bash
git add docs/PROGRESS.md
git commit -m "docs: update including optimization progress"
```

**Final response requirements:**

- 完成/未完成结论
- 本次对应 PRD 条目
- 验收标准自检
- 变更文件列表
- 需要用户人工确认的点

