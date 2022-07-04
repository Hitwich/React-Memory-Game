import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 80,
}

export const CountDown = createSlice({
  name: 'CountDown',
  initialState,
  reducers: {
    easy: (state,) => {
      state.value = 85
    },
    normal: (state,) => {
      state.value = 70
    },
    hard: (state,) => {
      state.value = 45
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { easy,normal,hard } = CountDown.actions

export default CountDown.reducer