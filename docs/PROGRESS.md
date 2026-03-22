# Preposition Dino 项目 Todo（分期）

> 说明：对照 `docs/PRD.md` 与当前完成情况整理。统一使用 Markdown checkbox 标记进度：`[x]` 已完成 / `[ ]` 未完成。

## Meta｜流程与文档

- [x] 规范化需求/进度真源位置：`docs/PRD.md` + `docs/PROGRESS.md`
- [x] 对照 `docs/PRD.md` 完成一次代码级进度核查并回写勾选状态（2026-02-14）
- [x] 产出 `preposition.worddino.com` 主域切换设计与实施计划（2026-03-11）
- [x] 产出介词数据模块化重构设计与实施计划（2026-03-22）
- [x] 完善 README 项目说明文档（目标、架构、目录、命令、数据流、维护流程；2026-03-22）

## Phase 0.5｜数据结构可扩展性

- [x] 介词数据目录化：按词条拆分 `meta.ts` / `scene.ts` / `content/<locale>.ts`。（2026-03-22）
- [x] 聚合层兼容：保留 `PREPOSITIONS` 与查询 API，页面层无感切换到新数据目录。（2026-03-22）
- [x] 数据校验脚本：校验目录名、`meta.id`、必填语言内容、`relatedIds` 引用完整性。（2026-03-22）
- [x] registry 可维护性提升：词条顺序独立到 `shared/order.ts`，并通过脚本自动生成 `shared/registry.ts`。（2026-03-22）

## Phase 0｜已完成的基础 MVP

- [x] Next.js App Router + Tailwind 基础工程
- [x] 列表页：搜索、卡片网格、进入详情
- [x] 详情页：3D 旋转/缩放/重置、文本说明与例句
- [x] 数据驱动：i18n 结构、scene 参数、51 个介词条目
- [x] Prev/Next 导航

## Phase 1｜结构组件化（基础提升）

- [x] 新增 Header 组件（站点名/说明/返回首页入口）
- [x] 新增 Footer 组件（版权/版本/简短说明）
- [x] 在布局中统一挂载 Header/Footer（app layout）
- [x] 补齐 Header/Footer i18n 文案
- [x] 详情页顶部导航顺序调整为 Prev / 返回列表 / Next，并统一释义区与主体双列宽度（2026-03-22）
- [x] 详情页顶部导航微调：按钮文字取消加粗、按钮高度下调，并与介词标题行居中对齐（2026-03-22）
- [x] 封面卡片简介收敛：支持 `cardMeaning` 短摘要，并统一限制卡片简介最多展示 3 行（2026-03-22）

## Phase 2｜详情页相关画廊导航（核心新增需求）

- [x] 为每个介词补充 relatedIds 关系数据（in → out/into/inside/outside）
- [x] 新增相关画廊组件（4 张卡片）
- [x] 复用首页卡片风格（PrepositionCard）
- [x] 在 /p/[id] 页面底部插入相关画廊

## Phase 3｜PRD 扩展项（可选）

