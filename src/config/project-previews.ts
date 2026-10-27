import type { AstroComponentFactory } from 'astro/runtime/server/index.js';
import WebsiteBuildPreview from '../components/projects/WebsiteBuildPreview.astro';

// Omit a project's entry to use its card image, cover image, or text-only layout.
export const projectPreviewComponents: Partial<Record<string, AstroComponentFactory>> = {
  'vomerlabs-website': WebsiteBuildPreview,
};
