FlyRank General AI Fluency

This repository contains my work for the FlyRank General AI Fluency Program.

The repository documents my progression through AI-assisted workflows, portfolio strategy, prompt engineering, identity and content systems, agent concepts, MCP, personal-agent design, agent implementation, frontend AI engineering, and portfolio development.

Repository Structure
text
flyrank-general-ai-fluency/
├── Week-01/
│   ├── 01_FL-01_AI-Workflow-Audit-and-Tool-Setup/
│   ├── 02_Draw-The-Path-Portfolio-Sitemap-Toolkit/
│   └── 03_What-Are-You-Proving/
├── Week-02/
│   ├── 01_Frame-It-As-Cases-Work-That-Speaks-for-Itself/
│   ├── 02_The-Prompt-Ladder/
│   └── 03_FL-02_Prompting-Fundamentals-on-Real-Tasks-v2/
├── Week-03/
│   ├── 01_Consistency-Not-Talent-and-Frame-Not-Upstage/
│   ├── 02_Decide-Once-Build-Your-Identity-Kit/
│   ├── 03_Kill-Your-Darlings-Curate-Your-Images/
│   └── 04_The-Through-Line-Map-Content-and-CTAs/
├── Week-04/
│   ├── 01_Empty-but-Live-Ship-a-Blank-Page/
│   ├── 02_Three-Roads-Choose-Your-Stack-with-AI/
│   ├── 03_FL-04_Ship-an-Automation-Workflow-v2/
│   └── 04_FL-05_Agent-Concepts-and-MCP-Basics/
├── Week-05/
│   ├── 01_Explain-It-Like-You-Built-It/
│   ├── 02_FL-06_Design-Your-Personal-Agent/
│   ├── 03_FL-07_Build-the-Agent/
│   └── 04_PF-04_Personal-Website-Live-on-FlyRank-Domain/
├── Week-06/
│   ├── 01_Make-It-Do-Something/
│   ├── 02_Open-It-On-Your-Phone/
│   ├── FL_CAP_Impact_Project/
│   └── 03_Survive-the-Crit/
├── CLAUDE.md
└── README.md
Progress
Week	Status
Week 01	✅ Completed
Week 02	✅ Completed
Week 03	✅ Completed
Week 04	✅ Completed
Week 05	✅ Completed
Week 06	⏳ In Progress
Future Weeks	⏳ Upcoming

Week 06 is currently in progress. The 01_Make-It-Do-Something, 02_Open-It-On-Your-Phone, and FL_CAP_Impact_Project assignments have been completed. The Survive the Crit assignment is the remaining Week 06 assignment and has not yet been started.

Continuing Work

Work after Week 06 will be added to this repository as the FlyRank General AI Fluency program progresses.

Future work may include:

Additional AI-assisted engineering assignments
Portfolio and personal-agent improvements
New experiments and project work
General AI Fluency capstone extensions
Supporting documentation and evidence
Final program deliverables

Each future assignment will be organized under its corresponding week and documented with the relevant README, implementation files, screenshots, and other evidence where applicable.

Week 01 — Foundations & Portfolio Direction

Week 01 established the foundation for the program and defined the direction of the portfolio.

Key work included:

AI workflow audit and tool setup
Portfolio sitemap development
Defining what the portfolio should prove
Establishing an evidence-first approach to portfolio decisions
Week 02 — Prompting & Case-Study Thinking

Week 02 focused on improving how AI tools are used through structured prompting and iterative workflows.

Key work included:

Case-study framing
Prompt ladder development
Prompting fundamentals
Iterative prompt improvement
Documenting AI-assisted workflows
Week 03 — Portfolio Identity & Content System

Week 03 focused on creating a consistent portfolio identity and content system.

Key work included:

Portfolio content mapping
One-line positioning claim
Visual identity kit
Typography and color system
KC monogram
Project image curation
Content and CTA mapping

Portfolio Positioning

I design data models that anticipate future features and make the engineering tradeoffs behind them explicit.

The portfolio was designed around showing technical reasoning and real project evidence rather than only presenting finished interfaces.

Week 04 — Shipping, Automation, Agents & MCP

Week 04 focused on moving from planning toward shipping and understanding AI agent concepts.

Key work included:

Shipping a blank live page
Exploring implementation paths with AI
Building an automation workflow
Understanding workflow vs agent concepts
Learning MCP fundamentals
Connecting external information sources through AI tools
Week 05 — Build, Explain & Design an AI Agent

Week 05 focused on understanding AI-assisted development, designing a personal AI agent, building the agent, and continuing the portfolio toward a live personal website.

01 — Explain It Like You Built It

I analyzed the analyzeWebsiteTool from a frontend AI engineering project to understand how the implementation works rather than treating AI-generated code as a black box.

Concepts covered included:

Next.js
TypeScript
Vercel AI SDK
Zod
Google Gemini
fetch()
Tool definitions
Input schemas
Tool execution
Structured tool results
02 — FL-06: Design Your Personal Agent

AI Project & Career Research Assistant

The personal agent was designed to help analyze existing project, skill, internship, and career information and turn that evidence into practical next steps.

The design included:

Project and document search
Document reading
Evidence-based analysis
Structured recommendations
Skill-gap analysis
Action planning

The agent was designed with guardrails against:

Fabricating skills or experience
Unsupported claims
Hiding missing information
Uncontrolled or irreversible actions
03 — FL-07: Build the Agent

The AI Project & Career Research Assistant was implemented and evaluated using connected Google Drive information through Claude.

The implementation included:

Agent instructions
Google Drive connector usage
Project and document research
Skill-gap analysis
Opportunity-fit evaluation
Evidence retrieval
Action planning
Evaluation cases
Build documentation
Screen-recording demonstration

