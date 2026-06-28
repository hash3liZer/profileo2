'use client';

import { useEffect, useRef, useState } from 'react';
import { site } from '../lib/site';
import styles from './Terminal.module.css';

// A small terminal graphic for the hero. Types through the role list with a
// blinking cursor. Falls back to a static list when reduced motion is set.
export default function Terminal() {
  const roles = site.roles;
  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  const [text, setText] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const state = useRef({ i: 0, deleting: false });

  useEffect(() => {
    if (reduced) return;
    let timer;
    const tick = () => {
      const full = roles[roleIdx % roles.length];
      const s = state.current;
      if (!s.deleting) {
        s.i += 1;
        setText(full.slice(0, s.i));
        if (s.i >= full.length) {
          s.deleting = true;
          timer = setTimeout(tick, 1300);
          return;
        }
        timer = setTimeout(tick, 55);
      } else {
        s.i -= 1;
        setText(full.slice(0, s.i));
        if (s.i <= 0) {
          s.deleting = false;
          setRoleIdx((r) => r + 1);
          timer = setTimeout(tick, 260);
          return;
        }
        timer = setTimeout(tick, 28);
      }
    };
    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, [roleIdx, reduced, roles]);

  return (
    <div className={styles.window} aria-hidden="true">
      <div className={styles.bar}>
        <span className={styles.dot} data-c="r" />
        <span className={styles.dot} data-c="y" />
        <span className={styles.dot} data-c="g" />
        <span className={styles.title}>{site.handle} — bash</span>
      </div>
      <div className={styles.body}>
        <p className={styles.line}>
          <span className={styles.prompt}>{site.handle}@portfolio</span>
          <span className={styles.path}>:~$</span> whoami
        </p>
        <p className={styles.out}>{site.name}</p>

        <p className={styles.line}>
          <span className={styles.prompt}>{site.handle}@portfolio</span>
          <span className={styles.path}>:~$</span> cat role.txt
        </p>

        {reduced ? (
          roles.map((r) => (
            <p key={r} className={styles.out}>
              {r}
            </p>
          ))
        ) : (
          <p className={styles.typed}>
            <span className={styles.arrow}>&gt;</span> {text}
            <span className={styles.cursor} />
          </p>
        )}
      </div>
    </div>
  );
}
