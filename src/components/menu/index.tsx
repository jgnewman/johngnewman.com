import React from 'react'
import MenuIcon from '@/components/menu-icon'

import { menuButton } from './styles.scss'

const Menu = () => {
  return (
    <button className={menuButton}>
      <MenuIcon />
    </button>
  )
}

export default Menu