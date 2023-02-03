import Link from 'next/link'
import Button from 'src/styled-components/Button'
import { Container, Background } from './styles'

const Create = () => {
  return (
    <Background>
      <Container>
        <Link href="/create">
          <h2>
            Deja que tu creatividad fluya y diseña tu propia alfombra
          </h2>
          <Button>
            Diseña tu alfombra personalizada
          </Button>
        </Link>
      </Container>
    </Background>

  )
}

export default Create