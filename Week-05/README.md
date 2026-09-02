# Week 5 — Build, Explain & Design an AI Agent

This folder contains all work completed during **Week 5 of the FlyRank AI Fluency Program**.

The focus of this week was understanding AI-assisted development at a deeper level, designing a personal AI agent, building and evaluating a tool-using AI system, and developing a professional personal portfolio website.

---

## Week 5 Overview

| Assignment | Title | Focus | Status |
|---|---|---|---|
| 01 | Explain It Like You Built It | Understand and explain a real piece of AI-assisted code | ✅ Completed |
| 02 | FL-06 — Design Your Personal Agent | Design a focused personal AI agent | ✅ Completed |
| 03 | FL-07 — Build the Agent | Implement and evaluate the personal agent | ✅ Completed |
| 04 | PF-04 — Personal Website Live on FlyRank Domain | Build and ship the personal portfolio website | ✅ Completed |

---

## Assignments

### 01 — Explain It Like You Built It

This assignment focused on understanding a real piece of code from my own project instead of treating AI-generated code as something that can be used without understanding it.

I selected the `analyzeWebsiteTool` from **FE-07 — Tool Results Structured Output**.

**Technologies Used**

- Next.js
- TypeScript
- Vercel AI SDK
- Zod
- Google Gemini
- `fetch()`

**What the Tool Does**

The `analyzeWebsiteTool` analyzes a public website and returns structured information such as:

- Website URL
- Page title
- Meta description
- HTTP status
- Word count

**Key Concepts Understood**

- `tool()` defines the capability available to the AI.
- `inputSchema` defines the expected input.
- Zod validates the URL input.
- `execute()` contains the actual analysis logic.
- `fetch()` retrieves the website HTML.
- The tool returns the extracted information as structured data.

**Main Learning**

The AI does not automatically perform the website analysis. The application provides the tool and the code behind it, while the AI can decide when that capability is useful.

---

### 02 — FL-06: Design Your Personal Agent

**Project:** AI Project & Career Research Assistant

This assignment defined the design and scope of my personal AI agent.

The agent is designed to help analyze my existing projects, skills, internship work, and career-related information and turn that information into practical next steps.

**Primary Job**

The agent helps answer questions such as:

- What should I improve in my portfolio?
- Which project should I work on next?
- What technical skill should I strengthen?
- Which project best demonstrates a particular skill?
- What gaps exist for a specific opportunity?
- What should I work on next?

**Planned Capabilities**

The agent can use:

1. Project/document search
2. Document reading
3. Structured recommendation and analysis

Google Drive through Claude's connector was selected as the initial document source because its connectivity had already been tested.

**Guardrails**

The agent should:

- Never invent skills, projects, certifications, internships, or achievements.
- Clearly identify missing information.
- Distinguish facts from recommendations.
- Keep important decisions under human control.
- Avoid irreversible actions.
- Use only information intentionally made available to it.
- Communicate uncertainty when evidence is incomplete.

**Evaluation**

Six evaluation cases were defined before implementation:

1. Project Recommendation
2. Skill Gap
3. Resume/Project Evidence
4. Missing Information
5. Action Planning
6. Unsupported Claim

The purpose of these evaluations is to test whether the agent produces evidence-based recommendations without fabricating information.

---

### 03 — FL-07: Build the Agent

The next stage was to implement the **AI Project & Career Research Assistant** based on the FL-06 specification.

The implementation follows the planned scope.

**Phase 1 — Agent Instructions**

- Define the agent role.
- Define expected behavior.
- Add response structure.
- Add safety and accuracy guardrails.

**Phase 2 — Data Connection**

- Connect the required document source.
- Test document search.
- Test document reading.

**Phase 3 — Agent Behavior**

- Test project analysis.
- Test skill-gap analysis.
- Test evidence retrieval.
- Test recommendation generation.

**Phase 4 — Evaluation**

- Run the predefined evaluation cases.
- Identify failures.
- Improve instructions and tool behavior.
- Verify that recommendations remain grounded in available evidence.

**Preferred Response Structure**

When appropriate, the agent should organize responses as:

**Goal → Evidence → Gap/Opportunity → Recommendation → Next Action**

The implementation intentionally remains focused rather than attempting to become a fully autonomous career-management system.

**Evidence**

The implementation and demonstration are documented inside:

```text
Week-05/
└── 03_FL-07_Build-the-Agent/
    ├── README.md
    ├── build-log.md
    ├── screenshots/
    └── FL-07_Google-Drive-Connector-Agent-Demo.mp4
```

---

### 04 — PF-04: Personal Website Live on FlyRank Domain

This assignment focused on taking the portfolio from planning and preparation toward a live personal website.

The portfolio direction established earlier includes:

- A clear backend-focused technical claim
- Evidence-first case studies
- SpellForge/Reikein as the lead case study
- Selected supporting projects
- Consistent visual identity
- Real project screenshots
- GitHub and project evidence
- Clear calls to action
- Resume access
- Contact pathways

**Portfolio Positioning**

> I design data models that anticipate future features and make the engineering tradeoffs behind them explicit.

**Website Structure**

The portfolio website includes:

- Home / Hero
  - Positioning
- Selected Work
  - Reikein Featured Case Study
  - AI Internship Landing Page
  - Student Performance Analysis
