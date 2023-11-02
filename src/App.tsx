import './App.css'
import { ContactSection, FeatureSection, FooterSection, HeroSection, Navbar, PricingSection, TestimonialSection } from './components/LandingPage'

function App() {

  return (
    <main className="App">
      <Navbar/>
      <HeroSection/>
      <FeatureSection/>
      <TestimonialSection/>
      <PricingSection/>
      <ContactSection/>
      <FooterSection/>
    </main>
  )
}

export default App
