# 小红书内容工作室 / XHS Content Studio

> 一个让 Codex 从真实来源、账号个性和视觉方向出发，完成小红书选题到图文成品的双语工作流插件。
> A bilingual Codex workflow plugin for turning real sources, account identity, and visual direction into publish-ready Xiaohongshu content.

## 为什么不是另一个“AI 写文案”工具？ / Why not another AI copywriting tool?

小红书内容最容易失去辨识度的地方，不是不会写标题，而是账号、来源、选题和封面被拆开了：每一篇都像一个新的陌生账号。

XHS Content Studio 把它们锁进同一条工作流：**先建立这个账号能说什么、应该怎么说；再选一件值得说的事；最后才制作手机端素材。**

The usual failure is not weak headline writing. It is that account identity, source material, topic choice, and cover design get separated—so every post looks like it came from a different account.

XHS Content Studio keeps them in one workflow: **define what this account can say and how it should look; choose something worth saying; only then produce mobile-first assets.**

`账号简报 → 视觉路线 → 来源台账 → 3 个选题卡 → 创作者确认 → 3:4 图文 → 手机端质检 → 发布包`

`Account brief → Visual route → Source ledger → 3 topic cards → Creator approval → 3:4 carousel → Mobile QA → Publish package`

## 核心优势 / What makes it different

| 优势 | 中文说明 | English |
|---|---|---|
| 真实材料先行 | 每个选题都要有来源、事实/引用、账号角度和限制；不编数据、案例、评论或平台规则。 | Every idea starts with a source, fact/quote, account angle, and limitation. No invented metrics, cases, comments, or platform rules. |
| 账号不是空白画布 | 先收集受众、内容支柱、有效旧笔记、口吻、目标和禁区。不同账号不会共用一套人格。 | Start with audience, content pillars, proven posts, voice, goal, and boundaries. Different accounts do not share one generic persona. |
| 先确认，后制作 | 默认只给 3 个结构不同的选题卡；没有明确选择，不生成最终视觉资产。 | By default, provide three structurally different topic cards. No finished visual assets before explicit approval. |
| 可选的视觉定制 | 账号素材、竞品参考、风格库三种输入路线；参考只借方法，不复制 IP 或构图。 | Three visual inputs: account assets, transformed references, or a style library. References inform methods, never copied IP or compositions. |
| 针对小红书图文 | 默认 1080 × 1440 / 3:4，一页一判断，大字、短句、明确滑读节奏。 | Built for Xiaohongshu carousels: 1080 × 1440 / 3:4 by default, one job per slide, large type, short copy, and an intentional swipe rhythm. |
| 成品而非提纲 | 交付排序 PNG、九宫格预览、标题、正文、标签、来源注释和上传顺序。 | Deliver ordered PNGs, a contact sheet, title, caption, tags, source note, and upload order—not just an outline. |

## 完整工作流 / The complete workflow

### 0. 输入账号上下文 / Input account context

提供账号主页、旧笔记、受众、业务目标和可用来源。插件会整理出“账号简报”，其中包含：账号承诺、读者起点、内容支柱、已验证的内容形式、语气和禁区。

Provide a profile, prior posts, audience, business goal, and available sources. The plugin builds an account brief: account promise, reader starting point, pillars, proven formats, voice, and boundaries.

### 1. 先锁定视觉路线 / Lock a visual route before artwork

三选一（也可补充组合）：

1. **账号路线 / Account route**：头像 + 3–6 张主页或旧笔记截图。可指定头像出现频率。
   Avatar + 3–6 profile/post screenshots. Specify whether the avatar appears on every, selected, or no covers.
2. **参考路线 / Reference route**：3–5 个参考，并写明“借什么 / 不借什么”。
   3–5 references, plus “borrow / do not copy” notes.
3. **风格库路线 / Library route**：直接选择 S01–S05。
   Select S01–S05 directly.

没有任一视觉输入时，插件应暂停在制作前，而不是默认套一个“AI 教程模板”。

