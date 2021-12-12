import React, { memo, useRef } from 'react'
import cx from 'classnames'

import triangleUrl from '@/images/menu-triangle.svg'
import MenuButton from '@/components/menu-button'
import MenuItem from '@/components/menu-item'

import useDocumentClickHandler from './useDocumentClickHandler'
import useFilteredMenuItems from './useFilteredMenuItems'
import useMenuControls from './useMenuControls'

import {
  menuWrapper,
  menuDropdownWrapper,
  opened,
  menuTriangle,
  menuLinkList,
} from './styles.scss'

const Menu = memo(() => {
  const menuRef = useRef<HTMLDivElement>(null)
  const menuItems = useFilteredMenuItems()
  const { isOpen, closeMenu, toggleMenu } = useMenuControls()

  useDocumentClickHandler({ closeMenu, menuRef })

  return (
    <div ref={menuRef} className={menuWrapper}>
      <MenuButton onClick={toggleMenu} />
      <div
        className={cx(menuDropdownWrapper, { [opened]: isOpen })}
        role="navigation"
        aria-label="main"
      >
        <img className={menuTriangle} aria-hidden src={triangleUrl} />
        <ul className={menuLinkList}>
          {menuItems.map(({ title, route }) => (
            <MenuItem
              key={route}
              title={title}
              route={route}
              onClick={closeMenu}
            />
          ))}
        </ul>
      </div>
    </div>
  )
})

export default Menu