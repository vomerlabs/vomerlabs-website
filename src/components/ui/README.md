# Button

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

## Shared CSS variables

Define shared design values in `src/styles/tokens.css`, imported once by `BaseLayout.astro`. Components and pages use these globals directly inside their scoped styles.

- Keep descriptive category and role names: `--color-text`, `--font-size-caption`, `--line-height-prose`, and `--space-4`.
- Reuse the same token wherever the value serves the same purpose. Avoid page or component aliases such as `--home-ink` or `--home-notes-muted`.
- Use `--color-surface-raised` for pale cards and empty states. Tinted panels use `--color-surface-tinted`, `--color-border-tinted`, and the tinted text tokens; prose uses `--color-text-prose` and `--color-link`.
- Use `--space-*` for the rem spacing scale. `--space-prose`, `--layout-*`, and `--panel-*` preserve the existing fixed pixel spacing for reading content, shared column layouts, and supporting panels.
- Keep responsive overrides in scoped media queries, selecting the appropriate shared token. Keep one-off values local, and preserve distinct units, fluid type formulas, and values with different purposes.

```css
.description {
  color: var(--color-text-muted);
  font-size: var(--font-size-body);
  margin-block-start: var(--space-3);
}
```
