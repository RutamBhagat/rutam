'use client'

import mermaid from 'mermaid'
import { useEffect, useId, useState } from 'react'

mermaid.initialize({
  startOnLoad: false,
  securityLevel: 'strict',
  theme: 'default',
})

export function MermaidDiagram({ chart }: { chart: string }) {
  const reactId = useId()
  const id = `mermaid-${reactId.replace(/[^a-zA-Z0-9_-]/g, '')}`
  const [svg, setSvg] = useState('')
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let cancelled = false

    setSvg('')
    setFailed(false)

    mermaid
      .render(id, chart)
      .then(({ svg }) => {
        if (!cancelled) {
          setSvg(svg)
        }
      })
      .catch(() => {
        if (!cancelled) {
          setFailed(true)
        }
      })

    return () => {
      cancelled = true
    }
  }, [chart, id])

  if (failed) {
    return (
      <pre>
        <code className="language-mermaid">{chart}</code>
      </pre>
    )
  }

  return (
    <div className="not-prose my-6 overflow-x-auto rounded-md border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
      {svg ? (
        <div
          className="[&_svg]:mx-auto [&_svg]:max-w-none"
          dangerouslySetInnerHTML={{ __html: svg }}
        />
      ) : (
        <div className="text-sm text-zinc-500 dark:text-zinc-400">
          Rendering diagram...
        </div>
      )}
    </div>
  )
}
