# Week 07 — Where It Breaks

## Purpose

This document records the issues, failures, and limitations identified while intentionally testing the portfolio.

The purpose was not to claim that the site was perfect, but to identify what could break, determine whether each finding required a fix, and document the final state honestly.

---

## 1. Initial Findings

The portfolio was tested through:

* Form validation testing
* Invalid input testing
* Valid submission testing
* Email delivery testing
* Rapid/double submission testing
* Navigation testing
* CTA testing
* Responsive/mobile testing
* Mobile horizontal-scroll testing
* Keyboard focus/accessibility testing
* General interaction testing
* Project link inspection
* Production deployment testing
* SEO metadata inspection
* Social metadata verification
* Search findability testing
* Performance testing
* Peer hardening review

The findings were classified into:

1. Fixed Issues
2. Passed Tests
3. Known Limitations

---

## 2. Fixed Issue — Vercel Root Directory

**What Broke**

The initial production deployment failed during the Vite build.

**Error**

```text
sh: line 1: vite: command not found
Error: Command "vite build" exited with 127
```

**Investigation**

The portfolio project was located inside a subdirectory of the GitHub repository. Vercel was initially attempting to build from the repository root instead of the portfolio project's directory.

**Historical Fix**

The original Week-06 Vercel project used the following Root Directory:

```text
Week-06/03_Survive-The-Crit
```

**Result**

Vercel was then able to locate the correct project files and continue the build process.

**Status:** ✅ FIXED

---

## 3. Fixed Issue — Vite Build Execution

**What Broke**

After the Root Directory was corrected, the build reached the Vite build command but failed with a permission error.

**Error**

```text
sh: 1: /vercel/path0/Week-06/03_Survive-The-Crit/node_modules/.bin/vite: Permission denied
Error: Command "npm run build" exited with 126
```

**Investigation**

The dependency installation completed successfully, but the Vite executable inside `node_modules/.bin` could not be executed directly by the Vercel build environment.

**Historical Fix**

The Vercel Build Command was changed from:

```text
npm run build
```

to:

```text
node node_modules/vite/bin/vite.js build
```

**Result**

The production build completed successfully.

**Status:** ✅ FIXED

---

## 4. Fixed Issue — Open Graph Metadata

**Finding**

The portfolio needed dedicated Open Graph metadata for social sharing previews.

**Fix**

The following metadata was added to `index.html`:

```html
<meta property="og:type" content="website" />
<meta property="og:title" content="Kanak Chaudhary | Backend Developer" />
<meta property="og:description" content="Portfolio of Kanak Chaudhary — BCA student, backend developer, and AI enthusiast." />
<meta property="og:url" content="https://break-your-own-site-rose.vercel.app/" />
```

**Verification**

The Open Graph metadata was verified after the updated site was deployed.

**Status:** ✅ FIXED

---

## 5. Fixed Issue — Twitter/X Metadata

**Finding**

Dedicated Twitter/X metadata was added to provide appropriate information for supported social sharing previews.

**Fix**

The following metadata was added:

```html
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="Kanak Chaudhary | Backend Developer" />
<meta name="twitter:description" content="Portfolio of Kanak Chaudhary — BCA student, backend developer, and AI enthusiast." />
```

**Verification**

The Twitter/X metadata was verified after deployment.

**Status:** ✅ FIXED

---

## 6. Form Testing — No Break Found

**Test:** The contact form was intentionally tested with an empty submission.

**Expected:** The form should prevent invalid submission and show validation feedback.

**Result:** Validation worked correctly.

**Status:** ✅ PASS

**Evidence:** `evidence/01-empty-form.png`

---

## 7. Invalid Input Testing — No Break Found

**Test:** Garbage/invalid data was entered into the form, including an invalid email format.

**Expected:** Invalid input should be rejected with appropriate feedback.

**Result:** The invalid email validation appeared correctly.

**Status:** ✅ PASS

**Evidence:** `evidence/02-garbage-input.png`

---

## 8. Valid Submission Testing — No Break Found

**Test:** The form was submitted again using valid information after correcting the invalid input.

**Expected:** The form should accept valid data and display a success state.

