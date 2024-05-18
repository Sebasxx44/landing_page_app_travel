import Link from 'next/link'
import Image from 'next/image'
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'

const Footer = () => {
  return (
    
    <footer className='flexCenter mb-24'>
      <div className='padding-container max-container flex w-full flex-col gap-14'>
        <div className='flex flex-col items-start justify-center gap-[10%] md:flex-row'>
          <Link href='/' className='mb-10'>
            <Image
              src='/logo.png'
              alt='logo'
              width={140}
              height={29}
            />
          </Link>

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((item, index) => (
              <FooterColum title={item.title}>
                <ul className='regular-14 flex flex-col gap-4 text-gray-30'>
                  {item.links.map((link, index) => (
                    <Link href={'/'} key={link}>
                        {link}
                    </Link>
                  ))}
                </ul>


              </FooterColum>
            ))}

            <div className='flex flex-col gap-5'>
              <FooterColum title={FOOTER_CONTACT_INFO.title}>

                {FOOTER_CONTACT_INFO.links.map((link, index) => (
                  <Link href={'/'} key={link.label} className='flex gap-4 md:flex-col lg:flex-row'>
                    <p className='whitespace-nowrap'>
                      {link.label}:
                    </p>
                    <p className='medium-14 whitespace-nowrap text-blue-70'>{link.value}</p>
                  </Link>
                ))}
              </FooterColum>
            </div>

            <div className='flex flex-col gap-5'>
              <FooterColum title={SOCIALS.title}>
                <ul className='regular-14 flex  gap-4 text-gray-30'>
                  {SOCIALS.links.map((link, index) => (
                    <Link href={'/'} key={link}>
                        <Image src={link} alt='logo' width={32} height={32}/>
                    </Link>
                  ))}

                </ul>
              </FooterColum>
            </div>
          </div>
        </div>

        <div className='border bg-gray-20'/>
        <p className='regular-14 w-full text-center text-gray-30'>2024 Hilink | All Rights Reserved</p>

      </div>
    </footer>
  )
}

type FooterColumProps = {
  title: string
  children: React.ReactNode
}

const FooterColum = ({title, children} : FooterColumProps) => {

  return(

    <div className='flex flex-col gap-5'>
      <h4 className='bold-18 whitespace-nowrap'>{title}</h4>
      {children}
    </div>

  )
}

export default Footer