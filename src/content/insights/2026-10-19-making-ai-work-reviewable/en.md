---
title: "Making work built with AI something the whole team can judge"
description: "We look at Figma's new features for sharing code and specs, Mistral's acquisition of a design firm, and Anthropic's approach to third-party evaluation, and sort out the practical decisions and small experiments that turn the speed of building with AI into comparison, agreement, and verification."
heroAlt: "An illustration of three panels held out from three sides, overlapping so their openings line up in a circle at the center."
tags: ["AI-assisted development", "Design organizations", "AI governance"]
draft: false
---

Period covered: October 12–18, 2026

AI has made prototypes easier to build, but that does not mean a team can share why it chose a particular option, or the conditions under which it is ready to implement. This week's changes at Figma bring working code and specifications back into the shared workspace. Mistral's approach to building its organization also shows the role design plays in connecting models to real products and workflows.

Anthropic, for its part, spelled out how far third-party evaluators can access internal information and what they are allowed to publish. Building products and evaluating safety may look like separate topics, but both come down to how you give other people the material they need to make a judgment. For each of this week's four developments, we describe what we could confirm, what we read from it, and what you can try in your own work.

## 1. A shared place to compare working prototypes side by side

On October 15, Figma began rolling out the open beta of code layers to all plans. You can place prototypes that run on code directly on the canvas, duplicate them to try alternatives, and review them side by side. What can be imported from GitHub or a local environment is a supported, lightweight codebase for prototyping, not an arbitrary large production system. Edits can be sent to a branch and reviewed through a pull request. The feature uses AI credits, but on paid plans, creating and editing are free until November 4, 2026. In a Merkle case study shared by Figma, iteration and feature development were 30% faster and documentation work fell by 50%, though this is a customer story published by the provider rather than evidence of a general effect or of cause and effect.

What stands out here is not how fast things can be generated, but how easy it becomes to compare them. When you are working on an input form, for example, static images alone cannot fully show how easily people recover from mistakes or how keyboard operation differs. If several options run in the same place, people other than designers can base the discussion on what actually happens when they use them. Even so, a working prototype is no substitute for quality assurance. A prototype can look and behave correctly while permissions on real data, screen reader support, exception handling, and the conditions for running in production still need to be checked separately.

One way to try this is to prepare two versions of a single input flow and compare them on the same task. Record the time to completion, input errors, how easily people recover, and whether the task can be completed with a keyboard alone, and keep a note of why you chose the option you did. Looking at whether the total time, including review and revisions, went down, rather than production time alone, tells you whether the tool is worth continuing to use.

