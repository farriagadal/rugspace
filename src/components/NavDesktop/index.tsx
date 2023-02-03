/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link'
import { Container, Logo, MenuOption, ContactBtn } from './styles'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const NavDesktop = () => {
  const [isTop, setIsTop] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const observer: any = new IntersectionObserver(function(entries) {
      setIsTop(entries[0].intersectionRatio === 1)
    }, { threshold: [0,1] })

    observer.observe(document.querySelector('#indicator'))
  }, [])
  
  return (
    <>
      <div id="indicator" />
      <Container isTop={isTop}>
        <nav>
          <Logo>
            <Link href="/" className="full-logo">
              <Image src='/icons/logo.svg' alt="SeedLab Logo" width={145} height={146} />
            </Link>
            <Link href="/" className="short-logo">
              <Image src='/icons/logo.svg' alt="SeedLab Logo" width={133} height={19} />
            </Link>
            <Link href="/" className="short-logo-black">
              <Image src='/icons/short-logo-black.svg' alt="SeedLab Logo" width={133} height={19} />
            </Link>
          </Logo>
          {
            router.pathname === '/' ? 
              <>
                <MenuOption><a href="/#services">Servicios</a></MenuOption>
                <MenuOption><a href="/#ourvalues">Nuestro Valor</a></MenuOption>
                <MenuOption><a href="/#howworks">Como trabajamos</a></MenuOption>
                <MenuOption><a href="/#techs">Tecnologías</a></MenuOption>
              </>
              :
              <>
                <MenuOption><Link href="/#services">Servicios</Link></MenuOption>
                <MenuOption><Link href="/#ourvalues">Nuestro Valor</Link></MenuOption>
                <MenuOption><Link href="/#howworks">Como trabajamos</Link></MenuOption>
                <MenuOption><Link href="/#techs">Tecnologías</Link></MenuOption>
              </>
          }
        </nav>
      </Container>
      <Link href="/contacto">
        <ContactBtn>
          <Image src='/icons/contact-icon.svg' alt="Contact Icon" width={16} height={16} />
          <span>Contáctanos</span>
        </ContactBtn>
      </Link>

    </>
    

  )
}

export default NavDesktop