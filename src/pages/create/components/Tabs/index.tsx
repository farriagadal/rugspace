import { useState } from 'react'
import ActionsBar from 'src/components/ActionsBar'
import ImageSearch from '../ImageSearch'
import UploadImage from '../UploadImage'
import { Container, Options, Item, Content } from './styles'

const Tabs = () => {
  const [tab, setTab] = useState<number>(1)

  return (
    <Container>
      <Options>
        <Item onClick={() => setTab(1)} active={tab === 1}>
          Busca una imagen
        </Item>
        <Item onClick={() => setTab(2)} active={tab === 2}>
          Sube una imagen
        </Item>
      </Options>
      <Content>
        { tab === 1 && <UploadImage /> }
        { tab === 2 && <ImageSearch /> }
      </Content>
    </Container>
  )
}

export default Tabs