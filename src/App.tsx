import './App.css'
import { ContactSection, FeatureSection, HeroSection, Navbar, PricingSection, TestimonialSection } from './components/LandingPage'

function App() {

  return (
    <main className="App">
      <Navbar/>
      <HeroSection/>
      <FeatureSection/>
      <TestimonialSection/>
      <PricingSection/>
      <ContactSection/>
    </main>
  )
}

export default App
