---
title: "Deciding what to hand to AI by the effort of checking and the criteria for judging"
description: "We look at a study of UX practitioners, a method for refining evaluation criteria with concrete examples, Figma's prototype-to-code connection, and the availability terms for an enterprise agent, and sort out what to delegate and how to verify it, starting from the checking and correction work that AI does not necessarily make lighter."
heroAlt: "An illustration on a green background of a navy hand sliding one side of an ivory frame to adjust its size around a red shape."
tags: ["AI evaluation", "Product validation", "AI governance"]
draft: false
---

Period covered: November 2–8, 2026

As the options for using AI in making things and running work multiply, the job of checking the results changes too. How much effort goes into adding to instructions? How do you share a standard of "good" that differs from person to person? How far do you need to check the behavior of a prototype, or the permissions of an agent that keeps running? This week's developments offered material for making those decisions concrete.

Measuring the benefit of adoption by generation speed alone risks overlooking the burden that has shifted to checking and rework. Looking at the making and the checking together helps in both product development and workflow design.

## 1. Adding AI does not necessarily make UX improvement work lighter

A paper listed in the official BritCHI program on November 2 compared how 30 UX practitioners, split into three groups of ten, created evaluation guidelines for an in-car system. Every group used AI to create the first draft, and the work then split into "AI feedback with AI revisions," "expert feedback with manual revisions," and "expert feedback with AI revisions." There were no significant differences between groups in overall workload, trust, or technology acceptance, but on one subscale, mental demand was higher for the group that used AI to apply expert feedback than for the group that applied it by hand.

That said, this result does not show that AI is unsuited to revision work. It was a small experiment using a single in-car concept and a locally run Llama 3 8B, and the quality of the final output was not independently evaluated. Even so, the point that translating expert comments into instructions for AI, then rechecking the revisions that come back, can become a burden for the people involved is a practical one. Subjective workload and the actual time taken also need to be considered separately.

A realistic first step is to pick one set of existing UX review items and compare applying the same comments by hand with having AI apply them. It is worth recording not just the time spent waiting for generation but also the time spent writing instructions, checking, and revising again, and having someone else assess what was missed or changed incorrectly. Comparing the work as a whole shows where the line falls between revisions that are easy to hand to AI and those better made directly by a person.

Source: [Appropriate Automation in AI-Assisted Usability Heuristic Generation: Comparing Human-AI Collaborative Workflows](https://www.britchi.uk/proceedings/7018.pdf) (BritCHI 2026 proceedings, listed in the [official session program](https://www.britchi.uk/programme/schedule/paper-session-1-ai-expertise-and-changing-practice/) for November 2, 2026)

## 2. Refining vague evaluation criteria with examples at the boundary

On November 4, Google Research introduced "Agile Deliberation." The post explains research already presented at CVPR 2026; these are not new findings published this week. For concepts where judgments tend to vary, such as "healthy food," the method has people define what is included and excluded, review borderline images that AI surfaces, and improve both the classification criteria and the prompt. The study covered two domains across 18 sessions of 1.5 hours each, and the authors report improvements in consistency of judgment and performance compared with other methods.

What is useful here is the approach of adjusting the criteria themselves using examples where judgments split, rather than simply making vague instructions longer. In design, too, phrases like "on brand" or "not misleading" mean different things to different people, even when everyone thinks they agree. The research addresses a limited image-classification task and does not by itself guarantee the same benefit for design reviews, but there is room to apply it as a way of observing where opinions differ.

For a criterion like "not misleading" in advertising, for example, you could start by preparing ten examples likely to split opinion and having several people judge them independently. It is worth feeding the reasons for disagreement back into the criterion, then checking whether people agree on examples that were not used in the discussion. Whatever disagreement remains helps separate cases where the instructions to AI were insufficient from judgments that people themselves have not yet agreed on.

Source: [Agile Deliberation: How AI helps humans define the gray areas](https://research.google/blog/agile-deliberation-how-ai-helps-humans-define-the-gray-areas/) (Google Research, November 4, 2026)

## 3. Figma's prototype connections become context for code generation

On November 3, Figma announced an update in which agents read prototype connections and interactions when creating a code layer from a design frame. Code layers remain in open beta. The change means that how screens connect to one another, and not just how they look, can be passed into code generation; the announcement does not promise production quality or quantified savings in implementation time.

This widens the possibility that behavior defined in a prototype carries over into a prototype people can actually operate. At the same time, branches that are missing from the original design will not necessarily be filled in correctly. In a prototype that only connects the usual path to completion, movements that happen all the time in real use, such as canceling, input errors, and going back to the previous screen, can easily slip out of testing.

To try it on a small scale, one approach is to pick an existing sign-up flow, explicitly connect both the usual path and the exception paths, and then create a code layer. Alongside how faithfully the expected transitions are reproduced and how long fixes take, it is worth comparing whether the flow can be completed with a keyboard alone and whether focus is lost after an error. Measuring visual similarity and behavioral fidelity separately makes it clear which design information needs to be added before moving on to implementation.

Source: [Your prototype connections, now context for code layers](https://www.figma.com/release-notes/) (Figma Release Notes, November 3, 2026)

## 4. For always-on agents, read general availability and the conditions for use separately

On November 4, OpenAI announced the general availability of Dots, which keep working on tasks between conversations, in eligible ChatGPT Enterprise, Edu, and Healthcare workspaces. The admin preview runs until November 18; during that time, owners and admins can either enable it or opt out before it becomes available by default. Workspaces configured with UAE data or inference residency are excluded.

Admins can control which members have access, review Dots and what they connect to, pause and resume them, and check usage and admin actions. Owners can also delete them. New Dots support data residency and Enterprise Key Management, and inference residency is supported in the EU and the US. In eligible environments, Dots created before general availability must also be migrated to the required region within 30 days of launch. Beyond the label "generally available," the start date, migration of existing data, and admin permissions all need to be read together.

When deciding whether to adopt it, it is worth narrowing the scope to a small set of tasks and connections before November 18, and trying pausing a running Dot, revoking its connection permissions, and resuming it. Treating "future processing stops" and "changes already made are reversed" as separate requirements, and recording what you were able to confirm, is a useful practice. Comparing the results of a stop with the activity history shows what is missing from your explanations to users and your incident response procedures.

Source: [Dots for Enterprise, Edu, and Healthcare](https://openai.com/products/release-notes/) (OpenAI Release Notes, November 4, 2026)

## Priority actions for this week

1. **Sort out scope and permissions, starting with features that have a deadline for activation.** For workspaces eligible for Dots, a realistic start is to decide by November 18 who will use it, what it connects to, and who is responsible for stopping it. That lets you check the operating conditions on a small scale before it becomes available by default.
2. **Try measuring the burden from generation through checking and revision for one production step.** Taking something like revisions after a UX review and comparing total time and quality against doing it directly by hand keeps you from judging the benefit by generation speed alone.
3. **Keep examples where judgments split as a team evaluation asset.** Turning vague quality criteria and the exception paths in prototypes into concrete examples, and checking whether judgments and behavior hold up on examples not yet used, builds criteria you can reuse in the next prototype.
