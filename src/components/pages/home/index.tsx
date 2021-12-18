import React, { memo } from 'react'

import PageWrapper from '@/components/pages/page-wrapper'
import GraphicMenu from '@/components/graphic-menu'
import Highlight from '@/components/highlight'

import { intro } from './styles.scss'

const Home = memo(() => {
  return (
    <PageWrapper alignItems="center" columns={2}>
      <div>
        <GraphicMenu />
      </div>
      <div>
        <h1>Hi, I'm John.</h1>
        <p className={intro}>
          I'm a former <Highlight mode="primary">Creative Director</Highlight>
          &nbsp;turned <Highlight mode="secondary">Lead Frontend Engineer</Highlight>.
          I bring my experience in code, UX, design, and servant leadership to every
          project my team and I tackle together.
        </p>
      </div>
    </PageWrapper>
  )
})

export default Home