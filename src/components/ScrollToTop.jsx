import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Reset scroll to the very top on each route change
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    } catch {
      // Fallback for older browsers
      window.scrollTo(0, 0)
    }
  }, [pathname])

  return null
}
