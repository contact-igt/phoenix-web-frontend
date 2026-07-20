import Image from 'next/image'
import Link from 'next/link'
import { MapPin } from 'lucide-react'
import styles from './index.module.css'

export default function ContactMapCta() {
  return (
    <section className={styles.section} aria-labelledby="contact-map-title">
      <div className={styles.container}>
        <div className={styles.card}>
          <Image
            src="/images/contact/trail_today.png"
            alt="Mountain trail landscape representing the journey to Phoenix Fitness"
            fill
            sizes="(max-width: 768px) 100vw, 1100px"
            className={styles.image}
          />
          <div className={styles.gradient} />

          <div className={styles.locationBox}>
            <h2 id="contact-map-title" className={styles.locationTitle}>
              <MapPin size={23} strokeWidth={2.6} aria-hidden="true" />
              <span>FIND US HERE</span>
            </h2>
            <p>
              SBR Gokulam, 6th Floor, Kannamangala Main Road, Whitefield. We are located
              right in the heart of the tech hub.
            </p>
          </div>

          <Link href="#contact-trial-title" className={styles.cta}>
            BOOK YOUR TRIAL TODAY
          </Link>
        </div>
      </div>
    </section>
  )
}
