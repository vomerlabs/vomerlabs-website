# VomerLabs

An independent studio building software, exploring practical uses for AI, and sharing the process. Built with Astro, strict TypeScript, plain CSS, and Markdown/MDX content collections. The site generates static HTML and needs no client framework, CMS, or backend.

Home, Projects, project details, Lab Notes, note articles, About, Contact, and a custom 404 are implemented. The VomerLabs website is the first real project, marked In progress. One explicitly labeled sample note is published to preview the reading experience. Hosting and production launch configuration remain open.

## Development

Use Node.js 22.22.0 or newer and the locked npm dependencies:

```sh
npm ci
npm run dev -- --background
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
```

Use background mode as required by [AGENTS.md](AGENTS.md). Astro normally starts at `http://localhost:4321`; check its output or status for the actual port.

```sh
npm run check
npm run build
npm run preview
```

`check` validates Astro and TypeScript. `build` validates collection content and writes the static site to `dist/`. `preview` serves that build locally.

## Project structure

```text
src/
  assets/fonts/              Local Kedebideri fonts and their OFL license
  components/
    content/                 Formatted dates and scoped Markdown typography
    home/                    Featured projects and recent Lab Notes sections
    lab-notes/               Shared note preview rows
    projects/                Shared project cards and website build preview
    site/                    Header, footer, contact band, and page intro
    ui/                      Buttons, action links, status, and arrow icon
  config/site.ts             Studio identity, language, and contact email
  content/                   Project and Lab Notes Markdown/MDX entries
  content.config.ts          Collection loaders and metadata schemas
  layouts/BaseLayout.astro   Document, metadata, skip link, and layout slots
  lib/content.ts             Typed queries, sorting, and draft filtering
  pages/                     Home, listings, details, About, Contact, and 404
  styles/                    Global tokens, font faces, and document defaults
public/                      Original logo, SVG favicon, and favicon fallback
docs/content-authoring.md    Content fields, examples, and publishing rules
docs/next-context.md         Current handoff and outstanding launch work
PRODUCT.md                   Confirmed product context
DESIGN.md                    Current visual system and component guidance
.impeccable/design.json      Design-panel previews and metadata
```

Pages load content and compose components. Shared components follow real repeated patterns. Use generated `CollectionEntry` types instead of parallel frontmatter interfaces.

## Routes and content

| Route | Purpose |
| --- | --- |
| `/` | Studio introduction, featured projects, studio overview, and three latest published notes |
| `/projects` | All projects |
| `/projects/[slug]` | Project metadata and rendered Markdown/MDX |
| `/lab-notes` | All published notes, or an empty state |
| `/lab-notes/[slug]` | Published article, optional cover and metadata, and related projects |
| `/about` | Studio focus, approach, and guiding principles |
| `/contact` | Selectable email link and conversation guidance |
| `/404` | Missing-page recovery with `noindex`; generates `dist/404.html` |

The current content is available at `/projects/vomerlabs-website` and `/lab-notes/sample-keeping-a-website-simple`. The note is sample content, not an additional claim of real studio work; replace it or set `draft: true` when it is no longer needed.

Home and Projects share `ProjectCard`, using h3 and h2 card titles respectively. Cards include status, category, description, tags, a secondary Learn more button, optional external links, and a supplied cover or the website-specific build preview. Home and Lab Notes share `NotePreview`, with dates, optional estimated reading time, descriptions, topic chips, and h3/h2 titles. Each listing keeps its own empty state.

`getProjects()` sorts newest first. `getFeaturedProjects()` selects featured entries and sorts by `featuredOrder`, then date. `getPublishedLabNotes()` excludes drafts and supplies both note listings and static article paths. Equal dates use entry IDs for stable ordering. Dates do not schedule publication. See [content authoring](docs/content-authoring.md) for schemas, images, related projects, and publishing.

Legacy `/work` and `/work/[slug]` routes redirect to Projects through `astro.config.mjs`. The static build emits HTML redirects; production status codes depend on hosting configuration.

## Styling and shared components

- Keep page and component presentation in scoped Astro `<style>` blocks.
- Import `tokens.css`, `fonts.css`, and `global.css` through `BaseLayout` only. Global CSS owns document defaults, box sizing, selection, keyboard focus, and reduced-motion safeguards.
- Shared values live in `src/styles/tokens.css`. Use global names such as `--color-text` and `--space-4` directly; avoid page or component aliases for the same value. Keep one-off values local and preserve distinct units and responsive formulas.
- `Prose` anchors its global Markdown selectors to a scoped wrapper. Project details use the default variant; Lab Notes uses `variant="article"`.
- `Button` accepts a required `href`, a label slot, `variant="primary" | "secondary"` (primary by default), and standard anchor attributes. Home uses primary; project cards use secondary. `ActionLink` supplies the existing primary and text variants used in detail, empty, and recovery views.
- Use Astro-processed source images from `src/assets/`. Serve original files such as `public/vomerlabs-logo.svg` unchanged. Preserve the logo's proportions and accessible home-link label.
- Kedebideri regular and bold are served locally with `font-display: swap`; the bold face is preloaded. The OFL license is stored with the fonts. Visitors make no third-party font request.

See [UI usage and token conventions](src/components/ui/README.md) and [DESIGN.md](DESIGN.md). Astro references: [styling](https://docs.astro.build/en/guides/styling/), [content collections](https://docs.astro.build/en/guides/content-collections/), and [routing](https://docs.astro.build/en/guides/routing/).

## Layout interface

`BaseLayout` requires `title` and `description`. Optional props are `canonical`, `sharingImage: { src, alt }`, and `showContactBand` (default `true`). The default slot renders inside `<main id="main-content">`; named `header`, `footer`, and `head` slots supply the shell and additional metadata. Pages own their headings.

The layout renders `ContactBand` after the main content and before the footer. Contact uses `showContactBand={false}`. `SiteFooter` accepts `topHref` for each page's Back to top target and `showDivider` for its optional top separator; Contact enables the separator. `StudioPageIntro` supplies the shared About, Contact, Projects, and Lab Notes heroes with `id`, `label`, `description`, a heading slot, and optional `showDivider` (default `true`). The two indexes disable that hero divider.

The layout appends the studio name to page titles while avoiding duplication on Home. A verified Astro `site` URL enables automatic canonical URLs. Until configured, no domain is assumed. Pass a public image URL or processed image `.src` to `sharingImage`, rather than an image metadata object.

## Launch work

Choose the host and verified production URL, then configure canonical/sharing metadata, sitemap/robots, social imagery, and static-host 404 behavior. Preserve missing-page HTTP 404 responses rather than rewriting every unknown URL to a successful page. Verify delivery for `hi@vomerlabs.com`; the repository currently supplies direct email links and no form, analytics, or response-time promise.

Add real projects and writing when supplied, and replace or hide the sample note before a production release. Keep About focused on the studio without invented biography, credentials, or results. The selected Working Index identity and existing review artifacts remain the baseline; see [the continuation handoff](docs/next-context.md) for current constraints.
