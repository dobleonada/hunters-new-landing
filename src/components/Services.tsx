import { useTranslations } from 'next-intl'

export type ServicesProps = {
  id: number
  serviceHunterList: { id: number; serviceName: any }[]
}
export const Services = ({ serviceHunterList }: ServicesProps) => {
  const t = useTranslations('services')

  return (
    <section className="container text-sm font-semibold">
      <h2 className="mb-[20px] text-center text-xl lg:text-3xl">
        {t('title')}
      </h2>
      <p className="md:text-md text-balance text-center text-secondary lg:text-2xl">
        {serviceHunterList.map((service) => service.serviceName).join(' | ')}
      </p>
    </section>
  )
}
