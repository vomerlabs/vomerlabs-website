---
title: VomerLabs website
description: A home for the studio, its projects, and the process behind them.
status: in-progress
category: Website
featured: true
featuredOrder: 0
publishedAt: 2026-10-19
tags:
  - Astro
  - Markdown
  - Plain CSS
---

## About this build

This website is the first VomerLabs project: a place to show useful projects, explain how they are made, and share what I learn. It is being built in the open, starting with the foundation and homepage.

### The approach

Astro generates the pages as static HTML. Projects and lab notes live in Markdown or MDX files, with schemas checking their metadata. Plain CSS stays scoped to the component that owns it, with a small shared set of design tokens.

### What works today

The content collections, validation, shared layout, homepage, project pages, Lab Notes templates, About, Contact, and a custom missing-page response are in place. The homepage introduces the studio; the Projects index links to project pages generated from the same content. Each project page presents its status, metadata, and build notes, with images and demo or source links when supplied. The Lab Notes index is ready for writing, with article pages generated only for published notes. Shared navigation connects these pages and provides a direct way to get in touch. No CMS, database, or client framework is needed.

### What's next

Launch configuration and deployment are next. Lab Notes will receive its first articles when real writing is ready. More projects and writing will be added when they are ready to share.
