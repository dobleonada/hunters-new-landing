import Link from 'next/link'
import Image from "next/image";

type FooterProps = {
  locale: string
}
export const Footer = ({ locale }: FooterProps) => {
  const currentYear = new Date().getFullYear()
  const currentLocale = locale
  const translations: any = {
    es: {
      language: 'Español',
      links: [
        {
          title: 'Aviso Legal.',
          path: 'aviso-legal',
        },
        {
          title: 'Política de cookies.',
          path: 'politica-de-cookies',
        },
        {
          title: 'Política de privacidad.',
          path: 'politica-de-privacidad',
        },
      ],
    },
    en: {
      language: 'English',
      links: [
        {
          title: 'Legal Warning.',
          path: 'aviso-legal',
        },
        {
          title: 'Cookies Policy.',
          path: 'politica-de-cookies',
        },
        {
          title: 'Privacy Policy.',
          path: 'politica-de-privacidad',
        },
      ],
    },
  }

  const generateLegalPathLink = (path: string) => `/${currentLocale}/legal/${path}`

  const legalLinks = () => {
    return (
      <ul className="my-2 flex flex-wrap justify-center gap-2">
        {translations[locale].links.map((link) => {
          return(
            <li>
              <Link href={generateLegalPathLink(link.path)}>{link.title}</Link>
            </li>
          )
        })}
      </ul>
    )
  }


  return (
    <footer
      id="footer"
      className="mt-[70px] flex items-center flex-col justify-center pb-14 text-xs font-thin text-secondary md:text-sm lg:text-base"
    >
      {legalLinks()}
      <p>Huntercreativos {currentYear}®</p>
      <figure className='w-3/5 mt-4'>
        <Image className="mx-auto" width={392} height={309} alt="microphones image" src="/images/logo-hunter-desenfocado.png" />
      </figure>
    </footer>
  )
}
