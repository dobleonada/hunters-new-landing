import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

export type LocaleType = 'es' | 'en'

const locales: LocaleType[] = ['es', 'en']

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as LocaleType)) notFound()

  return {
    messages: (await import(`./messages/${locale}.ts`)).default,
  }
}) as any
