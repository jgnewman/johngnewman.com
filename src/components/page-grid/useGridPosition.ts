import {
  Grid,
  GridData,
  GridPosition,
  GridNode,
  GridRow,
} from './types'

import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

const useGridPosition = (grid: Grid): GridData => {
  const { pathname } = useLocation()

  const result = useMemo(() => {
    let currentPos: GridPosition | null = null
    let shouldRedirect = false

    grid.forEach((row: GridRow, rowIndex) => {
      row.forEach(({ route }: GridNode, nodeIndex) => {
        if (route === pathname) {
          currentPos = {
            x: !nodeIndex ? '0' : `-${nodeIndex * 100}vw`,
            y: !rowIndex ? '0' : `-${rowIndex * 100}vh`,
          }
        }
      })
    })

    if (!currentPos) {
      shouldRedirect = true
      currentPos = {
        x: '0',
        y: '0',
      }
    }

    return {
      ...currentPos,
      shouldRedirect,
    }
  }, [grid, pathname])

  return result
}

export default useGridPosition