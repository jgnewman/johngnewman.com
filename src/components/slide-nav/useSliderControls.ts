import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { setSliderValue } from '@/features/slider'

const useSliderControls = () => {
  const dispatch = useDispatch()
  return {
    setCode: useCallback(() => dispatch(setSliderValue('code')), [dispatch]),
    setPaint: useCallback(() => dispatch(setSliderValue('paint')), [dispatch]),
    setMyths: useCallback(() => dispatch(setSliderValue('myths')), [dispatch]),
    setMusic: useCallback(() => dispatch(setSliderValue('music')), [dispatch]),
  }
}

export default useSliderControls