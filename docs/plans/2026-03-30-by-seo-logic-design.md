# by 词条与共用 SEO 逻辑优化设计

日期：2026-03-30  
状态：已确认

## 1. 背景

当前 `/en/p/by` 页面的核心问题不是“缺少 SEO 标签”，而是页面主讲义项与 SEO 主轴错位：

- 页面实际首屏仍是空间义词条：`by` = `close to / at the side of`
- 但当前共用 SEO 逻辑会优先把 `by` 识别成 `time`
- 最终线上标题变成 `by time preposition meaning, rules and examples`
- FAQ、description 与部分比较内容也被时间义带偏

对一个面向初学者的教学页来说，这种错位会同时损害：

1. 用户理解路径  
   用户进入页面后，首要任务应该是先抓住核心画面，而不是被 deadline 用法抢走注意力。
2. on-page SEO 一致性  
   标题、描述、正文主句、FAQ、结构化数据应该围绕同一主轴，不应出现“标题讲时间、正文讲空间”的混搭。
3. AI/搜索抽取质量  
   当页面定义、比较、FAQ 主轴不稳定时，搜索引擎和 AI 系统更难稳定提炼“这个页面最重要的答案是什么”。

本次优化的目标不是重做整套内容模型，而是在现有四分类结构上，把“页面主讲义项优先”的 SEO 规则落地，并用 `by` 作为首个修正样例。

## 2. 对应 PRD 条目

本次设计直接对应以下需求：

- `0. 背景与目标`
  - 阶段 1：学习效果优先，让零基础用户快速建立直觉
  - 阶段 2：介词词条页 SEO 化（独立 URL、结构化内容、可分享）
- `2.2 页面 2：Preposition Detail`
  - 详情页要有清晰释义、最常见用法说明、例句
- `4.1 释义风格（初学者友好）`
  - 内容要追求“看得懂 + 好记”
- `4.2 例句（必须）`
  - 每个词条需提供简洁、贴近初学者的例句
- `5.1 / 5.2 多语言架构`
  - 中英内容仍需走数据字典，不在组件中硬编码
- `7.3 关键工程约束`
  - 数据驱动
  - 可扩展
  - 尽量不修改渲染骨架

## 3. 问题定义

### 3.1 `by` 当前问题

- 核心义过薄：`by; close to`
- 空间义与时间义、方式义、依据义、变化幅度义之间没有建立可记忆的“核心义 → 引申义”路径
- 空间页的 FAQ 却主要在回答时间截止关系
- 页面 title / description 与正文第一认知点不一致

### 3.2 共用 SEO 逻辑当前问题

当前逻辑把 SEO 主分类近似处理为“分类优先级最高的那个”，这会导致：

- 多义介词被次义项抢走标题主轴
- 页面 metadata 与正文教学重点不一致
- 结构化数据只输出最短 meaning，信息过薄
- FAQ 虽然可见，但不一定围绕当前页面真正想解决的问题

## 4. 方案结论

本次采用“方案 2：页面主讲义项优先”的优化方式。

### 4.1 核心原则

页面 SEO 不再只看“这个词有哪些分类”，而要优先看“这个页面最应该先教给初学者什么”。

具体到 `by`：

- 主讲义项：`space`
- 次级延伸：`time`
- 扩展延伸：`abstract`（方式、依据、变化幅度）

因此：

- `title` 与 `description` 必须围绕空间义开场
- 正文先讲“在旁边 / 靠着”的核心画面
- 时间义与抽象义作为引申，不抢页面主轴

### 4.2 共用 SEO 逻辑的调整方向

建立新的默认优先级：

- `dynamic`
- `space`
- `time`
- `abstract`

并保留少量人工 override，用来处理明显不适合默认顺序的词条，例如：

- `around`
- `about`

原因：

- 动态介词如果本页重点是路径/穿越/进入，应继续优先 `dynamic`
- 普通空间词条若同时带时间义，不应再自动被 `time` 抢走
- `time` 与 `abstract` 更适合作为“无空间主轴时”的主讲分类

### 4.3 `by` 页面的内容结构

本次把 `by` 的内容重组为：

1. 核心定义  
   `by` 的核心感觉是 “at the side of / close to”，也就是“在旁边、靠着”。
2. 空间义  
   表示在某物旁边、靠近某物。
3. 时间义  
   从“靠近某个时间点”引申到“不晚于某时”。
4. 抽象义  
   从“靠着 / 依靠”引申出方式、手段、依据、变化幅度。

页面会优先让用户记住一个中心画面：

> 先记住 “by = 在旁边 / 靠着”，再把时间、方式、依据、变化幅度都看成这个感觉的延伸。

## 5. 本次必须完成

