import { CmsImage, CmsSectionImage } from './CmsSectionImage'

type DescriptionBlock = {
  type?: string
  children?: {
    text?: string
    type?: string
  }[]
}

type IntroductionTextProps = {
  title: string
  description?: DescriptionBlock[]
  image?: CmsImage | null
}

const getParagraphText = (block: DescriptionBlock) => {
  if (!block.children?.length) return ''

  return block.children
    .map((child) => child.text?.trim() ?? '')
    .filter(Boolean)
    .join(' ')
}

export const IntroductionText = ({
  title,
  description,
  image,
}: IntroductionTextProps) => {
  const paragraphs = description
    ?.filter((block) => block.type === 'paragraph')
    .map(getParagraphText)
    .filter(Boolean)

  if (!image?.data?.attributes && !paragraphs?.length) return null

  return (
    <>
      <CmsSectionImage image={image} title={title} />

      {!!paragraphs?.length && (
        <section className="bg-primary px-6 pb-14 pt-2 md:px-10 md:pb-20 md:pt-4">
          <div className="mx-auto max-w-[1380px]">
            <div className="mx-auto flex max-w-[58rem] flex-col gap-5 md:gap-7">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={`${title}-${index}`}
                  className="text-center font-consola text-[11px] font-normal leading-[1.25] tracking-[0.06em] text-white md:text-[1.2rem]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
