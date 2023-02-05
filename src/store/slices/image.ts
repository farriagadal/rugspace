import { createSlice } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,
}

export const imageSlice = createSlice({
  name: 'image',
  initialState: {
    url: '',
    urlEdited: ''
  },
  reducers: {
    setUrl: (state, action) => {
      state.url = action.payload
    },
    setUrlEdited: (state, action) => {
      state.urlEdited = action.payload
    }
  }
})

const persistedImageSlice = persistReducer(persistConfig, imageSlice.reducer)


export const { setUrl, setUrlEdited } = imageSlice.actions


export default persistedImageSlice