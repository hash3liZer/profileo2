// Reads and parses blog posts from content/blog/*.md at build time.
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

function toISO(d) {
  if (!d) return null;
  const dt = d instanceof Date ? d : new Date(d);
  return Number.isNaN(dt.getTime()) ? String(d) : dt.toISOString().slice(0, 10);
}

export function getAllSlugs() {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

function readPost(slug) {
  const raw = fs.readFileSync(path.join(BLOG_DIR, `${slug}.md`), 'utf-8');
  const { data, content } = matter(raw);
  const words = content.split(/\s+/).filter(Boolean).length;
  return {
    slug,
    title: data.title || slug,
    summary: data.summary ? String(data.summary).trim() : '',
    tags: Array.isArray(data.tags) ? data.tags : [],
    categories: Array.isArray(data.categories) ? data.categories : [],
    created: toISO(data.created),
    lastmod: toISO(data.lastmod),
    image: data.image || null,
    readingTime: Math.max(1, Math.round(words / 200)),
    content,
  };
}

export function getPostBySlug(slug) {
  return readPost(slug);
}

export function getAllPosts() {
  return getAllSlugs()
    .map(readPost)
    .sort((a, b) => new Date(b.created) - new Date(a.created));
}

// Post metadata only (no body) for list views.
export function getAllPostsMeta() {
  return getAllPosts().map(({ content, ...meta }) => meta);
}

export function getAllTags() {
  const counts = new Map();
  for (const p of getAllPosts()) {
    for (const t of p.tags) counts.set(t, (counts.get(t) || 0) + 1);
  }
  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}
