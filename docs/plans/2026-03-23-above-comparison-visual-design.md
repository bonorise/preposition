# above 对比图复用能力与页面优化设计

日期：2026-03-23
状态：已确认

## 1. 背景

当前站点的介词详情页已经形成稳定骨架：顶部释义与关键提示、3D 图解、例句分区、相关词、`Key differences`、常用组合、易错点、测验与 FAQ。用户本次要求聚焦 `https://preposition.worddino.com/en/p/above`，从“零基础英语介词教学 + Google SEO + GEO”三个角度重新评估该页，并在不改变详情页整体结构的前提下完成优化设计。

当前 `above` 页已有基础对比、FAQ、例句与测验，规则方向基本正确，但对初学者仍有三个明显短板：

1. 缺少一张把 `on / over / above / below` 放在同一参照系里比较的视觉规则图。
2. 缺少从“在上方”自然过渡到“高于标准/超出范围”的解释桥，导致抽象义记忆不牢。
3. 现有内容更像词典片段，缺少更容易被搜索摘要、AI 摘录和用户复述的短规则句。

用户已明确两项关键约束：

- 详情页整体结构不改。
- 新增的对比图能力必须是可复用能力，而不是只服务于 `above` 的一次性图片。

## 2. 对应 PRD 条目

本次设计直接对应以下需求：

- `2.2 页面 2：Preposition Detail（详情页）`
- `4.1 释义风格（初学者友好）`
- `4.2 例句（必须）`
- `5.1 文案与释义必须字典化`
- `5.2 数据结构必须支持多语言`
- `7.3 关键工程约束`
  - 数据驱动
  - 可扩展
  - 新增介词尽量只改数据，不改渲染逻辑

虽然 PRD 未单独规定“对比图组件”，但该能力本质上是在增强详情页中的现有对比模块，并符合站点“数据驱动 + 可扩展”的工程约束。

## 3. 评估结论

### 3.1 教学性评估

`above` 当前页面的主要优点是：

- 已覆盖 `above vs over / on / below` 等核心易混点
- 已有空间例句、常见错误、FAQ 与小测验
- 已能表达“高于标准”这一抽象延伸义

主要问题是：

- 初学者缺少“一眼看懂”的视觉记忆抓手
- “higher than, not touching” 这一核心规则没有被强化为首屏钩子
- 抽象义与空间义之间的过渡不足，用户容易把 `above average`、`above my level` 视为零散用法

### 3.2 SEO 评估

当前页面具备基础 SEO 结构，但检索意图承接仍不够强。更适合承接的高频查询包括：

- `above meaning`
- `above vs over`
- `above vs on`
- `above average meaning`
- `what does above mean`

当前内容能部分回答这些问题，但还不够“集中、可摘录、可复述”。

### 3.3 GEO 评估

当前页面已有 FAQ、对比和例句，这是良好基础；但若想更容易被 AI 回答摘要或引用，需要补齐两类内容：

1. 能被直接摘录的短规则句
2. 结构稳定、语义清楚的可视化对比图

## 4. 方案结论

采用“保留页面结构，只增强 `Key differences` 模块”的方案。

方案摘要：

- 不改详情页整体顺序与模块层级
- 在现有 `Key differences` 模块内部新增一个可选 SVG 对比图
- 对比图能力做成可复用配置，首轮仅在 `above` 页落地
- 同步重写 `above` 的中英文教学内容与单页 metadata
- 英文内容采用“面向英语学习者的自然教学英文”，不做生硬关键词堆砌

该方案相比“只改文案”的价值在于：既满足本页优化，又沉淀出后续可复用的对比图能力；相比做成通用教学块引擎，又能把首轮复杂度控制在合理范围内。

## 5. 页面落点与展示位置

新增图片放在现有详情页的 `Key differences` 区块内部，位置顺序固定为：

1. `Key differences` 标题
2. 对比图（新 SVG）
3. 一句总规则 summary
4. 下面的对比文字卡片
5. 最后的 decision tree

