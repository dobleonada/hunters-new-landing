import Link from 'next/link'
import Image from 'next/image'

type FooterProps = {
  locale: string
}

type LocaleKey = 'es' | 'en'

type LegalLink = {
  title: string
  path: string
}

const translations: Record<LocaleKey, { links: LegalLink[] }> = {
  es: {
    links: [
      {
        title: 'Aviso Legal.',
        path: 'aviso-legal',
      },
      {
        title: 'Política de cookies.',
        path: 'politica-cookies',
      },
      {
        title: 'Política de privacidad.',
        path: 'politica-de-privacidad',
      },
    ],
  },
  en: {
    links: [
      {
        title: 'Legal Warning.',
        path: 'aviso-legal',
      },
      {
        title: 'Cookies Policy.',
        path: 'politica-cookies',
      },
      {
        title: 'Privacy Policy.',
        path: 'politica-de-privacidad',
      },
    ],
  },
}

export const Footer = ({ locale }: FooterProps) => {
  const currentYear = new Date().getFullYear()
  const currentLocale: LocaleKey = locale === 'en' ? 'en' : 'es'
  const links = translations[currentLocale].links

  return (
    <footer
      id="footer"
      className="mt-20 flex flex-col items-center justify-center px-6 pb-14 text-white md:px-10 md:pb-16"
    >
      <ul className="my-2 flex max-w-[42rem] flex-wrap justify-center gap-x-2 gap-y-1 text-center">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              href={`/${currentLocale}/legal/${link.path}`}
              className="font-consola text-[11px] font-normal leading-none tracking-[0.04em] text-white transition-opacity hover:opacity-80 md:text-[1.05rem]"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-center font-consola text-[1.1rem] font-normal tracking-[0.02em] text-white md:text-[2rem]">
        HunterTheAgency{currentYear}®
      </p>
      <figure className="mt-5 w-full max-w-[22rem] md:mt-6 md:max-w-[28rem]">
        <Image
          className="mx-auto"
          width={392}
          height={309}
          alt="microphones image"
          src="/images/logo-hunter-desenfocado.png"
        />
      </figure>
    </footer>
  )
}
