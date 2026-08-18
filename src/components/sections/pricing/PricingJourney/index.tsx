'use client'

import { useEffect, useState } from 'react'
import { MapPin, Phone, Play } from 'lucide-react'
import Reveal from '@/components/animation/Reveal'
import Stagger from '@/components/animation/Stagger'
import { STAGGER } from '@/lib/animation/gsap'
import styles from './index.module.css'

const journeySlides = [
  {
    branchPrimary: 'Budegere',
    branchSecondary: 'cross',
    sqft: '6,500 SQ.FT',
    image: '/images/pricing/budegere.png',
    phone: '+91 9880 5372 97',
    address: ['@SIRI HUB, First floor,', 'Near Coldman, Bommenahalli Village,', 'Bengaluru - 560049'],
  },
  {
    branchPrimary: 'Kannamangala',
    branchSecondary: '',
    sqft: '7,500 SQ.FT',
    image: '/images/pricing/kannamangala.png',
    phone: '+91 9880 5372 97',
    address: ['Phoenix Fitness Kannamangala, SBR', 'Gokulam, 6th Floor, Kannamangala Main Road,', 'Whitefield, Bengaluru - 560067'],
  },
  {
    branchPrimary: 'Nallurhalli',
    branchSecondary: '',
    sqft: '5,000 SQ.FT',
    image: '/images/pricing/nallurhalli.png',
    phone: '+91 9880 5372 97',
    address: ['Phoenix Fitness Nallurhalli,', 'First floor, near ITPL Main Road,', 'Bengaluru - 560066'],
  },
  {
    branchPrimary: 'Yello Living',
    branchSecondary: '(ITPL)',
    sqft: '4,500 SQ.FT',
    image: '/images/pricing/yello_living.png',
    phone: '+91 9880 5372 97',
    address: ['Phoenix Fitness Yello Living, ITPL,', 'Whitefield Main Road,', 'Bengaluru - 560066'],
  },
  {
    branchPrimary: 'Hope Farm',
    branchSecondary: '',
    sqft: '4,500 SQ.FT',
    image: '/images/pricing/hope_farm.png',
    phone: '+91 9880 5372 97',
    address: ['Phoenix Fitness Hope Farm,', 'Whitefield Main Road, Hope Farm Junction,', 'Bengaluru - 560066'],
  },
]

type PricingJourneyProps = {
  onSelectBranch?: (index: number) => void
  isPaused?: boolean
}

