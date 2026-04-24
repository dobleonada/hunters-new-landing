import { AboutUs } from '@/components/AboutUs'
import { AboutUsIntro } from '@/components/AboutUsIntro'
import { Cities } from '@/components/Cities'
import { nextFetch } from '@/provider/nextFetch'
import { Metadata } from 'next'
import { Founders } from '@/components/Founders'
import { Hero } from '@/components/Hero'
import { LogoGrid } from '@/components/LogoGrid'
import { IntroductionText } from '@/components/IntroductionText'
import { Carousel } from '@/components/Carousel'
import { WhatWeDoIntro } from '@/components/WhatWeDoIntro'
import { WhatWeDoGrid } from '@/components/WhatWeDoGrid'
import { CmsSectionImage } from '@/components/CmsSectionImage'
import { ServiceCategoryGridNew } from '@/components/ServiceCategoryGridNew'

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
      <AboutUsIntro {...data.aboutUs} />
      <IntroductionText {...data.IntroductionText} />
      <WhatWeDoIntro {...data.whatWeDoSection} />
      <WhatWeDoGrid {...data.whatWeDoSection} />
      <CmsSectionImage
        image={data.imageExperience}
        title="20 años de diseño y fabricación"
        imageMaxWidthClassName="max-w-[62.4rem]"
      />
      <ServiceCategoryGridNew {...data.serviceListSectionNew} />
      <div className="space-y-6 md:space-y-8">
        <AboutUs {...data.AboutProjects} />
        <Carousel {...data.Carousel} />
      </div>
      <div className="space-y-4 md:space-y-6">
        <Cities {...data.citiesList} />
        <LogoGrid logos={data.LogoGrid.logos} />
      </div>
      <Founders {...data.people} />
    </main>
  )
}