- About
  - Technical Skills
  - Engineering Approach
- Contact
  - Resume

**Featured Project — Reikein**

Reikein is positioned as the lead case study because it provides strong evidence for:

- Data modeling
- Database architecture
- Future-oriented design
- Engineering trade-offs
- Technical reasoning

**Supporting Projects**

*AI Internship Landing Page* demonstrates:

- Practical web development
- HTML
- CSS
- JavaScript
- Responsive UI
- AI-assisted development where applicable

*Student Performance Analysis* demonstrates:

- Python
- Pandas
- SQL
- Data analysis
- Structured data work

**Visual Identity**

The portfolio identity was developed during the earlier portfolio-planning work.

*Typography*

- **Heading Font:** Playfair Display — used for hero headings, page titles, section headings, and major project titles.
- **Body Font:** Inter — used for body text, navigation, buttons, labels, project descriptions, and supporting information.

*Color Palette*

| Role | Color | Hex |
|---|---|---|
| Primary | Lavender Purple | `#8B6FC7` |
| Text | Near-Black | `#17151F` |
| Background | Soft Off-White | `#FAF8FC` |
| Accent | Soft Violet | `#B89AE8` |

*Logo*

The portfolio uses a **KC monogram** representing:

- **K** → Kanak
- **C** → Chaudhary

The logo is intended for use across the portfolio and supporting project materials.

*Visual Direction*

**Minimal · Calm · Modern · Professional**

The design is intentionally restrained so that the projects, case studies, screenshots, and technical proof remain the main focus.

> The design is the frame, not the painting. The work is the painting.

**Website Implementation**

The PF-04 website is implemented using:

- HTML
- CSS
- JavaScript

The project structure is:

```text
04_PF-04_Personal-Website-Live-on-FlyRank-Domain/
│
├── assets/
│   └── Kanak-Chaudhary-Resume.pdf
│
├── index.html
├── style.css
├── script.js
└── README.md
```

The website was successfully tested in the local development environment using Live Server.

**Website Features**

- Responsive portfolio layout
- Navigation between sections
- Backend-focused hero section
- Selected projects
- Reikein featured case study
- About section
- Technical skills section
- Engineering approach section
- Contact section
- GitHub link
- Email contact link
- Resume link
- Portfolio branding
- KC monogram
- Supporting assets

The resume is stored inside the website's assets folder and linked from the portfolio.

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
- VS Code
- Netlify

---

## What I Learned

- Explaining the `analyzeWebsiteTool` line by line showed the real gap between "AI wrote code that works" and actually understanding what `tool()`, `inputSchema`, and `execute()` each do.
- Designing an agent before building it (FL-06) forced me to define scope, guardrails, and failure conditions upfront — this made the actual build (FL-07) much more focused instead of open-ended.
- Writing evaluation cases *before* implementation was one of the more valuable habits this week — it gave me a concrete way to check whether the agent was actually grounded in evidence or just sounding confident.
- Reusing the Google Drive connector experience from FL-14 saved significant setup time in FL-07 — proof that documenting earlier work pays off later.
- Building the live portfolio (PF-04) tied together everything from earlier weeks — visual identity, content strategy, and case-study positioning all had to come together into one shippable artifact.
- Keeping the agent's scope deliberately narrow (no fabrication, no irreversible actions) turned out to be more important than adding more capabilities.

---

## What I Enjoyed Most

- Realizing exactly where the "AI magic" ends and my own code begins while writing up the `analyzeWebsiteTool` explanation — it was a genuine confidence boost.
- Designing the agent's guardrails (Eval 6 — Unsupported Claim especially) felt like real product thinking rather than just prompt-writing.
- Seeing the portfolio finally go from planning documents and identity kits into an actual live, navigable website was the most satisfying moment of the week.
- Connecting FL-14's Google Drive work to FL-07's agent build made the whole month feel cumulative instead of like a series of disconnected exercises.

---

## Week 5 Outcome

Week 5 focused on moving from simply using AI-generated solutions toward understanding, designing, implementing, and evaluating AI-assisted systems.

The work covered four connected areas:

1. Understanding code through the `analyzeWebsiteTool`.
2. Designing an agent around a specific personal job-to-be-done.
3. Building and evaluating the agent using connected information sources, defined guardrails, and predefined evaluation cases.
4. Building and shipping the personal portfolio website as a professional portfolio asset.

The main principle throughout the week was:

> Use AI to accelerate development, but understand the system well enough to explain, evaluate, and improve it yourself.

---

## Assignment Status

| Assignment | Current Status |
|---|---|
| 01 — Explain It Like You Built It | ✅ Completed |
| 02 — FL-06 — Design Your Personal Agent | ✅ Completed |
| 03 — FL-07 — Build the Agent | ✅ Completed |
| 04 — PF-04 — Personal Website Live on FlyRank Domain | ✅ Completed |

---

## Overall Progress

**4 of 4 Week 5 assignments are complete.**

Week 5 is complete, covering:

- AI-assisted code understanding
- Personal AI agent design
- Agent implementation and evaluation
- Connected document workflows
- AI tool usage
- Portfolio development
- Resume integration
- Professional website preparation and deployment

---

## Week 5 Status

✅ **Week 5 Completed**