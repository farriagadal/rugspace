import { Container } from './styles'
import Rug1 from 'public/icons/rug1.svg'
import Rug2 from 'public/icons/rug2.svg'
import Rug3 from 'public/icons/rug3.svg'
import CardSize from '../CardSize'
import sizes from 'data/sizes.json'

const Sizes = () => {
  return (
    <Container>
      { sizes.map(({ id, name, icon }) => (
        <CardSize key={id} id={id} name={name} icon={icon} />
      ))}
    </Container>
  )
}

export default Sizes