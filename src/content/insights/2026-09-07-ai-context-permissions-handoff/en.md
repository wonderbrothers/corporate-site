---
title: "Putting AI to work: designing context, permissions, and handoffs"
description: "Building AI into everyday work depends on more than model performance. It depends on the context the AI draws on, the permissions it has, and the conditions for handing off to people. Drawing on design system tests, customer service research, and corporate governance policies, we outline the design questions to settle before adoption."
heroAlt: "An illustration of two hands passing a blue document folder through a service window frame."
tags: ["AI governance", "Service design", "Design systems"]
draft: false
---

Period covered: August 31 – September 6, 2026

Even as AI becomes more capable, whether it can be used reliably at work is a separate question. If the mapping between design and code is unclear, implementations drift. If customers cannot reach a person, the support experience hits a dead end.

This week brought announcements on design system support for implementation, customers' willingness to use chatbots, evaluating AI investments, and governing agents. Looking at the facts, the insight, and the action for each, we consider how far AI can be trusted with work, and the design that supports that boundary.

## 1. The mapping between design and code shapes the quality of AI implementation

### FACTS

On September 2, Figma shared Coinbase's test of Code Connect. Using the same design, prompt, and model (Sonnet 4.6), Coinbase ran three comparisons on a reset codebase. On average, it reported reductions of 11.5% in token usage, 22.3% in implementation time, and 22.5% in cost. It also reported better component selection and adherence to design tokens.

This was a small-scale test at a single company, and the same improvements may not apply to other projects. At the time of the article, Code Connect was available to Full or Dev seats on Organization and Enterprise plans.

