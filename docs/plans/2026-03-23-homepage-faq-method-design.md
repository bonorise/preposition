# 首页 FAQ 方法论改版设计

日期：2026-03-23  
状态：已确认

## 1. 背景

当前首页 FAQ 位于列表页底部，承担的是首页收口与结构化数据输出的双重角色。现有内容能够说明站点提供 3D 场景、例句和练习，但问题设置整体偏“功能说明”，例如是否有例句、是否会继续更新、是否可以每天练习。这类问法信息密度偏低，且没有解释本网站为何选择“空间图像 + 互动 + 对比”的教学方式。

对首页而言，FAQ 不应该复述具体词条页里的易混词问题，也不应该成为产品说明书。它更适合承担三件事：

1. 解释为什么英语介词难学，尤其是对零基础学习者为什么会“似懂非懂”。
2. 解释本网站为什么采用空间化、可互动、对比式的教学表达。
3. 告诉用户如何使用本站进行自学或教学演示。

用户已明确以下约束：

- 首页 FAQ 不承接 `in / on / at` 这类具体介词差异问法。
- 首页 FAQ 应围绕整体学习方法、认知逻辑和网站设计理念展开。
- 允许 FAQ 数量增加，以表达完整性为优先。
- 英文文风优先采用“品牌方法论”版本，不做搜索框式问答语气。

## 2. 对应 PRD 条目

本次设计直接对应以下需求：

- `0. 背景与目标（阶段 1）`
  - 服务零基础学习者
  - 用 3D 空间直觉帮助快速理解介词
- `1. 用户画像与核心使用场景`
  - 零基础学习者
  - 教师 / 家长投屏演示
- `2.2 页面 1：Preposition Gallery（列表页）`
  - 首页作为介词总入口，需要承担搜索、浏览和进入详情页前的认知引导
- `4.1 释义风格（初学者友好）`
  - 首页 FAQ 同样需要贯彻“看得懂、好记、降低认知负担”的表达原则
- `5.1 文案与释义必须字典化`
  - FAQ 改版必须继续通过 `src/data/i18n.ts` 统一管理中英文内容

## 3. 当前问题评估

### 3.1 内容职责错位

当前首页 FAQ 主要在回答“这个网站有没有例句、会不会继续更新、能不能每天练习”这类产品说明问题，而不是解释“为什么本站这样教介词”。它没有形成首页应有的方法论闭环。

### 3.2 认知逻辑表达不足

介词学习的真正难点是“关系”的识别，而不是词义翻译。现有 FAQ 没有解释为什么学习者即使记住中文翻译，仍然会在真实句子里选错介词；也没有解释为什么 3D 场景、互动操作和对比式展示更适合介词这种关系型词汇。

### 3.3 首页与详情页职责边界不清

像 `in / on / at`、`on / over` 这类具体差异，本应留在词条页或专题页中深入展开。首页 FAQ 若过早承接具体介词对比，会与详情页抢职责，且难以在有限篇幅中讲清楚。

### 3.4 SEO 与品牌表达都偏弱

当前 FAQ 更像零散的短答集合，难以建立“这个网站有自己的教学方法”的品牌印象。它也没有持续强化首页应承担的主题相关性，例如：

- 英语介词为什么难学
- 初学者为什么总混淆介词
- 为什么空间图像有助于介词学习
- 为什么对比学习比孤立记忆更有效

## 4. 方案结论

采用“首页 FAQ 转向方法论解释”的方案，保留现有 FAQ 组件结构，只替换文案内容与标题定位，不新增首页模块层级。

方案摘要：

- FAQ 数量从当前 8 条提升到 12 至 13 条。
- FAQ 内容固定分为三组：学习难点、教学方法、使用路径。
- 英文采用品牌方法论语气，不用搜索框式标题。
- 中文与英文保持同一逻辑结构，但中文不做机械直译。
- 继续输出 FAQ 结构化数据，强化首页在“介词学习方法”层面的语义完整性。

该方案相比“仅微调几条问题”的价值在于：

