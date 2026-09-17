# Week 07 — Test Cases

## Testing Overview

The goal of this testing pass was to intentionally test the deployed portfolio from a user's perspective and identify:

- Broken interactions
- Form validation issues
- Responsive layout issues
- Deployment problems
- SEO and metadata issues
- Search findability issues
- Performance issues
- Known limitations

The portfolio was tested on the deployed production site.

**Live URL:** 🔗 https://03-survive-the-crit.vercel.app/

---

## Test Case Summary

| ID | Test Area | Test | Expected Result | Actual Result | Status |
|---|---|---|---|---|---|
| T01 | Contact Form | Submit empty form | Form should prevent invalid submission and show validation | Validation feedback appeared correctly | PASS |
| T02 | Contact Form | Submit invalid/garbage input | Invalid input should be rejected | Invalid email validation appeared correctly | PASS |
| T03 | Contact Form | Submit valid input | Valid submission should show success state | Success state appeared correctly | PASS |
| T04 | Navigation | Test navigation items | Navigation should reach intended sections | Navigation worked correctly | PASS |
| T05 | CTA | Test View Projects and Contact Me | CTAs should perform their intended actions | CTA interactions worked correctly | PASS |
| T06 | Responsive UI | Test mobile layout | Layout should remain usable on smaller screens | Mobile layout worked correctly | PASS |
| T07 | General Interaction | Click available interactive elements | Interactive elements should respond correctly | No critical interaction failures found | PASS |
| T08 | Project Links | Check project demo/repository links | Available links should work | Some project links are not yet added | KNOWN LIMITATION |
| T09 | SEO | Inspect title and meta description | Basic SEO metadata should be present | Metadata was present | PASS |
| T10 | Open Graph | Verify OG metadata | OG metadata should be present | OG metadata was added and verified | PASS |
| T11 | Twitter/X | Verify Twitter/X metadata | Twitter/X metadata should be present | Twitter/X metadata was added and verified | PASS |
| T12 | Production Deployment | Verify production build | Site should deploy successfully | Deployment succeeded after fixes | PASS |
| T13 | Search Findability | Search portfolio/name | Relevant portfolio presence should be discoverable | Relevant GitHub results appeared | PASS |
| T14 | Performance | Test desktop with PageSpeed Insights | Performance should be measured | Performance score: 100 | PASS |
| T15 | Performance | Test mobile with PageSpeed Insights | Performance should be measured | Performance score: 100 | PASS |

---

## Detailed Test Results

### T01 — Empty Form Submission

**Action**
Submitted the contact form without entering any information.

**Expected Result**
The form should prevent an invalid empty submission and provide appropriate validation feedback.

**Actual Result**
Validation feedback appeared correctly.

**Status:** ✅ PASS

**Evidence:** `evidence/01-empty-form.png`

---

### T02 — Invalid / Garbage Input

**Action**
Entered invalid/garbage data into the contact form, including an invalid email format.

**Expected Result**
The form should reject invalid input and display appropriate validation feedback.

**Actual Result**
Invalid email validation appeared correctly.

**Status:** ✅ PASS

**Evidence:** `evidence/02-invalid-input.png`

---

### T03 — Valid Form Submission

**Action**
Corrected the form data and submitted valid information.

**Expected Result**
The form should accept valid information and display a success state.

**Actual Result**
The success state appeared correctly.

**Status:** ✅ PASS

**Evidence:** `evidence/03-valid-submission.png`

---

### T04 — Navigation Testing

**Action**
Tested the main navigation items:

- About
- Skills
- Experience
- Projects
- Education
- Contact

**Expected Result**
Each navigation item should take the user to the intended section.

**Actual Result**
Navigation worked correctly.

**Status:** ✅ PASS

---

### T05 — CTA Testing

**Action**
Tested the primary call-to-action buttons:

- View Projects
- Contact Me

**Expected Result**
Each CTA should perform its intended action.

**Actual Result**
The CTA interactions worked correctly.

**Status:** ✅ PASS

---

### T06 — Responsive / Mobile Testing

**Action**
Checked the portfolio at a mobile viewport and interacted with the main sections.

**Expected Result**
The portfolio should remain usable and readable on smaller screens.

**Actual Result**
The mobile layout worked correctly.

**Status:** ✅ PASS

---

### T07 — General Interaction Testing

**Action**
Checked the available interactive elements and attempted different interactions throughout the portfolio.

**Expected Result**
Interactive elements should respond correctly without unexpected failures.

**Actual Result**
No critical interaction failures were identified.

**Status:** ✅ PASS

---

### T08 — Project Link Testing

**Action**
Checked the project cards for external demo and repository links.

