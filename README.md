# VomerLabs

An independent studio building software, exploring practical uses for AI, and sharing the process. The Astro foundation, approved Working Index homepage, Projects listing, static project details, Lab Notes templates, About, Contact, and a custom 404 are implemented. The website itself is the first project, honestly marked in progress; Lab Notes is empty until real writing is supplied; launch configuration and deployment remain a later pass.

## Development

Use Node.js 22.22.0 or newer and npm. Install the locked dependencies with `npm ci`.

```sh
npm run dev -- --background
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
```

The development server normally runs at `http://localhost:4321`. Use background mode as required by [AGENTS.md](AGENTS.md).

```sh
npm run check
npm run build
npm run preview
```

`check` validates Astro/TypeScript and synchronizes content types. `build` generates the static site in `dist/`. Empty collection directories are intentional until real content is added; Astro may report that no files matched their loaders.

## Project structure

```text
src/
  assets/                      Images processed by Astro
  components/
    content/Prose.astro         Markdown typography inside a scoped wrapper
    home/                      Homepage introduction, featured projects, studio
    lab-notes/                 Published-note preview records
    site/                      Shared header, contact footer, and informational-page intro
    ui/                        Action links, status badge, arrow icon
    projects/                  Open project record shared with the homepage
  config/site.ts               Shared name, tagline, description, language
  content/
    projects/                  Project Markdown/MDX entries
    lab-notes/                 Lab-note Markdown/MDX entries
  content.config.ts            Collection loaders and metadata schemas
  layouts/BaseLayout.astro     HTML document, metadata, skip link, layout slots
  lib/content.ts               Typed, sorted queries and draft filtering
  pages/index.astro            Homepage composition and featured-project query
  pages/projects/index.astro   Projects listing from getProjects()
  pages/projects/[slug].astro  Static project details from collection IDs
  pages/lab-notes/index.astro  Published notes or an honest empty state
  pages/lab-notes/[slug].astro Static articles; drafts receive no route
  pages/about.astro            Confirmed studio focus and working approach
  pages/contact.astro          Direct email and conversation guidance
  pages/404.astro              Missing-page recovery; builds dist/404.html
  styles/
    tokens.css                 Working Index CSS custom properties
    fonts.css                  Locally served font-face declarations
    global.css                 Document defaults and accessibility safeguards
docs/content-authoring.md       Content examples and publishing conventions
public/                        Files copied unchanged, including the V favicon
PRODUCT.md                     Confirmed product context for impeccable
DESIGN.md                      Implemented design tokens and component guidance
```

Keep route files focused on loading content and composing components. Add shared components when a real pattern repeats; group related components by purpose as the site grows. Use generated `CollectionEntry` types rather than duplicating frontmatter interfaces. No UI framework, CMS, database, or browser JavaScript is required by this foundation.

## Styling boundaries

