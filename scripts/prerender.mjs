// Runs after `vite build` and the SSR build: renders every page to its own
// HTML file with page-specific title, description, canonical and social tags,
// plus 404.html, and writes the sitemap. Vercel's cleanUrls serves /farm from farm.html.
import fs from 'node:fs';
import path from 'node:path';

const DIST = 'dist';
const { render, ALL_PATHS, NOT_FOUND_META, SITE_URL, canonicalUrl, pageMeta, pageJsonLd } = await import(
  path.resolve('dist-server/entry-server.js')
);

const escapeHtml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const setTag = (html, pattern, value) => {
  if (!pattern.test(html)) throw new Error(`prerender: tag not found in template: ${pattern}`);
  return html.replace(pattern, (_, before, after) => `${before}${escapeHtml(value)}${after}`);
};

const template = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');

const renderPage = (pagePath, meta, { notFound = false } = {}) => {
  const url = canonicalUrl(pagePath);
  let html = template;
  html = setTag(html, /(<title>)[^<]*(<\/title>)/, meta.title);
  html = setTag(html, /(<meta name="description" content=")[^"]*(")/, meta.description);
  html = setTag(html, /(<meta property="og:title" content=")[^"]*(")/, meta.title);
  html = setTag(html, /(<meta property="og:description" content=")[^"]*(")/, meta.description);
  if (notFound) {
    html = html.replace(/\s*<link rel="canonical"[^>]*>/, '').replace(/\s*<meta property="og:url"[^>]*>/, '');
    html = html.replace('<meta name="viewport"', '<meta name="robots" content="noindex" />\n    <meta name="viewport"');
  } else {
    html = setTag(html, /(<link rel="canonical" href=")[^"]*(")/, url);
    html = setTag(html, /(<meta property="og:url" content=")[^"]*(")/, url);
  }
  const jsonLd = pageJsonLd(pagePath)
    .map((data) => `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`)
    .join('\n    ');
  if (!html.includes('<!--page-jsonld-->')) throw new Error('prerender: <!--page-jsonld--> placeholder not found');
  html = html.replace('<!--page-jsonld-->', jsonLd);
  if (!html.includes('<div id="root"></div>')) throw new Error('prerender: empty #root not found');
  return html.replace('<div id="root"></div>', `<div id="root">${render(pagePath)}</div>`);
};

for (const pagePath of ALL_PATHS) {
  const file = pagePath === '/' ? 'index.html' : `${pagePath.slice(1)}.html`;
  fs.mkdirSync(path.dirname(path.join(DIST, file)), { recursive: true });
  fs.writeFileSync(path.join(DIST, file), renderPage(pagePath, pageMeta(pagePath)));
  console.log(`prerendered ${pagePath} -> ${file}`);
}

fs.writeFileSync(path.join(DIST, '404.html'), renderPage('/404', NOT_FOUND_META, { notFound: true }));
console.log('prerendered 404.html');

const today = new Date().toISOString().slice(0, 10);
const priority = (p) =>
  p === '/' ? '1.0' : p === '/training' || p === '/contact' ? '0.9' : p === '/farm' ? '0.8' : '0.6';
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ALL_PATHS.map(
  (p) => `  <url>
    <loc>${canonicalUrl(p)}</loc>
    <lastmod>${today}</lastmod>
    <priority>${priority(p)}</priority>
  </url>`,
).join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(DIST, 'sitemap.xml'), sitemap);
console.log(`wrote sitemap.xml for ${SITE_URL}`);
