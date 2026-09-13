# 01_Make-It-Do-Something — Personal Portfolio Project

## Assignment Overview

This assignment focused on taking the personal portfolio from a static website experience to a more functional and production-ready web project.

The project presents my professional profile, technical skills, internship experience, projects, education, achievements, certifications, and contact information through a single responsive portfolio experience.

As part of the assignment requirement, exactly one dynamic feature was added to the portfolio: a functional **Contact Form** connected to Formspree.

The goal was to demonstrate how a real portfolio can move beyond static content and include a working frontend-to-service interaction.

---

## Live Website

**Production URL:** 🔗 [https://01-make-it-do-something.vercel.app](https://01-make-it-do-something.vercel.app)

The website is publicly accessible over HTTPS through Vercel.

The portfolio and its functional Contact Form are available on the live production website.

---

## Portfolio Positioning

> Building practical web experiences with React, JavaScript, and AI-assisted development workflows.

The portfolio focuses on:

- Frontend AI Engineering
- Web Development
- React.js
- JavaScript
- AI-assisted development
- Practical software development
- Data Analytics
- AI / ML exploration

The portfolio is designed to present both technical skills and real project-based learning.

---

## Website Sections

The website includes:

- Hero / positioning
- About
- Technical Skills
- Internship Experience
- Virtual Experience
- Projects
- Education
- Achievements
- Certifications
- Contact
- Footer

The Contact section also contains the functional feature implemented for this assignment.

---

## Visual Direction

The portfolio follows a restrained **Charcoal + Powder** visual system.

### Style

**Minimal · Calm · Modern · Professional**

### Color Palette

| Name | Hex |
|---|---|
| Charcoal | `#17191D` |
| Powder | `#DEBFD0` |
| Off-White | `#F4F1ED` |
| Muted Text | `#B9B5B5` |
| Dark Card | `#202328` |
| Dark Secondary | `#292C31` |
| Border | `#34373D` |
| Deep Powder | `#B996A8` |

The powder accent is used selectively against the charcoal interface so that the portfolio content, projects, and technical evidence remain the main focus.

---

## Featured Work

### AI Internship Program Landing Page

A responsive web-development project demonstrating HTML, CSS, JavaScript, and practical UI development.

### Advanced Calculator

A JavaScript-based calculator featuring multiple calculation functions and theme support.

### Finance India

A personal finance management system built using Java, Swing, and MySQL.

### Student Performance Analysis

A data-analysis project using Python, Pandas, Excel, and SQL.

### Reikein

A productivity-focused web application concept built around structured goals, tasks, habits, and progress tracking.

---

## Dynamic Feature

### Contact Form

The single dynamic feature implemented for this assignment is a functional **Contact Form**.

Visitors can submit:

- Name
- Email
- Message

The form performs client-side validation before submitting the information.

The submission is sent to Formspree, which processes the form and routes the submission to the configured email inbox.

After successful submission, the portfolio displays a success state and clears the submitted fields.

---

## Contact Form Data Flow

The submission follows this flow:

**Visitor → Portfolio Contact Form → Formspree → Email Inbox**

### Step-by-Step

1. A visitor opens the live portfolio website.
2. The visitor enters their name, email, and message.
3. The frontend validates the submitted information.
4. The form sends the data using an HTTP `POST` request.
5. Formspree receives and processes the submission.
6. Formspree routes the submission to the configured email inbox.
7. The portfolio displays a successful submission state.

This demonstrates how a frontend application can communicate with an external backend/service endpoint without requiring a custom backend server.

---

## Backend Concept

A backend is the part of a web application responsible for processing data, handling requests, and performing operations that should not be handled only in the browser.

For this project, there is no custom backend server.

Instead, **Formspree acts as the form-processing service**.

The portfolio collects the information on the frontend, validates it, sends it through an HTTP request, and the external service processes the submission and routes it to the configured inbox.

This provides a simple real-world example of frontend-to-service communication.

---

## Submission Lifecycle

The Contact Form includes multiple states:

- **Idle** — form is ready for input
- **Validation Error** — required information is missing or the email format is invalid
- **Loading** — submission is being processed
- **Success** — submission was successfully received
- **Submission Error** — the request could not be completed

The form controls and submit button are disabled while a submission is processing to help prevent duplicate submissions.

---

## Validation

Client-side validation is performed before sending the form.

The form checks:

- Name is not empty
- Email is not empty
- Email follows a valid format
- Message is not empty

Invalid submissions are stopped before the HTTP request is sent.

---

## Technical Execution

The project was developed using:

- React
- JavaScript
- Vite
- CSS
- Formspree
- Vercel

The portfolio was developed as a responsive frontend application.

The dynamic scope for this assignment was intentionally limited to exactly one feature: the Contact Form.

---

## Files

```text
01_Make-It-Do-Something/
├── evidence/
│   └── contact-form-live-submission-formspree.png
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── WORKFLOW.md
```

### File Responsibilities

**`src/App.jsx`**

- Contains the main portfolio application.
- Defines the portfolio sections and content.
- Contains the Contact Form.
- Handles form state and user input.
- Performs client-side validation.
- Handles the submission lifecycle.
- Sends form data to the configured Formspree endpoint.
- Displays success and error states.

**`src/styles.css`**

- Controls the complete portfolio visual design.
- Defines the Charcoal + Powder theme.
- Controls typography, spacing, cards, buttons, and layouts.
- Handles responsive behavior.
- Styles the Contact Form and its different states.

**`src/main.jsx`**

- Provides the React entry point.
- Mounts the application to the root HTML element.

**`index.html`**

- Provides the main HTML document used by Vite.

**`WORKFLOW.md`**

- Documents the development workflow followed for the assignment.
- Explains feature selection, implementation, validation, testing, deployment, and live verification.

**`evidence/contact-form-live-submission-formspree.png`**

- Contains evidence of a genuine Contact Form submission received through Formspree from the live production website.

---

## Testing

The portfolio was tested locally and after production deployment.

Testing included:

- Checking the portfolio layout
- Checking responsive behavior
- Testing Contact Form input
- Testing required-field validation
- Testing email validation
- Testing loading state
- Testing successful submission
- Testing the production website
- Verifying the received Formspree submission

The final live test confirmed that a genuine submission from the production Vercel website reached the configured email inbox.

---

## Evidence

The project contains:

```text
evidence/
└── contact-form-live-submission-formspree.png
```

The evidence shows a genuine Formspree submission generated through the live portfolio website.

The production submission was successfully verified on **13 September 2026**.

---

## Local Development

The project can be run locally using:

```bash
npm install
npm run dev
```

The Vite development server starts the portfolio locally for development and testing.

---

## Production Build

The production build was verified using:

```bash
npm run build
```

The Vite production build completed successfully without build errors.

---

## Deployment

The website was deployed using Vercel.

The project was published as a production deployment and is accessible over HTTPS.

The final production URL is: 🔗 [https://01-make-it-do-something.vercel.app](https://01-make-it-do-something.vercel.app)

During deployment, a Linux case-sensitivity issue was identified because the application import expected `App.jsx` while the file was initially named with different casing.

The filename was corrected to `src/App.jsx`.

After the correction, the production build and deployment completed successfully.

---

## Formspree Integration

Formspree is used as the form-processing service for the Contact Form.

This allows the portfolio to receive genuine visitor submissions without maintaining a custom backend server.

The final production flow is:

```text
Live Vercel Website
        ↓
Portfolio Contact Form
        ↓
HTTP POST Request
        ↓
Formspree
        ↓
Configured Email Inbox
```

The live production submission was successfully received and verified.

---

## AI-Assisted Development

AI tools were used during the development process to support:

- Project planning
- React implementation
- Form-state design
- Validation logic
- Backend/data-flow explanation
- Debugging
- Documentation
- Deployment troubleshooting

The final implementation was manually tested and verified through a genuine production submission.

---

## Assignment Alignment

The project satisfies the assignment requirements by adding exactly one dynamic feature to the personal portfolio.

**Personal Portfolio**

- [x] Complete responsive portfolio
- [x] Professional positioning
- [x] Projects and technical skills
- [x] Experience and education
- [x] Achievements and certifications
- [x] Contact section

**One Dynamic Feature**

- [x] Functional Contact Form

**End-to-End Functionality**

- [x] Live production form
- [x] HTTP submission
- [x] Formspree processing
- [x] Email delivery verified

**Deployment**

- [x] Vercel production deployment
- [x] HTTPS live website

**Evidence**

- [x] Genuine production submission evidence

**Explainer**

- [x] Backend concept documented
- [x] Contact Form data flow documented
- [x] Submission lifecycle documented

---

## Portfolio Principle

> A portfolio should not only show what I have built — it should demonstrate that the work actually works.

This project combines the portfolio presentation with one real functional interaction, showing how a frontend application can collect, validate, transmit, and process user-submitted information.

---

## Status

✅ **Completed**

The personal portfolio is publicly deployed over HTTPS and includes the required professional content, projects, technical information, and contact links.

The Contact Form is live and has been successfully verified through a genuine production submission.

The assignment demonstrates a complete frontend-to-service workflow while keeping the dynamic scope intentionally limited to one feature.