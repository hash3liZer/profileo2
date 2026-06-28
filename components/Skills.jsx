import Reveal from './ui/Reveal';
import { skillGroups } from '../lib/site';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <p className="eyebrow">Skills</p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="h2">What I bring to an engagement.</h2>
          </Reveal>
        </div>

        <div className={styles.grid}>
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi} className={styles.group}>
              <div className={styles.groupHead}>
                <span className={styles.num}>{String(gi + 1).padStart(2, '0')}</span>
                <h3 className={styles.groupTitle}>{group.title}</h3>
              </div>
              <ul className={styles.list}>
                {group.items.map((item) => (
                  <li key={item} className={styles.item}>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
