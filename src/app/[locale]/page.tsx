import { AboutUs } from '@/components/AboutUs'
import { BlurHero } from '@/components/BlurHero'
import { nextFetch } from '@/provider/nextFetch'
import { Metadata } from 'next'

type HomeProps = {
  params: {
    locale: string
  }
}

const fetchData = async (locale: string) => {
  const response = await nextFetch({
    lang: locale,
    path: '/huntercreativos-landing',
  })
  return response.data.attributes
}

export async function generateMetadata({
  params,
}: HomeProps): Promise<Metadata> {
  const data = await fetchData(params.locale)
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
          url: seo.metaImage.data?.attributes?.url,
          width: seo.metaImage.data?.attributes?.width,
          height: seo.metaImage.data?.attributes?.height,
        },
      ],
    },
  }
}

export default async function HomePage({ params }: HomeProps) {
  const { locale } = params
  const data = await fetchData(locale)

  console.log(data)
  return (
    <main>
      <BlurHero {...data.hero} />
      <AboutUs {...data.aboutUs} />
    </main>
  )
}
