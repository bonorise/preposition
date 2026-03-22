# 介词数据模块化重构设计

日期：2026-03-22
状态：已确认

## 1. 背景

当前项目已经把 UI 文案和静态页面内容拆到独立文件：

- `src/data/i18n.ts` 负责 UI 文案与 locale 配置
- `src/data/staticPages.ts` 负责 about / privacy / terms / contact 等静态页内容

但介词详情数据仍集中在 `src/data/prepositions.ts` 单文件中。该文件当前已经超过 16000 行，同时承载以下多种职责：

- 词条基础信息：`id`、`word`、`tags`、`relatedIds`
- 3D/时间轴/动画参数：`scene`、`scenesByCategory`
- 多语言文本：`meaning`、`tips`
- 学习内容：`examples`、`comparison`、`collocations`、`commonMistakes`、`quiz`、`faq`
- 聚合与查询逻辑：`PREPOSITIONS`、`getPrepositionById`、`getRelatedPrepositions`

这种结构在当前规模还能运行，但已经开始拖累后续扩展，尤其是：

1. 单文件持续膨胀，不利于维护与审校
2. 新增语言时，文本和 3D 场景参数耦合在一起
3. 多人协作时，冲突集中在同一文件
4. 后续若扩到 5 种以上语言，单词条内容也会越来越臃肿
5. 未来接入脚本生成、翻译协作或后台化时，结构不够清晰

## 2. 对应 PRD 条目

本次设计直接对应以下需求：

- `5.1 文案与释义必须字典化`
- `5.2 数据结构必须支持多语言`
- `7.2 目录结构建议`
- `7.3 关键工程约束`
  - 数据驱动
  - 可扩展
  - 新增介词只改数据，不改渲染逻辑

## 3. 设计目标

### 3.1 目标

1. 将介词数据改为“按词条组织”，避免继续依赖单一超大文件
2. 把 3D 场景参数与多语言文本内容解耦
3. 保留对外统一的 `PREPOSITIONS` 与查询 API，尽量不影响页面层
4. 让新增语言只需补 `content/<locale>.ts`，不必碰 `scene.ts`
5. 为未来的按语言加载、脚本校验、CMS 接入预留清晰边界

### 3.2 非目标

本次重构不包含以下内容：

1. 不改变详情页 UI 结构
2. 不引入 CMS 或数据库
3. 不在本次同步实现按 locale 动态懒加载
4. 不重新设计 `PrepositionEntry` 的页面消费方式

## 4. 方案结论

采用“一个词条一个目录，`meta / scene / content` 分层”的组织方式。

推荐目录如下：

```text
src/data/prepositions/
  shared/
    assemble.ts
    fallbacks.ts
    registry.ts
    types.ts
  in/
    meta.ts
    scene.ts
    content/
      en.ts
      zh-CN.ts
    index.ts
  on/
    meta.ts
    scene.ts
    content/
      en.ts
      zh-CN.ts
    index.ts
  under/
    ...
  index.ts
```

## 5. 模块边界

### 5.1 `meta.ts`

只放跨语言共享、且不属于 3D 的基础字段：

- `id`
- `word`
- `tags`
- `sense`
- `relatedIds`

说明：

- `relatedIds` 仍放在这里，因为它是词条关系元数据，不属于某一种语言
- 后续若新增 `aliases`、`searchTokens` 等基础字段，也优先放在 `meta.ts`

### 5.2 `scene.ts`

只放与图形表达相关的数据：

- `scene`
- `scenesByCategory`
- 动画路径、时间轴配置、渲染参数

说明：

- 3D 数据与语言内容彻底解耦
- 同一空间/时间/动态场景可被所有语言复用
- 新增语言时不需要复制场景配置

### 5.3 `content/<locale>.ts`

每个语言文件只放该语言页面内容：

- `meaning`
- `tips`
- `examples`
- `examplesByCategory`
- `comparison`
- `collocations`
- `collocationGroups`
- `commonMistakes`
- `quiz`
- `faq`

说明：

- 如果未来扩到 `ja`、`es`、`fr`，只需要新增对应语言文件
- 翻译协作时，译者只需要处理文本文件，不会误碰 3D 参数

### 5.4 词条级 `index.ts`

词条目录下的 `index.ts` 负责把该词条的 `meta + scene + content` 组装成一个模块对象，供共享聚合层消费。

## 6. 类型设计

建议新增内部装配类型，而对页面层继续保留现有 `PrepositionEntry`：

```ts
type PrepositionMeta = {
  id: string;
  word: string;
  tags: string[];
  sense: "space";
  relatedIds: string[];
};

type PrepositionSceneModule = {
  scene: SceneConfig;
  scenesByCategory?: Partial<Record<LearningCategory, SceneConfig>>;
};

type LocalizedPrepositionContent = {
  meaning: string;
  tips?: string[];
  examples: PrepositionExample[];
  examplesByCategory?: Partial<Record<LearningCategory, PrepositionExample[]>>;
  comparison?: PrepositionEntry["comparison"];
  collocations?: string[];
  collocationGroups?: PrepositionCollocationGroup[];
  commonMistakes?: PrepositionMistakeItem[];
  quiz?: PrepositionQuizItem[];
  faq?: PrepositionFaqItem[];
};

type PrepositionModule = {
  meta: PrepositionMeta;
  scene: PrepositionSceneModule;
  content: Partial<Record<Locale, LocalizedPrepositionContent>>;
};
```

设计原则：

1. 内部类型为重构服务，外部类型为兼容服务
2. 页面层继续消费 `PrepositionEntry`
3. 数据目录内部采用更清晰的装配型结构

## 7. 运行时装配

### 7.1 聚合层

由 `src/data/prepositions/shared/registry.ts` 统一收集所有词条模块。