- Write page and component styles in their own Astro `<style>` blocks; Astro scopes them by default.
- Import `tokens.css`, `fonts.css`, and `global.css` only through `BaseLayout`. Tokens define shared values; global CSS owns box sizing, document defaults, focus visibility, selection, and reduced-motion support. Font-face declarations are the other document-wide exception.
- Keep typography, cards, navigation, and other component presentation out of global CSS. There is no shared `components.css` or global utility-class layer.
- Styles from a parent do not automatically reach child components or slotted Markdown. `Prose` deliberately uses `.prose :global(...)` selectors anchored to its scoped wrapper. Keep Markdown presentation there and shell presentation in the shell components.
- Put source images in `src/assets/` and render them through Astro's image tooling. Reserve `public/` for files that must be served unchanged. The layout uses the authored `favicon-v.svg`.
- The shared header uses the owner-supplied `public/vomerlabs-logo.svg`, scaled proportionally within the established header line box. Its link keeps the accessible name “VomerLabs home”.
- The Working Index uses the proposal's warm ground, near-black text, and restrained lime accent, with darker secondary text for contrast. Kedebideri regular and bold are served locally from `src/assets/fonts/`; their SIL Open Font License is stored alongside them. The bold face is preloaded, and both faces use `font-display: swap` with sans-serif fallbacks.
- Font source: [Kedebideri on Google Fonts](https://fonts.google.com/specimen/Kedebideri); license source: [Google Fonts repository](https://github.com/google/fonts/tree/main/ofl/kedebideri). No third-party font request is made by visitors.

See Astro's [project structure](https://docs.astro.build/en/basics/project-structure/), [scoped styles](https://docs.astro.build/en/guides/styling/), and [content collections](https://docs.astro.build/en/guides/content-collections/) guides.

## Layout interface

`BaseLayout` requires `title` and `description`. It accepts optional `canonical` and `sharingImage: { src, alt }` values. The default slot renders inside `<main id="main-content">`; optional `header`, `footer`, and `head` slots support future shell components and page-specific metadata. Pages own their heading structure.

The layout appends the site name to page titles, avoiding a duplicate on the homepage. Set the verified production `site` URL in `astro.config.mjs` at launch to generate absolute canonical URLs automatically. Until then, no domain is assumed; supply absolute URLs if explicitly using canonical or sharing-image props. Provide an image's public URL or processed image `.src`, not the image metadata object.

## Content and planned routes

See [content authoring](docs/content-authoring.md) for schema fields, examples, image paths, sorting, and draft handling. Examples stay in documentation so they cannot be published accidentally. The projects collection contains the real website entry; Lab Notes is empty until writing is ready.

The homepage lists projects returned by `getFeaturedProjects()`. Both it and the Projects index use `src/components/projects/ProjectCard.astro`, with status, category, description, tags, a preview when available, and a secondary “Learn more” link to the project detail. The homepage uses h3 card titles beneath Featured projects; the Projects index uses h2 titles and lists every entry returned by `getProjects()`. Each listing retains its own empty state. `WebsiteBuildPreview.astro` lives alongside the card and provides the real website build diagram.

| Route | Status and responsibility |
| --- | --- |
| `/` | Implemented: introduction, featured project, studio, contact |
| `/projects` | Implemented: project listing |
| `/projects/[slug]` | Implemented: static project details generated from collection IDs |
| `/lab-notes` | Implemented: published note listing and empty state |
| `/lab-notes/[slug]` | Implemented: static article template from published collection IDs |
| `/about` | Implemented: studio focus and working approach |
| `/contact` | Implemented: direct email and contact guidance |
| `/404` | Implemented: helpful missing-page response, noindex |

The current project is available at `/projects/vomerlabs-website`. Project detail pages render Markdown/MDX through the scoped `Prose` component and show category, publication date, optional update date, tags, and written status. Covers use Astro image processing and the required alternative text. Demo and source actions appear only when supplied. Header Projects and Lab Notes links indicate their current section; Studio opens `/about`, and Contact opens `/contact`, both with current-page indication. Primary email actions still open `hi@vomerlabs.com` directly. Each page has a working Back to top link. Lab Notes uses `getPublishedLabNotes()` for both its listing and static paths, so drafts receive neither links nor routes in development or production. There are no published articles yet; the index offers a direct path to Projects. Article pages support Markdown/MDX, UTC dates, optional update date/topics, processed covers, related projects, and return navigation. Missing related-project references are omitted from the rendered links; keep authoring references valid. Any future note surfaces must use the same published-note helper. Consult Astro's [routing guide](https://docs.astro.build/en/guides/routing/) before adding pages.

## Informational pages and missing URLs

About stays focused on the studio, as the owner requested. It uses the confirmed description and approach without a personal biography, credentials, or invented results. Contact provides a visible, selectable email link and prompts for a project, question, or collaboration. There is no form or response-time promise. Email delivery still needs verification at launch.

`PageIntro` carries the established index introduction into About and Contact. The footer accepts `showInvitation` (default `true`); Contact sets it to `false` so its primary email task appears once. Existing pages retain their normal footer. The homepage Studio section and all existing fragment IDs remain in place.

Astro emits `dist/404.html` for the custom missing-page response. It includes home/projects recovery links and `noindex`, with no automatic redirect or client script. Unknown URLs return this page with a 404 status in Astro development/preview; configure and verify the eventual static host's custom-404 handling at deployment rather than adding a catch-all 200 rewrite.

## Next phase and launch

Continue launch preparation with impeccable from the supplied proposal, `PRODUCT.md`, and the established Working Index visual system in `DESIGN.md`. Its `.impeccable/design.json` companion contains tokens and component previews for the design panel. The project records a comp-first workflow in `.impeccable/config.json`. The selected homepage comp, its comparisons, and their exact imagegen prompts are development artifacts in `.impeccable/mocks/`; none are delivered as website imagery. Add additional real projects, writing, and an author biography when supplied.

Hosting and deployment remain undecided. The output is a static `dist/` directory with no server adapter requirement. Before launch, choose and document the host, configure the real production URL, add sitemap/robots and sharing assets, and verify email delivery. The provided email is wired as a direct link; this repository cannot verify the mailbox's delivery configuration. Do not deploy example claims, invented contact details, or draft notes.

Home and the Lab Notes index share `src/components/lab-notes/NotePreview.astro`: full-row links with publication date, reading time estimated at 200 words per minute, title, description, and topic chips. The homepage shows its three latest published notes using h3 titles; the index lists all published notes using h2 titles. Both retain their existing empty states and draft filtering. The supplied sample remains explicitly labeled as a sample.

Project routes use `/projects` and `/projects/[slug]`. Legacy `/work` and `/work/[slug]` URLs redirect to the matching Projects pages through `astro.config.mjs`. In this static build, Astro emits HTML redirects; server-level redirect status codes depend on the eventual hosting adapter or configuration.