- 能显著拉开首页与普通词典站、题库站的表达差异。
- 能让用户更容易理解本站的设计逻辑，而不是只看到功能。
- 几乎不增加组件复杂度，适合先以内容升级完成一次高收益优化。

## 5. 首页 FAQ 的职责边界

首页 FAQ 的职责定义如下：

1. 解释“为什么介词难学”。
2. 解释“为什么本站用空间、互动、对比来教”。
3. 解释“初学者怎样使用本站更有效”。

首页 FAQ 的非职责如下：

1. 不解释具体介词之间的用法差异。
2. 不承接单个词条级的关键词，如 `in vs on vs at`。
3. 不写成功能公告或更新计划。
4. 不用“我们有例句 / 我们会继续更新”这类低信息密度问法充数。

由此形成清晰分工：

- 首页：学习方法、站点价值、内容组织逻辑
- 详情页：具体介词含义、对比、例句、易错点、测验

## 6. FAQ 信息架构

首页 FAQ 固定采用三段式结构。

### 6.1 第一组：为什么介词难学

目标：先承接用户痛点，让用户感到“这正是我学不会的原因”。

建议覆盖问题：

1. `Why are prepositions so difficult to learn well?`
2. `Why do learners still misuse prepositions after memorizing the translation?`
3. `Why does this website begin with spatial intuition?`

### 6.2 第二组：为什么本站这样教

目标：解释 3D、互动、对比、内容取舍背后的认知逻辑。

建议覆盖问题：

1. `Why teach prepositions through space instead of grammar first?`
2. `Why use 3D scenes on a preposition learning website?`
3. `Why does interaction matter in this kind of learning?`
4. `Why do comparisons matter so much when learning prepositions?`
5. `Why focus on the most common meaning first?`
6. `Why are the explanations and examples intentionally short?`
7. `Why does the site use bilingual support?`

### 6.3 第三组：用户应该怎样使用本站

目标：把方法论转化为使用动作，让 FAQ 读完后自然过渡到浏览和学习。

建议覆盖问题：

1. `How should a beginner use this website well?`
2. `Is this website meant for self-study or for teaching?`
3. `Can this approach support later learning beyond spatial meaning?`

如需要增加完整度，可补一条节奏建议：

- `How many prepositions should I learn in one session?`

## 7. 文风与写法规范

### 7.1 英文风格

英文 FAQ 采用“品牌方法论”语气，具体规则如下：

- 问题标题自然、克制，不写成明显的搜索框输入句。
- 答案强调认知逻辑，不写成功能清单。
- 高频使用如下概念：
  - `relationship`
  - `boundary`
  - `perspective`
  - `comparison`
  - `cognitive load`
- 每条答案控制在 2 至 4 句，避免冗长。
- 用词应让用户感到“这是一个有教学理念的网站”，而不是“这是一个列功能的网站”。

### 7.2 中文风格

中文与英文保持同一结构和逻辑，但不做逐词直译。中文表达目标是：

- 更顺
- 更好懂
- 更贴近初学者和教师的阅读习惯

例如英文里的 `relationship`，中文可以根据上下文自然转译为“位置关系”“空间关系”或“关系本身”，而不是始终硬译成同一词。

### 7.3 不再使用的问法

首页 FAQ 不再出现以下类型的问题：

- `Do you provide ...`
- `Do you add more ... later`
- `Can I practice every day`
- 任何具体介词差异问法
- 纯功能说明式问题

## 8. 推荐 FAQ 标题与文案方向

### 8.1 推荐英文 FAQ 标题

建议把首页 FAQ 标题从当前的 `FAQ · Preposition Learning` 改为：

- `FAQ · How This Site Teaches Prepositions`

这个标题更能体现“方法论 FAQ”的定位，而不是泛泛的“介词学习 FAQ”。

### 8.2 推荐中文 FAQ 标题

建议中文标题改为：

- `FAQ · 这个网站如何帮助你学会介词`

该写法比“英语介词学习”更贴近首页实际内容，也更符合用户当前阅读预期。

## 9. 推荐英文 FAQ 文案（最终方向）

