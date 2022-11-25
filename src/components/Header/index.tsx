
import { useEffect, useState } from 'react'
import NavDesktop from '../NavDesktop'
import NavMobile from '../NavMobile'

const Header = () => {
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])
  
  return (
    <>
      { isMobile ? <NavMobile /> : <NavDesktop /> }
    </>
  )
}

export default Header