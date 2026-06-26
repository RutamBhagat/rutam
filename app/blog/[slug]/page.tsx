import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  Children,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import { MermaidDiagram } from '@/components/mermaid-diagram'
import { WEBSITE_URL } from '@/lib/constants'
import {
  generateBlogMetadata,
  getProjectBySlug,
  getProjectSlug,
} from '@/lib/seo'
import { PROJECTS } from '@/app/data'

type Props = {
  params: Promise<{ slug: string }>
}

type CodeElementProps = {
  className?: string
  children?: ReactNode
}

function isMermaidCode(
  node: ReactNode,
): node is ReactElement<CodeElementProps> {
  return (
    isValidElement<CodeElementProps>(node) &&
    typeof node.props.className === 'string' &&
    node.props.className.split(/\s+/).includes('language-mermaid')
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {
      title: 'Blog Post Not Found',
    }
  }

  return generateBlogMetadata({
    title: project.name,
    description: project.description,
    slug,
  })
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: getProjectSlug(project.blog) }))
}

function ArticleJsonLd({
  project,
  slug,
}: {
  project: NonNullable<ReturnType<typeof getProjectBySlug>>
  slug: string
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: project.name,
    description: project.description,
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

function resolveUrl(value: string | undefined, base: string) {
  if (!value || value.startsWith('#')) return value
  return new URL(value, base).toString()
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const response = await fetch(project.readme, {
    next: { revalidate: 3600 },
  })

  if (!response.ok) {
    notFound()
  }

  const markdown = await response.text()
  const repoTreeUrl = `${project.link}/blob/main/`

  return (
    <>
      <ArticleJsonLd project={project} slug={slug} />
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          a({ href, children, node, ...props }) {
            return (
              <a
                {...props}
                href={resolveUrl(href, repoTreeUrl)}
                target={href?.startsWith('#') ? undefined : '_blank'}
                rel={href?.startsWith('#') ? undefined : 'noopener noreferrer'}
              >
                {children}
              </a>
            )
          },
          img({ src, alt, node, ...props }) {
            return (
              <img
                {...props}
                src={
                  typeof src === 'string'
                    ? resolveUrl(src, project.readme)
                    : undefined
                }
                alt={alt ?? ''}
                loading="lazy"
              />
            )
          },
          pre({ children, node, ...props }) {
            const child =
              Children.count(children) === 1 ? Children.only(children) : null

            if (isMermaidCode(child)) {
              return (
                <MermaidDiagram
                  chart={String(child.props.children).replace(/\n$/, '')}
                />
              )
            }

            return <pre {...props}>{children}</pre>
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </>
  )
}
