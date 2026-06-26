import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Rutam Bhagat - Full Stack AI Engineer'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#09090b',
        backgroundImage:
          'radial-gradient(circle at 25px 25px, #27272a 2%, transparent 0%), radial-gradient(circle at 75px 75px, #27272a 2%, transparent 0%)',
        backgroundSize: '100px 100px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 80px',
        }}
      >
        <h1
          style={{
            fontSize: 72,
            fontWeight: 700,
            background: 'linear-gradient(to bottom right, #ffffff, #a1a1aa)',
            backgroundClip: 'text',
            color: 'transparent',
            lineHeight: 1.2,
            marginBottom: 16,
          }}
        >
          Rutam Bhagat
        </h1>
        <p
          style={{
            fontSize: 32,
            color: '#a1a1aa',
            textAlign: 'center',
            marginTop: 0,
          }}
        >
          Full Stack AI Engineer
        </p>
        <div
          style={{
            display: 'flex',
            gap: 16,
            marginTop: 32,
          }}
        >
          {['Next.js', 'React', 'TypeScript', 'Python', 'AI/ML'].map((tech) => (
            <span
              key={tech}
              style={{
                padding: '8px 16px',
                backgroundColor: '#27272a',
                color: '#e4e4e7',
                borderRadius: 8,
                fontSize: 20,
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 40,
          display: 'flex',
          alignItems: 'center',
          color: '#71717a',
          fontSize: 24,
        }}
      >
        rutam.vercel.app
      </div>
    </div>,
    {
      ...size,
    },
  )
}
