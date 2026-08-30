# Week 5 — Build, Explain & Design an AI Agent

This folder contains all work completed during **Week 5** of the FlyRank AI Fluency Program.

The focus of this week was understanding AI-assisted development at a deeper level, designing a personal AI agent, and building the foundation for a tool-using AI system.

---

## Week 5 Overview

| Assignment | Title | Focus |
|---|---|---|
| 01 | Explain It Like You Built It | Understand and explain a real piece of AI-assisted code |
| 02 | FL-06 — Design Your Personal Agent | Design a focused personal AI agent |
| 03 | FL-07 — Build the Agent | Implement and evaluate the personal agent |
| 04 | PF-04 — Personal Website Live on FlyRank Domain | Prepare and ship the personal portfolio website |

---

## 01 — Explain It Like You Built It

This assignment focused on understanding a real piece of code from my own project instead of treating AI-generated code as something that can be used without understanding it.

I selected the `analyzeWebsiteTool` from **FE-07 — Tool Results Structured Output**.

The tool uses:

- Next.js
- TypeScript
- Vercel AI SDK
- Zod
- Google Gemini
- `fetch()`

### What the tool does

The `analyzeWebsiteTool` analyzes a public website and returns structured information such as:

- Website URL
- Page title
- Meta description
- HTTP status
- Word count

### Key concepts understood

- `tool()` defines the capability available to the AI.
- `inputSchema` defines the expected input.
- Zod validates the URL input.
- `execute()` contains the actual analysis logic.
- `fetch()` retrieves the website HTML.
- The tool returns the extracted information as structured data.

### Main Learning

The AI does not automatically perform the website analysis.

The application provides the tool and the code behind it, while the AI can decide when that capability is useful.

---

## 02 — FL-06: Design Your Personal Agent

### Project: AI Project & Career Research Assistant

This assignment defined the design and scope of my personal AI agent.

The agent is designed to help analyze my existing projects, skills, internship work, and career-related information and turn that information into practical next steps.

### Primary Job

The agent helps answer questions such as:

- What should I improve in my portfolio?
- Which project should I work on next?
- What technical skill should I strengthen?
- Which project best demonstrates a particular skill?
- What gaps exist for a specific opportunity?
- What should I work on next?

### Planned Capabilities

The agent can use:

1. Project/document search
2. Document reading
3. Structured recommendation and analysis

Google Drive through Claude's connector was selected as the initial document source because its connectivity had already been tested.

### Guardrails

The agent should:

- Never invent skills, projects, certifications, internships, or achievements.
- Clearly identify missing information.
- Distinguish facts from recommendations.
- Keep important decisions under human control.
- Avoid irreversible actions.
- Use only information intentionally made available to it.
- Communicate uncertainty when evidence is incomplete.

### Evaluation

Six evaluation cases were defined before implementation:

1. Project Recommendation
2. Skill Gap
3. Resume/Project Evidence
4. Missing Information
5. Action Planning
6. Unsupported Claim

The purpose of these evaluations is to test whether the agent produces evidence-based recommendations without fabricating information.

---

## 03 — FL-07: Build the Agent

The next stage is to implement the **AI Project & Career Research Assistant** based on the FL-06 specification.

The implementation follows the planned scope:

### Phase 1 — Agent Instructions

- Define the agent role.
- Define expected behavior.
- Add response structure.
- Add safety and accuracy guardrails.

### Phase 2 — Data Connection

- Connect the required document source.
- Test document search.
- Test document reading.

### Phase 3 — Agent Behavior

- Test project analysis.
- Test skill-gap analysis.
- Test evidence retrieval.
- Test recommendation generation.

### Phase 4 — Evaluation

- Run the predefined evaluation cases.
- Identify failures.
- Improve instructions and tool behavior.
- Verify that recommendations remain grounded in available evidence.

### Preferred Response Structure

When appropriate, the agent should organize responses as:

**Goal → Evidence → Gap/Opportunity → Recommendation → Next Action**

The initial implementation intentionally remains focused rather than attempting to become a fully autonomous career-management system.

---

## 04 — PF-04: Personal Website Live on FlyRank Domain

This assignment focuses on taking the portfolio from planning and preparation toward a live personal website.

The portfolio direction established earlier includes:

- A clear backend-focused technical claim
- Evidence-first case studies
- SpellForge/Reikein as the lead case study
- Selected supporting projects
- Consistent visual identity
- Real project screenshots
- GitHub and live-demo evidence
- Clear calls to action

### Portfolio Positioning

> I design data models that anticipate future features and make the engineering tradeoffs behind them explicit.

### Visual Identity

The portfolio identity uses:

- **Heading Font:** Playfair Display
- **Body Font:** Inter
- **Primary:** `#8B6FC7`
- **Text:** `#17151F`
- **Background:** `#FAF8FC`
- **Accent:** `#B89AE8`
- **Logo:** KC monogram

The visual direction is:

**Minimal · Calm · Modern · Professional**

### Portfolio Principle

> The design is the frame, not the painting. The work is the painting.

The portfolio is intended to keep the actual projects, case studies, screenshots, and technical proof as the primary focus.

---

## Tools Used

- Claude Projects
- Claude Connectors
- Google Drive
- Next.js
- TypeScript
- Vercel AI SDK
- Zod
- Google Gemini
- HTML
- CSS
- JavaScript
- Git
- GitHub
- Netlify

---

## Week 5 Outcome

Week 5 focused on moving from simply using AI-generated solutions toward understanding, designing, and implementing AI-assisted systems.

The work covered three connected areas:

1. **Understanding code** through the `analyzeWebsiteTool`.
2. **Designing an agent** around a specific personal job-to-be-done.
3. **Building and evaluating the agent** using connected information sources, defined guardrails, and predefined evaluation cases.
4. **Continuing the portfolio build** toward a live personal website.

The main principle throughout the week was:

> **Use AI to accelerate development, but understand the system well enough to explain, evaluate, and improve it yourself.**

---

## Status

**Week 5 — In Progress**

Individual assignment status should be updated based on the actual completion and submission state of each assignment.