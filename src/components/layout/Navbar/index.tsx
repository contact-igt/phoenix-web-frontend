'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import styles from './index.module.css'
import Button from '../../ui/Button'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/#services' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'FAQ', href: '/#faq' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isMobileMenuOpen) return

    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMobileMenu()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMobileMenuOpen])

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navbarInner}>
        <Link href="/" className={styles.logoContainer}>
          <Image src="/images/logo.png" alt="Phoenix Fitness" width={391} height={57} className={styles.logo} priority />
        </Link>

        <nav className={styles.nav} aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <Button variant="white" pill href="/#contact" className={styles.contactBtn}>
            Contact us
          </Button>
          <Link href="/#contact" className={styles.arrowBtn} aria-label="Contact us">
            <ArrowUpRight size={25} strokeWidth={2} />
          </Link>

          <button
            className={`${styles.hamburger} ${isMobileMenuOpen ? styles.hamburgerActive : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className={styles.hamburgerBar}></span>
            <span className={styles.hamburgerBar}></span>
            <span className={styles.hamburgerBar}></span>
          </button>
        </div>
      </div>

      <div
        className={`${styles.mobileDrawer} ${isMobileMenuOpen ? styles.mobileDrawerActive : ''}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className={styles.mobileNavLink} onClick={closeMobileMenu}>
              {link.label}
            </Link>
          ))}
          <div className={styles.mobileCta}>
            <Button variant="primary" pill href="/#contact" onClick={closeMobileMenu}>
              Contact us
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}