import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const changeColor = createSlice({
  name: 'changeColor',
  initialState,
  reducers: {
    change: (state) => {
      state.value = !state.value
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { change } = changeColor.actions

export default changeColor.reducer