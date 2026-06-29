'use client'
import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import styles from './AboutContact.module.css'

export default function AboutContact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    service: '',
    subject: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* LEFT — Contact Info */}
        <div className={styles.leftCol}>
          <h2 className={styles.heading}>Get in touch</h2>

          <p className={styles.tagline}>
            Have a question? Want to visit?<br />
            We&apos;re here to help you take the first step.
          </p>

          {/* Addresses */}
          <div className={styles.block}>
            <p className={styles.blockLabel}>Visit us:</p>
            <div className={styles.address}>
              <span className={styles.flag}>🇮🇳</span>
              <span>
                Hyperfit Studio, 2nd Floor, Main Street,<br />
                Sector 12, Bangalore, India
              </span>
            </div>
            <div className={styles.address}>
              <span className={styles.flag}>🇦🇪</span>
              <span>
                Hyperfit Studio, Office 304,<br />
                Dubai, United Arab Emirates
              </span>
            </div>
          </div>

          {/* Phone */}
          <div className={styles.block}>
            <p className={styles.blockLabel}>
              Call or WhatsApp (Available 7 AM — 9 PM, all days):
            </p>
            <div className={styles.phones}>
              <a href="tel:+911234567890" className={styles.phonePill}>
                <span>🇮🇳</span>
                <span>+91 12345 67890</span>
              </a>
              <a href="tel:+971123456789" className={styles.phonePill}>
                <span>🇦🇪</span>
                <span>+91 12345 67890</span>
              </a>
            </div>
          </div>

          {/* Socials */}
          <div className={styles.block}>
            <p className={styles.blockLabel}>Follow us:</p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span>Instagram</span>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span>Facebook</span>
              </a>
              <a href="#" className={styles.socialLink} aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                </svg>
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT — Contact Form */}
        <div className={styles.rightCol}>
          <h2 className={styles.heading}>Send a message</h2>

          <p className={styles.tagline}>
            We&apos;re here to support you on your fitness journey and answer
            any questions or concerns you may have.<br /><br />
            Feel free to get in touch with us through the following contact options.
          </p>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            {/* Name */}
            <div className={styles.fieldFull}>
              <input
                className={styles.input}
                type="text"
                name="name"
                placeholder="What's your name?"
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
              />
            </div>

            {/* Email + Mobile */}
            <div className={styles.fieldRow}>
              <div className={styles.fieldHalf}>
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  placeholder="What's your email?"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
              </div>
              <div className={styles.fieldHalf}>
                <input
                  className={styles.input}
                  type="tel"
                  name="mobile"
                  placeholder="What's your mobile number?"
                  value={form.mobile}
                  onChange={handleChange}
                  autoComplete="tel"
                />
              </div>
            </div>

            {/* Service */}
            <div className={styles.fieldFull}>
              <select
                className={`${styles.input} ${styles.select}`}
                name="service"
                value={form.service}
                onChange={handleChange}
              >
                <option value="" disabled hidden>Choose our services</option>
                <option value="personal-training">Personal Training</option>
                <option value="group-classes">Group Classes</option>
                <option value="membership">Membership</option>
                <option value="nutrition">Nutrition Coaching</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Subject */}
            <div className={styles.fieldFull}>
              <input
                className={styles.input}
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
              />
            </div>

            {/* Submit */}
            <div className={styles.formFooter}>
              <button type="submit" className={styles.sendBtn}>
                <span>Send Message</span>
                <span className={styles.btnIcon}>
                  <ArrowUpRight size={18} strokeWidth={2} />
                </span>
              </button>
              <p className={styles.emailNote}>
                If you&apos;d rather get started with a mail — then write to us at{' '}
                <a href="mailto:hello@phoenixfitness.com" className={styles.emailLink}>
                  hello@phoenixfitness.com
                </a>
              </p>
            </div>
          </form>
        </div>

      </div>
    </section>
  )
}
