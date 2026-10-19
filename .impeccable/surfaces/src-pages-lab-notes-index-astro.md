---
version: 1
slug: "src-pages-lab-notes-index-astro"
primary_target: "src/pages/lab-notes/index.astro"
related_targets: ["src/pages/lab-notes/[slug].astro"]
---

# Lab Notes index and articles

Mode: Read. Readers want to find published technical writing, understand its context, and move between notes and real projects. Source: the existing lab-notes collection; no writing is supplied yet. Preserve the approved homepage and Work surfaces, existing design-system files, static publishing, and scoped CSS.

## Direction contract

THESIS: A plain publication index opens into a calm project-connected reading page; an empty collection tells the truth without simulated articles.

OWN-WORLD: Inherit The Working Index's warm paper, ink Kedebideri headings, gray-green descriptions, ruled open records, mono dates and topics, lime underlined actions, and existing email close.

STORY: Find a published note by title, summary, date, and topics; read its real body; inspect referenced projects or return to the index. Drafts never receive public links or routes.

FIRST VIEWPORT: Existing masthead with a Lab Notes link; index title and introduction follow the Work index's two-column structure. An empty collection presents a ruled message and Explore work action. Populated entries are open horizontal records with linked titles. Article opens with an All Lab Notes link, title, summary, and publication metadata. A 70ch prose column sits below a rule, with optional real cover and related projects after the body. Mobile stacks in reading order.

FORM: Conventional publication index and article, extending the owner-approved Working Index composition. Code-led Read surface; no new visual-world choice or comp round. Existing arrow hover and focus motion marks the way forward; content stays visible without JavaScript.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Index hero refinement

Owner refinement: replace only the Lab Notes index hero with the reference at `http://localhost:4326/lab-notes/`. Reuse `StudioPageIntro` with AN OPEN NOTEBOOK, Notes along / the way., the source introduction, and this project's fonts. Preserve `notes-title`. Set `showDivider={false}` so the existing list/empty-state rule remains the single boundary. Keep the current container, note previews (including the labeled sample), empty state, header/footer, draft filtering, and article pages unchanged.

## Article layout refinement

Owner refinement: replicate the article layout at `http://localhost:4326/lab-notes/a-small-deliberate-start/` while preserving this project's note content, font, shared shell, and existing Related work section. The header spans up to 1000px at the shared main left edge, with an SVG back arrow, FROM THE LAB label, larger 72px maximum title, description, and compact inline publication metadata with slash-separated topics. Preserve optional update dates and covers. A centered 800px reading frame contains a 700px prose column using `Prose variant="article"`, with the reference's paragraph, heading, list, link, quote, and code spacing. Mobile retains the source 650px breakpoint, 44px article title, and 15px prose. Related work keeps its existing presentation and real links, followed by Back to Lab Notes. Draft filtering, content queries, and collection schema stay unchanged. The default prose variant preserves project detail styling.

## Shared note rows

The owner requested matching the Lab Notes listing to the homepage. NotePreview.astro now owns the accepted homepage row markup, reading-time calculation, and scoped styles. HomepageNotes renders it with h3 titles and its existing ID prefix; the archive uses h2 titles. Full-row navigation, publication date, estimated reading time, description, topic chips, hover, focus, and mobile reflow share one implementation. The archive list uses the homepage’s 12px gaps and removes its old row borders; its hero, full published-note query, empty state, and article pages remain unchanged. Home keeps its latest-three limit, section heading, archive link, and empty state. The supplied sample stays labeled. Type checks, build, and diff checks pass. Browser verification at 1440, 769, 768, 390, and 320px confirmed matching dimensions, typography, colors, metadata and tags, working hover/focus/Enter navigation without JavaScript, and no overflow or script errors. Captures: `.impeccable/review/shared-note-rows/`.
