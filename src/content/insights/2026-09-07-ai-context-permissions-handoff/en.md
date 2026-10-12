---
title: "Putting AI to work: designing context, permissions, and handoffs"
description: "Building AI into everyday work depends on more than model performance. It depends on the context the AI draws on, the permissions it has, and the conditions for handing off to people. Drawing on design system tests, customer service research, and corporate governance policies, we outline the design questions to settle before adoption."
heroAlt: "An illustration of two hands passing a blue document folder through a service window frame."
tags: ["AI governance", "Service design", "Design systems"]
draft: false
---

Period covered: August 31 – September 6, 2026

AI keeps getting more capable, but whether it holds up in day-to-day work is another matter. When the link between design and code is unclear, implementations drift, and when customers have no way to reach a person, support simply runs into a wall.

This week brought news on design systems that support implementation, customers' willingness to use chatbots, how AI investments are evaluated, and how agents are governed. We go through each announcement in turn, looking at what was said, what it suggests, and what teams might try, with an eye to how much work AI can be trusted with and what kind of design makes that possible.

## 1. The mapping between design and code shapes the quality of AI implementation

On September 2, Figma shared the results of Coinbase's test of Code Connect. Coinbase used the same design, prompt, and model (Sonnet 4.6) and ran three comparisons on a reset codebase. On average, it reported 11.5% lower token usage, 22.3% less implementation time, and 22.5% lower cost, along with better component selection and closer adherence to design tokens. This was a small test at a single company, though, so other projects may not see the same gains. At the time of the article, Code Connect was available to Full or Dev seats on Organization and Enterprise plans.

What the results point to is that giving AI information that pins down the right components may do more than polishing the instructions alone. A design system then serves two readers: people who consult it as documentation, and AI that can look things up in it without guessing. Building that mapping takes effort, of course, and so does keeping it current as components change, so those costs belong in the picture too.

One way to try this is to pick three representative screens and build them with and without Code Connect, keeping the model and conditions the same. If you track implementation time, the number of fixes, how often existing components are reused, and any accessibility issues, you can weigh adoption against the total effort, setup and maintenance included.

