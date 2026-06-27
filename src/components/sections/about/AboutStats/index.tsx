import Image from 'next/image'
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
        <p className={styles.label}>Trusted by enterprise leaders:</p>
        <div className={styles.logoTrack} aria-hidden="true">
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
        </div>
      </div>
    </section>
  )
}

