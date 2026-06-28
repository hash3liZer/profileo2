import Script from 'next/script';
import { site, links, certifications } from '../lib/site';
import './globals.css';

const ogTitle = `${site.name} | ${site.jobTitle}`;

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Security Researcher, AI Engineer, Full Stack`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: `${site.name} Portfolio`,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: 'technology',
  keywords: [
    'Shameer Kashif',
    'hash3liZer',
    'security researcher',
    'AI engineer',
    'full stack developer',
    'penetration tester',
    'web exploitation',
    'wireless exploitation',
    'autonomous agents',
    'LLM applications',
    'CTF',
    'OSCP',
    'portfolio',
  ],
  alternates: { canonical: '/' },
  formatDetection: { telephone: false, address: false, email: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'profile',
    siteName: site.name,
    title: ogTitle,
    description: site.description,
    url: site.url,
    locale: 'en_US',
    firstName: 'Shameer',
    lastName: 'Kashif',
    username: site.handle,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: `${site.name} (${site.handle})`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: ogTitle,
    description: site.description,
    images: [site.ogImage],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export const viewport = {
  themeColor: '#06080b',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

// JSON-LD structured data so search engines and rich results understand the
// person and the site.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${site.url}/#person`,
      name: site.name,
      alternateName: site.handle,
      url: site.url,
      image: site.ogImage,
      jobTitle: site.jobTitle,
      description: site.description,
      email: site.email,
      address: { '@type': 'PostalAddress', addressCountry: 'PK' },
      sameAs: [links.github, links.linkedin, links.blog, links.website],
      knowsAbout: [
        'Web Exploitation',
        'Wireless Exploitation',
        'Network Penetration Testing',
        'Reconnaissance',
        'Autonomous Agents',
        'LLM Applications',
        'Full Stack Development',
        'Capture The Flag',
      ],
      hasCredential: certifications.map((c) => ({
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certification',
        name: c,
      })),
    },
    {
      '@type': 'WebSite',
      '@id': `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: site.description,
      inLanguage: 'en',
      publisher: { '@id': `${site.url}/#person` },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}

        {/* Google Analytics (preserved from the original site) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${site.gaId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${site.gaId}');
          `}
        </Script>
      </body>
    </html>
  );
}
