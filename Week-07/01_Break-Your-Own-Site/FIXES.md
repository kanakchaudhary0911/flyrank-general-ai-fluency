# FIXES.md

## Break Your Own Site — Fix Log

This document records the issues discovered during the Week-07 hardening pass, the fixes applied, and the final verification status.

---

## 1. Vercel Build Root Directory

**Issue**
The first Vercel deployment failed because Vercel was trying to build the repository root instead of the actual Vite project directory.

**Error**

```text
sh: line 1: vite: command not found
Error: Command "vite build" exited with 127
```

**Root Cause**
The project is located inside:

```
Week-06/03_Survive-The-Crit
```

but Vercel was initially configured to use the repository root as the project root.

**Fix Applied**
Updated the Vercel Root Directory to:

```
Week-06/03_Survive-The-Crit
```

**Verification**
After updating the root directory, Vercel correctly detected the project and attempted to run the Vite build from the correct folder.

**Status:** ✅ FIXED

---

## 2. Vite Build Permission Error

**Issue**
After correcting the Vercel Root Directory, the deployment encountered another build error.

**Error**

```text
> 03-survive-the-crit@1.0.0 build
> vite build

sh: line 1: /vercel/path0/Week-06/03_Survive-The-Crit/node_modules/.bin/vite: Permission denied

Error: Command "npm run build" exited with 126
```

**Root Cause**
The Vercel environment could not execute the Vite binary through the default npm script.

**Fix Applied**
Changed the Vercel Build Command from:

```
npm run build
```

to:

```
node node_modules/vite/bin/vite.js build
```

This executes the Vite JavaScript entry point directly instead of relying on the executable permission of the `.bin/vite` file.

**Verification**
The deployment completed successfully after changing the build command.

**Status:** ✅ FIXED

---

## 3. Open Graph Metadata

**Issue**
The portfolio initially had basic page metadata but did not have complete Open Graph metadata for social sharing previews.

**Fix Applied**
Added Open Graph metadata to `index.html`.

```html
<meta property="og:type" content="website" />
<meta property="og:title" content="Kanak Chaudhary | Backend Developer" />
<meta
  property="og:description"
  content="Portfolio of Kanak Chaudhary — BCA student, backend developer, and AI enthusiast."
/>
<meta
  property="og:url"
  content="https://03-survive-the-crit.vercel.app/"
/>
```

**Purpose**
These tags provide structured information that platforms can use when generating a preview of the portfolio URL.

**Verification**
The deployed site metadata was checked after deployment.

**Status:** ✅ FIXED

---

## 4. Twitter/X Metadata

**Issue**
Twitter/X-specific metadata was not initially included.

**Fix Applied**
Added Twitter/X metadata to `index.html`.

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

**Purpose**
These tags provide structured information for link previews on supported social platforms.

**Verification**
The deployed metadata was checked after deployment.

**Status:** ✅ FIXED

---

## 5. SEO Title and Description

**Issue**
The portfolio needed clear basic SEO metadata.

**Fix Applied**
Updated the page title:

```html
<title>Kanak Chaudhary | Backend Developer & AI Enthusiast</title>
```

The page also includes a descriptive meta description:

```html
<meta
  name="description"
  content="Portfolio of Kanak Chaudhary — BCA student, backend developer, and AI enthusiast."
/>
```

**Purpose**
The title and description clearly communicate the purpose and content of the portfolio.

**Verification**
The deployed page was checked and the metadata was confirmed.

**Status:** ✅ FIXED

---

## 6. Form Validation

**Test Performed**
The contact form was tested with:

- Empty fields
- Invalid/garbage input
- Valid input

**Result**
The form correctly displayed validation feedback for invalid input and showed a success state for valid submission.

**Status:** ✅ PASS — No Fix Required

---

## 7. Navigation and Interactive Elements

**Test Performed**
The portfolio navigation and interactive elements were tested, including:

- Navigation links
- Call-to-action elements
- Footer interactions
- Project section navigation
- General page interactions

**Result**
The tested interactions behaved as expected.

**Status:** ✅ PASS — No Fix Required

---

## 8. Responsive Layout

**Test Performed**
The site was checked across different viewport/device conditions, including mobile/responsive layouts.

**Result**
The layout remained usable and the main content remained accessible.

**Status:** ✅ PASS — No Fix Required

---

## 9. Search Findability

**Test Performed**
A Google search was performed for:

```
"Kanak Chaudhary" portfolio
```

**Result**
The search results showed relevant portfolio/GitHub results for the name.

**Status:** ✅ PASS — No Fix Required

---

## 10. Performance

**Test Performed**
The deployed site was checked using Google PageSpeed Insights.

**Desktop Result**

| Metric | Score |
|---|---|
| Performance | 100 |
| Accessibility | 97 |
| Best Practices | 100 |
| SEO | 100 |

**Mobile Result**

| Metric | Score |
|---|---|
| Performance | 100 |
| Accessibility | 98 |
| Best Practices | 100 |
| SEO | 100 |

**Result**
The site achieved strong scores across the tested categories.

**Status:** ✅ PASS — No Fix Required

---

## 11. Project Demo/Repository Links

**Finding**
Some project cards do not currently contain external demo or repository links because those projects are still in progress.

**Classification**
This is a known limitation, not a broken interaction.

**Action**
No fake or placeholder links were added. Completed projects can receive their real demo/repository links when they are available.

**Status:** ⚠️ KNOWN LIMITATION

---

## Fix Summary

| Issue | Action | Status |
|---|---|---|
| Incorrect Vercel Root Directory | Set correct project root | FIXED |
| Vite permission error on Vercel | Changed build command | FIXED |
| Missing Open Graph metadata | Added OG tags | FIXED |
| Missing Twitter/X metadata | Added Twitter/X tags | FIXED |
| SEO title/description | Added/updated metadata | FIXED |
| Contact form validation | Tested | PASS |
| Navigation/interactions | Tested | PASS |
| Responsive layout | Tested | PASS |
| Search findability | Tested | PASS |
| PageSpeed performance | Tested | PASS |
| Some project links unavailable | Documented as WIP | KNOWN LIMITATION |

---

## Final Fix Status

**Fix-now Issues**

All identified deployment/configuration and metadata issues were addressed:

- Vercel Root Directory
- Vercel Vite build execution
- Open Graph metadata
- Twitter/X metadata
- SEO title and description

**Known Limitations**

The only documented limitation is that some project cards do not yet have external demo/repository links because the related projects are still in progress.

**Final State**

The portfolio is deployed and accessible at:

🔗 https://03-survive-the-crit.vercel.app/

The final hardening pass found no critical unresolved issue affecting the core portfolio experience.