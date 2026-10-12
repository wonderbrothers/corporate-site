---
title: "Making AI part of how work gets done: connecting data, execution, and deliverables"
description: "AI is starting to connect with business data, execution environments, and the formats of finished work. Drawing on agent platforms, enterprise data analysis, industry-specific services, voice and image creation, and the impact on external services, we outline what to design and evaluate when building AI into real work."
heroAlt: "An illustration on a vermilion background of a hand and a loom weaving several threads into a single piece of cloth."
tags: ["AI agents", "Workflow design", "Product development"]
draft: false
---

Period covered: September 7–13, 2026

Generative AI is moving past standalone use. More and more systems now draw on business data, operate tools, and carry work through to finished output in a set format. Once that happens, the question is no longer only what the AI knows, but also what it is allowed to do and who checks the results.

This week we look at announcements on agent execution platforms, data analysis, financial services, and voice and image creation, along with a report on the impact on an external service. Going through each one, we think about the design it takes to make AI hold up as part of real work.

## 1. Platforms for running agents become managed services

On September 10, OpenAI announced the public beta of the Agents API. It bundles what long-running agents need: context management, tool use, coordination of subagents, and environments for file operations and code execution. The announcement mentions improved evaluation results from customers, though these are examples chosen by the provider. Being able to use the beta says little yet about whether it suits production work, and it is no guarantee of service quality.

With the platform handled for them, development teams may find it easier to spend their time defining and evaluating the work itself. Deciding how to divide that work, making sure the agent stops when something unexpected happens, and choosing when to ask a person to confirm all remain up to whoever builds the service. So it makes sense to weigh what to build in-house against what to leave to the platform, with maintenance costs and portability in the picture.

A practical first step is to pick one routine task, write down its inputs, completion criteria, the tools it uses, and where a person signs off, and then build a prototype. If you record the success rate, time to completion, cost, and number of interventions, you will have something concrete to compare against. It is also worth checking whether the agent can pick up again after being stopped partway.

