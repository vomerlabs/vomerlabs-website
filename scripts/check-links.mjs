import { existsSync } from 'node:fs';
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const dist = path.resolve('dist');
const failures = [];
let pageCount = 0;
let referenceCount = 0;

async function* htmlFiles(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const filePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      yield* htmlFiles(filePath);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      yield filePath;
    }
  }
}

function isExternal(value) {
  return /^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(value);
}

function resolveReference(pageUrl, rawValue) {
  const value = rawValue.trim();
  if (!value || value.startsWith('#') || isExternal(value)) {
    return null;
  }

  const withoutSuffix = value.split('#')[0].split('?')[0];
  if (!withoutSuffix) {
    return null;
  }

  const pathname = decodeURIComponent(
    withoutSuffix.startsWith('/')
      ? withoutSuffix
      : path.posix.resolve(
          pageUrl.endsWith('/') ? pageUrl : path.posix.dirname(pageUrl),
          withoutSuffix,
        ),
  );

  if (!pathname.endsWith('/') && !path.posix.extname(pathname)) {
    failures.push(`${pageUrl}: "${rawValue}" is not a directory URL; add a trailing slash.`);
  }

  const target = pathname.endsWith('/')
    ? path.join(dist, pathname, 'index.html')
    : path.join(dist, pathname);

  if (!existsSync(target)) {
    failures.push(`${pageUrl}: "${rawValue}" does not resolve to ${path.relative(dist, target)}.`);
  }

  referenceCount += 1;
  return pathname;
}

if (!existsSync(dist)) {
  console.error('dist/ is missing. Run `npm run build` before checking links.');
  process.exit(1);
}

for await (const filePath of htmlFiles(dist)) {
  pageCount += 1;
  const html = await readFile(filePath, 'utf8');
  const relativeFile = path.relative(dist, filePath).split(path.sep).join('/');
  const pageUrl = `/${relativeFile.replace(/(^|\/)index\.html$/, '$1')}`;

  for (const match of html.matchAll(/(?:href|src)="([^"]*)"/g)) {
    resolveReference(pageUrl, match[1]);
  }
}

if (failures.length > 0) {
  console.error(`Link check failed with ${failures.length} problem(s):`);
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(`Link check passed: ${pageCount} pages, ${referenceCount} internal references.`);
