'use client'

import Image from 'next/image'
import { Check, ChevronDown } from 'lucide-react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useRouter } from 'next/navigation'
import { submitForm } from '@/lib/formService'
import styles from './index.module.css'

const checklist = [
  'MEET THE TRAINER',
  'UNDERSTAND FACILITIES',
  'BODY ASSESSMENT',
  'DISCUSS GOALS',
  'EXPERIENCE TRAINING SESSION',
]

const INITIAL_VALUES = {
  name: '',
  phone: '',
  branch: 'Kannamangala',
  time: 'Morning (6am - 11am)',
  goal: '',
}

export type TrialFormValues = typeof INITIAL_VALUES

const trialSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(2, 'Full name must be at least 2 characters.')
    .max(80, 'Full name must be 80 characters or less.')
    .required('Please enter your full name.'),
  phone: Yup.string()
    .trim()
    .matches(/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/, 'Please enter a valid phone number.')
    .min(10, 'Phone number must be at least 10 digits.')
    .max(16, 'Phone number must be 16 digits or less.')
    .required('Please enter your phone number.'),
  branch: Yup.string().trim().required('Please choose your preferred branch.'),
  time: Yup.string().trim().required('Please choose a time slot.'),
  goal: Yup.string().trim().max(500, 'Fitness goal must be 500 characters or less.'),
})

type TrialFormField = keyof TrialFormValues

type ContactTrialSectionProps = {
  initialValues?: Partial<TrialFormValues>
}

export default function ContactTrialSection({ initialValues }: ContactTrialSectionProps) {
  const router = useRouter()
  const resolvedInitialValues = {
    ...INITIAL_VALUES,
    ...initialValues,
  }

  const formik = useFormik({
    initialValues: resolvedInitialValues,
    enableReinitialize: true,
    validationSchema: trialSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values, { resetForm, setStatus }) => {
      setStatus(undefined)

      try {
        await submitForm('Free Trial', {
          name: values.name.trim(),
          phone: values.phone.trim(),
          branch: values.branch.trim(),
          time: values.time.trim(),
          goal: values.goal.trim(),
        })

        resetForm()
        router.push('/thank-you')
      } catch (error) {
        setStatus({
          type: 'error',
          message: error instanceof Error ? error.message : 'Failed to submit form. Please try again.',
        })
      }
    },
  })

  const getFieldError = (name: TrialFormField) =>
    formik.touched[name] && formik.errors[name] ? formik.errors[name] : ''

  const getInputClassName = (name: TrialFormField) =>
    getFieldError(name) ? styles.inputError : undefined

  return (
    <section className={styles.section} aria-labelledby="contact-trial-title" id="contact-form">
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 id="contact-trial-title" className={styles.title}>
            <span>TAKE YOUR</span>
            <span>FIRST <strong>STEP TO</strong></span>
            <span><strong>FITNESS</strong> - FOR</span>
            <span>FREE!</span>
          </h2>

          <div className={styles.imageWrap}>
            <Image
              src="/images/contact/form_image.png"
              alt="Phoenix Fitness member training with dumbbells"
              fill
              sizes="(max-width: 992px) 100vw, 520px"
              className={styles.image}
            />
          </div>

          <p className={styles.description}>
            Experience Phoenix Fitness firsthand. No commitment, just pure performance.
            Join our community and discover what makes us different.
          </p>

          <ul className={styles.checklist} aria-label="Free trial includes">
            {checklist.map((item) => (
              <li key={item} className={styles.checkItem}>
                <span className={styles.checkIcon} aria-hidden="true">
                  <Check size={13} strokeWidth={3} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <form className={styles.formCard} onSubmit={formik.handleSubmit} noValidate>
          <div className={styles.field}>
            <label htmlFor="trial-name">FULL NAME</label>
            <input
              id="trial-name"
              name="name"
              type="text"
              placeholder="Enter your name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={getInputClassName('name')}
              aria-invalid={Boolean(getFieldError('name'))}
              aria-describedby={getFieldError('name') ? 'trial-name-error' : undefined}
              autoComplete="name"
            />
            {getFieldError('name') && <p id="trial-name-error" className={styles.errorText}>{getFieldError('name')}</p>}
          </div>

          <div className={styles.field}>
            <label htmlFor="trial-phone">PHONE NUMBER</label>
            <input
              id="trial-phone"
              name="phone"
              type="tel"
              placeholder="+91 00000 00000"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={getInputClassName('phone')}
              aria-invalid={Boolean(getFieldError('phone'))}
              aria-describedby={getFieldError('phone') ? 'trial-phone-error' : undefined}
              autoComplete="tel"
            />
            {getFieldError('phone') && <p id="trial-phone-error" className={styles.errorText}>{getFieldError('phone')}</p>}
          </div>

          <div className={styles.formGrid}>
            <div className={styles.field}>
              <label htmlFor="trial-branch">PREFERRED BRANCH</label>
              <div className={`${styles.selectWrap} ${getInputClassName('branch') || ''}`}>
                <select
                  id="trial-branch"
                  name="branch"
                  value={formik.values.branch}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  aria-invalid={Boolean(getFieldError('branch'))}
                  aria-describedby={getFieldError('branch') ? 'trial-branch-error' : undefined}
                >
                  <option>Kannamangala</option>
                  <option>Whitefield</option>
                  <option>Budigere</option>
                </select>
                <ChevronDown size={16} aria-hidden="true" />
              </div>
              {getFieldError('branch') && <p id="trial-branch-error" className={styles.errorText}>{getFieldError('branch')}</p>}
            </div>

            <div className={styles.field}>
              <label htmlFor="trial-time">TIME SLOT</label>
              <div className={`${styles.selectWrap} ${getInputClassName('time') || ''}`}>
                <select
                  id="trial-time"
                  name="time"
                  value={formik.values.time}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  aria-invalid={Boolean(getFieldError('time'))}
                  aria-describedby={getFieldError('time') ? 'trial-time-error' : undefined}
                >
                  <option>Morning (6am - 11am)</option>
                  <option>Afternoon (12pm - 4pm)</option>
                  <option>Evening (5pm - 10pm)</option>
                </select>
                <ChevronDown size={16} aria-hidden="true" />
              </div>
              {getFieldError('time') && <p id="trial-time-error" className={styles.errorText}>{getFieldError('time')}</p>}
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="trial-goal">FITNESS GOAL</label>
            <textarea
              id="trial-goal"
              name="goal"
              placeholder="What do you want to achieve?"
              value={formik.values.goal}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={getInputClassName('goal')}
              aria-invalid={Boolean(getFieldError('goal'))}
              aria-describedby={getFieldError('goal') ? 'trial-goal-error' : undefined}
            />
            {getFieldError('goal') && <p id="trial-goal-error" className={styles.errorText}>{getFieldError('goal')}</p>}
          </div>

          {formik.status?.message && (
            <p className={`${styles.statusMessage} ${formik.status.type === 'success' ? styles.statusSuccess : styles.statusError}`}>
              {formik.status.message}
            </p>
          )}

          <button type="submit" className={styles.submit} disabled={formik.isSubmitting}>
            {formik.isSubmitting ? 'SUBMITTING...' : 'BOOK MY FREE TRIAL'}
          </button>
        </form>
      </div>
    </section>
  )
}

