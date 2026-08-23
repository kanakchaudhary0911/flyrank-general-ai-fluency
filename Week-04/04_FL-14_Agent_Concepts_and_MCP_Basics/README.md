# FL-14 — Agent Concepts and MCP Basics

## Overview

This assignment focused on understanding the difference between AI workflows and agents, learning the basic concepts of the Model Context Protocol (MCP), and connecting an external service to an AI client.

For the practical component, I connected Google Drive to Claude and used the integration to search and read files from my Google Drive. The tasks demonstrated that the AI could access external information through a connected tool rather than relying only on normal chat context.

---

## 1. Workflow vs Agent

### What is a Workflow?

An AI workflow is a predefined sequence of steps where each stage performs a specific function and passes its output to the next stage.

For example:

**Input → Draft → Critique → Revise → Final Output**

Each step has a defined purpose and the overall process follows a planned structure.

### What is an Agent?

An agent is more flexible than a fixed workflow. Instead of simply following a predetermined sequence, an agent can determine what actions are needed to achieve a goal, use available tools, evaluate results, and continue taking actions when necessary.

In simple terms:

- **Workflow:** follows a defined path.
- **Agent:** decides what actions to take within a goal and available tools.

---

## 2. Classification of My FL-13 Workflow

My FL-13 **Draft → Critique → Revise** system is a **workflow**, not an agent.

The process has three clearly defined stages:

1. **Draft** — creates an initial structured version.
2. **Critique** — reviews the draft for clarity, accuracy, structure, missing information, repetition, and tone.
3. **Revise** — applies the critique to produce an improved final version.
4. **Human Check** — identifies information that still requires human verification.

The stages are predetermined and the handoff between them is explicit. The system does not independently decide which tools to use, create new steps, or determine its own strategy.

Therefore, FL-13 is best classified as a structured AI-assisted workflow.

---

## 3. What is MCP?

**Model Context Protocol (MCP)** is an open standard for connecting AI applications to external systems.

MCP allows an AI application to work with external data sources, tools, and other capabilities through a standardized connection.

A simple way to understand MCP is:

**AI Application ↔ MCP ↔ External System**

Instead of an AI being limited to information available inside a normal conversation, an MCP connection can allow it to interact with external systems such as files, databases, applications, and services.

---

## 4. MCP Primitives

The MCP model includes three important primitives:

### Tools

Tools allow an AI application to perform actions or retrieve information from an external system.

Examples include searching files, reading data, querying a service, or performing an operation.

### Resources

Resources provide information or data that an AI application can access as context.

Examples can include files, documents, database information, or other external data.

### Prompts

Prompts are reusable instructions that can guide how an AI application interacts with a particular MCP-enabled capability.

Together, these primitives provide a structured way for AI applications to interact with external systems.

---

## 5. Practical MCP / Connector Setup

For the practical part of this assignment, I connected **Google Drive to Claude**.

The Google Drive integration allowed Claude to access information from my connected Drive using its search and file-reading capabilities.

### Task 1 — Search Google Drive

Claude was asked to search Google Drive for files related to:

- FlyRank
- AI Fluency

The search was performed using the connected Google Drive integration.

The result returned relevant resume files and identified which files were related to FlyRank and AI Fluency.

**Evidence:**

`screenshots/02_mcp_task_01_google_drive_search.png`

---

### Task 2 — Read a Google Drive File

Claude was instructed to retrieve and read a resume directly from Google Drive.

The task required Claude to use the connected Drive integration rather than relying on information from the conversation.

The permission screen and resulting file content demonstrated that the external file was actually accessed through the connector.

**Evidence:**

`screenshots/03_mcp_task_02_permission.png`

`screenshots/04_mcp_task_02_result.png`

---

### Task 3 — Compare Files from Google Drive

Claude was instructed to read two resume files from Google Drive and compare them based only on their actual contents.

The comparison covered:

- Headline/profile positioning
- Internships
- Technical skills
- Projects
- Certifications
- Major differences between the two versions

This demonstrated that Claude could retrieve external files and use their contents as the basis for a comparison.

**Evidence:**

`screenshots/05_mcp_task_03_tool_call.png`

`screenshots/06_mcp_task_03_result.png`

---

## 6. What the Connector Demonstrated

The Google Drive integration demonstrated capabilities that normal chat alone would not provide.

Without the connector, Claude would not have direct access to the contents of the selected Google Drive files.

With the connector, Claude could:

1. Search the connected Drive.
2. Retrieve files from the Drive.
3. Read file contents.
4. Use retrieved information to perform a comparison.

The important distinction is that the results came from an external connected system rather than only from the conversation context.

---

## 7. What Would Make FL-13 an Agent?

The current FL-13 workflow is intentionally structured and predictable.

To move it toward an agent, the system would need more autonomy.

For example, an upgraded version could receive a rough piece of content and independently decide:

1. What type of content it is.
2. Which review criteria are most important.
3. Whether additional information is required.
4. Which tools or sources should be consulted.
5. Whether another revision cycle is necessary.
6. When the output is good enough to present to the user.

Instead of always following:

**Draft → Critique → Revise**

the system could dynamically choose the appropriate actions based on the input and the result of each step.

### Concrete Agent Upgrade

A concrete upgrade for my FL-13 pipeline would be an **adaptive review loop**.

The system could evaluate the critique after each revision and decide whether another revision is necessary. If important information is missing, it could identify what additional information is needed before continuing. If the output already satisfies the quality criteria, it could stop instead of running unnecessary steps.

This would make the workflow more agent-like because the next action would depend on the current state and evaluation rather than always following exactly the same sequence.

---

## 8. Workflow Limitations and Human Review

The workflow and connector do not remove the need for human judgment.

Human review is still necessary for:

- Factual accuracy
- Project-specific technical details
- Missing information
- Sensitive or personal information
- Final wording and suitability for the intended audience

The AI can process and organize information, but the user remains responsible for verifying that the final output accurately represents the underlying work.

---

## 9. Key Takeaways

This assignment helped clarify three important concepts:

- A **workflow** follows a predefined sequence of steps.
- An **agent** has greater autonomy in deciding actions toward a goal.
- **MCP** provides a standardized way for AI applications to connect with external systems.

The practical Google Drive integration demonstrated how an AI client can move beyond normal conversation by accessing external files through a connected tool.

The main lesson from applying these concepts to FL-13 is that a well-structured workflow does not automatically become an agent. Greater autonomy, tool use, evaluation, and dynamic decision-making are needed to move from a fixed workflow toward an agentic system.

---

## Evidence

### MCP / Connector Setup

- `screenshots/01_mcp_connector_setup.png`

### Task 1 — Google Drive Search

- `screenshots/02_mcp_task_01_google_drive_search.png`

### Task 2 — File Access

- `screenshots/03_mcp_task_02_permission.png`
- `screenshots/04_mcp_task_02_result.png`

### Task 3 — File Comparison

- `screenshots/05_mcp_task_03_tool_call.png`
- `screenshots/06_mcp_task_03_result.png`

---

## Tools Used

- Claude
- Google Drive Integration
- MCP / Connector concepts

---

## Outcome

FL-14 provided practical experience with the workflow-versus-agent distinction and demonstrated how an AI client can use an external connector to access and process information outside the conversation itself.

The assignment also identified a concrete path for evolving the FL-13 Draft → Critique → Revise workflow toward a more autonomous, agent-like system.