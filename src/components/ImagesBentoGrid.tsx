'use client'
import { ScreenSize, useScreenSize } from '@/hooks/useScreenSize'
import { useEffect, useState, useMemo } from 'react'
import { BentoGrid } from 'react-bento'
import Image from 'next/image'

type ImagesBentoGridProps = {
  content: {
    id: number
    MasonryImage: {
      id: number
      MasonrySize: {
        id: number
        height: number
        width: number
        Device: ScreenSize
      }[]
      image: {
        data: {
          id: number
          attributes: {
            url: string
            height: number
            width: number
            alternativeText: string | null
          }
        }
      }
    }[]
  }
}

type FormattedImages = {
  url: string
  height: number
  width: number
  imageWidth: number
  imageHeight: number
  id: number
  altText: string | null
}

const gridMeasures = {
  mobile: {
    cols: 2,
    rowHeight: 240,
  },
  tablet: {
    cols: 3,
    rowHeight: 240,
  },
  desktop: {
    cols: 5,
    rowHeight: 240,
  },
}

const formatImages = (
  content: ImagesBentoGridProps['content'],
  device: ScreenSize
): FormattedImages[] => {
  return content.MasonryImage.map((image) => {
    const size = image.MasonrySize.find((size) => size.Device === device)
    if (!size) return null
    return {
      id: image.id,
      url: image.image.data.attributes.url,
      width: size.width,
      height: size.height,
      imageWidth: image.image.data.attributes.width,
      imageHeight: image.image.data.attributes.height,
      altText: image.image.data.attributes.alternativeText,
    }
  }).filter((image): image is FormattedImages => image !== null)
}

export const ImagesBentoGrid = ({ content }: ImagesBentoGridProps) => {
  const device = useScreenSize()
  const formattedImages = useMemo(
    () => formatImages(content, device),
    [device, content]
  )

  if (!device) return null

  return (
    <section className="container">
      <BentoGrid
        items={formattedImages.map((image) => ({
          id: image.id,
          title: image.altText ?? 'Image',
          element: (
            <Image
              key={image.id}
              src={image.url}
              width={image.imageHeight}
              height={image.imageHeight}
              alt={image.altText ?? 'Image'}
              className="h-full w-full object-cover grayscale transition-all duration-300 hover:grayscale-0"
            />
          ),
          width: image.width,
          height: image.height,
        }))}
        gridCols={gridMeasures[device].cols}
        rowHeight={gridMeasures[device].rowHeight}
        classNames={{
          container: 'bento-container',
          elementContainer: 'beneto-element',
        }}
      />
    </section>
  )
}