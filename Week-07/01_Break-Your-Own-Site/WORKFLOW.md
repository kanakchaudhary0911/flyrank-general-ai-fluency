# Week 07 — Break Your Own Site: Workflow

## 1. Objective

The goal of this task was to intentionally test the deployed portfolio, identify failures and limitations, fix actionable issues, and verify the site again after the fixes.

The workflow was based on:

```text
Break
  ↓
Identify
  ↓
Triage
  ↓
Fix
  ↓
Verify
  ↓
Harden
```

The purpose was to test the portfolio from a real user's perspective rather than assuming that everything worked correctly.

---

## 2. Portfolio Under Test

**Project:** 03 — Survive The Crit

**Live URL:** https://break-your-own-site-rose.vercel.app/

The portfolio focuses on:

* Backend Development
* Data Modeling
* AI-Assisted Engineering

---

## 3. Step 1 — Break the Site

The deployed portfolio was intentionally tested using different user actions and conditions.

### Functional Tests

The following scenarios were tested:

* Submit the contact form empty
* Submit invalid/garbage input
* Submit valid information
* Submit the form rapidly/double-click
* Check navigation
* Click CTA buttons
* Check footer links
* Check project links
* Test the mobile layout
* Check for horizontal scrolling or overlap
* Test keyboard navigation and focus states
* Check general interactive elements

The objective was to identify anything that could fail, confuse a user, or behave unexpectedly.

---

## 4. Step 2 — Record Findings

Each test result was documented and classified.

### Contact Form

The form was tested with:

* Empty fields
* Invalid email input
* Valid information
* Rapid repeated submission
* Successful email delivery

The validation and success states worked correctly.

The successful submission was also verified through the received Formspree email notification.

### Navigation and Interactions

The main navigation, CTAs, footer and interactive sections were checked.

No critical interaction failure was identified.

### Mobile Layout

The site was checked on a small mobile viewport.

The layout remained usable without a critical horizontal scrolling or overlap issue.

### Keyboard Accessibility

Interactive elements were tested using keyboard `Tab` navigation.

Visible focus states were confirmed.

### Project Links

Some project cards do not currently contain external demo/repository links.

This was recorded as a known limitation because some projects are still in progress.

---

## 5. Step 3 — Triage Findings

The findings were divided into:

### Fix Now

Issues that could affect production behaviour or presentation.

* Vercel Root Directory configuration
* Vercel Vite build execution
* Missing Open Graph metadata
* Missing Twitter/X metadata
* Contact-form submission protection and validation flow

### Passed / No Fix Required

* Empty form validation
* Invalid input validation
* Valid form submission
* Email delivery
* Rapid/double submission
* Navigation
* CTA interactions
* Responsive layout
* Mobile horizontal-scroll check
* Keyboard focus
* SEO metadata
* Search findability
* PageSpeed performance

### Known Limitation

Some project cards do not currently contain external demo/repository links.

These were not treated as broken functionality because the related projects are still in progress.

---

## 6. Step 4 — Fix Actionable Issues

### Vercel Root Directory

The initial Vercel deployment attempted to build from the repository root.

This caused:

```text
vite: command not found
```

The original Week-06 Vercel project was configured with the following Root Directory:

```text
Week-06/03_Survive-The-Crit
```

This was part of the historical deployment troubleshooting for the earlier Week-06 project.

### Vercel Build Command

After correcting the Root Directory, the deployment encountered a Vite permission error.

The Build Command was changed from the standard npm command to:

```text
node node_modules/vite/bin/vite.js build
```

The production build then completed successfully.

### SEO Metadata

The production HTML was updated with:

* Page title
* Meta description
* Open Graph metadata
* Twitter/X metadata

The updated metadata was verified after deployment.

### Contact Form

The contact form was hardened with:

* Empty-field validation
* Email-format validation
* Loading state
* Success state
* Error state
* Submission lock for rapid repeated submissions
* Formspree submission
* Email delivery verification

---

## 7. Step 5 — Rebuild and Redeploy

After the fixes were applied, the project was rebuilt locally.

The production build completed successfully.

The changes were then pushed to GitHub.

For Week-07, the portfolio was deployed as a **separate Vercel project** so that the original Week-06 deployment remained unchanged.

The Week-07 deployment flow was:

