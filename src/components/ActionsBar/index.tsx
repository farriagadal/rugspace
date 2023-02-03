import { Container } from './styles'
import Button from 'src/styled-components/Button'

const ActionsBar = () => {

  return (
    <Container>
      <Button>Volver</Button>
      <Button primary>Continuar</Button>
    </Container>
  )
}

export default ActionsBar