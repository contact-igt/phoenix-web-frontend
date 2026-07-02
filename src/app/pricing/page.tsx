import AboutStats from '@/components/sections/about/AboutStats'
import styles from './page.module.css'
import PricingAmenities from "@/components/sections/pricing/PricingAmenities"
import PricingBanner from "@/components/sections/pricing/PricingBanner"
import PricingJourney from "@/components/sections/pricing/PricingJourney"
import PricingPlans from "@/components/sections/pricing/PricingPlans"
import MarketingFooter from "@/components/sections/shared/MarketingFooter"
import Navbar from "@/components/layout/Navbar"
import AboutFAQ from '@/components/sections/about/AboutFAQ'
import AboutContact from '@/components/sections/about/AboutContact'

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className={styles["pricing-hero-wrapper"]}>
        <PricingBanner />
        <AboutStats />
        <PricingJourney />
        <PricingPlans />
        <PricingAmenities />
        <AboutFAQ />
        <AboutContact />
        {/* <PricingFAQ />
        <PricingContact /> */}
      </main>
      <MarketingFooter />
    </>
  )
}