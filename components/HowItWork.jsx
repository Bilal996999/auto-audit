import React from 'react'
import SectionHeading from './SectionHeading'
import HowItWorkBox from './HowItWorkBox'
import vinNumber from "@/images/how-it-work-1.png"
import payment from "@/images/how-it-work-2.png"
import download from "@/images/how-it-work-3.png"

const HowItWork = () => {
  return (
    <section className='py-[80px]'>
        <div className='container mx-auto px-2 sm:px-6 lg:px-8'>
            <SectionHeading 
            smallHeading="HOW IT WORKS?" 
            mainHeading="Make the process of checking your car easy"/>

            <div className='mt-20 flex justify-center items-center'>
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
                    title="Download Report" 
                    content="Download report of your vehicle audit" 
                />
            </div>
        </div>
    </section>
  )
}

export default HowItWork