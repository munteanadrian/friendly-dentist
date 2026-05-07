import { useState, useEffect } from 'react'

/**
 * Returns a scroll-based Y offset for parallax effects.
 * @param {number} speed - Multiplier (0.3 = slow, 1 = full scroll). Default 0.4
 */
export default function useParallax(speed = 0.4) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    if (window.innerWidth < 768) return

    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setOffset(window.scrollY * speed)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [speed])

  return offset
}
