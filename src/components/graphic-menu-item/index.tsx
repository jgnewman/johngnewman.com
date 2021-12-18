import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import {
  listItem,
  listItemLink,
  listItemLabel,
  listItemLabelText,
  listItemImg,
} from './styles.scss'

interface GraphicMenuItemProps {
  title: string
  route: string
  navImg: string
}

const GraphicMenuItem = memo(({ title, route, navImg }: GraphicMenuItemProps) => {
  return (
    <li className={listItem}>
      <Link className={listItemLink} to={route}>
        <label className={listItemLabel}>
          <span className={listItemLabelText}>{title}</span>
        </label>
        <div className={listItemImg} style={{ backgroundImage: `url(${navImg})` }}/>
      </Link>
    </li>
  )
})

export default GraphicMenuItem