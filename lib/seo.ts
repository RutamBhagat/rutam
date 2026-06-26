import type { Metadata } from 'next'
import { WEBSITE_URL, SITE_NAME, TWITTER_HANDLE } from './constants'

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

// Project data for SEO - mapped from PROJECTS
export const BLOG_SEO_DATA: Record<
  string,
  { title: string; description: string }
> = {
  'query-x': {
    title: 'Query X - AI-Powered Perplexity Clone',
    description:
      'Build a Perplexity-style AI search engine with Next.js, Mastra agents, and real-time background processing using Redis queues.',
  },
  'tesseract-editor-working': {
    title: 'Tesseract AI Code Editor - Screenshot to Code',
    description:
      'Turn screenshots into editable HTML/CSS/JS with a powerful AI code editor. Built with vision models and real-time preview.',
  },
  'bro-tube': {
    title: 'BroTube - YouTube Video Analyzer with AI',
    description:
      'Chat with YouTube videos, get sentiment analysis of comments, and extract insights using AI-powered analysis.',
  },
  'cinema-lens-working': {
    title: 'Cinema Lens - AI Movie Recommender Chatbot',
    description:
      'Agentic AI movie recommender using knowledge graphs, semantic search, and web scraping for personalized suggestions.',
  },
  'excel-ai': {
    title: 'Amazon SWOT AI Optimizer',
    description:
      'Analyze Amazon product reviews, run A/B tests on listings, and get AI-powered insights to optimize your product pages.',
  },
  'browser-automation': {
    title: 'LLM Browser Automation Agent',
    description:
      'Automate browser tasks with an AI chatbot agent. Natural language commands to web automation using Puppeteer and LLMs.',
  },
}
