import type { Grid } from '@/components/page-grid/types'
import React, { useMemo } from 'react'

import navWhoIAm from '@/images/nav-who-i-am.jpg'
import navWhereIveBeen from '@/images/nav-where-ive-been.jpg'
import navWhatIDo from '@/images/nav-what-i-do.jpg'
import navThingsILove from '@/images/nav-things-i-love.jpg'
import navGetInTouch from '@/images/nav-get-in-touch.jpg'

import Home from '@/components/pages/home'
import WhoIAm from '@/components/pages/who-i-am'
import WhereIveBeen from '@/components/pages/where-ive-been'
import WhatIDo from '@/components/pages/what-i-do'
import ThingsILove from '@/components/pages/things-i-love'
import GetInTouch from '@/components/pages/get-in-touch'

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
          ui: <WhatIDo />,
        },
        {
          route: '/things-i-love',
          title: 'Things I love',
          navImg: navThingsILove,
          ui: <ThingsILove />,
        },
        {
          route: '/get-in-touch',
          title: 'Get in touch',
          navImg: navGetInTouch,
          ui: <GetInTouch />,
        },
      ],
    ]
  }, [])
}

export default useAppPages