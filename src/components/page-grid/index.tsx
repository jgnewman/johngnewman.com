import type { PageGridProps } from './types'
import React, { memo } from 'react'

import useGridPosition from './useGridPosition'
import useRedirect from './useRedirect'
import { pageGrid, pageGridWrapper } from './styles.scss'

const TRANSITION_SPEED = 500

const PageGrid = memo(({ grid }: PageGridProps) => {
  const {
    nodes,
    rows,
    columns,
    currentNode,
    shouldRedirect,
  } = useGridPosition(grid)

  useRedirect(shouldRedirect)

  const { x, y } = currentNode

  // TODO: Handle header and footer with dynamic links
  return (
    <div className={pageGridWrapper}>
      <div className={pageGrid} style={{
        width: `calc(100vw * ${columns})`,
        height: `calc(100vh * ${rows})`,
        transform: `translate(${x}, ${y})`,
        transition: `all ${TRANSITION_SPEED / 1000}s ease`,
      }}>
        {nodes}
      </div>
    </div>
  )
})

PageGrid.displayName = 'PageGrid'

export default PageGrid