以下英文 FAQ 为本次设计确认后的推荐方向，实施时可直接落到 `src/data/i18n.ts`：

1. `Why are prepositions so difficult to learn well?`
   - 强调介词描述的是关系，不是物体；学习者容易看懂单个物体，却难以稳定识别关系。
2. `Why do learners still misuse prepositions after memorizing the translation?`
   - 强调翻译无法完整承载接触、边界、方向、距离和视角等差异。
3. `Why does this website begin with spatial intuition?`
   - 强调空间义是最具体的入口，也是后续时间义和抽象义的基础。
4. `Why teach prepositions through space instead of grammar first?`
   - 强调语法术语可以命名规则，但不能替代把关系看清。
5. `Why use 3D scenes on a preposition learning website?`
   - 强调介词依赖位置、朝向和观察角度，3D 场景更利于形成稳定心像。
6. `Why does interaction matter in this kind of learning?`
   - 强调主动拖动和观察变化，会把规则转化为体验过的模式。
7. `Why do comparisons matter so much when learning prepositions?`
   - 强调混淆往往发生在相近词之间，对比能帮助大脑看到真正控制选择的差异。
8. `Why focus on the most common meaning first?`
   - 强调初学者需要先建立稳定中心，再向时间义和抽象义扩展。
9. `Why are the explanations and examples intentionally short?`
   - 强调短句是为了降低认知噪音，让注意力集中在关系本身。
10. `Why does the site use bilingual support?`
    - 强调双语是辅助确认，不是替代思考，目的是减少解码成本。
11. `How should a beginner use this website well?`
    - 强调小批量、对比式、先看图后读解释再做测试。
12. `Is this website meant for self-study or for teaching?`
    - 强调既适合自学，也适合教师或家长投屏讲解。
13. `Can this approach support later learning beyond spatial meaning?`
    - 强调一旦空间核心清楚，后续时间义和抽象义会更不随机。

## 10. 中文同步改写原则

中文 FAQ 不建议逐句翻译英文，而应遵守以下原则：

1. 同一题序、一一对应，便于双语维护。
2. 中文问题更贴近用户真实心声，例如：
   - “为什么介词总是学了又混？”
   - “为什么只背中文意思还是会用错？”
3. 中文答案优先讲透“关系”和“画面”，避免抽象教学术语堆积。
4. 允许中文比英文更口语化一点，但不能降低内容密度。

## 11. SEO 与结构化数据定位

本次 FAQ 改版的 SEO 目标不是争夺具体词条词流量，而是强化首页在以下主题上的相关性：

- 英语介词为什么难学
- 英语介词应该怎么学
- 为什么图像和空间感有助于介词学习
- 为什么对比式学习更适合介词
- 适合初学者和教学演示的介词学习方式

FAQ 结构化数据仍保留 `FAQPage`，但其问题集合将更贴近首页真正的主题定位。这样做有两层收益：

1. 让首页语义更集中，避免与详情页关键词职责冲突。
2. 让 FAQ 从“功能说明”升级为“方法论说明”，增强品牌认知。

## 12. 落地范围

本次设计只包含首页 FAQ 的内容策略和轻量标题调整，不包含以下变更：

- FAQ 组件结构改版
- 首页新增章节或锚点导航
- 详情页 FAQ 或具体词条 FAQ 同步改写
- 独立“介词学习方法”专题页建设

实施阶段应优先完成：

1. 替换首页中英文 FAQ 内容
2. 调整首页 FAQ 标题
3. 保持现有组件和结构化数据接线不变
4. 进行本地检查，确保页面显示和 JSON-LD 输出正常

## 13. 成功标准

若本次改版完成，首页 FAQ 应达到以下结果：

1. 用户读完后能理解“为什么本站这样教介词”。
2. FAQ 不再与具体词条页内容抢职责。
3. 英文首页气质更像有教学哲学的品牌站，而不是功能清单页。
4. 中文首页 FAQ 更顺、更完整，更贴近初学者和教师的理解路径。
5. 组件结构不变，改动集中在字典文案层，后续维护成本低。
