# Preposition Data Modularization Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 将 `src/data/prepositions.ts` 的单文件数据源重构为“按词条目录 + scene/content 分层”的模块化结构，同时保持页面层继续通过统一聚合入口消费 `PREPOSITIONS` 与查询 API。

**Architecture:** 先把旧数据源改名为 legacy 入口，再建立 `src/data/prepositions/` 新目录与共享装配层。重构期间通过校验脚本和聚合兼容层保证 `PrepositionEntry` 输出结构不变，先迁移样板词条验证路径，再批量迁移剩余词条，最后删除 legacy 文件并做构建回归。

**Tech Stack:** Next.js 16, TypeScript, React 19, `tsx`, ESLint, 自定义内容 QA 脚本

---

### Task 1: 建立新目录入口并为 legacy 数据让位

**Files:**
- Modify: `src/data/prepositions.ts`
- Create: `src/data/prepositions/index.ts`
- Create: `src/data/prepositions/shared/types.ts`
- Create: `src/data/prepositions/shared/assemble.ts`
- Create: `src/data/prepositions/shared/registry.ts`
- Create: `scripts/check-preposition-registry.ts`

**Step 1: Write the failing test**

```ts
import assert from "node:assert/strict";

import {
  PREPOSITIONS,
  getPrepositionById,
  getPrepositionIndex,
} from "../src/data/prepositions";

assert.ok(PREPOSITIONS.length > 0, "PREPOSITIONS should be exported");
assert.ok(getPrepositionById("in"), "getPrepositionById should still work");
assert.ok(getPrepositionIndex("in") >= 0, "getPrepositionIndex should still work");
```

**Step 2: Run test to verify it fails**

Run: `npx tsx scripts/check-preposition-registry.ts`
Expected: FAIL because `scripts/check-preposition-registry.ts` does not exist yet, and the new folder entrypoint has not been created.

**Step 3: Write minimal implementation**

```ts
// src/data/prepositions/index.ts
export { PREPOSITIONS, getPrepositionById, getPrepositionIndex, getRelatedPrepositions } from "../prepositions.legacy";
```

实现要求：

- 先把旧 `src/data/prepositions.ts` 改名为 `src/data/prepositions.legacy.ts`
- 新建 `src/data/prepositions/` 目录
- `src/data/prepositions/index.ts` 先作为兼容壳，确保现有 import 不断
- `shared/types.ts` 先定义 `PrepositionMeta`、`PrepositionSceneModule`、`LocalizedPrepositionContent`、`PrepositionModule`

**Step 4: Run test to verify it passes**

Run: `npx tsx scripts/check-preposition-registry.ts`
Expected: PASS with no output

**Step 5: Commit**

```bash
git add src/data/prepositions.legacy.ts src/data/prepositions/index.ts src/data/prepositions/shared/types.ts src/data/prepositions/shared/assemble.ts src/data/prepositions/shared/registry.ts scripts/check-preposition-registry.ts
git commit -m "refactor: scaffold modular preposition data registry"
```

### Task 2: 增加新目录结构的校验脚本

**Files:**
- Create: `scripts/check-preposition-data-structure.ts`
- Modify: `package.json`
- Create: `src/data/prepositions/in/meta.ts`
- Create: `src/data/prepositions/in/scene.ts`
- Create: `src/data/prepositions/in/content/en.ts`
- Create: `src/data/prepositions/in/content/zh-CN.ts`
- Create: `src/data/prepositions/in/index.ts`
- Verify: `src/data/i18n.ts`
- Verify: `src/data/types.ts`

**Step 1: Write the failing test**

```ts
import assert from "node:assert/strict";
import { readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = join(process.cwd(), "src/data/prepositions");
const entries = readdirSync(root, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && entry.name !== "shared");

assert.ok(entries.length > 0, "preposition directories should exist");

for (const entry of entries) {
  const dir = join(root, entry.name);
  assert.ok(existsSync(join(dir, "meta.ts")), `${entry.name} missing meta.ts`);
  assert.ok(existsSync(join(dir, "scene.ts")), `${entry.name} missing scene.ts`);
  assert.ok(existsSync(join(dir, "index.ts")), `${entry.name} missing index.ts`);
  assert.ok(existsSync(join(dir, "content", "en.ts")), `${entry.name} missing content/en.ts`);
  assert.ok(existsSync(join(dir, "content", "zh-CN.ts")), `${entry.name} missing content/zh-CN.ts`);
}
```

**Step 2: Run test to verify it fails**

Run: `npx tsx scripts/check-preposition-data-structure.ts`
Expected: FAIL because no per-word directories exist yet.

**Step 3: Write minimal implementation**

```json
{
  "scripts": {
    "check:prepositions": "tsx scripts/check-preposition-data-structure.ts"
  }
}
```

实现要求：

- 脚本先只校验目录结构与必需文件存在
- 在本任务中先补一个最小可通过的 `in` 目录骨架，供结构校验使用
- 下一任务再扩充到 `meta.id`、`relatedIds`、重复 ID 等更强校验
- 正式支持语言固定校验 `en` 和 `zh-CN`

