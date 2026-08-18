'use client'

import { useRef, type ElementType, type ReactNode } from 'react'
import { useGSAP } from '@gsap/react'
import {
  gsap,
  DURATION,
  EASE,
  STAGGER,
  DEFAULT_START,
  REDUCED_MOTION_QUERY,
  FULL_MOTION_QUERY,
} from '@/lib/animation/gsap'

type Variant = 'fade-up' | 'fade' | 'scale'

interface StaggerProps {
  as?: ElementType
  variant?: Variant
  duration?: number
  delay?: number
  distance?: number
  staggerAmount?: number
  className?: string
  start?: string
  children: ReactNode
  /** Any other prop (aria-*, id, role, onClick, ...) is forwarded to the rendered tag. */
  [key: string]: unknown
}

/**
 * Purpose-built stagger reveal for repeated groups (cards, logos, columns, list items).
 * Renders as the container itself and animates its direct children — no extra DOM nodes,
 * so it drops straight into existing grid/flex layouts.
 */
export default function Stagger({
  as: Tag = 'div',
  variant = 'fade-up',
  duration = DURATION.card,
  delay = 0,
  distance = 28,
  staggerAmount = STAGGER.normal,
  className,
  start = DEFAULT_START,
  children,
  ...rest
}: StaggerProps) {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const container = ref.current
      if (!container) return
      const items = gsap.utils.toArray<HTMLElement>(container.children)
      if (!items.length) return

      const mm = gsap.matchMedia()

      mm.add(REDUCED_MOTION_QUERY, () => {
        gsap.set(items, { opacity: 0 })
        gsap.to(items, {
          opacity: 1,
          duration: DURATION.small,
          delay,
          stagger: staggerAmount / 2,
          clearProps: 'opacity',
          scrollTrigger: { trigger: container, start, toggleActions: 'play none none none', once: true },
        })
      })

      mm.add(FULL_MOTION_QUERY, () => {
        const fromVars: gsap.TweenVars =
          variant === 'scale'
            ? { opacity: 0, scale: 0.94 }
            : variant === 'fade'
              ? { opacity: 0 }
              : { opacity: 0, y: distance }

        gsap.set(items, fromVars)
        gsap.to(items, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration,
          delay,
          ease: EASE.out,
          stagger: staggerAmount,
          // Clear inline transform/opacity once settled so existing CSS :hover effects
          // (lift, image zoom, etc.) on these children aren't shadowed afterwards.
          clearProps: 'opacity,transform',
          scrollTrigger: { trigger: container, start, toggleActions: 'play none none none', once: true },
        })
      })

      return () => mm.revert()
    },
    { scope: ref }
  )

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  )
}
