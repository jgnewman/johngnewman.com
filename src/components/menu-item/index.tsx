import React, { memo } from 'react'
import { useLocation, Link } from 'react-router-dom'
import cx from 'classnames'

import {
  menuItem,
  menuLink,
  active,
} from './styles.scss'

export interface MenuItemProps {
  title: string
  route: string
  onClick: () => void
}

const MenuItem = memo(({ title, route, onClick }: MenuItemProps) => {
  const { pathname } = useLocation()

  return (
    <li className={menuItem}>
      <Link
        className={cx(menuLink, { [active]: pathname === route })}
        to={route}
        onClick={onClick}
      >
          {title}
      </Link>
    </li>
  )
})

export default MenuItem