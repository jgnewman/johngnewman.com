import type { SliderStateValue } from '@/features/slider/types'

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import useTimer from '@/hooks/useTimer'
import { getSliderValue } from '@/features/slider/selectors'

import Code from './code'
import Paint from './paint'
import Myths from './myths'
import Music from './music'

const slideMap: Record<SliderStateValue, React.ExoticComponent> = {
  code: Code,
  paint: Paint,
  myths: Myths,
  music: Music,
}

const useCurrentSlide = () => {
  const sliderValue = useSelector(getSliderValue)
  const { setTimer, clearTimer } = useTimer()
  const [isUpdating, setIsUpdating] = useState(false)
  const [localValue, setLocalValue] = useState<SliderStateValue>(sliderValue)

  useEffect(() => {
    setIsUpdating(true)

    setTimer(() => {
      setIsUpdating(false)
      setLocalValue(sliderValue)
    }, 300)

    return () => {
      clearTimer()
    }
  }, [clearTimer, setTimer, sliderValue])

  return { CurrentSlide: slideMap[localValue], isUpdating }
}

export default useCurrentSlide