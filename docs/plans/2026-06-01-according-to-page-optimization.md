# according to 中文页内容优化修改计划

## 背景与目标

目标页面：`/zh/p/according-to`

本计划用于指导后续通过 DeepSeek API 执行内容与组件修改。重点解决：

- 释义需要融合 `accord`（达成一致）与 `to`（目标）的记忆线，明确 `according to` 的核心含义是“与……一致”。
- “差异解析”中的对比词需要贴合 `according to` 的真实误用场景。
- 决策树需要从通用空间介词判断改成 `according to` 专属判断。
- 微测验第 3 题需要替换为更合理的 `according to` 用法题。

## PRD 对应条目

执行本计划时需要回读 `docs/PRD.md`，本任务对应：

- `4.1 释义风格（初学者友好）`：中文释义追求“看得懂 + 好记”。
- `4.2 例句（必须）`：多义词条优先在现有 `meaning / tips / comparison / FAQ` 文本模块中解释共享核心感觉，再分别展开常见用法，不随意改变详情页总结构。
- `5.2 数据结构必须支持多语言`：中英文页面核心解释必须一致，不能出现互相冲突的语义主轴。

## 涉及文件

主要修改：

- `src/data/prepositions/according-to/content/zh-CN.ts`
- `src/data/prepositions/according-to/content/en.ts`
- `src/components/PrepositionDecisionTree.tsx`

执行完成后按项目 DoD 更新：

- `docs/PROGRESS.md`

## 具体修改

### 1. 优化中文释义

文件：`src/data/prepositions/according-to/content/zh-CN.ts`

将 `meaning` 改为：

```ts
meaning:
  "according to：核心是“与……一致”。according 来自 accord（达成一致），to 表示目标；接消息来源时，表示“与该来源的说法一致”，即“据……所说 / 据……报道”；接计划、规则或标准时，表示“与该计划/标准一致”，即“按照 / 根据”。",
```

将 `cardMeaning` 改为：

```ts
cardMeaning: "according to：与……一致；据……所说 / 按照……",
```

将 `tips` 改为：

```ts
tips: [
  "according 来自 accord（达成一致），to 指向目标，所以 according to 的底层感觉是“与某个来源、计划或标准一致”。",
  "后面接消息来源时：according to the report / according to my doctor，意思是“据报告 / 据医生说”。",
  "后面接计划、规则、标准时：according to plan / according to policy / according to the rules，意思是“按计划 / 按规定 / 按规则”。",
],
```

同步微调中文 `faq[0]`：

```ts
{
  question: "according to 的核心意思是什么？",
  answer:
    "核心是“与……一致”：与来源的说法一致，就是“据……所说”；与计划、规则或标准一致，就是“按照 / 根据”。",
},
```

### 2. 同步英文内容主轴

文件：`src/data/prepositions/according-to/content/en.ts`

同步更新英文 `meaning / cardMeaning / tips / faq[0]`，避免中英文页面语义主轴冲突。

建议英文内容：

```ts
meaning:
  "according to: in agreement with a source, rule, report, plan, or standard.",
cardMeaning: "according to: in agreement with / as stated by.",
tips: [
  "The core idea is agreement: the statement or action matches a source, rule, plan, or standard.",
  "Before a source, it means as stated by: according to the report / according to my doctor.",
  "Before a rule, plan, or standard, it means following it: according to policy / according to schedule.",
],
```

英文 `faq[0]`：

```ts
{
  question: "What is the core idea of according to?",
  answer:
    "It means that a statement or action is in agreement with a source, rule, plan, or standard.",
},
```

### 3. 重写差异解析

文件：`src/data/prepositions/according-to/content/zh-CN.ts`

将 `comparison.summary` 改为：

```ts
summary:
  "according to 不是“关于”、不是“因为”，也通常不表达“我个人觉得”。它只是在说：这句话或做法与哪个外部来源、计划、规则或标准一致。",
```

将 `comparison.differences` 改为 3 组：

```ts
differences: [
  {
    term: "in my opinion",
    description:
      "in my opinion 用来表达自己的看法；according to 通常引出外部来源，不用来表达“我个人觉得”。",
    examples: [
      {
        term: "in my opinion",
        sentence: "In my opinion, this route is better.",
        translation: "在我看来，这条路线更好。",
      },
      {
        term: "according to",
        sentence: "According to the map, this route is shorter.",
        translation: "根据地图，这条路线更短。",
      },
    ],
  },
  {
    term: "about",
    description:
      "about 引出话题内容；according to 引出信息来源、依据、计划或标准。",
    examples: [
      {
        term: "about",
        sentence: "This book is about climate change.",
        translation: "这本书是关于气候变化的。",
      },
      {
        term: "according to",
        sentence: "According to this book, climate change is accelerating.",
        translation: "根据这本书的说法，气候变化正在加速。",
      },
    ],
  },
  {
    term: "due to",
    description:
      "due to 引出原因；according to 引出信息来源、规则、计划或标准。",
    examples: [
      {
        term: "due to",
        sentence: "The delay was due to heavy traffic.",
        translation: "延误是因为交通拥堵。",
      },
      {
        term: "according to",
        sentence: "According to the traffic report, the road is closed.",
        translation: "根据交通报告，这条路封闭了。",
      },
    ],
  },
],
```

