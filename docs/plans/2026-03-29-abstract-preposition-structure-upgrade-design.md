# 抽象介词分类结构升级与 11 个新词条接入设计

日期：2026-03-29  
状态：已确认

## 1. 背景

当前站点的学习分类与页面组织，实际建立在 `space / time / dynamic` 三分法上。这个结构对 `in / on / under / through / over / after / from` 等词条已经足够，但对以下词类开始失真：

- 抽象关系优先的介词或介词短语
  - `according to`
  - `due to`
  - `instead of`
  - `as`
  - `including`
  - `apart from`
- 同时带有抽象渠道或抽象依据关系的词
  - `via`
- 以时间边界为主，但空间直觉较弱的词
  - `since`
  - `until`
  - `during`
- 带有空间离开感，同时也常用于安全提示或抽象距离控制的词
  - `away from`

如果继续沿用当前三分法直接新增词条，问题会集中出现在：

1. 首页 Gallery 的分组会错误吸纳这些词，导致站点信息架构不自然。
2. 详情页顶部分类切换无法准确表达学习维度。
3. 例句区标题会把抽象义例句误标成“空间介词例句”。
4. SEO 分类入口会把抽象义词条误生成为“空间介词”页面。
5. 新词条内容即使补齐，也会被旧结构硬套，后续仍需返工。

本次设计的目标不是一次性重构整站，而是先把产品结构升级到可稳定承载“抽象义核心介词”的阶段，再批量新增 11 个正式词条页。

## 2. 对应 PRD 条目

本次设计直接对应以下需求：

- `0. 背景与目标（阶段 1）`
  - 让零基础学习者通过直觉理解常见介词
  - 内容体系未来需要从空间义扩展到时间义与抽象义
- `2.1 内容范围`
  - 首发覆盖常见英语介词尽可能全
- `2.2 页面 2：Preposition Detail（详情页）`
  - 每个词条需要有示意区、释义、用法说明与例句
- `4.1 释义风格（初学者友好）`
  - 页面内容必须追求“看得懂 + 好记”
- `4.2 例句（必须）`
  - 每个词条都要有英文例句与中文释义
- `5.1 文案与释义必须字典化`
  - 中英双语内容仍需走现有字典/数据结构
- `5.2 数据结构必须支持多语言`
  - 新词条接入不能破坏当前 `en / zh-CN` 双语体系
- `7.3 关键工程约束（必须）`
  - 数据驱动
  - 可扩展
  - 新增介词尽量只加数据，不重写渲染逻辑

## 3. 设计目标

本次设计要同时解决三个问题：

1. 让站点从“三分法”升级到“四分法”，正确承载抽象义词条。
2. 在不重写 3D 组件的前提下，让抽象义词条也能拥有结构一致的正式详情页。
3. 为本轮新增 11 个词条建立一套可复用的接入标准，方便后续继续补词。

最终状态应满足：

- 首页可以稳定分成 `space / time / dynamic / abstract`
- 详情页可以稳定展示 `abstract` 分类
- SEO 可以识别 `abstract`
- 11 个新词条都能作为正式详情页接入
- 老词条不因本次升级出现结构回退

## 4. 方案结论

采用“结构先升级，再批量接词条”的方案。

### 4.1 本次升级后的学习分类

学习分类从：

- `space`
- `time`
- `dynamic`

升级为：

- `space`
- `time`
- `dynamic`
- `abstract`

其中 `abstract` 的定义为：

> 该词条的主要学习价值来自抽象关系、逻辑关系、依据关系、替代关系、包含关系或渠道关系，而不是单纯空间位置。

### 4.2 页面结构保持不变

详情页仍然沿用当前正式页面骨架，不新开第五类页面：

- 标题区
- 释义与关键点
- Viewer / scene
- 例句区
- 对比区
- 常用搭配
- 常见错误
- 小测验
- FAQ
- 相关词条

本次不新增抽象义专属页面模版，也不做抽象义专题页。

### 4.3 抽象词条允许使用“中性示意 scene”

不是所有抽象义词都适合硬做空间图。

因此本次允许三种 scene 策略：

1. 直接复用已有空间直觉 scene
2. 使用时间轴 scene
3. 使用中性静态 scene 或轻量路径 scene，只承担“辅助记忆”而不冒充完整语义图解

原则是：

- 保持页面结构一致
- 不误导用户
- 不为抽象词强造假空间关系

## 5. 本次范围

### 5.1 本次必须完成

1. 分类系统升级到四分法
2. 首页 Gallery 支持 `abstract`
3. 详情页分类切换支持 `abstract`
4. 例句面板支持 `abstract`
5. SEO 分类入口支持 `abstract`
6. 时间轴系统补足 `since / until / during`
7. 新增以下 11 个正式词条：
   - `apart-from`
   - `according-to`
   - `away-from`
   - `as`
   - `since`
   - `until`
   - `including`
   - `due-to`
   - `during`
   - `instead-of`
   - `via`

### 5.2 本次明确不做

