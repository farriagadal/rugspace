import { useEffect, useState } from 'react'
import CardWork from '../CardWork'
import { Container, List } from './styles'
import IconWork1 from 'public/icons/objetivos.svg'
import IconWork2 from 'public/icons/mockup.svg'
import IconWork3 from 'public/icons/goals.svg'


const cards = [
  {
    Icon: IconWork1,
    title: 'Definición de objetivos',
    description: 'Nos reunimos para determinar los caminos y las opciones a elegir en función de sus objetivos comerciales.'
  },
  {
    Icon: IconWork2,
    title: 'Prototipado y desarrollo',
    description: 'Creamos rápidamente un prototipo (mockup) del proyecto para ver el progreso y como será al final, asegurándonos de mantenernos alineados con nuestros objetivos.'
  },
  {
    Icon: IconWork3,
    title: 'Entrega y mantención',
    description: 'Una vez que hemos entregado el proyecto, es momento de comenzar la etapa de monitoreo y mejoras constantes.'
  }
]


const HowWorks = () => {
  const [isShow, setIsShow] = useState(false)
  const [isHover, setIsHover] = useState(false)

  useEffect(() => {
    const observer: any = new IntersectionObserver(function(entries) {
      // setIsShow(entries[0].intersectionRatio === 1)
      if (entries[0].intersectionRatio === 1) {
        setIsShow(true)
      }
    }, { threshold: 1 })
    observer.observe(document.querySelector('#howworks'))
  }, [])

  return (
    <div id="howworks" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <Container isActive={isShow || isHover}>
        <label>Cómo trabajamos</label>
        <h2>Tú también serás parte del proyecto</h2>
        <List isActive={isShow || isHover}>
          {cards.map((card, index) => <CardWork key={index} {...card} number={index+1} />)}
        </List>
      </Container>
    </div>

  )
}

export default HowWorks