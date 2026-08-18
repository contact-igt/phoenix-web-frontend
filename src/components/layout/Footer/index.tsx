'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUp } from 'lucide-react'
import Reveal from '../../animation/Reveal'
import Stagger from '../../animation/Stagger'
import { STAGGER } from '../../../lib/animation/gsap'
import styles from './index.module.css'
import Button from '../../ui/Button'

const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/phoenixfitnessbanglore/', icon: '/images/home/facebook.png' },
  { name: 'Instagram', href: 'https://www.instagram.com/phoenixfitness_bangalore/', icon: '/images/home/instagram.png' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/phoenix-fitness-solutions/', icon: '/images/home/linkedin.png' },
  { name: 'YouTube', href: 'https://www.youtube.com/channel/UC1q-dfQ2T2euEbMSeJ3_PBA', icon: '/images/home/youtube.png' },
]


export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > window.innerHeight)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className={styles.footer}>
      {/* Side Rotated Back to Top Button */}
      {showBackToTop && (
        <Button
          variant="primary"
          pill
          onClick={handleScrollToTop}
          className={styles.backToTop}
          aria-label="Back to top"
        >
          <ArrowUp size={24} strokeWidth={2.5} aria-hidden="true" />
        </Button>
      )}

      <div className={styles.footerInner}>
        {/* Top Section */}
        <Stagger as="div" className={styles.topSection} variant="fade-up" staggerAmount={STAGGER.loose}>
          {/* Left Column: Callout and CTA */}
          <div className={styles.ctaCol}>
            <h2 className={styles.ctaHeading}>
              Start your fitness journey today
            </h2>
            <a href="mailto:info@phoenix-fitness.in" className={styles.emailLink}>
              info@phoenix-fitness.in
            </a>
            <p className={styles.ctaText}>
              Ready to transform? Join our community and take your first step toward a healthier, stronger you.
            </p>
            <Link href="/contact#contact-trial-form" className={styles.joinBtn}>
              Join now
            </Link>
          </div>

          {/* Right Column: Directories Grid */}
          <Stagger as="div" className={styles.dirsGrid} variant="fade-up" staggerAmount={STAGGER.tight}>
            {/* Explore Column */}
            <div className={styles.dirColumn}>
              <h4 className={styles.dirTitle}>Explore</h4>
              <ul className={styles.dirLinks}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/#programs">Programs</Link></li>
              </ul>
            </div>

            {/* Support Column */}
            <div className={styles.dirColumn}>
              <h4 className={styles.dirTitle}>Support</h4>
              <ul className={styles.dirLinks}>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/about#faq">FAQ</Link></li>
              </ul>
            </div>

            {/* Locations Column */}
            <div className={styles.dirColumn}>
              <h4 className={styles.dirTitle}>Locations</h4>
              <ul className={styles.dirLinks}>
                <li><Link href="/contact#contact-info">Find us</Link></li>
                <li><a href="https://maps.app.goo.gl/HhH9crEMUrM2vFu9A" target="_blank" rel="noopener noreferrer">Map</a></li>
                <li><Link href="/contact#contact-info">Hours</Link></li>
              </ul>
            </div>
          </Stagger>
        </Stagger>

        <div className={styles.divider}></div>

        <Reveal as="div" className={styles.footerBrandRow} variant="fade-up">
          <div className={styles.footerBrandSocials}>
            <Link href="/" className={styles.footerLogoLink} aria-label="Phoenix Fitness home">
              <Image
                src="/images/home/home_footer_logo.png"
                alt="Phoenix Fitness"
                width={328}
                height={55}
                className={styles.footerLogo}
              />
            </Link>
            <nav className={styles.socialLinks} aria-label="Social links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={styles.socialLink}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={social.icon} alt="" width={18} height={18} aria-hidden="true" />
                </a>
              ))}
            </nav>
          </div>

          <div className={styles.footerMetaActions}>
            <button type="button" className={styles.footerBackToTop} onClick={handleScrollToTop}>
              <span>Back to top</span>
              <ArrowUp size={17} strokeWidth={2.4} aria-hidden="true" />
            </button>
            <p className={styles.copyright}>&copy; 2026. All rights reserved.</p>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}


