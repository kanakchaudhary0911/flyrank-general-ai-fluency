# Week 07 — Break Your Own Site

## 03 — Survive The Crit

A structured hardening pass for my personal portfolio website.

The goal of this assignment was to intentionally test my own site, identify where it could break, fix actionable issues, document known limitations, complete a structured hardening review, and verify the final deployed version.

---

## Live Website

🔗 https://break-your-own-site-rose.vercel.app/

---

## Assignment Objective

The objective of Week 07 was to test the portfolio from a real user's perspective instead of only checking whether the code worked during development.

The hardening pass covered:

- Intentionally testing unexpected inputs
- Testing empty and invalid form submissions
- Testing valid form submission
- Testing actual email delivery
- Testing rapid/double submission
- Testing browser/device behaviour
- Testing mobile responsiveness
- Checking mobile horizontal scrolling
- Testing navigation and CTA links
- Testing footer links
- Checking project links
- Testing keyboard focus and accessibility
- Checking basic SEO metadata
- Checking Open Graph metadata
- Checking Twitter/X metadata
- Checking search findability
- Checking desktop and mobile performance
- Classifying findings into fix-now issues and known limitations
- Fixing actionable issues
- Completing a structured peer hardening review
- Verifying the final production deployment

---

## Project

The website is a personal portfolio focused on:

- Backend Development
- Data Modeling
- AI-Assisted Engineering
- Web Development
- Data Analytics

The portfolio includes:

- About
- Skills
- Experience
- Projects
- Education
- Contact

The Contact section contains a form with validation, loading, success and error handling.

---

## Hardening Workflow

The testing process followed this workflow:

```text
Test
  ↓
Observe
  ↓
Record Finding
  ↓
Classify
  ↓
Fix if Actionable
  ↓
Rebuild
  ↓
Redeploy
  ↓
Retest
  ↓
Hardening Review
  ↓
SEO & Performance Check
  ↓
Document
```

The goal was to find real issues rather than only collect successful test results.

---

## Testing Completed

| Test | Evidence | Result |
|---|---|---|
| Empty form submission | `01-empty-form.png` | PASS |
| Garbage / invalid input | `02-garbage-input.png` | PASS |
| Rapid/double submission | `03-double-submit.png` | PASS |
| Browser/device test | `04-browser-test.png` | PASS |
| Mobile test | `05-mobile-test.png` | PASS |
| Navigation | `06-navigation.png` | PASS |
| CTA links | `07-cta-links.png` | PASS |
| Footer links | `08-footer-links.png` | PASS |
| Project links | `09-project-links.png` | Known Limitation |
| SEO meta tags | `10-seo-meta-tags.png` | PASS |
| Open Graph before fix | `11-og-tags-missing.png` | Finding |
| Open Graph after fix | `12-seo-og-tags-fixed.png` | FIXED |
| Twitter/X metadata | `13-seo-twitter-tags-fixed.png` | FIXED |
| Mobile PageSpeed | `14-pagespeed-mobile.png` | PASS |
| Desktop PageSpeed | `15-pagespeed-desktop.png` | PASS |
| Google search findability | `16-search-findability-google.png` | PASS |
| Peer hardening review | `17-hardening-review-peer-feedback.png` | COMPLETE |
| Mobile horizontal-scroll check | `18-mobile-horizontal-scroll-check.jpeg` | PASS |
| Contact-form success | `19-contact-form-submission-success.png` | PASS |
| Email delivery | `20-contact-form-email-received.png` | PASS |
| Keyboard focus/accessibility | `21-keyboard-focus-accessibility.png` | PASS |

---

## Form Testing

### Empty Form

The contact form was submitted without entering the required information.

**Expected:** The form should prevent submission and display validation feedback.

**Result:** Validation feedback was displayed correctly.

**Status:** ✅ PASS
**Evidence:** `evidence/01-empty-form.png`

### Garbage / Invalid Input

Invalid information was entered into the form, including an invalid email format.

**Expected:** The form should reject invalid input and provide feedback.

**Result:** Invalid email validation appeared correctly.

**Status:** ✅ PASS
**Evidence:** `evidence/02-garbage-input.png`

### Valid Submission

The form was submitted with valid information.

**Expected:** The form should accept the submission and show a success state.

**Result:** The success state appeared correctly.

**Status:** ✅ PASS
**Evidence:** `evidence/19-contact-form-submission-success.png`

### Email Delivery

The successful form submission was verified through the Formspree email workflow.

**Expected:** A successful form submission should result in the message being received by email.

**Result:** The Formspree notification email was received successfully.

**Status:** ✅ PASS
**Evidence:** `evidence/20-contact-form-email-received.png`

