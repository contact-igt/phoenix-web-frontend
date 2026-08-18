import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/animation/Reveal'
import Stagger from '@/components/animation/Stagger'
import { DURATION, STAGGER } from '@/lib/animation/gsap'
import styles from './index.module.css'

export default function AboutSection() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutInner}>
        <Reveal as="div" className={styles.aboutImageGrid} variant="fade-left" duration={DURATION.section} distance={48}>
          <div className={styles.aboutImageTop}>
            <Image
              src="/images/home/aboutimage1.png"
              alt="Phoenix Fitness personal training area"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className={styles.aboutImageBottom}>
            <Image
              src="/images/home/aboutimage2.png"
              alt="Phoenix Fitness gym entrance with branding"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </div>
        </Reveal>

        <Stagger as="div" className={styles.aboutContent} variant="fade-up" duration={DURATION.card} staggerAmount={STAGGER.normal}>
          <p className={styles.aboutSubtitle}>
            Empowering<br />Your Journey
          </p>

          <h2 className={styles.aboutHeading}>
            More Than A{' '}<br className={styles.mobileHiddenBreak} />
            Gym &ndash; A Place{' '}<br className={styles.mobileHiddenBreak} />
            To Transform
          </h2>

          <p className={styles.aboutBody}>
            Join a community that inspires transformation and growth.
          </p>

          <div className={styles.aboutCtas}>
            <Link href="/about#journey" className={styles.btnPrimary}>
              EXPLORE OUR JOURNEY
            </Link>
            <Link href="/services" className={styles.btnGhost}>
              DISCOVER MORE
            </Link>
          </div>
        </Stagger>
      </div>
    </section>
  )
}
