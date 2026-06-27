"use client";

import React, { useState } from "react";
import FAQAccordion from "@/components/FAQAccordion";
import ContactForm from "@/components/ContactForm";
import AboutEliteAmenities from "@/components/AboutEliteAmenities";

export default function Pricing() {
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
          <a href="/" className="logo" onClick={closeMobileMenu}>
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
                <a href="/#about" className="nav-link">
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
                <a href="/#testimonials" className="nav-link">
                  TESTIMONIALS
                </a>
              </li>
              <li>
                <a href="/#faq" className="nav-link">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <a href="/#contact" className="header-cta">
              CONTACT US
            </a>
            <a href="/#contact" className="header-arrow-btn" aria-label="Contact us">
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
            <a href="/#about" className="mobile-nav-link" onClick={closeMobileMenu}>
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
            <a href="/#testimonials" className="mobile-nav-link" onClick={closeMobileMenu}>
              TESTIMONIALS
            </a>
          </li>
          <li>
            <a href="/#faq" className="mobile-nav-link" onClick={closeMobileMenu}>
              FAQ
            </a>
          </li>
          <li>
            <a href="/#contact" className="mobile-nav-link" onClick={closeMobileMenu}>
              CONTACT US
            </a>
          </li>
        </ul>
      </div>

      <main className="pricing-hero-wrapper">
        <div className="pricing-hero-grid">
          <div className="pricing-hero-left">
            <img src="/images/about/journey_logo.png" alt="Watermark" className="pricing-watermark" />

            <div className="pricing-hero-content">
              <div className="pricing-subtitle">Our Pricings</div>
              <h1 className="pricing-title-main">
                <span className="pricing-title-orange">Choose Your Plan.</span>
                <span className="pricing-title-white">Start Your Transformation.</span>
              </h1>
              <p className="pricing-hero-desc">
                Just simple, effective workouts tailored to your goals — guided by real people who care.
              </p>
            </div>
          </div>

          <div className="pricing-hero-right">
            <img src="/images/hero_athlete.png" alt="Athlete training" className="pricing-hero-image" />
            <div className="pricing-hero-overlay"></div>

            <div className="pricing-guarantee-block">
              <div className="pricing-guarantee-text">
                AFFORDABLE TRAINING<br />
                & EATING PLANS
              </div>
              <div className="pricing-guarantee-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path>
                  <polyline points="21 3 21 8 16 8"></polyline>
                </svg>
              </div>
              <div className="pricing-guarantee-text">
                14 DAY FREE RETURN<br />
                ON PURCHASE
              </div>
            </div>
          </div>
        </div>

        <div className="trusted-banner">
          <div className="trusted-banner-text">
            TRUSTED BY ENTERPRISE LEADERS:
          </div>
          <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ fontWeight: 800, fontSize: '1.25rem', color: '#666', letterSpacing: '-1px' }} className="trusted-logo">IPSUM</span>
            <span style={{ fontWeight: 900, fontSize: '1.25rem', color: '#666', letterSpacing: '2px' }} className="trusted-logo">LOCO</span>
            <span style={{ fontWeight: 400, fontSize: '1.25rem', color: '#666', fontStyle: 'italic' }} className="trusted-logo">logoipsum</span>
            <span style={{ fontWeight: 600, fontSize: '1.25rem', color: '#666' }} className="trusted-logo">logoipsum</span>
            <span style={{ fontWeight: 700, fontSize: '1.25rem', color: '#666', display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="trusted-logo">
              <div style={{ width: 14, height: 14, background: '#666', borderRadius: '50%' }}></div> logoipsum
            </span>
            <span style={{ fontWeight: 900, fontSize: '1.25rem', color: '#666' }} className="trusted-logo">LOGO</span>
          </div>
        </div>

        {/* Choose Your Journey Section */}
        <section className="journey-section">
          <div className="journey-header">
            <h2 className="journey-title">
              <span className="pricing-title-orange">Choose Your</span> <span className="pricing-title-white">Journey</span>
            </h2>
          </div>

          <div className="journey-content-wrapper">
            <div className="journey-left">
              <h3 className="journey-branch">
                <span className="pricing-title-orange" style={{ textTransform: 'capitalize' }}>Budegere</span> <span className="pricing-title-white">cross</span>
                <span className="branch-arrow">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </span>
              </h3>
              <div className="journey-sqft">6,500 SQ.FT</div>
              <p className="journey-desc">
                Phoenix Fitness offers flexible gym membership and personal training plans across our branches, designed to match your fitness goals, training needs, and lifestyle.
              </p>
            </div>

            <div className="journey-bottom-bar">
              <div className="journey-actions">
                <button className="btn-explore">
                  Explore <span className="icon-circle">↗</span>
                </button>
                <button className="btn-contact-outline">
                  Contact us <span className="icon-circle">▶</span>
                </button>
              </div>

              <div className="journey-indicators">
                <span className="indicator active"></span>
                <span className="indicator"></span>
                <span className="indicator"></span>
                <span className="indicator"></span>
                <span className="indicator"></span>
              </div>

              <div className="journey-contact-info">
                <div className="info-row">
                  <span className="info-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </span>
                  <span style={{ fontSize: '1.25rem', fontFamily: 'var(--font-headings)' }}>+91 9880 5372 97</span>
                </div>
                <div className="info-row">
                  <span className="info-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3" fill="var(--color-dark-bg)"></circle>
                    </svg>
                  </span>
                  <span>@SIRI HUB, First floor,<br />Near Coldman, Bommenahalli Village,<br />Bengaluru - 560049</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans Section */}
        <section className="pricing-plans-section">

          <button className="carousel-nav-btn left">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button className="carousel-nav-btn right">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          <div className="pricing-plans-header">
            <div className="plan-options-pill">PLAN OPTIONS</div>
            <h2 className="pricing-plans-title">Get started with our flexible<br />membership plans</h2>
            <div className="pricing-plans-subtitle">
              <span className="pricing-title-orange">@ Budegere</span> <span className="pricing-title-white">cross</span>
            </div>
            <p className="pricing-plans-desc">
              Phoenix Fitness offers flexible gym membership and personal training plans across our branches, designed to match your fitness goals, training needs, and lifestyle.
            </p>
          </div>

          <div className="plan-toggle-container">
            <div className="toggle-left">Membership Plans</div>
            <div className="toggle-separator-v"></div>
            <div className="toggle-right">Personal training plans</div>
          </div>

          <div className="pricing-cards-container">

            {/* Card 1: Basic */}
            <div className="pricing-card">
              <div className="card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                  <line x1="6" y1="1" x2="6" y2="4"></line>
                  <line x1="10" y1="1" x2="10" y2="4"></line>
                  <line x1="14" y1="1" x2="14" y2="4"></line>
                </svg>
              </div>
              <div className="card-title">Basic plan</div>
              <div className="card-subtitle">Join our fitness community today.</div>
              <div className="card-price">₹5000 <span className="price-period">/ MONTH</span></div>

              <button className="card-btn">
                CHOOSE THIS PLAN
                <span className="card-btn-icon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                </span>
              </button>

              <div className="card-subtext">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                One introductory personal training.
              </div>

              <ul className="card-features">
                <li><span className="feature-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle></svg></span> Access to gym equipment.</li>
                <li><span className="feature-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle></svg></span> Use of cardio machines.</li>
                <li><span className="feature-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle></svg></span> Access to free weights strength.</li>
                <li><span className="feature-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle></svg></span> Locker room and shower facilities.</li>
                <li><span className="feature-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle></svg></span> Personal fitness assessment.</li>
                <li><span className="feature-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle></svg></span> Basic group fitness classes yoga.</li>
              </ul>
            </div>

            {/* Card 2: Intermediate (Active) */}
            <div className="pricing-card pricing-card-active">
              <div className="card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18.5" cy="17.5" r="3.5"></circle>
                  <circle cx="5.5" cy="17.5" r="3.5"></circle>
                  <circle cx="15" cy="5" r="1"></circle>
                  <path d="M12 17.5V14l-3-3 4-3 2 3h2"></path>
                </svg>
              </div>
              <div className="card-title">Intermediate plan</div>
              <div className="card-subtitle">Join our fitness community today.</div>
              <div className="card-price">₹10000 <span className="price-period">/ 3 MONTH</span></div>

              <button className="card-btn">
                CHOOSE THIS PLAN
                <span className="card-btn-icon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                </span>
              </button>

              <div className="card-subtext">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                Access to fitness tracking app.
              </div>

              <ul className="card-features">
                <li><span className="feature-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></span> Full access to gym equipment.</li>
                <li><span className="feature-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></span> Cardio machines and strength.</li>
                <li><span className="feature-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></span> Unlimited group fitness classes.</li>
                <li><span className="feature-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></span> Locker room and shower facilities.</li>
                <li><span className="feature-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></span> Personalized fitness assessment.</li>
                <li><span className="feature-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></span> Nutrition guidance and meal plan.</li>
              </ul>
            </div>

            {/* Card 3: Advanced */}
            <div className="pricing-card">
              <div className="card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 16.5l-3 3 5 5 3-3"></path>
                  <path d="M17.5 7.5l3-3-5-5-3 3"></path>
                  <line x1="8" y1="16" x2="16" y2="8"></line>
                  <path d="M12 12l2-2 4 4-2 2-4-4z"></path>
                </svg>
              </div>
              <div className="card-title">Advanced plan</div>
              <div className="card-subtitle">Join our fitness community today.</div>
              <div className="card-price">₹20000 <span className="price-period">/ 12 MONTH</span></div>

              <button className="card-btn">
                CHOOSE THIS PLAN
                <span className="card-btn-icon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                </span>
              </button>

              <div className="card-subtext">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                Fitness tracking device detailed.
              </div>

              <ul className="card-features">
                <li><span className="feature-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle></svg></span> 24/7 full access to all gym equipment.</li>
                <li><span className="feature-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle></svg></span> Unlimited group fitness classes.</li>
                <li><span className="feature-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle></svg></span> Locker room, shower, and premium.</li>
                <li><span className="feature-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle></svg></span> Personalized fitness assessment.</li>
                <li><span className="feature-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle></svg></span> Weekly personal training sessions.</li>
                <li><span className="feature-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle></svg></span> Advanced strength and conditioning.</li>
              </ul>
            </div>
          </div>

          <div className="carousel-dots">
            <div className="carousel-dot active"></div>
            <div className="carousel-dot"></div>
            <div className="carousel-dot"></div>
            <div className="carousel-dot"></div>
            <div className="carousel-dot"></div>
          </div>
        </section>

        {/* Elite Amenities Section */}
        <AboutEliteAmenities />

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
                  Have a question? Want to visit?<br />
                  We're here to help you take the first step.
                </p>

                <div style={{ marginBottom: '2.5rem' }}>
                  <strong style={{ display: 'block', marginBottom: '1rem', color: '#fff', fontSize: '0.85rem' }}>Visit us:</strong>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>🇮🇳</span>
                      <p style={{ margin: 0, color: '#a0a0a0', fontSize: '0.85rem', lineHeight: '1.5' }}>
                        Hyperfit Studio, 2nd Floor, Main Street,<br />
                        Sector 12, Bangalore, India
                      </p>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>🇦🇪</span>
                      <p style={{ margin: 0, color: '#a0a0a0', fontSize: '0.85rem', lineHeight: '1.5' }}>
                        Hyperfit Studio, Office 304, Al Barsha Heights<br />
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
