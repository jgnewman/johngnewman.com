import React from 'react'
import { Link } from 'react-router-dom'
import logoUrl from '@/images/logo.svg'
import Menu from '@/components/menu'

import { headerWrapper, logo, logoLink } from './styles.scss'

const Header = () => {
  return (
    <header className={headerWrapper}>
      <Link className={logoLink} to="/">
        <img className={logo} src={logoUrl} alt="John Newman" />
      </Link>
      <Menu />
    </header>
  )
}

export default Header