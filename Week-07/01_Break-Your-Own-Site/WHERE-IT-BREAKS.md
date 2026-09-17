# Week 07 — Where It Breaks

## Purpose

This document records the issues, failures, and limitations identified while intentionally testing the portfolio.

The purpose was not to claim that the site was perfect, but to identify what could break, determine whether each finding required a fix, and document the final state honestly.

---

## 1. Initial Findings

The portfolio was tested through:

- Form validation testing
- Invalid input testing
- Valid submission testing
- Navigation testing
- CTA testing
- Responsive/mobile testing
- General interaction testing
- Project link inspection
- Production deployment testing
- SEO metadata inspection
- Social metadata verification
- Search findability testing
- Performance testing

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

**Fix**
The Vercel Root Directory was changed to:

```
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
sh: line 1: /vercel/path0/Week-06/03_Survive-The-Crit/node_modules/.bin/vite: Permission denied
Error: Command "npm run build" exited with 126
```

**Investigation**
The dependency installation completed successfully, but the Vite executable inside `node_modules/.bin` could not be executed directly by the Vercel build environment.

**Fix**
The Vercel Build Command was changed from:

```
npm run build
```

to:

```
node node_modules/vite/bin/vite.js build
```

**Result**
The production build completed successfully and the site became available through the production deployment.

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
<meta property="og:url" content="https://03-survive-the-crit.vercel.app/" />
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

**Test**
The contact form was intentionally tested with an empty submission.

**Expected**
The form should prevent invalid submission and show validation feedback.

**Result**
Validation worked correctly.

**Status:** ✅ PASS

---

## 7. Invalid Input Testing — No Break Found

**Test**
Garbage/invalid data was entered into the form, including an invalid email format.

**Expected**
Invalid input should be rejected with appropriate feedback.

**Result**
The invalid email validation appeared correctly.

**Status:** ✅ PASS

---

## 8. Valid Submission Testing — No Break Found

**Test**
The form was submitted again using valid information after correcting the invalid input.

**Expected**
The form should accept valid data and display a success state.

**Result**
The success state appeared correctly.

**Status:** ✅ PASS

---

## 9. Navigation Testing — No Break Found

**Test**
The main navigation sections were checked:

- About
- Skills
- Experience
- Projects
- Education
- Contact

**Result**
Navigation worked correctly.

**Status:** ✅ PASS

---

## 10. CTA Testing — No Break Found

**Test**
The primary call-to-action buttons were tested.

**Tested CTAs**

- View Projects
- Contact Me

**Result**
The CTA interactions worked correctly.

**Status:** ✅ PASS

---

## 11. Responsive Testing — No Break Found

**Test**
The portfolio was checked at a mobile viewport.

**Expected**
The layout should remain usable and readable on smaller screens.

**Result**
The mobile layout worked correctly.

**Status:** ✅ PASS

---

## 12. Project Links — Known Limitation

**Finding**
Some project cards currently do not contain external demo or repository links.

**Investigation**
The projects without links are still in progress, so their external links have not yet been added.

**Triage Decision**
This was classified as a **Known Limitation** rather than a broken feature. The site does not claim that these unavailable links are functional.

**Future Action**
Add the appropriate live demo or repository links when the corresponding projects are ready.

**Status:** ⚠️ KNOWN LIMITATION

---

## 13. Search Findability — No Break Found

**Test**
Google search was performed using:

```
"Kanak Chaudhary" portfolio
```

**Result**
Relevant GitHub portfolio/profile results appeared in the search results.

**Status:** ✅ PASS

---

## 14. Performance Testing — No Critical Break Found

**Tool:** Google PageSpeed Insights

**Desktop Results**

| Metric | Score |
|---|---|
| Performance | 100 |
| Accessibility | 97 |
| Best Practices | 100 |
| SEO | 100 |

**Mobile Results**

| Metric | Score |
|---|---|
| Performance | 100 |
| Accessibility | 98 |
| Best Practices | 100 |
| SEO | 100 |

**Status:** ✅ PASS

---

## 15. Final Triage

| Finding | Classification | Action |
|---|---|---|
| Vercel Root Directory | Fix Now | Fixed |
| Vite build execution | Fix Now | Fixed |
| Open Graph metadata | Fix Now | Added and verified |
| Twitter/X metadata | Fix Now | Added and verified |
| Empty form validation | No issue | Passed |
| Invalid input validation | No issue | Passed |
| Valid submission | No issue | Passed |
| Navigation | No issue | Passed |
| CTA interactions | No issue | Passed |
| Responsive/mobile layout | No issue | Passed |
| Search findability | No issue | Passed |
| PageSpeed performance | No critical issue | Passed |
| Missing project links | Known limitation | Documented |

---

## 16. Final State

The initial deployment issues identified during the hardening process were fixed.

The portfolio was deployed successfully and re-tested after the changes.

SEO and social metadata were verified on the production site.

Search findability and PageSpeed performance were also checked.

The only remaining documented limitation is that some project cards do not currently contain external demo/repository links because some projects are still in progress.

---

## Conclusion

The testing process identified both actual deployment issues and normal project limitations.

The actionable issues were fixed and verified after deployment.

Remaining limitations were documented honestly instead of being treated as completed functionality.

**Final status:**

- **FIXED ISSUES:** 4
- **KNOWN LIMITATIONS:** 1
- **CRITICAL UNRESOLVED ISSUES:** 0