import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Play, RotateCcw } from 'lucide-react'
import styles from './index.module.css'

export default function AboutBanner() {
  return (
    <section id="about" className={styles.banner} aria-labelledby="about-banner-title">
      <Image
        src="/images/about/banner.png"
        alt="Focused Phoenix Fitness athlete after training"
        fill
        priority
        sizes="100vw"
        className={styles.bannerImage}
      />
      <div className={styles.scrim} />
      <div className={styles.watermark} aria-hidden="true">
        <Image
          src="/images/about/banner_bg_icon.png"
          alt=""
          fill
          sizes="100vw"
          className={styles.watermarkImage}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.copyBlock}>
          <p className={styles.eyebrow}>About Phoenix Fitness</p>
          <h1 id="about-banner-title" className={styles.title}>Rise With Us</h1>
          <p className={styles.description}>
            Just simple, effective workouts tailored to your goals &mdash; guided by real people who care.
          </p>

          <div className={styles.actionsRow}>
            <Link href="#contact" className={styles.joinButton}>
              Join us
            </Link>
            <Link href="#contact" className={styles.roundButton} aria-label="Join us">
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

        <div className={styles.infoRow} aria-label="Phoenix Fitness guarantees">
          <div className={styles.infoItem}>Affordable training<br />&amp; eating plans</div>
          <div className={styles.infoItemWithIcon}>
            <span className={styles.reloadIcon} aria-hidden="true">
              <RotateCcw size={23} strokeWidth={1.7} />
            </span>
            <span>14 day free return<br />on purchase</span>
          </div>
        </div>
      </div>
    </section>
  )
}
