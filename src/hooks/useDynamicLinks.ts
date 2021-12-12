import type { MenuLink } from '@/features/navigation/types'

import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getMenuItems } from '@/features/navigation/selectors'

export interface DynamicLinks {
  next: MenuLink | null
  prev: MenuLink | null
}

const useDynamicLinks = () => {
  const { pathname } = useLocation()
  const menuItems = useSelector(getMenuItems)

  return useMemo(() => {
    let currentMenuIndex = -1

    menuItems.some((link, index) => {
      if (link.route === pathname) {
        currentMenuIndex = index
        return true
      }
    })

  return {
    next: menuItems[currentMenuIndex + 1] ?? null,
    prev: menuItems[currentMenuIndex - 1] ?? null,
  }
  }, [pathname, menuItems])
}

export default useDynamicLinks