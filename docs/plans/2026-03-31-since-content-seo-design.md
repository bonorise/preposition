# since 词条 SEO 与详情页稳定性设计

## 背景

当前 `since` 词条页已经具备基础 SEO 元信息、结构化数据和详情页标准模块，但主轴几乎全部落在“时间起点”上，对 `since` 的高频原因义 `because / 既然` 覆盖不足。

这会带来两个问题：

1. 中文学习者无法在首屏快速建立 “since 有两个常见意思，但核心都和起点有关” 的认知。
2. 如果直接为 `since` 发明新的页面骨架，会破坏站内详情页的稳定性和一致性。

本次设计的核心不是把 `since` 做成一个特殊页，而是在不破坏详情页总结构的前提下，补齐其双义解释能力，并将这种处理方式沉淀为项目级要求。

## 目标

1. 保持详情页总结构不变，不为 `since` 单独改版。
2. 英文页继续以时间义 SEO 为主，保证 `since meaning / since vs for / since vs after / present perfect with since` 这类搜索意图的聚焦。
3. 中文页更完整解释 `since` 的双核心表达：`自从……以来` 与 `因为 / 既然`。
4. 把“多义词条优先在现有文本模块中解释共同核心，不随意改结构”写入项目要求文档。

## 设计原则

### 1. 结构稳定优先

详情页继续沿用现有模块顺序与信息架构：

- 标题区
- 3D / 图示区
- 释义与说明区
- 例句
- 对比
- 搭配
- 易错
- 小测验
- FAQ
- related prepositions

允许增强内容，但不引入只服务于 `since` 的专属主框架。

### 2. 优先用释义文字承接多义统一性

对 `since` 而言，最重要的不是堆更多模块，而是把核心解释写进现有文本字段里，尤其是：

- `meaning`
- `tips`
- `comparison`
- `faq`

要让用户在最短路径内读到一句稳定的上位解释：

`since` 的核心是“起点”。它既可以表示时间上的起点，也可以表示判断、事实或结论的出发点。

### 3. 中英文按搜索意图分配权重，但语义主轴一致

英文页：

- SEO 标题、描述、首段摘要仍以时间义为主。
- 正文内部补充原因义，避免英文页主题漂移。

中文页：

- 在释义与 tips 中直接说明双义。
- 用更强的解释性文字讲清 “表面不同，内在一致”。

两种语言都必须共享同一个底层解释，不允许出现英文只讲时间、中文改成完全不同概念的情况。

## since 页面内容改造方案

## 一、释义区

`meaning` 升级为“双起点解释”。

英文建议方向：

- 先给时间义主句。
- 紧接一句补充：`since` can also introduce the reason or starting point behind a judgment.

中文建议方向：

- 直接写出“since 的核心含义是起点”。
- 明确列出两个常见义项：
  - 自从……以来：时间上的起点
  - 因为 / 既然：判断或事实的出发点

这样可以在不新增结构的前提下，把你给出的核心内容放到最应该出现的位置。

## 二、tips 区

tips 不再只提示语法，而要承担“统一两个义项”的解释任务。

建议至少覆盖三层信息：

1. `since` 标的是起点，而不是时长。
2. 时间义下，它常和现在完成时连用，强调从过去某点持续到现在。
3. 原因义下，它引出的是判断、决定或结论的出发点，语气常比 `because` 更像“既然 / 既然如此”。

## 三、例句与分类例句

保持现有例句模块不变，但补足双义样本。

建议：

- 保留现有 `time` 分类例句。
- 为 `since` 增加一组 `abstract` 或 `reason` 导向例句数据，前端仍走既有分类渲染逻辑。

示例方向：

- Since you are here, let’s start now.
- Since everyone agrees, we can move on.

中文要配明确译文，突出“既然 / 因为”的语气差异。

## 四、comparison 区

当前 `since` 的 comparison 主要覆盖：

- `since vs after`
- `since vs from`

建议补一组：

- `since vs because`

解释重点：

- `because` 纯粹回答原因。
- `since` 在原因义里更像把某个已知事实当成出发点，再推出后文判断或决定。

这样仍然复用原有 comparison 结构，不引入新 UI。

## 五、FAQ 区

FAQ 要补上能被搜索与 AI 摘取的直接问答：

- `Can since mean because?`
- `What is the difference between since and because?`
- `Why does since have both a time meaning and a reason meaning?`

中文 FAQ 则应更直接：

- `since 为什么既能表示“自从”又能表示“因为”？`

目标是让 AI 和用户都能在问答块中快速抽取标准答案。

## 六、metadata 与结构化数据

英文页：

- title 与 description 仍以时间义为主，不改主关键词策略。
- description 可轻量加入 “also introduces a reason” 一类短语，但不能让时间主轴失焦。

中文页：

- description 可更明确体现双义解释。

结构化数据：

- `mainEntity.description` 应与升级后的释义一致，至少能反映“起点”这个上位概念。

## 七、分类与数据语义修正

当前 `src/data/prepositions/since/meta.ts` 中 `sense` 为 `"space"`，与实际内容不符。

本次应将其修正为更符合页面主轴的语义类别，避免：

- SEO 分类误判
- FAQ 时间可用性判断失真
- 首页或相关逻辑出现隐性偏差

具体采用 `time` 还是 `abstract`，以站内现有分类规则和 `buildResolvedPrepositionSeo` 的优先级为准，但不能继续保留 `space`。

## 项目级要求补充

需要把以下要求加进项目文档，作为详情页通用规则：

1. 当介词存在两个或以上高频义项时，详情页应优先在现有 `meaning / tips / comparison / FAQ` 等文本模块中解释这些义项的共同核心。
2. 不得为了单个词条随意改动详情页总结构；若需增强展示，应优先复用既有模块或新增可复用于其他词条的轻量模块。
3. 中英文页面可以根据搜索意图调整义项权重，但核心解释必须一致，不能出现跨语言主轴冲突。

## 涉及文件

- `src/data/prepositions/since/content/en.ts`
- `src/data/prepositions/since/content/zh-CN.ts`
- `src/data/prepositions/since/meta.ts`
- `src/lib/prepositionSeo.ts`
- `docs/PRD.md`

必要时可检查：

- `src/app/[locale]/p/[id]/page.tsx`
- `src/lib/prepositionFaq.ts`

## 验收标准

1. `since` 页面总结构不变。
2. 中英文页面都能清楚解释 `since` 的双义及其共同核心。
3. 英文 metadata 仍保持时间义 SEO 主轴。
4. 中文内容能自然纳入“自从……以来”与“因为 / 既然”两层常见用法。
5. 项目文档中新增“多义词条优先在现有文本模块中统一解释，不破坏详情页结构”的要求。
