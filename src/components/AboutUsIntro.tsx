type AboutUsIntroProps = {
  textOne: string
}

export const AboutUsIntro = ({ textOne }: AboutUsIntroProps) => {
  if (!textOne) return null

  return (
    <section className="bg-primary px-6 py-12 md:px-10 md:py-14">
      <div className="mx-auto max-w-[55rem]">
        <h2 className="text-balance text-center font-consola text-base font-semibold leading-tight tracking-[0.08em] text-secondary md:text-[1.95rem]">
          {textOne}
        </h2>
      </div>
    </section>
  )
}
