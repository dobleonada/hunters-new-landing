type AboutUsProps = {
  textOne: string
  textTwo?: string
}

export const AboutUs = ({ textOne, textTwo }: AboutUsProps) => {
  if (!textOne) return null

  return (
    <section className="bg-primary px-6 pb-0 pt-10 md:px-10 md:pt-14">
      <div className="mx-auto max-w-[1380px]">
        <h2 className="mx-auto max-w-[68rem] text-balance text-center font-consola text-lg font-semibold leading-tight tracking-[0.06em] text-secondary md:text-[2rem]">
          {textOne}
        </h2>

        {textTwo ? (
          <p className="mx-auto mt-6 max-w-[62rem] text-balance text-center font-consola text-[12px] font-normal leading-[1.3] tracking-[0.05em] text-white md:mt-8 md:text-[1rem]">
            {textTwo}
          </p>
        ) : null}
      </div>
    </section>
  )
}
