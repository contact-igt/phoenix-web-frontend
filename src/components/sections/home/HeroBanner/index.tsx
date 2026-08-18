import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/animation/Reveal'
import Stagger from '@/components/animation/Stagger'
import { DURATION } from '@/lib/animation/gsap'
import styles from './index.module.css'

export default function HeroBanner() {
  return (
    <section id="home" className={styles.hero}>
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
        <Stagger
          as="div"
          className={styles.heroHeadingGrid}
          variant="fade-up"
          duration={DURATION.hero}
          distance={36}
          staggerAmount={0.15}
          start="top 95%"
        >
          {/* Row 1: "THE EMPOWERING" | [image1 relative] | "PATH" */}
          <div className={styles.heroRow1}>
            <span className={styles.heroWordLeft}>The Empowering</span>
            <div className={styles.collageItem1} aria-hidden="true">
              <Image
                src="/images/home/banner11.png"
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
                src="/images/home/banner22.png"
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
                src="/images/home/banner33.png"
                alt="Phoenix Fitness branding"
                fill
                sizes="(max-width: 768px) 100vw, 484px"
                className={styles.collageImage}
                priority
              />
            </div>
            <div className={styles.rowPlaceholder} aria-hidden="true" />
          </div>
        </Stagger>
        {/* end heroHeadingGrid */}

        {/* Subtitle */}
        <Reveal as="p" className={styles.heroSubtitle} variant="fade-up" duration={DURATION.hero} delay={0.5} start="top 95%">
          Discover a community where your transformation begins. Join us to unlock strength &amp; confidence.
        </Reveal>

        {/* CTA Buttons */}
        <Stagger
          as="div"
          className={styles.heroCtas}
          variant="scale"
          duration={0.6}
          delay={0.9}
          staggerAmount={0.12}
          start="top 95%"
        >
          <a href="#programs" className={styles.btnFilled}>EXPLORE</a>
          <Link href="/contact#contact-trial-form" className={styles.btnOutline}>FREE TRIAL</Link>
        </Stagger>
      </div>
      {/* end heroInner */}
    </section>
  )
}
