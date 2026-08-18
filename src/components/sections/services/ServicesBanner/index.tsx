import Reveal from '@/components/animation/Reveal'
import Stagger from '@/components/animation/Stagger'
import { DURATION } from '@/lib/animation/gsap'
import styles from './index.module.css'

export default function ServicesBanner() {
  return (
    <section
      className={`${styles['hero']} ${styles['services-hero']}`}
      style={{ backgroundImage: "url('/services/hero_banner_image.png')" }}
    >
      <div className={styles['hero-bg-logo']} aria-hidden="true">
        <img src="/services/banner_logo.png" alt="" />
      </div>

      <div className={styles['hero-overlay']}></div>

      <div className={`${styles['container']} ${styles['hero-container-inner']}`}>
        <Stagger as="div" className={styles['hero-content']} variant="fade-up" duration={DURATION.hero} staggerAmount={0.12}>
          <span className={styles['hero-tag']}>Our Services</span>
          <h1 className={styles['hero-title']}>
            <span className={styles['highlight']}>Train Smarter.</span>
            <br />
            <span className={styles['white-text']}>Get Stronger.</span>
            <br />
            <span className={styles['highlight']}>Transform Better.</span>
          </h1>
          <p className={styles['hero-description']}>
            Just simple, effective workouts tailored to your goals &mdash; guided by real people who care.
          </p>
          <div className={styles['hero-buttons']}>
            <div className={styles['hero-button-pair']}>
              <a href="#strength" className={styles['hero-btn-explore']}>
                Explore
              </a>
              <a href="#strength" className={styles['btn-circle-arrow']} aria-label="Explore services">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            </div>
            <div className={styles['hero-button-pair']}>
              <a href="https://www.youtube.com/@phoenixfitnessbangalore" target="_blank" rel="noopener noreferrer" className={styles['hero-btn-video']}>
                WATCH VIDEO
              </a>
              <a href="https://www.youtube.com/@phoenixfitnessbangalore" target="_blank" rel="noopener noreferrer" className={styles['btn-circle-play']} aria-label="Watch video">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <polygon points="6,3 20,12 6,21" />
                </svg>
              </a>
            </div>
          </div>
        </Stagger>

        <Reveal as="div" className={styles['hero-features-overlay']} variant="fade-up" delay={0.5}>
          <div className={styles['hero-feature-item']}>
            <div className={styles['feature-text-group']}>
              <span className={styles['feature-title']}>AFFORDABLE TRAINING</span>
              <span className={styles['feature-subtitle']}>&amp; EATING PLANS</span>
            </div>
          </div>
          {/* <div className={styles['hero-feature-item']}>
            <span className={styles['feature-icon']}>
              <img src="/services/repeat.png" alt="" aria-hidden="true" />
            </span>
            <div className={styles['feature-text-group']}>
              <span className={styles['feature-title']}>14 DAY FREE RETURN</span>
              <span className={styles['feature-subtitle']}>ON PURCHASE</span>
            </div>
          </div> */}
        </Reveal>
      </div>
    </section>
  )
}

