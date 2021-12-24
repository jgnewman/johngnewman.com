import React, { memo } from 'react'
import cx from 'classnames'

import useCurrentSlide from './useCurrentSlide'
import { slides, updating } from './styles.scss'

const Slides = memo(() => {
  const { CurrentSlide, isUpdating } = useCurrentSlide()

  return (
    <div className={cx(slides, { [updating]: isUpdating })}>
      <CurrentSlide />
    </div>
  )
})

export default Slides