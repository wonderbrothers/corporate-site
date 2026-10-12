---
title: "From individual time savings to organizational results: rethinking the impact of AI"
description: "Faster individual work does not automatically lead to better organizational results. Drawing on five developments from this week, from workflow redesign to quality control in development and design system upkeep, we outline how to check whether AI is really paying off, and what to try next."
heroAlt: "An illustration of two hands fitting a red block into the gap in the middle of a bridge to connect both sides."
tags: ["AI adoption", "Workflow design", "Design systems"]
draft: false
---

Period covered: October 5–11, 2026

AI now lets us produce documents, screens, and code in a fraction of the time. Yet faster individual tasks do not necessarily mean that service improvements or business results arrive any sooner. If reviews and approvals add waiting time, or the amount of checking grows, the time saved in production simply gets used up further down the line.

This week brought several developments about fitting AI into how organizations actually work, including workflow redesign, quality control in AI-assisted development, design system maintenance, and learning across roles. An announcement about AI that splits work between the device and the cloud also raises questions about how information is handled and how users give consent.

For each topic, we look at what was announced, what it suggests, and what you might try in your own work.

## 1. Turning individual productivity gains into results for the whole workflow

In an article published on October 5, McKinsey cited its 2026 survey on AI. While 80% of respondents reported that AI had improved individual productivity, 37% reported a positive impact on EBIT (earnings before interest and taxes). And about three-quarters of the organizations McKinsey classified as high performers said they had significantly redesigned their workflows, compared with about a quarter of other organizations.

These figures are based on what respondents reported. They show an association between workflow redesign and higher performance, but they do not prove that redesign alone produced the results. October 5 is also the article's publication date, not when the survey was conducted.

The gap between 80% and 37% is a good reason to rethink how AI adoption is measured. Hours saved by an individual tell only part of the story; what matters is how the work changes across the steps that follow. Say screen design now takes half the time. If specification reviews still take several days and misunderstandings only surface after implementation, the time to release may barely move. Production speed and the speed of the whole workflow are worth tracking separately.

Seen this way, design and DX cover more than screens. They also include how the work itself flows: who checks what, which information decisions rest on, and what gets handed to the next person.

A practical first step is to pick one feature improvement, lay out every step from planning to release, and note the working time, waiting time, and rework for each. From there, you can choose the point that causes the longest wait and make a small change to the review materials or the approval process. Comparing the days to release before and after, and checking that rework and user problems have not increased, shows you where a change actually pays off.

