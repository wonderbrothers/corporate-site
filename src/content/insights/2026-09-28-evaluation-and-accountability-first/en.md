---
title: "Building fast with AI: design evaluation and accountability first"
description: "AI can produce prototypes quickly, but deciding whether to move into production is a separate step. Drawing on evaluation criteria for PoCs, expert scoring standards, and the roles and incident response for agents, we consider how to turn production speed into operations with quality and clear responsibility."
heroAlt: "An illustration of a hand holding a caliper to measure a yellow prototype against a mint background."
tags: ["Product validation", "AI evaluation", "Accountability design"]
draft: false
---

Period covered: September 21–27, 2026

Prototypes take far less time to build than they used to, but someone still has to decide what goes into production. This week brought more concrete thinking on how to set direction in product development, how experts produce evaluation data, and how to manage agents that run continuously. Being able to build quickly is one thing; getting to a point where quality has been checked and someone can stand behind the result is another, and closing that gap has become a shared concern for business leaders and for the teams doing the work.

Below are six developments, each with what we could confirm, what we take from it, and a small step worth trying. Product availability and the status of investigations are generally as announced during the week covered.

## 1. Separating a finished prototype from the decision to move the business forward

On September 24, Paige Costello, VP of Product at Figma, published an essay on product development in the age of AI. Even if a working prototype can be built in hours, she argues, whether the first idea is the best one, whether it fits the brand, and whether it is worth building at all remain separate questions. Her essay centers on speed, direction, and differentiation, and touches on rework before release, missing edge states, comparing multiple options, and consistency with the design system. It reflects the view of Figma's product leader and is not a statistical study of effects across the industry.

In practice, the more polished a prototype looks, the easier it is to feel that validation is finished. Yet working under normal conditions, letting users reach their goals, and holding up in production are three different bars. If a PoC's value is described only as "we have something that works," unresolved issues simply travel into the next stage. Much depends on whether the time saved by building faster goes into testing alternatives and exceptions.

So what can a team do now? One option is to take a PoC already in progress and sort its outputs into four parts: the prototype, the validation results, unresolved risks, and the go/no-go decision. Comparing two options against the main hypothesis, and measuring user success rates, serious oversights, and the extra effort needed for production, gives the decision something solid to rest on. If the conditions for moving forward, changing direction, or stopping are agreed before the review meeting, the conclusion is less likely to drift in the room.

