'use client'

import { useState } from 'react'
// import AboutStats from '@/components/sections/about/AboutStats'
import styles from './page.module.css'
import PricingAmenities from "@/components/sections/pricing/PricingAmenities"
import PricingBanner from "@/components/sections/pricing/PricingBanner"
import PricingJourney from "@/components/sections/pricing/PricingJourney"
import PricingPlans from "@/components/sections/pricing/PricingPlans"
import Footer from "@/components/layout/Footer"
import Navbar from "@/components/layout/Navbar"
import AboutFAQ from '@/components/sections/about/AboutFAQ'
import AboutContact from '@/components/sections/about/AboutContact'

export default function PricingPage() {
  const [selectedBranchIndex, setSelectedBranchIndex] = useState(0)
  const [isPricingPaused, setIsPricingPaused] = useState(false)

  return (
    <>
      <Navbar />
      <main className={styles["pricing-hero-wrapper"]}>
        <PricingBanner />
        {/* <AboutStats /> */}
        <PricingJourney onSelectBranch={setSelectedBranchIndex} isPaused={isPricingPaused} />
        <PricingPlans selectedBranchIndex={selectedBranchIndex} onSelectBranch={setSelectedBranchIndex} onHoverChange={setIsPricingPaused} />
        <PricingAmenities />
        <AboutFAQ />
        <AboutContact />
      </main>
      <Footer />
    </>
  )
}
