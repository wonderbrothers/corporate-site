---
title: "From individual time savings to organizational results: rethinking the impact of AI"
description: "Faster individual work does not automatically lead to better organizational results. Drawing on five developments from this week, from workflow redesign to quality control in development and design system upkeep, we outline how to check whether AI is really paying off, and what to try next."
heroAlt: "An abstract composition in which separate circles and rectangles come together into a single connected structure."
tags: ["AI adoption", "Workflow design", "Design systems"]
draft: false
---

Period covered: October 5–11, 2026

With AI, we can now produce documents, screens, and code in a fraction of the time. But faster individual tasks are not the same as delivering service improvements or business results sooner. If reviews and approvals create waiting time, or if the amount of checking grows, efficiency gains in production alone will not deliver the full benefit.

This week brought several developments about building AI into how organizations actually work: redesigning workflows, controlling quality in AI-assisted development, maintaining design systems, and learning across roles. An announcement about AI that splits work between the device and the cloud also raises design questions about how information is handled and how users give consent.

We look at each development from three angles: the facts we can confirm, the insight we draw from them, and an action you can try in your own work.

## 1. Turning individual productivity gains into results for the whole workflow

### FACTS

In an article published on October 5, McKinsey cited its 2026 survey on AI. While 80% of respondents reported that AI had improved individual productivity, 37% reported a positive impact on EBIT (earnings before interest and taxes).

About three-quarters of the organizations McKinsey classified as high performers said they had significantly redesigned their workflows, compared with about a quarter of other organizations.

These results are based on what respondents reported. They show an association between workflow redesign and higher performance, but they do not prove that redesign alone produced the results. Note also that October 5 is the article's publication date, not the date the survey was conducted.

