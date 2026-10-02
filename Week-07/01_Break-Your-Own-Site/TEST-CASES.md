# Week 07 — Test Cases

## Testing Overview

The goal of this testing pass was to intentionally test the deployed portfolio from a user's perspective and identify:

* Broken interactions
* Form validation issues
* Responsive layout issues
* Deployment problems
* SEO and metadata issues
* Search findability issues
* Performance issues
* Accessibility issues
* Known limitations

The portfolio was tested on the deployed production site.

**Live URL:** https://break-your-own-site-rose.vercel.app/

---

## Test Case Summary

| ID  | Test Area              | Test                                 | Expected Result                                            | Actual Result                                           | Status           |
| --- | ---------------------- | ------------------------------------ | ---------------------------------------------------------- | ------------------------------------------------------- | ---------------- |
| T01 | Contact Form           | Submit empty form                    | Form should prevent invalid submission and show validation | Validation feedback appeared correctly                  | PASS             |
| T02 | Contact Form           | Submit invalid/garbage input         | Invalid input should be rejected                           | Invalid email validation appeared correctly             | PASS             |
| T03 | Contact Form           | Submit valid input                   | Valid submission should show success state                 | Success state appeared correctly                        | PASS             |
| T04 | Contact Form           | Verify email delivery                | Submitted details should reach the configured inbox        | Formspree email notification was received               | PASS             |
| T05 | Contact Form           | Rapid/double submission              | Duplicate rapid submissions should be prevented            | Submission lock prevented duplicate rapid submissions   | PASS             |
| T06 | Navigation             | Test navigation items                | Navigation should reach intended sections                  | Navigation worked correctly                             | PASS             |
| T07 | CTA                    | Test View Projects and Contact Me    | CTAs should perform their intended actions                 | CTA interactions worked correctly                       | PASS             |
| T08 | Responsive UI          | Test mobile layout                   | Layout should remain usable on smaller screens             | Mobile layout worked correctly                          | PASS             |
| T09 | Mobile Layout          | Check horizontal scrolling/overlap   | No problematic horizontal overflow should appear           | No critical horizontal overflow or overlap found        | PASS             |
| T10 | General Interaction    | Click available interactive elements | Interactive elements should respond correctly              | No critical interaction failures found                  | PASS             |
| T11 | Keyboard Accessibility | Test keyboard focus with Tab         | Interactive elements should show visible focus             | Keyboard focus was visible                              | PASS             |
| T12 | Project Links          | Check project demo/repository links  | Available links should work                                | Some project links are not yet added                    | KNOWN LIMITATION |
| T13 | SEO                    | Inspect title and meta description   | Basic SEO metadata should be present                       | Metadata was present                                    | PASS             |
| T14 | Open Graph             | Verify OG metadata                   | OG metadata should be present                              | OG metadata was added and verified                      | PASS             |
| T15 | Twitter/X              | Verify Twitter/X metadata            | Twitter/X metadata should be present                       | Twitter/X metadata was added and verified               | PASS             |
| T16 | Production Deployment  | Verify production build              | Site should deploy successfully                            | Deployment succeeded after fixes                        | PASS             |
| T17 | Search Findability     | Search portfolio/name                | Relevant portfolio presence should be discoverable         | Relevant GitHub results appeared                        | PASS             |
| T18 | Performance            | Test desktop with PageSpeed Insights | Performance should be measured                             | Performance score: 100                                  | PASS             |
| T19 | Performance            | Test mobile with PageSpeed Insights  | Performance should be measured                             | Performance score: 100                                  | PASS             |
| T20 | Hardening Review       | Structured peer review               | Review should identify breakpoints/limitations             | Peer review completed with no critical issue identified | PASS             |

---

## Detailed Test Results

### T01 — Empty Form Submission

**Action:** Submitted the contact form without entering any information.

**Expected Result:** The form should prevent an invalid empty submission and provide appropriate validation feedback.

**Actual Result:** Validation feedback appeared correctly.

**Status:** ✅ PASS

**Evidence:** `evidence/01-empty-form.png`

---

### T02 — Invalid / Garbage Input

**Action:** Entered invalid/garbage data into the contact form, including an invalid email format.

**Expected Result:** The form should reject invalid input and display appropriate validation feedback.

**Actual Result:** Invalid email validation appeared correctly.

**Status:** ✅ PASS

**Evidence:** `evidence/02-garbage-input.png`

---

### T03 — Valid Form Submission

**Action:** Corrected the form data and submitted valid information.

**Expected Result:** The form should accept valid information and display a success state.

**Actual Result:** The success state appeared correctly.

**Status:** ✅ PASS

**Evidence:** `evidence/19-contact-form-submission-success.png`

---

### T04 — Email Delivery Verification

