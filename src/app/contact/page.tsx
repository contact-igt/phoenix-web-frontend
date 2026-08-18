import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import ContactBanner from '@/components/sections/contact/ContactBanner'
// import AboutStats from '@/components/sections/about/AboutStats'
import ContactInfo from '@/components/sections/contact/ContactInfo'
import ContactTrialSection, { type TrialFormValues } from '@/components/sections/contact/ContactTrialSection'
import ContactMapCta from '@/components/sections/contact/ContactMapCta'
import Footer from '@/components/layout/Footer'


type ContactPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}

function getFirstParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value
}

function cleanParam(value: string | string[] | undefined) {
  return getFirstParam(value)?.trim() || undefined
}

function buildTrialInitialValues(params: Record<string, string | string[] | undefined>) {
  const values: Partial<TrialFormValues> = {}

  const name = cleanParam(params.name)
  const phone = cleanParam(params.phone)
  const branch = cleanParam(params.branch)
  const time = cleanParam(params.time)
  const goal = cleanParam(params.goal)

  if (name) values.name = name
  if (phone) values.phone = phone
  if (branch) values.branch = branch
  if (time) values.time = time
  if (goal) values.goal = goal

  return values
}
export const metadata: Metadata = {
  title: 'Contact Us | Phoenix Fitness',
  description:
    'Get in touch with Phoenix Fitness. Our team is ready to help you start your fitness journey with personalised training and expert guidance.',
  openGraph: {
    title: 'Contact Us | Phoenix Fitness',
    description:
      'Reach out to Phoenix Fitness - simple, effective workouts tailored to your goals, guided by real people who care.',
    type: 'website',
  },
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = searchParams ? await searchParams : {}
  const trialInitialValues = buildTrialInitialValues(params)

  return (
    <>
      <Navbar />
      <main>
        <ContactBanner />
        {/* <AboutStats /> */}
        <ContactInfo />
        <ContactTrialSection initialValues={trialInitialValues} />
        <ContactMapCta />
        {/* Phase 2: ContactFormSection, AboutFAQ, etc. */}
      </main>
      <Footer />
    </>
  )
}

