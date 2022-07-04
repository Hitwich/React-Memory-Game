import { configureStore } from '@reduxjs/toolkit'
import changeColor from './changeColor'
import  CountDown  from './setTimer'

export const store = configureStore({
    reducer: {
      counter: changeColor,
      time: CountDown
    },
  })
