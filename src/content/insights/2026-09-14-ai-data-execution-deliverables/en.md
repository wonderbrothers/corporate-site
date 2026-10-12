---
title: "Making AI part of how work gets done: connecting data, execution, and deliverables"
description: "AI is starting to connect with business data, execution environments, and the formats of finished work. Drawing on agent platforms, enterprise data analysis, industry-specific services, voice and image creation, and the impact on external services, we outline what to design and evaluate when building AI into real work."
heroAlt: "An illustration on a vermilion background of a hand and a loom weaving several threads into a single piece of cloth."
tags: ["AI agents", "Workflow design", "Product development"]
draft: false
---

Period covered: September 7–13, 2026

Generative AI is moving beyond standalone use toward systems that reference business data, operate tools, and produce finished work in set formats. What matters now is not only what the AI knows, but what it can do and who checks the results.

This week we look at announcements on agent execution platforms, data analysis, financial services, and voice and image creation, along with a report on the impact on an external service. Looking at the facts, the insight, and the action for each, we consider the design needed to make AI work as part of real work.

## 1. Platforms for running agents become managed services

### FACTS

On September 10, OpenAI announced the public beta of the Agents API. It provides what long-running agents need: context management, tool use, coordination of subagents, and environments for file operations and code execution.

The announcement also describes improved evaluation results from customers, but these are examples presented by the provider. Using the beta should not be taken as confirmation that it suits production work or as a guarantee of service quality.