**Action:** After a successful contact-form submission, the configured email inbox was checked for the Formspree notification.

**Expected Result:** The submitted contact details should be delivered to the configured inbox.

**Actual Result:** The Formspree email notification was received successfully with the submitted contact details.

**Status:** ✅ PASS

**Evidence:** `evidence/20-contact-form-email-received.png`

---

### T05 — Rapid / Double Submission

**Action:** The form submit action was triggered rapidly to test whether duplicate submissions could be created.

**Expected Result:** The form should prevent duplicate rapid submissions while the request is being processed.

**Actual Result:** The submission lock prevented duplicate rapid submissions.

**Status:** ✅ PASS

**Evidence:** `evidence/03-double-submit.png`

---

### T06 — Navigation Testing

**Action:** Tested the main navigation items:

* About
* Skills
* Experience
* Projects
* Education
* Contact

**Expected Result:** Each navigation item should take the user to the intended section.

**Actual Result:** Navigation worked correctly.

**Status:** ✅ PASS

**Evidence:** `evidence/06-navigation.png`

---

### T07 — CTA Testing

**Action:** Tested the primary call-to-action buttons:

* View Projects
* Contact Me

**Expected Result:** Each CTA should perform its intended action.

**Actual Result:** The CTA interactions worked correctly.

**Status:** ✅ PASS

**Evidence:** `evidence/07-cta-links.png`

---

### T08 — Responsive / Mobile Testing

**Action:** Checked the portfolio at a mobile viewport and interacted with the main sections.

**Expected Result:** The portfolio should remain usable and readable on smaller screens.

**Actual Result:** The mobile layout worked correctly.

**Status:** ✅ PASS

**Evidence:** `evidence/05-mobile-test.png`

---

### T09 — Mobile Horizontal Scroll / Overlap Check

**Action:** The portfolio was tested on a small mobile viewport specifically for horizontal scrolling, content overflow, and layout overlap.

**Expected Result:** The page should not create problematic horizontal scrolling or overlapping content.

**Actual Result:** No critical horizontal overflow or layout overlap was observed.

**Status:** ✅ PASS

**Evidence:** `evidence/18-mobile-horizontal-scroll-check.jpeg`

---

### T10 — General Interaction Testing

**Action:** Checked the available interactive elements and attempted different interactions throughout the portfolio.

**Expected Result:** Interactive elements should respond correctly without unexpected failures.

**Actual Result:** No critical interaction failures were identified.

**Status:** ✅ PASS

**Evidence:** `evidence/08-footer-links.png`

---

### T11 — Keyboard Focus / Accessibility

**Action:** Navigated through the portfolio using the keyboard `Tab` key to verify visible focus states.

The test included:

* Links
* Buttons
* Form controls
* Interactive navigation elements

**Expected Result:** Interactive elements should receive a visible focus state when navigated using the keyboard.

**Actual Result:** Keyboard focus was visible while moving through interactive elements.

**Status:** ✅ PASS

**Evidence:** `evidence/21-keyboard-focus-accessibility.png`

---

### T12 — Project Link Testing

**Action:** Checked the project cards for external demo and repository links.

**Expected Result:** Available project links should open correctly.

**Actual Result:** Some project cards currently do not contain external links.

**Classification:** ⚠️ KNOWN LIMITATION

Some projects are still in progress, so their demo/repository links have not yet been added. This was treated as a known limitation rather than a broken feature.

**Status:** ⚠️ KNOWN LIMITATION

**Evidence:** `evidence/09-project-links.png`

---

### T13 — Basic SEO Metadata

**Action:** Inspected the production HTML for:

* Page title
* Meta description

**Expected Result:** Basic SEO metadata should be present.

**Actual Result:** The page title and meta description were present.

**Status:** ✅ PASS

**Evidence:** `evidence/10-seo-meta-tags.png`

---

### T14 — Open Graph Metadata

**Action:** Verified the Open Graph metadata after updating `index.html`.

**Metadata Added**

* `og:type`
* `og:title`
* `og:description`
* `og:url`

**Expected Result:** Open Graph metadata should be available for supported social sharing previews.

**Actual Result:** Open Graph metadata was added and verified on the deployed production site.

**Status:** ✅ PASS

**Evidence:** `evidence/12-seo-og-tags-fixed.png`

---

### T15 — Twitter/X Metadata

**Action:** Verified the Twitter/X metadata after updating `index.html`.

**Metadata Added**

* `twitter:card`
* `twitter:title`
* `twitter:description`

**Expected Result:** Twitter/X metadata should be available for supported sharing previews.

**Actual Result:** Twitter/X metadata was added and verified on the deployed production site.

**Status:** ✅ PASS

