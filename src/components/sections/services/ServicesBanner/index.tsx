import { Repeat2 } from 'lucide-react'
import styles from './index.module.css'
export default function ServicesBanner() {
  return (
        <section
          className={`${styles["hero"]} ${styles["services-hero"]}`}
          style={{ backgroundImage: "url('/images/heroimage.png')" }}
        >
          {/* Background watermark logo */}
          <div className={styles["hero-bg-logo"]} aria-hidden="true">
            <img src="/service/banner_logo.png" alt="" />
          </div>

          <div className={styles["hero-overlay"]}></div>

          <div className={`${styles["container"]} ${styles["hero-container-inner"]}`}>
            <div className={styles["hero-content"]}>
              <span className={styles["hero-tag"]}>Our Services</span>
              <h1 className={styles["hero-title"]}>
                <span className={styles["highlight"]}>Train Smarter.</span>
                <br />
                <span className={styles["white-text"]}>Get Stronger.</span>
                <br />
                <span className={styles["highlight"]}>Transform Better.</span>
              </h1>
              <p className={styles["hero-description"]}>
                Just simple, effective workouts tailored to your goals — guided by real people who care.
              </p>
              <div className={styles["hero-buttons"]}>
                <div className={styles["hero-button-pair"]}>
                  <a href="#strength" className={styles["hero-btn-explore"]}>
                    Explore
                  </a>
                  <a href="#strength" className={styles["btn-circle-arrow"]} aria-label="Explore services">
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
                <div className={styles["hero-button-pair"]}>
                  <a href="#contact" className={styles["hero-btn-video"]}>
                    WATCH VIDEO
                  </a>
                  <a href="#contact" className={styles["btn-circle-play"]} aria-label="Watch video">
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
            </div>

            {/* Bottom-right Overlay Info */}
            <div className={styles["hero-features-overlay"]}>
              <div className={styles["hero-feature-item"]}>
                <div className={styles["feature-text-group"]}>
                  <span className={styles["feature-title"]}>AFFORDABLE TRAINING</span>
                  <span className={styles["feature-subtitle"]}>& EATING PLANS</span>
                </div>
              </div>
              <div className={styles["hero-feature-item"]}>
                <span className={styles["feature-icon"]}>
                  <Repeat2 size={20} strokeWidth={2.5} aria-hidden="true" />
                </span>
                <div className={styles["feature-text-group"]}>
                  <span className={styles["feature-title"]}>14 DAY FREE RETURN</span>
                  <span className={styles["feature-subtitle"]}>ON PURCHASE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Trusted Logos Strip */}
          {/* <div className={styles["hero-logos-strip"]}>
            <div className={styles["logos-strip-container"]}>
              <span className={styles["logos-title"]}>TRUSTED BY ENTERPRISE LEADERS:</span>
              <div className={styles["logos-row"]}>
                <img src="/images/home/home-logo1.png" alt="IPSUM" />
                <img src="/images/home/home-logo2.png" alt="yogo" />
                <img src="/images/home/home-logo3.png" alt="LOGO" />
                <img src="/images/home/home-logo4.png" alt="LOGO" />
                <img src="/images/home/home-logo5.png" alt="LOGO" />
                <img src="/images/home/home-logo6.png" alt="LOGO" />
              </div>
            </div>
          </div> */}
        </section>
  )
}