由 `src/data/prepositions/shared/assemble.ts` 负责把每个 `PrepositionModule` 转成现有 `PrepositionEntry`。

### 7.2 对外 API

重构后，对外仍然继续提供：

- `PREPOSITIONS`
- `getPrepositionById`
- `getPrepositionIndex`
- `getRelatedPrepositions`

这样可以把页面层的改动控制到最小，尽量不让以下调用方理解新的目录细节：

- `src/app/[locale]/page.tsx`
- `src/app/[locale]/p/[id]/page.tsx`
- `src/components/SpatialPlayground.tsx`
- 依赖 `PREPOSITIONS` 的搜索、SEO、缩略图逻辑

### 7.3 兼容原则

本次重构的关键不是重新发明页面消费协议，而是只替换内部数据来源。

对页面和组件来说，理想状态是：

- import 路径保持不变或只发生一次性小改动
- `PrepositionEntry` 结构保持兼容
- 搜索、导航、SEO、FAQ、related gallery 等逻辑无需重写

## 8. 回退策略

### 8.1 内容回退

词条内容的回退建议如下：

1. 正式支持语言缺失时，在校验阶段直接报错
2. 运行时仅对未来“预留但未完整支持”的语言允许回退到 `en`

当前正式支持语言是：

- `en`
- `zh-CN`

因此在现阶段，所有词条都必须同时具备这两种语言的 `content` 文件。

### 8.2 UI 文案回退与词条内容回退分离

`UI_TEXT` 继续在 `src/data/i18n.ts` 内独立管理，不和词条内容回退逻辑混用。

原因：

- UI 文案属于站点级字典
- 词条内容属于内容层字典
- 两者更新频率、校验策略和翻译流程不同

## 9. 校验策略

新增一个针对新目录结构的数据校验脚本，例如：

`scripts/check-preposition-data-structure.ts`

建议校验内容包括：

1. 每个词条目录都存在 `meta.ts`、`scene.ts`、`index.ts`
2. 每个词条目录都存在当前正式支持语言文件：
   - `content/en.ts`
   - `content/zh-CN.ts`
3. 目录名、`meta.id`、导出模块 ID 一致
4. `relatedIds` 指向的词条真实存在
5. `meaning`、`examples` 等必填字段完整
6. 装配后的 `PREPOSITIONS` 不包含重复 ID

设计原则：

- 构建前尽早失败
- 缺失语言内容时不默默吞掉
- 先靠脚本兜住数据完整性，再做全量迁移

## 10. 迁移策略

采用兼容式迁移，而不是一次性重写。

### 10.1 推荐步骤

1. 先新增新目录与共享装配层
2. 先迁移少量样板词条，例如 `in`、`on`、`under`
3. 跑通聚合与校验逻辑
4. 再批量迁移剩余词条
5. 所有调用方切换到新聚合入口
6. 删除旧的单文件数据源

### 10.2 入口切换策略

当前仓库存在 `src/data/prepositions.ts` 文件，因此若最终要落为 `src/data/prepositions/index.ts`，需要避免同路径冲突。

推荐做法：

1. 先将旧文件改名为 `src/data/prepositions.legacy.ts`
2. 新建 `src/data/prepositions/` 目录
3. 在 `src/data/prepositions/index.ts` 暴露新的聚合入口
4. 页面层保持 `@/data/prepositions` 的 import 方式不变

这样可以把重构的影响范围收敛在数据层。

## 11. 风险与控制

### 11.1 最大风险：迁移时丢字段

由于当前单词条数据字段较多，最容易出现的问题是迁移后遗漏 `comparison`、`quiz`、`faq` 等非首屏字段。

控制方式：

- 先建校验脚本，再做批量迁移
- 保留 `npm run qa:content`
- 在切换前后对 `PREPOSITIONS.length`、ID 列表、关键词条内容做对照验证

### 11.2 第二风险：对外 API 波动过大

若页面层被迫理解新目录结构，会把一次数据重构扩散为大面积联动。

控制方式：

- 保持 `PREPOSITIONS` 与查询函数继续对外导出
- 将装配复杂度压在数据层内部

### 11.3 第三风险：重构目标过大

如果在同一次重构里同时做按 locale 动态加载、CMS 接入、翻译平台接入，风险会明显放大。

控制方式：

- 本次只做结构解耦
- 懒加载与后台化放到后续迭代

## 12. 影响范围

预计主要涉及：

- `src/data/prepositions.legacy.ts` 或旧 `src/data/prepositions.ts`
- `src/data/prepositions/**`
- `src/data/types.ts`
- `scripts/check-preposition-data-structure.ts`
- 依赖 `@/data/prepositions` 的页面与组件
- `docs/PROGRESS.md`

## 13. 验收标准

当以下条件全部满足时，视为本次重构完成：

1. 介词数据已按词条拆到独立目录
2. 每个词条至少包含 `meta.ts`、`scene.ts`、`content/en.ts`、`content/zh-CN.ts`
3. 3D 场景参数与文本内容已分层
4. 外部仍可通过统一入口获取 `PREPOSITIONS` 与查询函数
5. 首页、详情页、搜索、SEO、相关词、playground 功能不回归
6. `npm run qa:content` 通过
7. `npm run build` 通过
8. 新增校验脚本能检查目录、语言文件与引用完整性

## 14. 最终建议

本次重构应采用“结构解耦，但不重写页面消费层”的稳妥路线：

- UI 字典继续独立
- 静态页内容继续独立
- 介词数据按词条目录化
- `scene` 与 `content` 明确分层
- 外部继续统一消费聚合后的 `PrepositionEntry`

这条路线能在不牺牲当前可运行性的前提下，为多语言扩展和后续工程化打下比较稳的基础。
