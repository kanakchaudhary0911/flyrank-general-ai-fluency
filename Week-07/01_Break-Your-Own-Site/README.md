# Week 07 — Break Your Own Site

## 03 — Survive The Crit

A structured hardening pass for my personal portfolio website.

The goal of this assignment was to intentionally test my own site, identify where it could break, fix the actionable issues, document known limitations, and verify the final deployed version.

---

## Live Website

```text
https://03-survive-the-crit.vercel.app/
1. Assignment Objective

The objective of Week 07 was to test the portfolio from a real user's perspective instead of only checking whether the code worked during development.

The hardening pass covered:

Intentionally testing unexpected inputs
Testing empty and invalid form submissions
Testing rapid/double submission
Testing browser/device behaviour
Testing mobile responsiveness
Testing navigation and CTA links
Testing footer links
Checking project links
Checking basic SEO metadata
Checking Open Graph metadata
Checking Twitter/X metadata
Checking search findability
Checking desktop and mobile performance
Classifying findings into fix-now issues and known limitations
Fixing the actionable issues
Preparing the site for hardening review
2. Project

The website is a personal portfolio focused on:

Backend Development
Data Modeling
AI-Assisted Engineering
Web Development
Data Analytics

The portfolio includes:

About
Skills
Experience
Projects
Education
Contact

The Contact section contains a form with validation and a success state.

3. Hardening Workflow

The testing process followed this workflow:

Test
  ↓
Observe
  ↓
Record finding
  ↓
Classify
  ↓
Fix if actionable
  ↓
Retest
  ↓
Document

The goal was to find real issues rather than only collect successful test results.

4. Testing Completed

The following tests were performed during the hardening pass.

Test	Evidence	Result
Empty form submission	01-empty-form.png	PASS
Garbage / invalid input	02-garbage-input.png	PASS
Rapid/double submission	03-double-submit.png	PASS
Browser/device test	04-browser-test.png	PASS
Mobile test	05-mobile-test.png	PASS
Navigation	06-navigation.png	PASS
CTA links	07-cta-links.png	PASS
Footer links	08-footer-links.png	PASS
Project links	09-project-links.png	Known limitation
SEO meta tags	10-seo-meta-tags.png	PASS
Open Graph before fix	11-og-tags-missing.png	Finding
Open Graph after fix	12-seo-og-tags-fixed.png	FIXED
Twitter/X metadata after fix	13-seo-twitter-tags-fixed.png	FIXED
Mobile PageSpeed	14-pagespeed-mobile.png	PASS
Desktop PageSpeed	15-pagespeed-desktop.png	PASS
Google search findability	16-search-findability-google.png	PASS
5. Form Testing
Empty Form

The contact form was submitted without entering the required information.

Result

Validation feedback was displayed correctly.

Status

PASS

Evidence:

evidence/01-empty-form.png
Garbage / Invalid Input

Invalid information was entered into the form.

Result

The form correctly handled invalid input, including invalid email formatting.

Status

PASS

Evidence:

evidence/02-garbage-input.png
Rapid / Double Submission

The form was tested with a rapid/double submission attempt.

Result

The form behaviour was checked for unintended duplicate submission behaviour.

Status

PASS

Evidence:

evidence/03-double-submit.png
6. Browser and Device Testing

The portfolio was tested under different browser/device conditions.

Result

The tested site remained functional during the browser/device checks.

Status

PASS

Evidence:

evidence/04-browser-test.png
7. Mobile Testing

The portfolio was checked on a mobile/responsive layout.

Result

The main content remained usable and accessible.

Status

PASS

Evidence:

evidence/05-mobile-test.png
8. Navigation Testing

The main navigation was tested to verify that the site's sections could be reached correctly.

Result

Navigation behaved as expected during the test.

Status

PASS

Evidence:

evidence/06-navigation.png
9. CTA Testing

The portfolio's call-to-action links were tested.

Result

The tested CTA links behaved as expected.

Status

PASS

Evidence:

evidence/07-cta-links.png
10. Footer Testing

Footer links and interactions were checked.

Result

The tested footer links behaved as expected.

Status

PASS

Evidence:

evidence/08-footer-links.png
11. Project Links

The project cards were checked for external links.

Finding

Some projects do not currently have external demo or repository links because those projects are still in progress.

Classification

KNOWN LIMITATION

No fake or placeholder links were added.

Real links can be added when the related projects are completed and available.

Evidence
evidence/09-project-links.png
12. SEO Metadata

The portfolio was checked for basic SEO metadata.

The page includes a descriptive title and meta description.

Title
<title>Kanak Chaudhary | Backend Developer & AI Enthusiast</title>
Meta Description
<meta
  name="description"
  content="Portfolio of Kanak Chaudhary — BCA student, backend developer, and AI enthusiast."
/>
Status

PASS

Evidence:

evidence/10-seo-meta-tags.png
13. Open Graph Metadata

During the hardening pass, Open Graph metadata was identified as an area requiring improvement.

Finding

The initial metadata state did not contain the required Open Graph tags.

Evidence:

evidence/11-og-tags-missing.png
Fix

Open Graph metadata was added to index.html.

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
  content="https://03-survive-the-crit.vercel.app/"
/>
Verification

The updated metadata was checked after the fix.

Evidence:

evidence/12-seo-og-tags-fixed.png
Status

FIXED

14. Twitter/X Metadata

Twitter/X metadata was added during the hardening pass.

<meta name="twitter:card" content="summary" />

<meta
  name="twitter:title"
  content="Kanak Chaudhary | Backend Developer"
/>

<meta
  name="twitter:description"
  content="Portfolio of Kanak Chaudhary — BCA student, backend developer, and AI enthusiast."
/>

The deployed metadata was checked after the change.

Evidence:

evidence/13-seo-twitter-tags-fixed.png
Status

FIXED

15. Deployment Issues Found and Fixed
Issue 1 — Incorrect Vercel Root Directory

The first Vercel deployment attempted to build the repository root instead of the actual Vite project.

Error
sh: line 1: vite: command not found
Error: Command "vite build" exited with 127
Fix

The Vercel Root Directory was changed to:

Week-06/03_Survive-The-Crit
Status

FIXED

Issue 2 — Vite Permission Error

After correcting the Root Directory, Vercel encountered a Vite execution permission error.

Error
Permission denied

Error: Command "npm run build" exited with 126
Fix

The Vercel build command was changed to:

node node_modules/vite/bin/vite.js build
Status

FIXED

16. Search Findability

A Google search was performed for:

"Kanak Chaudhary" portfolio

Relevant results associated with the portfolio/GitHub presence were visible.

Status

PASS

Evidence:

evidence/16-search-findability-google.png
17. Performance Testing

The deployed portfolio was checked using PageSpeed Insights.

Desktop
Category	Score
Performance	100
Accessibility	97
Best Practices	100
SEO	100

Evidence:

evidence/15-pagespeed-desktop.png
Mobile
Category	Score
Performance	100
Accessibility	98
Best Practices	100
SEO	100

Evidence:

evidence/14-pagespeed-mobile.png
Result

No critical performance issue was identified during this hardening pass.

18. Fix-Now Findings

The actionable issues discovered during the hardening process were addressed.

Finding	Action	Status
Incorrect Vercel Root Directory	Updated project root	FIXED
Vite execution permission issue	Updated build command	FIXED
Missing Open Graph metadata	Added OG tags	FIXED
Missing Twitter/X metadata	Added Twitter/X tags	FIXED

The basic SEO title and description were also verified during the pass.

19. Known Limitations

The main remaining limitation is:

Project Links

Some project cards do not currently have external demo/repository links because the related projects are still in progress.

This was documented instead of adding fake or placeholder URLs.

Status

KNOWN LIMITATION

20. Evidence Structure

All Week-07 screenshots are stored inside the evidence/ folder.

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
└── 16-search-findability-google.png
21. Documentation Structure

The complete Week-07 assignment is organized as:

Week-07/
└── 01_Break-Your-Own-Site/
    ├── README.md
    ├── WORKFLOW.md
    ├── TEST-CASES.md
    ├── WHERE-IT-BREAKS.md
    ├── FIXES.md
    ├── SEO-AND-PERFORMANCE.md
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
        └── 16-search-findability-google.png
22. Final Verification

After applying the fixes, the deployed site was checked again.

Verified
Site loads successfully
Vercel deployment works
Contact form validation works
Invalid input is handled
Valid submission works
Rapid/double submission was tested
Navigation works
CTA links work
Footer links work
Responsive/mobile layout works
Basic SEO metadata is present
Open Graph metadata is present
Twitter/X metadata is present
Search findability was checked
Desktop PageSpeed was checked
Mobile PageSpeed was checked
Known project-link limitation is documented
23. Hardening Review

The portfolio is prepared for mentor/structured peer hardening review.

The reviewer should focus on:

Form behaviour
Navigation and interactions
Responsive layout
Project links
SEO metadata
Social sharing metadata
Performance
Any remaining usability issues
Review Status

PENDING REVIEW

Reviewer feedback will be added after an actual mentor or peer review is completed.

No review feedback is being fabricated before the review.

24. Final Status
Core functionality       → PASS
Form validation          → PASS
Navigation               → PASS
CTA links                → PASS
Footer links             → PASS
Responsive testing       → PASS
SEO metadata             → PASS
Open Graph metadata      → FIXED
Twitter/X metadata       → FIXED
Search findability       → PASS
Desktop performance      → PASS
Mobile performance       → PASS
Project links            → KNOWN LIMITATION
Critical unresolved      → NONE IDENTIFIED
Hardening review         → PENDING
25. What I Learned

This exercise showed that a website can appear complete during normal development while still having issues in deployment configuration, metadata, or edge-case usage.

The hardening process reinforced the importance of:

Testing unexpected input
Testing rapid user actions
Checking responsive behaviour
Verifying deployment configuration
Checking production metadata
Testing social sharing metadata
Checking search findability
Measuring performance
Separating actual bugs from known limitations
Retesting after fixes
Documenting evidence honestly
26. Conclusion

The Week-07 "Break Your Own Site" hardening pass was completed by intentionally testing the portfolio, recording findings, fixing actionable issues, verifying the production deployment, and documenting the remaining limitation.

The final deployed portfolio is available at:

https://03-survive-the-crit.vercel.app/

The site has been checked for core functionality, form behaviour, responsiveness, navigation, SEO metadata, social metadata, search findability, and performance.

The remaining project-link limitation is documented as work in progress rather than hidden or replaced with placeholder links.

Final status: READY FOR HARDENING REVIEW