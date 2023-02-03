import Image from 'next/image'
import Link from 'next/link'
import { Container, BgImg, Bar, BackBtn, ArrowDown, Text } from './styles'
import IconWeb1 from 'public/icons/how-work-1.svg'

const Heading = () => {
  return (
    <>
      <Container>
        <BgImg />
        <Text>
          {/* <Image src='/icons/how-work-1.svg' alt="Web Logo" width={77} height={77} /> */}
          <h2>1. Escoge una imagen</h2>
        </Text>
      </Container>
      <Bar>
        <Link href="/"><BackBtn>
          <Image src="/icons/back-arrow.svg" alt="Back" width={21} height={18} /> Volver
        </BackBtn></Link>
        <ArrowDown href="#content">
          <Image src='/icons/arrow-down.svg' alt="Arrow Down" width={45} height={45} />
        </ArrowDown>
      </Bar>
    </>

  )
}

export default Heading