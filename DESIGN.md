---
name: VomerLabs — The Working Index
description: A calm, practical software studio index with oversized humanist type and lime actions.
colors:
  background: "#f5f3ee"
  text: "#171815"
  text-muted: "#62675c"
  muted: "#8c9185"
  accent: "#c6f277"
  accent-hover: "#b4e45f"
  status-background: "#e9f3d6"
  status-dot: "#90b947"
  border: "#d5d6cd"
  surface: "#eeece5"
  focus: "#42651b"
typography:
  hero-display:
    fontFamily: "Kedebideri, Arial, sans-serif"
    fontSize: "clamp(2.25rem, 1.5rem + 3vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  hero-intro:
    fontFamily: "Kedebideri, Arial, sans-serif"
    fontSize: "clamp(1rem, 0.95rem + 0.2vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.65
  display:
    fontFamily: "Kedebideri, Arial, sans-serif"
    fontSize: "clamp(2.75rem, 7.8vw, 7rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Kedebideri, Arial, sans-serif"
    fontSize: "clamp(1.75rem, 3vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.035em"
  page-title:
    fontFamily: "Kedebideri, Arial, sans-serif"
    fontSize: "clamp(2.75rem, 5.5vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.04em"
  project-title:
    fontFamily: "Kedebideri, Arial, sans-serif"
    fontSize: "clamp(1.75rem, 4vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.04em"
  intro:
    fontFamily: "Kedebideri, Arial, sans-serif"
    fontSize: "clamp(1.125rem, 1.55vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Kedebideri, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  action:
    fontFamily: "Kedebideri, Arial, sans-serif"
    fontSize: "clamp(1rem, 1.25vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.2
  label:
    fontFamily: "ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', monospace"
    fontSize: "clamp(0.8125rem, 1vw, 0.875rem)"
    fontWeight: 400
    lineHeight: 1.5
  small:
    fontFamily: "Kedebideri, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.65
rounded:
  pill: "100vw"
  circle: "50%"
spacing:
  "1": "0.25rem"
  "2": "0.5rem"
  "3": "0.75rem"
  "4": "1rem"
  "6": "1.5rem"
  "8": "2rem"
  "12": "3rem"
  "16": "4rem"
components:
  action-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.text}"
    typography: "{typography.action}"
    rounded: "{rounded.pill}"
    padding: "0.75em 1em"
  action-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  action-text:
    textColor: "{colors.text}"
    typography: "{typography.action}"
    padding: "0.2em 0"
  status:
    backgroundColor: "{colors.status-background}"
    textColor: "{colors.text}"
    rounded: "{rounded.pill}"
    padding: "0.35em 0.85em"
  navigation:
    textColor: "{colors.text-muted}"
  project-record:
    textColor: "{colors.text}"
  prose:
    typography: "{typography.body}"
    width: "70ch"
---

# Design System: VomerLabs

## Overview

**Creative North Star: "The Working Index"**

A calm, minimal, editorial home for an independent software studio. Warm off-white ground, near-black humanist type, gray-green supporting text, and thin rules make the work readable. Lime marks contact and actionable records; a softer lime distinguishes project status.

The system feels practical, curious, clear, and thoughtful. Large typography and open horizontal records create hierarchy without boxed project tiles. Content and ordinary links remain usable without JavaScript. The prominent two-line homepage statement is a deliberate expression of this world. The owner requested a more compact type scale and a 1240px content cap in the current refinement.

**Key Characteristics:**

- Flat warm paper and restrained lime accents.
- Locally served humanist sans with mono metadata.
- Oversized statements balanced by quiet supporting text.
- Open records, thin dividers, and generous shared gutters.
- Small, purposeful state changes and visible keyboard focus.

Recorded from `src/styles/tokens.css`, `src/styles/fonts.css`, `src/styles/global.css`, `src/layouts/BaseLayout.astro`, and the components used by `src/pages/index.astro`. The selected direction is recorded in `.impeccable/surfaces/src-pages-index-astro.md`; the approved visual reference is `.impeccable/mocks/decision/projectsing-index.png`. The token frontmatter describes the implemented system; component-specific exceptions appear below.

