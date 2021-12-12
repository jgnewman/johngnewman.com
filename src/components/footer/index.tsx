import React, { memo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import cx from 'classnames'

import navArrowUrl from '@/images/nav-arrow.svg'
import useDynamicLinks from '@/hooks/useDynamicLinks'

import {
  footerWrapper,
  copyright,
  linkWrapper,
  prevLinkWrapper,
  nextLinkWrapper,
  navLink,
  prevLink,
  nextLink,
} from './styles.scss'

const Footer = memo(() => {
  const { prev, next } = useDynamicLinks()
  const { pathname } = useLocation()

  return (
    <footer className={footerWrapper}>

      <section className={cx(linkWrapper, prevLinkWrapper)}>
        {prev && (
          <Link className={cx(navLink, prevLink)} to={prev.route}>
            <img alt="arrow" src={navArrowUrl} />
            <span>{prev.title}</span>
          </Link>
        )}
      </section>

      <section className={copyright}>
        Copyright © {new Date().getFullYear()} John Newman
      </section>

      <section className={cx(linkWrapper, nextLinkWrapper)}>
        {next && pathname !== '/' && (
          <Link className={cx(navLink, nextLink)} to={next.route}>
            <span>{next.title}</span>
            <img alt="arrow" src={navArrowUrl} />
          </Link>
        )}
      </section>

    </footer>
  )
})

export default Footer