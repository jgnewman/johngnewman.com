import type { Grid, GridRow, GridNode } from './types'
import React, { FC, useMemo } from 'react'

const UIWrapper: FC = ({ children }) => {
  return <>{ children }</>
}

const useGridChildren = (grid: Grid) => {
  return useMemo(() => {
    const children: JSX.Element[] = []
    grid.forEach((row: GridRow) => row.forEach(({ route, ui }: GridNode) => {
      children.push(<UIWrapper key={route}>{ui}</UIWrapper>)
    }))
    return children
  }, [grid])
}

export default useGridChildren