import { getAllPostsMeta } from '../lib/posts';
import { site } from '../lib/site';

export const dynamic = 'force-static';

export default function sitemap() {
  const base = site.url;
  // Trailing slashes to match canonical URLs (next config: trailingSlash: true).
  const posts = getAllPostsMeta().map((p) => ({
    url: `${base}/blog/${p.slug}/`,
    lastModified: p.lastmod || p.created || undefined,
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [
    { url: `${base}/`, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/blog/`, changeFrequency: 'weekly', priority: 0.8 },
    ...posts,
  ];
}
