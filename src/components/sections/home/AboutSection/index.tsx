import Image from 'next/image'
import styles from './index.module.css'

export default function AboutSection() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutInner}>
        {/* â”€â”€ LEFT: Image grid â”€â”€ */}
        <div className={styles.aboutImageGrid}>
          {/* Top image â€” full column width */}
          <div className={styles.aboutImageTop}>
            <Image
              src="/images/home/aboutimage1.png"
              alt="Phoenix Fitness personal training area"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Bottom image â€” offset right, overlaps top */}
          <div className={styles.aboutImageBottom}>
            <Image
              src="/images/home/aboutimage2.png"
              alt="Phoenix Fitness gym entrance with branding"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </div>
        </div>

        {/* â”€â”€ RIGHT: Text content â”€â”€ */}
        <div className={styles.aboutContent}>
          {/* Muted subtitle label */}
          <p className={styles.aboutSubtitle}>
            Empowering<br />Your Journey
          </p>

          {/* Main heading */}
          <h2 className={styles.aboutHeading}>
            More Than A{' '}<br className={styles.mobileHiddenBreak} />
            Gym &ndash; A Place{' '}<br className={styles.mobileHiddenBreak} />
            To Transform
          </h2>

          {/* Body paragraph */}
          <p className={styles.aboutBody}>
            Join a community that inspires transformation and growth.
          </p>

          {/* CTA buttons */}
          <div className={styles.aboutCtas}>
            <a href="#contact" className={styles.btnPrimary}>
              Read Our Founder&apos;s Story
            </a>
            <a href="#programs" className={styles.btnGhost}>
              Discover more
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

