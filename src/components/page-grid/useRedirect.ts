import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const useRedirect = (shouldRedirect: boolean) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (shouldRedirect) {
      navigate('/')
    }
  }, [shouldRedirect, navigate])
}

export default useRedirect