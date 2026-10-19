---
name: VomerLabs — The Working Index
description: A calm software studio index with humanist type, pale content surfaces, and lime actions.
colors:
  background: "#f5f3ee"
  text: "#171815"
  text-muted: "#62675c"
  text-prose: "#4f5548"
  text-tinted: "#5b694e"
  text-tinted-muted: "#5b6750"
  muted: "#8c9185"
  accent: "#c6f277"
  accent-hover: "#b4e45f"
  status-background: "#e9f3d6"
  status-dot: "#90b947"
  border: "#d5d6cd"
  border-subtle: "#d7d8cf"
  border-tinted: "#bbc8ac"
  surface: "#eeece5"
  surface-raised: "#faf9f6"
  surface-tinted: "#e0e7d5"
  link: "#466123"
  focus: "#42651b"
  secondary-hover: "#3f4e31"
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
  heading:
    fontFamily: "Kedebideri, Arial, sans-serif"
    fontSize: "clamp(1.75rem, 3vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  page-title:
    fontFamily: "Kedebideri, Arial, sans-serif"
    fontSize: "clamp(3.125rem, 6vw, 4.875rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.04em"
  detail-title:
    fontFamily: "Kedebideri, Arial, sans-serif"
    fontSize: "clamp(2.75rem, 5.5vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.04em"
  card-title:
    fontFamily: "Kedebideri, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 2.5vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  note-title:
    fontFamily: "Kedebideri, Arial, sans-serif"
    fontSize: "clamp(1.125rem, 1.5vw, 1.375rem)"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Kedebideri, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  prose:
    fontFamily: "Kedebideri, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.9
  subheading:
    fontFamily: "Kedebideri, Arial, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.04em"
  button:
    fontFamily: "Kedebideri, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.65
  action:
    fontFamily: "Kedebideri, Arial, sans-serif"
    fontSize: "clamp(1rem, 1.25vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.2
  label:
    fontFamily: "ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.065em"
  tag:
    fontFamily: "ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.65
  small:
    fontFamily: "Kedebideri, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.8
rounded:
  small: "0.25rem"
  pill: "100vw"
  circle: "50%"
spacing:
  "1": "0.25rem"
  "2": "0.5rem"
  "3": "0.75rem"
  "4": "1rem"
  "6": "1.5rem"
  "8": "2rem"
  "10": "2.5rem"
  "12": "3rem"
  "14": "3.5rem"
  "16": "4rem"
  prose: "20px"
  layout-column-gap: "95px"
  layout-column-gap-medium: "45px"
  layout-column-gap-small: "35px"
  panel-padding: "35px"
  panel-padding-small: "27px"
  panel-sticky-offset: "30px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.text}"
    typography: "{typography.button}"
    rounded: "{rounded.small}"
    padding: "14px 20px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-secondary:
    backgroundColor: "{colors.text}"
    textColor: "{colors.background}"
    typography: "{typography.button}"
    rounded: "{rounded.small}"
    padding: "14px 20px"
  button-secondary-hover:
    backgroundColor: "{colors.secondary-hover}"
  action-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.text}"
    typography: "{typography.action}"
    rounded: "{rounded.pill}"
    padding: "0.75em 1em"
  action-text:
    textColor: "{colors.text}"
    typography: "{typography.action}"
    padding: "0.2em 0"
  project-card:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.text}"
    rounded: "{rounded.small}"
    padding: "2rem"
  note-row:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.text}"
    rounded: "{rounded.small}"
    padding: "1.5rem"
  status:
    backgroundColor: "{colors.status-background}"
    textColor: "{colors.text}"
    rounded: "{rounded.pill}"
    padding: "0.35em 0.85em"
  tag:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-muted}"
    typography: "{typography.tag}"
    rounded: "{rounded.small}"
    padding: "0.125rem 0.5rem"
  navigation:
    textColor: "{colors.text-muted}"
  prose:
    textColor: "{colors.text-prose}"
    typography: "{typography.prose}"
    width: "700px"
---

# Design System: VomerLabs

## Overview

**Creative North Star: "The Working Index"**

A calm, practical studio index on warm paper. Near-black humanist type, gray-green supporting text, pale content surfaces, and thin rules make the work readable. Lime identifies primary actions and selection; softer green supports written project status and informational panels.

The studio feels curious, clear, independent, and thoughtful. A compact two-line homepage statement sits alongside a geometric Think / Build / Share diagram. Project cards and note rows present real content through ordinary links. Pages remain readable and navigable without client-side JavaScript.

