import { Container, BgImg, ArrowDown } from './styles'
import Image from 'next/image'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { useState } from 'react'
import Button from 'src/styled-components/Button'
import { useRouter } from 'next/router'

const Heading = () => {
  const [imageId, setImageId] = useState(0)
  const router = useRouter()

  return (
    <>
      <Container>
        <label>Rugspace</label>
        <Splide aria-label="My Favorite Images"
          options={{
            type: 'fade',
            arrows: false,
            pagination: false,
            autoplay: true,
            interval: 10000,
            rewind: true,
            pauseOnHover: false
          }}
          onMoved={(newIndex, oldIndex) => {
            setImageId(oldIndex)
          }}
        >
          <SplideSlide>
            <h1>Alfombras personalizadas</h1>
            <p>Lleva tu pasión por el anime y los juegos al siguiente nivel con nuestras alfombras personalizadas. Crea un diseño único y personalizado que refleje tu personalidad y tus intereses, ¡Perfecto para cualquier joven fanático!</p>
            <Button onClick={() => router.push('/crear')}>
              Crea tu diseño
            </Button>
          </SplideSlide>
          {/* <SplideSlide>
            <h1>Front-End Developer</h1>
            <p>Software Engineer con +5 años de experiencia en el campo; +4 años en desarrollo Front-End con Typescript y Javascript (React.js, Vue.js y Angular); +2 años en desarrollo Back-End con tecnologías como Node.js y Python.</p>
            <BgImg show={imageId === 1}><Image src='/images/frontend.jpg' alt="Frontend" fill /></BgImg>
          </SplideSlide> */}
        </Splide>
      </Container>
      <ArrowDown href="/#techs">
        <Image src='/icons/arrow-down.svg' alt="Arrow Down" fill />
      </ArrowDown>
    </>

  )
}

export default Heading