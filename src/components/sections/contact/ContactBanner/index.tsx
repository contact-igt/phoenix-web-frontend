import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Play } from 'lucide-react'
import styles from './index.module.css'

export default function ContactBanner() {
  return (
    <section
      id="contact"
      className={styles.banner}
      aria-labelledby="contact-banner-title"
    >
      <Image
        src="/images/contact/banner.png"
        alt="Phoenix Fitness gym interior"
        fill
        priority
        sizes="100vw"
        className={styles.bannerImage}
      />
      <div className={styles.scrim} aria-hidden="true" />

      {/* Content split: topGroup (title) pushed top, bottomGroup (CTA) pushed bottom */}
      <div className={styles.content}>
        {/* ── TOP: Eyebrow + Title ── */}
        <div className={styles.topGroup}>
          <p className={styles.eyebrow}>Reach out to us</p>
          <h1 id="contact-banner-title" className={styles.title}>
            Contact us
          </h1>
        </div>

        {/* ── BOTTOM: Description + CTAs ── */}
        <div className={styles.bottomGroup}>
          <p className={styles.description}>
            Just simple, effective workouts tailored to your goals &mdash; guided by real people who care.
          </p>
          <div className={styles.actionsRow}>
            <Link href="#contact-form" className={styles.joinButton}>
              Join us
            </Link>
            <Link href="#contact-form" className={styles.roundButton} aria-label="Join us">
              <ArrowUpRight size={15} strokeWidth={2.2} />
            </Link>
            <Link href="#video" className={styles.videoButton}>
              Watch video
            </Link>
            <Link href="#video" className={styles.playButton} aria-label="Watch video">
              <Play size={11} fill="currentColor" strokeWidth={0} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