## Colors

The palette pairs warm paper with gray-green neutrals and a small family of lime accents. Frontmatter values are normative and match the shared CSS properties of the same names.

### Primary

- **Working Lime** (`accent`): primary email actions, the project action underline, and text selection.
- **Working Lime Hover** (`accent-hover`): primary action hover background.
- **Pale Status Lime** (`status-background`): compact project status background.
- **Status Green** (`status-dot`): the decorative dot accompanying a written status.
- **Focus Green** (`focus`): keyboard focus outline and navigation underline.

### Neutral

- **Warm Paper** (`background`): the uninterrupted document ground.
- **Near-black Ink** (`text`): headings, body text, and action labels.
- **Gray-green Text** (`text-muted`): descriptions, metadata, navigation, and colophon.
- **Quiet Gray-green** (`muted`): prose blockquote border.
- **Paper Rule** (`border`): section rules, metadata separator, and prose table rules.
- **Inset Paper** (`surface`): inline code background.

### Named Rules

**The Useful Lime Rule.** Use lime for actions, selection, and written project status; keep the page ground warm and quiet.

## Typography

**Display Font:** Kedebideri, with Arial and sans-serif fallbacks.

**Body Font:** Kedebideri, with the same fallbacks. Regular (400) and bold (700) are local TrueType files, loaded with `font-display: swap`; the bold face is preloaded by the layout.

**Label/Mono Font:** The platform monospace stack in `typography.label`, used for project metadata and code. It is not a display face.

**Character:** The humanist sans carries both the studio's outsized statement and its plain-language explanation. Bold weight and tight tracking establish hierarchy; mono appears only where the content behaves as technical metadata.

### Hierarchy

- **Current homepage hero:** The owner requested a smaller scale consistent with the rest of the homepage. The scoped `hero-display` role preserves the two-line statement and uses one continuous 36–64px scale at the default root size, including across the 700px layout breakpoint. Its 1.1 leading and -0.025em tracking match the quieter section-heading rhythm. The regular `hero-intro` role scales from 16–18px at 1.65 leading, is capped at 55ch, and uses pretty wrapping. Process labels use the 16px body token at 1.4 leading. The diagram is capped at 260px (220px on mobile) and the summary starts 2rem below the heading row. All values remain zoomable; no new font assets or weights are loaded. These roles supersede the historical homepage display description below, without changing other page typography.
- **Display:** The `display` role is the homepage h1. Two block spans use a horizontal scale of (0.95), a left transform origin, and no internal wrapping. At (60rem) and below its size becomes `clamp(2.75rem, 10.5vw, 5rem)`. This treatment belongs to the approved statement, not to ordinary body text.
- **Headline:** The `headline` role is the studio h2. The shared heading line-height token is (1.15), used by prose; the studio heading overrides it to the documented role's (1.1).
- **Page title:** Project detail and 404 headings use `clamp(2.75rem, 5.5vw, 4.5rem)`. About, Contact, Work index, and Lab Notes index use the shared `StudioPageIntro` hero scale described below.
- **Project title:** The `project-title` role is the open project record's h2, using the same fluid token on desktop and mobile.
- **Intro:** The `intro` role is the studio introduction. Project descriptions reuse its size with a line height of (1.4). The studio paragraph shares the compact action size, `clamp(1rem, 1.25vw, 1.125rem)`, with a line height of (1.5). The shared footer uses the existing body role for bold group headings and its email, and the small role for supporting copy, navigation, and colophon.
- **Body:** The `body` role establishes document defaults. The homepage build section increases body size to (1.125rem), keeping the inherited line height and a maximum measure of (70ch).
- **Action:** The `action` role keeps pill and underlined actions at a common fluid size.
- **Label / small:** Mono metadata uses `label`; colophon and prose captions use `small`. Status text is proportional, sized (0.875rem) with a line height of (1.25).

### Named Rules

