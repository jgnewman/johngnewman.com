import type { MenuLink } from '@/features/navigation/types'

import React, { memo, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { getFilteredMenuItems } from '@/features/navigation/selectors'
import GraphicMenuItem from '@/components/graphic-menu-item'

import { graphicMenu } from './styles.scss'

const useShineRef = (menuItems: MenuLink[]) => {
  const ref = useRef<HTMLUListElement>(null)
  useEffect(() => {
    const { current: ul } = ref
    const links = Array.from(ul?.querySelectorAll('a') ?? [])

    if (!links.length) return

    const recurser = () => {
      links.forEach((link, index) => {
        const delay = 100 * (index + 1)
        setTimeout(() => {
          link.focus()
          setTimeout(() => {
            link.blur()
            if (index === links.length - 1) {
              setTimeout(recurser, 10000)
            }
          }, 500)
        }, delay);
      })
    }

    setTimeout(recurser, 1000)
  }, [menuItems])
  return ref
}

const GraphicMenu = memo(() => {
  const menuItems = useSelector(getFilteredMenuItems)
  const shineRef = useShineRef(menuItems)

  return (
    <ul className={graphicMenu} ref={shineRef}>
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