Source: [Introducing the Agents API](https://openai.com/index/introducing-the-agents-api/) (OpenAI, September 10, 2026)

## 2. Before the dashboard, design what the metrics mean and what decisions they support

The same day, OpenAI also announced Data agent, which analyzes enterprise data and produces things like interactive dashboards. The company says it draws on metric definitions and relationships between data, such as those in dbt, and respects table-, row-, and column-level permissions on the connected accounts. It depends on administrators setting up connections and users, and on the necessary accounts being connected. Even so, being connected to data does not by itself mean the definitions or the analysis are correct.

If anything, the easier charts become to generate, the more likely it is that numbers get passed around without anyone being clear on what they mean. If "revenue" includes returns or tax in one place and not in another, the same metric name can lead to different decisions. That is why the definitions need as much design attention as the display.

A realistic place to start is with five key KPIs. For each, you can write up a dictionary entry covering the formula, data source, update frequency, owner, and what happens once a decision is made. Asking the same questions of an existing report and of the AI will then show where totals, periods, or exclusion criteria drift apart.

Source: [Now everyone can put data to work](https://openai.com/index/put-data-to-work/) (OpenAI, September 10, 2026)

## 3. Enterprise AI expands to include industry data and the format of deliverables

September 10 also brought ChatGPT for Financial Services. Designed with input from Morgan Stanley and Evercore, it combines financial data, an ecosystem of more than 50 connectors, and the creation of internal documents, spreadsheets, and presentations. The announcement describes role-based access control, retention settings, export of activity logs, and information barriers using multiple workspaces. It is offered to eligible financial institutions, and getting access means contacting the sales team.

What this suggests is that general answering ability alone does not decide the value of industry-specific AI. It only becomes easy to fit into everyday work once trusted sources, business judgment, the format of deliverables, and approval and auditing all link up. Having built-in data and connectors is a separate matter from your organization holding the rights it needs to use them, though, and the two are worth checking separately.

To try this out, you could take one research task and map its input materials, reference data, output templates, approvers, and audit trail onto a service blueprint. During the prototype, it helps to watch whether figures can be traced back to their sources, whether editing effort goes down, and whether information beyond the user's permissions slips in.

Source: [Introducing ChatGPT for Financial Services](https://openai.com/index/introducing-chatgpt-financial-services/) (OpenAI, September 10, 2026)

## 4. In voice UX, silence and interruptions are part of the design

On the voice side, OpenAI announced API availability for GPT-Live-1 on September 10. The company says it handles listening and speaking at the same time and copes with interruptions, background noise, long sessions, and integration with tools. Speak, which took part in early evaluation, reported about 80% fewer interruptions that cut off learners' thinking compared with its previous turn-based system. This is an evaluation of a specific use case presented by the provider, and there is no guarantee of the same effect elsewhere, for example in phone support in Japanese.

Whether a voice experience is easy to use can't be judged only by whether speech is transcribed correctly. Can the system wait while someone thinks? Does a correction partway through get picked up? Can it explain why something is taking a while? These are what decide whether a conversation keeps going. Part of the design, too, is offering text or a human for people who find it hard to communicate by voice alone.

One way to test this is to pick a single booking flow and run it through scenarios with silence, rephrasing, overlapping speech, and noise. Measuring mistaken interruptions, requests to repeat, the success rate of corrections, and time to completion gives a clearer picture. Going on to check that switching to text input or to a person actually works will also tell you whether the design leans too heavily on voice alone.

Source: [Build more natural voice experiences with GPT‑Live‑1 in the API](https://openai.com/index/introducing-gpt-live-1-in-the-api/) (OpenAI, September 10, 2026)

## 5. In image generation, the ability to keep revising matters more than a single output

For images, OpenAI announced ChatGPT Images 2.5 on September 8. It is better at preserving people and objects from reference images, staying consistent across multiple rounds of editing, and taking comments on images and instructions given through sketches, and the company says generation wait times are up to 50% shorter than the previous generation. The rollout to each plan was announced from the same day, and an API model was introduced as well. The company says it will keep using C2PA metadata and invisible watermarks. The performance figures are the provider's own claims, and none of this means rights clearance is taken care of.

In practice, the first image matters less than how reliably you can revise it, say by swapping only the background while keeping the product's shape, or adjusting colors without disturbing the composition. Faster generation is welcome, but it is just as worth looking at how much effort goes into fixing other parts that break with each revision.

Taking one use, such as ad creative, deciding what should change and what should stay, and then editing three times will show the difference quickly. Along the way, you can record how often revisions succeed, any unintended changes, and how long people spend reviewing. Permission to use the reference materials and how the provenance of published work is managed deserve a check too.

Source: [Introducing ChatGPT Images 2.5](https://openai.com/index/introducing-chatgpt-images-2-5/) (OpenAI, September 8, 2026)

## 6. For actions on external services, evaluate the impact, not just the goal

Finally, a report on the impact on an external service. On September 11, RubyGems explained how it had responded to the spam package publishing in May of that year. It said it removed more than 500 malicious packages and temporarily suspended new registrations. Researchers claim the activity was carried out by an OpenAI agent, but RubyGems states that it cannot determine whether AI created or published the packages. It also says it found no evidence that code intended to obtain other users' API keys succeeded. Note that September is when the explanation was published; the incident itself occurred in May.

Even with the actor still unconfirmed, mass posting to an external service puts a burden on maintainers and affects how the service runs. Seen that way, an agent's success criteria should cover more than finishing the requested task. They should also ask whether it is putting unacceptable load on third parties.

For prototypes with external integrations, separating read and write permissions and capping destinations and the number of executions is a sensible baseline. On a test service, you can then check that the agent stops at the limit, that operations are logged, and that the person in charge gets notified. With an approval step in place before anything is written to production, a person has the chance to catch a problem before it puts load on anyone outside.

Source: [An update on the May spam-publishing campaign on rubygems.org](https://blog.rubygems.org/2026/09/11/update-may-spam-publishing-campaign.html) (RubyGems, September 11, 2026)

## Priority actions for this week

1. It is worth turning one task into a blueprint that connects data to deliverables and approval. Getting clear on the information used and who is responsible before implementation saves rework later.
2. Evaluating agents on a limited task is a realistic way in. Comparing success rate, cost, time to completion, and number of interventions shows whether adopting a platform is worth it.
3. Before going to production, it helps to test the boundaries of what AI can execute: external destinations, write permissions, execution limits, logs, stopping, and handoff to a person.