**Step 4: Run test to verify it passes**

Run: `npm run check:prepositions`
Expected: PASS because the minimal `in` directory scaffold now satisfies the structure check.

**Step 5: Commit**

```bash
git add scripts/check-preposition-data-structure.ts package.json
git commit -m "test: add modular preposition data structure checks"
```

### Task 3: 迁移样板词条并跑通装配链路

**Files:**
- Modify: `src/data/prepositions/in/meta.ts`
- Modify: `src/data/prepositions/in/scene.ts`
- Modify: `src/data/prepositions/in/content/en.ts`
- Modify: `src/data/prepositions/in/content/zh-CN.ts`
- Modify: `src/data/prepositions/in/index.ts`
- Create: `src/data/prepositions/on/meta.ts`
- Create: `src/data/prepositions/on/scene.ts`
- Create: `src/data/prepositions/on/content/en.ts`
- Create: `src/data/prepositions/on/content/zh-CN.ts`
- Create: `src/data/prepositions/on/index.ts`
- Create: `src/data/prepositions/under/meta.ts`
- Create: `src/data/prepositions/under/scene.ts`
- Create: `src/data/prepositions/under/content/en.ts`
- Create: `src/data/prepositions/under/content/zh-CN.ts`
- Create: `src/data/prepositions/under/index.ts`
- Modify: `src/data/prepositions/shared/assemble.ts`
- Modify: `src/data/prepositions/shared/registry.ts`
- Create: `scripts/check-preposition-registry.ts`

**Step 1: Write the failing test**

```ts
import assert from "node:assert/strict";

import { PREPOSITIONS, getPrepositionById } from "../src/data/prepositions";

for (const id of ["in", "on", "under"]) {
  const entry = getPrepositionById(id);
  assert.ok(entry, `${id} should exist`);
  assert.ok(entry?.i18n.en?.meaning, `${id} should expose English meaning`);
  assert.ok(entry?.i18n["zh-CN"]?.meaning, `${id} should expose Chinese meaning`);
  assert.ok(entry?.scene, `${id} should expose scene config`);
}

assert.ok(PREPOSITIONS.length >= 3, "registry should expose migrated entries");
```

**Step 2: Run test to verify it fails**

Run: `npx tsx scripts/check-preposition-registry.ts`
Expected: FAIL because the sample word modules and assembler are not wired up yet.

**Step 3: Write minimal implementation**

```ts
// src/data/prepositions/in/index.ts
import { meta } from "./meta";
import { scene } from "./scene";
import en from "./content/en";
import zhCN from "./content/zh-CN";

export const inModule = {
  meta,
  scene,
  content: {
    en,
    "zh-CN": zhCN,
  },
};
```

实现要求：

- `assemble.ts` 负责把模块装配回现有 `PrepositionEntry`
- 样板词条要完整迁移，不只迁移 `meaning`
- `shared/registry.ts` 先只注册样板词条
- 允许暂时继续从 legacy 文件读取未迁移词条，但不能影响样板词条输出

**Step 4: Run test to verify it passes**

Run: `npx tsx scripts/check-preposition-registry.ts`
Expected: PASS with no output

**Step 5: Commit**

```bash
git add src/data/prepositions/in src/data/prepositions/on src/data/prepositions/under src/data/prepositions/shared/assemble.ts src/data/prepositions/shared/registry.ts scripts/check-preposition-registry.ts
git commit -m "refactor: migrate sample preposition modules"
```

### Task 4: 扩展校验到内容完整性与引用完整性

**Files:**
- Modify: `scripts/check-preposition-data-structure.ts`
- Verify: `src/data/prepositions/shared/registry.ts`
- Verify: `src/data/prepositions/shared/types.ts`

**Step 1: Write the failing test**

```ts
import assert from "node:assert/strict";

import { PREPOSITIONS } from "../src/data/prepositions";

const ids = new Set<string>();
for (const entry of PREPOSITIONS) {
  assert.ok(!ids.has(entry.id), `duplicate id: ${entry.id}`);
  ids.add(entry.id);
  assert.ok(entry.i18n.en?.meaning, `${entry.id} missing en meaning`);
  assert.ok(entry.i18n["zh-CN"]?.meaning, `${entry.id} missing zh-CN meaning`);
  assert.ok(entry.examples.length > 0, `${entry.id} missing examples`);
  for (const relatedId of entry.relatedIds) {
    assert.ok(PREPOSITIONS.some((candidate) => candidate.id === relatedId), `${entry.id} has broken relatedId ${relatedId}`);
  }
}
```

**Step 2: Run test to verify it fails**

Run: `npm run check:prepositions`
Expected: FAIL because the script currently only checks file existence, not content integrity.

**Step 3: Write minimal implementation**

```ts
// extend structure checks
// 1. import assembled PREPOSITIONS
// 2. verify duplicate IDs
// 3. verify required locales
// 4. verify examples
// 5. verify relatedIds resolve
```

实现要求：

