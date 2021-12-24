import React, { memo } from 'react'

import PageWrapper from '@/components/pages/page-wrapper'
import SlideNav from '@/components/slide-nav'
import Slides from '@/components/slides'

import { slideContainer, slideNavWrapper, slidesWrapper } from './styles.scss'

const ThingsILove = memo(() => {
  return (
    <PageWrapper columns={1}>
      <div>
        <h1>Things I love</h1>
        <div className={slideContainer}>
          <div className={slideNavWrapper}>
            <SlideNav />
          </div>
          <div className={slidesWrapper}>
            <Slides />
          </div>
        </div>
      </div>
    </PageWrapper>
  )
})

export default ThingsILove