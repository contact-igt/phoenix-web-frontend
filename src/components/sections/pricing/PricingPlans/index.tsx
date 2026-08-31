'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'
import { Bike, CalendarDays, Check, ChevronLeft, ChevronRight, Clock3, Dumbbell, Lock, Smartphone } from 'lucide-react'
import Reveal from '@/components/animation/Reveal'
import Stagger from '@/components/animation/Stagger'
import { STAGGER } from '@/lib/animation/gsap'
import styles from './index.module.css'

type PlanCategory = 'membership' | 'personal'

type PricingPlan = {
  title: string
  price: string
  period: string
  icon?: LucideIcon
  imageIcon?: string
  subtextIcon: LucideIcon
  subtext: string
  features: string[]
}

type BranchPlan = {
  name: string
  suffix?: string
  membership: PricingPlan[]
  personal: PricingPlan[]
}

const membershipFeatures = {
  monthly: [
    'Flexible monthly gym access.',
    'Use of cardio and strength machines.',
    'Locker room and shower facilities.',
    'No long-term commitment required.',
  ],
  threeMonths: [
    '3 months gym membership access.',
    'Cardio, strength, and free weight access.',
    'Locker room and shower facilities.',
    '15 days freezing option included.',
  ],
  sixMonths: [
    '6 months standard membership access.',
    'Cardio, strength, and free weight access.',
    'Locker room and shower facilities.',
    '30 days freezing option included.',
  ],
  twelveMonths: [
    '12 months committed membership access.',
    'Cardio, strength, and free weight access.',
    'Locker room and shower facilities.',
    '45 days freezing option included.',
  ],
}

const createMembershipPlans = (prices: [string, string, string, string]): PricingPlan[] => [
  {
    title: 'Monthly plan',
    price: prices[0],
    period: '/ MONTH',
    imageIcon: '/images/pricing/monthly-plan.png',
    subtextIcon: Clock3,
    subtext: 'Casual membership plan.',
    features: membershipFeatures.monthly,
  },
  {
    title: '3 months plan',
    price: prices[1],
    period: '/ 3 MONTHS',
    icon: CalendarDays,
    subtextIcon: Smartphone,
    subtext: 'Normal membership plan.',
    features: membershipFeatures.threeMonths,
  },
  {
    title: '6 months plan',
    price: prices[2],
    period: '/ 6 MONTHS',
    imageIcon: '/images/pricing/6month-plan.png',
    subtextIcon: Smartphone,
    subtext: 'Standard membership plan.',
    features: membershipFeatures.sixMonths,
  },
  {
    title: '12 months plan',
    price: prices[3],
    period: '/ 12 MONTHS',
    imageIcon: '/images/pricing/12month-plan.png',
    subtextIcon: Clock3,
    subtext: 'Committed membership plan.',
    features: membershipFeatures.twelveMonths,
  },
]

const createPersonalPlans = (prices: [string, string, string]): PricingPlan[] => [
  {
    title: 'Foundation',
    price: prices[0],
    period: '/ LEVEL 1',
    icon: Lock,
    subtextIcon: Clock3,
    subtext: 'Build your training base.',
    features: [
      'Fitness assessment.',
      'Workout programming.',
      'Form correction.',
      'Basic progress tracking.',
    ],
  },
  {
    title: 'Performance',
    price: prices[1],
    period: '/ LEVEL 2',
    icon: Bike,
    subtextIcon: Smartphone,
    subtext: 'Progress with expert guidance.',
    features: [
      'Advanced programming.',
      'Nutrition guidance.',
      'Weekly progress reviews.',
      'Accountability support.',
    ],
  },
  {
    title: 'Elite',
    price: prices[2],
    period: '/ LEVEL 3',
    icon: Dumbbell,
    subtextIcon: Smartphone,
    subtext: 'Complete transformation support.',
    features: [
      'Complete transformation plan.',
      'Personalized nutrition.',
      'Priority trainer support.',
      'Detailed progress analytics.',
    ],
  },
]

const branchPlans: BranchPlan[] = [
  {
    name: 'Budegere',
    suffix: 'cross',
    membership: createMembershipPlans(['5,000', '10,000', '15,000', '22,000']),
    personal: createPersonalPlans(['15,000', '18,000', '21,000']),
  },
  {
    name: 'Kannamangala',
    membership: createMembershipPlans(['5,000', '10,000', '15,000', '22,000']),
    personal: createPersonalPlans(['15,000', '18,000', '21,000']),
  },
  {
    name: 'Nallurhalli',
    membership: createMembershipPlans(['4,000', '12,000', '14,000', '16,000']),
    personal: createPersonalPlans(['8,000', '10,000', '12,000']),
  },
  {
    name: 'Yello Living',
    suffix: '(ITPL)',
    membership: createMembershipPlans(['3,000', '10,000', '12,000', '15,000']),
    personal: createPersonalPlans(['8,000', '10,000', '12,000']),
  },
  {
    name: 'Hope Farm',
    membership: createMembershipPlans(['2,500', '6,000', '8,000', '10,000']),
    personal: createPersonalPlans(['6,000', '8,000', '10,000']),
  },
]

type PricingPlansProps = {
  selectedBranchIndex?: number
  onSelectBranch?: (index: number) => void
  onHoverChange?: (isHovered: boolean) => void
}

