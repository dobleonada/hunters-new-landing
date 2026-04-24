import Image from 'next/image'

type LogoGridProps = {
  logos: {
    data: {
      id: number
      attributes: {
        alternativeText?: string | null
        width: number
        height: number
        url: string
      }
    }[]
  }
}

export const LogoGrid = ({ logos }: LogoGridProps) => {
  return (
    <section className="bg-primary px-6 pb-12 pt-4 md:px-10 md:pb-16 md:pt-6">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-7 md:gap-x-12 md:gap-y-10">
          {logos?.data?.map((el) => {
            return (
              <Image
                loading="lazy"
                width={el.attributes.width}
                height={el.attributes.height}
                alt={el.attributes.alternativeText ?? ''}
                src={el.attributes.url}
                key={el.id}
                className="h-4 w-auto object-contain opacity-95 brightness-0 invert sm:h-5 md:h-10"
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
