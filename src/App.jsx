import 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import AboutUs from './components/AboutUs'
import Testimonials from './components/Testimonials'
import Faqs from './components/Faqs'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="relative min-h-screen bg-[#fdf7f2] font-sans antialiased text-[#5a3b1f] selection:bg-[#e07a5f]/20 selection:text-[#e07a5f] scroll-smooth overflow-x-hidden">
      <Navbar />
      
      <main className="relative">
        <div id="hero">
          <Hero />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="why-us">
          <WhyChooseUs />
        </div>
        <div id="about">
          <AboutUs />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="faqs">
          <Faqs />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App