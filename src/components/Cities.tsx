export type CitiesProps = {
  id: number
  city: { id: number; cityName: string }[]
}
export const Cities = ({ city }: CitiesProps) => {
  return (
    <section className="container mt-14">
      <p className="text-secondary text-s text-balance text-center md:text-lg lg:text-2xl">
        {city.map((city) => city.cityName).join(' / ')}
      </p>
    </section>
  )
}
