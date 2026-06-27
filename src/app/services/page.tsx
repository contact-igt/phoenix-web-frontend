"use client";

import React, { useState } from "react";
import FAQAccordion from "@/components/FAQAccordion";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Header */}
      <header className="site-header">
        <div className="header-container">
          <a href="#" className="logo" onClick={closeMobileMenu}>
            <img
              src="/images/logo.png"
              alt="Phoenix Fitness"
              className="logo-img"
            />
          </a>

          {/* Desktop Navigation */}
          <nav>
            <ul className="nav-menu">
              <li>
                <a href="#about" className="nav-link">
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
                <a href="#faq" className="nav-link">
                  TESTIMONIALS
                </a>
              </li>
              <li>
                <a href="#faq" className="nav-link">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <a href="#contact" className="header-cta">
              CONTACT US
            </a>
            <a href="#contact" className="header-arrow-btn" aria-label="Contact us">
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

            {/* Mobile Menu Toggle Button */}
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

      {/* Mobile Navigation Drawer */}
      <div
        className={`mobile-nav-overlay ${isMobileMenuOpen ? "open" : ""}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <ul className="mobile-nav-menu">
          <li>
            <a href="#about" className="mobile-nav-link" onClick={closeMobileMenu}>
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
            <a href="#faq" className="mobile-nav-link" onClick={closeMobileMenu}>
              TESTIMONIALS
            </a>
          </li>
          <li>
            <a href="#faq" className="mobile-nav-link" onClick={closeMobileMenu}>
              FAQ
            </a>
          </li>
          <li>
            <a href="#contact" className="mobile-nav-link" onClick={closeMobileMenu}>
              CONTACT US
            </a>
          </li>
        </ul>
      </div>

      <main>
        {/* Hero Section */}
        <section
          className="hero"
          style={{ backgroundImage: "url('/images/heroimage.png')" }}
        >
          {/* Background watermark logo */}
          <div className="hero-bg-logo" aria-hidden="true">
            <img src="/images/home/bannerbglogo1.png" alt="" />
          </div>

          <div className="hero-overlay"></div>

          <div className="container hero-container-inner">
            <div className="hero-content">
              <span className="hero-tag">Our Services</span>
              <h1 className="hero-title">
                <span className="highlight">Train Smarter.</span>
                <br />
                <span className="white-text">Get Stronger.</span>
                <br />
                <span className="highlight">Transform Better.</span>
              </h1>
              <p className="hero-description">
                Just simple, effective workouts tailored to your goals — guided by real people who care.
              </p>
              <div className="hero-buttons">
                <a href="#strength" className="hero-btn-explore">
                  Explore
                  <span className="btn-circle-arrow">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </span>
                </a>
                <a href="#contact" className="hero-btn-video">
                  WATCH VIDEO
                  <span className="btn-circle-play">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <polygon points="6,3 20,12 6,21" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            {/* Bottom-right Overlay Info */}
            <div className="hero-features-overlay">
              <div className="hero-feature-item">
                <div className="feature-text-group">
                  <span className="feature-title">AFFORDABLE TRAINING</span>
                  <span className="feature-subtitle">& EATING PLANS</span>
                </div>
              </div>
              <div className="hero-feature-item">
                <span className="feature-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                  </svg>
                </span>
                <div className="feature-text-group">
                  <span className="feature-title">14 DAY FREE RETURN</span>
                  <span className="feature-subtitle">ON PURCHASE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Trusted Logos Strip */}
          <div className="hero-logos-strip">
            <div className="logos-strip-container">
              <span className="logos-title">TRUSTED BY ENTERPRISE LEADERS:</span>
              <div className="logos-row">
                <img src="/images/home/home-logo1.png" alt="IPSUM" />
                <img src="/images/home/home-logo2.png" alt="yogo" />
                <img src="/images/home/home-logo3.png" alt="LOGO" />
                <img src="/images/home/home-logo4.png" alt="LOGO" />
                <img src="/images/home/home-logo5.png" alt="LOGO" />
                <img src="/images/home/home-logo6.png" alt="LOGO" />
              </div>
            </div>
          </div>
        </section>

        {/* Strength Training Section */}
        <section id="strength" className="section strength-section">
          {/* Background watermark logo */}
          <div className="strength-bg-watermark" aria-hidden="true">
            <img src="/images/about/journey_logo.png" alt="" />
          </div>

          <div className="container">
            <div className="section-grid strength-grid-container">

              {/* Left Column: Info, Description, Custom Tags */}
              <div className="section-info strength-info">
                <span className="strength-tag-label">OUR SERVICES</span>
                <h2 className="section-title strength-title">
                  <span className="highlight">STRENGTH</span> TRAINING
                </h2>
                <p className="section-desc strength-desc">
                  Build muscle strength, improve stamina, and enhance overall physical performance with guided resistance training.
                </p>
                <div className="strength-tag-capsules">
                  <div className="capsule-tag">
                    <span className="orange-word">MUSCLE</span> <span className="white-word">BUILDING</span>
                  </div>
                  <div className="capsule-tag">
                    <span className="orange-word">STRENGTH</span> <span className="white-word">IMPROVEMENT</span>
                  </div>
                  <div className="capsule-tag">
                    <span className="orange-word">STAMINA</span>
                  </div>
                  <div className="capsule-tag">
                    <span className="orange-word">BODY</span> <span className="white-word">TONING</span>
                  </div>
                  <div className="capsule-tag">
                    <span className="orange-word">PERFORMANCE</span> <span className="white-word">TRAINING.</span>
                  </div>
                </div>
              </div>

              {/* Right Column: 2x2 Media Grid with Overlaid Quote Banner */}
              <div className="strength-media-wrapper">
                <div className="strength-2x2-grid">
                  <div className="strength-grid-box">
                    <img src="/images/about/mission1.png" alt="Athlete training" />
                  </div>
                  <div className="strength-grid-box">
                    <img src="/images/strength_training.png" alt="Barbell lift" />
                  </div>
                  <div className="strength-grid-box">
                    <img src="/images/about/mission3.png" alt="Workout focus" />
                  </div>
                  <div className="strength-grid-box">
                    <img src="/images/about/mission4.png" alt="Coach feedback" />
                  </div>
                </div>

                {/* Overlaid Quote Block on the bottom-right quadrant */}
                <div className="strength-quote-overlay">
                  <span className="quote-overlay-label">ITS ABOUT</span>
                  <h3 className="quote-overlay-title">
                    <span className="highlight">RESILIENCE,</span> <span className="white-word">DISCIPLINE, &</span>
                    <br />
                    <span className="highlight">SELF-BELIEF.</span>
                  </h3>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Cardio Training Section */}
        <section id="cardio" className="section cardio-section">
          <div className="container">
            <div className="cardio-grid-container">

              {/* LEFT: info + 2×2 grid stacked */}
              <div className="cardio-left">
                <div className="cardio-info">
                  <span className="strength-tag-label">OUR SERVICES</span>

                  <div className="cardio-title-row">
                    <h2 className="section-title cardio-title">
                      <span className="highlight">CARDIO</span> TRAINING
                    </h2>
                    <a href="#" className="cardio-watch-btn">
                      WATCH VIDEO
                      <span className="btn-circle-play">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="6,3 20,12 6,21" />
                        </svg>
                      </span>
                    </a>
                  </div>

                  <p className="section-desc">
                    Burn calories, improve endurance, and support heart health
                    with structured cardio programs.
                  </p>

                  <div className="strength-tag-capsules">
                    <div className="capsule-tag">
                      <span className="orange-word">FAT</span>
                      <span className="white-word">LOSS</span>
                    </div>
                    <div className="capsule-tag">
                      <span className="orange-word">STAMINA</span>
                      <span className="white-word">BUILDING</span>
                    </div>
                    <div className="capsule-tag">
                      <span className="orange-word">HEART</span>
                      <span className="white-word">HEALTH</span>
                    </div>
                    <div className="capsule-tag">
                      <span className="orange-word">CALORIE</span>
                      <span className="white-word">BURNING</span>
                    </div>
                    <div className="capsule-tag">
                      <span className="orange-word">ENDURANCE</span>
                      <span className="white-word">IMPROVEMENT.</span>
                    </div>
                  </div>
                </div>

                {/* 2×2 grid — reuses strength styles */}
                <div className="strength-2x2-grid">
                  <div className="strength-grid-box">
                    <img src="/images/about/mission1.png" alt="Cardio 1" />
                  </div>
                  <div className="strength-grid-box">
                    <img src="/images/strength_training.png" alt="Cardio 2" />
                  </div>
                  <div className="strength-grid-box">
                    <img src="/images/about/mission3.png" alt="Cardio 3" />
                  </div>
                  <div className="strength-grid-box">
                    <img src="/images/about/mission4.png" alt="Cardio 4" />
                  </div>
                </div>
              </div>

              {/* RIGHT: single tall hero */}
              <div className="cardio-hero-image">
                <img src="/images/about/amentities1.png" alt="Cardio Training" />
              </div>

            </div>
          </div>
        </section>

        {/* Functional Training Section */}
        <section id="functional" className="section functional-section">
          <div className="container">
            <div className="functional-grid-container">

              {/* Left: Info + Tags */}
              <div className="functional-info">
                <span className="strength-tag-label">OUR SERVICES</span>

                <div className="functional-title-row">
                  <h2 className="section-title functional-title">
                    <span className="highlight">FUNCTIONAL</span> TRAINING
                  </h2>
                  <a href="#" className="cardio-watch-btn">
                    WATCH VIDEO
                    <span className="btn-circle-play">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="6,3 20,12 6,21" />
                      </svg>
                    </span>
                  </a>
                </div>

                <p className="section-desc">
                  Improve flexibility, posture, balance, and mobility with workouts designed for everyday strength.
                </p>

                <div className="strength-tag-capsules">
                  <div className="capsule-tag">
                    <span className="orange-word">IMPROVES</span>
                    <span className="white-word">BODY MOVEMENT</span>
                  </div>
                  <div className="capsule-tag">
                    <span className="orange-word">ENHANCES</span>
                    <span className="white-word">FLEXIBILITY & MOBILITY</span>
                  </div>
                  <div className="capsule-tag">
                    <span className="orange-word">STRENGTHENS</span>
                    <span className="white-word">THE CORE</span>
                  </div>
                  <div className="capsule-tag">
                    <span className="orange-word">SUPPORTS</span>
                    <span className="white-word">BETTER POSTURE</span>
                  </div>
                  <div className="capsule-tag">
                    <span className="orange-word">REDUCES</span>
                    <span className="white-word">STIFFNESS AND IMPROVES CONTROL</span>
                  </div>
                </div>
              </div>

              {/* Right: two stacked preview thumbnails beside the text */}
              <div className="functional-preview-thumbs">
                <div className="functional-thumb">
                  <img src="/images/functional/preview1.png" alt="Functional training preview 1" />
                </div>
                <div className="functional-thumb">
                  <img src="/images/functional/preview1.png" alt="Functional training preview 2" />
                </div>
              </div>

              {/* Bottom: full-width image collage */}
              <div className="functional-image-grid">
                <div className="functional-main">
                  <img src="/images/functional/main.png" alt="Woman doing dumbbell row" />
                </div>
                <div className="functional-sub functional-sub-1">
                  <img src="/images/functional/sub1.png" alt="Training conversation" />
                </div>
                <div className="functional-sub functional-sub-2">
                  <img src="/images/functional/sub2.png" alt="Boxing partners" />
                </div>
                <div className="functional-sub functional-sub-3 functional-sub-active">
                  <img src="/images/functional/sub3.png" alt="Athlete portrait" />
                </div>
                <div className="functional-panoramic">
                  <img src="/images/functional/panoramic.png" alt="Gym interior wide shot" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Personal Training Section */}
        <section id="personal" className="section">
          <div className="container">
            <div className="personal-hero-container">
              <img src="/images/heroimage.png" alt="Personal Training" className="personal-hero-bg" />
              <div className="personal-hero-overlay"></div>
              
              <div className="personal-hero-content">
                <span className="strength-tag-label">OUR SERVICES</span>
                
                <div className="cardio-title-row">
                  <h2 className="section-title cardio-title" style={{ color: '#fff' }}>
                    <span className="highlight">PERSONAL</span> TRAINING
                  </h2>
                  <a href="#" className="cardio-watch-btn">
                    WATCH VIDEO
                    <span className="btn-circle-play">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="6,3 20,12 6,21" />
                      </svg>
                    </span>
                  </a>
                </div>

                <p className="section-desc">
                  Get focused one-on-one coaching from experienced trainers for faster and more targeted results.
                </p>

                <div className="strength-tag-capsules">
                  <div className="capsule-tag">
                    <span className="orange-word">ONE-ON-ONE</span>
                    <span className="white-word">TRAINER GUIDANCE</span>
                  </div>
                  <div className="capsule-tag">
                    <span className="orange-word">CUSTOMIZED</span>
                    <span className="white-word">WORKOUT PLANS</span>
                  </div>
                  <div className="capsule-tag">
                    <span className="orange-word">BETTER</span>
                    <span className="white-word">FORM CORRECTION</span>
                  </div>
                  <div className="capsule-tag">
                    <span className="orange-word">FASTER GOAL-</span>
                    <span className="white-word">FOCUSED PROGRESS</span>
                  </div>
                  <div className="capsule-tag">
                    <span className="orange-word">IMPROVED</span>
                    <span className="white-word">CONSISTENCY AND ACCOUNTABILITY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="faq-section">
          <div className="container">
            <div className="faq-header">
              <span className="faq-subtitle">FAQ'S</span>
              <h2 className="faq-title">FREQUENTLY ASKED QUESTIONS</h2>
            </div>
            <FAQAccordion />
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact" className="contact-section" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
          <div className="container">
            <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
              
              {/* Left Column */}
              <div className="contact-details">
                <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '1rem', color: '#fff' }}>GET IN TOUCH</h2>
                <p className="contact-desc" style={{ color: '#a0a0a0', fontSize: '0.85rem', marginBottom: '3rem', maxWidth: '300px' }}>
                  Have a question? Want to visit?<br/>
                  We're here to help you take the first step.
                </p>

                <div style={{ marginBottom: '2.5rem' }}>
                  <strong style={{ display: 'block', marginBottom: '1rem', color: '#fff', fontSize: '0.85rem' }}>Visit us:</strong>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>🇮🇳</span>
                      <p style={{ margin: 0, color: '#a0a0a0', fontSize: '0.85rem', lineHeight: '1.5' }}>
                        Hyperfit Studio, 2nd Floor, Main Street,<br/>
                        Sector 12, Bangalore, India
                      </p>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>🇦🇪</span>
                      <p style={{ margin: 0, color: '#a0a0a0', fontSize: '0.85rem', lineHeight: '1.5' }}>
                        Hyperfit Studio, Office 304, Al Barsha Heights<br/>
                        Dubai, United Arab Emirates
                      </p>
                    </div>
                  </div>
                </div>

                <div style={{ marginBottom: '2.5rem' }}>
                  <strong style={{ display: 'block', marginBottom: '1rem', color: '#fff', fontSize: '0.85rem' }}>Call or WhatsApp (Available 7 AM – 9 PM, all days):</strong>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1px solid #333', padding: '0.4rem 1rem', borderRadius: '20px', color: '#a0a0a0', textDecoration: 'none', fontSize: '0.8rem' }}>
                      <span style={{ fontSize: '1rem' }}>🇮🇳</span> +91 12345 67890
                    </a>
                    <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1px solid #333', padding: '0.4rem 1rem', borderRadius: '20px', color: '#a0a0a0', textDecoration: 'none', fontSize: '0.8rem' }}>
                      <span style={{ fontSize: '1rem' }}>🇦🇪</span> +91 12345 67890
                    </a>
                  </div>
                </div>

                <div>
                  <strong style={{ display: 'block', marginBottom: '1rem', color: '#fff', fontSize: '0.85rem' }}>Follow us:</strong>
                  <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                    <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#a0a0a0', textDecoration: 'none', fontSize: '0.85rem' }}>
                      <span style={{ color: 'var(--color-primary)' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                      </span>
                      Instagram
                    </a>
                    <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#a0a0a0', textDecoration: 'none', fontSize: '0.85rem' }}>
                      <span style={{ color: '#1877F2' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                      </span>
                      Facebook
                    </a>
                    <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#a0a0a0', textDecoration: 'none', fontSize: '0.85rem' }}>
                      <span style={{ color: '#FF0000' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.17 1 12 1 12s0 3.83.46 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.83 23 12 23 12s0-3.83-.46-5.58zM9.54 15.5v-7l6.58 3.5-6.58 3.5z"></path></svg>
                      </span>
                      YouTube
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div>
                <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '1rem', color: '#fff' }}>SEND A MESSAGE</h2>
                <ContactForm />
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer" style={{ borderTop: '1px solid #222', paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', position: 'relative' }}>
            <div style={{ display: 'flex', gap: '1rem', flex: 1, justifyContent: 'center' }}>
              <a href="#" style={{ padding: '0.4rem 1.2rem', borderRadius: '20px', background: '#222', color: '#a0a0a0', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 600 }}>CONTACT US</a>
              <a href="#" style={{ padding: '0.4rem 1.2rem', borderRadius: '20px', background: '#222', color: '#a0a0a0', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 600 }}>LICENSE</a>
              <a href="#" style={{ padding: '0.4rem 1.2rem', borderRadius: '20px', background: '#222', color: '#a0a0a0', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 600 }}>404</a>
            </div>
            <div style={{ position: 'absolute', right: 0 }}>
              <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#fff', color: '#000', padding: '0.4rem 0.4rem 0.4rem 1rem', borderRadius: '20px', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 700 }}>
                BACK TO TOP
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', border: '1px solid #000', borderRadius: '50%', fontSize: '0.8rem' }}>↑</span>
              </a>
            </div>
          </div>

          <div style={{ color: '#666', fontSize: '0.75rem' }}>
            &copy; 2026. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </>
  );
}
