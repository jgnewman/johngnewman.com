import { RefObject, useCallback, useEffect } from 'react'

interface UseDocumentClickHandlerArgs {
  closeMenu: () => void,
  menuRef: RefObject<HTMLDivElement>
}

const useDocumentClickHandler = ({ closeMenu, menuRef }: UseDocumentClickHandlerArgs) => {

  const handleClick = useCallback((evt: MouseEvent) => {
    const { current: menu } = menuRef
    const path = evt.composedPath()

    if (menu && !path.includes(menu)) {
      closeMenu()
    }
  }, [closeMenu, menuRef])

  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [handleClick])
}

export default useDocumentClickHandler