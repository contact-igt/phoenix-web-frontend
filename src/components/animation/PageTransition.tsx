'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { gsap } from '@/lib/animation/gsap'

export default function PageTransition({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Opacity-only: this wrapper contains the fixed-position navbar, and any non-"none"
    // transform on an ancestor becomes the containing block for position:fixed descendants
    // (per the CSS spec), which would detach the navbar from the viewport. No transform, ever.
    gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: 'power2.out', clearProps: 'opacity' })
  }, [pathname])

  return <div ref={ref}>{children}</div>
}
