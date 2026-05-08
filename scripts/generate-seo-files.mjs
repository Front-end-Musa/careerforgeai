import { readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const siteUrl = 'https://resume-crafts.com';
const seoPagesPath = join(rootDir, 'src', 'app', 'core', 'seo', 'seo-pages.json');
const publicDir = join(rootDir, 'public');

const seoPages = JSON.parse(await readFile(seoPagesPath, 'utf8'));
const sitemapPages = seoPages.filter(
  (page) => page.sitemap === true && !page.robots?.toLowerCase().includes('noindex'),
);
const disallowedPaths = seoPages
  .filter((page) => page.robots?.includes('noindex'))
  .map((page) => page.path)
  .filter((path, index, paths) => paths.indexOf(path) === index);

validateSeoPages(seoPages);

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...sitemapPages.flatMap((page) => [
    '  <url>',
    `    <loc>${escapeXml(toCanonicalUrl(page.path))}</loc>`,
    page.changefreq ? `    <changefreq>${page.changefreq}</changefreq>` : '',
    typeof page.priority === 'number' ? `    <priority>${page.priority.toFixed(2)}</priority>` : '',
    '  </url>',
  ].filter(Boolean)),
  '</urlset>',
  '',
].join('\n');

const robots = [
  'User-agent: *',
  'Allow: /',
  ...disallowedPaths.map((path) => `Disallow: ${path}`),
  '',
  `Sitemap: ${siteUrl}/sitemap.xml`,
  '',
].join('\n');

await Promise.all([
  writeFile(join(publicDir, 'sitemap.xml'), sitemap),
  writeFile(join(publicDir, 'robots.txt'), robots),
]);

console.log(`Generated ${sitemapPages.length} sitemap URLs and ${disallowedPaths.length} robots disallow rules.`);

function validateSeoPages(pages) {
  const paths = new Set();

  for (const page of pages) {
    if (!page.path?.startsWith('/')) {
      throw new Error(`SEO page path must start with "/": ${page.path}`);
    }

    if (paths.has(page.path)) {
      throw new Error(`Duplicate SEO page path: ${page.path}`);
    }

    if (page.sitemap === true && page.robots?.toLowerCase().includes('noindex')) {
      throw new Error(`Sitemap page cannot be noindex: ${page.path}`);
    }

    paths.add(page.path);
  }
}

function toCanonicalUrl(path) {
  return `${siteUrl}${path === '/' ? '/' : path}`;
}

function escapeXml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}
