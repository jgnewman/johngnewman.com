import type { SetPositionPayload, NavigationState } from './types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const initialState: NavigationState = {
  x: 0,
  y: 0,
}

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    // TODO: This is currently not in use at all.
    // Just use this slice as a model for the next slice we make.
    setPosition: (state, action: PayloadAction<SetPositionPayload>) => {
      state.x = action.payload.x
      state.y = action.payload.y
    },
  }
})

export const { setPosition } = navigationSlice.actions

export default navigationSlice.reducer