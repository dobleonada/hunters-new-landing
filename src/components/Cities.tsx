export type CitiesProps = {
  id: number
  city: { id: number; cityName: string }[]
}
export const Cities = ({ city }: CitiesProps) => {
  return (
    <section className="container">
      <p className="text-balance text-secondary text-center text-s md:text-lg lg:text-2xl">
        {city.map((city) => city.cityName).join(' / ')}
      </p>
    </section>
  )
}
