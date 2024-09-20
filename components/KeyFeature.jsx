import React from 'react'
import SectionHeading from './SectionHeading'
import KeyFeatureBox from './KeyFeatureBox'
import keyFeature1 from '@/images/key-feature-1.png'
import keyFeature2 from '@/images/key-feature-2.png'
import keyFeature3 from '@/images/key-feature-3.png'

const KeyFeature = () => {
  return (
    <section className='py-20 bg-gradient-to-b from-[#fff] to-[#E1F6FF]'>
        <div className='container mx-auto px-2 sm:px-6 lg:px-8'>
            <SectionHeading 
                smallHeading="KEY FEATURES & BENIFITS"
                mainHeading="Why Vehicle Report is your most 
                trusted source for car information?"
            />
            <div className='mt-14 grid grid-cols-3 gap-11'>
                <KeyFeatureBox 
                    image={keyFeature1} 
                    title="Master the "
                    title2="market"
                    content="Leverage precise car valuations and real-time data to avoid overpaying or underselling. Every day you wait could mean missing out on the deal of a lifetime."
                />
                <KeyFeatureBox 
                    image={keyFeature2} 
                    title="Full vehicle history in"
                    title2="one click"
                    content="Gain access to comprehensive local and international vehicle histories with just a click - don't let hidden surprises compromise your investment in a used car."
                />
                <KeyFeatureBox 
                    image={keyFeature3} 
                    title="Trust our data, not "
                    title2="your luck"
                    content="We're unbiased. Rely on our 100% reliable data for empowered decisions. Why risk regret when peace of mind is so affordable?"
                />
            </div>
        </div>
    </section>
  )
}

export default KeyFeature