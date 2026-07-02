import Navbar from '../../components/layout/Navbar'
import AboutBanner from '../../components/sections/about/AboutBanner'
import AboutStats from '../../components/sections/about/AboutStats'
import AboutMissionVision from '../../components/sections/about/AboutMissionVision'
import AboutEliteAmenities from '../../components/sections/about/AboutEliteAmenities'
import AboutJourney from '../../components/sections/about/AboutJourney'
import AboutFAQ from '../../components/sections/about/AboutFAQ'
import AboutContact from '../../components/sections/about/AboutContact'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutBanner />
        <AboutStats />
        <AboutMissionVision />
        <AboutEliteAmenities />
        <AboutJourney />
        <AboutFAQ />
        <AboutContact />
      </main>
    </>
  )
}