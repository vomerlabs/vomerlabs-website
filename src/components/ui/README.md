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
