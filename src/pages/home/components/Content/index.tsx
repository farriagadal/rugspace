import Link from 'next/link'
import CardExperience from 'src/components/CardExperience'
import { Container, BtnContact, Title } from './styles'

const Content = ({ Body }: any) => {
  return (
    <div id="content">
      <Title>
        <label>Opiniones</label>
        <h2>Esto es lo que dicen nuestros clientes</h2>
      </Title>
      <Container>
        <ul>
          <CardExperience index={0}>
          Pedro Aburto, Puente Alto <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod doloribus quia dolorum commodi autem ipsum, ipsam dolorem pariatur, dignissimos aliquam magni provident repellat architecto! In ipsum corporis blanditiis ex sed, saepe fuga, eveniet sint aliquam modi hic, provident et laborum.
            </p>
          </CardExperience>
          <CardExperience index={1}>
            Pedro Aburto, Puente Alto <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod doloribus quia dolorum commodi autem ipsum, ipsam dolorem pariatur, dignissimos aliquam magni provident repellat architecto! In ipsum corporis blanditiis ex sed, saepe fuga, eveniet sint aliquam modi hic, provident et laborum.
            </p>
          </CardExperience>
          <CardExperience index={2}>
            Pedro Aburto, Puente Alto <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod doloribus quia dolorum commodi autem ipsum, ipsam dolorem pariatur, dignissimos aliquam magni provident repellat architecto! In ipsum corporis blanditiis ex sed, saepe fuga, eveniet sint aliquam modi hic, provident et laborum.
            </p>
          </CardExperience>
        </ul>
      </Container>
    </div>
  )
}

export default Content