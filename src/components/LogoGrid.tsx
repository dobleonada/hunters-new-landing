import Image from 'next/image'

type Props = {
  title: string
  logos: {
    data: {
      id: 327
      attributes: {
        name: 'johnnie-walker-7.png'
        alternativeText: null
        caption: null
        width: 8897
        height: 1006
        formats: [Object]
        hash: 'johnnie_walker_7_18b587df0d'
        ext: '.png'
        mime: 'image/png'
        size: 75.25
        url: 'https://res.cloudinary.com/dyxcs4jyl/image/upload/v1759172668/johnnie_walker_7_18b587df0d.png'
        previewUrl: null
        provider: 'cloudinary'
        provider_metadata: [Object]
        createdAt: '2025-09-29T19:04:29.600Z'
        updatedAt: '2025-09-29T19:04:29.600Z'
      }
    }[]
  }
}

export const LogoGrid = ({ title, logos }: Props) => {
  return (
    <section className="mx-auto max-w-[1440px] px-4">
      <h3 className="sub-title relative z-10">{title}</h3>
      <div className="flex flex-wrap justify-center gap-4 md:gap-10">
        {logos?.data?.map((el) => {
          return (
            <Image
              loading="lazy"
              width={el.attributes.width}
              height={el.attributes.height}
              alt={el.attributes.alternativeText ?? ''}
              src={el.attributes.url}
              key={el.id}
              className="h-6 w-auto object-contain md:h-9"
            />
          )
        })}
      </div>
    </section>
  )
}
