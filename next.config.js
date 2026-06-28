/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export for GitHub Pages (no Node server at runtime).
  output: 'export',
  // next/image optimization needs a server; disable it for static export.
  images: { unoptimized: true },
  // Emit /section/ as /section/index.html so paths resolve cleanly on Pages.
  trailingSlash: true,
  reactStrictMode: true,
};

module.exports = nextConfig;
