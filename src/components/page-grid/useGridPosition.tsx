import {
  Grid,
  GridPosition,
  MapNode,
  GridNode,
  GridRow,
} from './types'

import React, { FC, useMemo } from 'react'
import { useLocation } from 'react-router-dom'

const UIWrapper: FC = ({ children }) => {
  return <>{ children }</>
}

const useGridPosition = (grid: Grid): GridPosition => {
  const { pathname } = useLocation()

  const result = useMemo(() => {
    const nodes: JSX.Element[] = []
    const rows = grid.length
    let columns = 0
    let currentNode: MapNode | null = null
    let nextNode: GridNode | null = null
    let prevNode: GridNode | null = null
    let shouldRedirect = false

    grid.forEach((row: GridRow, rowIndex) => {
      columns = Math.max(row.length, columns)

      row.forEach(({ ui, route, title }: GridNode, nodeIndex) => {
        const x = !nodeIndex ? '0' : `-${nodeIndex * 100}vw`
        const y = !rowIndex ? '0' : `-${rowIndex * 100}vh`
        const node = { ui, route, title, x, y }

        nodes.push(<UIWrapper key={route}>{ui}</UIWrapper>)

        if (route === pathname) {
          const curRow = grid[rowIndex]
          const nextRow = grid[rowIndex + 1] || []
          const prevRow = grid[rowIndex - 1] || []

          currentNode = node
          nextNode = curRow[nodeIndex + 1] ?? nextRow[0] ?? null
          prevNode = curRow[nodeIndex - 1] ?? prevRow[prevRow.length - 1] ?? null
        }
      })
    })

    if (!currentNode) {
      shouldRedirect = true
      currentNode = {
        ui: <></>,
        route: '',
        title: '',
        x: '0',
        y: '0',
      }
    }

    return {
      nodes,
      rows,
      columns,
      currentNode,
      nextNode,
      prevNode,
      shouldRedirect,
    }
  }, [grid, pathname])

  return result
}

export default useGridPosition