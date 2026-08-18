'use client'

import { useRouter } from 'next/navigation'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { ArrowUpRight } from 'lucide-react'
import { submitForm } from '@/lib/formService'
import Reveal from '@/components/animation/Reveal'
import { DURATION } from '@/lib/animation/gsap'
import styles from './AboutContact.module.css'

const INITIAL_VALUES = {
  name: '',
  email: '',
  mobile: '',
  service: '',
  subject: '',
}

const contactSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(2, 'Name must be at least 2 characters.')
    .max(80, 'Name must be 80 characters or less.')
    .required('Please enter your name.'),
  email: Yup.string()
    .trim()
    .email('Please enter a valid email address.')
    .required('Please enter your email.'),
  mobile: Yup.string()
    .trim()
    .matches(/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/, 'Please enter a valid mobile number.')
    .min(10, 'Mobile number must be at least 10 digits.')
    .max(16, 'Mobile number must be 16 digits or less.')
    .required('Please enter your mobile number.'),
  service: Yup.string().trim().required('Please choose a service.'),
  subject: Yup.string()
    .trim()
    .min(2, 'Subject must be at least 2 characters.')
    .max(120, 'Subject must be 120 characters or less.')
    .required('Please enter a subject.'),
})

type ContactField = keyof typeof INITIAL_VALUES

export default function AboutContact() {
  const router = useRouter()

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: contactSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values, { setStatus }) => {
      setStatus(undefined)

      try {
        await submitForm('Contact Message', {
          name: values.name.trim(),
          email: values.email.trim(),
          mobile: values.mobile.trim(),
          service: values.service.trim(),
          subject: values.subject.trim(),
        })

        router.push('/thank-you')
      } catch (error) {
        setStatus({
          type: 'error',
          message: error instanceof Error ? error.message : 'Failed to submit form. Please try again.',
        })
      }
    },
  })

  const getFieldError = (name: ContactField) =>
    formik.touched[name] && formik.errors[name] ? formik.errors[name] : ''

  const getInputClassName = (name: ContactField) =>
    getFieldError(name) ? `${styles.input} ${styles.inputError}` : styles.input

  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* LEFT - Contact Info */}
        <Reveal as="div" className={styles.leftCol} variant="fade-left" duration={DURATION.section}>
          <h2 className={styles.heading}>Get in touch</h2>

          <p className={styles.tagline}>
            Have a question? Want to visit?<br />
            We&apos;re here to help you take the first step.
          </p>

          <div className={styles.block}>
            <p className={styles.blockLabel}>Visit us:</p>
            <a href="https://maps.app.goo.gl/ai7F1d4mRTH9ecns7" target="_blank" rel="noopener noreferrer" className={styles.address}>
              <span className={styles.flag}>IN</span>
              <span>
                Phoenix Fitness Kannamangala, SBR Gokulam,<br />
                6th Floor, Whitefield, Bengaluru-560067
              </span>
            </a>
          </div>

          <div className={styles.block}>
            <p className={styles.blockLabel}>
              Call or WhatsApp (Available 7 AM - 9 PM, all days):
            </p>
            <div className={styles.phones}>
              <a href="tel:+919880537297" className={styles.phonePill}>
                <span>IN</span>
                <span>+91 9880537297</span>
              </a>
            </div>
          </div>

          <div className={styles.block}>
            <p className={styles.blockLabel}>Follow us:</p>
            <div className={styles.socials}>
              <a href="https://www.instagram.com/phoenixfitness_bangalore/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span>Instagram</span>
              </a>
              <a href="https://www.facebook.com/phoenixfitnessbanglore/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span>Facebook</span>
              </a>
              <a href="https://www.youtube.com/channel/UC1q-dfQ2T2euEbMSeJ3_PBA" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                </svg>
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </Reveal>

        {/* RIGHT - Contact Form */}
        <Reveal as="div" className={styles.rightCol} variant="fade-right" duration={DURATION.section}>
          <h2 className={styles.heading}>Send a message</h2>

          <p className={styles.tagline}>
            We&apos;re here to support you on your fitness journey and answer
            any questions or concerns you may have.<br /><br />
            Feel free to get in touch with us through the following contact options.
          </p>

          <form className={styles.form} onSubmit={formik.handleSubmit} noValidate>
            <div className={styles.fieldFull}>
              <input
                className={getInputClassName('name')}
                type="text"
                name="name"
                placeholder="What&apos;s your name?"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                aria-invalid={Boolean(getFieldError('name'))}
                aria-describedby={getFieldError('name') ? 'about-name-error' : undefined}
                autoComplete="name"
              />
              {getFieldError('name') && <p id="about-name-error" className={styles.errorText}>{getFieldError('name')}</p>}
            </div>

            <div className={styles.fieldRow}>
              <div className={styles.fieldHalf}>
                <input
                  className={getInputClassName('email')}
                  type="email"
                  name="email"
                  placeholder="What&apos;s your email?"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  aria-invalid={Boolean(getFieldError('email'))}
                  aria-describedby={getFieldError('email') ? 'about-email-error' : undefined}
                  autoComplete="email"
                />
                {getFieldError('email') && <p id="about-email-error" className={styles.errorText}>{getFieldError('email')}</p>}
              </div>
              <div className={styles.fieldHalf}>
                <input
                  className={getInputClassName('mobile')}
                  type="tel"
                  name="mobile"
                  placeholder="What&apos;s your mobile number?"
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  aria-invalid={Boolean(getFieldError('mobile'))}
                  aria-describedby={getFieldError('mobile') ? 'about-mobile-error' : undefined}
                  autoComplete="tel"
                />
                {getFieldError('mobile') && <p id="about-mobile-error" className={styles.errorText}>{getFieldError('mobile')}</p>}
              </div>
            </div>

            <div className={styles.fieldFull}>
              <select
                className={`${getInputClassName('service')} ${styles.select}`}
                name="service"
                value={formik.values.service}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                aria-invalid={Boolean(getFieldError('service'))}
                aria-describedby={getFieldError('service') ? 'about-service-error' : undefined}
              >
                <option value="" disabled hidden>Choose our services</option>
                <option value="Personal Training">Personal Training</option>
                <option value="Group Classes">Group Classes</option>
                <option value="Membership">Membership</option>
                <option value="Nutrition Coaching">Nutrition Coaching</option>
                <option value="Other">Other</option>
              </select>
              {getFieldError('service') && <p id="about-service-error" className={styles.errorText}>{getFieldError('service')}</p>}
            </div>

            <div className={styles.fieldFull}>
              <input
                className={getInputClassName('subject')}
                type="text"
                name="subject"
                placeholder="Subject"
                value={formik.values.subject}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                aria-invalid={Boolean(getFieldError('subject'))}
                aria-describedby={getFieldError('subject') ? 'about-subject-error' : undefined}
              />
              {getFieldError('subject') && <p id="about-subject-error" className={styles.errorText}>{getFieldError('subject')}</p>}
            </div>

            {formik.status?.message && (
              <p className={styles.statusError}>{formik.status.message}</p>
            )}

            <div className={styles.formFooter}>
              <button type="submit" className={styles.sendBtn} disabled={formik.isSubmitting}>
                <span>{formik.isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <span className={styles.btnIcon}>
                  <ArrowUpRight size={18} strokeWidth={2} />
                </span>
              </button>
              <p className={styles.emailNote}>
                If you&apos;d rather get started with a mail - then write to us at{' '}
                <a href="mailto:info@phoenix-fitness.in" className={styles.emailLink}>
                  info@phoenix-fitness.in
                </a>
              </p>
            </div>
          </form>
        </Reveal>

      </div>
    </section>
  )
}