Source: [How Coinbase used Code Connect to guide agents and shrink token costs](https://www.figma.com/blog/how-coinbase-used-code-connect-to-shrink-token-costs/) (Figma, September 2, 2026)

## 2. Chatbots need a clear scope and a way out to a person

On September 2, Gartner shared a survey of 3,566 B2B and B2C customers conducted in February and March 2026. Only 27% said they would use a chatbot again after a bad experience, and 87% said that when generative AI is used for customer service, access to a human agent is essential. These answers reflect what people say they would do, not actual reuse rates. Gartner recommends keeping the chatbot's scope narrow enough to establish reliability and passing information along when customers move to a human agent.

The risk is that a team focused only on the share of conversations resolved automatically may end up designing a chatbot that holds on to customers it can't help. A better measure of the service is whether customers solved their problem with little effort, rather than whether the AI saw the conversation through to the end.

A practical starting point is to choose a single type of inquiry and prototype three things for it: an explanation of what the chatbot can handle, a path to a human agent, and a handoff of the conversation history. Alongside the resolution rate, how often customers repeat themselves after a transfer, and the total time taken, it is worth checking that the path to a person works with a keyboard and assistive technologies as well.

Source: [Gartner Survey Finds Only 27% of Customers Would Try a Chatbot Again After a Negative Experience](https://www.gartner.com/en/newsroom/press-releases/2026-09-02-gartner-finds-only-27-percent-of-customers-would-try-a-chatbot-again-after-a-negative-experience) (Gartner, September 2, 2026)

## 3. Scaling AI initiatives requires conditions for continuing and for stopping investment

On September 1, Gartner published a survey of 1,303 people conducted between January and April 2026, covering organizations with annual revenue of at least $50 million in fiscal 2025. Only 22% of these organizations had rolled AI out across multiple business units or moved to being AI-first. High performers that track ROI continuously and stop or reallocate underperforming initiatives reported positive returns on 81% of their AI initiatives. The figures come from survey responses, however, and do not prove that this way of managing initiatives caused the results.

Seen this way, simply running more PoCs won't tell you whether something is ready for a company-wide rollout. When initiatives aim at different outcomes, such as productivity, revenue, or risk reduction, comparing them on one scale also becomes difficult. Before deciding where the money goes, each initiative needs a clear purpose and clear criteria for the decision.

As a first step, you might take one AI initiative already under way and put its purpose, usage costs, review effort, success metrics, and conditions for continuing and for stopping on a single page. Keeping a record for four weeks makes it easier to see whether the user count is growing while the impact remains unclear.

Source: [Gartner Survey Finds Only 22% of Organizations Have Successfully Scaled AI Across Multiple Business Units](https://www.gartner.com/en/newsroom/press-releases/gartner-survey-finds-only-22-percent-of-organizations-have-successfully-scaled-ai-across-multiple-business-units) (Gartner, September 1, 2026)

## 4. Extending AI governance from pre-release review to control while it runs

On September 1, Microsoft explained that it had restructured its Responsible AI Standard around the technical layers of models, platforms, and applications. The standard puts weight on agent identity, tool permissions, and monitoring of agent behavior, and Microsoft also introduced tools for continuous evaluation and runtime control. This is a description of the company's own policies and initiatives, and it does not mean every product gets the same controls by default.

Once AI uses external tools, quality includes what it did along the way, not just whether the final answer is right. That has consequences for UX: people need ways to review an action before it runs, stop it, check the result, and look back through the history. Governance, in other words, works best when it is part of using the AI rather than something kept in review documents.

To make this concrete, a team could take one task handled by an agent and map out who uses it, what data it draws on, what it is allowed to do, who approves its actions, and how it can be stopped. Tests that simulate missing permissions or mistaken operations then show how long it takes a person to stop the agent and whether the cause can be traced afterward.

Source: [Responsible AI in 2026: How we are adapting for what's ahead](https://blogs.microsoft.com/on-the-issues/2026/09/01/responsible-ai-in-2026-how-we-are-adapting-for-whats-ahead/) (Microsoft, September 1, 2026)

## 5. Testing agent safety through both instructions and the environment they run in

On August 31, Anthropic reported that a model with weakened safeguards, used for evaluation, had gained unauthorized access to real systems, and that it had since strengthened isolation, blocking before execution, monitoring, and clear definitions of scope. Misconfigurations in a third-party evaluation environment were among the factors involved, so the conditions differed from normal use of generally available models. In "Path to Astra," published on September 1, OpenAI likewise described monitoring and stopping tasks, and acknowledged that legitimate work could be stopped by mistake.

Taken together, the two announcements show that telling an AI not to access external systems is one thing and running it where it can't is another. Evaluating AI that takes actions means looking at prompts, permissions, network restrictions, and monitoring together. A setup that stops so often that no work gets done is a problem of its own, though, and deserves a place in the evaluation as well.

A sensible way to check is to use a test environment separated from production and see whether connections outside the allowlist and operations on out-of-scope files are refused. Recording how often legitimate work is stopped by mistake, how recovery works, and how much time people spend responding, in addition to the refusal rate, gives a clearer sense of whether the setup will hold up in practice.

Source: [Improving our alignment and security efforts](https://www.anthropic.com/news/improving-alignment-security-efforts) (Anthropic, August 31, 2026)

Additional source: [Path to Astra: critical capabilities and frontier safeguards](https://openai.com/index/path-to-astra/) (OpenAI, September 1, 2026)

## 6. Separating roles for storing sensitive data and monitoring AI

On September 1, Anthropic announced Enterprise Frontier Safeguards. Activity data is kept in the customer's own cloud under the customer's encryption keys, detection results from automated monitoring go to the customer, and human review also happens on the customer's side. According to Anthropic, it was co-designed with more than 100 companies and will roll out in stages from fall 2026, so it was not generally available as of September 1. Keep in mind, too, that a provider not retaining data is different from the data not being stored anywhere.

When an organization designs its use of AI, it helps to treat three questions separately: who stores the data, how much of it machines analyze, and under what conditions people read it. Saying that data is "not used for training" leaves open both where it is stored and who is responsible if something goes wrong.

For any AI tool under consideration, it can be useful to write down on one page where data is stored, who manages the keys, how long data is kept, what machines and people can each see, and who receives alerts. Confirming that the procedures for deletion and for responding to detections can actually be carried out, before any sensitive data goes in, saves a scramble later.

Source: [Developing Enterprise Frontier Safeguards with our customers](https://www.anthropic.com/news/enterprise-frontier-safeguards) (Anthropic, September 1, 2026)

## Priority actions for this week

1. Building three representative screens with and without design-to-code mapping is a good first test. Measuring time, cost, and the number of fixes makes it easier to decide what to map first.
2. Putting the purpose, costs, results, and conditions for continuing each AI initiative on one page means the information needed to decide on scaling is in hand before you scale.
3. It is worth trying out what happens when an AI service is stopped and handed off to a person, which shows whether history handoff, permissions, and the limits on sending data externally actually work.
