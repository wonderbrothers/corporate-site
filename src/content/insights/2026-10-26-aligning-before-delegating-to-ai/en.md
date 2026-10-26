---
title: "Before handing work to AI, align procedures, permissions, and the scope of verification"
description: "We look at the transfer of Agent Skills, a shared format for work procedures, Zoom's plan to connect conversations with follow-up work, Figma's new admin controls, and formal verification done with AI, and sort out the boundaries of procedures, permissions, and evaluation worth settling before automation spreads, along with small ways to test them."
heroAlt: "An illustration of a hand lifting a stencil with a stepped opening, above two sheets of paper printed with the same shape."
tags: ["Workflow design", "AI agents", "AI evaluation"]
draft: false
---

Period covered: October 19–25, 2026

As the range of work handed to AI grows, more of it falls outside what individual prompts can handle. Can the same procedure be used in a different tool? Which parts of a conversation are safe to turn into action? When the person using a tool changes, do permissions and budgets carry over? This week brought a series of changes that touch on that groundwork.

The transfer of Agent Skills and the new enterprise features from Zoom and Figma can be read as moves toward managing procedures and usage conditions at the organizational level. From a different angle, formal verification of software using AI is also worth a look. Even as the scope of what can be verified automatically expands, the work of defining what counts as correct remains.

## 1. A shared format for work procedures moves beyond a single vendor

On October 22, Anthropic announced that it is donating Agent Skills to the Agentic AI Foundation (AAIF), part of the Linux Foundation. The donation covers the name and logo, the GitHub organization, and the domain. Agent Skills is a format that bundles a SKILL.md file describing a procedure together with any scripts and reference material it needs into a single folder, and according to the company, more than 70 agent platforms have adopted it since the standard was published in December 2025. Versioned releases, a formal proposal process, and safety guidelines are part of a proposed roadmap; not all of them are in place yet.

What makes this worth watching is that it becomes easier to preserve how experienced people work in a form that can travel. When preparing research material, for example, you can pass along not just the tone of the writing but also which sources to check, how to cross-check figures, and when to hold something back. Still, being able to read the same format is not the same as carrying it out with the same quality. Results change with the model in use, the tool permissions, and the sources it can reach, so it would be premature to treat the number of platforms supporting the standard as a measure of practical compatibility.

A realistic place to start is to pick one task that involves no confidential information and gather its input examples, procedure, prohibited actions, and completion criteria into a single Skill. Running the same five cases in two supported environments you have access to, and recording skipped steps, missed references, and time spent on corrections, will show which knowledge can be shared and which settings need to be filled in for each environment.

Source: [Donating Agent Skills to the Agentic AI Foundation](https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation) (Anthropic, October 22, 2026)

## 2. When conversations turn into work, can agreements be told apart from guesses?

On October 20, Zoom announced the Unified Context Layer, which links the history of meetings and conversations with documents and information from external apps. My Notes Workflows, which carries meeting summaries into follow-up work in Zoom Chat or Salesforce, is scheduled for October 2026, while the Search & Ask APIs, which let external AI query that information, were described as available at the time of the announcement. The features do not all arrive at once: Centralized AI Management is planned for December, and account-level AI Guardrails for the first quarter of 2027.

This goes beyond better meeting notes; it concerns how the step from conversation to work is designed. Suppose something said in a sales meeting, such as "we could probably handle that next month," is copied into a task as a firm deadline. Even if the summary is accurate, the work that follows goes wrong. Statements, agreements, and inferences made by AI need to be kept distinct, and it needs to be clear who confirms them before anything is carried out. It is also important not to count management features that will only arrive later as part of today's conditions for adoption.

One way to try this is to start with a single type of meeting and keep follow-up tasks as drafts rather than registering them automatically. For around ten meetings, it is worth checking how accurate the assignee, deadline, and supporting statement are, how long approval takes, and how easy it is to undo. Providing a way to move back and forth between the text summary and the original conversation also makes the content easier to check, including for participants who find audio hard to follow, and lets you weigh time saved against the risk of confirming the wrong thing.

Source: [Zoom advances its AI strategy with a new Unified Context Layer that helps turn meeting conversations into completed work](https://news.zoom.com/zoomtopia-2026-news/) (Zoom, October 20, 2026)

## 3. Building AI use in design tools into onboarding, transfers, and offboarding

On October 22, Figma announced new features for Enterprise admins. Admins can set default access to paid AI credits by organization or billing group, and manage availability and limits through SCIM, which connects with identity management services. The defaults apply to existing users without individual settings and to new users. The update also includes a control that restricts creating new Starter or Professional plans with a company email address, and admin REST APIs for managing teams, folders, and files, with the rollout to Enterprise taking place over several days after the announcement.

Where last week's code layers and Specs changed how things get made, this week's update is about keeping AI use sustainable across an organization. As more people use AI, individual budget settings and one-off exceptions alone tend to create mismatches, such as unused credits left behind after someone changes teams. Tying settings to people's departments and roles could reduce that management burden. Note, though, that restricting new plans created with company email does not prevent everything from leaving the organization through personal accounts.

If you already use an Enterprise environment, a good first step is to map out the AI credits needed and the person responsible for three cases: a new member joining, a transfer between departments, and a suspension of access. Checking how defaults and individual settings interact with a test user, and measuring how long changes take to apply and how often manual work is needed, makes it easier to judge whether you can reduce management effort while still giving people the access they need.

Source: [New controls for Enterprise admins](https://www.figma.com/release-notes/) (Figma Release Notes, October 22, 2026)

## 4. Even when AI writes the proofs, defining what is correct remains

On October 22, Anthropic and Theorem published research in which Claude was used to formally prove safety properties for 123 open-source libraries. Formal verification is a way of showing mathematically that a program meets conditions that have been defined in advance. The main experiment was limited to specific conditions, including single-threaded static binaries running on models of RISC-V and Linux, a fixed memory budget, and inputs under 64 MB. Specifications were built from existing fuzz tests, and the generated proofs were checked by Rocq, an external proof checker. Some of the proofs and models have been made public.

This result does not mean the libraries are free of bugs as a whole. Some entry points and behaviors were out of scope, and there are gaps between the model of the execution environment the proofs rely on and real production environments. The research also notes that generating proofs can take hundreds of millions of tokens in some cases, so this is not yet a low-cost method that every development team can adopt right away. Even so, it points to a way of building software that may spread, one where explicit properties are confirmed by a checker rather than one AI simply reading another AI's explanation.

For product teams, the easier place to begin is not adopting proof tools but making the conditions that must hold concrete. In an application flow, for example, you might pick one condition, such as "a canceled application cannot be approved" or "users without permission cannot carry out the final confirmation," and work through it with developers, exceptions included. Separating what ordinary testing covers from where formal verification might be worth trying, and measuring the time spent writing and checking specifications, makes it easier to focus investment on the places where stronger verification matters.

Source: [LLMs are making formal software verification feasible at a much larger scale](https://www.anthropic.com/research/formal-verification) (Anthropic, October 22, 2026)

## Priority actions for this week

1. **Try putting the procedure and completion criteria for one task into a reusable form.** Work that does not involve confidential information is a good place to start. Adding a few small evaluation cases makes it easier to see what breaks when you switch tools.
2. **Put a draft and an approval step where conversations turn into action.** Measuring the accuracy of assignees, deadlines, and supporting statements, along with the time spent checking, for one type of meeting shows whether less copying has simply been replaced by more checking.
3. **List permissions and what is out of scope for verification side by side for one AI task.** Keeping who can do what and what has not yet been checked in the same place makes the gaps before wider use concrete, and helps you prioritize additional testing and admin settings.