**The Statement and Record Rule.** Reserve the largest tight-tracked type for a clear statement or a real project title; let supporting explanations remain regular-weight and readable.

## Layout

Header, main, and footer on every page now share the About container: centered, full width up to (1240px) including (20px) side padding. Shared padding becomes (28px) at viewport widths of (900px) and below and (22px) at (650px) and below. `--width-content` defines this outer cap, and `--page-gutter` defines the responsive side padding; the container width does not add the gutters again. All three regions use these same tokens to keep their content edges aligned. Their vertical spacing remains component-specific. The spacing scale in frontmatter follows the existing quarter-rem rhythm; fluid component values supplement it.

Desktop introduction columns use (58fr / 36fr) with a (6%) gap. The studio section uses (51fr / 41fr) with an (8%) gap. Both become one column at (60rem) and below, preserving source reading order. The introduction then uses a (2rem) gap and (2rem / 3rem) vertical padding. Supporting introductory text is capped at (36rem); the stacked studio paragraph is capped at (60ch).

The project is an open full-width record between two rules, followed immediately by the studio section. Its h2 retains top breathing room after the removal of the former eyebrow. The project footer reflows at (45rem); metadata moves onto its own row and loses its vertical separator. The shared site footer uses three desktop columns with a (1.4fr / 1fr / 1fr) ratio and (4rem) gaps. At (48rem) and below, the studio identity spans the first row and navigation/contact share a (0.8fr / 1.2fr) second row, with (2rem) row and (1.5rem) column gaps. At (30rem), the header stacks the wordmark above a full-width, spaced navigation row. No menu runtime is needed.

Prose uses a (70ch) maximum measure, sibling spacing of (1.5rem), and horizontally scrollable code blocks and tables. Source: `BaseLayout.astro`, `StudioIntro.astro`, `StudioAbout.astro`, `FeaturedProject.astro`, `SiteHeader.astro`, `SiteFooter.astro`, and `Prose.astro`.

## Elevation & Depth

The implementation has no shadows, gradients for depth, raised panels, or floating cards. Hierarchy comes from type scale, whitespace, thin rules, and the small tonal difference between status background and page ground. The text action uses a flat linear gradient solely to draw its one-pixel lime underline.

**The Open Record Rule.** Separate work with rules and spacing; preserve the unboxed record language established by the homepage.

## Shapes

Pill silhouettes are reserved for primary actions and status indicators; both use the `pill` radius. The status dot is circular. Content sections remain open and square-edged. Project boundaries are (2px); supporting dividers, metadata separators, and prose rules are (1px). The focused skip link is a plain rectangular ink surface.

## Components

### Shared Lab Notes rows

`src/components/lab-notes/NotePreview.astro` now owns the homepage's accepted note row and is shared with the Lab Notes index. It accepts a note, headingLevel (2 by default; 3 on Home), and an optional ID prefix to preserve homepage anchors. Each pale full-row link presents the publication date, optional estimated reading time, real title/description, topic chips, and arrow. Reading time derives from body word count at 200 words/minute and is omitted when the body is absent. Desktop uses metadata/content/arrow columns with 24px padding and gaps; at 768px metadata moves above the copy and padding becomes 24px/16px. Both lists use 12px gaps. Existing colors, hover, focus, and reduced-motion behavior are retained. Archive hero, article pages, ordering, draft filtering, homepage limit, and empty states remain unchanged.

### Shared project cards

`src/components/projects/ProjectCard.astro` owns the homepage's accepted pale project showcase and is also used by the Projects index. It accepts a real project entry and `headingLevel` (2 by default; 3 on the homepage), with a scoped card title style identical at both levels. Status/category, description, tags, secondary Learn more action, optional demo/source links, and real cover images or the website-specific build preview share one implementation. Desktop uses 0.9fr/1.1fr columns, 32px padding, and a 48px gap; at 960px it stacks with a 32px gap, and at 720px padding becomes 24px/16px. The project lists use 24px gaps. The Projects hero, all-project query, empty state, detail pages, and route redirects remain unchanged. WebsiteBuildPreview now lives in components/projects. This replaces the old open-record presentation on the Projects index; historical record descriptions below apply only to the legacy component.

