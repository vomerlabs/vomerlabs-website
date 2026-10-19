import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const commonMetadata = {
  title: z.string().trim().min(1),
  description: z.string().trim().min(1),
  publishedAt: z.coerce.date(),
  updatedAt: z.coerce.date().optional(),
  tags: z.array(z.string().trim().min(1)).default([]),
  coverImageAlt: z.string().trim().min(1).optional(),
};

const hasCoverAlternative = (data: { coverImage?: unknown; coverImageAlt?: string }) =>
  !data.coverImage || Boolean(data.coverImageAlt);

const coverAlternativeError = {
  message: 'Provide coverImageAlt when using a coverImage.',
  path: ['coverImageAlt'],
};

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z
      .object({
        ...commonMetadata,
        status: z.enum(['live', 'prototype', 'experiment', 'in-progress']),
        category: z.string().trim().min(1),
        featured: z.boolean().default(false),
        featuredOrder: z.number().int().nonnegative().optional(),
        coverImage: image().optional(),
        demoUrl: z.url({ protocol: /^https?$/ }).optional(),
        repositoryUrl: z.url({ protocol: /^https?$/ }).optional(),
      })
      .refine(hasCoverAlternative, coverAlternativeError),
});

const labNotes = defineCollection({
  loader: glob({ base: './src/content/lab-notes', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z
      .object({
        ...commonMetadata,
        draft: z.boolean().default(false),
        coverImage: image().optional(),
        relatedProjects: z.array(reference('projects')).default([]),
      })
      .refine(hasCoverAlternative, coverAlternativeError),
});

export const collections = { projects, 'lab-notes': labNotes };
