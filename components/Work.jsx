import Reveal from './ui/Reveal';
import { links } from '../lib/site';
import styles from './Work.module.css';

const LANG_COLORS = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  C: '#8a8f98',
  'C++': '#f34b7d',
  Shell: '#89e051',
  Go: '#00ADD8',
  Rust: '#dea584',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Ruby: '#701516',
  Java: '#b07219',
  PHP: '#4F5D95',
};

export default function Work({ data }) {
  const { user, repos } = data;

  return (
    <section id="work" className="section">
      <div className="container">
        <div className={styles.head}>
          <div className="section-head" style={{ marginBottom: 0 }}>
            <Reveal>
              <p className="eyebrow">Work</p>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="h2">Selected repositories.</h2>
            </Reveal>
          </div>

          <Reveal delay={1}>
            <p className={styles.statline}>
              <span>{user.public_repos ?? 0} repos</span>
              <span className={styles.dotSep} />
              <span>{user.followers ?? 0} followers</span>
              <span className={styles.dotSep} />
              <span>@{user.login}</span>
            </p>
          </Reveal>
        </div>

        {repos.length > 0 ? (
          <div className={styles.grid}>
            {repos.map((repo, i) => (
              <Reveal
                key={repo.id}
                delay={i % 3}
                as="a"
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className={`card ${styles.repo}`}
              >
                <div className={styles.repoTop}>
                  <span className={styles.repoIcon}>{'{ }'}</span>
                  <h3 className={styles.repoName}>{repo.name}</h3>
                  <span className={styles.repoArrow}>↗</span>
                </div>
                <p className={styles.repoDesc}>
                  {repo.description || 'No description provided.'}
                </p>
                <div className={styles.repoMeta}>
                  {repo.language && (
                    <span className={styles.lang}>
                      <span
                        className={styles.dot}
                        style={{
                          background: LANG_COLORS[repo.language] || '#8a8f98',
                        }}
                      />
                      {repo.language}
                    </span>
                  )}
                  <span className={styles.metaItem}>★ {repo.stargazers_count}</span>
                  <span className={styles.metaItem}>⑂ {repo.forks_count}</span>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className={styles.empty}>
            <p className="muted">
              Live repositories load at build time from GitHub.
            </p>
          </Reveal>
        )}

        <Reveal delay={1} className={styles.more}>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            View all on GitHub ↗
          </a>
        </Reveal>
      </div>
    </section>
  );
}
