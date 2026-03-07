# Skill Development Guide

## How to Create a New Skill

### File Structure

```
skills/
└── XX-your-skill-name/
    └── SKILL.md
```

**Naming convention**:
- `00-` = Meta-skills (learning methodology)
- `01-` = K-12 Foundation
- `02-` = University
- `03-` = Graduate & Research
- `04-` = Career
- `05-` = Social Intelligence
- `06-` = Self-Development

### SKILL.md Template

```markdown
# Skill Name

## Description
What this skill does and who it's for. One paragraph.

## Triggers
When should the AI activate this skill? List trigger phrases.

## Methodology
Which learning science principles does this skill apply?

## Instructions
The actual instructions for the AI agent. Be specific and actionable.

## Examples
2-3 example conversations showing the skill in action.

## References
Academic sources, textbooks, or authoritative resources.
```

### Quality Checklist

Before submitting a skill, verify:

- [ ] **Learning science**: Does it apply at least one cognitive science principle?
- [ ] **Active, not passive**: Does it quiz/challenge the user, not just lecture?
- [ ] **Adaptive**: Does it adjust to different skill levels?
- [ ] **Culturally aware**: Does it respect diverse educational traditions?
- [ ] **Tested**: Have you tried it with at least one AI agent?
- [ ] **Referenced**: Are claims backed by sources?

### Tips for Great Skills

1. **Be specific in Instructions**: "Ask the user to explain the concept back to you" is better than "use active learning."
2. **Include failure modes**: What should the AI do if the user is completely stuck?
3. **Provide scaffolding levels**: How to help a beginner vs an advanced learner.
4. **Add cultural context**: If your skill is culture-specific, say so explicitly.
5. **Use examples generously**: Show, don't tell. Real conversation examples are the best documentation.
