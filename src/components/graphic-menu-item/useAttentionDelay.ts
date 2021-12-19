import { useEffect, useState } from 'react'

const ATTENTION_FREQUENCY = 10000

const useAttentionDelay = (menuIndex: number) => {
  const [hasAttention, setHasAttention] = useState(false)
  const initDelay = (menuIndex + 1) * 50

  useEffect(() => {

    const recurse = () => {
      setHasAttention(true)
      setTimeout(() => {
        setHasAttention(false)
        setTimeout(recurse, ATTENTION_FREQUENCY)
      }, 300)
    }

    setTimeout(recurse, initDelay)
  }, [initDelay])

  return hasAttention
}

export default useAttentionDelay