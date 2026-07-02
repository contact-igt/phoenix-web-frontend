import styles from './index.module.css'
export default function PersonalTraining() {
  return (
    <section id="personal" className={styles["personal-section"]}>
      <div className={styles["personal-hero-container"]}>
        <img src="/images/heroimage.png" alt="Personal Training" className={styles["personal-hero-bg"]} />
        <div className={styles["personal-hero-overlay"]}></div>

        <div className={styles["container"]}>
          <div className={styles["personal-hero-content"]}>
            <span className={styles["strength-tag-label"]}>OUR SERVICES</span>

            <div className={styles["personal-title-row"]}>
              <h2 className={styles["personal-title"]}>
                <span className={styles["highlight"]}>PERSONAL</span> TRAINING
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
              Get focused one-on-one coaching from experienced trainers for faster and more targeted results.
            </p>

            <div className={styles["strength-tag-capsules"]}>
              <div className={styles["capsule-tag"]}>
                <span className={styles["orange-word"]}>ONE-ON-ONE</span>
                <span className={styles["white-word"]}>TRAINER GUIDANCE</span>
              </div>
              <div className={styles["capsule-tag"]}>
                <span className={styles["orange-word"]}>CUSTOMIZED</span>
                <span className={styles["white-word"]}>WORKOUT PLANS</span>
              </div>
              <div className={styles["capsule-tag"]}>
                <span className={styles["orange-word"]}>BETTER</span>
                <span className={styles["white-word"]}>FORM CORRECTION</span>
              </div>
              <div className={styles["capsule-tag"]}>
                <span className={styles["orange-word"]}>FASTER GOAL-</span>
                <span className={styles["white-word"]}>FOCUSED PROGRESS</span>
              </div>
              <div className={styles["capsule-tag"]}>
                <span className={styles["orange-word"]}>IMPROVED</span>
                <span className={styles["white-word"]}>CONSISTENCY AND ACCOUNTABILITY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
