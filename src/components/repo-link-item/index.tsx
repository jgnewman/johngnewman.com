import React, { memo } from 'react'
import cx from 'classnames'

import {
  repoLinkWrapper,
  repoLink,
  repoIconWrapper,
  repoIcon,
  stretch,
  repoTitle,
  repoDescrip,
} from './styles.scss'

interface RepoLinkItemProps {
  title: string
  href: string
  description: string
  iconUrl: string
  stretchIcon?: boolean
}

const RepoLinkItem = memo(({
  title,
  href,
  description,
  iconUrl,
  stretchIcon = false,
}: RepoLinkItemProps) => {
  return (
    <li className={repoLinkWrapper}>
      <a className={repoLink} href={href}>
        <span className={repoIconWrapper}>
          <img className={cx(repoIcon, { [stretch]: stretchIcon })} src={iconUrl} aria-hidden />
        </span>
        <span className={repoTitle}>{title}</span>
        <span className={repoDescrip}>{description}</span>
      </a>
    </li>
  )
})

export default RepoLinkItem