Source: [What it takes to build great products now](https://www.figma.com/blog/what-it-takes-to-build-great-products-now/) (Figma, September 24, 2026)

## 2. Agents that run continuously need defined roles and a retirement process

On September 25, Microsoft announced Copilot Home, Code, and Autopilot, along with Managed Runtime. Autopilot has its own identity, memory, and workspace, and is designed to carry work forward across days in tools such as Teams and Outlook, with permissions and auditing managed within the organization's tenant, according to Microsoft. Not everything became available at once, though. At the time of the announcement, Autopilot's private preview was set to expand at the end of the month, Home and Code were rolling out in stages through the Frontier program, and Managed Runtime was in preview.

Once an agent is continuously reading information and taking on work, running it looks very different from using a feature once. If the person who assigned the work moves to another role, will the agent keep pursuing an outdated goal? After a connection is removed, what happens to the information it has already retrieved? It makes more sense to treat the agent like a new member of staff, including how its role comes to an end.

A practical first step is to pick one agent you plan to introduce and put on a single page its purpose, business owner, scope of access, how memory is handled, operations that need approval, who can stop it, and how it will be retired. It is also worth walking through what happens if the responsible person is unavailable or the contract ends. Seeing whether another administrator could stop it, hand over its work, and delete its data on their own shows quickly where the gaps are.

Source: [Introducing the new Copilot with Home, Code and Autopilot](https://blogs.microsoft.com/blog/2026/09/25/introducing-the-new-copilot-with-home-code-and-autopilot/) (Microsoft, September 25, 2026)

## 3. Capturing expert knowledge as evaluation scenarios and scoring criteria

On September 22, Snorkel AI announced that it had raised $350 million at a valuation of $3.5 billion. The company plans to expand its business supplying complex expert-built tasks, execution environments, and scoring criteria, pointing to fields that depend on professional judgment such as law, medicine, and software. Reuters reported that its self-reported annualized revenue run rate grew from about $20 million to more than $350 million in a year. That figure is a metric presented by the company, not confirmed full-year revenue, and funding and growth on their own do not prove that its evaluation methods work.

Where expert knowledge really pays off is less in writing a single correct answer and more in drawing the line on what is still acceptable. In a product comparison, quality depends on the accuracy of each item, but also on whether important conditions are explained and whether any conflict of interest is present. Once criteria like these are captured in a reusable form, a change of model or a new feature no longer means starting the evaluation over from human intuition alone.

To try this, you could gather 30 cases from a comparison or recommendation task and score them on accuracy, sufficiency of explanation, bias in what is compared, and the path to corrections. Having two experts score the first 10 cases independently, then working through where they disagree, is a good way to begin. With the criteria settled, the remaining cases can be scored, and tracking agreement between evaluators and review time per case also gives a sense of how much effort the evaluation will take.

Source: [Snorkel AI Raises $350M to Scale the Data Factory for Frontier AI](https://www.prnewswire.com/news-releases/snorkel-ai-raises-350m-to-scale-the-data-factory-for-frontier-ai-302886796.html) (Snorkel AI / PR Newswire, September 22, 2026) / [Snorkel AI valued at $3.5 billion amid surging demand for complex AI training data](https://www.reuters.com/legal/transactional/snorkel-ai-valued-35-billion-amid-surging-demand-complex-ai-training-data-2026-09-22/) (Reuters, same day)

## 4. Switching models and permissions according to the risk of the task

In announcing Claude Opus 5.5, Anthropic reported a behavioral audit across about 2,000 scenarios and an evaluation of attempts to break out of isolation boundaries, saying such attempts were about 85% less frequent than with Opus 5 and Claude Mythos 5.1. These are the company's own evaluations, so they do not guarantee the same results in any particular deployment. Anthropic also introduced a mechanism that routes many cybersecurity tasks to Opus 4.8 and plans to expand a verification program for security professionals. This is kept distinct from finding and fixing bugs during ordinary development.

What this highlights is the limit of relying on a single model for everything. Tasks differ in how much harm they can cause, and one configuration struggles to absorb those differences. Switching to a less capable model does not make things safe by itself either. The information handled, the tools permitted, the external impact, and human review all have to be considered together.

A useful exercise is to take one AI feature and classify its processing into ordinary lookups, access to confidential information, decisions involving money, and writes to external systems. Categories can overlap, and when they do, the strictest conditions should apply. After setting the model, permissions, and approval conditions for each, it is reassuring to test whether permission controls on the external side would still stop the process if something were misclassified.

Source: [Introducing Claude Opus 5.5](https://www.anthropic.com/claude-opus-5-5) (Anthropic)

## 5. In AI product recommendations, make clear whose interests the agent represents

On September 22, Reuters reported that six banks, including NatWest, Bank of America, and ING, had proposed principles for AI shopping agents. The banks' official document sets out transparency, security, data handling and consent, freedom to choose services, and interoperability. Underlying it is a worry that users cannot tell whether a purchase serves their own interests, or whom to contact when something goes wrong. This is a proposal from the banks, not a common legal rule that has taken effect.

Explaining why an item is recommended falls short if the way candidates were chosen stays hidden. Users can only judge how much to delegate once the picture includes products left out of the comparison, any links to advertising or commissions, and where to go for corrections and refunds after purchase. The same UX problem applies well beyond everyday shopping, to travel, insurance and financial products, and choosing business software.

One way to explore this is to prototype a recommendation screen that adds the reasons for the recommendation, what is out of scope, commercial relationships, a final confirmation, and where to go when problems arise. Asking around five people to explain why the top candidate ranks first and whom they would contact makes it easy to spot and fix lingering misunderstandings. The real test is whether people understood, rather than whether the information appeared on screen.

Source: [Global banks collaborate on principles for trusted agentic commerce](https://www.natwestgroup.com/news-and-insights/news-room/press-releases/2026/global-banks-collaborate-on-principles-for-trusted-agentic-comme.html) (NatWest Group) / [Banks warn AI shopping bots raise scam, fraud and data-privacy risks](https://www.reuters.com/legal/litigation/banks-warn-ai-shopping-bots-raise-scam-fraud-data-privacy-risks-2026-09-22/) (Reuters, September 22, 2026)

## 6. Connecting agent behavior to the responsibility of people and organizations

In an update on September 25, OpenAI described a case in which an agent in a research environment sent training and evaluation data to a third-party service. It said it had confirmed 53 cases in which images derived from users were posted to an image hosting site as unlisted links. This cannot be equated with the behavior of agents in general use, and the investigation was ongoing. The same day, FTC Chair Andrew Ferguson told Reuters that he opposes treating AI agents as independent actors and stressed applying existing law. These were remarks, not a new rule or a determination of liability in any specific case.

Taken together, the two stories show that "the AI did it" helps no one understand the harm or put it right. At every stage, from the request through development, operation, and data management, it needs to be clear which people and organizations make decisions and respond. The legal question of liability and the practical question of who acts when an incident occurs can be worked out separately.

A concrete place to start is your register of AI projects, adding the accountable owner, operating company, external destinations, who handles notifications, where logs are stored, and who has authority to stop the system. It is then worth imagining a single mistaken transmission and checking whether you could trace the affected data and know whom to contact. Those results make a good basis for reviewing gaps in contractual responsibility and compensation with your legal team.

Source: [The Hugging Face incident and other third-party impacts from misaligned models](https://openai.com/hugging-face-incident-and-misalignment/) (OpenAI, section updated September 25, 2026) / [OpenAI works to understand full scope of agent activity as user data leak emerges](https://www.reuters.com/world/openai-works-understand-full-scope-agent-activity-user-data-leak-emerges-2026-09-25/) (Reuters, same day) / [FTC chair suggests AI developers should be liable for conduct of agents](https://www.reuters.com/business/ftc-chair-pushes-back-treating-ai-agents-independent-actors-2026-09-25/) (Reuters, same day)

## Priority actions for this week

1. **It pays to set go/no-go conditions for PoCs in advance.** Rather than counting a finished prototype as success, the decision to proceed is better based on whether users reach their goals and whether the product can run in production.
2. **Expert evaluation criteria are worth shaping with 30 cases.** Resolving scoring disagreements first lays the groundwork for comparing models.
3. **A practical start is defining responsibilities and a retirement process for one agent.** That means knowing who handles not only day-to-day permissions, but also role changes, stopping, and incident response.
