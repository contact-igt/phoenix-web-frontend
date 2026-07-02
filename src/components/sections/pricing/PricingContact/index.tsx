import styles from './index.module.css'
import ContactForm from "@/components/ContactForm"

export default function PricingContact() {
  return (
        <section id="contact" className={styles["contact-section"]} style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
          <div className={styles["container"]}>
            <div className={styles["contact-grid"]} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>

              {/* Left Column */}
              <div className={styles["contact-details"]}>
                <h2 className={styles["section-title"]} style={{ fontSize: '2rem', marginBottom: '1rem', color: '#fff' }}>GET IN TOUCH</h2>
                <p className={styles["contact-desc"]} style={{ color: '#a0a0a0', fontSize: '0.85rem', marginBottom: '3rem', maxWidth: '300px' }}>
                  Have a question? Want to visit?<br />
                  We're here to help you take the first step.
                </p>

                <div style={{ marginBottom: '2.5rem' }}>
                  <strong style={{ display: 'block', marginBottom: '1rem', color: '#fff', fontSize: '0.85rem' }}>Visit us:</strong>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>????</span>
                      <p style={{ margin: 0, color: '#a0a0a0', fontSize: '0.85rem', lineHeight: '1.5' }}>
                        Hyperfit Studio, 2nd Floor, Main Street,<br />
                        Sector 12, Bangalore, India
                      </p>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>????</span>
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
                      <span style={{ fontSize: '1rem' }}>????</span> +91 12345 67890
                    </a>
                    <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1px solid #333', padding: '0.4rem 1rem', borderRadius: '20px', color: '#a0a0a0', textDecoration: 'none', fontSize: '0.8rem' }}>
                      <span style={{ fontSize: '1rem' }}>????</span> +91 12345 67890
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
                <h2 className={styles["section-title"]} style={{ fontSize: '2rem', marginBottom: '1rem', color: '#fff' }}>SEND A MESSAGE</h2>
                <ContactForm />
              </div>

            </div>
          </div>
        </section>
  )
}
