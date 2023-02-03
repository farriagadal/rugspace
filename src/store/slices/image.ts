import { createSlice } from '@reduxjs/toolkit'

export const imageSlice = createSlice({
  name: 'image',
  initialState: {
    url: null,
    name: ''
  },
  reducers: {
    setUrl: (state, action) => {
      state.url = action.payload
    }
  }
})

export const { setUrl } = imageSlice.actions

export default imageSlice.reducer