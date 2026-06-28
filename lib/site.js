// Central content/config for the portfolio. Edit here to update the site.

export const site = {
  name: 'Shameer Kashif',
  handle: 'hash3liZer',
  role: 'Security Researcher',
  // used for the page title and structured data
  jobTitle: 'Security Researcher, AI Engineer & Full Stack Developer',
  // one canonical description reused across SEO tags
  description:
    'Shameer Kashif (hash3liZer) is a security researcher, AI engineer, and full stack developer. He works on web and wireless exploitation, builds autonomous agents, ships full stack applications, and plays CTFs.',
  // shown in the hero terminal and the role line
  roles: [
    'Security Researcher',
    'AI Engineer',
    'Full Stack Developer',
    'Web Exploitation',
    'Autonomous Agents',
    'Wireless Exploitation',
  ],
  // short hero line (no em dashes, no slashes-as-decoration)
  tagline:
    'I break things and I build them. Offensive security on one side, AI and full stack engineering on the other.',
  location: 'Pakistan',
  email: 'me@shameerkashif.me',
  resume: '/resume',
  // Used at build time to fetch GitHub stats; overridable via env in CI.
  githubUsername: process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'hash3liZer',
  url: 'https://shameerkashif.me',
  ogImage:
    'https://github.com/user-attachments/assets/6d314326-0216-43ee-9162-fb8a1b8c3029',
  gaId: 'G-GLL1KK0TWH',
};

export const links = {
  website: 'https://shameerkashif.me',
  blog: 'https://blog.shameerkashif.me',
  github: 'https://github.com/hash3liZer',
  linkedin: 'https://www.linkedin.com/in/hash3lizer/',
  email: 'mailto:me@shameerkashif.me',
  resume: '/resume',
};

// Nav items — anchors scroll within the single page, external links open out.
export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Writing', href: 'https://blog.shameerkashif.me', external: true },
  { label: 'Contact', href: '#contact' },
];

export const socials = [
  { label: 'Website', value: 'shameerkashif.me', href: links.website },
  { label: 'Blog', value: 'blog.shameerkashif.me', href: links.blog },
  { label: 'Email', value: 'me@shameerkashif.me', href: links.email },
  { label: 'GitHub', value: 'hash3liZer', href: links.github },
  { label: 'LinkedIn', value: 'hash3liZer', href: links.linkedin },
];

// Skill groups across his disciplines.
export const skillGroups = [
  {
    title: 'Security Research',
    items: [
      'Web Exploitation',
      'Wireless Exploitation',
      'Network Penetration Testing',
      'Reconnaissance & OSINT',
    ],
  },
  {
    title: 'AI Engineering',
    items: [
      'Autonomous Agents',
      'LLM Applications',
      'Agentic Tooling',
      'RAG & Pipelines',
    ],
  },
  {
    title: 'Full Stack',
    items: ['React & Next.js', 'Node.js', 'APIs & Backends', 'Databases'],
  },
  {
    title: 'Languages & Tools',
    items: ['Python', 'JavaScript', 'C', 'Bash', 'Linux', 'Docker'],
  },
];

// Real certifications and competition wins (from the resume).
export const certifications = ['OSCP', 'OSWP', 'eCPPTv2', 'ISC2 CC'];

export const achievements = [
  'Winner, Digital Pakistan Cyber Security Hackathon 2024',
  'Winner, Turkish COMSEC HackMaster 2024',
];

// A few highlights for the About section.
export const facts = [
  { label: 'Discipline', value: 'Security, AI, Full Stack' },
  { label: 'Certifications', value: 'OSCP, OSWP, eCPPTv2' },
  { label: 'Builds', value: 'Autonomous Agents' },
  { label: 'Based in', value: 'Pakistan' },
];
