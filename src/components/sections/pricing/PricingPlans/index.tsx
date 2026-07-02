import { Bike, Check, ChevronLeft, ChevronRight, Clock3, Dumbbell, Lock, Smartphone } from 'lucide-react'
import styles from './index.module.css'

const plans = [
  {
    title: 'Basic plan',
    price: '5000',
    period: '/ MONTH',
    icon: Lock,
    subtextIcon: Clock3,
    subtext: 'One introductory personal training.',
    features: [
      'Access to gym equipment.',
      'Use of cardio machines.',
      'Access to free weights strength.',
      'Locker room and shower facilities.',
      'Personal fitness assessment.',
      'Basic group fitness classes yoga.',
    ],
  },
  {
    title: 'Intermediate plan',
    price: '10000',
    period: '/ 3 MONTH',
    icon: Bike,
    subtextIcon: Smartphone,
    subtext: 'Access to fitness tracking app.',
    features: [
      'Full access to gym equipment.',
      'Cardio machines and strength.',
      'Unlimited group fitness classes.',
      'Locker room and shower facilities.',
      'Personalized fitness assessment.',
      'Nutrition guidance and meal plan.',
    ],
  },
  {
    title: 'Advanced plan',
    price: '20000',
    period: '/ 12 MONTH',
    icon: Dumbbell,
    subtextIcon: Smartphone,
    subtext: 'Fitness tracking device detailed.',
    features: [
      '24/7 full access to all gym equipment.',
      'Unlimited group fitness classes.',
      'Locker room, shower, and premium.',
      'Personalized fitness assessment.',
      'Weekly personal training sessions.',
      'Advanced strength and conditioning.',
    ],
  },
]

export default function PricingPlans() {
  return (
    <section className={styles['pricing-plans-section']} aria-labelledby="pricing-plans-title">
      <div className={`${styles['carousel-nav-btn']} ${styles.left}`} aria-hidden="true">
        <ChevronLeft size={58} strokeWidth={1.7} />
      </div>

      <div className={`${styles['carousel-nav-btn']} ${styles.right}`} aria-hidden="true">
        <ChevronRight size={58} strokeWidth={1.7} />
      </div>

      <div className={styles['pricing-plans-header']}>
        <div className={styles['plan-options-pill']}>PLAN OPTIONS</div>
        <h2 id="pricing-plans-title" className={styles['pricing-plans-title']}>
          Get started with our flexible
          <br />
          membership plans
        </h2>
        <div className={styles['pricing-plans-subtitle']}>
          <span className={styles['pricing-title-orange']}>@ Budegere</span>{' '}
          <span className={styles['pricing-title-white']}>cross</span>
        </div>
        <p className={styles['pricing-plans-desc']}>
          Phoenix Fitness offers flexible gym membership and personal training plans across our
          branches, designed to match your fitness goals, training needs, and lifestyle.
        </p>
      </div>

      <div className={styles['plan-toggle-container']} aria-label="Plan category">
        <button type="button" className={styles['toggle-left']}>Membership Plans</button>
        {/* <span className={styles['toggle-separator-v']} aria-hidden="true" /> */}
        <button type="button" className={styles['toggle-right']}>Personal training plans</button>
      </div>

      <div className={styles['pricing-cards-container']}>
        {plans.map((plan, index) => {
          const Icon = plan.icon
          const SubtextIcon = plan.subtextIcon
          const isActive = index === 1

          return (
            <article key={plan.title} className={`${styles['pricing-card']} ${isActive ? styles['pricing-card-active'] : ''}`}>
              <div className={styles['card-icon']}>
                <Icon size={32} strokeWidth={2} />
              </div>

              <div className={styles['card-title']}>{plan.title}</div>
              <div className={styles['card-subtitle']}>Join our fitness community today.</div>
              <div className={styles['card-price']}>
                <span aria-hidden="true">&#8377;</span>{plan.price}
                <span className={styles['price-period']}>{plan.period}</span>
              </div>

              <button type="button" className={styles['card-btn']}>
                CHOOSE THIS PLAN
                <span className={styles['card-btn-icon']} aria-hidden="true">
                  <Lock size={12} strokeWidth={2.4} />
                </span>
              </button>

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
      </div>

      <div className={styles['carousel-dots']} aria-hidden="true">
        <span className={`${styles['carousel-dot']} ${styles.active}`} />
        <span className={styles['carousel-dot']} />
        <span className={styles['carousel-dot']} />
        <span className={styles['carousel-dot']} />
        <span className={styles['carousel-dot']} />
      </div>
    </section>
  )
}
