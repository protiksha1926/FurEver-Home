import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import Services from './components/services'
import WhyChooseUs from './components/whyChooseUS'
import AboutUs from './components/aboutUs'
import Testimonials from './components/testimonials'
import Faqs from './components/faqs'
import Footer from './components/footer'
const App = () => {
  return (
    <>
    <Navbar />
     <Hero />
     <Services />   
     <WhyChooseUs />
     <AboutUs />
     <Testimonials />
     <Faqs />
     <Footer />
     </>
  )
}

export default App