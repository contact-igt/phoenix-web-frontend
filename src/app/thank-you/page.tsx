import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Check } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import MarketingFooter from '@/components/sections/shared/MarketingFooter'
import Stagger from '@/components/animation/Stagger'
import { DURATION, STAGGER } from '@/lib/animation/gsap'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Thank You | Phoenix Fitness',
  description:
    'Thank you for contacting Phoenix Fitness. Our team will review your request and get in touch shortly.',
}

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string | string[] }>
}) {
  const isFranchise = (await searchParams).type === 'franchise'
  const content = isFranchise
    ? {
        eyebrow: 'Franchise enquiry',
        heroCopy:
          'We received your franchise enquiry. Our team will review your market, property and investment details and contact you about the next step.',
        kicker: 'Franchise enquiry received',
        title: 'Thank you for your interest in building the next Phoenix',
        description:
          'Our franchise team will review your submission and reach out to discuss your preferred market, property opportunity and partnership fit.',
        actionLabel: 'Explore franchise',
        actionHref: '/franchise#franchise-opportunity',
      }
    : {
        eyebrow: 'Free trial request',
        heroCopy:
          'We received your details. Our team will contact you shortly to confirm your preferred branch and time slot.',
        kicker: 'Request received',
        title: 'Thanks, your free trial request is confirmed',
        description:
          'Our Phoenix Fitness team will review your details and reach out soon. Get ready to experience focused coaching, real guidance, and a gym built for progress.',
        actionLabel: 'Book another',
        actionHref: '/contact#contact-form',
      }

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
          <Stagger as="div" className={styles.heroContent} variant="fade-up" duration={DURATION.hero} staggerAmount={0.12}>
            <p className={styles.heroEyebrow}>{content.eyebrow}</p>
            <h1 id="thank-hero-title" className={styles.heroTitle}>
              Thank you
            </h1>
            <p className={styles.heroCopy}>{content.heroCopy}</p>
          </Stagger>
        </section>

        <section className={styles.thankSection} aria-labelledby="thank-you-title">
          <div className={styles.bgMark} aria-hidden="true" />
          <Stagger as="div" className={styles.inner} variant="fade-up" staggerAmount={STAGGER.normal}>
            <div className={styles.checkBadge} aria-hidden="true">
              <Check size={46} strokeWidth={3.2} />
            </div>

            <p className={styles.kicker}>{content.kicker}</p>
            <h2 id="thank-you-title" className={styles.title}>
              {content.title}
            </h2>
            <p className={styles.description}>{content.description}</p>

            <div className={styles.actions}>
              <Link href="/" className={`${styles.button} ${styles.secondary}`}>
                Return home
                <span className={styles.buttonIcon} aria-hidden="true">
                  <ArrowUpRight size={18} strokeWidth={2.4} />
                </span>
              </Link>
              <Link href={content.actionHref} className={`${styles.button} ${styles.primary}`}>
                {content.actionLabel}
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
          </Stagger>
        </section>
      </main>
      <MarketingFooter />
    </>
  )
}
