import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import AvatarEditor from 'react-avatar-editor'
import { useSelector, useDispatch } from 'react-redux'
import { setUrlEdited } from 'src/store/slices/image'
import Button from 'src/styled-components/Button'
import { Container } from './styles'
import sizes from 'data/sizes.json'


const ImageEditor = () => {
  const imageStore = useSelector((state: any) => state.image)
  const dispatch = useDispatch()
  const editorRef = useRef<any>(null)
  const [image, setImage] = useState<any>(null)
  const [scale, setScale] = useState(1.0)
  const [rotate, setRotate] = useState(0)
  const [position, setPosition] = useState({ x: 0.5, y: 0.5 })
  const [dragging, setDragging] = useState(false)

  const handleEditorWheel = (e: any) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    document.querySelector('#image-editor').addEventListener('mousewheel', function(event) {
      event.preventDefault()
    }, { passive: false })
    e.preventDefault()
    e.stopPropagation()
    setScale(prevScale => prevScale + (e.deltaY * 0.0003))
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    document.querySelector('#image-editor').removeEventListener('mousewheel', {})

  }

  const handleEditorTouchMove = (e: any) => {
    e.preventDefault()
    setScale(prevScale => prevScale + (e.scale - 1))
  }
  
  const handleEditorMouseDown = (e: any) => {
    e.preventDefault()
    document.addEventListener('mousemove', handleEditorMouseMove)
    document.addEventListener('mouseup', handleEditorMouseUp)
  }
  
  const handleEditorMouseMove = (e: any) => {
    e.preventDefault()
    setRotate(prevRotate => prevRotate + (e.movementX * 0.05))
  }
  
  const handleEditorMouseUp = (e: any) => {
    document.removeEventListener('mousemove', handleEditorMouseMove)
    document.removeEventListener('mouseup', handleEditorMouseUp)
  }


  const handleMouseDown = (e: any) => {
    e.preventDefault()
    console.log('/////handleMouseDown////////')
    setDragging(true)
  }

  const handleMouseUp = (e: any) => {
    e.preventDefault()
    console.log('////handleMouseUp/////////')
    setDragging(false)
  }

  const handleMouseMove = (e: any) => {
    e.preventDefault()
    console.log('/////////////')
    if (!dragging) return
    console.log('/////////////')
    const { x, y } = editorRef.current.getImage().getBoundingClientRect()
    const newX = (e.clientX - x) / editorRef.current.getImage().width
    const newY = (e.clientY - y) / editorRef.current.getImage().height
    setPosition({ x: newX, y: newY })
  }

  const handleUpload = async () => {
    const canvasScaled = editorRef.current.getImageScaledToCanvas()
    canvasScaled.toBlob(function(blob: any) {
      const formData = new FormData()
      formData.append('file', blob)
      formData.append('upload_preset', 'upload_dev')
      const API_KEY = '946873127769385'
      axios.post(
        'https://api.cloudinary.com/v1_1/dxrtars4c/image/upload',
        formData, { params: { api_key: API_KEY }}
      ).then((res) => {
        dispatch(setUrlEdited(res.data?.secure_url))
      }).catch((err) => {
        console.error(err)
      })
    })
  }

  const getSize = () => {
    const size: any = sizes.find((s: any) => imageStore.sizeId === s.id)
    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight

    const relation = size.width / size.height
    if (relation > 0.7) {
      return {
        width: 1000,
        height: screenWidth / relation
      }
    }
    if (relation > 0.5) {
      return {
        width: screenHeight * relation,
        height: screenHeight
      }
    }
  }

  useEffect(() => {
    console.log('imageStore', imageStore)

    async function fetchImage() {
      const response = await fetch(imageStore.url)
      const blob = await response.blob()
      const objectURL = URL.createObjectURL(blob)
      setImage(objectURL)
    }
    fetchImage()
  }, [imageStore])

  return (
    <Container>
      { image &&
        <AvatarEditor
          ref={editorRef}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          id='image-editor'
          image={image}
          width={1000}
          height={500}
          border={2}
          color={[255, 199, 0, 1]}
          background={[255, 255, 255, 1]}
          scale={scale}
          rotate={rotate}

          position={position}
          // onMouseDown={handleMouseDown}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}

          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          onWheel={handleEditorWheel}
          onScroll={handleEditorWheel}
          onTouchMove={handleEditorTouchMove} // TODO: agregar soporte para touch
          onMouseDown={handleEditorMouseDown}
          style={{ cursor: 'pointer' }}
        />
      }
      <Button primary onClick={handleUpload}>Guardar Cambios</Button>
    </Container>
  )
}

export default ImageEditor