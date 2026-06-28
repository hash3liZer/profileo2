import Link from 'next/link';
import Footer from '../../components/Footer';
import { site, links } from '../../lib/site';
import { resume } from '../../lib/resume';
import styles from './resume.module.css';

export const metadata = {
  title: 'Resume',
  description:
    'Resume of Shameer Kashif (hash3liZer), senior security engineer specializing in application security, Agentic AI, DevSecOps, and full stack.',
  // Keep this page out of search indexes.
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

export default function ResumePage() {
  return (
    <>
      <header className={styles.topbar}>
        <div className={`container ${styles.topbarInner}`}>
          <Link href="/" className={styles.back}>
            <span aria-hidden="true">←</span> {site.handle}
          </Link>
          <div className={styles.actions}>
            <Link href="/" className={styles.backLink}>
              Back to site
            </Link>
          </div>
        </div>
      </header>

      <main className={styles.page}>
        <div className={`container ${styles.doc}`}>
          {/* Heading */}
          <section className={styles.head}>
            <p className="eyebrow">Resume</p>
            <h1 className={styles.name}>{site.name}</h1>
            <p className={styles.title}>{resume.title}</p>
            <ul className={styles.contact}>
              <li>{resume.location}</li>
              <li>
                <a href={links.email}>{site.email}</a>
              </li>
              <li>
                <a href={links.github} target="_blank" rel="noopener noreferrer">
                  github.com/{site.handle}
                </a>
              </li>
              <li>
                <a href={links.website} target="_blank" rel="noopener noreferrer">
                  shameerkashif.me
                </a>
              </li>
              <li>
                <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/hash3lizer
                </a>
              </li>
            </ul>
          </section>

          {/* Highlights */}
          <section className={styles.highlights}>
            {resume.highlights.map((h) => (
              <div key={h.label} className={styles.highlight}>
                <span className={styles.hValue}>{h.value}</span>
                <span className={styles.hLabel}>{h.label}</span>
              </div>
            ))}
          </section>

          {/* Summary */}
          <section className={styles.block}>
            <p className={styles.summary}>{resume.summary}</p>
          </section>

          {/* Experience */}
          <section className={styles.block}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <div className={styles.timeline}>
              {resume.experience.map((job) => (
                <article key={job.org + job.role} className={styles.job}>
                  <div className={styles.jobHead}>
                    <div>
                      <h3 className={styles.jobRole}>{job.role}</h3>
                      <p className={styles.jobOrg}>
                        {job.org} <span className={styles.dot} /> {job.location}
                      </p>
                    </div>
                    <span className={styles.period}>{job.period}</span>
                  </div>
                  <p className={styles.jobSummary}>{job.summary}</p>
                  <ul className={styles.bullets}>
                    {job.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          {/* Two column: Education + Leadership */}
          <div className={styles.twoCol}>
            <section className={styles.block}>
              <h2 className={styles.sectionTitle}>Education</h2>
              {resume.education.map((e) => (
                <div key={e.org} className={styles.entry}>
                  <div className={styles.jobHead}>
                    <h3 className={styles.jobRole}>{e.degree}</h3>
                    <span className={styles.period}>{e.period}</span>
                  </div>
                  <p className={styles.jobOrg}>{e.org}</p>
                  <p className={styles.entryDetail}>{e.detail}</p>
                </div>
              ))}
            </section>

            <section className={styles.block}>
              <h2 className={styles.sectionTitle}>Leadership</h2>
              {resume.leadership.map((l) => (
                <div key={l.org} className={styles.entry}>
                  <div className={styles.jobHead}>
                    <h3 className={styles.jobRole}>{l.role}</h3>
                    <span className={styles.period}>{l.period}</span>
                  </div>
                  <p className={styles.jobOrg}>{l.org}</p>
                  <p className={styles.entryDetail}>{l.detail}</p>
                </div>
              ))}
            </section>
          </div>

          {/* Certifications + Awards */}
          <div className={styles.twoCol}>
            <section className={styles.block}>
              <h2 className={styles.sectionTitle}>Certifications</h2>
              <ul className={styles.certs}>
                {resume.certifications.map((c) => (
                  <li key={c.name} className={styles.cert}>
                    <span className={styles.certName}>{c.name}</span>
                    <span className={styles.certFull}>{c.full}</span>
                    <span className={styles.certYear}>{c.year}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className={styles.block}>
              <h2 className={styles.sectionTitle}>CTF & Awards</h2>
              <ul className={styles.certs}>
                {resume.awards.map((a) => (
                  <li key={a.name} className={styles.cert}>
                    <span className={styles.certName}>{a.result}</span>
                    <span className={styles.certFull}>{a.name}</span>
                    <span className={styles.certYear}>{a.year}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Skills */}
          <section className={styles.block}>
            <h2 className={styles.sectionTitle}>Skills</h2>
            <div className={styles.skills}>
              {resume.skills.map((g) => (
                <div key={g.title} className={styles.skillGroup}>
                  <h3 className={styles.skillTitle}>{g.title}</h3>
                  <ul className={styles.skillList}>
                    {g.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
