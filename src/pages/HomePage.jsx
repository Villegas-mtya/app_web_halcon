import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import TeamSection from '../components/TeamSection'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import { featureCards, navigationLinks, teamCards } from '../data/mockData'

function HomePage() {
  return (
    <div className="app-shell">
      <Header links={navigationLinks} />
      <main>
        <HeroSection />
        <FeaturesSection items={featureCards} />
        <TeamSection members={teamCards} />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
