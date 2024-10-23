import { useTranslations } from "next-intl";

export type ServicesProps = {
  id: number
  serviceHunterList: { id: number; serviceName: any }[]
}
export const Services = ({ serviceHunterList }: ServicesProps) => {
  const t = useTranslations("services");

  return (
    <section className="my-10 font-semibold text-s container">
      <h2 className="mb-[20px] text-center text-xl lg:text-3xl">{t("title")}</h2>
      <p className="text-balance text-secondary text-center md:text-md lg:text-2xl">
        {serviceHunterList.map((service) => service.serviceName).join(' | ')}
      </p>
    </section>
  )
}
