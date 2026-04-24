type ServiceItem = {
  id: number
  serviceName: string
}

type ServiceCategory = {
  id: number
  title: string
  serviceItem?: ServiceItem[]
}

type ServiceCategoryGridNewProps = {
  serviceCategoryNew?: ServiceCategory[]
}

export const ServiceCategoryGridNew = ({
  serviceCategoryNew,
}: ServiceCategoryGridNewProps) => {
  if (!serviceCategoryNew?.length) return null

  return (
    <section className="bg-primary px-6 pb-14 pt-2 md:px-10 md:pb-20 md:pt-4">
      <div className="mx-auto max-w-[1380px]">
        <div className="grid justify-items-center gap-10 sm:grid-cols-2 md:gap-x-14 md:gap-y-12 xl:grid-cols-3">
          {serviceCategoryNew.map((category) => (
            <article
              key={category.id}
              className="w-full max-w-[18rem] text-center sm:text-left"
            >
              <h3 className="mb-5 font-consola text-[1.05rem] font-semibold uppercase leading-[1.08] tracking-[0.16em] text-secondary md:text-[1.45rem]">
                {category.title}
              </h3>

              {!!category.serviceItem?.length && (
                <ul className="space-y-1.5">
                  {category.serviceItem.map((item) => (
                    <li
                      key={item.id}
                      className="font-consola text-[12px] font-normal leading-[1.2] tracking-[0.05em] text-white md:text-[1rem]"
                    >
                      •{item.serviceName}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
