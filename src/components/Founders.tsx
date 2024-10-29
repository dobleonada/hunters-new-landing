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
          'text-center font-bold tracking-[4px] md:text-lg',
          props.className
        )}
      >
        <p>{props.fullName}</p>
        <p>{props.jobPosition}</p>
        <Link href={`mailti:${props.mail}`}>{props.email}</Link>
      </div>
    )
  }
  return (
    <section className="container relative" id="contact">
      <figure className="mx-auto mb-10 w-full md:w-[600px]">
        <Image
          src={image.data.attributes.url}
          alt={image.data.attributes.alternativeText}
          width={image.data.attributes.width}
          height={image.data.attributes.height}
        />
      </figure>
      <div className="flex flex-col gap-8">
        <PersonInfo {...contactPerson[0]} className="top-24 md:absolute" />
        <PersonInfo
          {...contactPerson[1]}
          className="right-0 top-24 md:absolute"
        />
        <PersonInfo {...contactPerson[2]} className="bottom-12 md:absolute" />
        <PersonInfo
          {...contactPerson[3]}
          className="bottom-12 right-0 md:absolute"
        />
      </div>
    </section>
  )
}
