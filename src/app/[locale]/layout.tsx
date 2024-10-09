import './globals.css'
import { consola } from '../fonts/index'
// import { Navigation } from "@/components/Navigation";
// import { Footer } from "@/components/Footer";
// import { CookieConsent } from "@/components/CookieConsent";
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Navigation } from '@/components/Navigation'

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: {
    locale: string
  }
}>) {
  const messages = await getMessages()

  return (
    <html lang={params.locale}>
      <body className={`${consola.variable}`}>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <Navigation locale={params.locale} />
          {children}
          {/* <Footer locale={params.locale} />
          <CookieConsent /> */}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
