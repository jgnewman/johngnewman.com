import React, { memo } from 'react'

import { spinner } from './styles.scss'

const Spinner = memo(() => {
  return (
    <div className={spinner} />
  )
})

export default Spinner