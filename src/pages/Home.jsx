import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import ServicesSection from './ourServices'
import WhyChooseUs from '../components/Choose/WhyChooseUs'
 import Cilents from  '../components/OurCilents/Cilents'


const Home = () => {
  return (
    <div>
      <HeroSection/>
      <ServicesSection/>
      <WhyChooseUs/>
      <Cilents/>
    
    </div>
  )
}

export default Home
