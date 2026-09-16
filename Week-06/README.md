# Week 6 — Make It Do Something & Impact Project

This folder contains all work completed during Week 6 of the FlyRank AI Fluency Program.

The focus of this week was turning the portfolio into a functional, production-ready project, testing it across devices, creating a repeatable system for continuously converting future work into portfolio case studies, and improving the portfolio through external critique.

The week combines four connected areas:

- Making the personal portfolio do something through a real dynamic feature.
- Auditing and improving the portfolio across devices.
- Creating a repeatable case-study workflow for future projects.
- Using external critique to improve technical positioning and portfolio evidence.

---

## Week 6 Overview

| Assignment | Title | Focus | Status |
|---|---|---|---|
| 01 | `01_Make-It-Do-Something` | Build and ship a functional personal portfolio with one dynamic feature | ✅ Completed |
| 02 | `02_Open-It-On-Your-Phone` | Audit and improve the portfolio across mobile, tablet, desktop, and real phone | ✅ Completed |
| 03 | `FL_CAP_Impact_Project` | Create a repeatable process for adding future portfolio case studies | ✅ Completed |
| 04 | `03_Survive-The-Crit` | Run an external critique and improve the portfolio based on actionable feedback | ✅ Completed |

---

## Assignments

### 01 — `01_Make-It-Do-Something`

**Project:** Personal Portfolio Project

This assignment focused on taking the personal portfolio beyond a static presentation and making it a functional web experience.

The portfolio presents my:

- Professional positioning
- Technical skills
- Internship experience
- Virtual experience
- Projects
- Education
- Achievements
- Certifications
- Contact information

The portfolio was developed as a responsive React application and deployed to Vercel.

#### Portfolio Positioning

The portfolio focuses on:

- Frontend AI Engineering
- Web Development
- React.js
- JavaScript
- AI-assisted development
- Practical software development
- Data Analytics
- AI / ML exploration

The design keeps the interface minimal and professional so that the projects, technical work, and evidence remain the primary focus.

#### Dynamic Feature — Contact Form

The assignment required exactly one dynamic feature. The selected feature was a functional Contact Form.

Visitors can submit:

- Name
- Email
- Message

The form performs client-side validation and sends the submission through Formspree.

The production workflow is:

```
Visitor → Portfolio Contact Form → Formspree → Email Inbox
```

A genuine submission from the live production website was successfully received and verified.

#### Technical Implementation

The portfolio was built using:

- React
- JavaScript
- Vite
- CSS
- Formspree
- Vercel

The project includes different Contact Form states:

- Idle
- Validation Error
- Loading
- Success
- Submission Error

The form controls are disabled during submission to help prevent duplicate requests.

#### Backend Concept

The project does not use a custom backend server. Instead, Formspree acts as the external form-processing service.

The frontend collects and validates the information, sends it through an HTTP POST request, and the service processes the submission and routes it to the configured email inbox.

This demonstrates a practical frontend-to-service data flow.

#### Live Website

**Production URL:** 🔗 https://01-make-it-do-something.vercel.app

The portfolio is publicly accessible over HTTPS through Vercel. The live Contact Form was also tested through the production website.

#### Evidence

```
Week-06/
└── 01_Make-It-Do-Something/
    └── evidence/
        └── contact-form-live-submission-formspree.png
```

The evidence confirms that the Contact Form submission was received through Formspree from the live production website.

#### Documentation

```
01_Make-It-Do-Something/
├── README.md
├── WORKFLOW.md
└── evidence/
    └── contact-form-live-submission-formspree.png
```

`WORKFLOW.md` documents the development, implementation, testing, deployment, and verification process.

---

### 02 — `02_Open-It-On-Your-Phone`

**Project:** Responsive Portfolio Audit

This assignment focused on opening the portfolio on a real phone, identifying responsive and usability issues, fixing obvious mobile problems, and verifying the portfolio across mobile, tablet, desktop, and a physical phone.

The project was created as a separate copy of `01_Make-It-Do-Something` so that the original portfolio assignment remains unchanged.

#### Main Issue Found

The main issue discovered during the mobile audit was that the desktop navigation links were hidden on small screens.

This meant mobile users could not directly access:

- About
- Skills
- Experience
- Projects
- Education
- Contact

#### Fix Implemented

A responsive hamburger navigation was added for small screens.

The mobile menu includes:

- A tappable menu button
- All six navigation links
- `aria-label`
- `aria-expanded`
- Automatic menu closing after navigation

#### Testing Completed

The updated portfolio was checked at:

- Mobile ~375px
- Tablet ~768px
- Desktop ~1440px
- Real physical phone

The following were also verified:

- Navigation
- Readability
- Buttons
- Images/captures
- Layout overflow
- Project links
- Demo links
- Repository links
- Contact links

All tested links passed.

#### Evidence

```
02_Open-It-On-Your-Phone/
└── evidence/
    ├── 01-mobile-375px.png
    ├── 02-tablet-768px.png
    ├── 03-desktop-1440px.png
    └── 04-real-phone.png
```

