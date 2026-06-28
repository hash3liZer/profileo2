import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllSlugs, getPostBySlug } from '../../../lib/posts';
import { renderMarkdown } from '../../../lib/markdown';
import { formatDate } from '../../../lib/format';
import { site } from '../../../lib/site';
import styles from '../blog.module.css';
import '../prose.css';

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    return {};
  }
  const url = `/blog/${slug}`;
  const images = post.image ? [{ url: post.image }] : undefined;
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.summary,
      url,
      images,
      publishedTime: post.created || undefined,
      modifiedTime: post.lastmod || post.created || undefined,
      authors: [site.name],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: post.image ? [post.image] : undefined,
    },
  };
}

function absImage(image) {
  if (!image) return undefined;
  return image.startsWith('http') ? image : `${site.url}${image}`;
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  const html = await renderMarkdown(post.content);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.summary,
    datePublished: post.created || undefined,
    dateModified: post.lastmod || post.created || undefined,
    image: absImage(post.image),
    author: { '@type': 'Person', name: site.name, url: site.url },
    publisher: { '@type': 'Person', name: site.name, url: site.url },
    mainEntityOfPage: `${site.url}/blog/${slug}`,
    keywords: post.tags.join(', '),
  };

  return (
    <main id="top" className={styles.postPage}>
      <article className={`container ${styles.article}`}>
        <Link href="/blog" className={styles.back}>
          <span aria-hidden="true">←</span> All posts
        </Link>

        <header className={styles.postHeader}>
          <div className={styles.meta}>
            <time>{formatDate(post.created)}</time>
            <span className={styles.dot} />
            <span>{post.readingTime} min read</span>
          </div>
          <h1 className={styles.postTitle}>{post.title}</h1>
          {post.summary && <p className={styles.postSummary}>{post.summary}</p>}
        </header>

        {post.image && (
          <div className={styles.cover}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.image} alt="" />
          </div>
        )}

        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <footer className={styles.postFooter}>
          <Link href="/blog" className="btn btn-ghost">
            ← Back to all posts
          </Link>
        </footer>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
