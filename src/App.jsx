import Hero from './components/Hero'
import Navbar from './components/Navbar'
import  WhyLearnChinese  from './components/WhyLearnChinese'
import Courses from './components/Courses'
import  WhatYouGet  from './components/WhatYouGet'
import WhatsAppCommunity from './components/WhatsAppCommunity'
import WhatsAppCommunity from './components/ResourcesSection'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <WhyLearnChinese/>
      <ResourcesSection/>
      <Courses/>
      <WhatYouGet/>
      <WhatsAppCommunity/>
      <Footer/>
    </>
  )
}

export default App
