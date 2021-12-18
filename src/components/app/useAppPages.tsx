import type { Grid } from '@/components/page-grid/types'
import React, { useMemo } from 'react'

import navWhoIAm from '@/images/nav-who-i-am.jpg'
import navWhereIveBeen from '@/images/nav-where-ive-been.jpg'
import navWhatIDo from '@/images/nav-what-i-do.jpg'
import navThingsILove from '@/images/nav-things-i-love.jpg'
import navGetInTouch from '@/images/nav-get-in-touch.jpg'

import PageWrapper from '@/components/pages/page-wrapper'

import Home from '@/components/pages/home'
import WhoIAm from '@/components/pages/who-i-am'
import WhereIveBeen from '@/components/pages/where-ive-been'

const useAppPages = (): Grid => {
  return useMemo(() => {
    return [
      [
        {
          route: '/',
          title: 'Home',
          navImg: null,
          ui: <Home />,
        },
        {
          route: '/who-i-am',
          title: 'Who I am',
          navImg: navWhoIAm,
          ui: <WhoIAm />,
        },
        {
          route: '/where-ive-been',
          title: "Where I've been",
          navImg: navWhereIveBeen,
          ui: <WhereIveBeen />,
        },
      ],
      [
        {
          route: '/what-i-do',
          title: 'What I do',
          navImg: navWhatIDo,
          ui: <PageWrapper color="green" columns={1} />,
        },
        {
          route: '/things-i-love',
          title: 'Things I love',
          navImg: navThingsILove,
          ui: <PageWrapper color="blue" columns={1} />,
        },
        {
          route: '/get-in-touch',
          title: 'Get in touch',
          navImg: navGetInTouch,
          ui: <PageWrapper color="purple" columns={1} />,
        },
      ],
    ]
  }, [])
}

export default useAppPages