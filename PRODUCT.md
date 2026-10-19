# VomerLabs

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- Potential clients evaluating help with software development or improving a process.
- Developers, founders, and other builders following projects and technical writing.

## Product Purpose

A professional home for an independent studio building software, exploring practical uses for AI, and sharing what is learned. Visitors should understand what VomerLabs does, inspect real work, and find a way to get in touch. The owner should be able to publish projects and notes without rebuilding layouts.

## Positioning

Personal, practical work and clear explanations take priority over broad AI claims. Explain the problem and what a project does before its technical details. Distinguish live work, prototypes, experiments, and work in progress honestly.

## Operating Context

The owner writes Markdown or MDX in the repository and publishes through a static build. The website proposal in `vomerlabs-website-proposal.txt` is the supplied project brief. The foundation is implemented; the current design pass establishes the homepage before expanding to other pages.

## Capabilities and Constraints

- Astro, strict TypeScript, plain CSS, and schema-validated content collections.
- Planned pages: Home, Projects, project details, Lab Notes, note details, About, Contact, and 404.
- Featured projects support the homepage. Draft lab notes stay unpublished.
- Component styles are scoped wherever possible. Global CSS is limited to shared tokens and document defaults.
- Use static output and minimal client-side JavaScript. No CMS, database, accounts, or general-purpose backend in the first release.
- Start contact with a direct email link; add a form only with a configured submission method and working fallback.
- The contact email is `hi@vomerlabs.com`, supplied by the owner. The VomerLabs website itself is the first project and is currently in progress.
- A verified production URL, hosting provider, additional projects, and an author biography are not yet supplied.
- Analytics and forms are not configured. Add a privacy notice if later features collect personal information.

## Brand Commitments

VomerLabs. “Ideas into useful things.” The voice is curious, practical, clear, independent, and thoughtful. Preserve the proposal's calm, minimal, editorial direction when designing the pages; concrete visual decisions belong to the later design pass.

## Evidence on Hand

The proposal supplies the studio description, goals, and content requirements. The owner has approved using this website as the first project and supplied `hi@vomerlabs.com`. The implemented Astro foundation is evidence of that project. No other projects, articles, client results, testimonials, or personal biography have been supplied. Do not fabricate them or publish example content as real work.

## Product Principles

- Show useful work and explain it clearly.
- Make claims only when supported by real evidence.
- Keep publishing separate from page presentation.
- Prefer a fast, accessible, maintainable foundation over unnecessary tools.
- Leave room for future services and products without implementing them early.

## Accessibility & Inclusion

Use semantic HTML, sensible headings, keyboard navigation, visible focus states, adequate text contrast, image alternatives, and reduced-motion support. Basic navigation and reading must work without client-side JavaScript. Support mobile through large desktop screens without horizontal page overflow.
