import { useCallback, useState } from 'react'


const useOnload = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  const onload = useCallback(() => {
    setIsLoaded(true)
  }, [])

  return { isLoaded, onload }
}

export default useOnload