import Image from 'next/image'
import Reveal from '@/components/animation/Reveal'
import Stagger from '@/components/animation/Stagger'
import { STAGGER } from '@/lib/animation/gsap'
import styles from './index.module.css'

const logos = [
  { src: '/images/home/home-logo1.png', alt: 'LOGO' },
  { src: '/images/home/home-logo2.png', alt: 'EGGS' },
  { src: '/images/home/home-logo3.png', alt: 'THE PAAK' },
  { src: '/images/home/home-logo4.png', alt: 'IDEA' },
  { src: '/images/home/home-logo5.png', alt: '360LAB' },
  { src: '/images/home/home-logo6.png', alt: 'ECHOES' },
]

export default function ChampionsSection() {
  return (
    <section className={styles.championsSection}>
      <div className={styles.championsInner}>
        {/* Left: Text Content */}
        <Reveal as="div" className={styles.championsLeft} variant="fade-up">
          <h2 className={styles.championsHeading}>
            Champions of Real<br />
            Transformation
          </h2>
          <p className={styles.championsDescription}>
            See how our members and partners are building strength, confidence, and community&mdash;one step at a time. Your journey is just beginning, and you&apos;re in great company.
          </p>
        </Reveal>

        {/* Right: Partner Logos Grid */}
        <div className={styles.championsRight}>
          <Stagger as="div" className={styles.logoGrid} variant="fade-up" distance={16} staggerAmount={STAGGER.tight}>
            {logos.map((logo, index) => (
              <div key={index} className={styles.logoWrap}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={60}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