**Expected Result**
Available project links should open correctly.

**Actual Result**
Some project cards currently do not contain external links.

**Classification:** ⚠️ KNOWN LIMITATION

Some projects are still in progress, so their demo/repository links have not yet been added. This was treated as a known limitation rather than a broken feature.

**Status:** ⚠️ KNOWN LIMITATION

---

### T09 — Basic SEO Metadata

**Action**
Inspected the production HTML for:

- Page title
- Meta description

**Expected Result**
Basic SEO metadata should be present.

**Actual Result**
The page title and meta description were present.

**Status:** ✅ PASS

**Evidence:** SEO/source inspection screenshot.

---

### T10 — Open Graph Metadata

**Action**
Verified the Open Graph metadata after updating `index.html`.

**Metadata Added**

- `og:type`
- `og:title`
- `og:description`
- `og:url`

**Expected Result**
Open Graph metadata should be available for supported social sharing previews.

**Actual Result**
Open Graph metadata was added and verified on the deployed production site.

**Status:** ✅ PASS

**Evidence:** Open Graph verification screenshot.

---

### T11 — Twitter/X Metadata

**Action**
Verified the Twitter/X metadata after updating `index.html`.

**Metadata Added**

- `twitter:card`
- `twitter:title`
- `twitter:description`

**Expected Result**
Twitter/X metadata should be available for supported sharing previews.

**Actual Result**
Twitter/X metadata was added and verified on the deployed production site.

**Status:** ✅ PASS

**Evidence:** Twitter/X verification screenshot.

---

### T12 — Production Deployment

**Initial Finding**
The initial production deployment failed because Vercel was attempting to build the repository from the wrong directory.

**Initial Error**

```text
sh: line 1: vite: command not found
Error: Command "vite build" exited with 127
```

**Investigation**
The portfolio project is located inside a subdirectory of the GitHub repository. Vercel was initially building from the repository root instead of the portfolio project directory.

**Fix Applied**
The Vercel Root Directory was configured as:

```
Week-06/03_Survive-The-Crit
```

**Second Deployment Issue**
After correcting the Root Directory, the build reached the Vite build step but encountered an executable permission error.

**Second Error**

```text
sh: line 1: /vercel/path0/Week-06/03_Survive-The-Crit/node_modules/.bin/vite: Permission denied
Error: Command "npm run build" exited with 126
```

**Fix Applied**
The Vercel Build Command was changed to:

```
node node_modules/vite/bin/vite.js build
```

**Final Result**
The production deployment completed successfully.

**Status:** ✅ PASS / FIXED

---

### T13 — Search Findability

**Search Query**
`"Kanak Chaudhary" portfolio`

**Expected Result**
The portfolio identity should have some discoverable presence in search results.

**Actual Result**
Relevant GitHub portfolio/profile results appeared in the search results.

**Status:** ✅ PASS

**Evidence:** `evidence/search-findability.png`

---

### T14 — PageSpeed Desktop

**Tool:** Google PageSpeed Insights

**Results**

| Metric | Score |
|---|---|
| Performance | 100 |
| Accessibility | 97 |
| Best Practices | 100 |
| SEO | 100 |

**Status:** ✅ PASS

**Evidence:** `evidence/pagespeed-desktop.png`

---

### T15 — PageSpeed Mobile

**Tool:** Google PageSpeed Insights

**Results**

| Metric | Score |
|---|---|
| Performance | 100 |
| Accessibility | 98 |
| Best Practices | 100 |
| SEO | 100 |

**Status:** ✅ PASS

**Evidence:** `evidence/pagespeed-mobile.png`

---

## Final Test Summary

### Passed

The following areas passed testing:

- Empty form validation
- Invalid input validation
- Valid form submission
- Navigation
- CTA interactions
- Responsive/mobile layout
- General interactions
- Basic SEO metadata
- Open Graph metadata
- Twitter/X metadata
- Production deployment after fixes
- Search findability
- Desktop performance
- Mobile performance

### Fixed During Hardening

The following issues were identified and fixed during the hardening process:

- Vercel Root Directory configuration
- Vite production build execution
- Open Graph metadata
- Twitter/X metadata

### Known Limitations

The following limitation remains documented:

- Some project cards do not currently contain external demo/repository links because some projects are still in progress.

---

## Testing Outcome

The portfolio was intentionally tested rather than assumed to be working.

Failures and limitations were recorded, actionable issues were fixed, and the production deployment was re-tested after the changes.

The remaining known limitation has been documented transparently instead of being presented as completed functionality.

This testing pass provides a documented trail from:

**Test → Find → Triage → Fix → Deploy → Re-test → Verify**