1. 不重写 `PrepositionViewer3D`
2. 不新增“抽象关系专属可视化引擎”
3. 不回头统一重写旧词条文案
4. 不先处理 `by`
5. 不新增专题页或 taxonomy 页
6. 不做整站 SEO 规则重构，只补 `abstract` 接入口

## 6. 系统级改动设计

### 6.1 类型层

更新 [src/data/types.ts](/Users/liubo/Desktop/PROJECT/preposition/src/data/types.ts)：

- `LearningCategory` 扩为 `space | time | dynamic | abstract`

要求：

- 不修改已有 `SceneConfig`、`PrepositionEntry` 的大结构
- 新分类应尽量通过现有 `examplesByCategory` 承载

### 6.2 分类判断层

更新 [src/lib/prepositionCategory.ts](/Users/liubo/Desktop/PROJECT/preposition/src/lib/prepositionCategory.ts)：

- 新增 `ABSTRACT_IDS`
- 新增 `isAbstractPreposition`
- 更新 `getEntryCategories`
- 更新 `getHomeCategory`
- 更新 `partitionByHomeCategory`

首页主分类优先级采用：

- `dynamic > time > abstract > space`

原因：

- `dynamic` 和 `time` 已经有稳定的使用路径
- 抽象词不能继续被错误吞进 `space`
- `space` 仍保留为默认基础类

### 6.3 文案层

更新 [src/data/i18n.ts](/Users/liubo/Desktop/PROJECT/preposition/src/data/i18n.ts)：

- 首页新增 `abstract` 分组标题和说明
- 详情页新增 `abstract` 分类按钮文案
- 例句区新增 `abstract` 小节标题

推荐统一文案：

- 中文
  - 分类按钮：`抽象`
  - 首页分组：`抽象关系`
  - 例句区：`抽象用法例句`
- 英文
  - 分类按钮：`Abstract`
  - 首页分组：`Abstract relations`
  - 例句区：`Abstract examples`

### 6.4 详情页层

更新 [src/components/PrepositionDetail.tsx](/Users/liubo/Desktop/PROJECT/preposition/src/components/PrepositionDetail.tsx)：

- 顶部 category switch 支持 `abstract`
- 仍然只展示该词条实际拥有的分类
- 保持切换顺序稳定

### 6.5 例句面板层

更新 [src/components/PrepositionTextPanel.tsx](/Users/liubo/Desktop/PROJECT/preposition/src/components/PrepositionTextPanel.tsx)：

- 识别 `examplesByCategory.abstract`
- 在分类过滤中加入 `abstract`
- 标题文案跟随 locale 正确变化

这是本次升级的关键 UI 修正点，因为它直接决定抽象词条看起来是否像正式详情页。

### 6.6 首页 Gallery 层

更新 [src/components/PrepositionGallery.tsx](/Users/liubo/Desktop/PROJECT/preposition/src/components/PrepositionGallery.tsx)：

- 从三分区扩为四分区
- 保留现有搜索、计数、空状态结构
- 不调整卡片组件

### 6.7 Playground 兼容层

检查 [src/components/SpatialPlayground.tsx](/Users/liubo/Desktop/PROJECT/preposition/src/components/SpatialPlayground.tsx)：

- 本次只做兼容，不扩成抽象练习器
- 目标是避免新词进入旧逻辑时报错或产生明显错误标签

### 6.8 SEO 层

更新 [src/app/[locale]/p/[id]/page.tsx](/Users/liubo/Desktop/PROJECT/preposition/src/app/[locale]/p/[id]/page.tsx)：

- 让 `getSeoCategories` 等逻辑识别 `abstract`
- 为 `abstract` 补可用 title suffix / description 模板
- 保持 override 机制继续有效

### 6.9 时间轴层

更新 [src/lib/categoryScene.ts](/Users/liubo/Desktop/PROJECT/preposition/src/lib/categoryScene.ts)：

- 为 `since`
  - 起点在过去，关系持续到现在
- 为 `until`
  - 持续到边界结束
- 为 `during`
  - 在一个时间段内发生

补足时间 scene 映射，避免这些词条只能用空间球位硬凑。

## 7. 11 个新词条的逐词设计

### 7.1 apart from

- 主分类：`abstract`
- 辅分类：`space`
- 语义核心：除……之外；此外
- scene：`ringCubes`，球体在群组外侧，表现“从集合中分开”
- relatedIds：`including`、`without`、`away-from`、`instead-of`
- 内容重点：
  - 先讲排除关系
  - 再讲“此外”这一扩展义
  - 物理“分开”只作为记忆桥

### 7.2 according to

- 主分类：`abstract`
- 语义核心：根据、按照、据……所说
- scene：中性静态 scene，优先 `twoCubes`
- relatedIds：`as`、`due-to`、`via`、`about`
- 内容重点：
  - 来源/依据
  - 按规则/按信息来源
  - 不扩成连词或引语系统课

### 7.3 away from

