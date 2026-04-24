type WhatWeDoIntroProps = {
  title: string
}

export const WhatWeDoIntro = ({ title }: WhatWeDoIntroProps) => {
  if (!title) return null

  return (
    <section className="bg-primary px-6 py-12 md:px-10 md:py-14">
      <div className="mx-auto max-w-[1380px]">
        <h2 className="mx-auto max-w-[55rem] text-balance text-center font-consola text-base font-semibold leading-tight tracking-[0.06em] text-secondary md:text-[1.95rem]">
          {title}
        </h2>
      </div>
    </section>
  )
}
