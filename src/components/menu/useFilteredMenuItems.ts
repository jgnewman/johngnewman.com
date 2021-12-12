import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { getMenuItems } from '@/features/navigation/selectors'

const useFilteredMenuItems = () => {
  const menuItems = useSelector(getMenuItems)
  return useMemo(() => menuItems.filter((item) => item.route !== '/'), [menuItems])
}

export default useFilteredMenuItems