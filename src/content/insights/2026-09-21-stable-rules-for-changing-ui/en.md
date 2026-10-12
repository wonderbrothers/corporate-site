---
title: "When business interfaces keep changing, how do you keep the rules for judgment stable?"
description: "As business interfaces adapt to conversations and goals, how do you keep permissions and decision criteria intact? Drawing on generative UI, task-specific models, codes of conduct, and incident reporting, we sort out which parts of the display can change, which rules should stay fixed, and how to test them in practice."
heroAlt: "An illustration of a hand rearranging building-shaped panels on a stage against a blue background."
tags: ["Generative UI", "Workflow design", "AI governance"]
draft: true
---

Period covered: September 14–20, 2026

Business systems used to be entered through fixed screens. Increasingly, they are also entered through screens assembled on the fly from a conversation or a goal. Alongside this, models that learn business procedures and codes of conduct for human intervention have started to take concrete shape. The more convenient entry points there are, the more it matters that the same permissions and decision criteria hold no matter where someone starts.

This week we look at six developments. For each one, we cover what we confirmed in the sources, what we take from it, and a small step you can test. Availability is generally as announced during the week covered.

## 1. Salesforce announces business UI assembled from conversation

On September 15, Salesforce announced AIforce, which lets people call on Salesforce data and business logic from tools such as Claude and Slack and composes screens around the goal at hand. According to the company, requests follow existing permissions and business rules, and actions are written back to Salesforce.

The same day, Salesforce in Claude became available in beta with 37 skills for sales. Because the announcement also covers capabilities still to come, not all of AIforce is at the same stage of availability, and what you can use varies by region and contract.

None of this makes fixed screens obsolete. If anything, the same task now needs the same permissions, confirmations, undo, and exception handling whichever way a person comes in. A generated screen that drops required information, or that changes what an action means from one session to the next, would be a real problem. A consultation booking service, for instance, might let the presentation of comparison information vary while always showing fees, booking conditions, and consent in the same way.

A good place to start is a single task, split into the information and actions that should stay fixed and the displays that can change with the goal. From there, you can build a fixed UI and a generated UI for the same task and compare completion rate, missed confirmations, recovery from mistakes, and keyboard operation. It is worth agreeing beforehand that a faster option will not be adopted if it fails to get important conditions across.

