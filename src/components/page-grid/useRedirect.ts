import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const useRedirect = (shouldRedirect: boolean) => {
  const navigate = useNavigate()

  // TODO: Remove this once we have actual navigation built
  // eslint-disable-next-line
  // @ts-ignore
  window.nav = navigate

  useEffect(() => {
    if (shouldRedirect) {
      navigate('/')
    }
  }, [shouldRedirect, navigate])
}

export default useRedirect