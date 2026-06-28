# shameerkashif.me

The personal portfolio of **Shameer Kashif** ([hash3liZer](https://github.com/hash3liZer)), penetration tester and offensive security specialist. A sleek, dark, single page site with subtle 3D and motion.

Built with **Next.js 15**, **React 19**, **react-three-fiber** + **drei** (light 3D hero), and **Framer Motion**. Statically exported and deployed to GitHub Pages.

## Stack

| | |
|---|---|
| Framework | Next.js 15 (App Router, `output: 'export'`) |
| UI | React 19 |
| 3D | three.js, @react-three/fiber, @react-three/drei |
| Motion | Framer Motion |
| Fonts | Space Grotesk, Inter, JetBrains Mono (`next/font`) |
| Hosting | GitHub Pages (static) |

## Structure

```
app/
  layout.jsx       root layout: fonts, metadata, analytics
  page.jsx         single page, fetches GitHub data at build time
  globals.css      design tokens and base styles
components/
  Navbar, Hero, About, Skills, Work, Contact, Footer
  three/HeroCanvas.jsx   morphing wireframe 3D accent (react-three-fiber)
  ui/Reveal.jsx          scroll reveal motion wrapper
lib/
  site.js          all editable content (name, links, skills, socials)
  github.js        build-time GitHub fetch
```

To change content, edit **`lib/site.js`**. Sections live in `components/`.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Optional. See `.env.local.example`, then copy it to `.env.local`:

- `GITHUB_API_KEY`: a GitHub token (no scopes needed) to raise the build-time API rate limit. Without it, unauthenticated requests are used.
- `NEXT_PUBLIC_GITHUB_USERNAME`: the GitHub account shown in the Work section.

## Build and deploy

```bash
npm run build   # produces ./out (static HTML)
```

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the static
site and publishes `out/` to the `gh-pages` branch of `hash3liZer/hash3liZer.github.io`.
The workflow preserves the custom domain `CNAME` and adds `.nojekyll` so the
`_next/` assets are served correctly.

---

Originally adapted from a VS Code themed template, fully redesigned in 2025.
