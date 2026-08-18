'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export { gsap, ScrollTrigger }

export const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'
export const FULL_MOTION_QUERY = '(prefers-reduced-motion: no-preference)'

// Durations (seconds) — mirrors the Phoenix Fitness motion spec
export const DURATION = {
  small: 0.45,
  card: 0.6,
  section: 0.8,
  hero: 1,
  button: 0.2,
} as const

export const EASE = {
  out: 'power3.out',
  inOut: 'power2.inOut',
  soft: 'power1.out',
} as const

export const STAGGER = {
  tight: 0.08,
  normal: 0.12,
  loose: 0.15,
} as const

/** Default ScrollTrigger start position — fires once ~15-20% of the element is visible */
export const DEFAULT_START = 'top 85%'
