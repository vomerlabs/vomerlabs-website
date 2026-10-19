import { getCollection, type CollectionEntry } from 'astro:content';

type DatedEntry = CollectionEntry<'projects'> | CollectionEntry<'lab-notes'>;

function newestFirst(a: DatedEntry, b: DatedEntry): number {
  return (
    b.data.publishedAt.getTime() - a.data.publishedAt.getTime() ||
    a.id.localeCompare(b.id, 'en')
  );
}

export async function getProjects(): Promise<CollectionEntry<'projects'>[]> {
  return (await getCollection('projects')).sort(newestFirst);
}

export async function getFeaturedProjects(): Promise<CollectionEntry<'projects'>[]> {
  const projects = await getCollection('projects', ({ data }) => data.featured);

  return projects.sort((a, b) => {
    const aOrder = a.data.featuredOrder ?? Number.POSITIVE_INFINITY;
    const bOrder = b.data.featuredOrder ?? Number.POSITIVE_INFINITY;
    return (aOrder === bOrder ? 0 : aOrder - bOrder) || newestFirst(a, b);
  });
}

/** Use this helper for listings and getStaticPaths so drafts never receive public routes. */
export async function getPublishedLabNotes(): Promise<CollectionEntry<'lab-notes'>[]> {
  return (await getCollection('lab-notes', ({ data }) => !data.draft)).sort(newestFirst);
}
