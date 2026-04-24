import Image from 'next/image'

const words = [
  'Agency',
  'Design',
  'Communication',
  'Future',
  'Artistic',
  'Technology',
  'Marketing',
  'Creativity',
  'Strategy',
  'Fashion',
  'Experience',
  'Leaders',
  'Arquitecture',
  'Visionaries',
  'Talent',
  'Developers',
  'Social Media',
  'Interior design',
  'Global',
  'Multidisciplinary',
  'Knowledge',
  'Expertise',
  'Strategy',
  'Positive',
  'Digital',
  'Disruptive',
  'Production',
  'Excellence',
  'Creativity',
  'Innovation',
]

type HeroProps = {
  hero: string
}

export const Hero = ({ hero }: HeroProps) => {
  return (
    <section className="relative px-4 pt-2 md:mt-10 md:px-6">
      <div className="flex h-full w-full flex-wrap justify-center gap-3 md:gap-10">
        {words.map((word, index) => (
          <p
            key={index}
            className="relative z-10 text-xl font-light text-black blur-sm transition-all hover:blur-0 sm:text-2xl md:text-5xl"
          >
            {word}
          </p>
        ))}
      </div>
      <figure className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/images/logo-hunter-white.svg"
          alt="Hero"
          width={1911}
          height={471}
          className="z-40 w-[min(82vw,400px)] p-6 md:p-10"
          style={{
            background: 'rgba(68, 85, 107, 0.6)',
            boxShadow: '0 0 50px 25px rgba(68, 85, 107, 0.7)',
            borderRadius: '15px',
          }}
        />
      </figure>
      <div className="mt-8 md:mt-16">
        <div className="flex flex-wrap items-center justify-center gap-3 px-4 text-center md:gap-4">
          <p className="text-sm text-white sm:text-base md:text-2xl">{hero}</p>
          <Image
            src="/images/focus.svg"
            width={37}
            height={37}
            alt="focus"
            className="h-7 w-7 md:h-[37px] md:w-[37px]"
          />
        </div>
      </div>
    </section>
  )
}
