import { useState } from 'react'
import ActionsBar from 'src/components/ActionsBar'
import { Container } from './styles'

const UploadImage = () => {
  return (
    <Container>
      <label htmlFor="file-upload" className="custom-file-upload">
        Selecciona o arrastra una imagen
      </label>
      <input id="file-upload" accept="image/png,image/jpeg" type="file" />
    </Container>
  )
}

export default UploadImage