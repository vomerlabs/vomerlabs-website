---
title: A small, deliberate starting point
description: "How this site was built: static pages, markdown files, a quiet look, and room to grow."
publishedAt: 2026-11-18
tags: [Build Notes, Website, Decisions]
relatedProjects: [vomerlabs-website]
---

VomerLabs needed a home for its work. The first version is a place for projects, a notebook for what I learn, and a short introduction to the lab. I kept it small so it can grow as there is more to share.

## Static pages are enough

The website needs to introduce the lab, explain projects, and publish writing. None of that requires heavy javascript framework like Next.JS, a database, or a CMS. So I decided to use Astro, in which I mostly use when building static websites. Astro is built specifically for creating fast, content-driven websites such as blogs, documentation, and landing pages.

## Content uses Markdown

Projects and lab notes are written in Markdown or MDX. Every project needs a title, a description, an honest status, a category, and a publication date. Every note needs a title, a description, and a publication date.

A new project or note starts as a file. Example below:

### A project file

```yaml
---
title: A useful tool
description: What it does and who it helps.
status: in-progress
category: Software
publishedAt: 2026-11-18
tags: [Astro]
---
This is a project md file
```

### A note file

```yaml
---
title: A useful discovery
description: What changed, and why it matters.
publishedAt: 2026-11-18
draft: true
tags: [Build notes]
relatedProjects: [a-useful-tool]
---
This is a note md file
```

The filename becomes the entry’s ID and URL. A note can stay unpublished with `draft: true`. Remove the flag when the note is ready, and it appears on the index and gets its article page. Projects have no draft flag, so unfinished project material stays outside the collection until there is something to show. A note can point to its project with `relatedProjects`; the value is the project’s file name.

## Design language

I wanted the site to feel like a working index of the lab’s projects and notes. The palette is warm paper for background, dark ink for text, and lime for primary actions. I've used Kedebideri for heading and body font, while for labels it uses monospace.

## Start with real work.

The first project here is the site itself. More projects and notes will follow when there is real work to show. Each project will explain what it is, what it does, and what is unfinished. The notes will cover what I learned.
