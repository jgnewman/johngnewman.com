import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { getFilteredMenuItems } from '@/features/navigation/selectors'
import GraphicMenuItem from '@/components/graphic-menu-item'

import { graphicMenu } from './styles.scss'

const GraphicMenu = memo(() => {
  const menuItems = useSelector(getFilteredMenuItems)

  return (
    <ul className={graphicMenu}>
      {menuItems.map(({ title, route, navImg }) => (
        navImg && (
          <GraphicMenuItem
            key={route}
            title={title}
            route={route}
            navImg={navImg}
          />
        )
      ))}
    </ul>
  )
})

export default GraphicMenu