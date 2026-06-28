import { site, links } from '../lib/site';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <hr className="divider" />
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <span className={styles.brand}>{site.handle}</span>
          <span className={styles.muted}>
            © {site.name}. Built with Next.js, R3F &amp; Framer Motion.
          </span>
        </div>

        <div className={styles.links}>
          <a href={links.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={links.blog} target="_blank" rel="noopener noreferrer">
            Blog
          </a>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