### Rectangular navigation buttons

`src/components/ui/Button.astro` extracts the accepted homepage hero button. It takes a required `href`, an optional `variant="primary" | "secondary"` (default primary), a label slot, and standard anchor attributes. Primary uses the accent and accent-hover tokens with ink text. Secondary uses ink with paper text and #3f4e31 on hover. Both use square corners, 14px type at 1.65 line height, a 24px gap, the northeast SVG arrow, and 14px/20px padding (13px/19px at 650px and below). Focus is a 3px Focus Green outline offset by 6px; reduced motion disables the background transition. The homepage explicitly uses secondary and keeps its own outer spacing. See `src/components/ui/README.md` for usage. Existing ActionLink uses remain separate.

### Action links

Plain links carry clear actions. `src/components/ui/ActionLink.astro` implements `primary` and `text` variants; neither requires client-side JavaScript.

- **Primary:** Working Lime with ink text, pill radius, and the padding recorded in `action-primary`. The gap is (0.58em); minimum height is `clamp(2.5rem, 2.78vw, 2.75rem)`.
- **Text:** Ink text with a full-width (1px) lime underline, a (0.75em) gap, and the padding recorded in `action-text`.
- **Hover / Focus:** Primary background changes to its hover token. Both variants shift the inline SVG arrow right by (0.15em) on hover or keyboard focus. Global focus is a (2px) Focus Green outline with a (4px) offset.
- **Motion:** State transitions use (200ms) and `cubic-bezier(0.16, 1, 0.3, 1)`. Reduced-motion mode reduces animation and transition durations to (0.01ms), limits animation to one iteration, and disables smooth scrolling.

### Project status

Compact and descriptive, never a dot alone. `src/components/ui/ProjectStatus.astro` pairs a written status with a decorative circular dot, a (0.65em) gap, and a minimum width of (8rem). Statuses supported by the component are Live, Prototype, Experiment, and In progress; the only current project is In progress. It is not interactive.

### Navigation

