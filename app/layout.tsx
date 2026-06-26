import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import {
  WEBSITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  TWITTER_HANDLE,
} from '@/lib/constants'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(WEBSITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'Full Stack Engineer',
    'AI Engineer',
    'Machine Learning',
    'Next.js Developer',
    'React Developer',
    'TypeScript',
    'Portfolio',
    'Dibas Borborah',
    'Software Engineer',
    'Web Development',
  ],
  authors: [{ name: SITE_NAME, url: WEBSITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: WEBSITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    creator: TWITTER_HANDLE,
  },
  alternates: {
    canonical: WEBSITE_URL,
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

// JSON-LD Structured Data for Person
function PersonJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rutam Bhagat',
    url: WEBSITE_URL,
    image: `${WEBSITE_URL}/opengraph-image`,
    jobTitle: 'Full Stack Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Mavic AI',
      url: 'https://www.mavic.ai/',
    },
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'Indian Institute of Information Technology Lucknow',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'Dibrugarh University',
      },
    ],
    sameAs: [
      'https://github.com/dibkb',
      'https://twitter.com/dkborborah',
      'https://www.linkedin.com/in/dibkb',
      'https://www.instagram.com/dib.kb',
    ],
    knowsAbout: [
      'Full Stack Development',
      'Artificial Intelligence',
      'Machine Learning',
      'Next.js',
      'React',
      'TypeScript',
      'Python',
      'Node.js',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

// JSON-LD for Website
function WebsiteJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: WEBSITE_URL,
    description: SITE_DESCRIPTION,
    author: {
      '@type': 'Person',
      name: 'Rutam Bhagat',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <PersonJsonLd />
        <WebsiteJsonLd />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-zinc-50 tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <div className="relative mx-auto w-full max-w-3xl flex-1 px-4 pt-16 sm:px-6 sm:pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
