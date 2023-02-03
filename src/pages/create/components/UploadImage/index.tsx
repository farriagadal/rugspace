import { useState } from 'react'
import ActionsBar from 'src/components/ActionsBar'
import { Container, Img } from './styles'
import axios from 'axios'
import Loading from 'src/components/Loading'
import Button from 'src/styled-components/Button'
import FileUploadIcon from '@mui/icons-material/FileUpload'
import ReplayIcon from '@mui/icons-material/Replay'
import { useDispatch, useSelector } from 'react-redux'
import { setUrl } from 'src/store/slices/image'


const UploadImage = () => {
  const imageUpload = useSelector((state: any) => state.image)
  const dispatch = useDispatch()
  const [image, setImage] = useState(imageUpload.url || '')
  // const [image
  const [loading, setLoading] = useState(false)

  const handleUpload = async (e: any) => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'upload_dev')
    const API_KEY = '946873127769385'
    setLoading(true)

    // const base64Image = canvas.toDataURL()
    // const formData = new FormData()
    // formData.append('file', base64Image)
    // formData.append('upload_preset', '***THE_PRESET_NAME***')

    const res = await axios.post(
      'https://api.cloudinary.com/v1_1/dxrtars4c/image/upload',
      data,
      {
        params: {
          api_key: API_KEY,
        },
      }
    )
    
    setImage(res.data?.secure_url)
    dispatch(setUrl(res.data?.secure_url))
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }

  return (
    <Container>
      {!loading && !image &&
        <label htmlFor="file-upload" className="custom-file-upload">
          Selecciona o arrastra una imagen
        </label>
      }
      {image && (
        <>
          <Img>
            <img src={image} alt="Upload Preview" />
            {/* <ActionsBar /> */}
          </Img>
          <Button secondary>
            <label htmlFor="file-upload">
              <span>Carga otra imagen</span>
              <ReplayIcon />
            </label>
          </Button>
          <input id="file-upload" accept="image/png,image/jpeg" type="file" onChange={handleUpload} />
        </>
      )}
      {loading && !image ? (
        <Loading />
      ) : (
        <input id="file-upload" accept="image/png,image/jpeg" type="file" onChange={handleUpload} />
      )}
    </Container>
  )
}

export default UploadImage