#### Documentation

```
02_Open-It-On-Your-Phone/
├── README.md
├── AI-AUDIT.md
├── FIX-LOG.md
└── evidence/
```

- `AI-AUDIT.md` documents the mobile, accessibility, and performance audit.
- `FIX-LOG.md` records the problems discovered, changes made, and verification results.

#### Current Status

✅ **Completed**

Responsive testing, mobile fixes, accessibility improvements, link verification, evidence collection, and documentation have been completed.

---

### 03 — `FL_CAP_Impact_Project`

**Project:** General AI Fluency · Impact Project

This capstone establishes a repeatable process for continuously turning future projects into portfolio case studies.

The goal is to avoid treating the portfolio as a one-time project. Instead, each future project can become new evidence of skills, problem-solving, and practical work.

#### Case Study Structure

Each future portfolio case study will follow the three-beat structure established during Week 2:

**Problem → What I Did → What Came of It**

**1. Problem**
Explain the real problem, need, or opportunity that the project was created to address.

**2. What I Did**
Describe:
- My approach
- Technologies used
- Tools used
- Important implementation decisions
- Where AI helped during development

**3. What Came of It**
Document:
- The result
- What worked
- What broke
- What I learned
- Measurable or visible outcomes
- Relevant evidence

This structure keeps future case studies focused on actual work rather than only describing the final product.

#### Case Study Process

For each future project:

1. Finish and test the project.
2. Identify the main problem it solves.
3. Write the Problem section.
4. Write the What I Did section.
5. Write the What Came of It section.
6. Add relevant screenshots, demo links, or other evidence.
7. Add the case study to the Projects / Case Studies section of the portfolio.
8. Review the case study using the existing Claude Project.
9. Check that the writing remains consistent with the portfolio voice, stack, and identity.
10. Verify that all links and evidence work correctly.
11. Make sure a recruiter or visitor can understand the case study quickly.

#### Next Piece of Work — Personal AI Agent

The next planned portfolio case study is the Personal AI Agent.

The case study will document:

- The problem it solves
- How it was designed
- How it was built
- Technologies and tools used
- Where AI helped
- What worked
- What broke
- What was learned
- The resulting outcome

Once completed, the Personal AI Agent will be added to the portfolio using: **Problem → What I Did → What Came of It**

#### Reminder

A concrete reminder has been prepared to prompt the addition of the Personal AI Agent as the next portfolio case study. The reminder converts the future case study from a general intention into a specific follow-up action.

Supporting evidence is stored in:

```
FL_CAP_Impact_Project/
└── screenshots/
    └── 01-reminder-evidence.png
```

#### Preserved Build Context

The existing Claude Project, **"Kanak Portfolio Build,"** is being preserved as the working context for future portfolio updates.

The project contains relevant:

- Portfolio voice
- Technical stack
- Identity
- Project context
- Existing portfolio direction

Keeping this context available means future case studies can be added without rebuilding the portfolio context from scratch.

Supporting evidence is stored in:

```
FL_CAP_Impact_Project/
└── screenshots/
    └── 02-claude-project-evidence.png
```

#### Impact Project Structure

```
FL_CAP_Impact_Project/
│
├── screenshots/
│   ├── 01-reminder-evidence.png
│   └── 02-claude-project-evidence.png
│
├── evidence-checklist.md
├── README.md
└── submission-notes.md
```

#### File Responsibilities

**`screenshots/`**
Contains evidence for the reminder and preserved Claude Project.
- `01-reminder-evidence.png` — Shows the concrete reminder prepared for adding the Personal AI Agent as a future case study.
- `02-claude-project-evidence.png` — Shows the preserved Kanak Portfolio Build Claude Project.

**`evidence-checklist.md`**
Documents the evidence requirements and checklist for the capstone.

**`submission-notes.md`**
Contains notes prepared for the FlyRank submission portal.

**`README.md`**
Documents the complete General AI Fluency Impact Project.

**Status:** ✅ Completed

---

### 04 — `03_Survive-The-Crit`

**Project:** Portfolio Critique and Improvement

This assignment focused on receiving external first-time-visitor feedback on the portfolio, identifying what was unclear or weak, and making concrete improvements based on the critique.

The review focused on two questions:

- "10 seconds mein, main kya karta hoon?"
- "Kya tumhe lagega ki main ismein achha hoon?"

The reviewer identified the portfolio as a backend-focused, technical developer portfolio with particular strength around backend and data-modeling thinking.

The reviewer specifically identified the SpellForge data-modeling decision as a strong technical signal.

#### Key Feedback

The review highlighted the following improvements:

- Make technical strengths immediately obvious.
- Clearly communicate what kind of backend work I am particularly good at.
- Structure projects around Problem → Technical Decision → Result.
- Surface the SpellForge data-modeling decision directly.
- Clearly distinguish personal contribution from technologies used.
- Reduce unnecessary technology or buzzword emphasis where concrete engineering decisions can communicate more.
- Make the portfolio prove engineering ability instead of requiring the reviewer to infer it.

