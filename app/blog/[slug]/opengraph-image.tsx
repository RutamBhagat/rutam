import { ImageResponse } from 'next/og'
import { BLOG_SEO_DATA } from '@/lib/seo'

export const runtime = 'edge'
export const alt = 'Blog Post'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const seoData = BLOG_SEO_DATA[slug]

  const title = seoData?.title || 'Blog Post'
  const description = seoData?.description || ''

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#09090b',
          backgroundImage:
            'radial-gradient(circle at 25px 25px, #27272a 2%, transparent 0%), radial-gradient(circle at 75px 75px, #27272a 2%, transparent 0%)',
          backgroundSize: '100px 100px',
          padding: 60,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '90%',
          }}
        >
          <span
            style={{
              fontSize: 24,
              color: '#a855f7',
              marginBottom: 24,
              textTransform: 'uppercase',
              letterSpacing: 2,
            }}
          >
            Blog Post
          </span>
          <h1
            style={{
              fontSize: 56,
              fontWeight: 700,
              background: 'linear-gradient(to bottom right, #ffffff, #a1a1aa)',
              backgroundClip: 'text',
              color: 'transparent',
              lineHeight: 1.2,
              marginBottom: 24,
              maxWidth: '100%',
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: 28,
              color: '#a1a1aa',
              lineHeight: 1.4,
              maxWidth: '90%',
            }}
          >
            {description.length > 150
              ? description.slice(0, 150) + '...'
              : description}
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <span
              style={{
                fontSize: 24,
                color: '#e4e4e7',
                fontWeight: 600,
              }}
            >
              Dibas K Borborah
            </span>
          </div>
          <span
            style={{
              fontSize: 22,
              color: '#71717a',
            }}
          >
            dibas.borborah.xyz
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
