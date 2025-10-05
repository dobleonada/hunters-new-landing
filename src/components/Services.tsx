export type ServicesProps = {
  id: number
  title: string
  serviceHunterList: { id: number; serviceHunter: string }[]
}
export const Services = ({ title, serviceHunterList }: ServicesProps) => {
  return (
    <section className="mx-4">
      <h3 className="sub-title">{title}</h3>
      <p className="md:text-md text-balance text-center text-secondary lg:text-2xl">
        {serviceHunterList.map((service) => service.serviceHunter).join(' | ')}
      </p>
    </section>
  )
}