export default function PricingPlans({ selectedBranchIndex, onSelectBranch, onHoverChange }: PricingPlansProps) {
  const [activeBranchIndex, setActiveBranchIndex] = useState(selectedBranchIndex ?? 0)
  const [activeCategory, setActiveCategory] = useState<PlanCategory>('membership')

  useEffect(() => {
    if (selectedBranchIndex !== undefined) {
      setActiveBranchIndex(selectedBranchIndex)
    }
  }, [selectedBranchIndex])

  const handleBranchSelect = (index: number) => {
    setActiveBranchIndex(index)
    if (onSelectBranch) {
      onSelectBranch(index)
    }
  }

  const handleBranchStep = (direction: -1 | 1) => {
    handleBranchSelect((activeBranchIndex + direction + branchPlans.length) % branchPlans.length)
  }

  const activeBranch = branchPlans[activeBranchIndex]
  const plans = activeCategory === 'membership' ? activeBranch.membership : activeBranch.personal

  return (
    <section
      id="pricing-options"
      className={styles['pricing-plans-section']}
      aria-labelledby="pricing-plans-title"
      onMouseEnter={() => onHoverChange?.(true)}
      onMouseLeave={() => onHoverChange?.(false)}
    >
      <Stagger as="div" className={styles['pricing-plans-header']} variant="fade-up" staggerAmount={STAGGER.normal}>
        <div className={styles['plan-options-pill']}>PLAN OPTIONS</div>
        <h2 id="pricing-plans-title" className={styles['pricing-plans-title']}>
          Get started with our flexible
          <br />
          membership plans
        </h2>
        <div className={styles['pricing-plans-subtitle']}>
          <span className={styles['pricing-title-orange']}>@ {activeBranch.name}</span>{' '}
          {activeBranch.suffix ? <span className={styles['pricing-title-white']}>{activeBranch.suffix}</span> : null}
        </div>
        <p className={styles['pricing-plans-desc']}>
          Phoenix Fitness offers flexible gym membership and personal training plans across our
          branches, designed to match your fitness goals, training needs, and lifestyle.
        </p>
      </Stagger>

      <Reveal as="div" className={styles['plan-toggle-container']} variant="fade-up" delay={0.15} aria-label="Plan category">
        <button
          type="button"
          className={`${styles['toggle-left']} ${activeCategory === 'membership' ? styles['toggle-active'] : styles['toggle-inactive']}`}
          aria-pressed={activeCategory === 'membership'}
          onClick={() => setActiveCategory('membership')}
        >
          Membership Plans
        </button>
        <button
          type="button"
          className={`${styles['toggle-right']} ${activeCategory === 'personal' ? styles['toggle-active'] : styles['toggle-inactive']}`}
          aria-pressed={activeCategory === 'personal'}
          onClick={() => setActiveCategory('personal')}
        >
          Personal training plans
        </button>
      </Reveal>

      <Stagger
        as="div"
        className={`${styles['pricing-cards-container']} ${styles[activeCategory === 'membership' ? 'membership-grid' : 'personal-grid']}`}
        variant="scale"
        staggerAmount={STAGGER.tight}
      >
        {plans.map((plan, index) => {
          const Icon = plan.icon
          const SubtextIcon = plan.subtextIcon
          const isActive = activeCategory === 'membership' ? index === 2 : index === 1

          return (
            <article key={`${activeBranch.name}-${activeCategory}-${plan.title}`} className={`${styles['pricing-card']} ${isActive ? styles['pricing-card-active'] : ''}`}>
              <div className={styles['card-icon']}>
                {plan.imageIcon ? (
                  <img className={styles['card-icon-image']} src={plan.imageIcon} alt="" aria-hidden="true" />
                ) : Icon ? (
                  <Icon size={32} strokeWidth={2} />
                ) : null}
              </div>

              <div className={styles['card-title']}>{plan.title}</div>
              <div className={styles['card-subtitle']}>Join our fitness community today.</div>
              <div className={styles['card-price']}>
                <span aria-hidden="true">&#8377;</span>{plan.price}
                <span className={styles['price-period']}>{plan.period}</span>
              </div>

              <Link href="/contact#contact-trial-form" className={styles['card-btn']}>
                CHOOSE THIS PLAN
                <span className={styles['card-btn-icon']} aria-hidden="true">
                  <Lock size={12} strokeWidth={2.4} />
                </span>
              </Link>

              <div className={styles['card-subtext']}>
                <SubtextIcon size={14} strokeWidth={2} />
                {plan.subtext}
              </div>

              <ul className={styles['card-features']}>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span className={styles['feature-check']} aria-hidden="true">
                      <Check size={12} strokeWidth={2.4} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          )
        })}
      </Stagger>

      <button
        type="button"
        className={`${styles['carousel-nav-btn']} ${styles.left}`}
        aria-label="Show previous branch pricing"
        onClick={() => handleBranchStep(-1)}
      >
        <ChevronLeft size={44} strokeWidth={1.8} />
      </button>
      <button
        type="button"
        className={`${styles['carousel-nav-btn']} ${styles.right}`}
        aria-label="Show next branch pricing"
        onClick={() => handleBranchStep(1)}
      >
        <ChevronRight size={44} strokeWidth={1.8} />
      </button>

      <div className={styles['carousel-dots']} aria-label="Branch selector">
        {branchPlans.map((branch, index) => (
          <button
            key={branch.name}
            type="button"
            className={`${styles['carousel-dot']} ${index === activeBranchIndex ? styles.active : ''}`}
            aria-label={`Show ${branch.name} pricing`}
            aria-pressed={index === activeBranchIndex}
            onClick={() => handleBranchSelect(index)}
          />
        ))}
      </div>
    </section>
  )
}
