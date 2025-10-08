'use client'

import Image from 'next/image'
import { useEffect, useMemo, useRef, useState } from 'react'

type StrapiImageFormat = {
  url: string
  width: number
  height: number
}

type StrapiImageAttributes = {
  name: string
  alternativeText?: string | null
  caption?: string | null
  url: string
  width: number
  height: number
  formats?: Record<string, StrapiImageFormat | undefined> | null
}

type StrapiImage = {
  id: number
  attributes: StrapiImageAttributes
}

type CarouselProps = {
  title?: string | null
  images?: {
    data?: StrapiImage[] | null
  }
}

type Slide = {
  id: number
  alt: string
  main: StrapiImageFormat
  thumb: StrapiImageFormat
}

const ArrowIcon = ({ direction }: { direction: 'left' | 'right' }) => {
  const isLeft = direction === 'left'
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 md:h-7 md:w-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {isLeft ? (
        <path d="M14.25 5.25 7.5 12l6.75 6.75M7.5 12h9" />
      ) : (
        <path d="M9.75 5.25 16.5 12l-6.75 6.75M16.5 12h-9" />
      )}
    </svg>
  )
}

export const Carousel = ({ title, images }: CarouselProps) => {
  const slides = useMemo(() => {
    const imageEntries = images?.data ?? []

    return imageEntries
      .map((item) => {
        const attrs = item.attributes
        if (!attrs) return null

        const formats = attrs.formats ?? {}
        const mainFormat =
          formats['large'] ?? formats['medium'] ?? formats['small'] ?? null
        const thumbFormat =
          formats['thumbnail'] ?? formats['small'] ?? formats['medium'] ?? null

        const main: StrapiImageFormat | null = mainFormat
          ? {
              url: mainFormat.url ?? attrs.url,
              width: mainFormat.width ?? attrs.width,
              height: mainFormat.height ?? attrs.height,
            }
          : {
              url: attrs.url,
              width: attrs.width,
              height: attrs.height,
            }

        const thumb: StrapiImageFormat | null = thumbFormat
          ? {
              url: thumbFormat.url ?? main.url,
              width: thumbFormat.width ?? main.width,
              height: thumbFormat.height ?? main.height,
            }
          : {
              url: main.url,
              width: main.width,
              height: main.height,
            }

        if (!main.url) return null

        return {
          id: item.id,
          alt:
            attrs.alternativeText ??
            attrs.caption ??
            attrs.name ??
            'Carousel image',
          main,
          thumb,
        }
      })
      .filter((slide): slide is Slide => Boolean(slide))
  }, [images])

  const [activeIndex, setActiveIndex] = useState(0)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [hasBeenVisible, setHasBeenVisible] = useState(false)
  const intersectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const node = intersectionRef.current
    if (!node || hasBeenVisible) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasBeenVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [hasBeenVisible])

  useEffect(() => {
    setImageLoaded(false)
  }, [activeIndex])

  if (!slides.length) return null

  const activeSlide = slides[activeIndex]
  const canNavigate = slides.length > 1

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const handleSelect = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <section className="mx-auto w-full max-w-[1440px] px-4">
      {title ? (
        <h3 className="sub-title mb-6 text-center md:mb-10">{title}</h3>
      ) : null}
      <div
        ref={intersectionRef}
        className="flex flex-col items-center gap-6 md:gap-10"
      >
        <div className="relative mx-auto w-full max-w-xs sm:max-w-sm md:max-w-[1120px]">
          <div className="relative aspect-[3/2] overflow-hidden rounded-3xl border border-secondary/20 bg-primary shadow-lg">
            {hasBeenVisible ? (
              <Image
                key={activeSlide.id}
                src={activeSlide.main.url}
                alt={activeSlide.alt}
                fill
                sizes="(max-width: 768px) 100vw, 960px"
                priority={activeIndex === 0}
                className={`object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoadingComplete={() => setImageLoaded(true)}
              />
            ) : (
              <div className="h-full w-full animate-pulse bg-secondary/10" />
            )}
          </div>

          {canNavigate ? (
            <>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Imagen anterior"
                className="group absolute left-0 top-1/2 z-10 -translate-x-full -translate-y-1/2 rounded-full border border-secondary/30 bg-transparent p-2 text-secondary transition hover:border-secondary hover:bg-secondary/10 hover:text-black md:left-[-4.5rem] md:translate-x-0 md:p-4"
              >
                <ArrowIcon direction="left" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Imagen siguiente"
                className="group absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-full rounded-full border border-secondary/30 bg-transparent p-2 text-secondary transition hover:border-secondary hover:bg-secondary/10 hover:text-black md:right-[-4.5rem] md:translate-x-0 md:p-4"
              >
                <ArrowIcon direction="right" />
              </button>
            </>
          ) : null}
        </div>

        {slides.length > 1 ? (
          <div className="flex w-full max-w-[1120px] gap-4 overflow-x-auto pb-2 pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {slides.map((slide, index) => {
              const isActive = index === activeIndex
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => handleSelect(index)}
                  className={`relative h-24 w-36 shrink-0 snap-start overflow-hidden rounded-xl border transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black md:h-28 md:w-40 ${
                    isActive
                      ? 'border-secondary ring-2 ring-secondary'
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                  aria-label={`Mostrar imagen ${index + 1}`}
                  aria-pressed={isActive}
                >
                  {hasBeenVisible ? (
                    <Image
                      src={slide.thumb.url}
                      alt={slide.alt}
                      fill
                      sizes="(max-width: 768px) 35vw, 200px"
                      loading="lazy"
                      className="object-cover"
                    />
                  ) : (
                    <div className="h-full w-full animate-pulse bg-secondary/10" />
                  )}
                </button>
              )
            })}
          </div>
        ) : null}
      </div>
    </section>
  )
}
