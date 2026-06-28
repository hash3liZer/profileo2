'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { site, links } from '../lib/site';
import Terminal from './Terminal';
import styles from './Hero.module.css';

// 3D is client-only and lazy — never blocks first paint or SSR/export.
const HeroCanvas = dynamic(() => import('./three/HeroCanvas'), { ssr: false });

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.canvasWrap} aria-hidden="true">
        <HeroCanvas />
      </div>

      <div className={`container ${styles.inner}`}>
        <motion.div
          className={styles.left}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.p className={`eyebrow ${styles.eyebrow}`} variants={item}>
            {site.roles.slice(0, 3).join(' · ')}
          </motion.p>

          <motion.h1 className={`display ${styles.title}`} variants={item}>
            <span>Shameer</span>
            <br />
            <span className="accent">Kashif</span>
          </motion.h1>

          <motion.p className={styles.lead} variants={item}>
            {site.tagline}
          </motion.p>

          <motion.div className={styles.cta} variants={item}>
            <a href="#work" className="btn btn-primary">
              View Work
              <span aria-hidden="true">↓</span>
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in touch
            </a>
          </motion.div>

          <motion.div className={styles.socials} variants={item}>
            <a href={links.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <span className={styles.sep} />
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <span className={styles.sep} />
            <a href={links.blog}>Blog</a>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.right}
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Terminal />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className={styles.scroll}
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <span className={styles.scrollLine} />
        scroll
      </motion.a>
    </section>
  );
}