Source: [Design together with code layers on the canvas](https://www.figma.com/blog/design-together-with-code-layers/) / [Build by design: New workflows for new ways of building](https://www.figma.com/blog/build-by-design/) (Figma, both October 15, 2026)

## 2. Turning specs into a shared record of decisions for people and AI

Also on October 15, Figma announced that it was rolling out the open beta of Specs on web, desktop, and mobile, for all paid plans. You can bring Markdown onto the canvas and collaboratively edit specifications that reference screens, diagrams, code layers, and more. Agents can also read and write comments, and through the Figma MCP server, specifications and the related screens, diagrams, and Code Connect information can be passed to coding agents. The company described an example from its own development, in which an engineer gathered principles for edge cases and flow diagrams into a spec and handed it to AI along with colleagues' comments. This is an example of how the tool is used, not an experiment comparing reductions in bugs.

Having the spec next to the screens does not by itself keep its contents correct. What makes the difference is a practice of separating what has been decided, what is being tested, and what is still open. If AI treats a proposal as an approved spec, bringing all the information together can end up spreading mistaken implementations instead. Seen this way, a spec works better as a record of where decisions stand than as a finished document. For a checkout flow, for instance, linking the screen descriptions to what happens when payment fails, which conditions are still unconfirmed, and who approves each part makes it clear what needs to be checked at implementation time.

A practical first step is to take one feature in progress and summarize its purpose, decisions made, edge cases, open questions, and approvers on a single page, with links to the related screens. Recording the number of reworks caused by misreading the spec and the time it takes to update the spec, before and after asking AI to implement, makes the effect visible. If proposals still under test keep slipping into the decided items, it is time to revisit the approval process before rolling the tool out further.

Source: [Introducing Specs: Markdown as a medium](https://www.figma.com/blog/introducing-figma-specs/) / [Build by design: New workflows for new ways of building](https://www.figma.com/blog/build-by-design/) (Figma, both October 15, 2026)

## 3. Mistral brings in a design firm to build products with its customers

New Material announced that it had been acquired by Mistral, and Mistral welcomed the team on its official account. The deal was also reported by Dealroom on October 15. The new Solutions Design team will work across design, engineering, and AI, building products and workflows together with customers. The stated aim is a loop in which what is learned from deploying with customers flows back into Mistral's products. The purchase price was reported as undisclosed, and the announcement concerns the organization and its direction; it does not show that deployment results have improved.

This one acquisition is not enough to say where the whole industry is heading. Still, it is worth noting as a case of an AI company bringing the ability to turn models into products inside its own organization. There is still a gap between explaining what a model can do and turning it into work that people can do comfortably on the ground. For design and engineering leaders, it is a prompt to rethink how roles are divided. In a setup where research ends once findings are handed over as specifications, the exceptions and review burden discovered after deployment rarely make their way back into the next round of development. There may be room for someone whose job is to connect observing the work, prototyping, implementation, and evaluation after launch.

If you have a workflow where AI is being introduced, it is worth setting up a 30-minute weekly review with people from the front line, design, and engineering, for just two weeks. Bring together the moments when people gave up on the tool, the reasons they went back to doing things by hand, and the time spent on checks, and fix one thing each time. Watching whether rework and review burden go down, not just how often the tool is used, gives you what you need to decide whether to keep the setup.

Source: [New Material joins Mistral to design the frontier](https://newmaterial.ai/) (New Material; the official site shows only "October 2026") / [Mistral's official post](https://fr.linkedin.com/company/mistralai) (Mistral, LinkedIn) / [Mistral buys design agency New Material to build enterprise AI team](https://dealroom.co/news/162811-mistral-buys-design-agency-new-material-to-build-enterprise-ai-team/) (Dealroom, October 15, 2026)

## 4. Third-party evaluation: who sees how much, and what they can publish

On October 15, Anthropic announced that it had begun giving six people from the independent evaluator METR access close to that of its internal risk assessment staff. This includes equipment, workspace, and access to internal tools and systems, with exceptions such as customer data, attorney-client privileged information, and model architecture. METR can publish its analysis, and Anthropic has no right to block publication. Anthropic can, however, request the removal of predefined categories of information, and it makes the final call on whether something falls into those categories. METR can also publish a certain amount of explanation about the information and access it received. These conditions were added on October 16. Collaboration with other evaluators includes tiers with more limited access and publication rights, and the start of an evaluation arrangement should not be read as obtaining a safety certification.

Building on the voluntary accord from a few weeks earlier, what outside evaluators can see has now become concrete. If procurement only checks that a vendor has "third-party evaluation," there is no way to compare how strong that evaluation is. An evaluator limited to the public API and one who can review incident records and internal safety measures will find different problems. Nor does an evaluation of a foundation model guarantee the safety of your own workflows or permission settings. Vendor evaluations and acceptance testing of the service you have built yourself need to be considered separately.

A good place to start is to take one candidate vendor and use its public materials to sort out who evaluated it, which model and at what point in time, the scope of access, publication rights, and what remains undisclosed. Rather than marking unclear items as confirmed, keep them as questions to ask. Then add mistaken operations, requests outside permitted scope, and behavior after stopping to your own testing, and decide who signs off on pass or fail, so that the acceptance stage goes smoothly.

Source: [An update on independent evaluators](https://www.anthropic.com/news/an-update-on-independent-evaluators) (Anthropic, October 15, 2026; updated October 16)

## Priority actions for this week

1. **Try separating what is decided from what is still open in a single spec.** Adding more generation and automation on top of vague assumptions only adds checks and rework. Getting the information in order first is the shortest path.
2. **Try comparing two versions of a single interaction.** Measuring time to completion, mistakes, keyboard operation, and review effort with working prototypes shows whether faster production actually led to better decisions and quality.
3. **Check the scope of third-party evaluation with one vendor.** Looking into what evaluators can see and what they can publish lets you separate out the acceptance testing you still need to do yourself, so that "evaluated" does not stand in for "approved."
