import MarketingFooter from "@/components/sections/shared/MarketingFooter"
import Navbar from "@/components/layout/Navbar"
import CardioTraining from "@/components/sections/services/CardioTraining"
import FunctionalTraining from "@/components/sections/services/FunctionalTraining"
import PersonalTraining from "@/components/sections/services/PersonalTraining"
import ServicesBanner from "@/components/sections/services/ServicesBanner"
import ServicesContact from "@/components/sections/services/ServicesContact"
import ServicesFAQ from "@/components/sections/services/ServicesFAQ"
import StrengthTraining from "@/components/sections/services/StrengthTraining"
import AboutStats from "@/components/sections/about/AboutStats"
import AboutFAQ from "@/components/sections/about/AboutFAQ"
import AboutContact from "@/components/sections/about/AboutContact"

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesBanner />
        <AboutStats />
        <StrengthTraining />
        <CardioTraining />
        <FunctionalTraining />
        <PersonalTraining />
        <AboutFAQ />
        <AboutContact />
        {/* <ServicesFAQ />
        <ServicesContact /> */}
      </main>
      <MarketingFooter />
    </>
  )
}