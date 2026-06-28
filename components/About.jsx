import Reveal from './ui/Reveal';
import { facts, links } from '../lib/site';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.left}>
            <Reveal>
              <p className="eyebrow">About</p>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="h2" style={{ marginTop: 16 }}>
                I break things and build them.
              </h2>
            </Reveal>
          </div>

          <div className={styles.right}>
            <Reveal delay={1}>
              <p className={styles.para}>
                I&apos;m <strong>Shameer Kashif</strong>, a security researcher
                and AI engineer who also builds full stack. On the offensive
                side I work on{' '}
                <span className={styles.hl}>web and wireless exploitation</span>,
                network penetration testing, and reconnaissance. On the building
                side I design{' '}
                <span className={styles.hl}>autonomous agents</span> and ship{' '}
                <span className={styles.hl}>full stack</span> applications end to
                end.
              </p>
            </Reveal>
            <Reveal delay={2}>
              <p className={styles.para}>
                I hold the <strong>OSCP</strong>, <strong>OSWP</strong>, and{' '}
                <strong>eCPPTv2</strong> certifications and play a lot of CTFs.
                In 2024 I won the Digital Pakistan Cyber Security Hackathon and
                the Turkish COMSEC HackMaster. I write up the interesting work on
                my{' '}
                <a href={links.blog}>blog</a>
                .
              </p>
            </Reveal>

            <Reveal delay={3} className={styles.factsWrap}>
              <dl className={styles.facts}>
                {facts.map((f) => (
                  <div key={f.label} className={styles.fact}>
                    <dt>{f.label}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
