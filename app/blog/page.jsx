import Link from 'next/link';
import { getAllPostsMeta } from '../../lib/posts';
import { formatDate } from '../../lib/format';
import styles from './blog.module.css';

export const metadata = {
  title: 'Blog',
  description:
    'Writeups and notes on web exploitation, CTFs, wireless, reconnaissance, and building security tooling, by Shameer Kashif (hash3liZer).',
  alternates: { canonical: '/blog' },
};

export default function BlogIndex() {
  const posts = getAllPostsMeta();

  return (
    <main id="top" className={styles.page}>
      <div className="container">
        <header className={styles.head}>
          <p className="eyebrow">Writing</p>
          <h1 className={styles.title}>Writeups, notes and research.</h1>
          <p className={styles.lead}>
            CTF writeups, web and wireless exploitation, reconnaissance, and the
            occasional build log.
          </p>
        </header>

        <div className={styles.grid}>
          {posts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className={styles.card}>
              {p.image && (
                <div className={styles.thumb}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt="" loading="lazy" />
                </div>
              )}
              <div className={styles.cardBody}>
                <div className={styles.meta}>
                  <time>{formatDate(p.created)}</time>
                  <span className={styles.dot} />
                  <span>{p.readingTime} min read</span>
                </div>
                <h2 className={styles.cardTitle}>{p.title}</h2>
                <p className={styles.cardSummary}>{p.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
