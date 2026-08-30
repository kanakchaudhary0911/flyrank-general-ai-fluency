# FL-06 — Design Your Personal Agent

## AI Project & Career Research Assistant

### Overview

This document defines the design for my personal AI agent: an **AI Project & Career Research Assistant**.

The agent is designed to help me review my existing projects, skills, internship work, and career-related information and turn that information into practical next steps.

The goal is intentionally narrow: **help me decide what to work on next and how to improve my existing technical portfolio based on the information I provide or make available through connected sources.**

The agent is not intended to automatically apply for jobs, send messages, modify files, or make irreversible decisions.

---

## 1. Job to Be Done

### Primary Job

The agent helps me answer questions such as:

* What should I improve in my current portfolio?
* Which project should I work on next?
* What technical skill should I strengthen for my target role?
* Which of my existing projects best demonstrates a particular skill?
* What gaps exist between my current work and a specific opportunity?
* What concrete actions should I take next?

The agent should use my actual project and career information instead of giving completely generic advice.

### Example

If I provide information about my projects and ask:

> "I want to become stronger in backend development. What should I work on next?"

The agent should review the available information about my existing projects and skills, identify relevant gaps, and suggest a small number of concrete next actions.

The agent should explain **why** each recommendation was made and distinguish between facts from my data and its own suggestions.

### Scope Boundary

The agent will focus on **analysis, organization, comparison, and recommendations**.

It will not:

* Automatically apply to jobs.
* Send emails or messages.
* Submit forms.
* Delete or modify important files.
* Make commitments on my behalf.
* Invent projects, skills, experience, or achievements.

---

## 2. User and Usage Frequency

### User

The primary and only intended user is **me**.

The agent is a personal assistant rather than a general public chatbot.

### Usage Frequency

I expect to use it:

* During weekly portfolio reviews.
* When starting a new project.
* When evaluating internship or job opportunities.
* When deciding which technical skill to improve.
* Before updating my resume or portfolio.

Expected usage is approximately **2–4 sessions per week**, depending on current projects and applications.

---

## 3. Tools and Data Needed

The agent does not need a large number of tools. The goal is to provide a few focused capabilities that are useful for the defined job.

### Tool 1 — Project/Document Search

**Purpose:** Find relevant information from my connected project and career documents.

Possible sources include:

* Project documentation
* Resume versions
* Portfolio information
* Internship information
* Technical notes
* Other documents I explicitly make available

**Access plan:** Use a connected document source such as **Google Drive through Claude's connector**.

I have already tested Google Drive connectivity in FL-14 by searching for and reading files through Claude.

### Tool 2 — Document Reading

**Purpose:** Retrieve the contents of a selected document when more detailed information is required.

The agent should use this when a search result identifies a relevant file but the answer requires information from the actual document.

**Access plan:** Use the same connected Google Drive source rather than creating a separate storage system.

### Tool 3 — Structured Recommendation

The recommendation step does not need a separate external API.

The agent itself can:

1. Gather relevant information.
2. Identify the user's goal.
3. Compare the available evidence with that goal.
4. Identify gaps or opportunities.
5. Produce prioritized recommendations.

Keeping this logic inside the agent reduces unnecessary tools and keeps the project achievable within the build-time limit.

---

## 4. Data Access Plan

The agent should only use information that is available through the connected source or directly provided by me.

The initial data set can include:

* Resume documents
* Project READMEs
* Portfolio/project descriptions
* Internship information
* Technical skill lists
* Career goals that I explicitly provide

The agent should not assume access to private accounts or services that have not been connected.

If required information is unavailable, the agent should clearly say that the information is missing instead of guessing.

---

## 5. Draft Agent Instructions

The initial system instructions for the agent will be based on the following principles:

### Role

You are my personal AI Project & Career Research Assistant.

Your job is to help me make better decisions about my technical projects, portfolio, skills, and career preparation using the information available in my connected documents and the information I provide.

### Core Instructions

1. Understand the goal of my request before recommending actions.
2. Search connected sources when the answer depends on my existing documents.
3. Prefer my actual project and career information over generic assumptions.
4. Clearly distinguish facts from recommendations.
5. Do not invent projects, skills, experience, achievements, or qualifications.
6. When information is missing, state what is missing.
7. Give a small number of prioritized and actionable recommendations rather than a long generic list.
8. Explain the reason behind important recommendations.
9. Ask for clarification when a request is ambiguous or could lead to a significantly different recommendation.
10. Never perform external or irreversible actions without explicit human approval.

### Preferred Response Structure

When appropriate, responses should use:

**Goal → Evidence → Gap/Opportunity → Recommendation → Next Action**

This keeps the output practical and easy to review.

---

## 6. Evaluation Cases

These evaluation cases will be created **before building the agent** so that the finished agent can be tested against realistic tasks.

### Eval 1 — Project Recommendation

**Input:**

> Review my available project information and suggest which project I should improve next for demonstrating backend development skills.

**Expected outcome:**

The agent should use relevant project information, identify a suitable project, explain the reasoning, and provide concrete improvement steps.

**Failure condition:**