1. 重写 `by` 中英文内容，使其符合“核心义 → 引申义”的教学结构
2. 让 `by` 页面 title / description / FAQ / structured data 与主讲义项一致
3. 调整共用 SEO 逻辑，使默认主分类顺序更符合教学型词条页
4. 保留并整理少量 override，避免特殊词条被错误归类
5. 在文档中记录后续完整模型升级方向

## 6. 本次明确不做

1. 不引入新的 SEO 数据模型字段（如 `seoPrimaryCategory`、`seoIntent`）
2. 不批量重写所有词条内容
3. 不为所有介词补全人工 FAQ
4. 不新增专题页或 compare taxonomy 页
5. 不重做 3D / scene 系统

## 7. 实施设计

### 7.1 `by` 内容改造

改动目标文件：

- [src/data/prepositions/by/content/en.ts](/Users/liubo/Desktop/PROJECT/preposition/src/data/prepositions/by/content/en.ts)
- [src/data/prepositions/by/content/zh-CN.ts](/Users/liubo/Desktop/PROJECT/preposition/src/data/prepositions/by/content/zh-CN.ts)

调整项：

- 重写 `meaning`
- 重写 `tips`
- 让 `examplesByCategory` 至少覆盖 `space / time / abstract`
- 重写 `comparison`，优先回答：
  - `by vs near`
  - `by vs beside / next to`
  - `by vs until`
- 重写 `collocationGroups`
- 重写 `commonMistakes`
- 重写 `quiz`
- 提供定制 `faq`

### 7.2 共用 SEO 逻辑改造

改动目标文件：

- [src/app/[locale]/p/[id]/page.tsx](/Users/liubo/Desktop/PROJECT/preposition/src/app/[locale]/p/[id]/page.tsx)
- 新增 SEO 辅助逻辑文件（如有必要）

调整项：

- 抽出“SEO 主分类推断”逻辑，便于脚本校验
- 默认顺序改为 `dynamic > space > time > abstract`
- 为仍需人工指定主讲义项的词条保留 override
- 让 description 的第一句更像“定义句”，而不是拼装式短语
- 让 structured data 的 description 与页面主讲义项保持一致

### 7.3 分类扩展

`by` 需要在页面层表达抽象义，因此应补进 `abstract` 分类集合。

改动目标文件：

- [src/lib/prepositionCategory.ts](/Users/liubo/Desktop/PROJECT/preposition/src/lib/prepositionCategory.ts)

结果：

- `by` 可在详情页展示抽象义例句区
- SEO keywords 与分类推断也能识别它的抽象延伸

## 8. 验收标准

本次完成后应满足：

1. 线上/SSR 生成的 `by` 页面 title 不再包含 `time preposition` 这种错误主轴
2. `by` 页面 description 首句能直接解释核心义
3. `by` 页面的 FAQ 首屏问题与空间义一致，不再先问 deadline
4. `by` 页面正文能清晰呈现：
   - 空间义
   - 时间义
   - 方式/手段
   - 依据/幅度
5. 共用 SEO 逻辑对多义词条更稳定，不再默认偏向 `time`

## 9. 方案 3 的后续优化方向（只写文档，不进入本轮代码）

后续如果继续做内容模型升级，建议进入“方案 3”：

### 9.1 建立词条级 SEO 配置

在每个词条数据中增加类似字段：

- `seoPrimaryCategory`
- `seoSecondaryCategories`
- `seoTitle`
- `seoDescription`
- `seoIntent`
- `seoFaq`

这样页面 SEO 将真正由数据驱动，而不是靠代码里的 override map 兜底。

### 9.2 建立“主讲义项”和“延伸义项”结构

为每个词条补：

- `coreImage`
- `coreRule`
- `extendedUses[]`

这样像 `by / about / over / through` 这类多义介词，就能稳定表达“从哪个核心图像出发，再引申出哪些用法”。

### 9.3 建立专题型 SEO 页面

后续可新增：

- `by vs near`
- `by vs beside`
- `by vs until`
- `prepositions of place`
- `prepositions of time`

让词条页承接单词意图，专题页承接比较型与合集型意图。

### 9.4 FAQ 与结构化数据数据化

当前 FAQ 仍有一部分来自通用生成逻辑。后续可以：

- 让高价值词条全部拥有手写 FAQ
- 让 FAQ structured data 完全基于词条数据输出
- 按页面主讲义项裁剪 FAQ 数量和顺序

## 10. 结论

本次不做“大而全”的 SEO 数据模型升级，而是在现有四分类结构上，把 `by` 修成一个真正以初学者为中心、以空间核心义为主轴的页面，同时把共用 SEO 主分类逻辑改得更符合教学型介词站点。

方案 3 已记录为后续升级方向，等这一轮稳定后再评估是否进入数据模型层升级。
