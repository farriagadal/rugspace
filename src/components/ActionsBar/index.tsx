import { Container } from './styles'
import Button from 'src/styled-components/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

const ActionsBar = () => {
  const router = useRouter()
  const image = useSelector((state: any) => state.image)

  return (
    <Container>
      <Button secondary> <ArrowBackIcon />Volver</Button>
      <Button primary disabled={!image?.url} onClick={() => router.push('/editar')}>
        <span>Continuar</span>
        <ArrowForwardIcon />
      </Button>
    </Container>
  )
}

export default ActionsBar