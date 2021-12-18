import type { RootState } from '@/redux/store'
import { createSelector } from '@reduxjs/toolkit'

export const getNavigation = (state: RootState) => state.navigation

export const getMenuItems = createSelector(
  getNavigation,
  ({ menuItems }) => menuItems,
)

export const getFilteredMenuItems = createSelector(
  getMenuItems,
  (menuItems) => menuItems.filter((item) => item.route !== '/')
)