# Explain It Like You Built It

## Overview

This assignment focused on understanding one real piece of my own build instead of treating AI-generated code as something I could use without understanding.

For this assignment, I chose the **`analyzeWebsiteTool`** from my **FE-07 — Tool Results Structured Output** project. I wanted to understand how the tool is connected to the AI, how it validates the input, and where the actual website analysis happens.

---

## 1. The Part I Chose

The part I chose is the `analyzeWebsiteTool` defined in my server-side chat route.

The tool is responsible for analyzing a public website and returning basic information such as:

* Website URL
* Page title
* Meta description
* HTTP status
* Word count

The important part of the implementation is:

```ts
const analyzeWebsiteTool = tool({
  description: "...",

  inputSchema: z.object({
    url: z.string().url(),
  }),

  execute: async ({ url }) => {
    // website analysis logic
  },
});
```

---

## 2. How `tool()` Works

The `tool()` function defines a capability that the AI model can use.

In my project, I describe the tool as something that can analyze a public website. This description helps the model understand what the tool is useful for.

The tool itself does not automatically analyze the website. It defines the capability and connects the AI model to the code that performs the actual work.

---

## 3. Why I Used Zod

Inside the tool, I used Zod to define an `inputSchema`:

```ts
inputSchema: z.object({
  url: z.string().url(),
})
```

This tells the application that the tool expects a `url` as input and that it should be a valid URL.

For example, a value such as:

```text
https://example.com
```

matches the expected format, while an invalid value such as:

```text
hello
```

does not.

I learned that the schema is important because it gives the tool a clear contract for the data it expects before the execution logic runs.

---

## 4. Where the Actual Work Happens

The actual website analysis happens inside the `execute()` function.

```ts
execute: async ({ url }) => {
  const response = await fetch(url);
  const html = await response.text();

  // extract website information

  return {
    success: true,
    url,
    title,
    description,
    status: response.status,
    wordCount,
  };
}
```

When the tool is called, `execute()` receives the URL.

My code then uses `fetch()` to request the website and gets its HTML. From that HTML, my code extracts the page title and description, removes unnecessary HTML, script, and style tags, and counts the remaining words.

The function then returns the information as a structured object.

---

## 5. The Complete Flow

The way I understand the complete process now is:

**User request → AI decides to use the tool → input is validated → `execute()` runs → website is fetched → information is extracted → structured result is returned.**

The AI does not magically know the website's current contents. The tool provides the capability and the `execute()` function contains the code that actually accesses and analyzes the website.

---

## 6. What I Learned

Before working through this, I understood that my project had a website-analysis tool, but I did not fully understand the difference between defining a tool and executing it.

Now I understand that:

* **`tool()`** defines the AI's available capability.
* **`inputSchema`** defines and validates the expected input.
* **`execute()`** contains the actual logic.
* **`fetch()`** is what my code uses to retrieve the website.
* The returned object gives the application structured information about the website.

The biggest thing I learned is that the AI is not doing all of the work by itself. **I provide the tool and the code behind it, while the AI can decide when that capability is useful.**

Understanding this made me more confident that I can explain the FE-07 implementation instead of just saying that I built a tool that works.

---

## Tools Used

* Next.js
* TypeScript
* Vercel AI SDK
* Zod
* Google Gemini
* `fetch()`

---

## Project Reference

**Project:** FE-07 — Tool Results Structured Output

**Real implementation:** `app/api/chat/route.ts`

**Piece explained:** `analyzeWebsiteTool`

---

## Outcome

This assignment helped me understand one of the important pieces of my own AI application at the code level. I can now explain how my website analysis tool receives input, validates it, executes the analysis, and returns structured information instead of treating the implementation as mystery code.
