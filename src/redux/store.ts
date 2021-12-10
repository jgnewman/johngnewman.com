import {
  AnyAction,
  configureStore,
  Store,
  ThunkDispatch,
} from '@reduxjs/toolkit'

import navigation from '@/features/navigation'

export interface RootState {
  navigation: ReturnType<typeof navigation>
}

export type AppDispatch = ThunkDispatch<RootState, void, AnyAction>
export type AppGetState = Store<RootState>['getState']

export const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    navigation,
  }
})