Source: McKinsey  
[AI is changing work. Now it has to change the organization](https://www.mckinsey.com/capabilities/people-and-organization/our-insights/ai-is-changing-work-now-it-has-to-change-the-organization) (October 5, 2026)

## 2. In AI-assisted development, the question is how generated code reaches release

On October 6, GitLab announced the foundation for what it calls the "Governed Software Factory," which connects everything from planning to production release in line with an organization's policies and standards. It includes agent capabilities that connect work between stages, artifact management, controls for problematic dependency packages, and analytics for understanding the costs and results of AI.

Availability varies by feature. GitLab Artifact Central, for artifact management, is in beta on GitLab.com, with the Self-Managed version planned for later in the month. Duo Agent Platform Impact Analytics is in early access, and GitLab Security Standard, a benchmark for evaluating security measures, was described as available at the time of the announcement.

As AI increases the amount of code being written, the work of reviewing, testing, and approving it grows as well. Automate only the coding step, and the burden of checking may simply move further down the pipeline. GitLab's announcement points toward treating generation through release as one continuous process. Adopting a tool, though, will not set the quality standards for each product on its own.

From a UX point of view, release decisions should cover more than whether things work. It also helps to ask whether users can recover when something fails, whether anyone is left unable to use the product, and whether people know what to do next.

If you want to try this, a realistic place to start is a single feature that will be built with AI, with its acceptance criteria written down before work begins. For a form, that might mean input errors, network failures, duplicate submissions, keyboard operation, and focus movement. Linking each change to its test results and approver, and keeping track of review time, rejections, and bugs found after release, will show whether the checking burden is growing. If generation has sped up but the burden has grown, that is a sign to revisit how much you automate.

Source: GitLab  
[GitLab Announces the Foundation for the Governed Software Factory](https://about.gitlab.com/press/releases/2026-10-06-gitlab-announces-the-foundation-for-the-governed-software-factory/) (October 6, 2026)

## 3. AI that splits work between device and cloud changes how information and permissions are designed

On October 7, Microsoft announced "Hybrid Intelligence" for Windows, which combines on-device and cloud AI. Besides routing processing according to the task, it outlines a vision for referencing information on the device and carrying out actions.

Related features for the GitHub Copilot app, the CLI, and Visual Studio Code are planned as experimental previews later in October, and related features for Copilot+ PCs are expected to start rolling out over the coming months. Availability and timing vary by device, market, and hardware, and as of October 7 the features were not generally available.

As this approach spreads, where each piece of information gets processed will weigh on business AI choices as much as the quality of the answers. Organizations will likely need to sort out, task by task, which information should stay on the device and which can go to the cloud.

The user experience is affected too. Letting an AI read a file is different from agreeing to send its contents elsewhere or letting the AI modify it. A single "Allow AI" setting hides that difference, so the design challenge is to help people understand reading, sending, and acting as separate things.

One way in is to take an AI feature that works with files and list what it reads, what it sends externally, and what actions it performs. A prototype screen that shows this can then be tested by asking intended users to explain what they have allowed, where their information goes, and how to stop an action. Whatever they struggle to explain is what needs fixing, and it is worth checking that people can still get their work done without granting the permission.

Source: Microsoft  
[Building Windows for hybrid intelligence](https://blogs.windows.com/windowsexperience/2026/10/07/building-windows-for-hybrid-intelligence/) (October 7, 2026)

## 4. Concrete ways to build AI into design system upkeep

On October 6, Figma published an approach to maintaining design systems with its agent, covering specification drafts, consistent naming, checks on design token usage, and swapping in existing components. Its examples include Uber, which used it to write component descriptions and color specifications, and Granola, which mapped components in imported screens to its existing design system. Both are case studies presented by Figma, not independent comparative studies of typical time savings.

There are conditions on access. At the time of the article, the feature was mainly available to Full seats on eligible plans, with limited availability on the Starter plan and use within drafts for Collab, Dev, and View seats.

A design system is never finished once the components are in place. Specifications have to keep pace with the product, exceptions need judgment calls, and gaps between design and implementation keep needing attention. AI is most useful here for finding inconsistencies people tend to miss and narrowing down where human judgment is needed. Still, components that look alike may serve different purposes or behave differently, so mechanically standardizing everything would be a mistake. Being able to explain what to standardize, which exceptions to keep, and why should also make maintenance easier to automate.

An easy starting point is to duplicate three representative screens and check how they map to existing components, where colors and spacing are hard-coded, and where naming is inconsistent. Holding off on automatic fixes at first, and having a person review what was detected, keeps the process safe. If you record detections, false positives, misses, and the time spent reviewing and fixing, then check states and contrast after replacing components, you will have what you need to judge whether visual consistency and usability both hold up.

Source: Figma  
[How to lighten design system upkeep with the Figma agent](https://www.figma.com/blog/figma-agent-and-design-systems/) (October 6, 2026)

## 5. Learning AI: from how to use it to how to judge the results

On October 10, Figma shared how Figma, Sephora, Mercari, and Atlassian approach learning about AI. At Figma, small groups formed around the skills people wanted to build and practiced for one hour a week over six weeks. Sephora moved from presentations focused on finished work to a format that also shares the process, including what went wrong. At Mercari, designers learn the basics of development, and developers learn design fundamentals such as visual hierarchy. The article reports on each company's practices and is not a study comparing training methods. October 10 is the article's publication date.

AI makes it easier to produce work outside your specialty, but the knowledge needed to judge that work does not come along automatically. A designer may be able to build a working screen, yet checking maintainability and access control still takes development knowledge. And when a developer generates a UI, someone still has to look at information hierarchy and whether users will understand it.

So when a team learns together, sharing how to use the tools is only half of it. The other half is agreeing on what counts as good and at what point a specialist should take a look.

A simple way to start is to set aside 15 minutes of a regular meeting for someone in a different role to review a piece of AI-made work. Walking through the first output, the problems found, and how it was revised, step by step and not just the finished result, makes it possible to see whether the next person can reproduce the approach and catch the same problems sooner. Alongside counting participants or presentations, keeping the reusable criteria for judgment as an outcome of the learning gives the next round something to build on.

Source: Figma  
[4 team rituals that drive AI adoption](https://www.figma.com/blog/4-team-rituals-that-drive-ai-adoption/) (October 10, 2026)

## Priority actions for this week

1. **Start by recording the working time and waiting time for one task.**  
   Understanding the current state comes first. Without knowing how things were before, there is no way to tell whether AI produced results or simply moved the burden to someone else.
2. **Settle the acceptance criteria before building a feature with AI.**  
   Beyond working correctly, it helps to cover recovery from failure, permissions, accessibility, and who is responsible for checking. Doing this early cuts down on rework just before release.
3. **Try a design system audit on three existing screens.**  
   Keeping the scope small makes it easier to measure detection accuracy and the time people spend reviewing. You will see not only how fast new work gets made, but whether the maintenance burden actually goes down.
