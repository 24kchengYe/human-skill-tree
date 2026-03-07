# 🗺️ Education AI Ecosystem Landscape

> A comprehensive survey of existing tools, skills, and MCP servers related to AI-powered education. Last updated: 2026-03-08.

---

## Agent Skills

### Education & Tutoring

| Skill | Source | Install | Description |
|---|---|---|---|
| **education-tutor** | [eddiebe147](https://skills.sh/eddiebe147/claude-settings/education-tutor) | `npx skills add eddiebe147/claude-settings@education-tutor -g -y` | K-12 tutoring, exam prep (SAT/ACT/GRE), learning difficulty support (ADHD, dyslexia), Socratic method |
| **ai-for-learning** | [omer-metin](https://skills.sh/omer-metin/skills-for-antigravity/ai-for-learning) | `npx skills add omer-metin/skills-for-antigravity@ai-for-learning -g -y` | AI tutoring systems, adaptive learning, learning analytics |
| **tutor-skills** | [RoundTable02](https://github.com/RoundTable02/tutor-skills) | `npx skills install RoundTable02/tutor-skills` | Turn PDFs/docs into Obsidian StudyVaults with interactive quizzes |
| **learn-faster-kit** | [hluaguo](https://github.com/hluaguo/learn-faster-kit) | `npx skills install hluaguo/learn-faster-kit` | AI learning coach with spaced repetition, personalized syllabi |
| **echodecks** | skills.sh | Via marketplace | Flashcard management and study sessions |
| **echodecks-ultimate** | skills.sh | Via marketplace | AI flashcards + automated podcast generation |
| **anki-connect** | skills.sh | Via marketplace | Interact with Anki decks via AnkiConnect REST API |
| **socratic** | [obra/superpowers](https://github.com/obra/superpowers) | Via marketplace | Socratic design refinement through guided questioning |
| **spanish-language-tutor** | [sandraschi](https://github.com/sandraschi/advanced-memory-mcp) | Part of advanced-memory-mcp | Spanish grammar, conversation, regional dialects |

### Curriculum & Course Design

| Skill | Source | Install | Description |
|---|---|---|---|
| **curriculum-design** | [pauljbernard](https://skills.sh/pauljbernard/content/curriculum-design) | `npx skills add pauljbernard/content@curriculum-design -g -y` | Bloom's taxonomy curriculum builder, K-12 through post-graduate |
| **curriculum-develop-content** | [pauljbernard](https://skills.sh/pauljbernard/content/curriculum-develop-content) | `npx skills add pauljbernard/content@curriculum-develop-content -g -y` | Develop lesson content and educational materials |
| **curriculum-research** | [pauljbernard](https://skills.sh/pauljbernard/content/curriculum-research) | `npx skills add pauljbernard/content@curriculum-research -g -y` | Education research for curriculum development |
| **education-business** | [omer-metin](https://skills.sh/omer-metin/skills-for-antigravity/education-business) | `npx skills add omer-metin/skills-for-antigravity@education-business -g -y` | Education business strategy |

### Academic Research & Writing

| Skill | Source | Install | Description |
|---|---|---|---|
| **academic-research-writer** | [endigo](https://skills.sh/endigo/claude-skills/academic-research-writer) | `npx skills add endigo/claude-skills@academic-research-writer -g -y` | Academic paper writing (322 installs) |
| **research-proposal** | [luwill](https://skills.sh/luwill/research-skills/research-proposal) | `npx skills add luwill/research-skills@research-proposal -g -y` | Grant & research proposal writing (71 installs) |
| **research-expert** | [personamanagmentlayer](https://skills.sh/personamanagmentlayer/pcl/research-expert) | `npx skills add personamanagmentlayer/pcl@research-expert -g -y` | General research expertise (49 installs) |
| **academic-research** | [tdimino](https://skills.sh/tdimino/claude-code-minoan/academic-research) | `npx skills add tdimino/claude-code-minoan@academic-research -g -y` | Academic research assistant (29 installs) |

### Career & Professional

| Skill | Source | Install | Description |
|---|---|---|---|
| **career-document-architect** | [lyndonkl](https://skills.sh/lyndonkl/claude/career-document-architect) | `npx skills add lyndonkl/claude@career-document-architect -g -y` | Career documents and resumes (32 installs) |
| **prompt-engineering** | skills.sh | Via marketplace | Learn prompt engineering techniques |

---

## MCP Servers

### Education Platforms

| Server | Source | Description | Stars |
|---|---|---|---|
| **DeepTutor** | [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor) | AI personalized learning assistant from HKU. Multi-agent, RAG + web search, visual aids. | ⭐ 9,000+ |
| **OpenEdu MCP** | [Cicatriiz/openedu-mcp](https://github.com/Cicatriiz/openedu-mcp) | K-12 & college curriculum planning. OpenLibrary, Wikipedia, arXiv integration. Grade-level filtering. | New |
| **MCP Tutor** | [moarshy/mcp-tutor](https://github.com/moarshy/mcp-tutor) | Intelligent tutoring from documentation repos. 4 tools + 6 prompts. | New |
| **EduBase MCP** | [EduBase/MCP](https://github.com/EduBase/MCP) | E-learning platform. Parametrized quizzes, cheating detection, LaTeX, SCORM. | Low |
| **Canvas LMS MCP** | [DMontgomery40/mcp-canvas-lms](https://github.com/DMontgomery40/mcp-canvas-lms) | 54 tools for Canvas LMS: courses, assignments, grades, modules, rubrics. | Moderate |

### Math & Science

| Server | Source | Description | Stars |
|---|---|---|---|
| **Math MCP Learning** | [clouatre-labs/math-mcp-learning-server](https://github.com/clouatre-labs/math-mcp-learning-server) | Math tutor with configurable difficulty, formula explainer, step-by-step. | New |
| **Wolfram Alpha MCP** | [cnosuke/mcp-wolfram-alpha](https://github.com/cnosuke/mcp-wolfram-alpha) | Computational knowledge engine via Wolfram Alpha API. | Low |
| **Calculator MCP** | [huhabla/calculator-mcp-server](https://github.com/huhabla/calculator-mcp-server) | Symbolic math, statistics, matrix operations. | Low |
| **mcp.science** | [pathintegral-institute/mcp.science](https://github.com/pathintegral-institute/mcp.science) | DFT calculations, Wolfram Language, Materials Project, neuroscience. | ~104 |

### Flashcards & Spaced Repetition

| Server | Source | Description | Stars |
|---|---|---|---|
| **Anki MCP** | [ankimcp/anki-mcp-server](https://github.com/ankimcp/anki-mcp-server) | AI ↔ Anki flashcard interaction. STDIO and HTTP. Read-only mode. | ⭐ 154 |
| **Rember MCP** | [rember/rember-mcp](https://mcpservers.org/servers/rember/rember-mcp) | "Help me remember this" → spaced repetition cards in Rember. | Via mcpservers.org |
| **Mochi MCP** | [louis030195/mochi-mcp](https://lobehub.com/mcp/louis030195-mochi-mcp) | Deck management, search, Markdown support via Mochi. | Via LobeHub |

### Language Learning

| Server | Source | Description | Stars |
|---|---|---|---|
| **MandarinMCP** | [w41ch0ng/MandarinMCP](https://github.com/w41ch0ng/MandarinMCP) | HSK 1-6 Chinese vocabulary, spaced repetition, Anki export. | Low |
| **DeepL MCP** | [DeepLcom/deepl-mcp-server](https://github.com/DeepLcom/deepl-mcp-server) | High-quality translation via DeepL API. | Moderate |
| **Wikipedia Simple English** | [bhubbb/mcp-se-wikipedia](https://mcpservers.org/servers/bhubbb/mcp-se-wikipedia) | Simple English Wikipedia for learners. | Low |

### Academic Research

| Server | Source | Description | Stars |
|---|---|---|---|
| **Paper Search MCP** | [openags/paper-search-mcp](https://github.com/openags/paper-search-mcp) | Search & download from arXiv, PubMed, bioRxiv. | Low |
| **MCP for Research** | [aringadre76/mcp-for-research](https://github.com/aringadre76/mcp-for-research) | Unified PubMed, Google Scholar, ArXiv, JSTOR. 5 tools. | Low |
| **arXiv MCP** | [anuj0456/arxiv-mcp-server](https://github.com/anuj0456/arxiv-mcp-server) | arXiv search, citation analysis, trend tracking. | Low |
| **Scientific Papers MCP** | [benedict2310/Scientific-Papers-MCP](https://github.com/benedict2310/Scientific-Papers-MCP) | Real-time arXiv + OpenAlex access. | Low |

### Knowledge Bases

| Server | Source | Description | Stars |
|---|---|---|---|
| **Wikipedia MCP** | Multiple implementations | Wikipedia access via MCP. Multi-language. | Various |
| **Microsoft Learn MCP** | [MicrosoftDocs/mcp](https://github.com/MicrosoftDocs/mcp) | Official Microsoft docs + code samples. Vector search. | Moderate |

---

## Skill Marketplaces

| Platform | URL | Education Content |
|---|---|---|
| **skills.sh** | [skills.sh](https://skills.sh/) | Primary marketplace for Agent Skills |
| **SkillsMP** | [skillsmp.com](https://skillsmp.com/) | 8,454 education + 13,834 research skills |
| **awesome-agent-skills** | [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) | 500+ curated skills |
| **awesome-openclaw-skills** | [VoltAgent/awesome-openclaw-skills](https://github.com/VoltAgent/awesome-openclaw-skills) | 5,400+ skills from OpenClaw |

---

## Related Large Projects

| Project | Stars | Description |
|---|---|---|
| [K-Dense-AI/claude-scientific-skills](https://github.com/K-Dense-AI/claude-scientific-skills) | ⭐ 13,500+ | 170+ scientific skills, 250+ databases. Our model for project structure. |
| [anthropics/skills](https://github.com/anthropics/skills) | Official | Anthropic's official skill repository |
| [microsoft/mcp-for-beginners](https://github.com/microsoft/mcp-for-beginners) | High | MCP curriculum with real-world examples |

---

## Gaps & Opportunities

Areas with **no existing skills or MCP servers** — prime for contribution:

| Gap | Opportunity |
|---|---|
| 🇨🇳 Chinese social intelligence (人情世故) | **Human Skill Tree fills this** |
| Exam-specific prep (高考, 수능, JEE) | Structured by exam system |
| Major/career transition guidance | Decision framework skill |
| Cross-cultural communication | Scenario-based training |
| Emotional intelligence training | Interactive EQ coaching |
| Financial literacy for students | Budgeting, investing basics |
| Critical thinking & media literacy | Logical fallacy detection, source evaluation |
| Health & wellness for students | Sleep, nutrition, exercise, mental health |

---

*This document is a living survey. Contributions welcome — see [CONTRIBUTING.md](../CONTRIBUTING.md).*
