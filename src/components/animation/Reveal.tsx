'use client'

import { useRef, type CSSProperties, type ElementType, type ReactNode } from 'react'
import { useGSAP } from '@gsap/react'
import {
  gsap,
  DURATION,
  EASE,
  DEFAULT_START,
  REDUCED_MOTION_QUERY,
  FULL_MOTION_QUERY,
} from '@/lib/animation/gsap'

type Variant = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'fade' | 'scale'

interface RevealProps {
  as?: ElementType
  variant?: Variant
  duration?: number
  delay?: number
  distance?: number
  className?: string
  style?: CSSProperties
  start?: string
  children: ReactNode
  /** Any other prop (aria-*, id, role, onClick, ...) is forwarded to the rendered tag. */
  [key: string]: unknown
}

const fromVarsFor = (variant: Variant, distance: number): gsap.TweenVars => {
  switch (variant) {
    case 'fade-up':
      return { y: distance, opacity: 0 }
    case 'fade-down':
      return { y: -distance, opacity: 0 }
    // "fade-left" = enters FROM the left (starts left of its resting spot, moves right)
    case 'fade-left':
      return { x: -distance, opacity: 0 }
    // "fade-right" = enters FROM the right (starts right of its resting spot, moves left)
    case 'fade-right':
      return { x: distance, opacity: 0 }
    case 'scale':
      return { opacity: 0, scale: 0.94 }
    case 'fade':
    default:
      return { opacity: 0 }
  }
}

/**
 * Purpose-built scroll reveal. Renders as the element itself (via `as`) rather than
 * wrapping it, so it can drop into existing grid/flex layouts without adding a DOM node.
 */
export default function Reveal({
  as: Tag = 'div',
  variant = 'fade-up',
  duration = DURATION.card,
  delay = 0,
  distance = 32,
  className,
  style,
  start = DEFAULT_START,
  children,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const el = ref.current
      if (!el) return

      const mm = gsap.matchMedia()

      mm.add(REDUCED_MOTION_QUERY, () => {
        gsap.set(el, { opacity: 0 })
        gsap.to(el, {
          opacity: 1,
          duration: DURATION.small,
          delay,
          clearProps: 'opacity',
          scrollTrigger: { trigger: el, start, toggleActions: 'play none none none', once: true },
        })
      })

      mm.add(FULL_MOTION_QUERY, () => {
        gsap.set(el, fromVarsFor(variant, distance))
        gsap.to(el, {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration,
          delay,
          ease: EASE.out,
          // GSAP writes transform/opacity as inline styles — clear them once settled so
          // existing CSS :hover transforms (lift, zoom, etc.) aren't shadowed afterwards.
          clearProps: 'opacity,transform',
          scrollTrigger: { trigger: el, start, toggleActions: 'play none none none', once: true },
        })
      })

      return () => mm.revert()
    },
    { scope: ref }
  )

  return (
    <Tag ref={ref} className={className} style={style} {...rest}>
      {children}
    </Tag>
  )
}
