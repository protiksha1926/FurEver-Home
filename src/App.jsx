import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import Services from './components/services'
import WhyChooseUs from './components/whyChooseUS'
import AboutUs from './components/aboutUs'
const App = () => {
  return (
    <>
    <Navbar />
     <Hero />
     <Services />   
     <WhyChooseUs />
     <AboutUs />
     </>
  )
}

export default App