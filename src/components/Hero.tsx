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
  'Collect',
  'Arquitecture',
  'Visionaries',
  'Talent',
  'Developers',
  'Social Media',
  'Disruptive',
  'Artivists',
  'Production',
  'Creativity',
  'Interior design',
  'Global',
  'Multidisciplinary',
  'Knowledge',
  'Transform',
  'Positive',
  'Artivists',
  'Digital',
]

export const Hero = () => {
  return (
    <section className="relative md:mt-10">
      <div className="flex h-full w-full flex-wrap justify-center gap-4 md:gap-10">
        {words.map((word, index) => (
          <p
            key={index}
            className="relative z-10 text-2xl font-light text-black blur-sm transition-all hover:blur-0 md:text-5xl"
          >
            {word}
          </p>
        ))}
      </div>
      <figure className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/images/logo-hunter.svg"
          alt="Hero"
          width={1911}
          height={471}
          className="p-30 z-40 w-[400px] p-10"
          style={{
            background: 'rgba(233, 234, 228, 0.6)',
            boxShadow: '0 0 50px 25px rgba(233, 234, 228, 0.6)', // Increased blur
            borderRadius: '15px',
          }}
        />
      </figure>
    </section>
  )
}
