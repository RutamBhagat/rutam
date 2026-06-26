import type { MetadataRoute } from 'next'
import { WEBSITE_URL } from '@/lib/constants'
import { PROJECTS } from './data'

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString()

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: WEBSITE_URL,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `https://pub-a07f730072074955abe8d7b846f26a5b.r2.dev/resume/Rutam_Bhagat_Resume.pdf`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]

  // Blog posts from projects
  const blogPosts: MetadataRoute.Sitemap = PROJECTS.filter(
    (project) => project.blog && !project.blog.startsWith('http'),
  ).map((project) => ({
    url: `${WEBSITE_URL}/${project.blog}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...blogPosts]
}
