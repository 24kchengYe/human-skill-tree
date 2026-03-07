<div align="center">

# 🌳 Human Skill Tree

### AI-Powered Skills for Lifelong Human Learning

*From "What is 1+1?" to "How do I navigate office politics?"*

[English](README.md) · [中文](README_CN.md)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Skills](https://img.shields.io/badge/Skills-30+-brightgreen)](#skill-tree-overview)
[![Subjects](https://img.shields.io/badge/Subjects-800+-orange)](#skill-tree-overview)
[![Standard](https://img.shields.io/badge/Standard-Agent_Skills-blueviolet)](https://github.com/anthropics/skills)
[![Tools](https://img.shields.io/badge/Works_With-Claude_Code_|_Cursor_|_Codex_|_Gemini_CLI-blue)](#installation)

</div>

---

> **AI is the greatest tutor humanity has ever had** — infinitely patient, always available, fluent in every subject. But without structured skills, it's a genius who doesn't know what to teach you.
>
> **Human Skill Tree** transforms any AI agent into a structured, science-backed learning companion — from kindergarten math to PhD research, from coding interviews to Chinese dinner etiquette.

---

## Why This Matters

Universities take 4 years to transfer knowledge that AI can deliver in weeks. Textbooks are static; AI adapts to you in real-time. But raw AI lacks the **pedagogical structure** that makes learning stick.

This project bridges the gap:

| Traditional Learning | Raw AI Chat | 🌳 Human Skill Tree |
|---|---|---|
| One-size-fits-all | No structure | Adaptive + structured |
| Passive (read/listen) | Q&A only | Active recall, spaced repetition, Socratic dialogue |
| Single subject | Knows everything, teaches nothing | Curated learning paths by domain |
| Limited to classroom | No curriculum | K-12 → University → Career → Life |
| No social skills training | Generic advice | Culturally-aware situational coaching |

---

## Skill Tree Overview

```
🌳 Human Skill Tree
│
├── 🧠 Phase 0: Learning How to Learn (Meta-Skill)
│   └── Spaced repetition, active recall, Feynman technique,
│       memory palace, mind mapping, Bloom's taxonomy, flow state
│
├── 📚 Phase 1: K-12 Foundation
│   ├── Mathematics (arithmetic → calculus)
│   ├── Sciences (physics, chemistry, biology, earth science)
│   ├── Languages (50+ languages, classical & modern)
│   ├── Humanities (history, geography, philosophy, civics)
│   └── Exam Systems (Gaokao, SAT/AP, A-Level, IB, CSAT, JEE...)
│
├── 🎓 Phase 2: University
│   ├── University Guide (major selection, course planning, transfer)
│   ├── STEM Tutor (CS, engineering, math, physics, chemistry, bio)
│   ├── Humanities & Social Sciences (law, politics, sociology, media)
│   ├── Business & Economics (finance, accounting, marketing, econ)
│   ├── Medical & Health (clinical, TCM, pharmacy, psychology)
│   └── Arts & Design (fine arts, music, film, architecture)
│
├── 🔬 Phase 3: Graduate & Research
│   ├── Research Methodology (qual, quant, mixed methods, causal inference)
│   ├── Academic Writing (papers, thesis, grants, LaTeX)
│   ├── Literature Review (systematic search, synthesis, gap analysis)
│   └── Data Analysis & Statistics (R, Python, SPSS, Stata, spatial)
│
├── 💼 Phase 4: Career
│   ├── Career Navigator (exploration, planning, transition)
│   ├── Interview Prep (behavioral, technical, case, whiteboard)
│   ├── Civil Service 公务员 (行测, 申论, 面试, 公文写作)
│   ├── Tech Career (system design, algorithms, PM, DevOps)
│   ├── Finance Career (CFA, modeling, valuation, risk)
│   └── Consulting Career (case prep, MECE, slide writing)
│
├── 🤝 Phase 5: Social Intelligence
│   ├── Chinese Social Intelligence 人情世故 (面子, 关系, 饭局, 酒桌, 送礼)
│   ├── Cross-Cultural Skills (Hofstede dimensions, business etiquette)
│   ├── Emotional Intelligence (EQ, empathy, self-regulation)
│   ├── Negotiation & Persuasion (BATNA, anchoring, Cialdini's 6)
│   └── Communication Skills (assertive, difficult conversations, public speaking)
│
└── 🌱 Phase 6: Self-Development
    ├── Financial Literacy (budgeting, investing, tax, insurance)
    ├── Critical Thinking (logic, fallacies, media literacy, decision-making)
    ├── Health & Wellness (nutrition, exercise, sleep, mental health)
    └── Creativity & Innovation (design thinking, lateral thinking, brainstorming)
```

> **800+ subjects** across **30+ skills**, covering **15 national education systems** and **6 international curricula**.

---

## Built on Learning Science

Every skill in this tree follows principles from cognitive science — not just *what* to teach, but *how humans actually learn and remember*:

| Principle | What It Does | How We Use It |
|---|---|---|
| 🔄 **Spaced Repetition** | Fights the forgetting curve | Skills schedule review at optimal intervals |
| 🧪 **Active Recall** | Retrieval strengthens memory 10x vs re-reading | Skills quiz you, not lecture you |
| 🎯 **Desirable Difficulties** | Short-term struggle = long-term retention | Skills push you just beyond comfort zone |
| 🔀 **Interleaving** | Mixing topics improves discrimination | Skills alternate between related concepts |
| 🖼️ **Dual Coding** | Words + visuals = stronger encoding | Skills combine text, diagrams, examples |
| 🪞 **Socratic Method** | Questions > answers for deep understanding | Skills guide through questions, not lectures |
| 🧩 **Chunking** | Group info into meaningful units | Skills break complex topics into digestible parts |
| 📊 **Bloom's Taxonomy** | 6 levels: remember → create | Skills progress through cognitive complexity |

---

## Installation

### Quick Start

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/human-skill-tree.git

# Copy all skills to your agent
cp -r human-skill-tree/skills/* ~/.claude/skills/
```

### Install Individual Skills

Pick only the skills you need:

```bash
# Just the meta-skill for learning methodology
cp -r human-skill-tree/skills/00-learning-how-to-learn ~/.claude/skills/

# K-12 math tutoring
cp -r human-skill-tree/skills/01-k12-mathematics ~/.claude/skills/

# Chinese social intelligence
cp -r human-skill-tree/skills/05-social-intelligence ~/.claude/skills/
```

### Supported Tools

| Tool | Skill Directory | Status |
|---|---|---|
| **Claude Code** | `~/.claude/skills/` | ✅ Primary |
| **Cursor** | `~/.cursor/skills/` | ✅ Supported |
| **Codex** | `~/.codex/skills/` | ✅ Supported |
| **Gemini CLI** | `~/.gemini/skills/` | ✅ Supported |

---

## Existing Ecosystem

We don't reinvent the wheel. Here are battle-tested tools that complement Human Skill Tree:

### 🏆 Top Picks

| Tool | Type | What It Does | Stars/Installs |
|---|---|---|---|
| [**DeepTutor**](https://github.com/HKUDS/DeepTutor) | MCP | AI personalized learning assistant from HKU | ⭐ 9,000+ |
| [**Anki MCP**](https://github.com/ankimcp/anki-mcp-server) | MCP | Spaced repetition flashcard integration | ⭐ 154 |
| [**Canvas LMS MCP**](https://github.com/DMontgomery40/mcp-canvas-lms) | MCP | 54 tools for Canvas LMS management | ⭐ Moderate |
| [**OpenEdu MCP**](https://github.com/Cicatriiz/openedu-mcp) | MCP | K-12 & college curriculum planning | New |
| [**Math MCP**](https://github.com/clouatre-labs/math-mcp-learning-server) | MCP | Math tutor with step-by-step explanations | New |
| [**Wolfram Alpha MCP**](https://github.com/cnosuke/mcp-wolfram-alpha) | MCP | Computational knowledge engine | Multiple |

### 📦 Agent Skills

| Skill | Install | What It Does |
|---|---|---|
| [education-tutor](https://skills.sh/eddiebe147/claude-settings/education-tutor) | `npx skills add eddiebe147/claude-settings@education-tutor -g -y` | K-12 tutoring + exam prep + learning difficulty support |
| [learn-faster-kit](https://github.com/hluaguo/learn-faster-kit) | `npx skills install hluaguo/learn-faster-kit` | AI learning coach with spaced repetition |
| [tutor-skills](https://github.com/RoundTable02/tutor-skills) | `npx skills install RoundTable02/tutor-skills` | Turn PDFs into interactive Obsidian study vaults |
| [curriculum-design](https://skills.sh/pauljbernard/content/curriculum-design) | `npx skills add pauljbernard/content@curriculum-design -g -y` | Bloom's taxonomy curriculum builder |
| [academic-research-writer](https://skills.sh/endigo/claude-skills/academic-research-writer) | `npx skills add endigo/claude-skills@academic-research-writer -g -y` | Academic paper writing assistant |
| [research-proposal](https://skills.sh/luwill/research-skills/research-proposal) | `npx skills add luwill/research-skills@research-proposal -g -y` | Grant & research proposal writing |

### 📚 Flashcard & Memory Tools

| Tool | Type | What It Does |
|---|---|---|
| [Rember MCP](https://mcpservers.org/servers/rember/rember-mcp) | MCP | "Help me remember this" → spaced repetition cards |
| [Mochi MCP](https://lobehub.com/mcp/louis030195-mochi-mcp) | MCP | Full deck management with Markdown |
| [MandarinMCP](https://github.com/w41ch0ng/MandarinMCP) | MCP | HSK 1-6 Chinese vocabulary with spaced repetition |
| [EchoDecks](https://skills.sh) | Skill | Flashcard management + podcast generation |

> 💡 See [docs/landscape.md](docs/landscape.md) for the full ecosystem survey of 50+ tools.

---

## Education Systems Covered

Human Skill Tree understands **15 national education systems** and **6 international curricula**:

### 🌍 National Systems

| Region | Countries |
|---|---|
| **East Asia** | 🇨🇳 China (高考 3+1+2), 🇯🇵 Japan (共通テスト), 🇰🇷 Korea (수능 CSAT), 🇸🇬 Singapore (PSLE/O/A-Level) |
| **Europe** | 🇬🇧 UK (GCSE/A-Level), 🇩🇪 Germany (Abitur + Dual System), 🇫🇷 France (Bac + Philo), 🇳🇱 Netherlands (VMBO/HAVO/VWO), 🇨🇭 Switzerland (Matura), 🇫🇮 Finland (no tests until 19) |
| **Americas** | 🇺🇸 USA (SAT/AP), 🇨🇦 Canada (Provincial + CEGEP) |
| **South Asia** | 🇮🇳 India (CBSE/ICSE + JEE/NEET) |
| **Middle East** | 🇮🇱 Israel (Bagrut + Tanakh) |
| **Oceania** | 🇦🇺 Australia (ATAR + NAPLAN) |

### 🌐 International Curricula

IB (Diploma + MYP + PYP) · Cambridge IGCSE/A-Level · Montessori · Waldorf/Steiner · Reggio Emilia · Classical Trivium

---

## Skill Development Roadmap

### ✅ Phase 1 — Foundation (Now)

- [x] Project structure and documentation
- [x] Learning How to Learn (meta-skill)
- [x] K-12 Mathematics
- [x] Social Intelligence (中国人情世故)
- [x] Ecosystem survey

### 🔜 Phase 2 — Core Skills

- [ ] K-12 Sciences, Languages, Humanities
- [ ] University STEM Tutor
- [ ] Academic Writing
- [ ] Career Navigator
- [ ] Exam Systems (Gaokao, SAT, A-Level, IB)

### 🔮 Phase 3 — Advanced

- [ ] Cross-Cultural Communication
- [ ] Civil Service (公务员) Prep
- [ ] Finance & Consulting Career Prep
- [ ] Medical & Health Sciences Tutor
- [ ] Emotional Intelligence Trainer
- [ ] MCP server integrations

### 🌟 Phase 4 — Community

- [ ] Multi-language skill translations (日本語, 한국어, Español, Français)
- [ ] Community-contributed career skills
- [ ] Regional education system plugins
- [ ] Interactive skill tree visualization (web)

---

## Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Ways to Contribute

- 🆕 **Add a new skill** — Pick an uncovered subject or career path
- 🌍 **Translate** — Help us reach more learners worldwide
- 🐛 **Fix & improve** — Better examples, clearer explanations, more practice problems
- 📊 **Research** — Share learning science insights or education system knowledge
- 🔗 **Integrate** — Connect with MCP servers, flashcard tools, LMS platforms

### Skill Structure

Each skill follows a standard format:

```
skills/
└── XX-skill-name/
    └── SKILL.md          # Skill definition (required)
```

See [docs/skill-development-guide.md](docs/skill-development-guide.md) for the full specification.

---

## Philosophy

### 🎮 Why "Skill Tree"?

In RPGs, a skill tree is a branching structure where you unlock abilities by investing points. Real life works the same way:

- **Prerequisites matter**: You need algebra before calculus, empathy before negotiation
- **Multiple paths**: Not everyone needs the same skills
- **Specialization is valid**: Deep expertise in one branch > shallow knowledge of all
- **You can always respec**: Career changes, new interests, lifelong learning

### 🧠 Why Learning Science?

Most AI tutoring is just "ask a question, get an answer." This produces the **illusion of learning** — you feel like you understand, but you'll forget within days.

Human Skill Tree skills are designed around how memory actually works:

1. **Test, don't tell** — Skills ask you questions before giving answers
2. **Space it out** — Skills remind you to revisit concepts at optimal intervals
3. **Make it hard** — Skills introduce desirable difficulties that strengthen encoding
4. **Connect it** — Skills link new knowledge to what you already know
5. **Apply it** — Skills provide real-world scenarios, not just theory

### 🤝 Why Social Intelligence?

No other AI skill project covers **人情世故** (the art of navigating human relationships). Yet this is arguably the most important skill set for success in life:

- How to read a room
- When to speak and when to listen
- How gift-giving works across cultures
- How to survive office politics
- How to maintain relationships without burning bridges

We believe AI can be a safe space to practice these skills through scenario simulation.

---

## Star History

If this project helps you learn anything, please ⭐ star the repo — it helps others discover it.

---

## License

[MIT](LICENSE) — use it, modify it, share it. Knowledge should be free.

---

<div align="center">

**Built with 🧠 by humans, for humans, powered by AI.**

*"The only skill tree that matters is the one you actually climb."*

</div>
