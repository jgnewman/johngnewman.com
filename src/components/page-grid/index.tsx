import type { PageGridProps } from './types'
import React, { memo } from 'react'

import useBuildMenuFromGrid from './useBuildMenuFromGrid'
import useGridChildren from './useGridChildren'
import useGridDimensions from './useGridDimensions'
import useGridPosition from './useGridPosition'
import useRedirect from './useRedirect'

import { contentHeight } from '@/globals.scss'
import { pageGrid, pageGridWrapper } from './styles.scss'

const TRANSITION_SPEED = 500

const PageGrid = memo(({ grid }: PageGridProps) => {
  const uiChildren = useGridChildren(grid)
  const { rows, columns } = useGridDimensions(grid)
  const { x, y, shouldRedirect } = useGridPosition(grid)

  useBuildMenuFromGrid(grid)
  useRedirect(shouldRedirect)

  return (
    <div className={pageGridWrapper}>
      <div className={pageGrid} style={{
        width: `calc(100vw * ${columns})`,
        height: `calc(${contentHeight} * ${rows})`,
        transform: `translate(${x}, ${y})`,
        transition: `all ${TRANSITION_SPEED / 1000}s ease`,
      }}>
        {uiChildren}
      </div>
    </div>
  )
})

export default PageGrid