import Image from 'next/image'
import styles from './index.module.css'

export default function HeroBanner() {
  return (
    <section className={styles.hero}>
      {/* Background watermark logo */}
      <div className={styles.heroBgLogo} aria-hidden="true">
        <Image
          src="/images/home/bannerbglogo1.png"
          alt=""
          fill
          style={{ objectFit: 'contain', objectPosition: 'center right', transform: 'scale(1.95)' }}
          priority={false}
        />
      </div>

      {/* Main content container */}
      <div className={styles.heroInner}>
        {/* H1 + Collage images placed inline inside flex rows */}
        <div className={styles.heroHeadingGrid}>
          {/* Row 1: "THE EMPOWERING" | [image1 relative] | "PATH" */}
          <div className={styles.heroRow1}>
            <span className={styles.heroWordLeft}>The Empowering</span>
            <div className={styles.collageItem1} aria-hidden="true">
              <Image
                src="/images/home/bannerimage1.png"
                alt="Feel the burn — gym interior"
                fill
                sizes="(max-width: 768px) 100vw, 484px"
                className={styles.collageImage}
                priority
              />
            </div>
            <span className={styles.heroWordRight}>Path</span>
          </div>

          {/* Row 2: "TO BEGIN" | [image2 relative] | "YOUR" */}
          <div className={styles.heroRow2}>
            <span className={styles.heroWordLeft}>To Begin</span>
            <div className={styles.collageItem2} aria-hidden="true">
              <Image
                src="/images/home/bannerimage2.png"
                alt="Phoenix Fitness gym floor"
                fill
                sizes="(max-width: 768px) 100vw, 484px"
                className={styles.collageImage}
                priority
              />
            </div>
            <span className={styles.heroWordRight}>Your</span>
          </div>

          {/* Row 3: "FITNESS JOURNEY" | [image3 relative] */}
          <div className={styles.heroRow3}>
            <span className={styles.heroWordFull}>Fitness Journey</span>
            <div className={styles.collageItem3} aria-hidden="true">
              <Image
                src="/images/home/bannerimage3.png"
                alt="Phoenix Fitness branding"
                fill
                sizes="(max-width: 768px) 100vw, 484px"
                className={styles.collageImage}
                priority
              />
            </div>
            <div className={styles.rowPlaceholder} aria-hidden="true" />
          </div>
        </div>
        {/* end heroHeadingGrid */}

        {/* Subtitle */}
        <p className={styles.heroSubtitle}>
          Discover a community where your transformation begins. Join us to unlock strength &amp; confidence.
        </p>

        {/* CTA Buttons */}
        <div className={styles.heroCtas}>
          <a href="#programs" className={styles.btnFilled}>Explore</a>
          <a href="#contact" className={styles.btnOutline}>Free trial</a>
        </div>
      </div>
      {/* end heroInner */}
    </section>
  )
}
