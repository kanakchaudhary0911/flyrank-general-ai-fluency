# FL-04: Ship an Automation Workflow v2

## Assignment Overview

This assignment focused on building a repeatable AI-assisted writing workflow using Claude Projects.

The workflow takes a rough input through three distinct stages:

**Draft → Critique → Revise**

A final **Human Check** stage is used to identify missing information, placeholders, factual details, or other points that still require human verification before the content is used.

The workflow was tested on five real portfolio-related inputs to evaluate consistency, usefulness, time savings, and limitations.

---

## Objective

The goal of this workflow was to make the writing process more systematic and repeatable rather than relying on a single AI prompt.

The workflow was designed to:

- Turn rough information into a structured draft.
- Critique the draft for clarity, accuracy, structure, relevance, repetition, and tone.
- Apply the critique to produce a revised version.
- Clearly identify information that still requires human input or verification.

---

## Tool Used

**Claude Projects**

Claude Project was used to provide persistent workflow instructions and context across the writing tasks.

The project was configured with the required workflow instructions and then tested using five different real inputs.

---

## Workflow

```text
ROUGH INPUT
     ↓
   DRAFT
     ↓
  CRITIQUE
     ↓
   REVISE
     ↓
 HUMAN CHECK
```

### Step 1 — Draft

The input is converted into a structured first draft while avoiding unsupported information.

### Step 2 — Critique

The draft is reviewed for:

- Clarity
- Structure
- Relevance
- Accuracy
- Missing information
- Repetition
- Unsupported or weak claims
- Tone

### Step 3 — Revise

The critique is applied to produce a shorter, clearer, and more polished version without inventing missing information.

### Step 4 — Human Check

The workflow identifies details that a human should verify, provide, or complete before the final content is published or used.

---

## Workflow Handoff

Each stage passes the output of the previous stage to the next stage.

```text
Input
  │
  ▼
Draft
  │
  │  Structured first version
  ▼
Critique
  │
  │  Specific improvement points
  ▼
Revise
  │
  │  Improved final version
  ▼
Human Check
  │
  │  Remaining verification
  ▼
Ready for human approval
```

### Stage Handoff

| Stage | Input | Output |
|---|---|---|
| Draft | Rough user input | Structured draft |
| Critique | Draft | Improvement points |
| Revise | Draft + critique | Revised version |
| Human Check | Revised version | Items requiring human verification |

The same workflow structure was used across all five test inputs.

---

## Workflow Configuration

The Claude Project was configured to follow a three-stage writing workflow:

1. Draft
2. Critique
3. Revise

The workflow also uses a Human Check stage to prevent missing or uncertain information from being silently presented as fact.

---

## Prompts / Commands Used

The workflow was configured and tested in Claude Projects using a consistent Draft → Critique → Revise process.

**Setup Prompt**

```text
I want to build a repeatable AI-assisted writing workflow that takes a rough input, creates a structured draft, critiques it for clarity and quality, and produces a revised final version ready to use. The workflow should have three distinct steps: Draft → Critique → Revise, with clear handoffs between each step.
```

---

## Five Real Runs

The workflow was tested on five real portfolio-related inputs. Each input passed through the same:

**Draft → Critique → Revise → Human Check**

process.

---

### Run 1 — Student Performance Analysis

**Input**

A rough description of the Student Performance Analysis project using Python, Pandas, Excel, and SQL.

**Result**

The workflow produced a structured draft and then condensed it into a portfolio-ready description.

**Human Check Identified**

- Specific SQL operations were not provided.
- The exact role of Excel was unclear.
- Concrete analysis findings were missing.
- Dataset source and size were not provided.
- Visualizations were not confirmed.

**Outcome**

The final version remained factual but relatively general because the source information did not contain specific findings.

---

### Run 2 — AI Internship Landing Page

**Input**

A rough description of an AI Internship Landing Page developed with HTML, CSS, and JavaScript with AI assistance.

**Result**

The workflow produced a concise portfolio description while avoiding unsupported claims.

**Human Check Identified**

- Specific page sections were not provided.
- The exact type of AI assistance was unclear.
- Responsiveness and deployment status were not specified.
- JavaScript interactivity was not detailed.
- Repository, live link, or screenshot needed verification.

**Outcome**

The final version was suitable as a factual project summary but could be strengthened with verified project details.

---

### Run 3 — Why Database Design Matters

**Input**

A general explanation of database design, normalization, query simplicity, and traceability.

**Result**

The workflow transformed the explanation into a concise technical portfolio statement.

**Human Check Identified**

- The explanation was general rather than project-specific.
- A concrete real-world example could strengthen the statement.
- Terminology should be reviewed for the intended audience.

**Outcome**

The final version preserved the engineering trade-off perspective without adding project-specific claims.

---

### Run 4 — Mentor Feedback Email

**Input**

A rough request asking a mentor for feedback on the portfolio.

**Result**

The workflow produced a concise and professional email.

**Human Check Identified**

- Mentor name/title needed to be added.
- Portfolio link or attachment needed to be inserted.
- Sender name needed to be completed.
- Any deadline would need to be added manually if applicable.