- 校验脚本必须直接对装配后的 `PREPOSITIONS` 做一次完整遍历
- 缺失正式支持语言时直接退出非零状态
- 对 broken `relatedIds` 直接报错，不自动忽略

**Step 4: Run test to verify it passes**

Run: `npm run check:prepositions`
Expected: PASS after sample words and remaining registry wiring满足校验要求

**Step 5: Commit**

```bash
git add scripts/check-preposition-data-structure.ts
git commit -m "test: verify modular preposition content integrity"
```

### Task 5: 批量迁移剩余词条并替换聚合实现

**Files:**
- Create: `src/data/prepositions/<word>/**` for all remaining prepositions
- Modify: `src/data/prepositions/shared/registry.ts`
- Modify: `src/data/prepositions/index.ts`
- Verify: `src/components/SpatialPlayground.tsx`
- Verify: `src/app/[locale]/page.tsx`
- Verify: `src/app/[locale]/p/[id]/page.tsx`
- Verify: `src/lib/search.ts`

**Step 1: Write the failing test**

```ts
import assert from "node:assert/strict";

import { PREPOSITIONS, getPrepositionById } from "../src/data/prepositions";

assert.equal(PREPOSITIONS.length, 51, "all legacy prepositions should be present after migration");

for (const id of ["about", "through", "across-from", "in-front-of", "without"]) {
  assert.ok(getPrepositionById(id), `${id} should still be resolvable`);
}
```

**Step 2: Run test to verify it fails**

Run: `npx tsx scripts/check-preposition-registry.ts`
Expected: FAIL until all remaining word modules are registered and assembled.

**Step 3: Write minimal implementation**

```ts
// src/data/prepositions/shared/registry.ts
export const PREPOSITION_MODULES = [
  inModule,
  onModule,
  underModule,
  // ...all remaining modules
];

export const PREPOSITIONS = PREPOSITION_MODULES.map(assemblePreposition);
```

实现要求：

- 使用批量迁移，但迁移后目录名必须与 `id` 一致
- 未迁移词条不得继续偷偷依赖 legacy 文件
- `index.ts` 最终只从新目录装配导出，不再回退到 legacy

**Step 4: Run test to verify it passes**

Run: `npx tsx scripts/check-preposition-registry.ts`
Expected: PASS with no output

**Step 5: Commit**

```bash
git add src/data/prepositions
git commit -m "refactor: migrate remaining preposition data modules"
```

### Task 6: 删除 legacy 数据源并做全量回归

**Files:**
- Delete: `src/data/prepositions.legacy.ts`
- Verify: `scripts/qa-content.ts`
- Verify: `package.json`

**Step 1: Write the failing test**

```bash
npm run check:prepositions && npm run qa:content && npm run build
```

**Step 2: Run test to verify it fails**

Run: `npm run check:prepositions && npm run qa:content && npm run build`
Expected: At least one command fails before final cleanup because the new registry is not yet the sole source of truth.

**Step 3: Write minimal implementation**

```ts
// delete legacy file
// ensure all imports resolve through src/data/prepositions/index.ts
// remove any remaining temporary compatibility branches
```

实现要求：

- `src/data/prepositions/index.ts` 成为唯一真源入口
- `check:prepositions`、`qa:content`、`build` 全部通过
- 若需要，补一条 README 或开发说明，说明新增词条的目录规范

**Step 4: Run test to verify it passes**

Run: `npm run check:prepositions`
Expected: PASS

Run: `npm run qa:content`
Expected: PASS

Run: `npm run build`
Expected: PASS

**Step 5: Commit**

```bash
git add -A
git commit -m "refactor: finalize modular preposition data source"
```

### Task 7: 回写项目文档与进度

**Files:**
- Modify: `docs/PROGRESS.md`
- Modify: `README.md`
- Verify: `docs/plans/2026-03-22-preposition-data-modularization-design.md`

**Step 1: Write the failing test**

```md
- [ ] 介词数据目录化
- [ ] 数据校验脚本
- [ ] 聚合层兼容切换
```

**Step 2: Run test to verify it fails**

Run: `rg -n "介词数据目录化|数据校验脚本|聚合层兼容切换" docs/PROGRESS.md README.md`
Expected: FAIL or no matches before documentation is updated.

**Step 3: Write minimal implementation**

```md
- [x] 介词数据目录化：按词条拆分 meta / scene / content
- [x] 聚合层兼容：保持 PREPOSITIONS 与查询 API 不变
- [x] 数据校验脚本：检查目录、语言文件与 relatedIds 完整性
```

实现要求：

- `docs/PROGRESS.md` 要与本次重构真实完成情况一致
- `README.md` 要补“新增词条如何建目录”的最短说明
- 设计文档与实现结果要能对照得上

**Step 4: Run test to verify it passes**

Run: `rg -n "介词数据目录化|数据校验脚本|聚合层兼容切换" docs/PROGRESS.md README.md`
Expected: PASS with matching lines

**Step 5: Commit**

```bash
git add docs/PROGRESS.md README.md
git commit -m "docs: document modular preposition data workflow"
```
