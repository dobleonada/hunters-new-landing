import Link from 'next/link'

type FoundersProps = {
  title: string
  contactPerson: {
    id: number
    email: string
  }[]
}

export const Founders = ({ title, contactPerson }: FoundersProps) => {
  if (!contactPerson?.length) return null

  return (
    <section className="bg-primary px-6 py-12 md:px-10 md:py-16" id="contact">
      <div className="mx-auto max-w-[1380px]">
        <h2 className="text-center font-consola text-base font-semibold leading-tight tracking-[0.06em] text-secondary md:text-[1.95rem]">
          {title}
        </h2>

        <div className="mx-auto mt-7 flex w-full max-w-[22rem] flex-col items-center space-y-2 md:mt-9 md:max-w-[30rem]">
          {contactPerson.map((person) => (
            <Link
              key={person.id}
              href={`mailto:${person.email}`}
              className="block w-full break-words text-center font-consola text-[0.82rem] font-normal leading-[1.15] tracking-[0.1em] text-white transition-opacity hover:opacity-80 md:text-[1.05rem]"
            >
              {person.email}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
