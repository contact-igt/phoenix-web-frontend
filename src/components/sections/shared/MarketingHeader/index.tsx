"use client"

import { useState } from "react"

type MarketingHeaderProps = {
  page: "services" | "pricing"
}

const navLinks = {
  services: {
    logo: "#",
    about: "/about",
    testimonials: "#faq",
    faq: "#faq",
    contact: "#contact",
  },
  pricing: {
    logo: "/",
    about: "/about",
    testimonials: "/#testimonials",
    faq: "/#faq",
    contact: "/#contact",
  },
}

export default function MarketingHeader({ page }: MarketingHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const links = navLinks[page]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header className="site-header">
        <div className="header-container">
          <a href={links.logo} className="logo" onClick={closeMobileMenu}>
            <img
              src="/images/logo.png"
              alt="Phoenix Fitness"
              className="logo-img"
            />
          </a>

          <nav>
            <ul className="nav-menu">
              <li>
                <a href={links.about} className="nav-link">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="/services" className="nav-link">
                  SERVICES
                </a>
              </li>
              <li>
                <a href="/pricing" className="nav-link">
                  PRICING
                </a>
              </li>
              <li>
                <a href={links.testimonials} className="nav-link">
                  TESTIMONIALS
                </a>
              </li>
              <li>
                <a href={links.faq} className="nav-link">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <a href={links.contact} className="header-cta">
              CONTACT US
            </a>
            <a href={links.contact} className="header-arrow-btn" aria-label="Contact us">
              <svg
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>

            <button
              className={`hamburger ${isMobileMenuOpen ? "hamburger-active" : ""}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-nav-overlay ${isMobileMenuOpen ? "open" : ""}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <ul className="mobile-nav-menu">
          <li>
            <a href={links.about} className="mobile-nav-link" onClick={closeMobileMenu}>
              ABOUT
            </a>
          </li>
          <li>
            <a href="/services" className="mobile-nav-link" onClick={closeMobileMenu}>
              SERVICES
            </a>
          </li>
          <li>
            <a href="/pricing" className="mobile-nav-link" onClick={closeMobileMenu}>
              PRICING
            </a>
          </li>
          <li>
            <a href={links.testimonials} className="mobile-nav-link" onClick={closeMobileMenu}>
              TESTIMONIALS
            </a>
          </li>
          <li>
            <a href={links.faq} className="mobile-nav-link" onClick={closeMobileMenu}>
              FAQ
            </a>
          </li>
          <li>
            <a href={links.contact} className="mobile-nav-link" onClick={closeMobileMenu}>
              CONTACT US
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

