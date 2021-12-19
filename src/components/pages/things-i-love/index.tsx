import React, { memo } from 'react'

import PageWrapper from '@/components/pages/page-wrapper'

const ThingsILove = memo(() => {
  return (
    <PageWrapper columns={1}>
      <div>
        <h1>Things I love</h1>
      </div>
    </PageWrapper>
  )
})

export default ThingsILove