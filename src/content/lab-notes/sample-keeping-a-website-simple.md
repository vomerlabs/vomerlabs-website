---
title: "Sample note: keeping a small website simple"
description: "A preview of Lab Notes, with a short reflection on shared styles, readable pages, and building only what is needed."
publishedAt: 2026-10-19
draft: false
tags: [Sample, Astro, Design]
relatedProjects: [vomerlabs-website]
---

This is **sample content for previewing the Lab Notes layout**. It includes headings, lists, a quote, a code example, and a small table so you can see how a longer article feels.

## Start with the useful part

A studio website has a fairly simple job: explain what the studio does, show the projects, and make it easy to get in touch. Everything else should help one of those things happen.

For the VomerLabs website, that starts with an open index of projects and a place for writing. The pages share the same navigation, typography, and contact links, while the content lives in Markdown files.

The interesting question is how much structure a small site needs before that structure becomes more work than the content itself.

## Give repeated decisions a home

Spacing, colors, and type sizes show up on every page. Keeping those values together makes it easier to adjust the overall feel without hunting through individual components.

For example, these shared values describe part of the site's current layout:

```css
:root {
  --width-content: 1240px;
  --width-prose: 70ch;
  --font-size-body: 1rem;
  --page-gutter: 20px;
}
```

The outer width gives the site its frame. The prose width gives an article its reading measure. They solve different problems, so they have separate values.

> A useful constraint makes the next decision easier.

### Keep the reading experience quiet

An article needs a different rhythm from a homepage. Its paragraphs need room to breathe, headings need to be easy to find, and links need to look like something you can follow.

A few things to check while reading this sample:

- Does the line length feel comfortable on a large screen?
- Can you scan the headings without losing your place?
- Are **bold text**, *emphasis*, and `inline code` easy to distinguish?
- Does the page remain comfortable on a phone?

## Build the smallest complete path

The publishing flow can stay straightforward:

1. Create a Markdown file in the Lab Notes collection.
2. Add a title, description, date, and relevant topics.
3. Write the note and check it in the browser.
4. Mark it ready when the content is accurate and complete.

Different parts of the site can then keep their own responsibilities:

| Part | Responsibility |
| --- | --- |
| Content | The writing and its metadata |
| Components | Repeated layouts and links |
| Shared styles | Color, type, and spacing |

That separation leaves room to grow without requiring a new layout for every new note.

## Leave room for the next version

The first version does not need every possible feature. It needs a clear route from the index to an article, a readable body, and a way to continue exploring afterward.

You can inspect the [VomerLabs website project](/projects/vomerlabs-website) for the build description, or return to [all Lab Notes](/lab-notes) to see how this sample appears in the index.

When you are finished previewing, this sample can be replaced with a real note or hidden by setting `draft: true` in its frontmatter.
