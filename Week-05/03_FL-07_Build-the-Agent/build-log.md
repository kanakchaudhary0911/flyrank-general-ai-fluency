# FL-07 — Build Log

## Agent

**AI Project & Career Research Assistant**

**Platform:** Claude Project  
**Live Connection:** Google Drive Connector

---

## Build Goal

Build a personal AI assistant that can use evidence from my connected Google Drive to help with:

1. Project recommendations
2. Skill-gap analysis
3. Opportunity-fit evaluation
4. Short action planning

The agent must keep documented evidence separate from recommendations and must not invent skills, projects, achievements, or qualifications.

---

## Phase 1 — Implement the Core Agent Instructions

### What I built

I created a Claude Project using the FL-06 design specification as the starting point.

The instructions define:

- The agent's role
- When to search Google Drive
- Evidence-first reasoning
- No fabrication of skills or experience
- Explicit handling of missing information
- Small prioritized recommendations
- No irreversible external actions
- A consistent response structure:
  - Goal
  - Evidence
  - Gap/Opportunity
  - Recommendation
  - Next Action

### What changed from FL-06

The FL-06 specification was condensed into a smaller instruction set for the working MVP.

The core guardrails were preserved, especially:

- No fabrication
- Evidence before recommendations
- Explicit uncertainty
- Separation of facts and recommendations

### Result

The core behavior was implemented successfully.

---

## Phase 2 — Connect and Test Google Drive

### What I built

I connected Google Drive to the Claude Project and tested whether the agent could search real files instead of relying on general knowledge.

### Test

I asked the agent to search Google Drive for files related to:

- "FlyRank"
- "AI Fluency"

### Result

The agent performed an actual Google Drive search and returned matching files including:

- `Kanak_Chaudhary_Resume_ProjectManager.pdf`
- `Kanak-Chaudhary-Resume.pdf`

It returned the file types and short descriptions of the contents.

### What this confirmed

The Google Drive connector was working as a live evidence source for the agent.

---

## Phase 3 — Core Job Testing

I tested the four core jobs defined for the agent.

### Test 1 — Project Recommendation

**Prompt:**

> Which project should I improve next? Search my connected Google Drive first. Use only documented evidence from my files. Compare my relevant projects and recommend 1–2 projects to improve next. Clearly separate evidence from recommendations and mention the source file names.

### Result

The agent searched Google Drive and compared documented projects.

It identified:

- Finance India
- Student Performance Analysis

as projects documented as currently in progress and without documented GitHub repository links.

It recommended prioritizing these projects rather than making a generic recommendation.

### Status

**PASS**

---

### Test 2 — Skill-Gap Analysis

**Goal:**

Identify gaps between the documented skills and the goal of becoming a stronger backend developer.

### Result

The agent searched Google Drive for backend-related evidence.

It found documented foundations including:

- Java
- Python
- JavaScript
- SQL
- MySQL
- DBMS
- DSA
- Git/GitHub

It also correctly identified that no documented evidence was found for:

- Node.js/Express
- Django/Flask/Spring Boot
- REST/GraphQL APIs
- Authentication/authorization
- Backend deployment

The agent clearly separated documented evidence from recommendations.

### Status

**PASS**

---

### Test 3 — Opportunity Fit

**Goal:**

Evaluate fit for a Junior Backend Developer internship.

### Result

The agent searched the connected Drive and evaluated the opportunity using documented evidence.

It identified strengths such as:

- Programming languages
- SQL/MySQL
- DSA
- Python/data processing
- Git/GitHub

It also identified missing or insufficient evidence for:

- Backend frameworks
- API development
- Authentication/authorization
- Backend deployment
- Deeper SQL knowledge

The agent did not present unsupported skills as existing experience.

### Status

**PASS**

---

### Test 4 — Short Action Plan

**Goal:**

Create a short action plan for becoming a stronger backend developer.

### Result

The agent searched the Drive and created a prioritized plan based on documented evidence.

The main recommendations included:

1. Rebuild or extend Finance India as a REST API
2. Document Finance India and Student Performance Analysis
3. Complete a small REST API exercise
4. Add visible SQL/schema/query evidence

The recommendations were explicitly presented as suggestions rather than existing facts.

### Status

**PASS**

---

## What Worked

The most important parts of the agent worked as intended:

- Google Drive was used as a live evidence source.
- The agent searched files before making personalized recommendations.
- Evidence and recommendations were separated.
- Missing information was explicitly identified.
- The agent avoided inventing undocumented backend skills or experience.
- The same instruction set successfully handled all four core jobs.
- Outputs followed the intended:
  **Goal → Evidence → Gap/Opportunity → Recommendation → Next Action**
  structure.

---

## What Broke / Limitations Found

No major blocking failure occurred during the four core tests.

However, the testing exposed some evidence limitations in the connected Drive:

- Finance India and Student Performance Analysis did not have dedicated README documentation available in the Drive search.
- Backend framework/API experience was not documented.
- Some Drive searches surfaced unrelated or third-party files.
- Resume files sometimes provided high-level skill claims without detailed implementation evidence.

The agent handled these cases by distinguishing documented evidence from information that could not be confirmed.

---

## Changes Made During Testing

### Change 1 — Evidence-first instructions

The agent was instructed to search the connected Google Drive whenever a recommendation depended on personal projects, skills, resume information, or experience.

**Reason:** Prevent personalized recommendations from being based only on assumptions.

### Change 2 — Explicit no-fabrication rule

The instructions explicitly state that undocumented skills, projects, certifications, achievements, or qualifications must not be presented as facts.

**Reason:** This is the primary reliability requirement from FL-06.

### Change 3 — Explicit missing-information behavior

The agent was instructed to say when required information was missing or insufficient.

**Reason:** Prevent the model from filling evidence gaps with assumptions.

### Change 4 — Structured responses

The response format was standardized around:

**Goal → Evidence → Gap/Opportunity → Recommendation → Next Action**

**Reason:** Keep recommendations traceable to evidence and make outputs easier to review.

---

## What I Cut / Deferred

### Separate opportunity data structure

I did not build a separate structured job-posting parser or opportunity database.

**Reason:** The FL-06 MVP can evaluate an opportunity from information provided in the conversation while using Drive for personal evidence.

### Multiple specialized agents

I did not create separate agents for project recommendations, skill gaps, opportunity fit, and action planning.

**Reason:** All four jobs use the same evidence-first reasoning pattern and guardrails, so one focused agent was sufficient for the MVP.

### Additional external APIs

No additional external API was added.

**Reason:** Google Drive already provides the required live data connection, while the recommendation logic can remain inside the agent.

---

## Final MVP Status

| Requirement | Status |
|---|---|
| Claude Project created | Complete |
| Core agent instructions | Complete |
| Google Drive live connection | Complete |
| Project recommendation test | PASS |
| Skill-gap test | PASS |
| Opportunity-fit test | PASS |
| Action-plan test | PASS |
| Evidence-grounded behavior | PASS |
| No-fabrication guardrail | PASS |
| Build log | Complete |
| Raw run capture | To record |

---

## Final Assessment

The FL-07 MVP successfully implements the core behavior defined in FL-06.

The agent can search a live Google Drive source, use documented evidence to analyze personal projects and skills, identify gaps, and produce prioritized recommendations without presenting unsupported information as fact.

The remaining submission artifact is the required raw, unedited screen recording of a successful end-to-end run.