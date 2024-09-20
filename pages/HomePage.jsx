import Faq from '@/components/Faq'
import HomeHero from '@/components/HomeHero'
import HowItWork from '@/components/HowItWork'
import KeyFeature from '@/components/KeyFeature'
import SaveDollars from '@/components/SaveDollars'
import Testimonials from '@/components/Testimonials'
import Trusted from '@/components/Trusted'
import React from 'react'

const HomePage = () => {
  return (
    <>
    <HomeHero/>
    {/* <Trusted/> */}
    <HowItWork/>
    <KeyFeature/>
    <Faq/>
    <Testimonials/>
    <SaveDollars/>
    </>
  )
}

export default HomePage