Without a visual input, the plugin should pause before production instead of applying a generic “AI tutorial” look.

### 2. 把来源整理成可用证据 / Turn sources into usable evidence

每一条可用来源会记录：链接/原始位置、发布者与日期、可引用的事实或观察、创作者自己的解释、与账号的关系、可信度或限制。

For every usable source, record: link/original location, publisher/date, quotable fact or observation, creator interpretation, relevance to the account, and confidence/limitation.

### 3. 只提出 3 个不同的选题 / Propose exactly three different topics

每个选题卡包括：标题、读者收获、来源到观点的推导、图文/视频叙事弧线、互动问题，以及“不声称什么”。

Each topic card includes: working title, reader promise, source-to-angle logic, carousel/video arc, interaction question, and what it does **not** claim.

默认 3 种选题结构：

- **机制拆解 / Mechanism breakdown**：用一个真实产品、作品或现象解释“为什么这样有效”。
- **材料型故事 / Material-led story**：从一个来源/评论/历史材料中挖出值得讨论的观察。
- **可执行实验 / Practical experiment**：给读者一条能当下尝试、记录或比较的路径。

这些是结构，不是固定题材。游戏、工具、生活方式、教育、知识、品牌账号都可以使用不同的内容支柱填充它。

These are structures, not fixed subject matter. Gaming, tools, lifestyle, education, knowledge, and brand accounts can fill them with their own pillars.

### 4. 创作者确认是硬闸门 / Creator approval is a hard gate

用户选定或修改一个选题、一个视觉方向后，才进入生产。插件不能把“你可能喜欢”当成批准。

Production starts only after the user selects or revises one topic and one visual direction. “You might like this” is not approval.

### 5. 产出小红书适配图文 / Produce Xiaohongshu-native carousels

默认规格：

- 1080 × 1440、3:4 竖版；适合信息流与手机阅读。
  1080 × 1440, 3:4 vertical; designed for feed browsing and phones.
- 封面只承担一个承诺：冲突、问题、反直觉或明确收益。
  The cover carries one promise: tension, question, counterintuitive observation, or a clear benefit.
- 正文一页一个判断；视觉材料是论据，不是装饰。
  One judgment per slide; visual material acts as evidence, not decoration.
- 最后一页给具体互动、保存理由或下一步，避免空泛“你觉得呢”。
  The final slide offers a concrete question, save reason, or next action—not a vague “what do you think?”.
- 发布前必须渲染 PNG 并检查封面、文字最密页和结尾页。
  Before handoff, render PNGs and inspect the cover, densest slide, and final slide.

> 这不是“保证流量”的投放工具；它的目标是提高账号与内容的一致性、内容的可验证性和手机端可读性。
> This is not a traffic-guarantee or ad-buying tool. Its goal is stronger account/content consistency, verifiability, and mobile readability.

### 6. 发布包与复盘 / Publish package and learning loop

交付：图片顺序、九宫格、标题备选、正文、标签、来源注释、视觉代码与上传顺序。后续可根据用户提供的真实表现数据，更新账号简报与内容判断。

Deliver: image order, contact sheet, title options, caption, tags, source note, visual code, and upload order. When the creator provides real performance data, update the account brief and future topic judgment.

## 定制矩阵 / Customization matrix

| 可以定制什么？ / What can be customized? | 输入 / Input | 产出影响 / What it changes |
|---|---|---|
| 账号定位 / Account identity | 主页、旧笔记、受众、目标 | 选题边界、语言、CTA、内容支柱 |
| 信息源 / Source pool | RSS、公众号、链接、评论、访谈、产品素材 | 事实基础、选题新鲜度、可引用材料 |
| 选题结构 / Topic format | 机制拆解 / 材料故事 / 可执行实验，或自定义 | 图文叙事、读者收获、互动方式 |
| 视觉路线 / Visual route | 账号素材 / 参考 / S01–S05 | 配色、封面骨架、字体层级、头像/IP使用规则 |
| 系列规则 / Series rules | 栏目名、更新频率、固定标识、封面节奏 | 账号统一感与连续阅读体验 |
| 最终格式 / Delivery format | 图文、图文提纲、视频提纲、发布包 | 输出文件、页面数量、质检方式 |

