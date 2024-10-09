import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'

type NavigationProps = {
  locale: string
}
export const Navigation = ({ locale }: NavigationProps) => {
  return (
    <header className="container">
      <nav className="flex items-center justify-between py-6">
        <Image width={44} height={44} src="/images/logo.svg" alt="logo" />
        <ul className="flex gap-8 tracking-[4px]">
          <li>
            <Link href={`/${locale}#contact`}>CONTACT</Link>
          </li>
          <li>
            <Link
              className={clsx(
                'border-black hover:border-b',
                locale === 'es' && 'border-b'
              )}
              href="/es"
            >
              ES
            </Link>
            |
            <Link
              className={clsx(
                'border-black hover:border-b',
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
