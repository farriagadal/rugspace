import Link from 'next/link'
import Button from 'src/styled-components/Button'
import { Container, Background } from './styles'
import { useRouter } from 'next/router'

const Create = () => {
  const router = useRouter()

  return (
    <Background>
      <Container>
        <Link href="/create">
          <h2>
            Deja que tu creatividad fluya y diseña tu propia alfombra
          </h2>
          <Button onClick={() => router.push('/crear')}>
            Diseña tu alfombra personalizada
          </Button>
        </Link>
      </Container>
    </Background>

  )
}

export default Create