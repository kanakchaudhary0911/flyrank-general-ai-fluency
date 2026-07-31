# Prompt Ladder

## Assignment

**FL-05: The Prompt Ladder**

---

# Baseline Prompt

## Prompt

```text
Write a README for my GitHub project.
```

### Output (Excerpt)

> The AI asked clarifying questions because the prompt did not provide enough information about the project.

### Notes

**Layer Added:** None (Baseline)

**What changed in the prompt**

This was my starting prompt with no context or instructions.

**What improved in the output**

Nothing yet. This established the baseline.

**What still failed**

The AI could not generate a README because the prompt was too vague.

**What I'd try next**

Clearly define the project goal.

---

# Version 1 — Goal

## Prompt

```text
Write a README for my AI Internship Landing Page GitHub project.

The project is a responsive landing page for an AI internship program.
```

### Output (Excerpt)

> The AI generated a complete README draft focused on the landing page project.

### Notes

**Layer Added:** Goal

**What changed in the prompt**

I clearly identified which project the README was for.

**What improved in the output**

The AI stopped asking general clarification questions and produced a project-specific README.

**What still failed**

It assumed several technical details and included placeholder content.

**What I'd try next**

Add the intended audience.

---

# Version 2 — Audience

## Prompt

(Add Version 2 Prompt)

### Output (Excerpt)

> The README became recruiter-focused and highlighted technical skills instead of only listing features.

### Notes

**Layer Added:** Audience

**What changed in the prompt**

I defined recruiters as the target audience.

**What improved in the output**

The README emphasized technical decisions and project value.

**What still failed**

Some assumptions about the project were still present.

**What I'd try next**

Provide real project context.

---

# Version 3 — Context

## Prompt

(Add Version 3 Prompt)

### Output (Excerpt)

> The README reflected my real internship project and actual landing page sections.

### Notes

**Layer Added:** Context

**What changed in the prompt**

I added factual project details.

**What improved in the output**

The AI generated a README that accurately matched my project.

**What still failed**

Some folder structure and deployment details were still assumed.

**What I'd try next**

Specify the required output format.

---

# Version 4 — Output Format

## Prompt

(Add Version 4 Prompt)

### Output (Excerpt)

> The README followed the exact Markdown structure I requested.

### Notes

**Layer Added:** Output Format

**What changed in the prompt**

I defined the required README sections.

**What improved in the output**

The response became cleaner and more consistent.

**What still failed**

Placeholder links and assumed project structure remained.

**What I'd try next**

Prevent assumptions using constraints.

---

# Version 5 — Constraints

## Prompt

(Add Version 5 Prompt)

### Output (Excerpt)

> The AI used only confirmed information and marked missing details as "Not provided."

### Notes

**Layer Added:** Constraints

**What changed in the prompt**

I instructed the AI not to guess missing information.

**What improved in the output**

The README became factually accurate and avoided assumptions.

**What still failed**

The output became less detailed because missing information could not be filled in.

**What I'd try next**

Provide complete project information while keeping the same constraints.

---

# Final Reusable Prompt

(Paste the final prompt here exactly.)

---

# Reflection

This exercise showed how improving one element of a prompt at a time changes the quality of the output. The biggest improvements came from adding clear context and defining the audience. Adding strict constraints increased accuracy but also reduced completeness when information was missing. The final reusable prompt balances clarity, structure, and factual accuracy, making it suitable for similar GitHub documentation tasks.