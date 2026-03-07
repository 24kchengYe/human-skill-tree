# Contributing to Human Skill Tree

Thank you for your interest in making AI-powered learning better for everyone! 🌳

## Ways to Contribute

### 🆕 Add a New Skill

1. Fork the repository
2. Create a new folder under `skills/` following the naming convention:
   - `00-` = Meta-skills (learning methodology)
   - `01-` = K-12 Foundation
   - `02-` = University
   - `03-` = Graduate & Research
   - `04-` = Career
   - `05-` = Social Intelligence
   - `06-` = Self-Development
3. Add a `SKILL.md` file following the [Skill Template](#skill-template)
4. Submit a Pull Request

### 🌍 Translate

- Translate `SKILL.md` files to other languages
- Name translated files as `SKILL_XX.md` (e.g., `SKILL_JA.md` for Japanese)
- We especially need: 日本語, 한국어, Español, Français, Deutsch, العربية

### 🐛 Improve Existing Skills

- Better examples and practice problems
- Clearer explanations
- Fix factual errors
- Add references to learning science research

### 📊 Research Contributions

- Learning science insights with citations
- Education system documentation for new countries
- Cognitive science principles we should incorporate

### 🔗 Ecosystem Integration

- Document new MCP servers or Agent Skills relevant to education
- Create integration guides for tools like Anki, Canvas, Moodle

---

## Skill Template

Every skill must include a `SKILL.md` file with this structure:

```markdown
# Skill Name

## Description
One paragraph explaining what this skill does and who it's for.

## Triggers
When should the AI agent activate this skill? List trigger phrases and contexts.

## Methodology
What learning science principles does this skill apply?
(e.g., spaced repetition, Socratic method, active recall)

## Instructions
The actual instructions for the AI agent. This is the core of the skill.

## Examples
Show 2-3 example interactions demonstrating the skill in action.

## References
Links to research, textbooks, or resources that inform this skill.
```

See `skills/00-learning-how-to-learn/SKILL.md` for a complete example.

---

## Quality Standards

- **Accuracy**: Content must be factually correct. Cite sources for non-obvious claims.
- **Learning Science**: Skills should apply at least one cognitive science principle (spaced repetition, active recall, etc.)
- **Accessibility**: Write for a global audience. Avoid culture-specific assumptions unless the skill is explicitly about a specific culture.
- **Actionable**: Skills should make the AI *do* something, not just *know* something.
- **Tested**: Try your skill with at least one compatible agent before submitting.

## Code of Conduct

- Be respectful of all cultures and learning traditions
- No political bias in educational content
- Focus on empowering learners, not replacing teachers
- Credit sources and prior work

## Pull Request Process

1. Ensure your skill follows the template
2. Test with at least one compatible tool (Claude Code, Cursor, etc.)
3. Include a clear description of what the skill does
4. Reference any related issues

---

Thank you for helping build the world's most comprehensive AI learning companion! 🧠