Source: [Salesforce Unveils AIforce, Bringing the Full Power of Its Platform to Any Interface](https://www.salesforce.com/news/stories/aiforce-announcement/) (Salesforce, September 15, 2026)

## 2. Task-specific models learn procedures, not just answers

Also on September 15, Salesforce and NVIDIA announced Koa, a reasoning model for CRM. It was trained on synthetic scenarios from more than 14 industries, covering roles, business problems, the order of operations, and tool calls, and the company says no customer data was used for training.

On Salesforce's own CRM benchmark, Koa reportedly matched or beat leading models while making roughly one-third the errors, though this is the company's own evaluation. At the time of the announcement it was in pilots with some customers, with general availability in the US planned for winter 2026.

What this points to is that the quality of business work is hard to judge from the final text alone. Did the AI skip a necessary check? Were the steps done in the right order? Can it hand the work back to a person when it cannot decide? Business knowledge organized as procedures and evaluation criteria becomes a development asset that stays useful even when you switch models.

A practical first step is to pick 20 cases from one task, such as handling inquiries, and write down the input conditions, the expected decision, the order of operations, prohibited actions, and the points where a person needs to confirm. Running them with anonymized or synthetic data and scoring result accuracy and procedural adherence separately makes it easier to see where things go wrong. If experts themselves disagree on how to score a case, the business rules probably need another look before the model does.

Source: [Announcing Koa: Salesforce's First CRM Reasoning Model, Built on NVIDIA Nemotron](https://www.salesforce.com/news/press-releases/2026/09/15/koa-reasoning-model/) (Salesforce, September 15, 2026)

## 3. Claude becomes a unified workspace that reduces the burden of choosing features

On September 16, Anthropic announced that it was bringing chat and Cowork together in Claude. Quick questions and longer-running work happen in the same conversation, and Claude picks the capabilities it needs. The rollout begins with Pro and Max over several weeks and will expand to other plans in stages.

Anthropic also announced Claude Docs and Slides and brought Design into the conversation. At the time, all three were in beta on paid plans, and Enterprise administrators could choose when to turn them on. For Slides, the company described direct editing, presenting, and export to PowerPoint or PDF.

Getting work done without learning the names of internal features is a genuine advantage. The tricky moment comes when a light question turns into long-running execution or actions in external systems. Even with a single entry point, people should still be able to see what is happening.

For production teams, estimates depend on more than drafting. Checking sources, how easy revisions are, and the effort from collaborative editing through to delivery all count. Making the same deliverable for one real recurring presentation, once with your current process and once in the unified workspace, shows the difference clearly. If you log the time to a first draft, the number of factual corrections, formatting work, collaborative editing, and rework after export, you can decide whether to change estimates or processes based on the total time to deliverable quality rather than how quickly a draft appears.

Source: [Claude Cowork and chat are now one Claude](https://claude.com/resources/articles/cowork-is-now-claude) (Anthropic, September 16, 2026)

## 4. Turning codes of conduct for AI into testable requirements

On September 14, Microsoft AI published a first draft of its Code of Conduct for MAI models and opened a six-week public consultation. Among other things, it says models should accept being stopped or corrected by people, should not expand their permitted scope on their own, and should not conceal their actions or records.

The draft sets a direction for training and evaluation. The document itself is clear that it does not guarantee current models live up to all of this, and that further evaluation, monitoring, and operational controls are needed.

Saying that people make the final decision does not tell you whether they can actually step in. Does processing stop when instructions change midway? Do those changes reach delegated agents? Can the system explain actions it has already taken? Spelling things out at that level gives design and acceptance testing a shared vocabulary.

If you already have an AI feature in use, it is worth preparing around ten tests covering stop requests, midway corrections, insufficient permissions, and ambiguous requests. Look at how long it takes to stop, whether anything happened after the stop, and whether there are gaps in the records. The acceptance criteria can then be set according to business impact, for example rejecting the feature if even one serious permission violation occurs.

Source: [Humanist AI in practice: A public consultation on our Code of Conduct for MAI Models](https://microsoft.ai/news/mai-code-of-conduct/) (Microsoft AI, September 14, 2026) / [Humanist AI Code of Conduct](https://microsoft.ai/code-of-conduct/)

## 5. A framework for reporting inappropriate AI behavior, even mid-investigation

On September 16, OpenAI published a framework for tracking, investigating, and disclosing misaligned model behavior, together with six reports of behavior observed during training and evaluation. They include generating instructions to hide failures, using a publicly exposed API key without authorization, uploading material without authorization in order to cite it, and sharing files through unpermitted channels.

The framework allows for disclosure before root causes are found or fixes are in place, with different paths depending on how complex the investigation is. OpenAI notes that the individual cases it disclosed do not indicate how often such behavior occurs across the model as a whole.

Safety is judged partly by how problems are handled once they happen. If nobody has decided what to stop and whom to tell while the cause is still unknown, harm can spread while everyone waits for a full investigation report. Services need their own flows for notifying users, correcting information, and handling inquiries.

An easy way in is a tabletop exercise that runs from detection to first report, using a simulated case in which one unauthorized external transmission has been found. Settling who has authority to stop the system, where the logs are, what is affected, and who sends the interim notice, and then sorting out what can and cannot be known within 30 minutes, tends to surface gaps in contract terms and operating procedures.

Source: [Our framework for reporting model misalignment](https://openai.com/index/model-misalignment-reporting-framework/) (OpenAI, September 16, 2026)

## 6. When choosing sovereign AI, check where it runs and who controls it

On September 16, Cohere and Aleph Alpha announced a definitive agreement to combine their businesses. The combined company will operate as Cohere, with dual headquarters in Toronto and Berlin and a planned organization of more than 1,000 people. The deal is subject to regulatory approval and, at the time, was expected to close within the year.

The companies plan to meet the legal and data protection requirements of both countries and, through a partnership with Schwarz Group, to offer sovereign AI on the European cloud STACKIT. The announcement does not mean the combination is complete or that every product is available.

Calling something sovereign AI does not by itself show that it meets the controls your organization needs. Where data is stored, which operators can access it, how model updates are managed, which jurisdiction applies, and how you would migrate away are all separate questions. In UX for regulated industries, what users are told also has to match how their data is actually processed.

With two candidate services, it helps to lay out where each runs, who operates it, whether data is used for training, the applicable jurisdiction, and how data can be exported and deleted, all based on contract documents. Anything unclear is better left open on a questionnaire than assumed to be supported, and that list can feed straight into a decision to keep production data out until every mandatory requirement is met.

Source: [Cohere and Aleph Alpha sign agreement to become the first transatlantic sovereign AI solution](https://cohere.com/blog/cohere-and-aleph-alpha-sign-agreement) (Cohere, September 16, 2026)

## Priority actions for this week

1. **A good start is to write up the decisions and actions in one task as 20 cases.** With that baseline in place, you can check quality under the same conditions whenever the model or UI changes.
2. **It is worth testing the boundary between fixed and generated UI with a small prototype.** Narrowing down what can vary and comparing missed information, mistakes, and accessibility against the existing UI shows how much flexibility the task can take.
3. **Walking through stopping and incident reporting once is time well spent.** It shows whether the code of conduct works beyond paper, whether the system can actually be stopped, and whether information reaches the people responsible.
