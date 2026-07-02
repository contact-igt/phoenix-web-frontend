import styles from './index.module.css'
export default function FunctionalTraining() {
  return (
        <section id="functional" className={`${styles["section"]} ${styles["functional-section"]}`}>
          <div className={styles["container"]}>
            <div className={styles["functional-grid-container"]}>

              {/* Left: Info + Tags */}
              <div className={styles["functional-info"]}>
                <span className={styles["strength-tag-label"]}>OUR SERVICES</span>

                <div className={styles["functional-title-row"]}>
                  <h2 className={`${styles["section-title"]} ${styles["functional-title"]}`}>
                    <span className={styles["highlight"]}>FUNCTIONAL</span> TRAINING
                  </h2>
                  <a href="#" className={styles["cardio-watch-btn"]}>
                    <span className={styles["btn-text-pill"]}>WATCH VIDEO</span>
                    <span className={styles["btn-circle-play"]}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="6,3 20,12 6,21" />
                      </svg>
                    </span>
                  </a>
                </div>

                <p className={styles["section-desc"]}>
                  Improve flexibility, posture, balance, and mobility with workouts designed for everyday strength.
                </p>

                <div className={styles["strength-tag-capsules"]}>
                  <div className={styles["capsule-tag"]}>
                    <span className={styles["orange-word"]}>IMPROVES</span>
                    <span className={styles["white-word"]}>BODY MOVEMENT</span>
                  </div>
                  <div className={styles["capsule-tag"]}>
                    <span className={styles["orange-word"]}>ENHANCES</span>
                    <span className={styles["white-word"]}>FLEXIBILITY & MOBILITY</span>
                  </div>
                  <div className={styles["capsule-tag"]}>
                    <span className={styles["orange-word"]}>STRENGTHENS</span>
                    <span className={styles["white-word"]}>THE CORE</span>
                  </div>
                  <div className={styles["capsule-tag"]}>
                    <span className={styles["orange-word"]}>SUPPORTS</span>
                    <span className={styles["white-word"]}>BETTER POSTURE</span>
                  </div>
                  <div className={styles["capsule-tag"]}>
                    <span className={styles["orange-word"]}>REDUCES</span>
                    <span className={styles["white-word"]}>STIFFNESS AND IMPROVES CONTROL</span>
                  </div>
                </div>
              </div>

              {/* Right: three stacked preview thumbnails beside the text */}
              <div className={styles["functional-preview-thumbs"]}>
                <div className={styles["functional-thumb"]}>
                  <img src="/images/functional/preview1.png" alt="Functional training preview 1" />
                </div>
                <div className={styles["functional-thumb"]}>
                  <img src="/images/functional/preview1.png" alt="Functional training preview 2" />
                </div>
              </div>

              {/* Bottom: full-width image collage */}
              <div className={styles["functional-image-grid"]}>
                <div className={styles["functional-main"]}>
                  <img src="/images/functional/main.png" alt="Woman doing dumbbell row" />
                </div>
                <div className={`${styles["functional-sub"]} ${styles["functional-sub-1"]}`}>
                  <img src="/images/functional/sub1.png" alt="Training conversation" />
                </div>
                <div className={`${styles["functional-sub"]} ${styles["functional-sub-2"]}`}>
                  <img src="/images/functional/sub2.png" alt="Boxing partners" />
                </div>
                <div className={`${styles["functional-sub"]} ${styles["functional-sub-3"]} ${styles["functional-sub-active"]}`}>
                  <img src="/images/functional/sub3.png" alt="Athlete portrait" />
                </div>
                <div className={styles["functional-panoramic"]}>
                  <img src="/images/functional/panoramic.png" alt="Gym interior wide shot" />
                </div>
              </div>

            </div>
          </div>
        </section>
  )
}
