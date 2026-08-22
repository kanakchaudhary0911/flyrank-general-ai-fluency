# Week 04 — Build & Ship

Week 04 focuses on moving from planning into execution: choosing a technical stack, shipping a first live version, and building a repeatable AI-assisted workflow.

---

## Week 04 Overview

| Assignment | Title | Status |
|---|---|---|
| FL-11 | Three Roads: Choose Your Stack with AI | Completed |
| FL-12 | Empty but Live: Ship a Blank Page | Completed |
| FL-13 | Ship an Automation Workflow v2 | Completed |
| FL-14 | Agent Concepts and MCP Basics | Upcoming |

---

## FL-11 — Three Roads: Choose Your Stack with AI

**Folder:**  
`01_FL-11_Three_Roads_Choose_Your_Stack_with_AI/`

### Objective

Use AI to compare multiple technical approaches and pressure-test the decision before committing to a stack for the portfolio build.

### Deliverables

- Three stack options
- AI comparison and pressure test
- Final stack decision
- Written rationale
- Supporting screenshots

### Chosen Stack

**Plain HTML / CSS / JavaScript → Netlify**

The decision was made after comparing the available approaches and considering the requirements of the portfolio build.

### Evidence

- `AI_Three_Options.md`
- `Pressure_Test.md`
- `Screenshots/01_three_stack_options.png`
- `Screenshots/02_pressure_test.png`
- `Screenshots/03_final_rationale.png`

---

## FL-12 — Empty but Live: Ship a Blank Page

**Folder:**  
`02_FL-12_Empty_but_Live_Ship_a_Blank_Page/`

### Objective

Create a near-blank portfolio project, deploy it to a real public URL, verify that it works outside the development environment, and prepare the AI workspace for the upcoming portfolio build.

### Completed

- Created the empty portfolio project
- Created the root `index.html`
- Added a near-blank portfolio homepage
- Deployed the project to Netlify
- Verified the live URL
- Opened the deployed page on a phone
- Added the Identity Kit to the AI workspace
- Added the Style Guide to the AI workspace
- Added the Content Map to the AI workspace
- Added the One-Line Claim
- Added the Case Studies
- Added the Still-Need-to-Gather list
- Generated a consolidated Portfolio Build Brief

### Live URL

https://vocal-paprenjak-435bb4.netlify.app/

### Evidence

- `index.html` — near-blank portfolio homepage
- `screenshots/01_live_on_phone.jpeg` — phone verification
- `screenshots/02_claude_project_context.png` — AI workspace preparation
- `README.md` — assignment documentation

The portfolio is intentionally near-blank at this stage. The actual portfolio design, case-study content, project evidence, and functionality will be developed in the later build phase.

---

## FL-13 — Ship an Automation Workflow v2

**Folder:**  
`03_FL-13_Ship_an_Automation_Workflow_v2/`

### Objective

Build a repeatable AI-assisted writing workflow that takes a rough input through structured drafting, critique, revision, and human verification.

### Workflow

```text
Rough Input
    ↓
STEP 1 — DRAFT
    ↓
STEP 2 — CRITIQUE
    ↓
STEP 3 — FINAL REVISION
    ↓
HUMAN CHECK

## Workflow Design

The workflow was built in Claude Projects with structured instructions defining three distinct stages:

1. **Draft** — Transform the rough input into a structured first version.
2. **Critique** — Review the draft for clarity, structure, relevance, accuracy, repetition, tone, and missing information.
3. **Final Revision** — Apply the critique while preserving factual accuracy and avoiding unsupported claims.
4. **Human Check** — Identify details that still require human verification before the output is used.

---

## Five Real Runs

The workflow was tested on five real inputs:

1. Student Performance Analysis
2. AI Internship Landing Page
3. Why Database Design Matters
4. Mentor Feedback Email
5. SpellForge

---

## What the Workflow Was Designed to Achieve

- Preserve factual accuracy
- Avoid inventing unsupported details
- Improve clarity and structure
- Maintain appropriate tone
- Identify missing information
- Produce a final revised version
- Clearly identify what still requires human verification

---

## Workflow Retrospective

The five-run review showed that the workflow consistently maintained the Draft → Critique → Revise handoff and avoided unsupported claims.

It also revealed areas for improvement:

- Drafts sometimes became more structured than necessary for short portfolio content.
- Critique categories could be applied somewhat mechanically.
- Missing information was not always prioritized by importance.
- Human verification remained necessary for project-specific facts and placeholders.

**Time per run:** approximately 10–15 minutes.

**Human review remains necessary for:** factual accuracy, project-specific technical details, missing information, placeholders, and final suitability for the intended audience.

---

## Evidence

- `Screenshots/01_claude_project.png`
- `Screenshots/02_workflow_instructions.png`
- `Screenshots/03_run_01.png`
- `Screenshots/04_run_02.png`
- `Screenshots/05_run_03.png`
- `Screenshots/06_run_04.png`
- `Screenshots/07_run_05.png`
- `Screenshots/08_retrospective.png`

---

## FL-14 — Agent Concepts and MCP Basics

**Folder:** `04_FL-14_Agent_Concepts_and_MCP_Basics/`

**Status:** ⏳ Upcoming

This assignment will focus on understanding agent concepts and MCP fundamentals.

---

## Week 04 Outcome

Week 04 focused on moving from planning to execution through three practical outcomes:

1. A technical stack was selected using AI-assisted comparison and pressure testing.
2. A near-blank portfolio was shipped to a real public URL and verified on a phone.
3. A repeatable AI-assisted writing workflow was built, tested on five real inputs, and reviewed for failure points and human-review requirements.

The selected portfolio stack is:

**Plain HTML / CSS / JavaScript + Netlify**

A live portfolio URL now exists, supporting identity and content materials have been prepared in the AI workspace, and a reusable Draft → Critique → Revise workflow has been documented.