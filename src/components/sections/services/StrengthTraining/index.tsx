import Reveal from '@/components/animation/Reveal'
import Stagger from '@/components/animation/Stagger'
import { DURATION, STAGGER } from '@/lib/animation/gsap'
import styles from './index.module.css'
export default function StrengthTraining() {
  return (
        <section id="strength" className={`${styles["section"]} ${styles["strength-section"]}`}>
          {/* Background watermark logo */}
          <div className={styles["strength-bg-watermark"]} aria-hidden="true">
            <img src="/services/strength_training_bglogo.png" alt="" />
          </div>

          <div className={styles["container"]}>
            <div className={`${styles["section-grid"]} ${styles["strength-grid-container"]}`}>

              {/* Left Column: Info, Description, Custom Tags */}
              <Stagger as="div" className={`${styles["section-info"]} ${styles["strength-info"]}`} variant="fade-up" staggerAmount={STAGGER.normal}>
                <span className={styles["strength-tag-label"]}>OUR SERVICES</span>
                <h2 className={`${styles["section-title"]} ${styles["strength-title"]}`}>
                  <span className={styles["highlight"]}>STRENGTH</span> TRAINING
                </h2>
                <p className={`${styles["section-desc"]} ${styles["strength-desc"]}`}>
                  Build muscle strength, improve stamina, and enhance overall physical performance with guided resistance training.
                </p>
                <div className={styles["strength-tag-capsules"]}>
                  <div className={styles["capsule-tag"]}>
                    <span className={styles["orange-word"]}>MUSCLE</span> <span className={styles["white-word"]}>BUILDING</span>
                  </div>
                  <div className={styles["capsule-tag"]}>
                    <span className={styles["orange-word"]}>STRENGTH</span> <span className={styles["white-word"]}>IMPROVEMENT</span>
                  </div>
                  <div className={styles["capsule-tag"]}>
                    <span className={styles["orange-word"]}>STAMINA</span>
                  </div>
                  <div className={styles["capsule-tag"]}>
                    <span className={styles["orange-word"]}>BODY</span> <span className={styles["white-word"]}>TONING</span>
                  </div>
                  <div className={styles["capsule-tag"]}>
                    <span className={styles["orange-word"]}>PERFORMANCE</span> <span className={styles["white-word"]}>TRAINING.</span>
                  </div>
                </div>
              </Stagger>

              {/* Right Column: 2x2 Media Grid with Overlaid Quote Banner */}
              <Reveal as="div" className={styles["strength-media-wrapper"]} variant="fade-right" duration={DURATION.section} distance={48}>
                <Stagger as="div" className={styles["strength-2x2-grid"]} variant="scale" staggerAmount={STAGGER.tight}>
                  <div className={styles["strength-grid-box"]}>
                    <img src="/images/about/mission1.png" alt="Athlete training" />
                  </div>
                  <div className={styles["strength-grid-box"]}>
                    <img src="/images/strength_training.png" alt="Barbell lift" />
                  </div>
                  <div className={styles["strength-grid-box"]}>
                    <img src="/images/about/mission4.png" alt="Coach feedback" />
                  </div>
                  <div className={styles["strength-grid-box"]}>
                    <img src="/services/strength_training3.png" alt="Barbell lift" />
                  </div>
                </Stagger>

                {/* Overlaid Quote Block on the bottom-right quadrant */}
                <div className={styles["strength-quote-overlay"]}>
                  <span className={styles["quote-overlay-label"]}>ITS ABOUT</span>
                  <h3 className={styles["quote-overlay-title"]}>
                    <span className={styles["highlight"]}>RESILIENCE,</span> <span className={styles["white-word"]}>DISCIPLINE, &</span>
                    <br />
                    <span className={styles["highlight"]}>SELF-BELIEF.</span>
                  </h3>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
  )
}