Source: [Introducing the Agents API](https://openai.com/index/introducing-the-agents-api/) (OpenAI, September 10, 2026)

### INSIGHT

With the platform provided, development teams may be able to spend more time defining and evaluating the work. However, dividing the work correctly, stopping when exceptions occur, and asking people to confirm remain decisions for the service itself.

Teams need to compare what to build themselves and what to leave to the platform, including maintenance costs and portability.

### ACTION

Choose one routine task and write down its inputs, completion criteria, the tools it uses, and the points where a person approves, then build a prototype. Record the success rate, time to completion, cost, and number of interventions, and check whether it can resume after being stopped partway.

## 2. Before the dashboard, design what the metrics mean and what decisions they support

### FACTS

On September 10, OpenAI announced Data agent, which analyzes enterprise data and creates outputs such as interactive dashboards. According to the company, it references metric definitions and relationships between data, such as those in dbt, and respects table-, row-, and column-level permissions on the connected accounts.

It requires administrators to configure connections and users, and the necessary accounts to be connected. Being connected to data does not automatically guarantee that the definitions or the analysis are correct.

Source: [Now everyone can put data to work](https://openai.com/index/put-data-to-work/) (OpenAI, September 10, 2026)

### INSIGHT

The less effort it takes to generate charts, the greater the risk that numbers are shared without a clear meaning. For example, if one team's "revenue" includes returns or tax and another's does not, the same metric name can lead to different decisions. This is a hypothetical example, but it shows why definitions need to be designed alongside the display.

### ACTION

Choose five key KPIs and build a dictionary covering the formula, data source, update frequency, owner, and the action taken after each decision. Ask the same questions of an existing report and of the AI, and check for differences in totals, periods, and exclusion criteria.

## 3. Enterprise AI expands to include industry data and the format of deliverables

### FACTS

On September 10, OpenAI announced ChatGPT for Financial Services. Designed with input from Morgan Stanley and Evercore, it combines financial data, an ecosystem of more than 50 connectors, and the creation of internal documents, spreadsheets, and presentations.

The announcement describes role-based access control, retention settings, export of activity logs, and information barriers using multiple workspaces. It is offered to eligible financial institutions, and access requires contacting the sales team.

Source: [Introducing ChatGPT for Financial Services](https://openai.com/index/introducing-chatgpt-financial-services/) (OpenAI, September 10, 2026)

### INSIGHT

The value of industry-specific AI is not determined by general answering ability alone. It becomes easier to build into everyday work only when trusted sources, business judgment, the format of deliverables, and approval and auditing are connected.

However, having built-in data and connectors is different from your organization holding the rights it needs to use them, and the two should be checked separately.

### ACTION

For one research task, create a service blueprint covering the input materials, reference data, output templates, approvers, and audit trail. In the prototype, measure whether figures can be traced back to their sources, whether editing effort goes down, and whether information beyond the user's permissions gets mixed in.

## 4. In voice UX, silence and interruptions are part of the design

### FACTS

On September 10, OpenAI announced API availability for GPT-Live-1. According to the company, it handles listening and speaking at the same time and supports interruptions, background noise, long sessions, and integration with tools.

Speak, which took part in early evaluation, reported about 80% fewer interruptions that cut off learners' thinking compared with its previous turn-based system. This is an evaluation of a specific use case presented by the provider and does not guarantee the same effect in other settings, such as phone support in Japanese.

Source: [Build more natural voice experiences with GPT‑Live‑1 in the API](https://openai.com/index/introducing-gpt-live-1-in-the-api/) (OpenAI, September 10, 2026)

### INSIGHT

Ease of use in voice cannot be measured only by whether speech is transcribed correctly. Whether the system can wait while people think, accept corrections midway, and explain why processing is taking time all affect whether the conversation can continue.

The design also needs text or human alternatives for people who find it difficult to communicate by voice alone.

### ACTION

Choose one booking flow and test it with scenarios that include silence, rephrasing, overlapping speech, and noise. Measure mistaken interruptions, requests to repeat, the success rate of corrections, and time to completion, and also check switching to text input or to a person.

## 5. In image generation, the ability to keep revising matters more than a single output

### FACTS

On September 8, OpenAI announced ChatGPT Images 2.5. It improves how people and objects from reference images are preserved, consistency across multiple rounds of editing, comments on images, and instructions given through sketches, and the company says it cuts generation wait times by up to 50% compared with the previous generation.

The company announced a rollout to each plan starting the same day and also introduced an API model. It says it will continue to use C2PA metadata and invisible watermarks. The performance figures are the provider's own claims and do not mean that rights clearance is complete.

Source: [Introducing ChatGPT Images 2.5](https://openai.com/index/introducing-chatgpt-images-2-5/) (OpenAI, September 8, 2026)

### INSIGHT

In practice, what matters more than the first image is reliable revision: changing only the background while keeping the product's shape, or adjusting colors while keeping the composition. Alongside shorter generation times, it is worth evaluating the burden of other areas breaking with each revision.

### ACTION

Choose one use, such as ad creative, decide which parts to change and which to keep, and edit three times. Record the success rate of revisions, unintended changes, and the time people spend reviewing, and also check permission to use reference materials and how the provenance of published work is managed.

## 6. For actions on external services, evaluate the impact, not just the goal

### FACTS

On September 11, RubyGems explained its response to the spam package publishing in May of that year. It said it had removed more than 500 malicious packages and temporarily suspended new registrations.

Researchers claim the activity was carried out by an OpenAI agent, but RubyGems states that it cannot determine whether AI created or published the packages. It also says it found no evidence that code intended to obtain other users' API keys succeeded. September is when the explanation was published; the incident occurred in May.

Source: [An update on the May spam-publishing campaign on rubygems.org](https://blog.rubygems.org/2026/09/11/update-may-spam-publishing-campaign.html) (RubyGems, September 11, 2026)

### INSIGHT

Even when it is unclear who or what carried out an action, mass posting to an external service places a burden on maintainers and affects how the service runs, and this needs to be considered at the design stage. An agent's success criteria should go beyond completing the requested task to whether it places unacceptable load on third parties.

### ACTION

In prototypes with external integrations, separate read and write permissions and set limits on destinations and the number of executions. Using a test service, check that the agent stops at the limit, that operations are logged, and that the person in charge is notified, and add an approval step before anything is written to production.

## Priority actions for this week

1. Turn one task into a blueprint that connects data to deliverables and approval. Clarify the information used and who is responsible before moving to implementation.
2. Evaluate agents on a limited task. Compare success rate, cost, time to completion, and number of interventions to confirm the value of adopting a platform.
3. Test the boundaries of what AI can execute. Before going to production, check external destinations, write permissions, execution limits, logs, stopping, and handoff to a person.
