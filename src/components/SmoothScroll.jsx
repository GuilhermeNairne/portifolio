import { useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      autoRaf: true,
    })

    return () => lenis.destroy()
  }, [])

  return null
}
