import { MapPin, Phone, Play } from 'lucide-react'
import styles from './index.module.css'

export default function PricingJourney() {
  return (
    <section className={styles['journey-section']}>
      <div className={styles['journey-content-wrapper']}>
        <div className={styles['journey-header']}>
          <h2 className={styles['journey-title']}>
            <span className={styles['pricing-title-orange']}>Choose Your</span>{' '}
            <span className={styles['pricing-title-white']}>Journey</span>
          </h2>
        </div>

        <div className={styles['journey-left']}>
          <div className={styles['journey-branchBlock']}>
            <div className={styles['journey-branchRow']}>
              <div className={styles['journey-branchTextBlock']}>
                <h3 className={styles['journey-branch']}>
                  <span className={styles['journey-branchPrimary']}>Budegere</span>
                  <span className={styles['journey-branchSecondary']}>cross</span>
                </h3>

                <div className={styles['journey-sqft']}>6,500 SQ.FT</div>
              </div>

              <span className={styles['branch-arrow']} aria-hidden="true">
                <svg
                  width="54"
                  height="54"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="6.5" y1="17.5" x2="17.5" y2="6.5" />
                  <polyline points="8.5 6.5 17.5 6.5 17.5 15.5" />
                </svg>
              </span>
            </div>
          </div>

          <p className={styles['journey-desc']}>
            Phoenix Fitness offers flexible gym membership and personal training plans across our
            branches, designed to match your fitness goals, training needs, and lifestyle.
          </p>
        </div>

        <div className={styles['journey-bottom-bar']}>
          <div className={styles['journey-actions']}>
            <div className={styles['journeyButtonGroup']}>
              <button type="button" className={`${styles['journeyPillButton']} ${styles['journeyPillButtonPrimary']}`}>
                Explore
              </button>
              <button type="button" className={`${styles['journeyIconButton']} ${styles['journeyIconButtonPrimary']}`} aria-label="Explore">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="6.5" y1="17.5" x2="17.5" y2="6.5" />
                  <polyline points="8.5 6.5 17.5 6.5 17.5 15.5" />
                </svg>
              </button>
            </div>

            <div className={styles['journeyButtonGroup']}>
              <button type="button" className={`${styles['journeyPillButton']} ${styles['journeyPillButtonSecondary']}`}>
                Contact us
              </button>
              <button type="button" className={`${styles['journeyIconButton']} ${styles['journeyIconButtonSecondary']}`} aria-label="Contact us">
                <Play size={16} fill="currentColor" strokeWidth={0} />
              </button>
            </div>
          </div>

          <div className={styles['journey-indicators']} aria-label="Journey carousel indicators">
            <span className={`${styles['indicator']} ${styles['active']}`}></span>
            <span className={styles['indicator']}></span>
            <span className={styles['indicator']}></span>
            <span className={styles['indicator']}></span>
            <span className={styles['indicator']}></span>
          </div>

          <div className={styles['journey-contact-info']}>
            <div className={styles['info-row']}>
              <span className={styles['info-icon']} aria-hidden="true">
                <Phone size={22} strokeWidth={2.6} />
              </span>
              <span className={styles['journey-contactValue']}>+91 9880 5372 97</span>
            </div>

            <div className={styles['info-row']}>
              <span className={styles['info-icon']} aria-hidden="true">
                <MapPin size={22} strokeWidth={2.6} />
              </span>
              <span className={styles['journey-contactAddress']}>
                @SIRI HUB, First floor,
                <br />
                Near Coldman, Bommenahalli Village,
                <br />
                Bengaluru - 560049
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