### Rapid / Double Submission

The form was tested with rapid repeated submission.

**Expected:** Rapid repeated clicks should not create unintended duplicate submissions.

**Result:** The submission lock prevented duplicate submission behaviour.

**Status:** ✅ PASS
**Evidence:** `evidence/03-double-submit.png`

---

## Browser and Device Testing

The portfolio was tested under different browser/device conditions.

**Result:** The tested site remained functional during the browser/device checks.

**Status:** ✅ PASS
**Evidence:** `evidence/04-browser-test.png`

---

## Mobile Testing

The portfolio was checked on a mobile/responsive layout.

**Expected:**

- No major layout break
- No content overlap
- Usable navigation
- Readable content

**Result:** The main content remained usable.

**Status:** ✅ PASS
**Evidence:** `evidence/05-mobile-test.png`

### Mobile Horizontal Scroll Check

A small mobile viewport was specifically checked for unintended horizontal scrolling or overlapping content.

**Result:** No critical horizontal-scroll or overlap issue was identified.

**Status:** ✅ PASS
**Evidence:** `evidence/18-mobile-horizontal-scroll-check.jpeg`

---

## Keyboard Accessibility

Interactive elements were tested using keyboard Tab navigation.

**Expected:** Interactive elements should be reachable using the keyboard and visible focus states should be present.

**Result:** Keyboard focus was visible and interactive elements could be reached using Tab navigation.

**Status:** ✅ PASS
**Evidence:** `evidence/21-keyboard-focus-accessibility.png`

---

## Navigation Testing

The main navigation was tested to verify that the site's sections could be reached correctly.

**Result:** Navigation behaved as expected during the test.

**Status:** ✅ PASS
**Evidence:** `evidence/06-navigation.png`

---

## CTA Testing

The portfolio's call-to-action links were tested.

**Result:** The tested CTA links behaved as expected.

**Status:** ✅ PASS
**Evidence:** `evidence/07-cta-links.png`

---

## Footer Testing

Footer links and interactions were checked.

**Result:** The tested footer links behaved as expected.

**Status:** ✅ PASS
**Evidence:** `evidence/08-footer-links.png`

---

## Project Links

The project cards were checked for external links.

**Finding**
Some projects do not currently have external demo or repository links because those projects are still in progress.

**Classification:** ⚠️ KNOWN LIMITATION

No fake or placeholder links were added. Real links can be added when the related projects are completed and available.

**Evidence:** `evidence/09-project-links.png`

---

## SEO Metadata

The portfolio was checked for basic SEO metadata. The page includes a descriptive title and meta description.

**Title**

```html
<title>Kanak Chaudhary | Backend Developer & AI Enthusiast</title>
```

**Meta Description**

```html
<meta
  name="description"
  content="Portfolio of Kanak Chaudhary — BCA student, backend developer, and AI enthusiast."
/>
```

**Status:** ✅ PASS
**Evidence:** `evidence/10-seo-meta-tags.png`

---

## Open Graph Metadata

During the hardening pass, Open Graph metadata was identified as an area requiring improvement.

**Finding**
The initial metadata state did not contain the required Open Graph tags.

**Evidence:** `evidence/11-og-tags-missing.png`

**Fix**
Open Graph metadata was added to `index.html`.

```html
<meta property="og:type" content="website" />

<meta
  property="og:title"
  content="Kanak Chaudhary | Backend Developer"
/>

<meta
  property="og:description"
  content="Portfolio of Kanak Chaudhary — BCA student, backend developer, and AI enthusiast."
/>

<meta
  property="og:url"
  content="https://break-your-own-site-rose.vercel.app/"
/>
```

**Verification**
The updated metadata was checked after deployment.

**Status:** ✅ FIXED
**Evidence:** `evidence/12-seo-og-tags-fixed.png`

---

## Twitter/X Metadata

Twitter/X metadata was added during the hardening pass.

```html
<meta name="twitter:card" content="summary" />

<meta
  name="twitter:title"
  content="Kanak Chaudhary | Backend Developer"
/>

<meta
  name="twitter:description"
  content="Portfolio of Kanak Chaudhary — BCA student, backend developer, and AI enthusiast."
/>
```

The deployed metadata was checked after the change.

**Status:** ✅ FIXED
**Evidence:** `evidence/13-seo-twitter-tags-fixed.png`

---

## Deployment Issues Found and Fixed

### Issue 1 — Incorrect Vercel Root Directory

The earlier Vercel deployment attempted to build the repository root instead of the actual Vite project.

**Error**

```text
sh: line 1: vite: command not found
Error: Command "vite build" exited with 127
```

