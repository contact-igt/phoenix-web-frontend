import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Play } from 'lucide-react'
import Reveal from '@/components/animation/Reveal'
import Stagger from '@/components/animation/Stagger'
import { DURATION } from '@/lib/animation/gsap'
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
        <Stagger as="div" className={styles.copyBlock} variant="fade-up" duration={DURATION.hero} staggerAmount={0.12}>
          <p className={styles.eyebrow}>About Phoenix Fitness</p>
          <h1 id="about-banner-title" className={styles.title}>Rise With Us</h1>
          <p className={styles.description}>
            Just simple, effective workouts tailored to your goals &mdash; guided by real people who care.
          </p>

          <div className={styles.actionsRow}>
            <Link href="/contact#contact-trial-form" className={styles.joinButton}>
              Join us
            </Link>
            <Link href="/contact#contact-trial-form" className={styles.roundButton} aria-label="Join us">
              <ArrowUpRight size={15} strokeWidth={2.2} />
            </Link>
            <Link href="https://www.youtube.com/@phoenixfitnessbangalore" target="_blank" rel="noopener noreferrer" className={styles.videoButton}>
              Watch video
            </Link>
            <Link href="https://www.youtube.com/@phoenixfitnessbangalore" target="_blank" rel="noopener noreferrer" className={styles.playButton} aria-label="Watch video">
              <Play size={11} fill="currentColor" strokeWidth={0} />
            </Link>
          </div>
        </Stagger>

        <Reveal as="div" className={styles.infoRow} variant="fade-up" delay={0.5} aria-label="Phoenix Fitness guarantees">
          <div className={styles.infoItem}>Affordable training<br />&amp; eating plans</div>
          {/* <div className={styles.infoItemWithIcon}>
            <span className={styles.reloadIcon} aria-hidden="true">
              <Image src="/services/repeat.png" alt="" width={23} height={23} aria-hidden="true" />
            </span>
            <span>14 day free return<br />on purchase</span>
          </div> */}
        </Reveal>
      </div>
    </section>
  )
}

