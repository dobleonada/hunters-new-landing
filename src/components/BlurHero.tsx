import Image from 'next/image'

type BlurHeroProps = {
  id: number
  hero: string
}
export const BlurHero = ({ hero }: BlurHeroProps) => {
  return (
    <section className="">
      <Image
        src="/images/imagen-desenfocada-texto-desktop.png"
        width={3508}
        height={1304}
        alt="img"
        className="hidden md:block"
      />
      <Image
        src="/images/imagen-desenfocada-texto-movile.png"
        width={3508}
        height={1304}
        alt="img"
        className="md:hidden"
      />
      <div className="mt-8 md:mt-16">
        <div className="flex items-center justify-center gap-4">
          <p className="text-black md:text-2xl">{hero}</p>
          <Image src="/images/focus.svg" width={37} height={37} alt="focus" />
        </div>
      </div>
    </section>
  )
}
