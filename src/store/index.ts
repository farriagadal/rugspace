import { configureStore } from '@reduxjs/toolkit'
import image from 'src/store/slices/image'

export default configureStore({
  reducer: {
    image
  }
})
