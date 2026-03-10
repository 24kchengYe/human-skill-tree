# GitHub 生态推广操作指南

---

## 1. Hacker News（Show HN）

**效果：** 一旦上首页，24小时内可获得数百至数千 star
**地址：** https://news.ycombinator.com/submit

### 操作步骤：
1. 打开 https://news.ycombinator.com/ ，如果没有账号就注册一个
2. 点击页面顶部 "submit"
3. 填写：
   - **title**: `Show HN: Human Skill Tree – 33 AI skills + Socratic Tutor System with 6 AI characters and cross-tutor memory`
   - **url**: `https://github.com/24kchengYe/human-skill-tree`
   - **text**: 留空（有url就不需要text）
4. 提交后，去帖子下面写第一条评论，解释项目动机：

```
Hi HN, I built Human Skill Tree because I noticed AI agents got their
"skill trees" through Skills and MCPs, but humans are still learning
the same way we did 50 years ago.

This project provides 33 ready-to-use skills that turn ChatGPT, Claude,
Gemini, or Copilot into structured learning companions based on cognitive
science (spaced repetition, active recall, Feynman technique, etc.).

It now includes a Socratic Tutor System with 6 AI tutor characters
(each with unique personality and teaching style), cross-tutor memory,
and a social world where tutors discuss your progress in group chat.

Covers K-12 through career development, including what might be the
first AI skill for teaching Chinese social intelligence (人情世故).

Everything is open source (MIT) and works with Claude Code, Cursor,
Gemini CLI, and any tool supporting the Agent Skills standard.

Would love feedback on the skill design and which areas to expand next.
```

### 最佳发布时间：
- 美国东部时间 周二~周四 上午 8:00-10:00（北京时间 20:00-22:00）
- 避免周末和美国节假日

### 技巧：
- 标题以 "Show HN:" 开头
- 不要使用全大写或感叹号
- 发布后的前1小时尽快回复所有评论
- 让几个朋友upvote（但不要太刻意，HN反作弊很严）

---

## 2. Reddit

### 适合的 Subreddit：

| Subreddit | 粉丝数 | 发帖建议 |
|---|---|---|
| r/artificial | 1M+ | 重点讲AI+教育的insight |
| r/ChatGPT | 5M+ | 讲"如何让ChatGPT真正教你东西" |
| r/ClaudeAI | 200K+ | 讲Claude Code技能安装 |
| r/learnprogramming | 4M+ | 讲学编程的AI辅助方法 |
| r/education | 300K+ | 讲认知科学+AI教育研究 |
| r/GetStudying | 500K+ | 讲间隔重复、主动回忆等学习法 |
| r/opensource | 100K+ | 讲开源项目本身 |

### 操作步骤：
1. 注册 Reddit 账号（如果没有）
2. 先在各个 subreddit 浏览几天，了解规则和氛围
3. 选 2-3 个最相关的 subreddit 发帖
4. **不要同时在多个 subreddit 发同样的内容**（会被标记为spam）
5. 每个帖子根据社区特点调整内容角度

### 示例帖子（r/ChatGPT）：

**标题：** I built 33 free skills + a Socratic Tutor System that turns ChatGPT into a real learning companion (6 AI tutors, cross-tutor memory, group chat)

**正文：**
```
After reading a 2025 PNAS study showing AI tutoring improves learning
by 48-127% (but only with pedagogical guardrails), I wondered: why
doesn't ChatGPT actually *teach* instead of just answering?

So I created Human Skill Tree — 33 open-source skills covering K-12
through career development, plus a Socratic Tutor System with:

- 6 AI tutor characters (each with unique personality & teaching style)
- Cross-tutor memory (switch tutors and the new one knows your history)
- Social world (tutors discuss your progress in group chat + auto diary)
- 5 immersive story backgrounds
- Enforced Socratic teaching (questions before answers)

Each skill is built on cognitive science: spaced repetition, active
recall, Feynman technique. Free, open source.

GitHub: https://github.com/24kchengYe/human-skill-tree
Web App: https://github.com/24kchengYe/human-skill-tree-app

What subjects would you want covered next?
```

