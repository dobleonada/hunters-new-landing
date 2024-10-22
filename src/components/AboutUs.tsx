import Markdown from 'react-markdown'
type AboutUsProps = {
  id: number
  textOne: string
  textTwo: string
}

export const AboutUs = ({ textOne, textTwo }: AboutUsProps) => {
  return (
    <>
      <section className="relative mt-10 flex h-[250px] items-center justify-center md:h-[400px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 md:bg-contain"
          style={{
            backgroundImage: 'url(/images/logo-hunter-desenfocado.png)',
          }}
        />
        <h3 className="relative z-10 text-balance text-center font-bold md:text-3xl">
          <Markdown className="markdown-about-us">{textOne}</Markdown>
        </h3>
      </section>
      <section className="container">
        <p className="mx-auto text-balance text-center leading-4 tracking-[4px] md:text-lg md:leading-7">
          {textTwo}
        </p>
      </section>
    </>
  )
}