这样处理有三个目的：

- 语义最匹配：图片本质上就是易混词对比图
- 不改页面结构：详情页整体顺序保持不变
- SEO / GEO 更稳：图和文字对比处于同一语义区块，更容易被理解为“above vs on / over / below”的集中答案

## 6. 对比图设计

### 6.1 图的角色

这张图不是装饰图，也不是对上方 3D 视图的缩小复刻，而是一张“规则图”。它的目标是让初学者在 3 秒内看出四个词围绕同一参照物时的适用空间差异。

### 6.2 图的骨架

- 中间固定一个虚线矩形，表示参照物、表面或物体体积
- 四个介词各占一列：`on`、`over`、`above`、`below`
- 所有列共享同一个参照系，避免用户误把四个词看成四张不同场景图

### 6.3 四个词的表现方式

- `on`
  - 贴着矩形上边缘绘制实线或短带
  - 核心：接触表面
- `over`
  - 在矩形上方绘制跨越中心的弧线或横向带
  - 核心：在上方，并常带跨越或覆盖感
- `above`
  - 在矩形上方绘制不接触的悬浮范围带
  - 允许略偏左或偏右，强调“高于”而不是“必须正上方居中”
- `below`
  - 在矩形下方绘制范围带，与 `above` 构成上下镜像
  - 核心：低于某物

### 6.4 图中文字

每个介词下方保留一条短注，中英文各自单独配置：

- `on`：`touching the surface / 接触表面`
- `over`：`above and crossing / 在上方并跨过`
- `above`：`higher than, not touching / 高于，不接触`
- `below`：`lower than / 低于`

### 6.5 响应式与风格

- 桌面端：整张横向图完整显示
- 移动端：仍保留一张整图，不拆成四张小图
- 视觉上继续遵循站内浅背景、细线条、柔和高亮的风格
- 区分优先靠形状而非颜色，降低色觉依赖

## 7. 数据结构与组件边界

### 7.1 数据结构

在 `PrepositionEntry` 上新增可选字段 `comparisonVisual`，挂在现有 `comparison` 旁边。该字段只用于对比图，不改已有纯文字对比结构。

建议的数据方向：

- `type`：首版固定为 `vertical-range`
- `i18n`：图标题与图注
- `items`：每个对比词的范围配置、标记类型与双语短注

设计原则：

- 不做“所有图都能画”的万能协议
- 首版只服务于 `on / over / above / below` 这一类纵向范围对比
- 没有配置数据的词条完全不受影响

### 7.2 组件边界

新增独立组件 `PrepositionComparisonVisual.tsx`，职责仅包括：

- 绘制虚线矩形参照面
- 按数据渲染不同词的范围带或路径
- 输出对应标签与短注
- 保证移动端可读

`PrepositionComparison.tsx` 只负责：

- 检查当前词条是否有 `comparisonVisual`
- 有则在 summary 之前渲染图片
- 无则保持现状

这样可以确保：

- 详情页父级布局零改动
- 其余 50+ 词条零影响
- 后续 `below / over / under / on top of` 若要接入，只加数据即可

## 8. `above` 页内容优化设计

### 8.1 顶部释义

首屏 `meaning` 改成“空间义 + 抽象义”的双核定义：

- 中文：`在……上方（不接触）；高于、超过（数值/水平/能力范围）`
- 英文：`higher than something and not touching it; also higher than a level, number, or standard`

目标是让用户在进入页面第一秒就知道：`above` 不只是空间里的“上方”，它还能自然延伸为“高于标准/超出范围”。

### 8.2 关键提示

`tips` 保留 3 条，分别承担三个任务：

1. 固定核心规则：`above = higher than, not touching`
2. 和 `on` 拉开：`on` 强调接触，`above` 强调脱离表面
3. 过渡到抽象义：`above average / above zero / above your level`

用户提供的“ab- 脱离表面”思路保留为中文记忆提示，但不包装成强词源结论。英文版改为“画面记忆法”，避免讲不必要的词源。