**Outcome**

The final version was ready as a template after completing the remaining placeholders.

---

### Run 5 — SpellForge

**Input**

A rough description of SpellForge, including its fantasy-themed productivity concept and Java, Java Swing, and MySQL technologies.

**Result**

The workflow produced a concise portfolio description emphasizing the application's concept and database design focus.

**Human Check Identified**

- XP/progress mechanics were not specified.
- Specific future features were not identified.
- Project completion status was not provided.
- Solo/team context was not specified.
- Repository and visual evidence needed verification.

**Outcome**

The final version remained accurate to the supplied information while clearly identifying the details that would make the project description stronger.

---

## Run Summary

| Run | Input | Main Result | Human Check |
|---|---|---|---|
| 01 | Student Performance Analysis | Concise project description | Dataset, SQL, Excel, findings |
| 02 | AI Internship Landing Page | Concise project description | AI assistance, sections, deployment |
| 03 | Database Design Explanation | Technical principle statement | Project-specific example |
| 04 | Mentor Feedback Email | Professional email | Names, link/attachment, deadline |
| 05 | SpellForge | Technical project description | XP, future features, status, evidence |

All five runs completed the intended workflow without skipping the defined stages.

---

## Retrospective

After completing the five runs, Claude was asked to review all workflow runs and identify:

- What the AI handled well.
- Where the workflow produced generic or incomplete results.
- What a human must verify or provide before the final output can be used.

The retrospective was used to document the workflow's failure points and human-review requirements.

---

## Time Accounting

The workflow was tested across five real inputs.

### Recorded Workflow Time

The five workflow runs took approximately 10–15 minutes in total.

| Measurement | Time |
|---|---|
| Number of real inputs | 5 |
| Total workflow run time | ~10–15 minutes |
| Average per input | ~2–3 minutes |

### Manual Comparison

A precise manual baseline was not recorded before running the workflow, so no exact manual time-saving figure is claimed.

The workflow is expected to reduce repeated effort because drafting, critique, and revision are handled through a consistent sequence rather than being performed as separate ad-hoc tasks.

The recorded 10–15 minute figure represents the actual time spent running the five workflow tests, not the initial setup/configuration time.

### Setup Cost

Initial setup included:

- Creating the Claude Project.
- Defining the Draft → Critique → Revise workflow.
- Adding the required project context.
- Testing and refining the workflow structure.

This setup cost is treated separately from the five workflow runs.

---

## Failure Points and Limitations

The workflow completed all five test runs successfully, but the results showed several limitations.

### 1. Draft Stage Can Over-Structure Short Inputs

For several portfolio-related inputs, the Draft stage produced multiple sections such as:

- Tools & Technologies
- Approach
- Outcome

This was sometimes more detailed than necessary for a short portfolio description.

**Human consideration:** The intended length and placement should be confirmed before using the final version.

### 2. Critique Can Become Mechanical

The Critique stage consistently checked categories such as clarity, structure, relevance, accuracy, missing information, repetition, unsupported claims, and tone.

This provided consistency, but some checks became repetitive across different inputs.

**Human consideration:** The reviewer should decide which critique points are actually important for the specific piece rather than applying every suggestion automatically.

### 3. Missing Information Cannot Be Invented

When the source material did not contain specific details, the workflow correctly flagged the missing information instead of creating facts.

Examples included:

- SQL operations in Student Performance Analysis.
- Specific AI assistance in the Internship Landing Page.
- XP mechanics in SpellForge.
- Mentor name and portfolio link in the feedback email.

**Human consideration:** The human must provide or verify these details before the content can become fully specific.

### 4. The Workflow Does Not Verify User-Supplied Facts

The workflow avoids adding new unsupported claims, but it does not independently verify whether the original information provided by the user is factually correct.

**Human consideration:** The user remains responsible for checking technical claims, project details, links, metrics, and other factual information.

### 5. Final Output May Still Be Generic

The Revision stage improves clarity and structure, but it cannot create genuine project-specific evidence when the original input does not contain it.

As a result, some final versions remained relatively general.

**Human consideration:** Concrete findings, technical decisions, screenshots, links, and project-specific examples should be added only when they can be verified.

---

## Required Human Review

Before using any workflow output publicly, a human should check:

- [ ] All factual and technical claims
- [ ] Project names and descriptions
- [ ] Technical tools and technologies
- [ ] Specific project findings or results
- [ ] Links and repository URLs
- [ ] Screenshots and supporting evidence
- [ ] Names and contact information
- [ ] Remaining placeholders
- [ ] Appropriate length and placement
- [ ] Whether the final wording accurately represents the original work

The AI workflow assists with writing quality and consistency, but final approval remains a human responsibility.

---

## Repository Structure

```text
03_FL-04_Ship-an-Automation-Workflow-v2
│
├── README.md
└── Screenshots
    ├── 01_claude_project.png
    ├── 02_workflow_instructions.png
    ├── 03_run_01.png
    ├── 04_run_02.png
    ├── 05_run_03.png
    ├── 06_run_04.png
    ├── 07_run_05.png
    └── 08_retrospective.png
```

---

## Status

✅ Completed