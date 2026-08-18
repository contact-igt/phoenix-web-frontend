'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import { gsap } from '@/lib/animation/gsap'

interface AccordionPanelProps {
  isOpen: boolean
  id?: string
  className?: string
  children: ReactNode
  [key: string]: unknown
}

/**
 * Smooth open/close height animation for accordions (FAQ panels, etc).
 * Uses GSAP because CSS transitions can't animate to/from an unknown "auto" height.
 */
export default function AccordionPanel({ isOpen, id, className, children, ...rest }: AccordionPanelProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isFirstRender = useRef(true)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const duration = reduced ? 0.01 : 0.4

    if (isFirstRender.current) {
      isFirstRender.current = false
      gsap.set(el, { height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 })
      return
    }

    gsap.killTweensOf(el)

    if (isOpen) {
      gsap.set(el, { height: 0 })
      gsap.to(el, { height: 'auto', duration, ease: 'power2.inOut' })
      gsap.to(el, { opacity: 1, duration: duration * 0.8, delay: duration * 0.15 })
    } else {
      gsap.to(el, { height: 0, duration, ease: 'power2.inOut' })
      gsap.to(el, { opacity: 0, duration: duration * 0.6 })
    }
  }, [isOpen])

  return (
    <div ref={ref} id={id} className={className} style={{ height: 0, overflow: 'hidden', opacity: 0 }} {...rest}>
      {children}
    </div>
  )
}