**Fix**
The earlier Vercel project used the correct Week-06 root directory:

```
Week-06/03_Survive-The-Crit
```

**Status:** ✅ FIXED

This was part of the earlier deployment troubleshooting history. The original Week-06 deployment was intentionally left unchanged for the Week-07 assignment.

### Issue 2 — Vite Permission Error

After correcting the earlier Root Directory, Vercel encountered a Vite execution permission error.

**Error**

```text
Permission denied
Error: Command "npm run build" exited with 126
```

**Fix**
The Vercel Build Command was changed to:

```
node node_modules/vite/bin/vite.js build
```

**Status:** ✅ FIXED

---

## Final Week-07 Deployment

The final Week-07 version was deployed as a separate Vercel project so that the original Week-06 deployment remained unchanged.

**Week-07 Root Directory**

```
Week-07/01_Break-Your-Own-Site
```

**Final Live URL**

🔗 https://break-your-own-site-rose.vercel.app/

This deployment contains the final Week-07 hardening changes and was used for the final production verification.

### Production Deployment Flow

The final Week-07 deployment follows this flow:

```text
Week-07 Changes
      ↓
Local Project Update
      ↓
GitHub Push
      ↓
Vercel Detects New Commit
      ↓
New Deployment
      ↓
break-your-own-site-rose.vercel.app
      ↓
Updated Week-07 Production Version
```

The original Week-06 deployment remained separate and unchanged.

---

## Search Findability

A Google search was performed for:

```
"Kanak Chaudhary" portfolio
```

Relevant results associated with the portfolio/GitHub presence were visible.

**Status:** ✅ PASS
**Evidence:** `evidence/16-search-findability-google.png`

---

## Performance Testing

The deployed portfolio was checked using PageSpeed Insights.

**Desktop**

| Category | Score |
|---|---|
| Performance | 100 |
| Accessibility | 97 |
| Best Practices | 100 |
| SEO | 100 |

**Evidence:** `evidence/15-pagespeed-desktop.png`

**Mobile**

| Category | Score |
|---|---|
| Performance | 100 |
| Accessibility | 98 |
| Best Practices | 100 |
| SEO | 100 |

**Evidence:** `evidence/14-pagespeed-mobile.png`

No critical performance issue was identified during this hardening pass.

---

## Fix-Now Findings

The actionable issues discovered during the hardening process were addressed.

| Finding | Action | Status |
|---|---|---|
| Incorrect Vercel Root Directory | Updated project root | FIXED |
| Vite execution permission issue | Updated build command | FIXED |
| Missing Open Graph metadata | Added OG tags | FIXED |
| Missing Twitter/X metadata | Added Twitter/X tags | FIXED |
| Contact-form validation/flow | Verified and hardened | FIXED |
| Rapid/double submission | Added submission lock | FIXED |

The basic SEO title and description were also verified during the pass.

---

## Known Limitations

The main remaining limitation is:

**Project Links**
Some project cards do not currently have external demo/repository links because the related projects are still in progress.

This was documented instead of adding fake or placeholder URLs.

**Status:** ⚠️ KNOWN LIMITATION

---

## Hardening Review

A structured peer hardening review was completed after the main testing and fixes.

**Reviewer Feedback**

The reviewer confirmed that:

- The site loaded normally.
- The portfolio structure was clear.
- No obvious major visual or breaking issue was identified.
- External project/demo/repository links should be rechecked.
- CTAs should clearly communicate where they lead.
- The contact-form flow should be verified.
- Mobile layout should be checked for scrolling or overlap.
- Keyboard focus should remain visible.

**Recommended Checks Completed**

- [x] Empty contact-form submission
- [x] Invalid contact-form input
- [x] Successful form submission
- [x] Actual email delivery
- [x] Rapid/double submission
- [x] Navigation and CTA interactions
- [x] Mobile layout
- [x] Mobile horizontal-scroll check
- [x] Project/external link review
- [x] Keyboard focus
- [x] SEO metadata
- [x] Social sharing metadata
- [x] Performance checks

**Evidence:** `evidence/17-hardening-review-peer-feedback.png`

**Review Status:** ✅ COMPLETE

No clearly visible critical issue was identified during the peer review.

---

## Evidence Structure

All Week-07 screenshots are stored inside the `evidence/` folder.

