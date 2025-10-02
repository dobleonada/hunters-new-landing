export type CitiesProps = {
  id: number
  title: string
  city: { id: number; cityName: string }[]
}
export const Cities = ({ city, title }: CitiesProps) => {
  return (
    <section className="container px-4">
      <h3 className="sub-title">{title}</h3>
      <p className="text-balance text-center text-sm text-secondary md:text-lg lg:text-2xl">
        {city.map((city) => city.cityName).join(' / ')}
      </p>
    </section>
  )
}
