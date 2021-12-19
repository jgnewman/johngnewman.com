import type { RootState } from '@/redux/store'
import { createSelector } from '@reduxjs/toolkit'

export const getSlider = (state: RootState) => state.slider

export const getSliderValue = createSelector(
  getSlider,
  ({ value }) => value,
)