- [ ] 列表页标签筛选（tags 过滤）。（阻塞：当前 `src/lib/search.ts` 仅按 word/meaning 搜索，未实现 tags 状态与筛选 UI。）
- [ ] 例句“复制”按钮（PRD 9.2 可选）。（阻塞：详情页与例句面板未提供 copy 交互。）
- [x] SEO 完整化（结构化数据、扩展 meta）
- [x] SEO 路由规范化：/p/[id] 永久重定向至 /en/p/[id]，避免重复收录
- [x] SEO｜详情页内容优化清单（初学者+SEO评分>=85 视为完成；2026-02-14；完成 51/51）
- [x] in (/in) score=95
- [x] on (/on) score=95
- [x] under (/under) score=95
- [x] over (/over) score=95
- [x] above (/above) score=95
- [x] below (/below) score=95
- [x] beside (/beside) score=95
- [x] next to (/next-to) score=95
- [x] near (/near) score=95
- [x] by (/by) score=90
- [x] behind (/behind) score=91
- [x] in front of (/in-front-of) score=90（2026-02-19：主打 in front of vs in the front of；补齐对比/易错/测验/FAQ；去模板化搭配；补齐 /in-front-of 短链跳转）
- [x] between (/between) score=90
- [x] among (/among) score=85（2026-02-20：极简两步prompt自动化，已通过 qa:content + build）
- [x] around (/around) score=88（2026-02-20：极简脚本自动化补齐文案+metadata，已通过 qa:content + build）
- [x] inside (/inside) score=90（2026-02-20：极简两步prompt自动化，已通过 qa:content + build）
- [x] outside (/outside) score=85
- [x] across (/across) score=90（2026-02-14：替换动态例句/易错点/测验为自然语料；SEO title 主打 across vs through）
- [x] through (/through) score=90（2026-02-14：修正释义与对比（through vs across/throughout）；替换 time/dynamic 例句与模板化错题；补齐搭配/FAQ；SEO title 主打 through vs across）
- [x] against (/against) score=91（2026-02-20：极简两步prompt自动化，已通过 qa:content + build）
- [x] along (/along) score=90
- [x] into (/into) score=90
- [x] onto (/onto) score=90
- [x] out of (/out-of) score=90
- [x] at (/at) score=90
- [x] after (/after) score=95
- [x] to (/to) score=94（2026-02-20：极简两步prompt自动化，已通过 qa:content + build）
- [x] from (/from) score=90（2026-02-20：极简两步prompt自动化，已通过 qa:content + build）
- [x] up (/up) score=90
- [x] down (/down) score=90
- [x] off (/off) score=90
- [x] beneath (/beneath) score=95
- [x] underneath (/underneath) score=95
- [x] within (/within) score=90
- [x] without (/without) score=85（2026-02-20：极简两步prompt自动化，已通过 qa:content + build）
- [x] past (/past) score=90（2026-02-14：修正时间/路径用法与对比（past vs to/after/beyond）；补齐搭配/易错/测验/FAQ；SEO title 主打 past vs to）
- [x] toward (/toward) score=90
- [x] across from (/across-from) score=86（2026-02-20：极简脚本自动化补齐文案+metadata，已通过 qa:content + build）
- [x] opposite (/opposite) score=90（2026-02-14：补齐对比（opposite vs across from/in front of/across）；替换搭配/易错/测验/FAQ；SEO title 主打 opposite vs across from）
- [x] throughout (/throughout) score=90
- [x] amid (/amid) score=86（2026-02-20：极简脚本自动化补齐文案+metadata，已通过 qa:content + build）
- [x] amidst (/amidst) score=86（2026-02-20：极简脚本自动化补齐文案+metadata，已通过 qa:content + build）
- [x] alongside (/alongside) score=90
- [x] beyond (/beyond) score=85
- [x] upon (/upon) score=95
- [x] on top of (/on-top-of) score=95
- [x] in the middle of (/in-the-middle-of) score=86（2026-02-20：极简脚本自动化补齐文案+metadata，已通过 qa:content + build）
- [x] in back of (/in-back-of) score=90（2026-02-14：修正与 behind/in the back of 的差异；移除不自然抽象搭配；替换易错点/测验/FAQ；补齐 /in-back-of 短链跳转）
- [x] ahead of (/ahead-of) score=90
- [x] close to (/close-to) score=95
- [x] far from (/far-from) score=90（2026-02-14：重写对比（far from vs near/close to/away from）；替换搭配/易错/测验/FAQ；加入 far from perfect；SEO title 主打 far from vs near）
- [x] 动画按钮（directional prepositions）
- [x] 常用词组组合数量统一为 3 的倍数（每个单词页）
- [ ] 详情页学习闭环：每个介词页补齐（适用类别例句≥2、易混词对比 2-3 组含对比例句、常用组合 21/24 条）。（阻塞：仍有适用类别例句不足与常用组合数量未到 21/24 的词条。）
- [ ] 动态介词加强：补齐“过程感”例句（动作动词 + 起点/终点），3D 增加暂停/单步/速度控制（课堂演示更稳）。（阻塞：当前仅有播放按钮，尚无暂停/单步/速度控制。）
- [x] 新手纠错模块：常见错误/不该用场景（负例对比往往比多加正例更有效）
- [ ] 易混淆对比专题（on/in/at、above/over、between/among 等）：一句规则 + 两个最小对比句 + 小图。（阻塞：已有词条内对比模块，但尚未形成独立专题页与专题小图。）
- [x] 时间介词可视化：时间轴/日历/钟表小图（时间语义优先，不强依赖 3D 立方体）
- [x] 标签（tags）降噪：默认折叠或改为“关键点”文案，仅保留 2-3 条最关键提示
- [x] 每页微测验（3 题）：选词填空 + 即时反馈（主动回忆/巩固）
- [x] 新增 about 介词词条页（空间/时间/动态图解 + 抽象义文案 + SEO/GEO 文案覆盖）。
- [x] 补强 about 释义中的词根拆解（保留 ab- / out / 外围转圈，便于记忆）。
- [ ] 拖拽摆放 + 判定（练习模式）。（阻塞：已有拖拽演示，但尚未实现 Check 判定与偏差反馈。）
- [ ] 账号/学习进度（后续）。（阻塞：当前仍是无账号、无持久学习进度模式。）

## Phase 4｜内容与商业化扩展

- [x] 增加 About 页面（原因 / 愿景 / 使命）
- [x] Footer 增加法律协议页面入口（Terms、Policy、版权/DMCA 等）
- [x] 补充时间介词模块（按时间介词 / 空间介词 / 动态介词分类）
- [ ] 增加多语言（日本语 / 한국어 / Español 等）。（阻塞：当前仅 `en` 与 `zh-CN` 两种 locale。）
- [x] 域名检查：word Monster 是否可用。（阻塞：仓库内暂无可追溯的检查记录或结果文档。）
- [x] 生产主域切换到 `https://preposition.worddino.com`，并将 `https://prepositiondino.vercel.app` 永久跳转到新域名。
- [x] 在 Vercel 项目中添加 `preposition.worddino.com` 自定义域名并等待证书 Ready。
- [x] 在 Cloudflare 为 `preposition.worddino.com` 新增指向 Vercel 的 `CNAME` 记录。
- [x] 在 Vercel 将 `NEXT_PUBLIC_SITE_URL` 统一为 `https://preposition.worddino.com` 并重新部署生产环境。
- [x] 将 `prepositiondino.vercel.app` 配置为永久跳转到 `https://preposition.worddino.com`，保留 path 与 query。
- [ ] 立方体与小球加眼睛（更生动）。（阻塞：当前仅 playground 小球加眼睛，立方体与主详情 3D 视图未覆盖。）
- [x] 介词测试模块（游戏化测验）
- [ ] Remotion 视频生成（介词用法/常用词组/动画导出用于 YouTube/X）。（阻塞：仓库尚无 Remotion 相关工程与导出脚本。）
- [ ] 教学模式（教师投屏视图 + 课堂用演示顺序）。（阻塞：当前无独立教学视图与预设演示流程。）
- [ ] 可分享链接（单词页一键生成“教学卡片图”）。（阻塞：当前无卡片生成与分享链接构建能力。）
