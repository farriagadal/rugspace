import Image from 'next/image'
import { Container } from './styles'

const ComingSoon = () => {
  return (
    <Container>
      <Image className='logo' src='/icons/logo.svg' alt="Rugspace Logo" width={145} height={146} />
      <Image className='stars' src='/icons/stars.svg' alt="Stars SVG" width={145} height={146} />
    </Container>
  )
}

export default ComingSoon