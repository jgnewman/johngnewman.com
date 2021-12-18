import React, { FC } from 'react'
import cx from 'classnames'

import { highlight, primary, secondary } from './styles.scss'

interface HighlightProps {
  mode: 'primary' | 'secondary'
}

const Highlight: FC<HighlightProps> = ({ children, mode }) => {
  return (
    <span className={cx(highlight, {
      [primary]: mode === 'primary',
      [secondary]: mode === 'secondary',
    })}>
      {children}
    </span>
  )
}

export default Highlight