**Result:** The success state appeared correctly.

**Status:** ✅ PASS

**Evidence:** `evidence/19-contact-form-submission-success.png`

---

## 9. Email Delivery Testing — No Break Found

**Test:** After a successful form submission, the configured email inbox was checked for the Formspree notification.

**Expected:** The submitted contact details should reach the configured inbox.

**Result:** The Formspree email notification was received successfully with the submitted contact details.

**Status:** ✅ PASS

**Evidence:** `evidence/20-contact-form-email-received.png`

---

## 10. Rapid / Double Submission Testing — No Break Found

**Test:** The contact form submit action was triggered rapidly to check whether duplicate submissions could be created.

**Expected:** Rapid duplicate submissions should be prevented while the request is being processed.

**Result:** The submission lock prevented duplicate rapid submissions.

**Status:** ✅ PASS

**Evidence:** `evidence/03-double-submit.png`

---

## 11. Navigation Testing — No Break Found

**Test:** The main navigation sections were checked:

* About
* Skills
* Experience
* Projects
* Education
* Contact

**Result:** Navigation worked correctly.

**Status:** ✅ PASS

**Evidence:** `evidence/06-navigation.png`

---

## 12. CTA Testing — No Break Found

**Test:** The primary call-to-action buttons were tested.

**Tested CTAs**

* View Projects
* Contact Me

**Result:** The CTA interactions worked correctly.

**Status:** ✅ PASS

**Evidence:** `evidence/07-cta-links.png`

---

## 13. Responsive Testing — No Break Found

**Test:** The portfolio was checked at a mobile viewport.

**Expected:** The layout should remain usable and readable on smaller screens.

**Result:** The mobile layout worked correctly.

**Status:** ✅ PASS

**Evidence:** `evidence/05-mobile-test.png`

---

## 14. Mobile Horizontal Scroll Testing — No Break Found

**Test:** The portfolio was checked on a small mobile viewport specifically for:

* Horizontal scrolling
* Content overflow
* Layout overlap
* Elements extending outside the viewport

**Expected:** The page should not create problematic horizontal scrolling or overlapping content.

**Result:** No critical horizontal overflow or layout overlap was observed.

**Status:** ✅ PASS

**Evidence:** `evidence/18-mobile-horizontal-scroll-check.jpeg`

---

## 15. Keyboard Focus / Accessibility Testing — No Break Found

**Test:** The portfolio was navigated using the keyboard `Tab` key to check whether interactive elements receive visible focus.

**Expected:** Buttons, links, form controls, and other interactive elements should show a visible focus state.

**Result:** Keyboard focus was visible while moving through interactive elements.

**Status:** ✅ PASS

**Evidence:** `evidence/21-keyboard-focus-accessibility.png`

---

## 16. General Interaction Testing — No Break Found

**Test:** Available interactive elements were checked and different interactions were attempted throughout the portfolio.

**Expected:** Interactive elements should respond correctly without unexpected failures.

**Result:** No critical interaction failures were identified.

**Status:** ✅ PASS

**Evidence:** `evidence/08-footer-links.png`

---

## 17. Project Links — Known Limitation

**Finding**

Some project cards currently do not contain external demo or repository links.

**Investigation**

The projects without links are still in progress, so their external links have not yet been added.

**Triage Decision**

This was classified as a Known Limitation rather than a broken feature. The site does not claim that these unavailable links are functional.

**Future Action**

Add the appropriate live demo or repository links when the corresponding projects are ready.

**Status:** ⚠️ KNOWN LIMITATION

**Evidence:** `evidence/09-project-links.png`

---

## 18. Search Findability — No Break Found

**Test:** Google search was performed using:

```text
"Kanak Chaudhary" portfolio
```

**Result:** Relevant GitHub portfolio/profile results appeared in the search results.

**Status:** ✅ PASS

**Evidence:** `evidence/16-search-findability-google.png`

---

## 19. Performance Testing — No Critical Break Found

**Tool:** Google PageSpeed Insights

### Desktop Results

| Metric         | Score |
| -------------- | ----: |
| Performance    |   100 |
| Accessibility  |    97 |
| Best Practices |   100 |
| SEO            |   100 |