**Key Characteristics:**

- Warm paper, ink, and restrained lime accents.
- Local Kedebideri with monospace metadata and code.
- Compact fluid headings and generous shared gutters.
- Flat pale cards, quiet panels, and thin section rules.
- Native links, visible keyboard focus, and reduced-motion support.

This document describes the current implementation. `src/styles/tokens.css` is the code source for shared values; scoped component styles supply local exceptions. Frontmatter records design values and roles, including the secondary button's local hover color. `.impeccable/design.json` extends it with preview snippets, motion, and breakpoint metadata. Surface briefs and review artifacts preserve historical decisions.

## Colors

Use the palette by role. Most frontmatter color names map directly to `--color-<name>` globals; `secondary-hover` remains a local Button value.

- **Warm Paper** (`background`): document ground and text on ink buttons.
- **Near-black Ink** (`text`): headings, body text, action labels, and secondary button fill.
- **Gray-green Text** (`text-muted`): supporting text, dates, tags, navigation, and footer copy. `text-prose` is the distinct long-reading text color used in About, Contact, and articles.
- **Working Lime** (`accent`, `accent-hover`): primary actions, text selection, and text-action underlines.
- **Pale Status Lime / Status Green** (`status-background`, `status-dot`): the written project-status badge and its decorative dot.
- **Paper Rules** (`border`, `border-subtle`): shared section rules and the slightly different page-intro/code borders. Preserve their distinct values.
- **Inset / Pale Paper** (`surface`, `surface-raised`): inset build previews and chips, versus pale cards, note rows, and empty states. The name `surface-raised` describes a lighter color; it adds no shadow or elevation.
- **Tinted Panel** (`surface-tinted`, `border-tinted`, `text-tinted`, `text-tinted-muted`): About and Contact panels, numbered rows, and supporting panel copy.
- **Reading Link / Focus Green** (`link`, `focus`): prose links and global keyboard outlines.
- **Quiet Border** (`muted`): the default prose blockquote rule. **Olive Hover** (`secondary-hover`): the secondary Button's hover fill.