```
evidence/
├── 01-empty-form.png
├── 02-garbage-input.png
├── 03-double-submit.png
├── 04-browser-test.png
├── 05-mobile-test.png
├── 06-navigation.png
├── 07-cta-links.png
├── 08-footer-links.png
├── 09-project-links.png
├── 10-seo-meta-tags.png
├── 11-og-tags-missing.png
├── 12-seo-og-tags-fixed.png
├── 13-seo-twitter-tags-fixed.png
├── 14-pagespeed-mobile.png
├── 15-pagespeed-desktop.png
├── 16-search-findability-google.png
├── 17-hardening-review-peer-feedback.png
├── 18-mobile-horizontal-scroll-check.jpeg
├── 19-contact-form-submission-success.png
├── 20-contact-form-email-received.png
└── 21-keyboard-focus-accessibility.png
```

---

## Documentation Structure

The complete Week-07 assignment is organized as:

```
Week-07/
└── 01_Break-Your-Own-Site/
    ├── README.md
    ├── WORKFLOW.md
    ├── TEST-CASES.md
    ├── WHERE-IT-BREAKS.md
    ├── FIXES.md
    ├── SEO-AND-PERFORMANCE.md
    ├── AI-AUDIT.md
    ├── CRIT-REVIEW.md
    └── evidence/
        ├── 01-empty-form.png
        ├── 02-garbage-input.png
        ├── 03-double-submit.png
        ├── 04-browser-test.png
        ├── 05-mobile-test.png
        ├── 06-navigation.png
        ├── 07-cta-links.png
        ├── 08-footer-links.png
        ├── 09-project-links.png
        ├── 10-seo-meta-tags.png
        ├── 11-og-tags-missing.png
        ├── 12-seo-og-tags-fixed.png
        ├── 13-seo-twitter-tags-fixed.png
        ├── 14-pagespeed-mobile.png
        ├── 15-pagespeed-desktop.png
        ├── 16-search-findability-google.png
        ├── 17-hardening-review-peer-feedback.png
        ├── 18-mobile-horizontal-scroll-check.jpeg
        ├── 19-contact-form-submission-success.png
        ├── 20-contact-form-email-received.png
        └── 21-keyboard-focus-accessibility.png
```

---

## Final Verification

After applying the fixes, the deployed site was checked again.

**Verified**

- [x] Site loads successfully
- [x] Vercel deployment works
- [x] Contact form validation works
- [x] Invalid input is handled
- [x] Valid submission works
- [x] Form success state works
- [x] Email delivery was verified
- [x] Rapid/double submission was tested
- [x] Navigation works
- [x] CTA links work
- [x] Footer links work
- [x] Responsive/mobile layout works
- [x] Mobile horizontal scrolling was checked
- [x] Keyboard focus is visible
- [x] Basic SEO metadata is present
- [x] Open Graph metadata is present
- [x] Twitter/X metadata is present
- [x] Search findability was checked
- [x] Desktop PageSpeed was checked
- [x] Mobile PageSpeed was checked
- [x] Known project-link limitation is documented
- [x] Peer hardening review was completed

---

## Final Status

| Area | Status |
|---|---|
| Core functionality | PASS |
| Form validation | PASS |
| Form submission | PASS |
| Email delivery | PASS |
| Rapid/double submission | PASS |
| Navigation | PASS |
| CTA links | PASS |
| Footer links | PASS |
| Responsive testing | PASS |
| Mobile scroll check | PASS |
| Keyboard accessibility | PASS |
| SEO metadata | PASS |
| Open Graph metadata | FIXED |
| Twitter/X metadata | FIXED |
| Search findability | PASS |
| Desktop performance | PASS |
| Mobile performance | PASS |
| Project links | KNOWN LIMITATION |
| Critical unresolved | NONE IDENTIFIED |
| Hardening review | COMPLETE |

---

## What I Learned

This exercise showed that a website can appear complete during normal development while still having issues in deployment configuration, metadata, or edge-case usage.

The hardening process reinforced the importance of:

- Testing unexpected input
- Testing rapid user actions
- Checking responsive behaviour
- Checking mobile scrolling
- Verifying keyboard interaction
- Verifying deployment configuration
- Checking production metadata
- Testing social sharing metadata
- Checking search findability
- Measuring performance
- Separating actual bugs from known limitations
- Retesting after fixes
- Getting external review
- Documenting evidence honestly

---

## Conclusion

The Week-07 "Break Your Own Site" hardening pass was completed by intentionally testing the portfolio, recording findings, fixing actionable issues, verifying the production deployment, completing a structured peer review, and documenting the remaining limitation.

The final deployed portfolio is available at:

🔗 https://break-your-own-site-rose.vercel.app/

The site has been checked for core functionality, form behaviour, email delivery, responsiveness, navigation, keyboard accessibility, SEO metadata, social metadata, search findability, and performance.

The remaining project-link limitation is documented as work in progress rather than hidden or replaced with placeholder links.

**Final Status:** ✅ HARDENING PASS COMPLETE