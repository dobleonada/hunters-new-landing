import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
type FoundersProps = {
  id: number
  contactPerson: {
    id: number
    fullName: string
    email: string
    jobPosition: string
  }[]
  image: {
    data: {
      id: number
      attributes: {
        url: string
        width: number
        height: number
        alternativeText: string
      }
    } | null
  }
}
export const Founders = ({ contactPerson, image }: FoundersProps) => {
  if (!image.data) return null
  const PersonInfo = (props: any) => {
    return (
      <div
        className={clsx(
          'text-center tracking-[4px] md:text-lg',
          props.className
        )}
      >
        <Link href={`mailto:${props.email}`}>{props.email}</Link>
      </div>
    )
  }
  return (
    <section className="container relative" id="contact">
      {/* <figure className="mx-auto mb-10 w-full md:w-[600px]">
        <Image
          src={image.data.attributes.url}
          alt={image.data.attributes.alternativeText}
          width={image.data.attributes.width}
          height={image.data.attributes.height}
        />
      </figure> */}
      <div className="space-y-6 md:space-y-8">
        <p className="text-center text-xl font-bold md:text-2xl">
          BOARD OF DIRECTORS
        </p>
        <div>
          <PersonInfo {...contactPerson[0]} />
          <PersonInfo {...contactPerson[1]} />
        </div>
      </div>
    </section>
  )
}