**Evidence:** `evidence/13-seo-twitter-tags-fixed.png`

---

### T16 — Production Deployment

**Initial Finding**

The initial production deployment failed because Vercel was attempting to build the repository from the wrong directory.

**Initial Error**

```text
sh: line 1: vite: command not found
Error: Command "vite build" exited with 127
```

**Investigation**

The portfolio project is located inside a subdirectory of the GitHub repository. Vercel was initially building from the repository root instead of the portfolio project directory.

**Historical Fix Applied**

The original Week-06 Vercel project used the following Root Directory:

```text
Week-06/03_Survive-The-Crit
```

This resolved the original repository-root build issue for the Week-06 deployment.

**Second Deployment Issue**

After correcting the Root Directory, the build reached the Vite build step but encountered an executable permission error.

**Second Error**

```text
sh: 1: /vercel/path0/Week-06/03_Survive-The-Crit/node_modules/.bin/vite: Permission denied
Error: Command "npm run build" exited with 126
```

**Historical Fix Applied**

The Vercel Build Command was changed to:

```text
node node_modules/vite/bin/vite.js build
```

**Final Week-07 Deployment**

For Week-07, the hardened portfolio was deployed as a separate Vercel project so that the original Week-06 deployment remained unchanged.

**Week-07 Root Directory:**

```text
Week-07/01_Break-Your-Own-Site
```

**Final Live URL:**

https://break-your-own-site-rose.vercel.app/

**Final Result**

The Week-07 production deployment completed successfully and was verified on the final live URL.

**Status:** ✅ PASS / FIXED

---

### T17 — Search Findability

**Search Query**

```text
"Kanak Chaudhary" portfolio
```

**Expected Result:** The portfolio identity should have some discoverable presence in search results.

**Actual Result:** Relevant GitHub portfolio/profile results appeared in the search results.

**Status:** ✅ PASS

**Evidence:** `evidence/16-search-findability-google.png`

---

### T18 — PageSpeed Desktop

**Tool:** Google PageSpeed Insights

**Results**

| Metric         | Score |
| -------------- | ----: |
| Performance    |   100 |
| Accessibility  |    97 |
| Best Practices |   100 |
| SEO            |   100 |

**Status:** ✅ PASS

**Evidence:** `evidence/15-pagespeed-desktop.png`

---

### T19 — PageSpeed Mobile

**Tool:** Google PageSpeed Insights

**Results**

| Metric         | Score |
| -------------- | ----: |
| Performance    |   100 |
| Accessibility  |    98 |
| Best Practices |   100 |
| SEO            |   100 |

**Status:** ✅ PASS

**Evidence:** `evidence/14-pagespeed-mobile.png`

---

### T20 — Peer Hardening Review

**Action**

A structured peer hardening review was completed to identify issues that might have been missed during self-testing.

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

**Expected Result:** The review should identify actionable issues or confirm that no critical issue remains.

**Actual Result:** No clearly visible critical issue was identified.

The recommendations were converted into concrete verification checks and tested.

**Status:** ✅ PASS

**Evidence:** `evidence/17-hardening-review-peer-feedback.png`

---

## Final Test Summary

### Passed

The following areas passed testing:

* Empty form validation
* Invalid input validation
* Valid form submission
* Email delivery
* Rapid/double submission protection
* Navigation
* CTA interactions
* Responsive/mobile layout
* Mobile horizontal-scroll check
* General interactions
* Keyboard focus/accessibility
* Basic SEO metadata
* Open Graph metadata
* Twitter/X metadata
* Production deployment after fixes
* Search findability
* Desktop performance
* Mobile performance
* Peer hardening review

### Fixed During Hardening

The following issues were identified and fixed during the hardening process:

* Vercel Root Directory configuration
* Vite production build execution
* Open Graph metadata
* Twitter/X metadata

### Known Limitations

The following limitation remains documented:

* Some project cards do not currently contain external demo/repository links because some projects are still in progress.

---

## Testing Outcome

The portfolio was intentionally tested rather than assumed to be working.

Failures, limitations, and recommendations were recorded, actionable issues were fixed, and the production deployment was re-tested after the changes.

The contact form was tested through the complete flow:

```text
Validation
    ↓
Valid submission
    ↓
Success state
    ↓
Email delivery
```

The peer hardening review was also completed, and its recommendations were converted into concrete verification checks.

The remaining known limitation has been documented transparently instead of being presented as completed functionality.

The final Week-07 hardened version was deployed as a separate Vercel project and is available at:

https://break-your-own-site-rose.vercel.app/

**Week-07 Root Directory:**

```text
Week-07/01_Break-Your-Own-Site
```

This testing pass provides a documented trail from:

```text
Test → Find → Triage → Fix → Deploy → Re-test → Verify
```