### Mobile Results

| Metric         | Score |
| -------------- | ----: |
| Performance    |   100 |
| Accessibility  |    98 |
| Best Practices |   100 |
| SEO            |   100 |

**Status:** ✅ PASS

**Evidence:**

* `evidence/15-pagespeed-desktop.png`
* `evidence/14-pagespeed-mobile.png`

---

## 20. Peer Hardening Review — No Critical Break Found

**Test:** A structured peer hardening review was completed to identify issues that might have been missed during self-testing.

**Reviewer Feedback**

The reviewer reported:

* The site loaded normally.
* The portfolio structure was clear.
* No obvious major visual or breaking issue was identified.
* External project, GitHub/repository, demo, and social links should be rechecked.
* CTAs should clearly indicate where they lead.
* The complete contact-form interaction flow should be verified.
* Mobile horizontal scrolling/overlap should be checked.
* Keyboard focus and interactive states should be visible.

**Result:** No clearly visible critical issue was identified.

The review recommendations were converted into concrete verification checks and tested.

**Status:** ✅ PASS

**Evidence:** `evidence/17-hardening-review-peer-feedback.png`

---

## 21. Final Triage

| Finding                      | Classification    | Action             |
| ---------------------------- | ----------------- | ------------------ |
| Vercel Root Directory        | Fix Now           | Fixed              |
| Vite build execution         | Fix Now           | Fixed              |
| Open Graph metadata          | Fix Now           | Added and verified |
| Twitter/X metadata           | Fix Now           | Added and verified |
| Empty form validation        | No issue          | Passed             |
| Invalid input validation     | No issue          | Passed             |
| Valid submission             | No issue          | Passed             |
| Email delivery               | No issue          | Passed             |
| Rapid/double submission      | No issue          | Passed             |
| Navigation                   | No issue          | Passed             |
| CTA interactions             | No issue          | Passed             |
| Responsive/mobile layout     | No issue          | Passed             |
| Mobile horizontal scroll     | No issue          | Passed             |
| Keyboard focus/accessibility | No issue          | Passed             |
| Search findability           | No issue          | Passed             |
| PageSpeed performance        | No critical issue | Passed             |
| Peer hardening review        | No critical issue | Completed          |
| Missing project links        | Known limitation  | Documented         |

---

## 22. Final Week-07 Deployment

The hardened Week-07 version was deployed as a separate Vercel project so that the original Week-06 deployment remained unchanged.

**Week-07 Root Directory:**

```text
Week-07/01_Break-Your-Own-Site
```

**Final Live URL:**

https://break-your-own-site-rose.vercel.app/

The final Week-07 deployment contains the hardening changes documented in this file and was used for final production verification.

---

## 23. Final State

The initial deployment issues identified during the hardening process were fixed.

The portfolio was deployed successfully and re-tested after the changes.

SEO and social metadata were verified on the production site.

The contact form was tested through validation, successful submission, duplicate-submission protection, and email delivery.

Responsive behaviour, mobile horizontal scrolling, and keyboard focus were also checked.

A structured peer hardening review was completed and no clearly visible critical issue was identified.

The only remaining documented limitation is that some project cards do not currently contain external demo/repository links because some projects are still in progress.

The final Week-07 hardened version is available at:

https://break-your-own-site-rose.vercel.app/

---

## Conclusion

The testing process identified both actual deployment issues and normal project limitations.

The actionable issues were fixed and verified after deployment.

Remaining limitations were documented honestly instead of being treated as completed functionality.

The hardening process covered:

* Form validation
* Invalid input handling
* Successful submission
* Email delivery
* Rapid/double submission
* Navigation
* CTA interactions
* Responsive layout
* Mobile horizontal scrolling
* Keyboard focus
* SEO metadata
* Social metadata
* Search findability
* Production deployment
* Performance
* Peer hardening review

**Final status:**

* **FIXED ISSUES:** 4
* **KNOWN LIMITATIONS:** 1
* **CRITICAL UNRESOLVED ISSUES:** 0
* **HARDENING REVIEW:** COMPLETE
