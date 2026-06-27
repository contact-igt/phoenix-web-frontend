import Navbar from '../components/layout/Navbar'
import HeroBanner from '../components/sections/home/HeroBanner'
import AboutSection from '../components/sections/home/AboutSection'
import ProgramsSection from '../components/sections/home/ProgramsSection'
import ChampionsSection from '../components/sections/home/ChampionsSection'
import FeaturesSection from '../components/sections/home/FeaturesSection'
import MilestonesSection from '../components/sections/home/MilestonesSection'
import TransformationStories from '../components/sections/home/TransformationStories'
import Contact from '../components/sections/home/Contact'
import Footer from '../components/layout/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroBanner />
        <AboutSection />
        <ProgramsSection />
        <ChampionsSection />
        <FeaturesSection />
        <MilestonesSection />
        <TransformationStories />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
