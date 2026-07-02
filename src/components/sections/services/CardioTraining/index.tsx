import styles from './index.module.css'
export default function CardioTraining() {
  return (
        <section id="cardio" className={`${styles["section"]} ${styles["cardio-section"]}`}>
          <div className={styles["container"]}>
            <div className={styles["cardio-grid-container"]}>

              {/* LEFT: info + 2×2 grid stacked */}
              <div className={styles["cardio-left"]}>
                <div className={styles["cardio-info"]}>
                  <span className={styles["strength-tag-label"]}>OUR SERVICES</span>

                  <div className={styles["cardio-title-row"]}>
                    <h2 className={`${styles["section-title"]} ${styles["cardio-title"]}`}>
                      <span className={styles["highlight"]}>CARDIO</span> TRAINING
                    </h2>
                    <a href="#" className={styles["cardio-watch-btn"]}>
                      <span className={styles["btn-text-pill"]}>WATCH VIDEO</span>
                      <span className={styles["btn-circle-play"]}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="6,3 20,12 6,21" />
                        </svg>
                      </span>
                    </a>
                  </div>

                  <p className={styles["section-desc"]}>
                    Burn calories, improve endurance, and support heart health
                    with structured cardio programs.
                  </p>

                  <div className={styles["strength-tag-capsules"]}>
                    <div className={styles["capsule-tag"]}>
                      <span className={styles["orange-word"]}>FAT</span>
                      <span className={styles["white-word"]}>LOSS</span>
                    </div>
                    <div className={styles["capsule-tag"]}>
                      <span className={styles["orange-word"]}>STAMINA</span>
                      <span className={styles["white-word"]}>BUILDING</span>
                    </div>
                    <div className={styles["capsule-tag"]}>
                      <span className={styles["orange-word"]}>HEART</span>
                      <span className={styles["white-word"]}>HEALTH</span>
                    </div>
                    <div className={styles["capsule-tag"]}>
                      <span className={styles["orange-word"]}>CALORIE</span>
                      <span className={styles["white-word"]}>BURNING</span>
                    </div>
                    <div className={styles["capsule-tag"]}>
                      <span className={styles["orange-word"]}>ENDURANCE</span>
                      <span className={styles["white-word"]}>IMPROVEMENT.</span>
                    </div>
                  </div>
                </div>

                {/* 2×2 grid — reuses strength styles */}
                <div className={styles["strength-2x2-grid"]}>
                  <div className={styles["strength-grid-box"]}>
                    <img src="/images/about/mission1.png" alt="Cardio 1" />
                  </div>
                  <div className={styles["strength-grid-box"]}>
                    <img src="/images/strength_training.png" alt="Cardio 2" />
                  </div>
                  <div className={styles["strength-grid-box"]}>
                    <img src="/images/about/mission3.png" alt="Cardio 3" />
                  </div>
                  <div className={styles["strength-grid-box"]}>
                    <img src="/images/about/mission4.png" alt="Cardio 4" />
                  </div>
                </div>
              </div>

              {/* RIGHT: single tall hero */}
              <div className={styles["cardio-hero-image"]}>
                <img src="/images/about/amentities1.png" alt="Cardio Training" />
              </div>

            </div>
          </div>
        </section>
  )
}
