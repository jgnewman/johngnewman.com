import type { Grid, GridDimensions, GridRow } from './types'
import { useMemo } from 'react'

const useGridDimensions = (grid: Grid): GridDimensions => {
  return useMemo(() => {
    const rows = grid.length
    let columns = 0
    grid.forEach((row: GridRow) => columns = Math.max(row.length, columns))
    return { rows, columns}
  }, [grid])
}

export default useGridDimensions