'use client'

import clsx from 'clsx'
import { BentoGridImages } from './BentoGridImages'

export type BentoGridProps = {
  [key: string]: {
    id: number
    title: string
    titlePositionIsRight: boolean
    bentoImage: {
      id: number
      width: number
      height: number
      device: string
      image: {
        data: {
          id: number
          attributes: {
            name: string
            alternativeText: string | null
            caption: string | null
            width: number
            height: number

            hash: string
            ext: string
            mime: string
            size: number
            url: string
            previewUrl: string | null
            provider: string
            provider_metadata: {
              public_id: string
              resource_type: string
            }
            createdAt: string
            updatedAt: string
          }
        }
      }
    }[]
  }
}

export const BentoGrid = ({ ...data }: BentoGridProps) => {
  const bentoItems = Object.values(data)

  return (
    <section className="container space-y-20">
      {bentoItems.map((el) => {
        return (
          <article
            key={el.id}
            className={clsx(
              'flex flex-col gap-4 md:flex-row',
              el.titlePositionIsRight && 'md:flex-row-reverse'
            )}
          >
            <h4 className="whitespace-nowrap text-lg md:text-2xl">
              {el.title}
            </h4>
            <div className="-ml-4 h-[1px] w-auto bg-black md:-ml-0 md:h-auto md:w-[1px]"></div>
            <BentoGridImages images={el.bentoImage as any} />
          </article>
        )
      })}
    </section>
  )
}
