'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUp } from 'lucide-react'
import styles from './index.module.css'
import Button from '../../ui/Button'

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
        <div className={styles.topSection}>
          {/* Left Column: Callout and CTA */}
          <div className={styles.ctaCol}>
            <h2 className={styles.ctaHeading}>
              Start your fitness journey today
            </h2>
            <a href="mailto:hello@phoenixfitness.com" className={styles.emailLink}>
              hello@phoenixfitness.com
            </a>
            <p className={styles.ctaText}>
              Ready to transform? Join our community and take your first step toward a healthier, stronger you.
            </p>
            <Link href="#contact" className={styles.joinBtn}>
              Join now
            </Link>
          </div>

          {/* Right Column: Directories Grid */}
          <div className={styles.dirsGrid}>
            {/* Explore Column */}
            <div className={styles.dirColumn}>
              <h4 className={styles.dirTitle}>Explore</h4>
              <ul className={styles.dirLinks}>
                <li><Link href="#home">Home</Link></li>
                <li><Link href="#about">About</Link></li>
                <li><Link href="#programs">Programs</Link></li>
              </ul>
            </div>

            {/* Support Column */}
            <div className={styles.dirColumn}>
              <h4 className={styles.dirTitle}>Support</h4>
              <ul className={styles.dirLinks}>
                <li><Link href="#contact">Contact</Link></li>
                <li><Link href="#faq">FAQ</Link></li>
                <li><Link href="#careers">Careers</Link></li>
              </ul>
            </div>

            {/* More Column */}
            <div className={styles.dirColumn}>
              <h4 className={styles.dirTitle}>More</h4>
              <ul className={styles.dirLinks}>
                <li><Link href="#blog">Blog</Link></li>
                <li><Link href="#events">Events</Link></li>
                <li><Link href="#stories">Stories</Link></li>
              </ul>
            </div>

            {/* Locations Column */}
            <div className={styles.dirColumn}>
              <h4 className={styles.dirTitle}>Locations</h4>
              <ul className={styles.dirLinks}>
                <li><Link href="#contact">Find us</Link></li>
                <li><Link href="#contact">Map</Link></li>
                <li><Link href="#contact">Hours</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Horizontal Divider Line */}
        <div className={styles.divider}></div>
      </div>

      {/* Dark Bottom Bar */}
      <div className={styles.footerBottomBar}>
        <div className={styles.footerBottomBarInner}>
          <nav className={styles.bottomNavPills} aria-label="Footer links">
            <Link href="/contact" className={styles.bottomNavPill}>Contact Us</Link>
            <Link href="/license" className={styles.bottomNavPill}>License</Link>
            <Link href="/404" className={styles.bottomNavPill}>404</Link>
          </nav>
          <button
            type="button"
            onClick={handleScrollToTop}
            className={styles.backToTopBtn}
            aria-label="Back to top"
          >
            <span className={styles.backToTopBtnLabel}>Back to Top</span>
            <span className={styles.backToTopBtnIcon} aria-hidden="true">
              <ArrowUp size={14} strokeWidth={2.5} />
            </span>
          </button>
        </div>
        <p className={styles.footerCopyright}>© 2026. All rights reserved.</p>
      </div>
    </footer>
  )
}