文件 `src/data/prepositions/according-to/content/en.ts` 中的 `comparison` 同步调整为英文版本，保持 3 组对比：

- `in my opinion`
- `about`
- `due to`

### 4. 增加 according to 专属决策树

文件：`src/components/PrepositionDecisionTree.tsx`

在通用 fallback 分支之前新增 `word === "according to"` 分支，避免该页落入空间介词默认判断。

中文决策树固定为 5 条：

```ts
questions.push({
  question: "后面是报告、新闻、医生、地图、数据、邮件等信息来源吗？",
  answer: "是 -> 用 according to，表示“据……所说 / 根据……”。",
});
questions.push({
  question: "后面是计划、规则、政策、合同、标准或传统吗？",
  answer: "是 -> 用 according to，表示“按照 / 根据”。",
});
questions.push({
  question: "你是在表达自己的个人看法吗？",
  answer: "是 -> 用 in my opinion / I think，不用 according to me。",
});
questions.push({
  question: "你只是说“关于某个话题”吗？",
  answer: "是 -> 用 about，不用 according to。",
});
questions.push({
  question: "你是在说明原因或成因吗？",
  answer: "是 -> 用 due to / because of，不用 according to。",
});
```

英文决策树同步增加对应 5 条：

```ts
questions.push({
  question: "Is the next phrase a source, such as a report, news item, doctor, map, data, or email?",
  answer: "Yes -> use according to. It means as stated by / based on that source.",
});
questions.push({
  question: "Is the next phrase a plan, rule, policy, contract, standard, or tradition?",
  answer: "Yes -> use according to. It means following that plan, rule, or standard.",
});
questions.push({
  question: "Are you expressing your own personal opinion?",
  answer: "Yes -> use in my opinion / I think, not according to me.",
});
questions.push({
  question: "Are you only naming the topic?",
  answer: "Yes -> use about, not according to.",
});
questions.push({
  question: "Are you explaining the cause or reason?",
  answer: "Yes -> use due to / because of, not according to.",
});
```

### 5. 修正微测验第 3 题

文件：`src/data/prepositions/according-to/content/zh-CN.ts`

替换 `quiz[2]` 为：

```ts
{
  prompt: "___ the traffic report, the bridge is closed.",
  options: ["According to", "Due to", "About"],
  answer: "According to",
  explanation: "traffic report 是信息来源，不是原因或话题，所以用 according to。",
}
```

文件：`src/data/prepositions/according-to/content/en.ts`

同步替换 `quiz[2]` 为：

```ts
{
  prompt: "___ the traffic report, the bridge is closed.",
  options: ["According to", "Due to", "About"],
  answer: "According to",
  explanation:
    "The traffic report is the source of the information, so according to is correct.",
}
```

## 验收标准

执行完成后确认：

- `/zh/p/according-to` 的释义包含 `accord / 达成一致 / to / 目标 / 与……一致` 这条记忆线。
- 消息来源用法明确为“据……所说 / 据……报道”。
- 计划、规则、标准用法明确为“按照 / 根据”。
- 差异解析显示 `in my opinion / about / due to`，不再以 `by` 作为主要对比词。
- 决策树不再出现空间介词判断，如“接触表面”“容器内部”“上方/下方”等。
- 微测验第 3 题答案为 `According to`，且考察信息来源用法。
- 中英文内容主轴一致，不出现互相冲突的解释。

## 测试命令

执行修改后运行：

```bash
npm run qa:content
npm run check:prepositions
npm run lint
```

如修改触及页面渲染或组件逻辑，建议再运行：

```bash
npm run build
```

## 执行阶段 DoD

执行本计划并修改代码后，必须：

1. 回读 `docs/PRD.md`。
2. 列出本次对应 PRD 条目。
3. 自检是否满足验收标准。
4. 更新 `docs/PROGRESS.md`：
   - 已完成项标记 `[x]`
   - 未完成项保持 `[ ]` 并追加阻塞原因
   - 新发现子任务追加为 `[ ]`
5. 最终回复固定包含：
   - 完成/未完成结论
   - 变更文件列表
   - 需要用户人工确认的点
