import { MenuLink } from '@/features/navigation/types'
import { Grid, GridRow, GridNode } from './types'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMenuItems } from '@/features/navigation'
import { getMenuItems } from '@/features/navigation/selectors'

const useBuildMenuFromGrid = (grid: Grid) => {
  const dispatch = useDispatch()
  const menuItems = useSelector(getMenuItems)
  const hasMenu = !!menuItems.length

  useEffect(() => {
    if (!hasMenu) {
      const newMenuItems: MenuLink[] = []
      grid.forEach((row: GridRow) => row.forEach(({ route, title }: GridNode) => {
        newMenuItems.push({ route, title })
      }))
      dispatch(setMenuItems(newMenuItems))
    }
  }, [dispatch, grid, hasMenu])
}

export default useBuildMenuFromGrid