---
version: 1
slug: "src-pages-projects-index-astro"
primary_target: "src/pages/projects/index.astro"
related_targets: ["src/pages/projects/[slug].astro"]
---

# Projects index and project reading

Mode: Read. Visitors want to know what exists, whether it is finished, and how it was made. Source: the projects collection, currently one real website project. Scope is pinned by docs/next-context.md: open list, static detail routes, optional real media and links, shared wayfinding. The approved homepage and design system are fixed.

## Direction contract

THESIS: A readable working index leads directly from a real project record into its build explanation.

OWN-WORLD: Inherit The Working Index: warm paper, Kedebideri, ink headings, gray-green descriptions, open ruled records, written status, mono technical metadata, lime action underlines.

STORY: Scan the project's purpose and status, open its explanation, read working behavior and next steps, then return to Work or contact the studio.

FIRST VIEWPORT: The existing masthead stays in place. Work opens with a clear heading and short introduction followed by the signature full-width project record. Detail opens with an All work link, project title and description; a thin rule introduces metadata in a quiet left column and a 70ch reading column to the right. Mobile stacks introduction, metadata, then prose in source order.

FORM: Owner-specified open index and conventional project document; no concept roll is needed for this pinned structure. Code-led under Read mode. Existing arrow motion remains the signature interaction; no entrance effects or client runtime.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Index hero refinement

Owner refinement: replace only the Work index hero with the reference at `http://localhost:4326/work/`. Reuse `StudioPageIntro` with THE PROJECT NOTEBOOK, Work, with a reason / behind it., the source introduction, and this project's fonts. Preserve `work-title`. Set `showDivider={false}` so the existing record rule remains the single boundary. Keep the current container, project list, empty state, header/footer, queries, and project detail page unchanged.

## Projects route migration

The owner renamed the Work collection and its URL/file structure to Projects. Current routes are /projects and /projects/[slug], implemented under src/pages/projects/. ProjectRecord lives under src/components/projects/, and the homepage uses FeaturedProjects.astro. Shared navigation, content links, heading IDs, CSS classes, and imports use project terminology. The historical reference URL above remains the original source. Astro config redirects /work and /work/[slug] to their corresponding new routes; static builds emit redirect HTML for existing entries.

Validation: Astro check passed with zero diagnostics and the static build passed. All 108 generated internal links and project fragments resolve, with no application links to /work. Desktop 1440px and mobile 320px browser checks with JavaScript disabled passed Home, Projects, project detail, related projects, and 404 recovery without overflow or script errors. Legacy index/detail URLs, with and without trailing slashes, return 301 responses in development; the build emits matching meta-refresh redirect pages for static hosting. Captures: `.impeccable/review/project-routes/`.

## Shared project cards

The owner requested matching Projects-page cards to the homepage. Both now use src/components/projects/ProjectCard.astro, extracted from the accepted homepage markup and styles. WebsiteBuildPreview moved into the same directory. The card keeps the real metadata, tags, optional media/demo/source support, and current secondary Learn more action. Card titles are h3 on Home and h2 on Projects, with matching styles. The index still lists getProjects(), with its existing hero and empty state. The homepage keeps its featured query, section heading, and archive action. Type check passed with zero diagnostics; build and diff checks passed. Browser checks at 1440, 960, 390, and 320px confirmed matching card dimensions/type/colors/layout, responsive stacking, visible focus, working Enter navigation without JavaScript, and no overflow. Desktop/mobile card captures: `.impeccable/review/shared-project-cards/`.
