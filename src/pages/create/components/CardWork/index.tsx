import { useEffect } from 'react'
import { Container, Title, IconContainer } from './styles'
// import IconWork from 'public/icons/how-work.svg'

type CardWorkProps = {
  Icon: any,
  number: number,
  title: string,
  description: string
}

const CardWork = ({ Icon, number, title, description }: CardWorkProps) => {

  return (
    <Container delay={Math.random()}>
      <IconContainer>
        <Icon />
      </IconContainer>
      <Title>
        <span>0{number}</span>
        <h4>{title}</h4>
      </Title>
      <p>{description}</p>
    </Container>
  )
}

export default CardWork