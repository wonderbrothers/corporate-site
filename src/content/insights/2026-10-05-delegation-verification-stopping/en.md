---
title: "Handing work to AI: designing delegation, verification, and stopping"
description: "Entrusting AI with ongoing work requires designing not only goals and permissions, but also how progress is understood, verified, and stopped. Drawing on a unified front door for public services, execution environments, talent development, and specialized AI, we consider how much can be delegated."
heroAlt: "An illustration on a cream background of a branching railway track, a blue train, and a hand gripping a switch lever."
tags: ["Agent UX", "Service design", "AI adoption"]
draft: false
---

Period covered: September 28 – October 4, 2026

AI that keeps working after the conversation ends, a single front door to procedures across several agencies, models that use specialized tools to iterate on designs. This week's announcements give a clearer shape to the systems that let us hand ongoing work to AI. Most of them are still plans or staged rollouts, though, and how they perform in practice remains to be seen.

Below, we look at six developments in turn: what was announced, what it suggests for design and operations, and what you might try in your own work. The thread running through them is how to build convenient entry points alongside ways for people to check, correct, and stop what AI is doing. Availability is generally as announced during the week covered.

## 1. Reorganizing the front door to public services around people's goals rather than agencies

On September 29, the US government issued an executive order establishing America.gov as a unified front door to federal services. The idea is that people can ask questions in plain language, sign in with Login.gov, and complete procedures across agencies wherever authorization and technical conditions allow. That does not mean every procedure becomes available right away. Agencies keep their authority over records and legal determinations, and phone, in-person, mail, and existing websites will all remain. The order generally covers online services used by more than 100,000 people a year, with exclusions such as tax filing, and gives agencies 90 days to document their implementation policies.

A single front door helps only if the work and responsibilities behind it are connected too; otherwise people still end up re-entering information or getting passed from office to office. That said, there is no need to pull every decision into one place. Connecting the counters around what the user is trying to do, while leaving decisions with the people who own them, is where the real service design work lies. Letting people who find conversation difficult, or who use assistive technologies, choose a form or a human counter is part of quality as well.

To try this, a good candidate is one application or inquiry that spans departments, mapped from the user's goal through to completion. Counting the re-entries, handoffs, and repeated identity checks shows what a prototype with just a unified front door would actually reduce. And checking whether the task can be finished in both a conversational and a form-based version helps clarify which back-end integrations are needed.

