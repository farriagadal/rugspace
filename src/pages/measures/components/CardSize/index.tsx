import { Container } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { setSize } from 'src/store/slices/image'

type CardSizeProps = {
  id: number
  icon: string
  name: string
}

const CardSize = ({ icon, name, id }: CardSizeProps) => {
  const dispatch = useDispatch()
  const imageStore = useSelector((state: any) => state.image)
  console.log('imageStore CardSize', imageStore)

  return (
    <Container active={imageStore.sizeId === id} onClick={() => dispatch(setSize(id))}>
      <img src={icon} alt={name} />
      <p>{ name }</p>
    </Container>
  )
}

export default CardSize