### 8.3 例句策略

不新增 `abstract` 分类，仍遵守当前 `space / time / dynamic` 的例句结构。

`Examples` 区只保留两个高频空间例句，让初学者先抓住空间义。抽象义通过以下位置补足：

- `Key differences` summary
- `collocationGroups`
- `FAQ`
- metadata 描述

### 8.4 `Key differences` 文本策略

配合新图，summary 改成可直接复述的一句规则：

- 中文：`above 的核心不是“正上方”，而是“高于某物”。它通常不接触，也不强调跨越；如果有接触，多用 on；如果强调从上方跨过去，多用 over。`
- 英文：`Above does not mainly mean directly over the center. Its core idea is higher than something. It usually does not involve contact or crossing. If there is contact, use on. If crossing is central, use over.`

### 8.5 常用组合与抽象义

`collocationGroups` 保留三组，但更明确区分：

- 空间位置
- 数值与标准
- 能力与抽象范围

用户给出的“above my understanding”语义保留，但表达调整为更自然的教学英文，例如：

- `above my level`
- `above my level of understanding`

### 8.6 FAQ 与测验

FAQ 优先覆盖用户和 AI 最常提问的句型：

- `What is the core meaning of above?`
- `What is the difference between above and on?`
- `What is the difference between above and over?`
- `Why do we say above average, not over average?`
- `Can above mean not exactly straight over the center?`

测验和易错点围绕四个判断：

- 是否接触
- 是否跨越
- 是否只是中性地“高于”
- 是否进入“高于标准/范围”的抽象义

## 9. SEO / GEO 设计

### 9.1 SEO

只精修 `above` 这一页的单页 metadata，不改全站模板策略。

建议标题方向：

- 中文：`above 介词用法：在……上方 vs on / over｜含义、例句与区别 | Preposition Dino`
- 英文：`above: meaning, examples, and above vs on vs over | Preposition Dino`

描述的重点不是堆关键词，而是明确回答三个问题：

- `above` 的核心义是什么
- 它和 `on / over` 的区别是什么
- 为什么会有 `above average` 这一类抽象用法

### 9.2 GEO

这次不新增专门的 GEO 模块，而是把现有页面改得更适合摘要：

- `meaning` 提供一句定义
- `comparison` 提供一句总规则
- FAQ 直接回答真实问句
- 对比图提供一个稳定视觉规则锚点

优化后，这页应更容易支撑以下问题的摘要回答：

- `What does above mean?`
- `above vs over`
- `above vs on`
- `why above average not over average`

## 10. 实现影响范围

预期主要影响文件如下：

- `src/data/types.ts`
  - 为 `PrepositionEntry` 增加可选的 `comparisonVisual` 类型
- `src/components/PrepositionComparison.tsx`
  - 在现有模块内部插入可选视觉图
- `src/components/PrepositionComparisonVisual.tsx`
  - 新增 SVG 对比图组件
- `src/data/prepositions/above/content/en.ts`
  - 重写英文教学内容与对比文案
- `src/data/prepositions/above/content/zh-CN.ts`
  - 重写中文教学内容与对比文案
- `src/app/[locale]/p/[id]/page.tsx`
  - 为 `above` 增加单页 metadata override

## 11. 验收标准

以下全部满足，视为本次设计完成落地：

1. `above` 页在 `zh-CN` 与 `en` 下都能显示对比图
2. 没有配置对比图的其他词条页不受影响
3. `Key differences` 区块顺序保持不变，仅在内部新增图
4. 图在移动端窄屏下不溢出，标签和短注可读
5. `above` 的中英 `meaning / tips / comparison / collocationGroups / FAQ` 完成重写
6. 页面明确体现四条教学判断：
   - `higher than, not touching`
   - `on = touching`
   - `over = crossing / covering tendency`
   - `above` 也可表示高于标准
7. `above` 单页 metadata 完成精修
8. 页面中至少出现两处适合被直接摘录的短规则句
