import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import cx from 'classnames'
import useAttentionDelay from './useAttentionDelay'

import {
  listItem,
  listItemLink,
  listItemLabel,
  listItemLabelText,
  listItemImg,
  attention,
} from './styles.scss'

interface GraphicMenuItemProps {
  title: string
  route: string
  navImg: string
  menuIndex: number
}

const GraphicMenuItem = memo(({
  title,
  route,
  navImg,
  menuIndex,
}: GraphicMenuItemProps) => {
  const hasAttention = useAttentionDelay(menuIndex)

  return (
    <li className={listItem}>
      <Link className={cx(listItemLink, { [attention]: hasAttention })} to={route}>
        <label className={listItemLabel}>
          <span className={listItemLabelText}>{title}</span>
        </label>
        <div className={listItemImg} style={{ backgroundImage: `url(${navImg})` }}/>
      </Link>
    </li>
  )
})

export default GraphicMenuItem