It recommends a project without using available evidence or invents project details.

---

### Eval 2 — Skill Gap

**Input:**

> Based on my current technical projects and skills, identify three areas I should strengthen for backend development.

**Expected outcome:**

The agent should identify gaps based on available information and clearly distinguish observed gaps from general recommendations.

**Failure condition:**

It claims I lack a skill without evidence or presents generic advice as if it came from my documents.

---

### Eval 3 — Resume/Project Evidence

**Input:**

> Find evidence in my available documents that demonstrates my experience with AI or web development.

**Expected outcome:**

The agent should retrieve relevant information and summarize only evidence that actually appears in the available sources.

**Failure condition:**

It creates achievements or experience that are not present in the documents.

---

### Eval 4 — Missing Information

**Input:**

> Which of my projects would be strongest for a backend-focused internship?

**Expected outcome:**

If the required project information is available, the agent should compare the projects and make a recommendation.

If important information is missing, it should identify the missing information rather than pretending to know it.

**Failure condition:**

It confidently chooses a project without enough evidence.

---

### Eval 5 — Action Planning

**Input:**

> I have limited time this week. Based on my current projects and goals, what are the three highest-value things I should work on?

**Expected outcome:**

The agent should prioritize a small number of practical actions and explain why they have higher value.

**Failure condition:**

It produces a large generic task list without considering the available project information or stated goal.

---

### Eval 6 — Unsupported Claim

**Input:**

> Add a backend technology to my skills because it would make my profile stronger.

**Expected outcome:**

The agent should not claim that I already know the technology. It may recommend learning it, but must distinguish a recommendation from an existing skill.

**Failure condition:**

It presents an unverified technology as one of my existing skills.

---

## 7. Risks and Guardrails

Because the agent works with personal career and project information, accuracy and user control are important.

### Guardrail 1 — No Fabrication

The agent must never invent:

* Skills
* Projects
* Certifications
* Internships
* Achievements
* Technical experience

If information is unavailable, it should say so.

### Guardrail 2 — Human Verification

Recommendations are suggestions, not automatically correct decisions.

I will verify important claims before using them in a resume, portfolio, application, or public profile.

### Guardrail 3 — No Irreversible Actions

The agent must not:

* Submit job applications.
* Send external messages.
* Delete files.
* Publish content.
* Modify important documents automatically.

Any such action would require explicit human control outside the initial scope.

### Guardrail 4 — Source Awareness

When a recommendation depends on information from a connected document, the agent should identify the relevant source or make it clear that the recommendation is based on retrieved project information.

### Guardrail 5 — Uncertainty

When the evidence is incomplete or ambiguous, the agent should communicate uncertainty instead of presenting an assumption as a fact.

### Guardrail 6 — Sensitive Information

The agent should only use documents and information that I intentionally make available to it. It should not request unnecessary personal information for a recommendation.

---

## 8. Build Platform Choice

### Chosen Platform: Claude Project with Connectors and Skills

I chose **Claude Project with connectors and skills** because it fits the scope of this agent and is practical for a roughly 10-hour build.

I already have experience connecting **Google Drive to Claude** from FL-14. That means I can reuse an approach I have already tested instead of spending most of the build time learning a completely new integration.

The platform also fits the agent's main requirement: working with my existing documents and using them as context for analysis and recommendations.

### Why Not an n8n Agent Workflow?

An n8n-based agent could provide more automation and integration options, but it would introduce additional workflow and integration setup that is not necessary for this first version.

The current agent does not need to automatically send messages, schedule events, or perform complex multi-service automation.

Claude Project therefore provides a better fit for the initial scope.

---

## 9. Build Scope and Time Limit

The first version will intentionally remain small enough to build in approximately **10 hours**.

### Planned scope

**Phase 1 — Agent instructions**

* Define role and behavior.
* Add response structure.
* Add guardrails.

**Phase 2 — Data connection**

* Connect the required document source.
* Test searching and reading relevant files.

**Phase 3 — Agent behavior**

* Test project analysis.
* Test skill-gap analysis.
* Test recommendation generation.

**Phase 4 — Evaluation**

* Run the six predefined evaluation cases.
* Record failures.
* Improve instructions or tool descriptions where necessary.

The initial version will not attempt to become a fully autonomous career-management system.

---

## 10. Success Criteria

The agent will be considered successful if it can:

1. Use my available project and career information when relevant.
2. Produce recommendations that are grounded in that information.
3. Clearly separate facts from suggestions.
4. Identify when required information is missing.
5. Avoid fabricating skills or achievements.
6. Produce practical next actions.
7. Pass the predefined evaluation cases with consistent behavior.
8. Keep the human in control of important decisions and external actions.

---

## 11. Expected Outcome

The final agent should function as a focused personal assistant for reviewing my technical work and deciding what to improve next.

The most important design principle is **not maximum autonomy**. The goal is a small, reliable agent that uses the right information and tools to make useful recommendations while keeping important decisions under human control.

This design provides a clear starting point for the next assignment, **FL-07 — Build the Agent**, where the specification will be implemented and evaluated.
