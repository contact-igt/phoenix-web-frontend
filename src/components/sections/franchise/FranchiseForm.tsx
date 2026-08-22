'use client'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import { ChevronDown } from 'lucide-react'
import Reveal from '@/components/animation/Reveal'
import { submitForm } from '@/lib/formService'
import styles from './index.module.css'

const INITIAL_VALUES = {
  name: '',
  phone: '',
  email: '',
  city: '',
  state: '',
  locality: '',
  pincode: '',
  propertyStatus: '',
  propertyRelationship: '',
  propertyArea: '',
  propertyLocation: '',
  profession: '',
  businessExperience: '',
  fitnessExperience: '',
  fitnessExperienceDetails: '',
  investmentBudget: '',
  timeline: '',
  source: '',
  message: '',
  consent: false,
}

type FranchiseFormValues = typeof INITIAL_VALUES
type FranchiseField = keyof FranchiseFormValues

const franchiseSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(2, 'Full name must be at least 2 characters.')
    .max(80, 'Full name must be 80 characters or less.')
    .required('Please enter your full name.'),
  phone: Yup.string()
    .trim()
    .matches(/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/, 'Please enter a valid mobile or WhatsApp number.')
    .min(10, 'Phone number must be at least 10 digits.')
    .max(16, 'Phone number must be 16 digits or less.')
    .required('Please enter your mobile or WhatsApp number.'),
  email: Yup.string()
    .trim()
    .email('Please enter a valid email address.')
    .max(120, 'Email must be 120 characters or less.')
    .required('Please enter your email address.'),
  city: Yup.string().trim().min(2, 'City must be at least 2 characters.').max(80, 'City must be 80 characters or less.').required('Please enter your city.'),
  state: Yup.string().trim().min(2, 'State must be at least 2 characters.').max(80, 'State must be 80 characters or less.').required('Please enter your state.'),
  locality: Yup.string().trim().min(2, 'Locality must be at least 2 characters.').max(120, 'Locality must be 120 characters or less.').required('Please enter your preferred locality.'),
  pincode: Yup.string().trim().matches(/^[0-9]{0,10}$/, 'Please enter a valid PIN code.').max(10, 'PIN code must be 10 digits or less.'),
  propertyStatus: Yup.string().trim().required('Please select your property status.'),
  propertyRelationship: Yup.string().trim().max(80, 'Property relationship must be 80 characters or less.'),
  propertyArea: Yup.string().trim().max(80, 'Property area must be 80 characters or less.'),
  propertyLocation: Yup.string().trim().max(180, 'Property location must be 180 characters or less.'),
  profession: Yup.string().trim().max(120, 'Profession must be 120 characters or less.'),
  businessExperience: Yup.string().trim().max(80, 'Business experience must be 80 characters or less.'),
  fitnessExperience: Yup.string().trim().max(20, 'Fitness experience must be 20 characters or less.'),
  fitnessExperienceDetails: Yup.string().trim().max(500, 'Fitness experience details must be 500 characters or less.'),
  investmentBudget: Yup.string()
    .trim()
    .matches(/^[0-9,\s.]+$/, 'Please enter a valid budget amount.')
    .test('positive-budget', 'Budget must be greater than zero.', (value) => {
      if (!value) return false
      const number = Number(value.replace(/[\s,]/g, ''))
      return Number.isFinite(number) && number > 0
    })
    .max(40, 'Budget must be 40 characters or less.')
    .required('Please enter your approximate investment budget.'),
  timeline: Yup.string().trim().required('Please select when you would like to start.'),
  source: Yup.string().trim().max(80, 'Source must be 80 characters or less.'),
  message: Yup.string().trim().max(1000, 'Message must be 1000 characters or less.'),
  consent: Yup.boolean().oneOf([true], 'Please confirm that Phoenix Fitness may contact you.').required(),
})

function fieldId(name: FranchiseField) {
  return `franchise-${name}`
}

function errorId(name: FranchiseField) {
  return `${fieldId(name)}-error`
}

