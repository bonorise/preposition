# apart from Page Optimization Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 优化 `/p/apart-from` 的中英文教学内容、决策树逻辑、差异解析、常见错误、3D 示意图和首页封面缩略图。

**Architecture:** 保留现有详情页结构。内容仍由 `src/data/prepositions/apart-from/content/*` 提供；决策树在 `PrepositionDecisionTree` 中为 `apart from` 增加专属分支；视觉层在现有 `ringCubes` 场景上增加可选高亮立方体配置，并让页面 3D 与 SVG 缩略图共用该配置。

**Tech Stack:** Next.js 16, React 19, TypeScript, Three.js, node:test, tsx scripts.

---

### Task 1: Add apart from Behavior Tests

**Files:**
- Modify: `src/components/PrepositionSinceBehavior.test.tsx`

**Step 1: Write failing tests**

Append tests that assert `apart from` has a custom decision tree and three comparison items.

```tsx
function getApartFromEntry() {
  const entry = getPrepositionById("apart-from");
  assert.ok(entry, "apart-from entry should exist");
  return entry;
}

test("apart from decision tree starts from separation and exclusion in Chinese", () => {
  const entry = getApartFromEntry();
  const markup = renderToStaticMarkup(
    <PrepositionDecisionTree entry={entry} locale="zh-CN" />,
  );

  assert.match(markup, /从整体里拿出来|分离/);
  assert.match(markup, /排除义|排除/);
  assert.match(markup, /including/);
  assert.doesNotMatch(markup, /物体是否接触某个表面/);
});

test("apart from decision tree starts from separation and exclusion in English", () => {
  const entry = getApartFromEntry();
  const markup = renderToStaticMarkup(
    <PrepositionDecisionTree entry={entry} locale="en" />,
  );

  assert.match(markup, /separated from the main group|take one item out/i);
  assert.match(markup, /exclude|exclusion/i);
  assert.match(markup, /including/i);
  assert.doesNotMatch(markup, /touching a surface/i);
});

test("apart from comparison has three representative differences", () => {
  const entry = getApartFromEntry();

  assert.equal(entry.comparison?.i18n.en.differences.length, 3);
  assert.equal(entry.comparison?.i18n["zh-CN"].differences.length, 3);
  assert.deepEqual(
    entry.comparison?.i18n.en.differences.map((item) => item.term),
    ["except for", "including", "besides / in addition to"],
  );
});
```

**Step 2: Run tests to verify failure**

Run:

```bash
npx tsx --test src/components/PrepositionSinceBehavior.test.tsx
```

Expected: FAIL because `apart from` still uses the generic decision tree and comparison length is 2.

**Step 3: Commit test scaffold only if desired**

No commit is required before implementation unless the working tree needs a checkpoint.

---

### Task 2: Update apart from Content

**Files:**
- Modify: `src/data/prepositions/apart-from/content/en.ts`
- Modify: `src/data/prepositions/apart-from/content/zh-CN.ts`

**Step 1: Update top meaning and tips**

Chinese meaning should use the provided etymological memory cue without overstating it as formal etymology:

```ts
meaning:
  "apart from：核心画面是“从整体中分离出来”。可以把 a 记成方向/箭头，part 记成分开、分离，from 记成“从……”，合起来就是“从某处或某个整体中分离”。把某个因素分离出去时，就是“除了……之外”。",
cardMeaning: "apart from：从整体中分离出来；除了……之外。",
tips: [
  "先抓核心：把某一项从整体中单独拿出来看。",
  "最常见是排除义：apart from one detail = 除了一个细节外。",
  "有些句子是补充义，接近 besides / in addition to，要靠上下文判断。",
],
```

English equivalent:

```ts
meaning:
  "apart from: the core image is one item separated from a source or group. In use, it often means except for, and in some contexts besides / in addition to.",
cardMeaning: "apart from: separated from the group; except for.",
tips: [
  "Start with the image: one item is taken out from the main group.",
  "The most common use is exclusion: apart from one detail = except for one detail.",
  "Sometimes it adds information, close to besides / in addition to, so context matters.",
],
```