The preferred response structure was:

Goal → Evidence → Gap/Opportunity → Recommendation → Next Action

The implementation intentionally remained focused on evidence-based research and recommendations rather than attempting to become a fully autonomous career-management system.

04 — PF-04: Personal Website Live on FlyRank Domain

Week 05 also continued the development of my personal portfolio website.

The portfolio was built around:

Backend-focused positioning
Evidence-first case studies
Reikein as the featured case study
Selected technical projects
Consistent visual identity
Project evidence and screenshots
GitHub and project links
Clear contact pathways

The website uses a minimal, calm, modern, and professional visual direction based on the identity system developed earlier in the program.

Week 06 — Make It Do Something & Impact Project

Week 06 focuses on moving from portfolio presentation toward functional, demonstrable work and building a repeatable process for turning completed work into portfolio evidence.

The week currently contains four assignments:

01 — Make It Do Something

Personal Portfolio Project

The portfolio was developed into a functional React + Vite website with a real interactive feature rather than remaining a static portfolio page.

Key work included:

Personal portfolio development
React + Vite implementation
Responsive interface
Portfolio sections for projects, skills, experience, education, and contact
Charcoal + Powder visual theme
Functional contact form
Client-side form validation
Loading, success, validation-error, and submission-error states
Form submission through Formspree
Live Vercel deployment
Production testing
Evidence capture

The contact form was verified on the live deployed website through a successful submission that reached the configured Formspree inbox.

Live Website: 🔗 https://01-make-it-do-something.vercel.app

The project also includes workflow and implementation documentation explaining the development process, validation logic, form lifecycle, deployment, and backend concept.

02 — Open It On Your Phone

Responsive Portfolio Audit

The portfolio was audited across mobile, tablet, desktop, and a real physical phone.

The main mobile issue identified was that the desktop navigation links were hidden on small screens. A responsive hamburger navigation was added with accessible menu controls and all six navigation links.

Testing included:

Mobile ~375px
Tablet ~768px
Desktop ~1440px
Real physical phone
Navigation and link verification
Readability and layout checks
Image and capture checks

Supporting evidence and audit documentation were prepared.

Status: ✅ Completed

03 — FL_CAP_Impact_Project

General AI Fluency · Impact Project

The Impact Project establishes a repeatable process for turning future completed work into strong portfolio case studies.

The case-study structure follows the three-beat format developed earlier in the program:

Problem → What I Did → What Came of It

The process includes:

Finish and test the project
Identify the main problem or need
Document what was built and how
Explain what came from the work
Add screenshots, demo links, and supporting evidence
Add the case study to the portfolio
Review the case study using the existing portfolio context
Check links, evidence, clarity, and recruiter readability

The project also preserves the existing Kanak Portfolio Build Claude Project as part of the established portfolio context.

Current Week 06 Impact Project work includes:

Case-study workflow
Evidence checklist
Reminder evidence
Existing Claude Project context
Submission notes
Preparation for adding the next portfolio case study

Status: ✅ Completed

04 — Survive the Crit

General AI Fluency · Week 06

This assignment is focused on reviewing the work through critical feedback and identifying areas that can be improved.

Status: ⏳ Not Started

Key Tools & Technologies

AI & Development

Claude
Claude Projects
Claude Connectors
Google Drive
Google Gemini
Next.js
TypeScript
Vercel AI SDK
Zod

Web & Portfolio

HTML
CSS
JavaScript
React.js
Vite
Formspree
Vercel
Netlify

Development Workflow

Git
GitHub
VS Code
Repository Principles
Keep real evidence with the assignment it supports.
Keep README files specific to the folder or assignment they describe.
Preserve original work and evidence when improving documentation.
Keep notes, evidence, and deliverables clearly separated.
Do not claim work or evidence that is not actually present.
Document important implementation decisions and learning outcomes.
Use AI to accelerate development while maintaining understanding and human control.
Keep project status accurate and distinguish completed work from work still in progress.
Program Outcome

The FlyRank General AI Fluency program has progressed from foundational AI workflows and portfolio strategy toward practical AI-assisted engineering, agent development, and functional portfolio work.

The progression can be summarized as:

text
AI Workflow Foundations
        ↓
Portfolio Strategy
        ↓
Prompt Engineering
        ↓
Identity & Content Systems
        ↓
Shipping & Automation
        ↓
Agent Concepts & MCP
        ↓
Personal Agent Design
        ↓
Agent Implementation & Evaluation
        ↓
Portfolio Development
        ↓
Functional Portfolio Features
        ↓
Impact Project
        ↓
Critical Review & Iteration

The main principle throughout the program is:

Use AI to accelerate development, but understand the system well enough to explain, evaluate, and improve it yourself.

Week 06 Status

⏳ In Progress

Week 06 is currently in progress.

The 01_Make-It-Do-Something Personal Portfolio assignment has been completed and deployed.

The 02_Open-It-On-Your-Phone assignment has also been completed. The portfolio was audited across mobile, tablet, desktop, and a real phone. The main mobile navigation issue was identified and fixed, responsive evidence was collected, all tested links were verified, and the required audit and fix documentation was prepared.

The FL_CAP_Impact_Project has also been completed. It documents a repeatable process for turning completed work into portfolio case studies with supporting evidence.

The remaining Week 06 assignment is Survive the Crit, which is currently Not Started.

Therefore, Week 06 remains In Progress until the remaining assignment is completed.

Week 06
│
├── 01_Make-It-Do-Something       ✅ Completed
├── 02_Open-It-On-Your-Phone      ✅ Completed
├── FL_CAP_Impact_Project         ✅ Completed
└── Survive the Crit              ⏳ Not Started

Overall Week 06                   ⏳ In Progress