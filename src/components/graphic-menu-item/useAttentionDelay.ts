import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import useTimer from '@/hooks/useTimer'

const ATTENTION_FREQUENCY = 10000
const LOADING_DELAY = 500

const useAttentionDelay = (menuIndex: number) => {
  const { getTimer, setTimer, clearTimer } = useTimer()
  const { pathname } = useLocation()
  const [hasAttention, setHasAttention] = useState(false)
  const initDelay = (menuIndex + 1) * 50

  useEffect(() => {
    if (pathname !== '/') {
      return clearTimer()
    }

    const recurse = () => {
      setHasAttention(true)
      setTimer(() => {
        setHasAttention(false)
        setTimer(recurse, ATTENTION_FREQUENCY)
      }, 300)
    }

    setTimer(recurse, initDelay + LOADING_DELAY)

  }, [initDelay, pathname, getTimer, setTimer, clearTimer])

  return hasAttention
}

export default useAttentionDelay