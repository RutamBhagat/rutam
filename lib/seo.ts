import type { Metadata } from 'next'
import { WEBSITE_URL, SITE_NAME, TWITTER_HANDLE } from './constants'
import { PROJECTS } from '@/app/data'

type BlogMetadataProps = {
  title: string
  description: string
  slug: string
}

export function generateBlogMetadata({
  title,
  description,
  slug,
}: BlogMetadataProps): Metadata {
  const url = `${WEBSITE_URL}/blog/${slug}`

  return {
    title,
    description,
    openGraph: {
      type: 'article',
      url,
      title,
      description,
      siteName: SITE_NAME,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: TWITTER_HANDLE,
    },
    alternates: {
      canonical: url,
    },
  }
}

export function getProjectSlug(blog: string) {
  return blog.replace(/^\/blog\//, '')
}

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((project) => getProjectSlug(project.blog) === slug)
}
