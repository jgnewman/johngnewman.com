import React from 'react'
import MenuButton from '@/components/menu-button'

import { menuWrapper } from './styles.scss'

const Menu = () => {
  return (
    <div className={menuWrapper}>
      <MenuButton />
    </div>
  )
}

export default Menu