- 主分类：`space`
- 辅分类：`dynamic`
- 语义核心：离开、远离、别靠近
- scene：`singleCube` + 向外移动动画
- relatedIds：`close-to`、`far-from`、`from`、`off`
- 内容重点：
  - 安全提示
  - 保持距离
  - 与 `far from` 的静态距离对比

### 7.4 as

- 主分类：`abstract`
- 语义核心：作为、以……身份、当作
- scene：中性静态 scene，`singleCube`
- relatedIds：`according-to`、`instead-of`、`about`、`due-to`
- 内容重点：
  - 只讲介词用法 `as + role/function`
  - 不展开 `as...as...`、连词 as

### 7.5 since

- 主分类：`time`
- 语义核心：自从（起点持续到现在）
- scene：时间轴
- relatedIds：`after`、`from`、`during`、`until`
- 内容重点：
  - 起点 + 持续
  - 与 `after`、`from` 区别
  - 只讲介词页范围内高频用法

### 7.6 until

- 主分类：`time`
- 语义核心：直到……为止
- scene：时间轴
- relatedIds：`since`、`after`、`from`、`to`
- 内容重点：
  - 持续到终点
  - 与 `by`、`to`、`through` 区别

### 7.7 including

- 主分类：`abstract`
- 语义核心：包括、包含在内
- scene：`ringCubes`，球体在群组内
- relatedIds：`apart-from`、`among`、`within`、`about`
- 内容重点：
  - “算在里面”
  - 列举成员而非穷尽说明

### 7.8 due to

- 主分类：`abstract`
- 语义核心：由于、因为
- scene：中性静态 scene
- relatedIds：`according-to`、`since`、`as`、`instead-of`
- 内容重点：
  - 原因归属
  - 限定为介词短语用法，不扩写因果连词课

### 7.9 during

- 主分类：`time`
- 语义核心：在……期间
- scene：时间轴 `duration`
- relatedIds：`over`、`throughout`、`after`、`since`
- 内容重点：
  - 在一个时间段内
  - 不是起点，不是终点，不表示“多久之后”

### 7.10 instead of

- 主分类：`abstract`
- 语义核心：而不是、代替
- scene：`twoCubes`
- relatedIds：`as`、`apart-from`、`without`、`due-to`
- 内容重点：
  - A 替代 B
  - 常见初学者替换错误

### 7.11 via

- 主分类：`dynamic`
- 辅分类：`abstract`
- 语义核心：通过、经由、借助某条路线/渠道/中间人
- scene：`twoCubes` + 路径动画
- relatedIds：`through`、`by`、`from`、`according-to`
- 内容重点：
  - 经由实体路径
  - 经由抽象渠道
  - 与 `through`、`by` 的边界

## 8. 数据接入标准

每个新词条都必须按现有模块化目录接入：

- `meta.ts`
- `scene.ts`
- `content/en.ts`
- `content/zh-CN.ts`
- `index.ts`

并满足：

1. `meta.id` 与目录名一致
2. `content/en.ts` 与 `content/zh-CN.ts` 字段成对
3. `relatedIds` 不悬空
4. 注册顺序与 `shared/order.ts` 同步
5. `shared/registry.ts` 重新生成

## 9. 内容完成标准

本轮新增页的目标是“结构完整、可正式上线”，不是“文案一次打磨到最终版”。

因此每页至少满足：

- `meaning`
- `cardMeaning`
- `tips` 2-3 条
- `examples` 至少 2 条
- `comparison` 至少 2 组
- `collocationGroups` 至少 3 组
- `commonMistakes` 至少 2-3 条
- `quiz` 至少 3 题
- `faq` 至少 6-8 条

中英双语必须同步齐全，不允许先只上英文。

## 10. 风险与稳定性要求

### 10.1 主要风险

1. `abstract` 接入后首页分组顺序失稳
2. 老词条被错误重新归类
3. 详情页例句面板遗漏新分类
4. SEO 描述误判
5. `relatedIds` 链接新旧词条时出现悬空引用
6. 新词条 scene 过度解释，反而误导

### 10.2 稳定性要求

实施后必须回归检查：

- 首页四分组正常
- 搜索正常
- 11 个新词页都可访问
- 中英切换正常
- FAQ JSON-LD 正常
- 构建通过
- 数据结构校验通过

并抽查以下旧词条不回退：

- `about`
- `after`
- `from`
- `over`
- `among`
- `close-to`

## 11. 推荐实施顺序

1. 先做四分法结构升级
2. 再补 `abstract` 首页/详情/例句/SEO 接入口
3. 再补时间轴对 `since / until / during`
4. 再新增 11 个词条目录和内容
5. 再刷新 registry 与数据校验
6. 最后做构建与页面回归

## 12. 交付结果定义

本设计完成后，后续实施应交付：

1. 支持 `abstract` 的四分法站点结构
2. 11 个新介词/介词短语的正式详情页
3. 不回退现有 52 个词条页的稳定性
4. 后续可继续追加抽象义词条的接入底座

