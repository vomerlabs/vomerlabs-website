---
version: 1
slug: "src-components-site-sitefooter-astro"
primary_target: "src/components/site/SiteFooter.astro"
related_targets: ["src/layouts/BaseLayout.astro", "src/components/site/ContactBand.astro"]
---

# Shared footer

Mode: Persuade. Visitors finish reading, choose another page, email the studio, or return to the page heading. The owner rejected the playful footer and explicitly requested a new, non-playful design. Preserve the established palette, font, owner-supplied logo, shared container, and separate contact band. No invented social profiles, claims, or projects.

## Direction contract

THESIS: A restrained studio directory closes the page with useful information, rather than a second display statement.

OWN-WORLD: Warm paper, original 160px wordmark, ink section headings, green-gray supporting copy, thin rules, local Kedebideri. No oversized logo, colored labels, tilted type, or decorative controls.

STORY: Recognize the studio, scan Work / Lab Notes / About / Contact, use the real email, and return to the current page's heading.

FIRST VIEWPORT: Three columns: studio identity and supplied description, Explore navigation, Contact email and a short invitation. A thin rule separates copyright and a plain Back to top link. At 768px and below, studio identity spans the first row, then navigation and contact sit alongside one another. All controls have at least 44px height.

FORM: A compact editorial studio directory; an extension of the established surface, with no visual-world or surface concept roll required. Code-led component work; no generated comp.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Quality bar

Quiet, readable, and useful at 320px. Brand, navigation, and contact groups must remain distinct without panels or decorative effects. Shared content edges must match About. Native links, visible focus, and Back to top must work without JavaScript. The lime ContactBand stays a separate sibling above the footer and remains hidden on Contact. The original topHref and showDivider component options remain supported.

## Verification

The component uses existing color, type, and spacing tokens. The original `/vomerlabs-logo.svg` remains unchanged; the footer displays it at 160px. Description and email come from the shared site config. The original `topHref` and `showDivider` options remain supported. `ContactBand.astro` remains a separate, unchanged sibling rendered by BaseLayout; Contact opts out with `showContactBand={false}`.

Astro check and build pass; the detector returned `[]`. At 1440px, 390px, and 320px, review found no horizontal overflow or script errors, and confirmed native navigation, visible focus, mailto, and Back to top. All six captures in `.impeccable/review/footer-quiet/` are valid: `desktop.png`, `mobile.png`, and `mobile-small.png` show footer details; their corresponding `-page.png` files show full-page context. Every contract region matches. Reviewer disposition: **ship**; no material fixes, ceiling reached.

## Documentation and assets

Footer-specific typography, reflow, content, interaction, and separation from ContactBand are recorded in `DESIGN.md`. This ordinary component extension preserves the incumbent Working Index world and introduces no shared tokens. The pre-existing `.impeccable/design.json` drift is outside this task and remains unrepaired. No new shipping raster was added; the original logo is an SVG and screenshots are review evidence.
