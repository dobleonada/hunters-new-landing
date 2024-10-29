import { useState, useEffect } from 'react'

export type ScreenSize = 'mobile' | 'tablet' | 'desktop'

export const useScreenSize = (): ScreenSize => {
  const [screenSize, setScreenSize] = useState('')

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window
      if (innerWidth < 640) {
        setScreenSize('mobile')
      } else if (innerWidth < 768) {
        setScreenSize('tablet')
      } else {
        setScreenSize('desktop')
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return screenSize as ScreenSize
}