---

## 3. Product Hunt

**效果：** 适合有产品感的项目，可获得全球用户关注
**地址：** https://www.producthunt.com/

### 操作步骤：
1. 注册 Product Hunt Maker 账号
2. 准备素材：
   - **产品名**: Human Skill Tree
   - **Tagline**: "AI got superpowers. Now it's your turn to level up." (60字符以内)
   - **描述**: 简短介绍 + 核心价值
   - **Logo**: 用🌳做一个简单的logo图（推荐用 Canva）
   - **截图/GIF**: 展示安装过程或对话示例（3-5张）
   - **链接**: GitHub repo
3. 选一个 "Hunter"（有粉丝的人帮你发布，效果更好），或者自己发布
4. 提交到 https://www.producthunt.com/posts/new

### 最佳发布时间：
- 太平洋时间 周二~周四 00:01（北京时间 16:01）
- Product Hunt 每天凌晨重置排名

---

## 4. Awesome Lists（提PR加入现有列表）

**效果：** 持续曝光，被搜索引擎收录

### 目标列表和操作：

#### a) awesome-agent-skills
- **地址：** https://github.com/VoltAgent/awesome-agent-skills
- **操作：** Fork → 在 README 的 Education 分类下添加 → 提PR
- **添加内容：**
```markdown
- [Human Skill Tree](https://github.com/24kchengYe/human-skill-tree) - 33 AI agent skills with Socratic Tutor System (6 AI tutors, cross-tutor memory, social world). K-12 to career. Based on cognitive science.
```

#### b) awesome-openclaw-skills
- **地址：** https://github.com/VoltAgent/awesome-openclaw-skills
- 同上操作

#### c) awesome-mcp-servers (如果后续添加MCP)
- **地址：** https://github.com/punkpeye/awesome-mcp-servers
- 等项目加入MCP server后再提PR

#### d) awesome-chatgpt
- **地址：** 搜索 "awesome-chatgpt" 找到相关列表
- 在 Education 或 Learning 分类下添加

### PR模板：
```
## Add Human Skill Tree

**Name:** Human Skill Tree
**Link:** https://github.com/24kchengYe/human-skill-tree
**Category:** Education / Learning
**Description:** 33 AI agent skills with Socratic Tutor System (6 AI tutors,
cross-tutor memory, social world). Covers K-12 through career. Includes
interactive web app. Compatible with Claude Code, Cursor, ChatGPT, Gemini CLI.
**License:** MIT
```

---

## 5. GitHub Explore & Trending

**这个不需要主动操作，但可以优化条件：**

GitHub Trending 算法主要看：
- ⭐ 短期内的 star 增速（24小时/7天）
- 🍴 Fork 数量
- 📝 最近的 commit 活跃度

**如何优化：**
1. 保持每周至少 2-3 次 commit（不要一次推完就不更新了）
2. 集中推广——让star增速集中在1-2天内（HN + Reddit 同一天发布效果最好）
3. 确保 repo 有好的 description、topics、README（你已经做好了）
4. 添加 GitHub Explore collection 申请：https://github.com/github/explore 提PR

---

## 推广时间线建议

| 时间 | 行动 | 平台 |
|---|---|---|
| 第1天 | 发知乎文章 + 小红书篇1 | 知乎、小红书 |
| 第2天 | 发邮件给量子位、机器之心 | 邮箱 |
| 第3天 | 小红书篇2 + 掘金/CSDN文章 | 小红书、掘金 |
| 第4天 | Hacker News Show HN | HN |
| 第5天 | Reddit (r/ChatGPT + r/artificial) | Reddit |
| 第6天 | 小红书篇3 | 小红书 |
| 第7天 | 提PR到awesome-agent-skills等列表 | GitHub |
| 第2周 | Product Hunt 发布 | PH |
| 持续 | 每周更新技能 + 回复issue | GitHub |
