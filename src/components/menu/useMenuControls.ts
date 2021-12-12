import { useState, useCallback } from 'react'

const useMenuControls = () => {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = useCallback(() => setIsOpen(false), [])
  const toggleMenu = useCallback(() => setIsOpen(!isOpen), [isOpen])
  return { isOpen, closeMenu, toggleMenu }
}

export default useMenuControls