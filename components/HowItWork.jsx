import React from 'react'
import SectionHeading from './SectionHeading'
import HowItWorkBox from './HowItWorkBox'
import vinNumber from "@/images/how-it-work-1.png"
import payment from "@/images/how-it-work-2.png"
import download from "@/images/how-it-work-3.png"

const HowItWork = () => {
  return (
    <section className='md:pt-[80px] sm:pt-[50px] pt-[60px] md:pb-[80px] sm:pb-[50px] pb-[0px]'>
        <div className='container mx-auto px-2 sm:px-6 lg:px-8'>
            <SectionHeading 
            smallHeading="HOW IT WORKS?" 
            mainHeading="Three easy steps to get your vehicle history report"/>

            <div className='xl:mt-20 lg:mt-14 md:mt-12 mt-8 flex justify-center items-center md:flex-nowrap flex-wrap'>
                <HowItWorkBox 
                    image={vinNumber} 
                    title="Enter VIN Number" 
                    content="Enter VIN number in the search bar" 
                />
                <HowItWorkBox
                    image={payment} 
                    title="Verify Payment" 
                    content="Select payment method to proceed"
                    border={true}
                />
                <HowItWorkBox 
                    image={download} 
                    title="Email Report" 
                    content="Get your Report Via Email" 
                />
            </div>
        </div>
    </section>
  )
}

export default HowItWork