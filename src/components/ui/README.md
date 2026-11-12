# UI components

The `ui/` folder holds the small shared anchors, status label, and icon. All render on the server and need no client-side JavaScript.

## Button

`Button.astro` is a navigation link styled as a rectangular button, with the shared northeast arrow. It renders an anchor and needs no client-side JavaScript.

```astro
---
import Button from './Button.astro';
---

<Button href="/contact/">Get in touch</Button>
<Button href="/projects/" variant="secondary">Explore projects</Button>
```

- `href` (required): the destination URL.
- `variant`: `primary` (default) uses accent green with a deeper green hover; `secondary` uses ink with an olive hover.
- The default slot supplies the label. Standard anchor attributes, including `class`, `aria-label`, `target`, and `rel`, are forwarded.

Both variants include visible keyboard focus, responsive padding, a minimum 44px height, and reduced-motion support. Keep page-specific spacing on the caller's class; the component owns its colors and states. Use a native `<button>` for form submissions and other actions that do not navigate.

## ActionLink

`ActionLink.astro` renders an anchor with the shared arrow. It is used for detail, empty, related, and recovery links.

```astro
---
import ActionLink from './ActionLink.astro';
---

<ActionLink href="/projects/">Explore projects</ActionLink>
<ActionLink href="/lab-notes/" variant="text">Back to Lab Notes</ActionLink>
```

- `href` (required): the destination URL.
- `variant`: `primary` (default) draws the accent pill; `text` draws the lime underline treatment.
- The default slot supplies the label.

## ProjectStatus

`ProjectStatus.astro` shows a project's authored status as a pill with a status dot. Pass the generated `CollectionEntry<'projects'>['data']['status']` value; the component maps `live`, `prototype`, `experiment`, and `in-progress` to their visible labels. The dot is decorative.

## ArrowIcon

`ArrowIcon.astro` is the shared northeast arrow. It is decorative (`aria-hidden`) and inherits `currentColor`; rotate it with a scoped transform when a different direction is needed. Do not add a label for it, because the surrounding link or heading carries the accessible name.

## Shared CSS variables

Define shared design values in `src/styles/tokens.css`, imported once by `BaseLayout.astro`. Components and pages use these globals directly inside their scoped styles.

- Keep descriptive category and role names: `--color-text`, `--font-size-caption`, `--line-height-prose`, and `--space-4`.
- Reuse the same token wherever the value serves the same purpose. Avoid page or component aliases such as `--home-ink` or `--home-notes-muted`.
- Use `--color-surface-raised` for pale cards and empty states. Tinted panels use `--color-surface-tinted`, `--color-border-tinted`, and the tinted text tokens; prose uses `--color-text-prose` and `--color-link`.
- Use `--radius-small` for the shared 0.25rem corner radius. Do not use a spacing token as a radius.
- Title scale: `--font-size-page-title` belongs to the large index heroes (`StudioPageIntro`); `--font-size-detail-title` belongs to project, note, and 404 detail headings.
- Use `--space-*` for the rem spacing scale. `--space-prose`, `--layout-*`, and `--panel-*` preserve the existing fixed pixel spacing for reading content, shared column layouts, and supporting panels.
- Keep responsive overrides in scoped media queries, selecting the appropriate shared token. Keep one-off values local, and preserve distinct units, fluid type formulas, and values with different purposes. Component-local tints, such as the ContactBand accent palette, stay in that component's style block.

```css
.description {
  color: var(--color-text-muted);
  font-size: var(--font-size-body);
  margin-block-start: var(--space-3);
}
```
