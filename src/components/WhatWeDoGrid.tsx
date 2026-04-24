type WhatWeDoItem = {
  id: number
  title: string
  description: string
}

type WhatWeDoGridProps = {
  whatWeDoItem?: WhatWeDoItem[]
}

export const WhatWeDoGrid = ({ whatWeDoItem }: WhatWeDoGridProps) => {
  if (!whatWeDoItem?.length) return null

  return (
    <section className="bg-primary px-6 pb-14 pt-2 md:px-10 md:pb-20 md:pt-4">
      <div className="mx-auto max-w-[1380px]">
        <div className="grid justify-items-center gap-10 sm:grid-cols-2 md:gap-x-14 md:gap-y-12 xl:grid-cols-4">
          {whatWeDoItem.map((item) => (
            <article
              key={item.id}
              className="w-full max-w-[17rem] text-center sm:text-left"
            >
              <h3 className="mb-6 font-consola text-[1.15rem] font-semibold uppercase leading-[1.05] tracking-[0.16em] text-secondary md:text-[1.55rem]">
                {item.title}
              </h3>

              <p className="font-consola text-[12px] font-normal leading-[1.22] tracking-[0.05em] text-white md:text-[1rem]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
