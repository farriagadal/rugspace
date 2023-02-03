import React from 'react'
import { Container } from './styles'

type DimensionProps = {
  heigthSpinner?: any
  heigth?: any
}

const Loading = ({ heigthSpinner, heigth }: DimensionProps) => {
  return (
    <Container heigthSpinner={heigthSpinner} heigth={heigth}>
      <img src='/icons/loading.svg' />
    </Container>
  )
}

export default Loading