export default function PricingJourney({ onSelectBranch, isPaused = false }: PricingJourneyProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const slide = journeySlides[activeIndex]

  const scrollToPlans = () => {
    if (onSelectBranch) {
      onSelectBranch(activeIndex)
    }

    const target = document.getElementById('pricing-options')
    if (!target) return

    const navbarOffset = 112
    const top = target.getBoundingClientRect().top + window.scrollY - navbarOffset
    window.scrollTo({ top, behavior: 'smooth' })
  }

  const goToContact = () => {
    window.location.href = '/contact#contact-trial-form'
  }

  useEffect(() => {
    if (isPaused) return

    const timer = window.setInterval(() => {
      setActiveIndex((current) => {
        const nextIndex = (current + 1) % journeySlides.length
        if (onSelectBranch) {
          onSelectBranch(nextIndex)
        }
        return nextIndex
      })
    }, 18000)

    return () => window.clearInterval(timer)
  }, [isPaused, onSelectBranch])

  return (
    <section className={styles['journey-section']} aria-label="Choose Your Journey branch slider">
      <div className={styles['journey-slider']}>
        <article
          className={styles['journey-slide']}
          key={slide.branchPrimary}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className={styles['journey-content-wrapper']}>
            <div className={styles['journey-header']}>
              <Reveal as="h2" className={styles['journey-title']} variant="fade-up">
                <span className={styles['pricing-title-orange']}>Choose Your</span>{' '}
                <span className={styles['pricing-title-white']}>Journey</span>
              </Reveal>
            </div>

            <Stagger as="div" className={styles['journey-left']} variant="fade-up" staggerAmount={STAGGER.normal}>
              <div className={styles['journey-branchBlock']}>
                <div className={styles['journey-branchRow']}>
                  <div className={styles['journey-branchTextBlock']}>
                    <h3 className={styles['journey-branch']}>
                      <span className={styles['journey-branchPrimary']}>{slide.branchPrimary}</span>
                      {slide.branchSecondary ? (
                        <span className={styles['journey-branchSecondary']}>{slide.branchSecondary}</span>
                      ) : null}
                    </h3>

                    <div className={styles['journey-sqft']}>{slide.sqft}</div>
                  </div>

                  <button
                    type="button"
                    className={styles['branch-arrow']}
                    aria-label="Scroll to pricing plans"
                    onClick={scrollToPlans}
                  >
                    <img src="/pricing/right_arrow.png" alt="" />
                  </button>
                </div>
              </div>

              <p className={styles['journey-desc']}>
                Phoenix Fitness offers flexible gym membership and personal training plans across our
                branches, designed to match your fitness goals, training needs, and lifestyle.
              </p>
            </Stagger>

            <Stagger as="div" className={styles['journey-bottom-bar']} variant="fade-up" delay={0.15} staggerAmount={STAGGER.normal}>
              <div className={styles['journey-actions']}>
                <div className={styles['journeyButtonGroup']}>
                  <button type="button" className={`${styles['journeyPillButton']} ${styles['journeyPillButtonPrimary']}`} onClick={scrollToPlans}>
                    Explore
                  </button>
                  <button type="button" className={`${styles['journeyIconButton']} ${styles['journeyIconButtonPrimary']}`} aria-label="Explore" onClick={scrollToPlans}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="6.5" y1="17.5" x2="17.5" y2="6.5" />
                      <polyline points="8.5 6.5 17.5 6.5 17.5 15.5" />
                    </svg>
                  </button>
                </div>

                <div className={styles['journeyButtonGroup']}>
                  <button type="button" className={`${styles['journeyPillButton']} ${styles['journeyPillButtonSecondary']}`} onClick={goToContact}>
                    Contact us
                  </button>
                  <button type="button" className={`${styles['journeyIconButton']} ${styles['journeyIconButtonSecondary']}`} aria-label="Contact us" onClick={goToContact}>
                    <Play size={16} fill="currentColor" strokeWidth={0} />
                  </button>
                </div>
              </div>

              <div className={styles['journey-indicators']} aria-label="Journey carousel indicators">
                {journeySlides.map((item, dotIndex) => (
                  <button
                    type="button"
                    className={`${styles['indicator']} ${dotIndex === activeIndex ? styles['active'] : ''}`}
                    key={`${item.branchPrimary}-dot`}
                    aria-label={`Open ${item.branchPrimary} slide`}
                    aria-current={dotIndex === activeIndex ? 'true' : undefined}
                    onClick={() => {
                      setActiveIndex(dotIndex)
                      if (onSelectBranch) {
                        onSelectBranch(dotIndex)
                      }
                    }}
                  />
                ))}
              </div>

              <div className={styles['journey-contact-info']}>
                <div className={styles['info-row']}>
                  <span className={styles['info-icon']} aria-hidden="true">
                    <Phone size={22} strokeWidth={2.6} />
                  </span>
                  <a href="tel:+919880537297" className={styles['journey-contactValue']}>{slide.phone}</a>
                </div>

                <div className={styles['info-row']}>
                  <span className={styles['info-icon']} aria-hidden="true">
                    <MapPin size={22} strokeWidth={2.6} />
                  </span>
                  <span className={styles['journey-contactAddress']}>
                    {slide.address.map((line) => (
                      <span key={line}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </span>
                </div>
              </div>
            </Stagger>
          </div>
        </article>
      </div>
    </section>
  )
}







