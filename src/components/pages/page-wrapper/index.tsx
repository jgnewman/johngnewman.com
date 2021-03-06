import React, { FC } from 'react'
import cx from 'classnames'

import {
  pageWrapper,
  pageConstraint,
  oneCol,
  twoCol,
} from './styles.scss'

interface PageProps {
  alignItems?: 'start' | 'end' | 'center'
  columns: 1 | 2
}

const PageWrapper: FC<PageProps> = ({
  alignItems = 'start',
  columns,
  children,
}) => {
  return (
    <section className={pageWrapper}>
      <div
        className={cx(pageConstraint, {
          [oneCol]: columns === 1,
          [twoCol]: columns === 2,
        })}
        style={{ alignItems: alignItems }}
      >
        {children}
      </div>
    </section>
  )
}

export default PageWrapper