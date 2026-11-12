/** Estimate reading time at 200 words per minute; undefined for an empty body. */
export function estimateReadingTime(body: string | undefined): number | undefined {
  const wordCount = body?.trim().match(/\S+/g)?.length ?? 0;
  return wordCount ? Math.ceil(wordCount / 200) : undefined;
}
