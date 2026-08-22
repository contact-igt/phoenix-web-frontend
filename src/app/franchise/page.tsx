import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import {
  FranchiseBanner,
  FranchiseProof,
  FranchiseOpportunity,
  FranchiseBenefits,
  FranchiseExperience,
  FranchiseDifference,
  FranchiseSupport,
  FranchisePartnerProfile,
  FranchiseLocation,
  FranchiseJourney,
  FranchiseLegacy,
  FranchiseFinalCta,
} from '@/components/sections/franchise/FranchiseSections'
import FranchiseForm from '@/components/sections/franchise/FranchiseForm'
import FranchiseFAQ from '@/components/sections/franchise/FranchiseFAQ'

export const metadata: Metadata = {
  title: 'Phoenix Fitness Franchise | Become a Franchise Partner',
  description:
    'Explore franchise partnership opportunities with Phoenix Fitness. Tell us your city, preferred location and business plans to start a conversation with our franchise team.',
}

export default function FranchisePage() {
  return (
    <>
      <Navbar />
      <main>
        <FranchiseBanner />
        <FranchiseProof />
        <FranchiseOpportunity />
        <FranchiseBenefits />
        <FranchiseExperience />
        <FranchiseDifference />
        <FranchiseSupport />
        <FranchisePartnerProfile />
        <FranchiseLocation />
        <FranchiseJourney />
        <FranchiseLegacy />
        <FranchiseForm />
        <FranchiseFAQ />
        <FranchiseFinalCta />
      </main>
      <Footer />
    </>
  )
}
