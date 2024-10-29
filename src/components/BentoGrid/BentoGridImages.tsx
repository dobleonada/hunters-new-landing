import { ScreenSize, useScreenSize } from '@/hooks/useScreenSize'
import { BentoGrid, BentoGridProps } from 'react-bento'
import Image from 'next/image'
import { useMemo } from 'react'

type FormattedImages = {
  url: string
  height: number
  width: number
  imageWidth: number
  imageHeight: number
  id: number
  altText: string | null
}

type ImageData = {
  id: number
  width: number
  height: number
  device: ScreenSize
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
}

type BentoGridImagesProps = {
  images: ImageData[]
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
  content: BentoGridImagesProps['images'],
  device: ScreenSize
): FormattedImages[] => {
  return content
    .filter((image) => image.device === device)
    .map((image) => ({
      id: image.id,
      url: image.image.data.attributes.url,
      width: image.width,
      height: image.height,
      imageWidth: image.image.data.attributes.width,
      imageHeight: image.image.data.attributes.height,
      altText: image.image.data.attributes.alternativeText,
    }))
}

export const BentoGridImages = ({ images }: BentoGridImagesProps) => {
  const device = useScreenSize()
  const formattedImages = useMemo(
    () => formatImages(images, device),
    [device, images]
  )

  if (!device) return null

  return (
    <div>
      <BentoGrid
        items={formattedImages.map((image) => ({
          id: image.id,
          title: image.altText ?? 'Image',
          element: (
            <Image
              key={image.id}
              src={image.url}
              width={image.imageWidth}
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
    </div>
  )
}
