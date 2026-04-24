export type CitiesProps = {
  title: string
  text: string
}

export const Cities = ({ title, text }: CitiesProps) => {
  if (!title && !text) return null

  return (
    <section className="bg-primary px-6 pt-6 md:px-10 md:pt-10">
      <div className="mx-auto max-w-[1380px]">
        <h2 className="mb-4 text-center font-consola text-base font-semibold leading-tight tracking-[0.06em] text-secondary md:mb-6 md:text-[1.95rem]">
          {title}
        </h2>
        <p className="mx-auto max-w-[68rem] text-balance text-center font-consola text-[1rem] font-semibold uppercase leading-[1.2] tracking-[0.08em] text-white md:text-[2rem]">
          {text}
        </p>
      </div>
    </section>
  )
}