ContactBand retains local green tones for its label (#3d4f2d), supporting copy (#445431), heading period (#647f37), circular-link border (#819c53), and hover fill (#aedd5d). Article code uses local #e6e9df and #e8eae2 backgrounds, with #95ae70 for its blockquote rule. The original logo's olive period (#688343) belongs to the supplied asset. Keep these established exceptions distinct from the shared palette.

**The Useful Lime Rule.** Use lime for primary actions, selection, and project status; keep the document ground warm and quiet.

## Typography

Kedebideri regular (400) and bold (700) are served locally from `src/assets/fonts/`, with Arial/sans-serif fallbacks and the accompanying OFL license. Both faces use `font-display: swap`; BaseLayout preloads bold. Technical metadata and code use the platform monospace stack. No additional weights or external font requests are needed.

- **Homepage:** `hero-display` scales from 36–64px at the default root size, with 1.1 leading and -0.025em tracking. It keeps the explicit two-line statement. `hero-intro` scales from 16–18px at 1.65 leading and a 55ch measure. Process labels use the body size at 1.4 leading.
- **Shared page intro:** `page-title` belongs to About, Contact, Projects, and Lab Notes. At 650px and below it becomes 52px; supporting copy changes from 17px to 15px. Labels use 12px mono at 1.5 leading and 0.065em tracking.
- **Detail and recovery titles:** project detail and 404 use `detail-title`. Lab Notes articles have a separate `clamp(2.75rem, 6vw, 4.5rem)` title at 1.08 leading, becoming 44px on mobile.
- **Section headings:** Featured projects uses `heading`; the homepage studio heading uses `clamp(1.75rem, 3vw, 2.5rem)` at 1.15 leading. Recent Lab Notes uses `clamp(1.75rem, 3.2vw, 2.5rem)` at 1.1 leading and -0.035em tracking.
- **Cards and rows:** project and note titles use their frontmatter roles at either h2 or h3 without changing appearance. Note descriptions use 15px type at 1.65 leading. Tags and compact metadata use 12px mono; project category uses the fluid `--font-size-label` token.
- **Reading:** document defaults use `body`. Article/About/Contact prose uses 16px at 1.9 leading, becoming 15px at 1.85 on mobile. Shared prose h2 headings use 30px desktop and 27px mobile. Project body content uses 18px with the default Prose variant; default prose h2 uses `--font-size-section-title` and h3 uses 20px.
- **Actions and footer:** Button uses 14px at 1.65 leading; ActionLink uses the fluid `action` role. Footer group headings and email use body size, supporting copy uses `small`, and the status badge uses 14px at 1.25 leading.

Shared font sizes, line heights, and tracking live in the global token file. Use them directly when the value serves the same role. Preserve scoped fluid formulas and responsive overrides rather than forcing every heading into one scale.

## Layout

Header, main, contact-band wrapper, and footer share a centered 1240px outer cap including horizontal padding. `--page-gutter` is 20px by default, 28px at 900px and below, and 22px at 650px and below. Do not add the gutters to the cap again.

The homepage hero uses 1.45fr/0.85fr heading/diagram columns with a 3rem gap. The summary starts 2rem below; the diagram is capped at 16.25rem. The studio section uses equal columns and a 4rem gap. At 700px and below both sections stack, the diagram centers at a 13.75rem cap, and section padding becomes 2.5rem. The source order remains heading, diagram, introduction, and primary action.

Project cards use 0.9fr/1.1fr columns when a preview exists, 2rem padding, and a 3rem gap. At 60rem they stack with a 2rem gap; at 45rem padding becomes 1.5rem/1rem. Project lists use 1.5rem gaps. Note rows use metadata/content/arrow columns, 1.5rem padding and gaps; at 48rem metadata moves above the copy and horizontal padding becomes 1rem. Note lists use 0.75rem gaps.

About and Contact use shared `--layout-*` values: 1.25fr/1fr columns, a 95px gap, and 60px/80px block padding. The gap becomes 45px at 900px, then 35px in a single column at 650px. Mobile block padding is 35px/50px. Supporting panels use `--panel-*`: 35px padding and a 30px sticky offset, changing to static positioning with 27px padding on mobile. Their headings change from 35px to 32px.

StudioPageIntro uses 64px/55px block padding, changing to 45px/36px at 650px. Its default bottom divider is disabled on Projects and Lab Notes because their content already supplies the boundary. Project detail uses a metadata/body grid that stacks at 60rem. The note reading frame is capped at 800px around a 700px prose column; it uses 50px/80px padding, becoming 35px/50px on mobile. Default Prose is capped at 70ch.

The footer uses 1.4fr/1fr/1fr columns with 4rem gaps and 3rem block padding. At 48rem, studio identity spans the first row; Explore and Contact share the next row, with 2rem/1.5rem gaps and 2rem block padding. Header navigation remains visible; at 30rem the wordmark stacks above a spaced navigation row.

Use the quarter-rem `--space-*` scale for shared rhythm. `--space-prose` and shared layout/panel tokens preserve deliberate fixed-pixel spacing. Responsive overrides remain in scoped styles. Keep source order, readable measures, and horizontal code/table scrolling.

## Elevation & Depth

The system is flat and uses no shadows or depth gradients. Tonal differences separate paper, pale project cards, note rows, inset build previews, and green panels. Thin rules and type establish hierarchy. ActionLink's linear gradient draws a one-pixel underline and does not simulate depth.

**The Flat Surface Rule.** Use the established pale surfaces and rules to separate content; keep project cards and reading panels free of added shadows.

## Shapes

Buttons, project cards, note rows, build-preview steps, and chips use the existing 0.25rem radius through `--space-1`. ActionLink's primary variant and ProjectStatus remain pills; the status dot and ContactBand link are circular. Other content stays open and square-edged. Section/table rules are generally 1px; the empty Lab Notes boundary is 2px.

## Components

### Navigation buttons and action links

`Button` renders an anchor with required `href`, label slot, optional primary/secondary variant (primary by default), and forwarded anchor attributes including class. Primary uses lime/ink; secondary uses ink/paper and olive hover. Both have a northeast inline SVG arrow, 24px gap, 44px minimum height, and 14px/20px padding, changing to 13px/19px at 650px. Keyboard focus is a 3px green outline offset by 6px. Background transition is 180ms; reduced motion disables it. The homepage uses primary and project cards use secondary. Usage is documented in `src/components/ui/README.md`.

`ActionLink` remains a separate component for existing detail, empty-state, and recovery actions. It requires `href` and supports primary (default) and text variants. The primary variant is a padded lime pill; text uses the lime underline. Both shift the shared arrow by 0.15em on hover or keyboard focus. Transitions use the global 200ms duration and `cubic-bezier(0.16, 1, 0.3, 1)` easing.

### Project cards and build preview

`ProjectCard` accepts a project entry and `headingLevel` (2 by default; 3 on Home). It presents written status/category, linked title, description, optional tags, secondary Learn more button, optional demo/source links, and an optional processed cover. The website entry uses `WebsiteBuildPreview` when no cover is supplied. The preview is a Content / Build / Pages diagram on the inset surface, with its middle step in ink; it stacks at 40rem. Both lists share this card implementation and retain their own empty states.

### Note rows and tags

`NotePreview` accepts a note, `headingLevel` (2 by default; 3 on Home), and optional `idPrefix`. The entire row links to the article and includes a semantic publication date, optional reading-time estimate, title, description, topics, and arrow. Estimate at 200 words per minute; omit it when the body is absent. Hover or focus changes the row to the inset surface, underlines the title, and shifts the arrow. Tags and reading-time chips are descriptive, with pale inset fills and small corners; they are not filter controls.

### Status

`ProjectStatus` pairs a written Live, Prototype, Experiment, or In progress label with a decorative green dot. It has a pale green pill fill, 0.65em gap, 8rem minimum width, and 0.35em/0.85em padding. The dot never supplies the only status information. This component is not interactive.

### Shared shell and introductions

`SiteHeader` renders the original logo with the accessible name “VomerLabs home” and empty image alt text. Preserve the asset's proportions and olive period. Projects and Lab Notes indicate their current section; About and Contact indicate their current page. Hover/focus uses ink with a green underline; no menu runtime is needed.

`StudioPageIntro` accepts `id`, `label`, `description`, optional `showDivider` (default true), and a heading slot. It supplies the current shared informational/index hero, including existing uppercase labels. Each page preserves its own wording and heading target.

`BaseLayout` owns document metadata, the skip link, main container, slots, and a separate ContactBand after main content. `showContactBand` defaults to true; Contact disables it. The band's existing lime invitation, green period, circular SVG action, and mobile wrapping stay local to this component. It uses 45px/40px/42px padding, becoming 30px/23px at 650px, a 75px action becoming 49px, and the established 56px maximum heading becoming 33px mobile and 28px at 380px.

`SiteFooter` is a quiet studio directory with the 160px original logo, supplied description, Projects/Lab Notes/About/Contact navigation, real email, short invitation, and ruled copyright/Back to top row. It accepts `topHref` and `showDivider` (default false); Contact enables the top rule. Links retain native destinations, visible focus, and 44px minimum heights. The contact band remains outside the footer.

### Reading and informational panels

`Prose` contains Markdown typography with global descendants anchored to its scoped wrapper. The default variant serves project details; `variant="article"` supplies Lab Notes reading styles. Preserve responsive media, scrollable code/tables, visible focus, and green article links. About and Contact share the long-reading colors and supporting tinted-panel treatment; their existing numbered rows and labels belong to those pages.

Lab Notes headers retain All Lab Notes navigation, FROM THE LAB label, title, description, UTC date metadata, optional update/topics/cover, related real projects, and return navigation. The sample article remains explicitly labeled as sample content. Project details retain written status, category, dates, optional tags/cover/external links, and their default Prose body.

### Shared accessibility states

Global focus is a 2px Focus Green outline with a 4px offset; Button and the homepage studio link retain their scoped focus treatments. Selection uses lime with ink text. Reduced-motion rules shorten animation/transitions to 0.01ms, limit animation iterations, and disable smooth scrolling; Button disables its transition and the homepage also suppresses motion. Keep semantic headings, selectable email text, written status, and JavaScript-free navigation.

## Do's and Don'ts

### Do:

- **Do** preserve warm paper, ink hierarchy, gray-green supporting text, and useful lime accents.
- **Do** use global tokens directly for shared values and keep one-off presentation scoped.
- **Do** retain the compact two-line homepage statement, readable prose measures, and local Kedebideri fonts.
- **Do** reuse the current pale project cards and note rows with correct heading levels.
- **Do** preserve native links, keyboard focus, reduced motion, and readable mobile source order.

### Don't:

- **Don't** add shadows or depth effects to the established flat cards and panels.
- **Don't** introduce page or component aliases for values already represented by shared tokens.
- **Don't** substitute decorative glyphs for the existing SVG arrows or alter the supplied logo.
- **Don't** invent projects, articles, biography, results, or form behavior to fill space.
- **Don't** treat historical layouts or sample content as the current production brief.
