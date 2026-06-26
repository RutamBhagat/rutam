import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { generateBlogMetadata, BLOG_SEO_DATA } from '@/lib/seo'
import { WEBSITE_URL } from '@/lib/constants'

// Import all MDX content from content directory
import QueryX from '@/content/blog/query-x.mdx'
import TesseractEditor from '@/content/blog/tesseract-editor-working.mdx'
import BroTube from '@/content/blog/bro-tube.mdx'
import CinemaLens from '@/content/blog/cinema-lens-working.mdx'
import ExcelAi from '@/content/blog/excel-ai.mdx'
import BrowserAutomation from '@/content/blog/browser-automation.mdx'

const BLOG_COMPONENTS: Record<string, React.ComponentType> = {
  'query-x': QueryX,
  'tesseract-editor-working': TesseractEditor,
  'bro-tube': BroTube,
  'cinema-lens-working': CinemaLens,
  'excel-ai': ExcelAi,
  'browser-automation': BrowserAutomation,
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const seoData = BLOG_SEO_DATA[slug]

  if (!seoData) {
    return {
      title: 'Blog Post Not Found',
    }
  }

  return generateBlogMetadata({
    title: seoData.title,
    description: seoData.description,
    slug,
  })
}

export function generateStaticParams() {
  return Object.keys(BLOG_SEO_DATA).map((slug) => ({ slug }))
}

function ArticleJsonLd({ slug }: { slug: string }) {
  const seoData = BLOG_SEO_DATA[slug]
  if (!seoData) return null

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: seoData.title,
    description: seoData.description,
    url: `${WEBSITE_URL}/blog/${slug}`,
    image: `${WEBSITE_URL}/blog/${slug}/opengraph-image`,
    author: {
      '@type': 'Person',
      name: 'Rutam Bhagat',
      url: WEBSITE_URL,
    },
    publisher: {
      '@type': 'Person',
      name: 'Rutam Bhagat',
      url: WEBSITE_URL,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${WEBSITE_URL}/blog/${slug}`,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const Content = BLOG_COMPONENTS[slug]

  if (!Content) {
    notFound()
  }

  return (
    <>
      <ArticleJsonLd slug={slug} />
      <Content />
    </>
  )
}
