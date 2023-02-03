import { Container, BgImg, Text, Section } from './styles'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const OurValues = () => {
  const [isShow, setIsShow] = useState(false)
  const [isHover, setIsHover] = useState(false)

  useEffect(() => {
    const observer: any = new IntersectionObserver(function(entries) {
      setIsShow(entries[0].intersectionRatio === 1)
    }, { threshold: [0, 1] })
    observer.observe(document.querySelector('#ourvalues-label'))
  }, [])

  return (
    <Section id="ourvalues" isActive={isShow || isHover} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <Container>
        <BgImg isActive={isShow || isHover}><Image src='/images/gengar.jpg' alt="Seedlab Fondo" fill /></BgImg>
        <Text isActive={isShow || isHover}>
          <label id="ourvalues-label">Caracteristicas</label>
          <h2>Los mejores materiales</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas sint esse quaerat illo quo necessitatibus dignissimos tempore cupiditate iure, pariatur provident. Dolorem repellat eveniet quo dolor et, quidem magnam possimus debitis suscipit. Id voluptates voluptatum ipsum excepturi, ducimus error maxime!
            <br />Motivado por la creación de soluciones IT, aspiro siempre al desarrollo personal tanto humano como profesional, mejorando día a día mis cualidades, metodologías y buenas prácticas.
          </p>
        </Text>
      </Container>
    </Section>

  )
}

export default OurValues