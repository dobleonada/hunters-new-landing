import { AboutUs } from '@/components/AboutUs'
// import { BlurHero } from '@/components/BlurHero'
import { Cities } from '@/components/Cities'
import { Services } from '@/components/Services'
import { nextFetch } from '@/provider/nextFetch'
import { Metadata } from 'next'
import { Founders } from '@/components/Founders'
import { Hero } from '@/components/Hero'
import { LogoGrid } from '@/components/LogoGrid'
import { IntroductionText } from '@/components/IntroductionText'
import { Carousel } from '@/components/Carousel'

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

  return (
    <main className="space-y-10 md:space-y-20">
      <Hero {...data.hero} />
      <AboutUs {...data.aboutUs} />
      <IntroductionText {...data.IntroductionText} />
      <AboutUs {...data.AboutProjects} />
      <Services {...data.servicesList} />
      <Carousel {...data.Carousel} />
      <Cities {...data.citiesList} />
      <LogoGrid {...data.LogoGrid} />
      <Founders {...data.people} />
    </main>
  )
}
