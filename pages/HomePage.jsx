import Faq from '@/components/Faq'
import HomeHero from '@/components/HomeHero'
import HowItWork from '@/components/HowItWork'
import KeyFeature from '@/components/KeyFeature'
import Testimonials from '@/components/Testimonials'
import Trusted from '@/components/Trusted'
import React from 'react'

const HomePage = () => {
  return (
    <>
    <HomeHero/>
    <Trusted/>
    <HowItWork/>
    <KeyFeature/>
    <Faq/>
    <Testimonials/>
    </>
  )
}

export default HomePage