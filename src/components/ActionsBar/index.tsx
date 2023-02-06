import { Container } from './styles'
import Button from 'src/styled-components/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useRouter } from 'next/router'

type ActionsBarProps = {
  nextUrl: string
  previousUrl?: string
  canContinue: boolean
}

const ActionsBar = ({ nextUrl, previousUrl, canContinue }: ActionsBarProps) => {
  const router = useRouter()

  return (
    <Container>
      { previousUrl && <Button secondary> <ArrowBackIcon onClick={() => router.push(previousUrl)} />Volver</Button> }
      <Button primary disabled={!canContinue} onClick={() => router.push(nextUrl)}>
        <span>Continuar</span>
        <ArrowForwardIcon />
      </Button>
    </Container>
  )
}

export default ActionsBar