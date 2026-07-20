import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import ContactBanner from '@/components/sections/contact/ContactBanner'
import AboutStats from '@/components/sections/about/AboutStats'
import ContactInfo from '@/components/sections/contact/ContactInfo'
import ContactTrialSection from '@/components/sections/contact/ContactTrialSection'
import ContactMapCta from '@/components/sections/contact/ContactMapCta'
import MarketingFooter from '@/components/sections/shared/MarketingFooter'

export const metadata: Metadata = {
  title: 'Contact Us | Phoenix Fitness',
  description:
    'Get in touch with Phoenix Fitness. Our team is ready to help you start your fitness journey with personalised training and expert guidance.',
  openGraph: {
    title: 'Contact Us | Phoenix Fitness',
    description:
      'Reach out to Phoenix Fitness â€” simple, effective workouts tailored to your goals, guided by real people who care.',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactBanner />
        <AboutStats />
        <ContactInfo />
        <ContactTrialSection />
        <ContactMapCta />
        {/* Phase 2: ContactFormSection, AboutFAQ, etc. */}
      </main>
      <MarketingFooter />
    </>
  )
}


