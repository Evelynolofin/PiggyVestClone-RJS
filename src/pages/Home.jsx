import React from 'react'
import Hero from '../components/block/Hero'
import Security from '../components/block/Security'
import Savings from '../components/block/Savings'
import DiverseInvest from '../components/block/DiverseInvest'
import StoriesImg from '../components/block/StoriesImg'
import Footer from '../static/Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Security/>
      <Savings/>
      <DiverseInvest/>
      <StoriesImg/>
      <Footer/>
    </div>
  )
}

export default Home
