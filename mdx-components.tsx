import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Cover: ({
      src,
      alt,
      caption,
    }: {
      src: string
      alt: string
      caption: string
    }) => {
      return (
        <figure>
          <img src={src} alt={alt} className="rounded-xl" />
          <figcaption className="text-center">{caption}</figcaption>
        </figure>
      )
    },
    Video: ({
      src,
      title,
      caption,
      autoPlay = false,
      controls = true,
      muted = false,
      loop = false,
    }: {
      src: string
      title?: string
      caption?: string
      autoPlay?: boolean
      controls?: boolean
      muted?: boolean
      loop?: boolean
    }) => {
      return (
        <figure className="my-8">
          <video
            src={src}
            title={title}
            autoPlay={autoPlay}
            controls={controls}
            muted={muted}
            loop={loop}
            className="w-full rounded-xl"
          />
          {caption && (
            <figcaption className="mt-2 text-center">{caption}</figcaption>
          )}
        </figure>
      )
    },
  }
}
