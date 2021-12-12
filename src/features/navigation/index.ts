import type { SetMenuPayload, NavigationState } from './types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const initialState: NavigationState = {
  menuItems: [],
}

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setMenuItems: (state, { payload }: PayloadAction<SetMenuPayload>) => {
      state.menuItems = payload
    },
  }
})

export const { setMenuItems } = navigationSlice.actions

export default navigationSlice.reducer