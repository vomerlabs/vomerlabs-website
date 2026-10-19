# Content authoring

Content lives in `src/content/projects/` and `src/content/lab-notes/`. Both `.md` and `.mdx` are supported; use Markdown unless embedded Astro components are useful. MDX support does not require a client framework.

The examples below are templates, not real VomerLabs work. Replace their fields and body with accurate content before publishing. The real `vomerlabs-website.md` project appears on Home, the Projects index, and its detail page at `/projects/vomerlabs-website`. The published `sample-keeping-a-website-simple.md` note previews the Lab Notes layout and is explicitly labeled as sample content; it appears on Home, the Lab Notes index, and its article page. Replace it with real writing or set `draft: true` when the preview is no longer needed.

## IDs and URLs

Use lowercase, hyphen-separated filenames such as `useful-tool.md`. Astro's glob loader generates the entry ID from the filename without its extension. Project pages use that ID at `/projects/useful-tool`; note pages use `/lab-notes/useful-tool`. Keep IDs stable after publishing; renaming published content requires a redirect in the eventual hosting configuration.

Keep entry files directly in their collection directory for now. Do not create both `.md` and `.mdx` files with the same ID. No separate `slug` field is required.

## Projects

```yaml
---
title: "Replace with the real project name"
description: "Explain what it does and who it helps."
status: in-progress
category: Software
publishedAt: 2026-10-19
featured: false
tags: []
---
```

Follow the frontmatter with only the sections relevant to the work, such as “The problem”, “The approach”, “How it works”, “What I learned”, and “What's next”. Start body headings at `##`; the detail template owns the page's `h1`. Explain working behavior and unfinished work honestly.

| Field | Requirement |
| --- | --- |
| `title`, `description`, `category` | Required, nonempty text |
| `status` | Required: `live`, `prototype`, `experiment`, or `in-progress` |
| `publishedAt` | Required publication date |
| `updatedAt` | Optional last-updated date |
| `featured` | Defaults to `false` |
| `featuredOrder` | Optional nonnegative integer; lower numbers appear first |
| `tags` | Optional list of nonempty text values; defaults to `[]` |
| `coverImage` | Optional local image path, relative to the entry file |
| `coverImageAlt` | Required, nonempty alternative text when a cover is supplied |
| `demoUrl`, `repositoryUrl` | Optional absolute HTTP or HTTPS URLs |

Project details show category, publication date, optional update date, and nonempty tags alongside the written status. Dates are formatted in UTC to preserve the authored calendar day. Demo and source links appear only when their URLs are supplied and open through ordinary same-tab navigation. Home and the Projects index share `ProjectCard`, including status, category, description, tags, and a Learn more link. Cards show a supplied cover image or the website-specific build preview when applicable.

Omit unavailable links and images entirely; do not use empty strings. Optional frontmatter fields should be omitted rather than assigned empty YAML values. Projects do not have a draft field: every project entry is considered publishable, even if its status is `in-progress`. Keep unpublished project material outside the collection until it is ready to show.

## Lab notes

```yaml
---
title: "Replace with the real note title"
description: "Summarize what the reader will learn."
publishedAt: 2026-10-19
draft: true
tags: []
relatedProjects: []
---
```

Notes share project fields for `title`, `description`, dates, tags, and optional cover images. Their additional fields are:

| Field | Requirement |
| --- | --- |
| `draft` | Defaults to `false`; set explicitly to `true` while writing |
| `relatedProjects` | Optional project entry IDs; defaults to `[]` |

For example, `relatedProjects: [useful-tool]` refers to `src/content/projects/useful-tool.md` (or `.mdx`). Astro's `reference('projects')` converts each ID into a typed collection reference for use with `getEntry()` or `getEntries()`. Keep referenced project files present; a reference's type does not by itself guarantee its target exists.

`getPublishedLabNotes()` filters out drafts in both development and production. The listing and `getStaticPaths()` both use this helper so drafts do not receive public links or routes. Draft files are still parsed and schema-validated. Dates do not schedule publication: a note with `draft: false` is publishable regardless of its date.

Start note body headings at `##`; the article template owns the `h1`. Published notes appear newest first with their title, summary, date, and nonempty tags. Article pages show publication and optional update dates in UTC, optional topics and cover, the full Markdown/MDX body, and links to existing referenced projects. Missing referenced projects do not produce broken links, but should be corrected before publication. Duplicate references render once. There is no search, filtering, or browser runtime.

To publish a note, replace the template with accurate writing, then explicitly set `draft: false` (or omit `draft`, which defaults to false). Confirm it appears at `/lab-notes` and its stable detail URL. Home shows the three latest published notes; the index shows all published notes. Both use `NotePreview` rows with dates, topic chips, and estimated reading time at 200 words per minute, omitted when the body is absent. Home uses h3 row titles, while the index uses h2 titles. Drafts remain absent from both lists and generated article routes, including in development. With no published notes, Home and the index show their own empty states; the index includes a link to Projects.

## Images

Put optimizable images in `src/assets/`. For an image at `src/assets/useful-tool.webp`, an entry in either collection uses:

```yaml
coverImage: ../../assets/useful-tool.webp
coverImageAlt: "Describe the visible interface and the information it conveys."
```

The collection's `image()` schema resolves the local file into image metadata. Project cards and both detail templates pass covers to Astro's responsive `<Image>` component with `coverImageAlt`. Detail pages display covers without cropping and omit them when absent. Cards omit the cover when absent, except the VomerLabs website card, which uses its build-process diagram. Missing images or missing cover alternatives fail content validation. Informative images inside the Markdown body also need meaningful alternative text.

Wrap rendered Markdown/MDX in `Prose` to contain typography:

```astro
---
import { render } from 'astro:content';
import Prose from '../components/content/Prose.astro';
// The route supplies a typed collection entry as a prop.
const { entry } = Astro.props;
const { Content } = await render(entry);
---
<Prose><Content /></Prose>
```

The import path depends on the consuming file. The wrapper's styles cover headings, paragraphs, lists, links, images, quotes, tables, and code. Project details use the default variant; Lab Notes articles use `<Prose variant="article">` for their narrower reading measure and article typography. Keep embedded interactive components' appearance inside their own scoped styles.

## Queries and validation

Use the helpers from `src/lib/content.ts` rather than duplicating filtering and sorting in pages:

- `getProjects()` returns all projects, newest publication first.
- `getFeaturedProjects()` returns only featured projects, ordered by `featuredOrder` ascending. Unspecified orders come last; equal orders fall back to newest publication first.
- `getPublishedLabNotes()` returns only nondraft notes, newest publication first.

Equal publication dates use entry IDs for deterministic ordering. Generated `CollectionEntry<'projects'>` and `CollectionEntry<'lab-notes'>` types are the metadata interfaces; do not maintain parallel hand-written versions.

Run `npm run check` and `npm run build` after changing content. These validate required metadata, enum values, dates, local image paths, and link syntax. They do not check remote URL availability, the truth of claims, or whether every related-project target exists. Review these before publishing. No fictional sample content is needed to build an empty collection.
