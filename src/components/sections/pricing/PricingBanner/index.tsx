import styles from './index.module.css'
export default function PricingBanner() {
  return (
    <section className={styles["pricing-section"]}>
      {/* Full-bleed background image */}
      <img
        src="/images/pricing/banner_image.png"
        alt="Athlete training"
        className={styles["pricing-bg-image"]}
      />
      {/* Dark left-to-transparent overlay */}
      <div className={styles["pricing-bg-overlay"]}></div>
      {/* Phoenix watermark */}
      <img
        src="/images/pricing/banner_logo.png"
        alt=""
        aria-hidden="true"
        className={styles["pricing-watermark"]}
      />

      {/* Content */}
      <div className={styles["container"]}>
        <div className={styles["pricing-hero-content"]}>
          <div className={styles["pricing-subtitle"]}>Our Pricings</div>
          <h1 className={styles["pricing-title-main"]}>
            <span className={styles["pricing-title-orange"]}>Choose Your Plan.</span>
            <span className={styles["pricing-title-white"]}>Start Your Transformation.</span>
          </h1>
          <p className={styles["pricing-hero-desc"]}>
            Just simple, effective workouts tailored to your goals - guided by real people who care.
          </p>
        </div>
      </div>

      {/* Guarantee badges */}
      <div className={styles["pricing-guarantee-block"]}>
        <div className={styles["pricing-guarantee-text"]}>
          AFFORDABLE TRAINING<br />
          &amp; EATING PLANS
        </div>
        <div className={styles["pricing-guarantee-icon"]}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path>
            <polyline points="21 3 21 8 16 8"></polyline>
          </svg>
        </div>
        <div className={styles["pricing-guarantee-text"]}>
          14 DAY FREE RETURN<br />
          ON PURCHASE
        </div>
      </div>
    </section>
  )
}



