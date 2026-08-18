'use client'

import { useRef, type ElementType } from 'react'
import { useGSAP } from '@gsap/react'
import {
  gsap,
  DURATION,
  EASE,
  STAGGER,
  REDUCED_MOTION_QUERY,
  FULL_MOTION_QUERY,
} from '@/lib/animation/gsap'
import styles from './TextReveal.module.css'

interface TextRevealProps {
  text: string
  as?: ElementType
  className?: string
  mode?: 'word' | 'char'
  delay?: number
  start?: string
}

/**
 * Word/character mask reveal for plain-text headings. Only use for single-string
 * headings (no embedded <br /> or mixed markup) — those should use <Reveal variant="fade-up"> instead.
 * Screen readers get the clean full string via aria-label; the split spans are aria-hidden.
 */
export default function TextReveal({
  text,
  as: Tag = 'h2',
  className,
  mode = 'word',
  delay = 0,
  start = 'top 88%',
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null)
  const units = mode === 'char' ? Array.from(text) : text.split(' ')

  useGSAP(
    () => {
      const el = ref.current
      if (!el) return
      const targets = el.querySelectorAll(`.${styles.unitInner}`)
      if (!targets.length) return

      const mm = gsap.matchMedia()

      mm.add(REDUCED_MOTION_QUERY, () => {
        gsap.set(targets, { opacity: 0 })
        gsap.to(targets, {
          opacity: 1,
          duration: DURATION.small,
          delay,
          clearProps: 'opacity',
          scrollTrigger: { trigger: el, start, toggleActions: 'play none none none', once: true },
        })
      })

      mm.add(FULL_MOTION_QUERY, () => {
        gsap.set(targets, { yPercent: 110, opacity: 0 })
        gsap.to(targets, {
          yPercent: 0,
          opacity: 1,
          duration: mode === 'char' ? DURATION.small : DURATION.card,
          delay,
          ease: EASE.out,
          stagger: mode === 'char' ? STAGGER.tight / 2 : STAGGER.tight,
          clearProps: 'opacity,transform',
          scrollTrigger: { trigger: el, start, toggleActions: 'play none none none', once: true },
        })
      })

      return () => mm.revert()
    },
    { scope: ref, dependencies: [text, mode] }
  )

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      <span aria-hidden="true">
        {units.map((unit, i) => (
          <span className={styles.unit} key={i}>
            <span className={styles.unitInner}>{unit === ' ' ? ' ' : unit}</span>
            {mode === 'word' && i < units.length - 1 ? ' ' : ''}
          </span>
        ))}
      </span>
    </Tag>
  )
}