Source: [Streamlining Access to Government Services Through America.gov](https://www.whitehouse.gov/presidential-actions/2026/09/streamlining-access-to-government-services-through-america.gov/) (The White House, September 29, 2026)

## 2. For AI that is always on, make the state of delegation visible

In its September 29 release notes, OpenAI announced dots, agents that keep working between conversations. Users set the goal, the connected apps, and how far the agent may act on its own, then review the results. It is rolling out in stages to eligible Pro and Business Premium users aged 18 and over, and the initial Pro release excludes the EEA, Switzerland, and the UK. Enterprise is in beta and disabled by default. Usage in the first month does not count toward plan limits, with later terms to be announced separately.

When AI runs for long stretches, people need to know more than what they asked for. They need to see where it is currently waiting, what it has changed, and what would happen if they canceled the request. The hard part is the balance of notifications. Report every step and reviewing becomes exhausting; report too little and the chance to step in slips away. Alongside completion notices, it is worth testing a design that surfaces the key points only when a decision is needed and lets people drill down into the full history.

A practical first step is a prototype for one recurring task that brings together the goal, permitted scope, progress, reasons for waiting, pending approvals, change history, and a way to stop. Asking around five people to judge what can be delegated and when to intervene will show how accurately they understand it and how long reviewing takes. It also helps to make actions that can be undone visually distinct from those that cannot.

Source: [ChatGPT release notes — September 29, 2026 / Meet your dot](https://help.openai.com/en/articles/6825453-chatgpt-release-notes) (OpenAI, September 29, 2026)

## 3. Enforcing safety outside the model

On September 28, NVIDIA announced the Open Agent Safety Platform. OpenShell is software that enforces policies at runtime boundaries, while Sentry is described as a reference system design that monitors agents from outside on the BlueField-4 DPU and isolates or stops them when they cross boundaries. OpenShell is open source and can be extended to other companies' computing platforms, but Sentry's description includes a dedicated hardware configuration, so installing the software alone won't give you everything in the reference design.

If the boundaries of a task rest only on written instructions to the model, misunderstandings and unexpected behavior are hard to contain. Restricting what can be viewed, where data can go, and which tools can be used at the execution-environment level as well gives you a checkpoint that does not depend on the model's judgment. That in turn puts demands on the UX. People need to understand why something was blocked and whom to ask for more permissions, which is why stopping and resuming are best designed together.

One place to start is a settings table for a single agent listing the files it can view, where it can send data, its tools, credentials, execution limits, and how to stop it. Attempting unauthorized reads and transmissions in a test environment shows whether they are blocked before they run. Keeping a record of how often legitimate work was stopped by mistake, and how long it took to restore, gives a sense of what the restrictions cost day to day.

Source: [NVIDIA Launches Open Agent Safety Platform to Secure Agents From Testing to Deployment](https://nvidianews.nvidia.com/news/open-agent-safety-platform) (NVIDIA, September 28, 2026)

## 4. Developing the people who lead AI adoption through real projects

On October 2, Anthropic announced a $100 million investment in the Claude Frontier Academy, aiming to train 10,000 Frontier Deployed Engineers by the end of 2027. Initial participating companies include Accenture, Deloitte, McKinsey, and Morgan Stanley. Participants go through an in-person program built on simulated enterprise deployments and a practical assessment, and those who pass move on to a 12-week residency leading a real project at their own organization. This announces the plan and the start of the investment and training; it is not a record of 10,000 people already trained.

Knowing how to operate AI tools is one thing. Getting them to the point where people on the ground keep using them is another. Choosing the task, testing with users, getting through security review, handing over to operations: a program like this points toward learning built around that whole sequence. Nor does all of it have to fall on one all-round specialist. A team where the business, UX, technology, and operations owners share the same success metrics is another option.

Inside your own organization, you might take one task and put a practical plan of roughly 8 to 12 weeks, adjusted to the project, on a single page. Giving each stage an owner and completion criteria (choosing the task, prototyping, user evaluation, permission review, handover) makes it easier to move forward. Task success rates, review effort, and continued use after handover are better measures than the number of people trained.

Source: [Anthropic invests $100 million to train 10,000 engineers and tackle the enterprise AI talent gap](https://www.anthropic.com/news/claude-frontier-academy) (Anthropic, October 2, 2026)

## 5. Structuring specialized AI into generation, verification, and approval

On September 30, OpenAI and Synopsys announced a multi-year agreement to jointly develop GPT-Synopsys for semiconductor design. The goal is a model that operates electronic design automation (EDA) tools expertly, interprets their outputs, and iterates on designs. The plan is not to use customer-specific design data for training, and to provide encryption, retention periods, auditing, and permission settings. What was announced is a development plan, not general availability of a finished service or measured productivity gains.

The move treats expertise as more than what a model knows. It includes being able to use tools whose results can be verified. The same pattern carries over to other work, with AI drafting candidates, existing trusted systems checking calculations and conditions, and a person giving final approval. Of course, if the verification tool's scope or its data updates are wrong, passing verification is no guarantee.

For a task that involves checking against conditions, a prototype that separates AI drafting, rule checking, and expert approval would be a sensible experiment. Running around 30 cases through it reveals misjudgments, missing grounds, use of outdated rules, and how much time experts spend on corrections. It is also worth setting conditions so that cases the system cannot judge go back to a person automatically.

Source: [OpenAI and Synopsys Announce GPT-Synopsys: Frontier Intelligence to Revolutionize Chip Design](https://investor.synopsys.com/news/news-details/2026/OpenAI-and-Synopsys-Announce-GPT-Synopsys-Frontier-Intelligence-to-Revolutionize-Chip-Design/default.aspx) (Synopsys, September 30, 2026)

## 6. With third-party evaluation, look at who checks what

The "White House Accord on Super Intelligence," dated September 29, lists representatives of Google, Anthropic, Meta, OpenAI, xAI, and NVIDIA. It sets out four layers: internal controls and monitoring, internal teams that verify their effectiveness, independent external evaluation, and oversight by an independent committee of the board. This is a voluntary commitment, not an announcement that audits have been completed. The document specifies no standardized testing procedures and no concrete obligation to publish results, and it mentions the possibility of future legislation.

So what should buyers look at? A "third-party evaluated" label does not tell you whether your own conditions of use were covered. An evaluation of the model alone means something quite different from one that also examined the execution environment, tools and permissions included. Independence matters, but so do the scope, the problems found, and whether things were re-evaluated after fixes.

With candidate vendors, it is worth asking who carried out the evaluation, which model and version it covered, how far tools and the execution environment were included, how results can be viewed, how serious defects are reported, and what triggers re-evaluation. Comparing the scope in their materials with the scope of your own deployment then lets you limit your acceptance testing to the gaps.

Source: [White House Accord on Super Intelligence](https://www.presidency.ucsb.edu/documents/white-house-accord-super-intelligence) (document dated September 29, 2026, in The American Presidency Project) / [Trump, AI CEOs sign voluntary safety pact, back data center expansion](https://www.reuters.com/legal/government/trump-host-zuckerberg-anthropics-amodei-other-ai-titans-tuesday-2026-09-29/) (Reuters, same day)

## Priority actions for this week

1. **Start by setting the scope of delegation and the conditions for stopping for one task.** Bringing together goal, permissions, progress, approvals, and history lets you test whether the person who assigned the work can follow its state.
2. **Separate generation from verification, and try the exceptions too.** Carving out processing that can be checked against existing rules makes it possible to measure both errors and review effort.
3. **Name owners from the real project all the way to handover.** So that the work doesn't stop at a prototype, it helps to be clear about who will see permission controls, acceptance testing, and handover through to the end.