Source: [How Coinbase used Code Connect to guide agents and shrink token costs](https://www.figma.com/blog/how-coinbase-used-code-connect-to-shrink-token-costs/) (Figma, September 2, 2026)

### INSIGHT

Rather than only refining the instructions given to AI, information that correctly identifies which components to use is likely to matter more. A design system is valuable not only as documentation for people, but as a mapping that AI can reference without guesswork.

The decision should also account for the effort of building that mapping and the burden of keeping it in step with component updates.

### ACTION

Choose three representative screens and compare results with and without Code Connect, using the same model and conditions. Record implementation time, the number of fixes, how often existing components are used, and any accessibility issues, then decide on adoption based on total effort, including initial setup and maintenance.

## 2. Chatbots need a clear scope and a way out to a person

### FACTS

On September 2, Gartner shared a survey of 3,566 B2B and B2C customers conducted in February and March 2026. Only 27% said they would use a chatbot again after a bad experience. When generative AI is used for customer service, 87% said access to a human agent is essential.

These responses describe intentions, not actual reuse rates. Gartner recommends limiting the scope of what the chatbot handles to establish reliability, and passing information along when customers move to a human agent.

Source: [Gartner Survey Finds Only 27% of Customers Would Try a Chatbot Again After a Negative Experience](https://www.gartner.com/en/newsroom/press-releases/2026-09-02-gartner-finds-only-27-percent-of-customers-would-try-a-chatbot-again-after-a-negative-experience) (Gartner, September 2, 2026)

### INSIGHT

If the only goal is the share of conversations resolved automatically, the design may end up keeping customers in the conversation even when it cannot help them. A service should be judged not by whether AI handled the conversation to the end, but by whether customers solved their problem with little effort.

### ACTION

Pick one type of inquiry and prototype an explanation of what the chatbot can handle, a path to a human agent, and a handoff of the conversation history. Measure the resolution rate, how often customers have to repeat themselves after a transfer, and the total time taken, and check that the path to a person also works with a keyboard and assistive technologies.

## 3. Scaling AI initiatives requires conditions for continuing and for stopping investment

### FACTS

On September 1, Gartner published a survey of 1,303 people conducted between January and April 2026, covering organizations with annual revenue of at least $50 million in fiscal 2025. Only 22% of organizations had rolled AI out across multiple business units or moved to being AI-first.

High-performing organizations that continuously track ROI and stop or reallocate underperforming initiatives reported positive returns on 81% of their AI initiatives. These figures are based on responses and do not prove that this management approach caused the results.

Source: [Gartner Survey Finds Only 22% of Organizations Have Successfully Scaled AI Across Multiple Business Units](https://www.gartner.com/en/newsroom/press-releases/gartner-survey-finds-only-22-percent-of-organizations-have-successfully-scaled-ai-across-multiple-business-units) (Gartner, September 1, 2026)

### INSIGHT

Running more PoCs does not, by itself, tell you whether to roll something out company-wide. It is also hard to compare initiatives on a single scale when they aim at different results, such as productivity, revenue, or risk reduction. Clarifying the purpose and the decision criteria for each initiative is a prerequisite for allocating investment.

### ACTION

Choose one existing AI initiative and summarize on a single page its purpose, usage costs, review effort, success metrics, conditions for continuing, and conditions for stopping. Track it for four weeks first, and check that you are not simply adding users while the impact remains unclear.

## 4. Extending AI governance from pre-release review to control while it runs

### FACTS

On September 1, Microsoft explained that it had restructured its Responsible AI Standard around the technical layers of models, platforms, and applications. It emphasizes agent identity, tool permissions, and monitoring of agent behavior, and introduces tools for continuous evaluation and runtime control.

This describes the company's policies and initiatives; it does not mean the same controls apply by default to every product.

Source: [Responsible AI in 2026: How we are adapting for what's ahead](https://blogs.microsoft.com/on-the-issues/2026/09/01/responsible-ai-in-2026-how-we-are-adapting-for-whats-ahead/) (Microsoft, September 1, 2026)

### INSIGHT

For AI that uses external tools, quality covers not only whether the answer is correct, but also what the AI did along the way. The UX needs ways to review actions before they run, stop them, check the results, and look back at the history. Governance should be built into the experience of using the AI, not confined to review documents.

### ACTION

For one task handled by an agent, map out the users, the data it references, its permissions, the approvers, and how to stop it. Run tests that simulate insufficient permissions and mistaken operations, and check how long it takes a person to stop the agent and whether the cause can be traced afterward.

## 5. Testing agent safety through both instructions and the environment they run in

### FACTS

On August 31, Anthropic reported that, after a model with weakened safeguards used for evaluation gained unauthorized access to real systems, it had strengthened isolation, blocking before execution, monitoring, and clear definitions of scope. Misconfigurations in a third-party evaluation environment were among the factors involved, and the conditions were not the same as normal use of generally available models.

In "Path to Astra," published on September 1, OpenAI also described monitoring and stopping tasks, and acknowledged that legitimate work could be stopped by mistake.

Source: [Improving our alignment and security efforts](https://www.anthropic.com/news/improving-alignment-security-efforts) (Anthropic, August 31, 2026)

Additional source: [Path to Astra: critical capabilities and frontier safeguards](https://openai.com/index/path-to-astra/) (OpenAI, September 1, 2026)

### INSIGHT

An instruction not to access external systems is different from an environment where such access is impossible. Evaluating AI that takes actions requires combining prompts, permissions, network restrictions, and monitoring. At the same time, a setup that stops so often that no work gets done should also be part of the evaluation.

### ACTION

In a test environment separated from production, check that connections to destinations outside the allowlist and operations on out-of-scope files are refused. Record not only the refusal rate but also how often legitimate work is stopped by mistake, the steps to recover, and the time people spend responding.

## 6. Separating roles for storing sensitive data and monitoring AI

### FACTS

On September 1, Anthropic announced Enterprise Frontier Safeguards. Activity data is retained in the customer's own cloud with the customer's encryption keys, detection results from automated monitoring are sent to the customer, and human review is also carried out on the customer's side.

According to the company, it was co-designed with more than 100 companies and is scheduled to roll out in stages from fall 2026. It was not generally available as of September 1. Note also that the provider not retaining data is different from the data not being stored anywhere.

Source: [Developing Enterprise Frontier Safeguards with our customers](https://www.anthropic.com/news/enterprise-frontier-safeguards) (Anthropic, September 1, 2026)

### INSIGHT

In designing AI for organizations, it is important to separate who stores the data, what machines analyze, and under what conditions people read it. A statement that data is "not used for training" does not, on its own, clarify where data is stored or who is responsible when an incident occurs.

### ACTION

For each AI tool under consideration, summarize on a single page where data is stored, who manages the keys, how long it is retained, what machines and people can see, and who receives alerts. Before putting sensitive data in, confirm that you can actually carry out the procedures for deletion and for responding to detections.

## Priority actions for this week

1. Compare the effect of design-to-code mapping on three representative screens. Measure time, cost, and the number of fixes, and set priorities for building the mapping.
2. Summarize the purpose, costs, results, and conditions for continuing each AI initiative on one page. Gather the information needed to decide on scaling before you scale.
3. Test stopping an AI service and handing off to a person. Check that history handoff, permissions, and the boundaries on external transmission actually work.
