import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import AvatarEditor from 'react-avatar-editor'
import { useSelector } from 'react-redux'



const ImageEditor = () => {
  const imageStore = useSelector((state: any) => state.image)
  const editorRef = useRef<any>(null)

  const [image, setImage] = useState<any>(imageStore.url)
  const [scale, setScale] = useState(1.0)
  const [rotate, setRotate] = useState(0)

  const handleEditorWheel = (e: any) => {
    e.preventDefault()
    setScale(prevScale => prevScale + (e.deltaY * 0.0003))
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

  const handleUpload = async () => {
    const canvas: any = editorRef
    canvas.crossOrigin = 'anonymous'
    const dataURL = canvas.current.getImage().toDataURL('image/jpeg')
    const formData = new FormData()
    formData.append('file', dataURL)
    formData.append('upload_preset', 'upload_dev')
    const API_KEY = '946873127769385'
  
    try {
      const res = await axios.post(
        'https://api.cloudinary.com/v1_1/dxrtars4c/image/upload',
        formData,
        {
          params: {
            api_key: API_KEY,
          },
        }
      )
      console.log(res)
    } catch (err) {
      console.error(err)
    }
  }

  console.log('rotate', rotate)
  return (
    <div>
      {image && (
        <AvatarEditor
          ref={editorRef}
          image={image}
          width={1000}
          height={500}
          border={50}
          color={[255, 255, 255, 0.6]}
          scale={scale}
          rotate={rotate}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          onWheel={handleEditorWheel}
          onTouchMove={handleEditorTouchMove} // TODO: agregar soporte para touch
          onMouseDown={handleEditorMouseDown}
          style={{ cursor: 'pointer', zIndex: 111, position: 'relative', pointerEvents: 'all' }}
        />
      )}
      <button onClick={handleUpload}>Upload Image</button>
    </div>
  )
}

export default ImageEditor