import { site } from '../lib/site';

export const dynamic = 'force-static';

export default function robots() {
  return {
    // Allow everything. /resume is kept out of indexes via its own page-level
    // noindex meta (not disallowed here, so crawlers can still read that meta).
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