Source: McKinsey  
[AI is changing work. Now it has to change the organization](https://www.mckinsey.com/capabilities/people-and-organization/our-insights/ai-is-changing-work-now-it-has-to-change-the-organization) (October 5, 2026)

### INSIGHT

What these results raise is the question of what we measure when we evaluate AI adoption. Beyond how many hours an individual saves, we need to look at how the work changes across the steps that follow.

For example, even if screen design takes half the time, the time to release may barely change if specification reviews still take several days and misunderstandings only surface after implementation. This is a hypothetical example, but it shows why production speed and the speed of the whole workflow should be considered separately.

Design and DX are not only about screens. They also cover how work itself is designed: who checks what, what information decisions are based on, and what is handed to the next person.

### ACTION

Pick one feature improvement and lay out every step from planning to release. For each step, record the working time, the waiting time, and any rework.

Then choose the single point that creates the longest wait, and make a small change to the review materials or the approval process. Compare before and after: did the number of days to release go down, and did rework or problems for users stay the same or decrease?

## 2. In AI-assisted development, the question is how generated code reaches release

### FACTS

On October 6, GitLab announced the foundation for what it calls the "Governed Software Factory," which connects everything from planning to production release in line with an organization's policies and standards.

The announcement includes agent capabilities that connect work between stages, artifact management, controls for problematic dependency packages, and analytics for understanding the costs and results of AI.

Availability varies. GitLab Artifact Central, for artifact management, is in beta on GitLab.com, with the Self-Managed version planned for later in the month. Duo Agent Platform Impact Analytics is in early access. GitLab Security Standard, a benchmark for evaluating security measures, was described as available at the time of the announcement.

Source: GitLab  
[GitLab Announces the Foundation for the Governed Software Factory](https://about.gitlab.com/press/releases/2026-10-06-gitlab-announces-the-foundation-for-the-governed-software-factory/) (October 6, 2026)

### INSIGHT

As AI increases the amount of code being written, the work needed for review, testing, and approval grows too. Automating only the coding step can simply shift the burden of checking to later stages.

This announcement points toward treating everything from generation to release as one continuous process. Even so, adopting a tool does not set the quality standards for each product.

From a UX perspective, release decisions should cover more than whether things work. They should also ask whether users can recover when something fails, whether anyone is left unable to use the product, and whether users understand what to do next.

### ACTION

Choose one feature that will be built with AI, and write down its acceptance criteria before work begins. For a form, for example, include input errors, network failures, duplicate submissions, keyboard operation, and focus movement.

Link each change to its test results and approver, and record review time, the number of rejections, and bugs found after release. If generation gets faster but the checking burden grows, revisit how much you automate.

## 3. AI that splits work between device and cloud changes how information and permissions are designed

### FACTS

On October 7, Microsoft announced "Hybrid Intelligence" for Windows, which combines on-device and cloud AI. Beyond routing processing according to the task, it outlines a vision for referencing information on the device and carrying out actions.

Related features for the GitHub Copilot app, the CLI, and Visual Studio Code are planned as experimental previews later in October. Related features for Copilot+ PCs are expected to start rolling out over the coming months. Availability and timing vary by device, market, and hardware, and as of October 7 the features were not generally available.

Source: Microsoft  
[Building Windows for hybrid intelligence](https://blogs.windows.com/windowsexperience/2026/10/07/building-windows-for-hybrid-intelligence/) (October 7, 2026)

### INSIGHT

When choosing AI for business use, where each piece of information is processed becomes a deciding factor alongside the quality of the answers. Organizations need to sort out, task by task, which information should stay on the device and which can be sent to the cloud.

This affects UX as well. Allowing an AI to read a file is not the same as agreeing to send its contents elsewhere or to let the AI modify it.

Rather than folding everything into a single "Allow AI" setting, it is important to design an experience that helps people understand reading, sending, and acting as separate things.

### ACTION

Choose one AI feature that works with files, and list the information it reads, the information it sends externally, and the actions it performs.

Prototype a screen that shows this, and ask intended users to explain what they have allowed, where their information goes, and how to stop an action. Fix anything they cannot explain, and check that people can still get their work done without granting the permission.

## 4. Concrete ways to build AI into design system upkeep

### FACTS

On October 6, Figma published an approach to maintaining design systems with its agent. It covers drafting specifications, standardizing naming, checking how design tokens are used, and swapping in existing components.

Examples include Uber, which used it to write component descriptions and color specifications, and Granola, which mapped components in imported screens to its existing design system. Both are case studies presented by Figma, not independent comparative studies of typical time savings.

At the time of the article, the feature was mainly available to Full seats on eligible plans, with limited availability on the Starter plan and use within drafts for Collab, Dev, and View seats, among other conditions.

Source: Figma  
[How to lighten design system upkeep with the Figma agent](https://www.figma.com/blog/figma-agent-and-design-systems/) (October 6, 2026)

### INSIGHT

A design system is never finished once the components are in place. Specifications need updating as the product changes, exceptions need judgment calls, and gaps between design and implementation need fixing on an ongoing basis.

The value of AI in maintenance lies in finding inconsistencies people tend to overlook and narrowing down where human judgment is needed. At the same time, components that look alike may serve different purposes or behave differently. Standardizing everything mechanically is not the answer.

Being able to explain what to standardize, which exceptions to keep, and why is likely to make automating maintenance easier as well.

### ACTION

Duplicate three representative screens and check how they map to existing components, where colors and spacing are hard-coded, and where naming is inconsistent. At first, do not apply fixes automatically; have a person review what was detected.

Record the number of detections, false positives, misses, and the time spent reviewing and fixing. After replacing components, also check states and contrast, and decide whether visual consistency and usability are both intact.

## 5. Learning AI: from how to use it to how to judge the results

### FACTS

On October 10, Figma shared how Figma, Sephora, Mercari, and Atlassian approach learning about AI.

At Figma, small learning groups were formed around the skills people were interested in, practicing for one hour a week over six weeks. Sephora shifted from presentations focused on finished work to a format that also shares the process, including what went wrong. At Mercari, designers learn the basics of development, and developers learn design fundamentals such as visual hierarchy.

The article reports on each company's practices; it is not a study comparing which training methods work best. October 10 is the article's publication date.

Source: Figma  
[4 team rituals that drive AI adoption](https://www.figma.com/blog/4-team-rituals-that-drive-ai-adoption/) (October 10, 2026)

### INSIGHT

AI makes it easier to produce work outside one's specialty, but it does not automatically bring the knowledge needed to judge its quality.

For instance, a designer may be able to build a working screen, yet checking maintainability and access control still requires development knowledge. When a developer generates a UI, someone still needs to examine information hierarchy and whether users will understand it. These are examples meant to illustrate how roles are expanding.

In team learning, it matters to share not only how to use the tools, but also what counts as good and at what point a specialist should review the work.

### ACTION

Set aside 15 minutes of a regular meeting for someone in a different role to review a piece of work made with AI. Share not only the finished result, but also the first output, the problems found, and how it was revised, one step at a time.

Check whether the next person can reproduce the same approach and spot the same problems sooner. Rather than counting participants or presentations, keep the reusable criteria for judgment as the outcome of the learning.

## Priority actions for this week

1. **Record the working time and waiting time for one task.**  
   Start by understanding the current state. Without knowing how things were before, you cannot tell whether AI produced results or simply moved the burden to someone else.
2. **Set acceptance criteria before building a feature with AI.**  
   Beyond working correctly, cover recovery from failure, permissions, accessibility, and who is responsible for checking. This preparation reduces rework just before release.
3. **Try a design system audit on three existing screens.**  
   Keep the scope small, and measure detection accuracy and the time people spend reviewing. Check not only how fast new work gets made, but whether the maintenance burden goes down.
