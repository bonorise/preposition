# apart from 页面优化设计

## 背景

`/p/apart-from` 已经是正式词条页，但当前内容和示意图仍偏模板化：决策树没有充分从 `apart from` 自身的“分离/排除”逻辑出发，差异解析只有 2 个对比词，常见错误代表性不足，示意图也没有准确表达“从整体中分离出一个因素”的画面。

本次优化采用小范围精准调整：保留现有详情页结构，只优化 `apart-from` 的中英文内容、场景配置、缩略图生成结果，以及必要的渲染能力。

## 目标

1. 顶部释义用 `a`、`part`、`from` 建立“从整体中分离出来”的核心心智模型。
2. 决策树从 `apart from` 的排除、补充、空间分离三类真实用法出发，不套用其他介词模板。
3. 差异解析补到 3 个：`except for`、`including`、`besides / in addition to`。
4. 常见错误改为初学者更常见的代表性错误。
5. 示意图改为 4 个立方体中 1 个变成紫色，小球贴在这个紫色立方体表面，表达“这一项被单独分离出来/拿出来看”。
6. 首页 `apart from` 卡片封面图同步更新为新的示意图。
7. 中英文内容保持同等信息量，不出现一端优化、另一端缺失。

## 推荐方案

采用“内容定向优化 + 轻量扩展现有 ringCubes 渲染”的方案。

- 内容层只修改 `src/data/prepositions/apart-from/content/en.ts` 和 `src/data/prepositions/apart-from/content/zh-CN.ts`。
- 场景层继续使用 `ringCubes`，但为场景配置增加可选的高亮立方体能力，使某一个立方体可使用紫色面材质。
- `src/data/prepositions/apart-from/scene.ts` 调整球的位置，让小球位于紫色立方体表面。
- `scripts/generate-thumbnails.ts` 同步识别高亮立方体配置，保证 SVG 缩略图和页面 3D 语义一致。
- 运行缩略图脚本，更新 `public/thumbnails/apart-from.svg` 以及相关分类缩略图。

## 取舍

这个方案比手工改 SVG 更稳，因为详情页 3D 图和首页封面不会分叉；也比新增一个完整场景 variant 更轻，因为当前需求只需要在 `ringCubes` 上表达“一个成员被标出/分离”。

## 内容设计

顶部释义：

- 中文强调：字母 `a` 可以帮助记成“方向/箭头”，`part` 是分开、分离，`from` 是“从……”，合起来就是“从某处/整体中分离出来”。把某个因素分离出去时，就是“除了……”。
- 英文同步表达：`apart from` literally points to something separated from a source or group; in use, it often means excluding one item, and sometimes adding another item beside the main set.

决策树：

1. 句子是否在把某项从整体里拿出来？
2. 拿出来之后，其他部分是否仍成立？如果是，用排除义 `apart from`。
3. 句子是否是在添加“除了 A 还 B”？如果是，用补充义，并提醒可与 `besides / in addition to` 对照。
4. 是否是真实空间上的隔开？如果是，保留物理分离义。
5. 如果是在把某项算进整体，转向 `including`；如果只是纯排除且语气更直接，可对照 `except for`。

差异解析：

- `except for`：更直接、更窄的排除标记。
- `including`：方向相反，是把某项算进去。
- `besides / in addition to`：补充添加义更清楚，避免把 `apart from` 的补充义误读成排除义。

常见错误：

- `apart from of ...`：误把固定短语后再加 `of`。
- 用 `including` 表达“排除某人/某物”。
- 在补充语境里把 `apart from` 误解成排除，导致句意反向。

## 视觉设计

`ringCubes` 保持 4 个立方体。默认 3 个立方体仍为白色透明面 + 深色边线；其中一个立方体使用和小球一致的紫色面材质。小球放在紫色立方体的外侧表面上，形成“这个成员被标出来，并从整体中分离看待”的视觉锚点。

首页卡片缩略图必须由同一场景配置生成，不能手工画一个不一致版本。

## 验收

- `/p/apart-from` 顶部释义、tips、差异解析、常见错误中英文同步更新。
- 差异解析为 3 项，每项至少有 2 个对比例句。
- 常见错误为 3 项，且都是初学者真实高频误区。
- 详情页 3D 示意图出现 4 个立方体，其中 1 个紫色，小球贴在紫色立方体表面。
- 首页 `apart from` 卡片封面图同步显示新示意图。
- 内容 QA、类型检查或相关测试通过。
