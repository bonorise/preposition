# due to 页面优化设计

## 背景

目标页面：`/p/due-to` 与 `/zh-CN/p/due-to`。

当前 `due to` 已有正式内容，但 3D 示意仍是默认单立方体 + 小球，不能直观表达 “cause -> result”。差异解析也主要覆盖 `because of` 与 `according to`，还缺少初学者最容易犯错的 `due to + 名词词组` 与 `because + 从句` 区分。

## PRD 对应条目

- `0. 背景与目标（按阶段拆解）`：通过极简线框与立体感帮助零基础用户建立直觉。
- `3.2 3D 视觉（必须）`：使用极简线框、基础立体感、淡灰地面或柔和阴影等低干扰视觉。
- `4.1 释义风格（初学者友好）`：中文释义追求“看得懂 + 好记”。
- `4.2 例句（必须）`：多义或抽象词条应在现有文本模块解释共享核心感觉，保持详情页结构稳定。
- `5.2 数据结构必须支持多语言`：中英文页面核心解释必须一致，不能出现互相冲突的语义主轴。
- `7.3 关键工程约束（必须）`：内容和场景保持数据驱动，新增表达尽量复用现有渲染逻辑。

## 设计目标

1. 用极简 3D 信息图表达 `due to = cause -> result`。
2. 中英文内容同步优化，保证语义主轴一致。
3. 差异解析覆盖 `because of`、`because`、`according to` 三类真实误用。
4. 决策树改为 `due to` 专属判断，不再落入空间介词通用判断。
5. 尽量复用现有组件结构，只扩展必要的数据能力。

## 方案选择

采用“扩展 `abstractDiagram` 节点形态”的方案。

现有 `PrepositionViewer3D` 已支持 `abstractDiagram` 的节点、箭头、标签和球体锚点，`since` 页面也使用它表达因果关系。本次在该能力上增加节点形态支持，让节点可渲染为半透明线框立方体。这样既能满足 `due to` 的视觉要求，也为后续 `because of`、`result from`、`lead to` 等抽象关系页面预留复用空间。

不采用只用 `twoCubes` 的方案，因为它缺少稳定的 cause/result 标签和语义箭头。不采用专属 `causeResultCubes` variant，因为它会把通用因果图能力写死在一个词条上。

## 3D 信息图设计

`due-to` 的 abstract 场景改为：

- 背景保持现有页面白色或极浅灰色。
- 场景关闭地面，减少空间位置暗示。
- 左侧节点为半透明线框立方体，标签 `cause`。
- 右侧节点为半透明线框立方体，标签 `result`。
- 中间用明显的灰色箭头从左指向右。
- 相机采用正面轻微透视，让立方体有 3D 体积感。
- 小球缩小并锚定在 cause 节点附近，仅用于兼容现有 viewer 的球体机制，不抢主视觉。

视觉重点固定为：

```text
cause -> result
```

中文界面标签也使用 `cause` / `result`，因为用户明确指定图中标注这两个英文词；解释文本仍使用中文。

## 内容设计

### 核心释义

中文主轴：

`due to` 表示“由于……而产生某个结果 / 由……造成”。它不是信息来源，也不是完整从句连接词；后面通常接名词词组。

英文主轴：

`due to` means “because of / caused by,” and it links a result to the cause behind it. It is normally followed by a noun phrase.

### 差异解析

差异解析改为三组：

- `because of`：意思接近，`due to` 更正式、更书面，常用于说明某个结果的成因。
- `because`：`because + 完整从句`；`due to + 名词词组`。
- `according to`：引出信息来源、规则或依据；`due to` 引出原因或成因。

### 决策树

`PrepositionDecisionTree` 增加 `word === "due to"` 分支。

中文判断顺序：

1. 后面是不是名词词组原因？是 -> 用 `due to`。
2. 后面是不是完整句子？是 -> 用 `because`。
3. 是否想要更口语、更普通的原因表达？可用 `because of`。
4. 后面是不是报告、数据、规则、医生等信息来源？是 -> 用 `according to`。
5. 是否是“到期 / 预定应做”的 `be due to do` 或 `due date`？这不是本页的 `due to + noun` 因果用法。

英文决策树同步表达同样逻辑。

## 涉及文件

- `src/data/types.ts`
- `src/components/PrepositionViewer3D.tsx`
- `src/components/PrepositionDecisionTree.tsx`
- `src/data/prepositions/due-to/scene.ts`
- `src/data/prepositions/due-to/content/zh-CN.ts`
- `src/data/prepositions/due-to/content/en.ts`
- `docs/PROGRESS.md`

## 验收标准

- `due to` 详情页的 abstract 3D 图显示两个半透明线框立方体，左侧标注 `cause`，右侧标注 `result`，箭头从左向右。
- 图中无复杂背景、人物或装饰元素。
- 中文与英文页面均围绕 `cause -> result` 解释 `due to`。
- 差异解析包含 `because of`、`because`、`according to`，且每组有最小对比例句。
- 决策树在 `due to` 页面显示专属问题，不出现空间介词通用判断。
- TypeScript 类型、lint、构建或项目现有检查通过。

