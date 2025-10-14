import Image from 'next/image'

type StrapiImage = {
  data: {
    id: number
    attributes: {
      url: string
      width: number
      height: number
      alternativeText: string | null
    }
  } | null
}

type InlineImage = {
  url?: string | null
  width?: number | string | null
  height?: number | string | null
  alternativeText?: string | null
}

type IntroductionTextBlock = {
  id?: number
  text?: string
  content?: string
  body?: string
  image?: StrapiImage | StrapiImage['data'] | InlineImage | null
  type?: string
  children?: {
    id?: number
    text?: string
    bold?: boolean
    type?: string
    image?: StrapiImage | StrapiImage['data'] | InlineImage | null
  }[]
}

type IntroductionTextProps = {
  id: number
  title: string
  description: IntroductionTextBlock[]
  image?: StrapiImage | InlineImage | null
}

type ImageSource =
  | StrapiImage
  | StrapiImage['data']
  | InlineImage
  | null
  | undefined

type NormalizedImage = {
  url: string
  width: number
  height: number
  alternativeText: string | null
}

type TextSegment = {
  kind: 'text'
  key: string
  block: IntroductionTextBlock
}

type ImageSegment = {
  kind: 'image'
  key: string
  image: ImageSource
}

type Segment = TextSegment | ImageSegment

type Line =
  | {
      kind: 'paragraph'
      key: string
      segments: Segment[]
    }
  | {
      kind: 'spacer'
      key: string
    }

const parseDimension = (value?: unknown): number => {
  if (typeof value === 'number') return value
  if (typeof value === 'string') {
    const parsed = Number(value)
    return Number.isFinite(parsed) ? parsed : 0
  }
  return 0
}

const normalizeImage = (image?: ImageSource): NormalizedImage | null => {
  if (!image) return null

  if (typeof image === 'object' && image !== null && 'data' in image) {
    return normalizeImage(image.data as ImageSource)
  }

  if (typeof image === 'object' && image !== null && 'attributes' in image) {
    const attrs = (image as StrapiImage['data'])?.attributes
    if (!attrs) return null
    return {
      url: attrs.url,
      width: attrs.width,
      height: attrs.height,
      alternativeText: attrs.alternativeText ?? null,
    }
  }

  if (typeof image === 'object' && image !== null && 'url' in image) {
    const inlineImage = image as InlineImage
    if (!inlineImage.url) return null
    return {
      url: String(inlineImage.url),
      width: parseDimension(inlineImage.width),
      height: parseDimension(inlineImage.height),
      alternativeText: inlineImage.alternativeText ?? null,
    }
  }

  return null
}

const renderImage = (image?: ImageSource, options?: { inline?: boolean }) => {
  const normalized = normalizeImage(image)
  if (!normalized) return null

  const inline = options?.inline ?? false
  const wrapperClass = inline
    ? 'inline-flex h-7 items-center justify-center md:h-9'
    : 'mx-auto flex max-w-[220px] justify-center md:max-w-[280px]'
  const imageClass = inline ? 'h-full w-auto object-contain' : 'h-auto w-full'
  const width = normalized.width || (inline ? 200 : 320)
  const height = normalized.height || (inline ? 60 : 120)

  return (
    <div className={wrapperClass}>
      <Image
        src={normalized.url}
        alt={normalized.alternativeText ?? ''}
        width={width}
        height={height}
        className={imageClass}
      />
    </div>
  )
}

const getBlockText = (block: IntroductionTextBlock) => {
  return block.text ?? block.content ?? block.body ?? ''
}

const hasTextChildren = (block: IntroductionTextBlock) => {
  return block.children?.some((child) => child.text?.trim()) ?? false
}

const isBlankBlock = (block: IntroductionTextBlock) => {
  if (block.type === 'image' && block.image) return false
  if (hasTextChildren(block)) return false
  return getBlockText(block).trim().length === 0
}

export const IntroductionText = ({
  title,
  description,
  image,
}: IntroductionTextProps) => {
  if (!description?.length && !image) return null

  const paragraphClass =
    'text-center text-[11px]  text-secondary md:text-lg md:leading-7 '

  const lines: Line[] = []
  let currentSegments: Segment[] = []

  const pushLine = () => {
    if (!currentSegments.length) return
    const lineKey = `line-${lines.length}`
    lines.push({ kind: 'paragraph', key: lineKey, segments: currentSegments })
    currentSegments = []
  }

  const pushSpacer = (key: string) => {
    const lastLine = lines[lines.length - 1]
    if (lastLine?.kind === 'spacer') return
    lines.push({ kind: 'spacer', key })
  }

  description.forEach((block, index) => {
    const keyBase = String(block.id ?? index)

    if (block.type === 'image' && block.image) {
      currentSegments.push({
        kind: 'image',
        key: `${keyBase}-image`,
        image: block.image,
      })
      return
    }

    if (isBlankBlock(block)) {
      pushLine()
      pushSpacer(`${keyBase}-spacer`)
      return
    }

    currentSegments.push({
      kind: 'text',
      key: `${keyBase}-text`,
      block,
    })
  })

  pushLine()

  if (lines[lines.length - 1]?.kind === 'spacer') {
    lines.pop()
  }

  const finalImage = renderImage(image)

  return (
    <section className="mx-auto max-w-[1080px] px-4">
      <h3 className="sub-title">{title}</h3>
      <div className="flex flex-col items-center gap-4 md:gap-6">
        {lines.map((line) => {
          if (line.kind === 'spacer') {
            return <div key={line.key} className="h-2 md:h-4" aria-hidden />
          }

          return (
            <p key={line.key} className={paragraphClass}>
              {line.segments.flatMap((segment) => {
                if (segment.kind === 'image') {
                  return [
                    <span
                      key={segment.key}
                      className="mx-3 inline-flex items-center align-middle"
                    >
                      {renderImage(segment.image, { inline: true })}
                    </span>,
                  ]
                }

                const { block } = segment

                if (block.children?.length) {
                  return block.children.reduce<JSX.Element[]>(
                    (acc, child, childIndex) => {
                      const childKey = `${segment.key}-${child.id ?? childIndex}`

                      if (child.type === 'image' && child.image) {
                        acc.push(
                          <span
                            key={childKey}
                            className="mx-3 inline-flex items-center align-middle"
                          >
                            {renderImage(child.image, { inline: true })}
                          </span>
                        )
                        return acc
                      }

                      if (!child.text) return acc

                      if (child.bold) {
                        acc.push(
                          <strong
                            key={childKey}
                            className="font-semibold text-black"
                          >
                            {child.text}
                          </strong>
                        )
                        return acc
                      }

                      acc.push(<span key={childKey}>{child.text}</span>)
                      return acc
                    },
                    []
                  )
                }

                const fallbackText = getBlockText(block)
                if (!fallbackText) return []

                return [
                  <span key={`${segment.key}-fallback`}>{fallbackText}</span>,
                ]
              })}
            </p>
          )
        })}

        {finalImage && <div className="pt-2">{finalImage}</div>}
      </div>
    </section>
  )
}