#### Changes Implemented

**1. Sharpened Hero Section**

The Hero section was rewritten around:

> BACKEND DEVELOPMENT · DATA MODELING · AI-ASSISTED ENGINEERING

The updated positioning focuses on:

- Backend systems
- Data models
- Databases
- Workflows
- System design
- Scalability
- Maintainability
- Future features

**2. Added Project Proof Structure**

All five projects were updated to use:

**Problem → My Contribution → Result**

Projects covered:

- SpellForge
- AI Internship Program Landing Page
- Advanced Calculator
- Finance India — Personal Finance System
- Student Performance Analysis

**3. Surfaced SpellForge Data Modeling**

The SpellForge project now directly explains the separation between:

- Current progression
- XP History
- Auditable XP events

The contribution focuses on storing XP gains as events instead of relying only on a mutable total.

This provides clearer evidence of thinking around:

- Data integrity
- Auditability
- Future analytics
- Achievement features
- Maintainable future development

**4. Clarified My Contribution**

The project proof label was changed from **"Technical Decision"** to **"My Contribution."**

This makes it clearer which engineering decisions and work were personally contributed rather than simply listing technologies or features.

#### Live Portfolio

**Production URL:** 🔗 https://03-survive-the-crit.vercel.app

The revised portfolio was deployed as a separate Vercel project: `03-survive-the-crit`

#### Evidence

```
03_Survive-The-Crit/
└── evidence/
    ├── 01-reviewer-10-second-test-and-feedback.png
    ├── 02-hero-technical-positioning-fixed.png
    ├── 03-project-proof-structure-fixed.png
    ├── 04-spellforge-data-modeling-proof.png
    ├── 05-my-contribution-clarity-fixed.png
    └── 06-final-live-portfolio-proof.png
```

#### Documentation

```
03_Survive-The-Crit/
├── README.md
├── CRIT-REVIEW.md
├── FIX-LOG.md
├── AI-AUDIT.md
├── WORKFLOW.md
└── evidence/
```

- `CRIT-REVIEW.md` contains the reviewer feedback and critique analysis.
- `FIX-LOG.md` records the changes made in response to the feedback.
- `AI-AUDIT.md` documents the AI-assisted critique and revision workflow.
- `WORKFLOW.md` documents the complete assignment workflow.

#### Verification

The updated portfolio was verified locally using:

```
npm run build
```

Build completed successfully.

The production version was then deployed through Vercel and verified using the live portfolio URL.

**Status:** ✅ Completed

---

## Tools Used

The work across Week 6 used:

- React
- JavaScript
- Vite
- CSS
- Formspree
- Vercel
- Git
- GitHub
- VS Code
- Claude
- Claude Projects

The Impact Project also continues the use of the existing Kanak Portfolio Build Claude Project as preserved portfolio context.

---

## What I Learned

- A portfolio becomes more useful when it demonstrates real functionality instead of only presenting static information.
- Adding one focused dynamic feature was enough to demonstrate a practical frontend-to-service workflow without building an unnecessary custom backend.
- Testing the Contact Form on the live production website provided stronger evidence than relying only on local development testing.
- Responsive testing on multiple screen sizes and a physical phone can reveal usability issues that are easy to miss on desktop.
- A repeatable case-study structure makes it easier to turn future projects into portfolio evidence.
- The Problem → What I Did → What Came of It structure keeps case studies focused on impact rather than only implementation details.
- Preserving the existing Claude Project reduces repeated setup work when adding future portfolio content.
- A reminder turns the Personal AI Agent from a vague future plan into a concrete next action.
- External critique can reveal where technical strengths are present but not immediately visible.
- Making engineering decisions and personal contributions explicit helps a portfolio provide stronger technical evidence.

---

## Week 6 Outcome

Week 6 connected four important parts of the portfolio workflow:

- **Make It Do Something** turned the personal portfolio into a functional web project with a real Contact Form and verified production submission.
- **Open It On Your Phone** improved the portfolio's responsive behavior, mobile navigation, accessibility, and cross-device usability.
- **Impact Project** created a repeatable system for continuously adding future projects as portfolio case studies.
- **Survive the Crit** used external feedback to improve technical positioning, project proof, contribution clarity, and visible engineering evidence.

Together, these assignments move the portfolio from a static collection of projects toward a functional, tested, evidence-driven, and continuously evolving body of work.

---

## Week 6 Status

✅ **Completed**

### Final Status

```
Week 6
│
├── 01_Make-It-Do-Something       ✅ Completed
├── 02_Open-It-On-Your-Phone      ✅ Completed
├── FL_CAP_Impact_Project         ✅ Completed
└── 03_Survive-The-Crit           ✅ Completed

Overall Week 6                    ✅ Completed
```