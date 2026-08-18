import Image from 'next/image'
import Reveal from '@/components/animation/Reveal'
import Stagger from '@/components/animation/Stagger'
import { STAGGER } from '@/lib/animation/gsap'
import styles from './index.module.css'

const logos = Array.from({ length: 6 }, (_, index) => ({
  id: `trusted-logo-${index + 1}`,
  src: '/images/home/home-logo1.png',
  alt: 'Trusted enterprise leader logo',
}))

export default function AboutStats() {
  return (
    <section className={styles.stats} aria-label="Trusted by enterprise leaders">
      <div className={styles.inner}>
        <Reveal as="p" className={styles.label} variant="fade-up">Trusted by enterprise leaders:</Reveal>
        <Stagger as="div" className={styles.logoTrack} variant="fade" distance={12} staggerAmount={STAGGER.tight} aria-hidden="true">
          {logos.map((logo) => (
            <span className={styles.logoSlot} key={logo.id}>
              <Image
                src={logo.src}
                alt=""
                width={112}
                height={26}
                className={styles.logo}
              />
            </span>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

