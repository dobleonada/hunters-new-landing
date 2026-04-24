import Image from 'next/image'

export type CmsImage = {
  data: {
    id: number
    attributes: {
      url: string
      width: number
      height: number
      alternativeText?: string | null
      name?: string | null
    }
  } | null
}

type CmsSectionImageProps = {
  image?: CmsImage | null
  title: string
  imageMaxWidthClassName?: string
  sectionClassName?: string
}

export const CmsSectionImage = ({
  image,
  title,
  imageMaxWidthClassName = 'max-w-[52rem]',
  sectionClassName = 'bg-primary px-6 pb-14 pt-4 md:px-10 md:pb-20 md:pt-8',
}: CmsSectionImageProps) => {
  const imageAttributes = image?.data?.attributes

  if (!imageAttributes) return null

  return (
    <section className={sectionClassName}>
      <div className="mx-auto max-w-[1380px]">
        <h2 className="sr-only">{title}</h2>

        <div className={`mx-auto flex justify-center ${imageMaxWidthClassName}`}>
          <Image
            src={imageAttributes.url}
            alt={imageAttributes.alternativeText ?? title}
            width={imageAttributes.width}
            height={imageAttributes.height}
            className="h-auto w-full"
            priority={false}
          />
        </div>
      </div>
    </section>
  )
}
