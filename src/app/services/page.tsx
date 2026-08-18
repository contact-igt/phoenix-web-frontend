import Footer from "@/components/layout/Footer"
import Navbar from "@/components/layout/Navbar"
import CardioTraining from "@/components/sections/services/CardioTraining"
import FunctionalTraining from "@/components/sections/services/FunctionalTraining"
import PersonalTraining from "@/components/sections/services/PersonalTraining"
import ServicesBanner from "@/components/sections/services/ServicesBanner"
import StrengthTraining from "@/components/sections/services/StrengthTraining"
// import AboutStats from "@/components/sections/about/AboutStats"
import AboutFAQ from "@/components/sections/about/AboutFAQ"
import AboutContact from "@/components/sections/about/AboutContact"

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesBanner />
        {/* <AboutStats /> */}
        <StrengthTraining />
        <CardioTraining />
        <FunctionalTraining />
        <PersonalTraining />
        <AboutFAQ />
        <AboutContact />
        {/* <ServicesFAQ />
        <ServicesContact /> */}
      </main>
      <Footer />
    </>
  )
}
