import type { SliderState, SliderStateValue } from './types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const initialState: SliderState = {
  value: 'code',
}

export const SliderSlice = createSlice({
  name: 'slider',
  initialState,
  reducers: {
    setSliderValue: (state, { payload }: PayloadAction<SliderStateValue>) => {
      state.value = payload
    },
  }
})

export const { setSliderValue } = SliderSlice.actions

export default SliderSlice.reducer