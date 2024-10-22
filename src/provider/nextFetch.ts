export const nextFetch = async ({
  slug,
  lang,
  path,
}: {
  slug?: string
  lang: string
  path: string
}) => {
  let url = `${process.env.NEXT_PUBLIC_CMS_API_URL}${path}?populate=deep&locale=${lang}`
  if (slug) {
    url += `&filters[slug][$eq]=${slug}`
  }
  const response = await fetch(url, {
    next:
      process.env.NODE_ENV !== 'development'
        ? { tags: ['revalidate'] }
        : undefined,
  })
  console.log(response)
  const responseData = await response.json()
  return responseData
}
