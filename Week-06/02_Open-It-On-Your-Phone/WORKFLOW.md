# Development Workflow — Make It Do Something

## 1. Project Goal

The goal of this project was to take a static developer portfolio and make one meaningful part of it genuinely functional.

Instead of adding multiple dynamic features, the implementation focused on one feature:

**Contact Form**

The form allows visitors to enter their name, email and message and submit the information through a form-processing service.

---

## 2. Feature Selection

### Selected Feature

**Portfolio Contact Form**

### Why This Feature?

A contact form is one of the most useful dynamic features for a personal portfolio because it creates a direct communication path between a visitor and the portfolio owner.

It also provides a simple way to demonstrate:

- User input
- Client-side validation
- Form submission
- HTTP communication
- Backend/form-processing concepts
- Success and error states

The project intentionally uses only one dynamic feature to stay aligned with the assignment requirement.

---

## 3. Development Approach

The implementation followed this workflow:

```text
Understand Assignment
        ↓
Select One Dynamic Feature
        ↓
Plan User Interaction
        ↓
Build Contact Form
        ↓
Add Validation
        ↓
Add Submission States
        ↓
Connect Formspree
        ↓
Test Locally
        ↓
Build for Production
        ↓
Deploy to Vercel
        ↓
Test Live Submission
        ↓
Capture Evidence
```

---

## 4. Frontend Implementation

The portfolio was developed using:

- React
- JavaScript
- Vite
- CSS

The main application logic is contained in `src/App.jsx`.

The visual styling is handled through `src/styles.css`.

The React application is initialized from `src/main.jsx`.

---

## 5. Contact Form Workflow

The contact form collects three pieces of information:

- Name
- Email
- Message

The interaction flow is:

```text
Visitor enters information
        ↓
React state updates
        ↓
Form validation
        ↓
Submit button enters loading state
        ↓
Formspree receives the submission
        ↓
Submission is processed
        ↓
Success / error feedback is shown
```

---

## 6. Validation Logic

Client-side validation was added before processing the submission.

The form checks:

- Required fields are filled
- Email format is valid
- Empty submissions are prevented

If validation fails, the user receives an error message without proceeding with the submission.

---

## 7. Submission Lifecycle

The contact form was designed around explicit interaction states.

**Idle**

The form is ready for user input.

**Loading**

The submission is being processed.

Form controls are disabled during this state to avoid accidental duplicate submissions.

**Success**

The submission has been successfully processed and the interface provides positive feedback.

**Validation Error**

The entered information does not satisfy the required validation rules.

**Submission Error**

An unexpected problem occurs while processing the submission.

---

## 8. Formspree Integration

Formspree is used as the form-processing service for the contact form.

The service receives the submitted form data and forwards the submission to the configured email inbox.

The production flow is:

```text
Live Vercel Portfolio
        ↓
Contact Form
        ↓
Formspree
        ↓
Configured Email Inbox
```

This allows the portfolio to have a working contact mechanism without building and maintaining a custom backend server.

---

## 9. Backend Concept

The project does not require a custom backend server.

Instead, Formspree acts as the form-processing layer.

Conceptually:

```text
Frontend
Collects user data
        ↓
HTTP Form Submission
        ↓
Formspree
Processes submission
        ↓
Email Notification
        ↓
Portfolio Owner
```

This demonstrates the role a backend or backend service can play in receiving and processing information from a frontend application.

---

## 10. Local Testing

The application was tested locally using the Vite development server.

Development command:

```bash
npm run dev
```

The contact form was tested with sample information to verify:

- Input handling
- Validation
- Submission behaviour
- User feedback

---

## 11. Production Build Testing

Before deployment, the project was tested with the production build command:

```bash
npm run build
```

The Vite production build completed successfully.

The generated production files were created inside `dist/`.

---

## 12. Deployment

The project was deployed to Vercel using the Vercel CLI.

Production deployment command:

```bash
vercel --prod
```

Live website: 🔗 [https://01-make-it-do-something.vercel.app](https://01-make-it-do-something.vercel.app)

The deployed website was opened and visually verified after deployment.

---

## 13. Live Feature Verification

The Contact Form was tested again after deployment.

A genuine test submission was made through the live Vercel website.

The submission was successfully received through Formspree.

The received submission contained:

- Name
- Email
- Message
- Submission timestamp

The Formspree notification confirmed that the submission originated from `01-make-it-do-something.vercel.app`.

This verified that the dynamic feature works in the production environment rather than only during local development.

---

## 14. Evidence

Live submission evidence is stored in:

```text
evidence/
└── contact-form-live-submission-formspree.png
```

The evidence shows the Formspree notification generated from a submission made through the live portfolio.

This provides proof of the production contact-form workflow.

---

## 15. AI-Assisted Development

AI tools were used as development assistants throughout the project.

They supported:

- Breaking the assignment into implementation steps
- Planning the contact form workflow
- Reviewing frontend logic
- Debugging build and deployment issues
- Understanding backend/form-processing concepts
- Improving project documentation
- Reviewing the final implementation

AI was used as a development aid rather than as a replacement for testing.

The implementation was manually run, built, deployed and tested in the actual development environment.

---

## 16. Deployment Debugging

During deployment, the production build initially failed because of a filename casing mismatch.

The application imported `./App.jsx` while the file was initially stored as `app.jsx`.

This worked locally because the Windows filesystem is case-insensitive, but the Vercel Linux build environment is case-sensitive.

The filename was corrected to `App.jsx`.

After the correction, the production build and Vercel deployment completed successfully.

This was an important part of validating the application in a real production environment.

---

## 17. Final Workflow

The complete development workflow can be summarized as:

```text
Assignment Brief
      ↓
Choose Contact Form
      ↓
Build React UI
      ↓
Add Form State
      ↓
Add Validation
      ↓
Add Loading / Success / Error States
      ↓
Connect Formspree
      ↓
Test Locally
      ↓
Run Production Build
      ↓
Fix Production-Specific Issue
      ↓
Deploy to Vercel
      ↓
Test Live Website
      ↓
Submit Real Contact Form
      ↓
Verify Formspree Email
      ↓
Capture Evidence
```

---

## 18. Final Outcome

The project successfully transformed a static portfolio into a portfolio with one functional dynamic feature.

The final implementation demonstrates:

- React-based interaction
- Client-side validation
- Form submission
- External form-processing integration
- Production deployment
- Live feature verification
- Evidence-based testing

---

## Summary

| Item | Detail |
|---|---|
| Dynamic Feature | Contact Form |
| Form Service | Formspree |
| Deployment | Vercel |
| Live Verification | ✅ Completed |