export default function FranchiseForm() {
  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: franchiseSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values, { resetForm, setStatus }) => {
      setStatus(undefined)

      try {
        await submitForm('Franchise Enquiry', {
          name: values.name.trim(),
          phone: values.phone.trim(),
          email: values.email.trim(),
          city: values.city.trim(),
          state: values.state.trim(),
          locality: values.locality.trim(),
          pincode: values.pincode.trim(),
          propertyStatus: values.propertyStatus.trim(),
          propertyRelationship: values.propertyRelationship.trim(),
          propertyArea: values.propertyArea.trim(),
          propertyLocation: values.propertyLocation.trim(),
          profession: values.profession.trim(),
          businessExperience: values.businessExperience.trim(),
          fitnessExperience: values.fitnessExperience.trim(),
          fitnessExperienceDetails: values.fitnessExperienceDetails.trim(),
          investmentBudget: values.investmentBudget.trim(),
          timeline: values.timeline.trim(),
          source: values.source.trim(),
          message: values.message.trim(),
          consent: values.consent ? 'Yes' : '',
        })

        resetForm()
        setStatus({
          type: 'success',
          message: 'THANK YOU. YOUR FRANCHISE ENQUIRY HAS BEEN RECEIVED.',
        })
      } catch (error) {
        setStatus({
          type: 'error',
          message: error instanceof Error ? error.message : 'Failed to submit form. Please try again.',
        })
      }
    },
  })

  const getFieldError = (name: FranchiseField) =>
    formik.touched[name] && formik.errors[name] ? String(formik.errors[name]) : ''

  const textInputProps = (name: FranchiseField) => ({
    id: fieldId(name),
    name,
    value: String(formik.values[name]),
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    className: getFieldError(name) ? styles.inputError : undefined,
    'aria-invalid': Boolean(getFieldError(name)),
    'aria-describedby': getFieldError(name) ? errorId(name) : undefined,
  })

  const renderError = (name: FranchiseField) =>
    getFieldError(name) ? <p id={errorId(name)} className={styles.errorText}>{getFieldError(name)}</p> : null

  return (
    <section id="franchise-form" className={styles.formSection} aria-labelledby="franchise-form-title">
      <div className={styles.formInner}>
        <Reveal as="div" className={styles.formIntro} variant="fade-left">
          <p className={styles.eyebrow}>BECOME A FRANCHISE PARTNER</p>
          <h2 id="franchise-form-title" className={styles.sectionTitle}>
            <span>LET&apos;S BUILD</span>
            <span className={styles.redText}>THE NEXT PHOENIX.</span>
          </h2>
          <p>
            Tell us about yourself, your preferred market and the opportunity you have in mind. Our team will review your
            enquiry and connect with you regarding the next step.
          </p>
        </Reveal>

        <Reveal as="form" className={styles.franchiseForm} variant="fade-right" onSubmit={formik.handleSubmit} noValidate>
          {formik.status?.type === 'success' ? (
            <div className={styles.successState} role="status">
              <h3>{formik.status.message}</h3>
              <p>Our team will review the details you submitted and contact you regarding the next step.</p>
              <button type="button" className={styles.submitButton} onClick={() => formik.setStatus(undefined)}>
                SUBMIT ANOTHER ENQUIRY
              </button>
            </div>
          ) : (
            <>
              <div className={styles.formGrid}>
                <Field label="Full Name *" error={renderError('name')}>
                  <input type="text" placeholder="Enter your full name" autoComplete="name" {...textInputProps('name')} />
                </Field>
                <Field label="Mobile / WhatsApp Number *" error={renderError('phone')}>
                  <input type="tel" placeholder="+91 00000 00000" autoComplete="tel" {...textInputProps('phone')} />
                </Field>
                <Field label="Email *" error={renderError('email')}>
                  <input type="email" placeholder="you@example.com" autoComplete="email" {...textInputProps('email')} />
                </Field>
                <Field label="City *" error={renderError('city')}>
                  <input type="text" placeholder="City" autoComplete="address-level2" {...textInputProps('city')} />
                </Field>
                <Field label="State *" error={renderError('state')}>
                  <input type="text" placeholder="State" autoComplete="address-level1" {...textInputProps('state')} />
                </Field>
                <Field label="Preferred Locality / Area *" error={renderError('locality')}>
                  <input type="text" placeholder="Preferred locality or area" {...textInputProps('locality')} />
                </Field>
                <Field label="PIN Code" error={renderError('pincode')}>
                  <input type="text" inputMode="numeric" placeholder="PIN code" autoComplete="postal-code" {...textInputProps('pincode')} />
                </Field>
                <Field label="Do you already have a property? *" error={renderError('propertyStatus')}>
                  <Select name="propertyStatus" value={formik.values.propertyStatus} onChange={formik.handleChange} onBlur={formik.handleBlur} error={Boolean(getFieldError('propertyStatus'))}>
                    <option value="">Select</option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Currently searching</option>
                  </Select>
                </Field>
              </div>

              {formik.values.propertyStatus === 'Yes' && (
                <div className={styles.formGrid}>
                  <Field label="Property Relationship" error={renderError('propertyRelationship')}>
                    <Select name="propertyRelationship" value={formik.values.propertyRelationship} onChange={formik.handleChange} onBlur={formik.handleBlur} error={Boolean(getFieldError('propertyRelationship'))}>
                      <option value="">Select</option>
                      <option>Owned</option>
                      <option>Leased</option>
                      <option>Under negotiation</option>
                    </Select>
                  </Field>
                  <Field label="Approximate Usable Area" error={renderError('propertyArea')}>
                    <input type="text" placeholder="e.g. 6500 sq. ft." {...textInputProps('propertyArea')} />
                  </Field>
                  <Field label="Property Location" error={renderError('propertyLocation')}>
                    <input type="text" placeholder="Property address or landmark" {...textInputProps('propertyLocation')} />
                  </Field>
                </div>
              )}

              <div className={styles.formGrid}>
                <Field label="Current Profession / Business" error={renderError('profession')}>
                  <input type="text" placeholder="Your profession or business" {...textInputProps('profession')} />
                </Field>
                <Field label="Business Experience" error={renderError('businessExperience')}>
                  <Select name="businessExperience" value={formik.values.businessExperience} onChange={formik.handleChange} onBlur={formik.handleBlur} error={Boolean(getFieldError('businessExperience'))}>
                    <option value="">Select</option>
                    <option>Existing business owner</option>
                    <option>Investor</option>
                    <option>Fitness industry professional</option>
                    <option>Corporate professional</option>
                    <option>Entrepreneur / first business</option>
                    <option>Other</option>
                  </Select>
                </Field>
                <Field label="Previous Fitness / Gym Business Experience" error={renderError('fitnessExperience')}>
                  <Select name="fitnessExperience" value={formik.values.fitnessExperience} onChange={formik.handleChange} onBlur={formik.handleBlur} error={Boolean(getFieldError('fitnessExperience'))}>
                    <option value="">Select</option>
                    <option>Yes</option>
                    <option>No</option>
                  </Select>
                </Field>
                {formik.values.fitnessExperience === 'Yes' && (
                  <Field label="Fitness Experience Details" error={renderError('fitnessExperienceDetails')}>
                    <textarea placeholder="Tell us about your fitness or gym business experience." {...textInputProps('fitnessExperienceDetails')} />
                  </Field>
                )}
                <Field label="Approximate Investment Budget *" error={renderError('investmentBudget')}>
                  <input type="text" inputMode="decimal" placeholder="e.g. Rs 50,00,000" {...textInputProps('investmentBudget')} />
                </Field>
                <Field label="When would you like to start? *" error={renderError('timeline')}>
                  <Select name="timeline" value={formik.values.timeline} onChange={formik.handleChange} onBlur={formik.handleBlur} error={Boolean(getFieldError('timeline'))}>
                    <option value="">Select</option>
                    <option>Immediately</option>
                    <option>Within 3 months</option>
                    <option>3-6 months</option>
                    <option>6-12 months</option>
                    <option>Currently exploring</option>
                  </Select>
                </Field>
                <Field label="How did you hear about Phoenix Fitness?" error={renderError('source')}>
                  <Select name="source" value={formik.values.source} onChange={formik.handleChange} onBlur={formik.handleBlur} error={Boolean(getFieldError('source'))}>
                    <option value="">Select</option>
                    <option>Existing Phoenix member</option>
                    <option>Friend / referral</option>
                    <option>Instagram</option>
                    <option>Facebook</option>
                    <option>Google</option>
                    <option>YouTube</option>
                    <option>Visited a Phoenix branch</option>
                    <option>Other</option>
                  </Select>
                </Field>
              </div>

              <Field label="Tell us about the opportunity" error={renderError('message')}>
                <textarea
                  placeholder="Tell us about your city, preferred location, property, business background or anything else our franchise team should know."
                  {...textInputProps('message')}
                />
              </Field>

              <div className={styles.checkboxField}>
                <input
                  id={fieldId('consent')}
                  name="consent"
                  type="checkbox"
                  checked={formik.values.consent}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  aria-invalid={Boolean(getFieldError('consent'))}
                  aria-describedby={getFieldError('consent') ? errorId('consent') : undefined}
                />
                <label htmlFor={fieldId('consent')}>
                  I agree that Phoenix Fitness may contact me by phone, WhatsApp or email regarding my franchise enquiry.
                </label>
              </div>
              {renderError('consent')}

              {formik.status?.message && (
                <p className={`${styles.statusMessage} ${styles.statusError}`} role="alert">
                  {formik.status.message}
                </p>
              )}

              <button type="submit" className={styles.submitButton} disabled={formik.isSubmitting}>
                {formik.isSubmitting ? 'SUBMITTING...' : 'SUBMIT FRANCHISE ENQUIRY'}
              </button>
            </>
          )}
        </Reveal>
      </div>
    </section>
  )
}

function Field({ label, children, error }: { label: string; children: React.ReactNode; error?: React.ReactNode }) {
  const childProps = (children as { props?: { id?: string; name?: FranchiseField } }).props
  const htmlFor = childProps?.id || (childProps?.name ? fieldId(childProps.name) : undefined)

  return (
    <div className={styles.field}>
      <label htmlFor={htmlFor}>{label}</label>
      {children}
      {error}
    </div>
  )
}

function Select({
  name,
  value,
  onChange,
  onBlur,
  error,
  children,
}: {
  name: FranchiseField
  value: string
  onChange: React.ChangeEventHandler<HTMLSelectElement>
  onBlur: React.FocusEventHandler<HTMLSelectElement>
  error: boolean
  children: React.ReactNode
}) {
  return (
    <div className={`${styles.selectWrap} ${error ? styles.inputError : ''}`}>
      <select
        id={fieldId(name)}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        aria-invalid={error}
        aria-describedby={error ? errorId(name) : undefined}
      >
        {children}
      </select>
      <ChevronDown size={16} aria-hidden="true" />
    </div>
  )
}
