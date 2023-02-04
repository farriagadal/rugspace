import { configureStore } from '@reduxjs/toolkit'
import image from 'src/store/slices/image'
import { getDefaultMiddleware } from '@reduxjs/toolkit'

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})

export default configureStore({
  reducer: {
    image
  },
  middleware: customizedMiddleware,
})