```text
Week-07 changes
      ↓
Local project update
      ↓
GitHub push
      ↓
Vercel detects new commit
      ↓
New deployment
      ↓
break-your-own-site-rose.vercel.app
      ↓
Updated Week-07 production version
```

**Week-07 Root Directory:**

```text
Week-07/01_Break-Your-Own-Site
```

The final Week-07 production URL is:

https://break-your-own-site-rose.vercel.app/

---

## 8. Step 6 — Re-test the Production Site

The deployed portfolio was tested again after the fixes.

The following were verified:

* Page loads correctly
* Contact-form validation
* Valid form submission
* Email delivery
* Rapid/double submission behaviour
* Navigation
* CTA interactions
* Mobile layout
* Horizontal-scroll behaviour
* Keyboard focus
* SEO metadata
* Open Graph metadata
* Twitter/X metadata
* Search findability

The production site remained functional after the fixes.

---

## 9. Step 7 — Hardening Review

A structured peer hardening review was completed.

The reviewer confirmed that:

* The site loaded normally.
* The portfolio structure was clear.
* No obvious major visual or breaking issue was identified.
* External project/demo/repository links should be rechecked.
* CTAs should clearly communicate where they lead.
* The contact-form flow should be verified.
* Mobile layout should be checked for scrolling or overlap.
* Keyboard focus should remain visible.

The recommended checks were completed after the review.

**Hardening Review Status:** ✅ COMPLETE

No clearly visible critical issue remained unresolved.

---

## 10. Step 8 — SEO and Findability Check

The production site was checked for basic search and sharing readiness.

### SEO

Verified:

* Page title
* Meta description
* Open Graph metadata
* Twitter/X metadata

### Search Findability

Google search was tested using:

```text
"Kanak Chaudhary" portfolio
```

Relevant results were visible.

---

## 11. Step 9 — Performance Check

Google PageSpeed Insights was used to test the production portfolio.

### Desktop

| Metric         | Score |
| -------------- | ----: |
| Performance    |   100 |
| Accessibility  |    97 |
| Best Practices |   100 |
| SEO            |   100 |

### Mobile

| Metric         | Score |
| -------------- | ----: |
| Performance    |   100 |
| Accessibility  |    98 |
| Best Practices |   100 |
| SEO            |   100 |

The results were recorded as evidence screenshots.

---

## 12. Step 10 — Final Verification

The final production site was checked after completing the fixes and hardening review.

The verification covered:

* Functional behaviour
* Form validation
* Email delivery
* Interaction states
* Mobile responsiveness
* Keyboard accessibility
* Project links
* SEO metadata
* Search findability
* Performance
* Production deployment

**Final Status:** ✅ HARDENING PASS COMPLETE

**Unresolved Critical Issues:** 0

**Known Limitations:** 1

Some project cards do not currently contain external demo/repository links because some projects are still in progress.

---

## 13. Evidence

The workflow was supported using screenshots and documentation stored inside the Week 07 evidence folder.

Important evidence includes:

* `01-empty-form.png`
* `02-garbage-input.png`
* `03-double-submit.png`
* `05-mobile-test.png`
* `09-project-links.png`
* `10-seo-meta-tags.png`
* `12-seo-og-tags-fixed.png`
* `13-seo-twitter-tags-fixed.png`
* `14-pagespeed-mobile.png`
* `15-pagespeed-desktop.png`
* `16-search-findability-google.png`
* `17-hardening-review-peer-feedback.png`
* `18-mobile-horizontal-scroll-check.jpeg`
* `19-contact-form-submission-success.png`
* `20-contact-form-email-received.png`
* `21-keyboard-focus-accessibility.png`

---

## 14. Final Workflow Summary

The completed Week 07 workflow was:

```text
Break
 ↓
Observe
 ↓
Record
 ↓
Triage
 ↓
Fix
 ↓
Rebuild
 ↓
Deploy
 ↓
Re-test
 ↓
Hardening Review
 ↓
SEO Check
 ↓
Performance Check
 ↓
Document
```

The remaining project-link limitation was documented honestly instead of treating unfinished project links as completed functionality.

The portfolio was successfully hardened, redeployed, reviewed, and verified on the final Week-07 production URL:

https://break-your-own-site-rose.vercel.app/

**Week-07 Root Directory:**

```text
Week-07/01_Break-Your-Own-Site
```
