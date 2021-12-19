import { useCallback, useRef } from 'react'

const useTimer = () => {
  const timeoutRef = useRef<NodeJS.Timeout>()

  const getTimer = useCallback(() => {
    return timeoutRef.current
  }, [])

  const setTimer = useCallback((callback: () => void, delay: number) => {
    timeoutRef.current = setTimeout(callback, delay)
    return timeoutRef.current
  }, [])

  const clearTimer = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current)
  }, [])

  return { getTimer, setTimer, clearTimer }
}

export default useTimer