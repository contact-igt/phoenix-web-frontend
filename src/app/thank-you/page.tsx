import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Check } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import MarketingFooter from '@/components/sections/shared/MarketingFooter'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Thank You | Phoenix Fitness',
  description:
    'Thank you for contacting Phoenix Fitness. Our team will review your free trial request and get in touch shortly.',
}

export default function ThankYouPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero} aria-labelledby="thank-hero-title">
          <Image
            src="/images/contact/banner.png"
            alt="Phoenix Fitness gym interior"
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroScrim} aria-hidden="true" />
          <div className={styles.heroContent}>
            <p className={styles.heroEyebrow}>Free trial request</p>
            <h1 id="thank-hero-title" className={styles.heroTitle}>
              Thank you
            </h1>
            <p className={styles.heroCopy}>
              We received your details. Our team will contact you shortly to confirm your preferred branch and time slot.
            </p>
          </div>
        </section>

        <section className={styles.thankSection} aria-labelledby="thank-you-title">
          <div className={styles.bgMark} aria-hidden="true" />
          <div className={styles.inner}>
            <div className={styles.checkBadge} aria-hidden="true">
              <Check size={46} strokeWidth={3.2} />
            </div>

            <p className={styles.kicker}>Request received</p>
            <h2 id="thank-you-title" className={styles.title}>
              Thanks, your free trial request is confirmed
            </h2>
            <p className={styles.description}>
              Our Phoenix Fitness team will review your details and reach out soon. Get ready to experience focused coaching, real guidance, and a gym built for progress.
            </p>

            <div className={styles.actions}>
              <Link href="/" className={`${styles.button} ${styles.secondary}`}>
                Return home
                <span className={styles.buttonIcon} aria-hidden="true">
                  <ArrowUpRight size={18} strokeWidth={2.4} />
                </span>
              </Link>
              <Link href="/contact#contact-form" className={`${styles.button} ${styles.primary}`}>
                Book another
                <span className={styles.buttonIcon} aria-hidden="true">
                  <ArrowUpRight size={18} strokeWidth={2.4} />
                </span>
              </Link>
            </div>

            <p className={styles.helpText}>
              Need help right away?{' '}
              <Link href="tel:+919880537297" className={styles.helpLink}>
                Call +91 9880537297
              </Link>
            </p>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </>
  )
}