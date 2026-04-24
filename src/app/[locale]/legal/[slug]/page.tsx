import { LegalTextBlocks } from '@/components/LegalTextBlocks'
import { nextFetch } from '@/provider/nextFetch'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

type LegalPageProps = {
  params: {
    locale: string
    slug: string
  }
}

export async function generateMetadata({
  params,
}: LegalPageProps): Promise<Metadata> {
  const data = await fetchData(params.locale, params.slug)
  if (!data?.seo) {
    return {}
  }

  const seo = data.seo
  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    robots: seo.metaRobots,
    keywords: seo.keywords?.split(',') ?? [],
    openGraph: {
      title: seo.metaTitle,
      description: seo.description,
      images: [
        {
          url: seo.metaImage?.data?.attributes?.url,
          width: seo.metaImage?.data?.attributes?.width,
          height: seo.metaImage?.data?.attributes?.height,
        },
      ],
    },
  }
}

const fetchData = async (locale: string, slug: string) => {
  const response = await nextFetch({
    lang: locale,
    path: '/legal-pages-hunters',
    slug,
  })

  return response.data?.[0]?.attributes ?? null
}

export default async function LegalPage({ params }: LegalPageProps) {
  const data = await fetchData(params.locale, params.slug)
  if (!data) {
    notFound()
  }

  return (
    <main className="container mt-10 text-secondary">
      <h1 className="mb-10 text-4xl font-bold">{data.seo.metaTitle}</h1>
      <LegalTextBlocks content={data.legalText} />
    </main>
  )
}
