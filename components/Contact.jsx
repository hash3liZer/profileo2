import Link from 'next/link';
import Reveal from './ui/Reveal';
import { site, socials, links } from '../lib/site';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className={styles.wrap}>
          <Reveal>
            <p className="eyebrow">Contact</p>
          </Reveal>

          <Reveal delay={1}>
            <h2 className={styles.big}>
              Let&apos;s break something,
              <br />
              <span className="accent">then build it.</span>
            </h2>
          </Reveal>

          <Reveal delay={2}>
            <p className={styles.sub}>
              Reach out for security assessments, collaborations, or a CTF team
              up. Fastest way to me is email.
            </p>
          </Reveal>

          <Reveal delay={2} className={styles.cta}>
            <a href={links.email} className="btn btn-primary">
              {site.email}
            </a>
            <Link href={links.resume} className="btn btn-ghost">
              Read my résumé
            </Link>
          </Reveal>

          <Reveal delay={3} className={styles.socials}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.social}
              >
                <span className={styles.socialLabel}>{s.label}</span>
                <span className={styles.socialValue}>{s.value}</span>
              </a>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
