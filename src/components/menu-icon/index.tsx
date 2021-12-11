import React from 'react'

import { iconColor } from '@/globals.scss'
import { menuIcon } from './styles.scss'

const MenuIcon = () => {
  return (
    <svg className={menuIcon} width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M0 3H2V25H0V3Z" fill={iconColor} />
      <path fillRule="evenodd" clipRule="evenodd" d="M6 0H8V22H6V0Z" fill={iconColor} />
      <path fillRule="evenodd" clipRule="evenodd" d="M12 4H14V26H12V4Z" fill={iconColor} />
    </svg>
  )
}

export default MenuIcon