## 风格库 / Style library

| Code | 风格 / System | 适用内容 / Best for |
|---|---|---|
| S01 | 蓝色手绘 IP / Blue Sketch IP | 原创角色、友好知识、社群系列 / original characters, friendly explainers, community series |
| S02 | 像素花园课 / Pixel Garden Lesson | 新手教程、陪伴式连载、AI 做游戏 / beginner lessons, serial learning, AI game-making |
| S03 | 霓虹拼贴实验室 / Neon Collage Lab | 创意工具、Skill、强视觉实验 / creative tools, skills, visual experiments |
| S04 | 深色研究板 / Dark Research Board | 游戏机制、技术分析、行业拆解 / game mechanics, technology, industry analysis |
| S05 | 黑橙评论台 / Black Amber Review | 热点观点、产品评测、视频评论 / commentary, product takes, video reviews |

风格库沉淀配色、层级、版式骨架与系列规则；不提供对参考账号的临摹。
The library captures palettes, hierarchy, layout skeletons, and series rules; it is not a cloning kit for reference accounts.

## 安装 / Install

### 1. 克隆仓库 / Clone the repository

```powershell
git clone https://github.com/yety1113/xhs-content-studio-community.git
```

### 2. 在 Codex 终端安装 / Install from the Codex terminal

将下方路径替换为你刚克隆仓库的**本地绝对路径**。  
Replace the path with the **absolute local path** where you cloned this repository.

```powershell
codex plugin marketplace add <本仓库的本地绝对路径 / absolute local repository path>
codex plugin add xhs-content-studio@xhs-content-studio-community
```

### 3. 新开一个 Codex 任务 / Start a new Codex task

新任务才能加载最新插件。输入：  
Start a new task so Codex loads the plugin, then type:

```text
用 $xhs-content-studio 为账号「账号名」做本周选题。
我提供：账号主页截图、来源链接和视觉选择 S04。
先给 3 个选题卡，等我确认后再做图。

Use $xhs-content-studio to plan this week's content for “Account Name”.
I will provide profile screenshots, source links, and visual choice S04.
Give me three topic cards first. Do not create visual assets until I approve one.
```

## 首次使用清单 / First-run checklist

- [ ] 账号名称、受众、目标 / Account name, audience, goal
- [ ] 主页/旧笔记，或一句明确的账号定位 / Profile/prior posts, or a clear account positioning statement
- [ ] 至少一个来源池：链接、RSS、公众号、采访、评论或产品材料 / At least one source pool: links, RSS, WeChat articles, interviews, comments, or product material
- [ ] 一条视觉路线：账号资产、参考或 S01–S05 / One visual route: account assets, references, or S01–S05
- [ ] 你希望先停在哪个阶段：只做选题、做提纲，还是做完整图文 / Where to stop: topics only, outline, or full carousel

## 更新 / Update

拉取仓库最新内容后，重新运行安装命令，并新开一个 Codex 任务。  
After pulling the latest repository changes, run the installation command again and start a new Codex task.

## 仓库结构 / Repository structure

```text
.agents/plugins/marketplace.json     # Codex community marketplace / Codex 社区插件市场
plugins/xhs-content-studio/          # Installable plugin source / 可安装插件源码
docs/                                # GitHub Pages landing page / GitHub Pages 落地页
```

## 发布者说明 / Maintainer note

GitHub Pages 通过 `.github/workflows/deploy-pages.yml` 自动部署 `docs/`。首次推送后，在仓库 **Settings → Pages** 选择 **GitHub Actions** 作为部署来源。

GitHub Pages deploys `docs/` through `.github/workflows/deploy-pages.yml`. After the first push, select **GitHub Actions** under **Settings → Pages**.
