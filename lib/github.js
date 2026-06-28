// Build-time GitHub data fetch. Runs in the Server Component during
// `next build` (static export), so the result is baked into the HTML.
// Auth is optional: with GITHUB_API_KEY set we get higher rate limits,
// without it the unauthenticated API still works for public data.

import { site } from './site';

const headers = () => {
  const h = { Accept: 'application/vnd.github+json' };
  if (process.env.GITHUB_API_KEY) {
    h.Authorization = `token ${process.env.GITHUB_API_KEY}`;
  }
  return h;
};

export async function getGitHubData() {
  const user = site.githubUsername;
  const fallback = {
    user: { login: user, public_repos: 0, followers: 0, html_url: `https://github.com/${user}` },
    repos: [],
  };

  try {
    const [userRes, repoRes] = await Promise.all([
      fetch(`https://api.github.com/users/${user}`, { headers: headers() }),
      fetch(`https://api.github.com/users/${user}/repos?per_page=100&sort=updated`, {
        headers: headers(),
      }),
    ]);

    if (!userRes.ok || !repoRes.ok) return fallback;

    const profile = await userRes.json();
    let repos = await repoRes.json();
    if (!Array.isArray(repos)) return { ...fallback, user: profile };

    repos = repos
      .filter((r) => !r.fork && !r.archived)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 6)
      .map((r) => ({
        id: r.id,
        name: r.name,
        description: r.description,
        html_url: r.html_url,
        homepage: r.homepage,
        language: r.language,
        stargazers_count: r.stargazers_count,
        forks_count: r.forks_count,
        topics: r.topics || [],
      }));

    return {
      user: {
        login: profile.login,
        name: profile.name,
        bio: profile.bio,
        avatar_url: profile.avatar_url,
        public_repos: profile.public_repos,
        followers: profile.followers,
        html_url: profile.html_url,
      },
      repos,
    };
  } catch (err) {
    console.warn('GitHub fetch failed, using fallback:', err?.message);
    return fallback;
  }
}