`src/components/site/SiteHeader.astro` pairs the owner-supplied `/vomerlabs-logo.svg` with quiet plain-text links. Preserve the asset’s outlined lettering, proportions, and olive period (#688343); that color belongs to the logo asset rather than the shared palette. The image is (5em) wide with automatic height, centered inside the original (1.2em) header line box scaled by `clamp(1.5rem, 1.9vw, 1.875rem)`. The home link retains the accessible name “VomerLabs home” and the image uses empty alt text. Navigation uses (1rem). Hover and focus restore ink text with a Focus Green underline. Mobile keeps all links visible; no collapsed-menu pattern is established.

### Project record

`src/components/home/FeaturedProject.astro` is the signature open record: semantic h2, regular-weight description, status, mono metadata, and an underlined action aligned to the far side. Its top and bottom spacing are fluid, and its heading keeps its own top margin. Preserve that breathing room without introducing an eyebrow. The only current record is the VomerLabs website, with an action pointing to its inline build description.

### Prose and contact

`src/components/content/Prose.astro` provides scoped styles for Markdown headings, links, lists, code, tables, quotes, media, and captions. Prose links strengthen underline thickness from (0.08em) to (0.15em) on hover; they inherit the global focus outline. The contact email remains `hi@vomerlabs.com`; no form or input pattern is established.

At the owner's request, `src/components/site/ContactBand.astro` owns the supplied reference's lime contact band and its scoped styles. `BaseLayout.astro` renders it after main content and before the separate footer. Preserve its supplied label, Good things start / with a conversation heading, green period, and supporting invitation. The band uses the shared accent and ink, local Kedebideri, (45px 40px 42px) padding, a `clamp(2.125rem, 4.8vw, 3.5rem)` heading at (1.09) line height, and a (75px) circular link to `/contact/` with the shared SVG arrow rotated toward the upper right. Label text uses (12px) mono and #3d4f2d; supporting text uses the body size and #445431. At (650px) and below, padding becomes (30px 23px), the heading becomes (33px), and the circle becomes (49px); the heading and circle wrap naturally. At (380px) and below, the heading becomes (28px). The band aligns with the shared container at every size, without a second mobile inset. Contact suppresses the band through `showContactBand={false}` on BaseLayout. Its footer retains the separator through `showDivider`. The supplied label is specific to this owner-selected reference and does not establish a general eyebrow pattern.

### Shared footer

`src/components/site/SiteFooter.astro` closes the page as a quiet studio directory. The original `/vomerlabs-logo.svg` is (160px) wide with automatic height, followed by the supplied site description. Explore contains Work, Lab Notes, About, and Contact; Contact contains the real `hi@vomerlabs.com` mailto link and the short invitation “A project, a question, or an idea to explore.” All groups use the shared paper, ink, muted text, Kedebideri, spacing, and container tokens. There are no new palette or type roles.

Group headings use body size, bold weight, and (1.4) line height. Description and invitation use small size at (1.8) line height; navigation and colophon also use small size. The description is capped at (38ch), increasing to (50ch) at (48rem) and below. The directory has (3rem) block padding, reducing to (2rem) at that breakpoint; the footer ends with (1.5rem) bottom padding. Explore uses two link columns on desktop and one at (48rem) and below. A (1px) Paper Rule separates the wrapping copyright/Back to top row, with (1rem) top padding. Its plain Back to top link retains the existing SVG arrow rotated upward. Links have a minimum height of (44px), native destinations, visible global focus, and quiet ink/underline hover states; the email underline thickens on hover or focus. The existing `topHref` override and optional `showDivider` top rule remain supported. The separate ContactBand is unchanged.

## About and Contact reference layouts

The owner selected the content areas of the About and Contact pages from the separate `vomerlabs-chatgpt/vomerlabs` project, previewed at `http://localhost:4326/about/` and `/contact/`. Reproduce that supplied wording, section order, panels, labels, numbering, spacing, and responsive behavior while retaining this project's Kedebideri regular (400), bold headings (700), and existing monospace stack. The header, footer, and other routes retain the Working Index presentation; their outer containers now follow the shared About dimensions. These two page bodies are deliberate exceptions to the shared introductory composition and typography scale.

The owner subsequently selected About's container for every route and for the header and footer. `BaseLayout` and both shell components use the shared width and gutter tokens for a (1240px) outer maximum width and responsive (20px / 28px / 22px) side padding, without a per-page layout variant. `StudioPageIntro.astro` owns their shared hero: (64px / 55px) vertical padding, a (1px) #d7d8cf bottom rule, (12px) monospace label, and a bold `clamp(3.125rem, 6vw, 4.875rem)` heading at (1.05) line height. Supporting text is (17px) at (1.8) line height with a (620px) measure. At (650px) and below, hero padding becomes (45px / 36px), heading size (52px), and supporting text (15px).

About pairs (1.25fr / 1fr) columns with a (95px) gap and (60px / 80px) section padding. The prose uses (16px) text at (1.9) line height and (30px) headings. Its #e0e7d5 principles panel has (35px) padding, a (35px) heading, and three numbered rows separated by (1px) #bbc8ac rules. It sticks (30px) from the viewport top on desktop. At (900px) and below the gap is (45px); at (650px) and below columns stack with a (35px) gap, prose becomes (15px), panel padding becomes (27px), and sticky positioning is removed.

Contact was subsequently refined at the owner's request to share About's composition: (1.25fr / 1fr) columns, a (95px) gap, (60px / 80px) section padding, and (16px) prose at (1.9) line height. Its email action remains an underlined native mailto link sized `clamp(1.125rem, 2.7vw, 1.9375rem)`, accompanied by the existing SVG arrow rotated toward the upper right. The copyable address remains visible below it at (12px). The #e0e7d5 prompt panel matches About's (35px) padding, (35px) heading at (1.15) line height, sticky positioning at top (30px), and thin #bbc8ac row dividers. The four existing questions appear as numbered rows with (16px) bold labels; the closing invitation is quiet (12px) proportional text. At (900px) and below the column gap is (45px); at (650px) and below columns stack with a (35px) gap and (35px / 50px) section padding, prose becomes (15px) at (1.85) line height, and the panel becomes static with (27px) padding and a (32px) heading. Contact continues to suppress the shared contact band.

The small uppercase labels and numbered principles are explicitly requested parts of the supplied reference, rather than new patterns to propagate elsewhere. The principle numbers use #5b694e instead of the source's #5f6e51 to meet 4.5:1 text contrast on the panel. Keep all page presentation scoped. Ordinary links, visible keyboard focus, selectable email text, and JavaScript-free reading remain intact.

## Work and Lab Notes index heroes

The owner requested only the Work and Lab Notes heroes from the same reference project. Both indexes reuse `StudioPageIntro` with the current Kedebideri font, source label, title line break, description, vertical spacing, and responsive typography. Work uses THE PROJECT NOTEBOOK / Work, with a reason / behind it. Lab Notes uses AN OPEN NOTEBOOK / Notes along / the way.

Keep project records, note previews, empty states, content queries, metadata, and shared header/footer unchanged. The heroes adapt to the shared main container, which now follows About on every page. Set `showDivider={false}` on these two heroes because their existing lists or empty states already draw the boundary rule. About and Contact keep the component's default divider. Preserve `projects-title` and `notes-title` for their footer anchors. Project detail and note article heroes are outside this change.

## Lab Notes article layout

The owner selected the reference article at `http://localhost:4326/lab-notes/a-small-deliberate-start/`, retaining the current note content, Kedebideri fonts, shared header/footer, and existing Related work section. Article rendering and draft filtering continue to use the current collection and helpers.

The article header is left aligned within the shared main container, capped at (1000px), with (40px / 44px) vertical padding. It contains an SVG-backed All Lab Notes link, FROM THE LAB label, a bold `clamp(2.75rem, 6vw, 4.5rem)` title capped at (900px) with (1.08) line height, an (18px) description capped at (700px), and compact inline publication metadata. The mono metadata is (10px), with (22px) gaps and slash-separated topics; semantic date/topic labels remain available to assistive technology. Optional updates and cover images remain supported. At (650px) and below, header padding is (30px), the title is (44px), the description is (16px), and metadata is (9px) with (15px) gaps.

The centered reading frame is capped at (800px), with (50px / 80px) vertical padding, and contains a (700px) prose column. At (650px) and below its padding becomes (35px / 50px). `Prose` accepts `variant="article"` to scope the source reading styles to Lab Notes: (16px) #4f5548 text at (1.9) line height, (30px) h2 headings, (23px) h3 headings, (20px) paragraph spacing, green underlined links, source list/code spacing, and a pale green blockquote rule. On mobile body text is (15px) at (1.85) line height, and h2 headings are (27px). Existing responsive table, media, focus, and horizontal code-scrolling behavior remains available. The default prose variant keeps project reading styles unchanged.

Related work keeps its existing heading, real project links, descriptions, rules, spacing, and (18px) text, following the article body in the reading column. Keep the existing Back to Lab Notes action and the `note-title` target for Back to top. No article content is imported from the reference.

## Do's and Don'ts

### Do:

- **Do** preserve the warm paper ground, ink hierarchy, and useful lime accents.
- **Do** reuse local Kedebideri regular and bold, reserving mono for metadata and code.
- **Do** keep the two-line statement prominent within the owner's requested compact scale and let surrounding whitespace support it.
- **Do** show real work as open records with written status and clear ordinary links.
- **Do** preserve visible keyboard focus, reduced-motion behavior, and readable source order.

### Don't:

- **Don't** turn open project records into raised, shadowed card grids.
- **Don't** introduce eyebrow labels above the project record.
- **Don't** use decorative glyph characters in place of the existing inline SVG arrow.
- **Don't** invent projects, articles, results, or form interactions to fill space.
- **Don't** flatten the display, page title, project title, and body hierarchy when adjusting typography.
