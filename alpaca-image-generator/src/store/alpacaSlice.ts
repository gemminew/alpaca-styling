import { createSlice } from '@reduxjs/toolkit'

export const alpacaSlice = createSlice({
  name: 'alpaca',
  initialState: { 

  },
  reducers: {
    increment: (state) => {
    },
  }
    
})

// Action creators are generated for each case reducer function
export const { increment } = alpacaSlice.actions