**Step 2: Replace comparison summaries and differences**

Both locales must have exactly 3 differences:

- `except for`
- `including`
- `besides / in addition to`

Each difference needs 2 contrast examples. The `including` examples must clearly show opposite set direction.

**Step 3: Replace common mistakes**

Use these three representative beginner mistakes in both locales:

- Wrong fixed phrase: `Apart from of the price, it is perfect.`
- Exclusion confused with inclusion: `Including Sara, everyone agreed.`
- Addition sense misunderstood as exclusion: `Apart from English, she speaks Korean.` explained as “English is excluded” is wrong; correct interpretation is “she speaks English and Korean” when context is additive.

**Step 4: Run content QA**

Run:

```bash
npm run qa:content
npm run check:prepositions
```

Expected: PASS.

---

### Task 3: Add apart from Decision Tree Branch

**Files:**
- Modify: `src/components/PrepositionDecisionTree.tsx`

**Step 1: Add branch before generic abstract/spatial fallback**

Insert a `word === "apart from" && !isDynamic` branch before the generic `looksTemporal`, `isDynamic`, and fallback branches.

Chinese questions:

```ts
questions.push({
  question: "句子是否在把某一项从整体里拿出来、单独分离看待？",
  answer: "是 -> 继续判断：它通常就是 apart from 的核心画面。",
});
questions.push({
  question: "拿出来之后，其他部分是否仍成立？",
  answer: "是 -> 用排除义 apart from，接近 except for。",
});
questions.push({
  question: "句子是在说“除了 A，还 B”，也就是补充添加信息吗？",
  answer: "是 -> apart from 可用，但 besides / in addition to 往往更清楚。",
});
questions.push({
  question: "这是物理空间上的分开、隔开吗？",
  answer: "是 -> apart from 也可表示分离位置，如 keep A apart from B。",
});
questions.push({
  question: "你其实是把某项算进整体吗？",
  answer: "是 -> 用 including；including 的方向和 apart from 的排除义相反。",
});
```

English questions:

```ts
questions.push({
  question: "Is one item being taken out from the main group or situation?",
  answer: "Yes -> this is the core image of apart from.",
});
questions.push({
  question: "After that item is separated, is the rest still true?",
  answer: "Yes -> use the exclusion meaning of apart from, close to except for.",
});
questions.push({
  question: "Does the sentence mean besides A, also B?",
  answer: "Yes -> apart from can work, but besides / in addition to is often clearer.",
});
questions.push({
  question: "Is it physical separation in space?",
  answer: "Yes -> apart from also works for separation, as in keep A apart from B.",
});
questions.push({
  question: "Are you counting the item inside the group?",
  answer: "Yes -> use including; it points in the opposite direction from exclusion.",
});
```

**Step 2: Run focused tests**

Run:

```bash
npx tsx --test src/components/PrepositionSinceBehavior.test.tsx
```

Expected: PASS for decision tree assertions after Task 2 and Task 3 are complete.

---

### Task 4: Extend Scene Config for Highlighted Ring Cube

**Files:**
- Modify: `src/data/types.ts`
- Modify: `src/data/prepositions/apart-from/scene.ts`
- Modify: `src/components/PrepositionViewer3D.tsx`

**Step 1: Add optional scene highlight type**

In `SceneConfig`, add:

```ts
highlightedCubeIndex?: number;
```

This should be optional and used only by multi-cube variants.

**Step 2: Update apart-from scene**

Keep `variant: "ringCubes"`, set the highlighted cube index, and place the ball on the highlighted cube surface. With current ring offsets, index `0` is centered at `[1.1, 0, 0]`; for cube size `1` and ball radius `0.22`, a surface-touching ball center can be:

```ts
ball: {
  radius: 0.22,
  position: [1.82, 0, 0],
},
highlightedCubeIndex: 0,
camera: {
  position: [3.0, 1.8, 2.4],
  target: [0.45, 0, 0],
  fov: 42,
},
```

**Step 3: Update 3D cube rendering**

In `buildCubeGroup`, use `offsets.forEach((offset, index) => ...)` and choose a separate face material when `index === scene.highlightedCubeIndex`.

Highlighted material:

```ts
const highlightedFaceMaterial = new THREE.MeshStandardMaterial({
  color: ballColor,
  transparent: true,
  opacity: wireframeStyle === "edges+faces" ? 0.28 : 0,
  roughness: 0.82,
  metalness: 0,
});
```

Add it to `materials` so cleanup disposes it.

**Step 4: Run type/build validation**

Run:

```bash
npm run lint
npm run build
```

Expected: PASS.

---

### Task 5: Update SVG Thumbnail Generation

**Files:**
- Modify: `scripts/generate-thumbnails.ts`
- Generated: `public/thumbnails/apart-from.svg`
- Generated: `public/thumbnails/apart-from--space.svg`
- Generated if script creates it: `public/thumbnails/apart-from--abstract.svg`

**Step 1: Render highlighted cube faces in SVG**

In `buildSpatialSvg`, when iterating cubes, detect:

```ts
const isHighlightedCube = cubeIndex === scene.highlightedCubeIndex;
```

Before edge groups, render visible face polygons for highlighted cube with `BALL_COLOR`, low opacity, and sorted behind/in front of the ball by depth if needed. Minimal acceptable SVG behavior: draw highlighted cube face polygons before the ball and before front edges, then draw edges on top.

**Step 2: Generate thumbnails**

Run:

```bash
npm run generate:thumbnails
```

Expected: script completes and rewrites thumbnails.

**Step 3: Inspect apart from SVG**

Run:

```bash
rg -n "#7c3aed|polygon|circle" public/thumbnails/apart-from.svg public/thumbnails/apart-from--space.svg
```

Expected: both files contain the purple ball circle and at least one purple highlighted cube polygon.

---

### Task 6: PRD, Progress, and Final QA

**Files:**
- Read: `docs/PRD.md`
- Modify: `docs/PROGRESS.md`

**Step 1: Read PRD and identify matching requirements**

Run:

```bash
rg -n "示意图|3D|立方体|球体|常见错误|详情页|介词详情|缩略图|首页" docs/PRD.md
```

Record the relevant headings for the final response.

**Step 2: Update progress**

Append one completed checkbox in `docs/PROGRESS.md`, for example:

```md
- [x] 优化 apart from 词条：重写核心释义、专属决策树、3 项差异解析、代表性常见错误，并同步更新 4 立方体高亮示意图和首页封面。（2026-05-26）
```

**Step 3: Run full relevant checks**

Run:

```bash
npm run qa:content
npm run check:prepositions
npx tsx --test src/components/PrepositionSinceBehavior.test.tsx
npm run lint
npm run build
```

Expected: all PASS.

**Step 4: Review changed files**

Run:

```bash
git status --short
git diff --stat
```

Expected changed files include only apart-from content, scene/type/render/thumbnail code, generated apart-from thumbnails, tests, and `docs/PROGRESS.md`.

**Step 5: Commit implementation**

Run:

```bash
git add src/components/PrepositionSinceBehavior.test.tsx src/components/PrepositionDecisionTree.tsx src/components/PrepositionViewer3D.tsx src/data/types.ts src/data/prepositions/apart-from/content/en.ts src/data/prepositions/apart-from/content/zh-CN.ts src/data/prepositions/apart-from/scene.ts scripts/generate-thumbnails.ts public/thumbnails/apart-from*.svg docs/PROGRESS.md
git commit -m "fix: optimize apart from page content and visual"
```

Expected: commit succeeds.
