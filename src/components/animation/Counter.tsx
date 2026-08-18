'use client'

import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import {
  gsap,
  DURATION,
  EASE,
  DEFAULT_START,
  REDUCED_MOTION_QUERY,
  FULL_MOTION_QUERY,
} from '@/lib/animation/gsap'

interface ParsedStat {
  target: number
  suffix: string
  decimals: number
  useCommas: boolean
}

function parseStatValue(raw: string): ParsedStat {
  const match = raw.match(/^([\d,.]+)(.*)$/)
  if (!match) return { target: 0, suffix: raw, decimals: 0, useCommas: false }

  const [, numPart, suffix] = match
  const useCommas = numPart.includes(',')
  const decimalMatch = numPart.replace(/,/g, '').match(/\.(\d+)/)
  const decimals = decimalMatch ? decimalMatch[1].length : 0
  const target = parseFloat(numPart.replace(/,/g, ''))

  return { target, suffix, decimals, useCommas }
}

function formatStatValue(value: number, { decimals, useCommas, suffix }: ParsedStat): string {
  const body = useCommas
    ? value.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
    : value.toFixed(decimals)
  return `${body}${suffix}`
}

interface CounterProps {
  value: string
  className?: string
  duration?: number
}

/**
 * Animates a stat string (e.g. "2,400", "95%", "1.2M") from 0 up to its real value,
 * preserving the original suffix, decimal precision, and comma grouping.
 */
export default function Counter({ value, className, duration = DURATION.section }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const parsed = parseStatValue(value)
  const [display, setDisplay] = useState(() => formatStatValue(0, parsed))

  useGSAP(
    () => {
      const el = ref.current
      if (!el) return

      const mm = gsap.matchMedia()

      mm.add(REDUCED_MOTION_QUERY, () => {
        setDisplay(value)
      })

      mm.add(FULL_MOTION_QUERY, () => {
        const counter = { val: 0 }
        gsap.to(counter, {
          val: parsed.target,
          duration,
          ease: EASE.out,
          scrollTrigger: { trigger: el, start: DEFAULT_START, toggleActions: 'play none none none', once: true },
          onUpdate: () => setDisplay(formatStatValue(counter.val, parsed)),
        })
      })

      return () => mm.revert()
    },
    { scope: ref, dependencies: [value] }
  )

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
