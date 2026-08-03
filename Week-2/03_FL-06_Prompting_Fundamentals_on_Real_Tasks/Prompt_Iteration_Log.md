# Prompt Iteration Log

## Task

Write a recruiter-friendly GitHub README for my AI Internship Landing Page project.

---

# Baseline Prompt

## Prompt

```
Write a README for my GitHub project.
```

### Output Summary

The AI could not generate the README because the project information was missing. Instead, it asked for the project name, tech stack, features, and other details.

### Observation

The prompt was too vague and did not provide enough context for the AI to complete the task.

---

# Version 1 – Role Assignment

## Technique

Role Assignment

## Prompt

```
You are an experienced technical writer.

Write a README for my GitHub project.
```

### What Changed

Assigned the AI the role of an experienced technical writer.

### What Improved

The response became more professional and clearly explained what information was required before writing the README.

### What Still Failed

The AI still needed project details before generating the document.

### Next Improvement

Provide project context.

---

# Version 2 – Context and Motivation

## Technique

Context and Motivation

## Prompt

```
You are an experienced technical writer.

This README is for my AI Internship Landing Page project. It will be part of my GitHub portfolio and will be reviewed by recruiters for Frontend Developer and Software Development Internship roles.

Write a README for this project.
```

### What Changed

Added project context and explained the intended audience.

### What Improved

The AI adapted its tone for recruiters and emphasized accurate technical documentation instead of making assumptions.

### What Still Failed

The README could not be completed because important project information was still missing.

### Next Improvement

Provide an example of the desired README format.

---

# Version 3 – Few-shot Examples

## Technique

Few-shot Examples

## Prompt

```
You are an experienced technical writer.

This project is an AI Internship Landing Page built using HTML5, CSS3, and JavaScript.

Here is an example of the README structure I want:

Project Overview
Features
Tech Stack
Getting Started
Author
License

Now write a README for my project using the same structure.
```

### What Changed

Provided an example of the desired README structure.

### What Improved

The AI generated a complete README following the example structure instead of asking only follow-up questions.

### What Still Failed

Some project details were assumed because they were not explicitly provided.

### Next Improvement

Specify the exact output structure.

---

# Version 4 – Output Structure

## Technique

Output Structure

## Prompt

```
You are an experienced technical writer.

This project is an AI Internship Landing Page built using HTML5, CSS3, and JavaScript.

Write a recruiter-friendly GitHub README.

Use exactly this structure:

# AI Internship Landing Page

## Project Overview

## Features

## Tech Stack

## Project Structure

## Getting Started

## Author

## License

Return the result only in Markdown.
```

### What Changed

Specified the exact Markdown structure.

### What Improved

The AI produced a well-organized README with consistent formatting and headings.

### What Still Failed

Repository structure, setup instructions, and links were still assumed or left incomplete.

### Next Improvement

Break the task into logical steps.

---

# Version 5 – Step Decomposition

## Technique

Step Decomposition

## Prompt

```
You are an experienced technical writer.

Help me create a recruiter-friendly GitHub README for my AI Internship Landing Page project.

Work step by step.

Step 1: Understand the project.
Step 2: Identify the required README sections.
Step 3: Draft each section.
Step 4: Review the README.
Step 5: Output the final Markdown document.

Project Details:
- AI Internship Landing Page
- HTML5, CSS3, JavaScript
- Hero Section
- Program Overview
- Features
- Application Process
- FAQs
- Contact Section
- Responsive Design

Do not invent information that is not provided.
```

### What Changed

The task was divided into smaller logical steps.

### What Improved

The AI followed a more structured process and produced a more consistent README while reducing unsupported assumptions.

### What Still Failed

Repository-specific information such as links and installation steps still required manual input.

### Next Improvement

Compare the final prompt across different AI models.

---

# Claude vs ChatGPT Comparison

| Criteria | Claude | ChatGPT |
|----------|---------|----------|
| Tone | Professional and documentation-focused | Professional and concise |
| Structure | Well-organized Markdown | Clean Markdown following the requested format |
| Accuracy | Asked for clarification before making assumptions | Followed the provided constraints more closely |
| Limitation | Needed additional project details | Could not generate missing information |

### Summary

Both models produced useful documentation. Claude focused on gathering complete information before writing, while ChatGPT followed the provided constraints closely and generated a concise recruiter-friendly README.

---

# Final Reusable Prompt

```
You are an experienced technical writer.

Create a professional GitHub README for the following project.

Follow exactly this structure:

# Project Name

## Project Overview

## Features

## Tech Stack

## Project Structure

## Getting Started

## Author

## License

Requirements:

- Write in professional Markdown.
- Keep the language concise and recruiter-friendly.
- Only use the information I provide.
- Do not invent technologies, features, links, repository structure, installation steps, or deployment details.
- If information is missing, clearly state "Not provided."
- Make the README suitable for a public GitHub repository.

Project Details:

[Insert Project Information]
```