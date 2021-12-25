import React from 'react'
import { useSelector } from 'react-redux'
import cx from 'classnames'

import iconCode from '@/images/icon-code.svg'
import iconBrush from '@/images/icon-brush.svg'
import iconHammer from '@/images/icon-hammer.svg'
import iconMusic from '@/images/icon-music.svg'

import { getSliderValue } from '@/features/slider/selectors'
import useSliderControls from './useSliderControls'

import {
  slideNav,
  slideNavBtn,
  active,
  imgWrapper,
  textWrapper,
} from './styles.scss'

const SlideNav = () => {
  const sliderValue = useSelector(getSliderValue)

  const {
    setCode,
    setPaint,
    setMyths,
    setMusic,
  } = useSliderControls()

  return (
    <ul className={slideNav}>
      <li>
        <button
          className={cx(slideNavBtn, { [active]: sliderValue === 'code' })}
          onClick={setCode}
        >
          <span className={imgWrapper}><img src={iconCode} aria-hidden /></span>
          <span className={textWrapper}>Clean, simple code</span>
        </button>
      </li>
      <li>
        <button
          className={cx(slideNavBtn, { [active]: sliderValue === 'paint' })}
          onClick={setPaint}
        >
          <span className={imgWrapper}><img src={iconBrush} aria-hidden /></span>
          <span className={textWrapper}>Watercolor paintings</span>
        </button>
      </li>
      <li>
        <button
          className={cx(slideNavBtn, { [active]: sliderValue === 'myths' })}
          onClick={setMyths}
        >
          <span className={imgWrapper}><img src={iconHammer} aria-hidden /></span>
          <span className={textWrapper}>Northern mythology</span>
        </button>
      </li>
      <li>
        <button
          className={cx(slideNavBtn, { [active]: sliderValue === 'music' })}
          onClick={setMusic}
        >
          <span className={imgWrapper}><img src={iconMusic} aria-hidden /></span>
          <span className={textWrapper}>Music of all kinds</span>
        </button>
      </li>
    </ul>
  )
}

export default SlideNav