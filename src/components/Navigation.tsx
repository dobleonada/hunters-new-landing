import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'

type NavigationProps = {
  locale: string
}
export const Navigation = ({ locale }: NavigationProps) => {
  return (
    <header className="container">
      <nav className="flex items-center justify-between gap-4 py-5 md:py-6">
        <Link href="/" locale={locale}>
          <Image
            width={44}
            height={44}
            src="/images/logo-blue.png"
            alt="logo"
            className="h-9 w-9 md:h-11 md:w-11"
          />
        </Link>
        <ul className="flex items-center gap-4 text-[0.75rem] tracking-[0.22em] text-white sm:gap-6 md:gap-8 md:text-base">
          <li>
            <Link
              href={`/${locale}#contact`}
              className="transition-opacity hover:opacity-80"
            >
              CONTACT
            </Link>
          </li>
          <li>
            <Link
              className={clsx(
                'border-white transition-opacity hover:border-b hover:opacity-80',
                locale === 'es' && 'border-b'
              )}
              href="/es"
            >
              ES
            </Link>
            |
            <Link
              className={clsx(
                'border-black transition-opacity hover:border-b hover:opacity-80',
                locale === 'en' && 'border-b'
              )}
              href="/en"
            >
              EN
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
