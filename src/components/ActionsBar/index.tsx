import { Container } from './styles'
import Button from 'src/styled-components/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const ActionsBar = () => {

  return (
    <Container>
      <Button secondary> <ArrowBackIcon />Volver</Button>
      <Button primary><span>Continuar</span> <ArrowForwardIcon /></Button>
    </Container>
  )
}

export default ActionsBar