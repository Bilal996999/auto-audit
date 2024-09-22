import React from 'react'
import SectionHeading from './SectionHeading'
import VinForm from './VinForm'
import logo1 from "@/images/trusted-logo-1.png"
import logo2 from "@/images/trusted-logo-2.png"
import logo3 from "@/images/trusted-logo-3.png"
import Image from 'next/image'

const SaveDollars = () => {
    return (
        <section className='vin-section py-16'>
            <div className='container mx-auto px-2 sm:px-6 lg:px-8'>
                <div className='2xl:max-w-[55%] xl:max-w[70%] lg:max-w-[100%] ml-auto'>
                    <SectionHeading smallHeading="" mainHeading="Save Thousands of Dollars" />
                    <p className='text-[#999] lg:text-[20px] md:text-[18px] sm:text-[16px] text-center mt-3'>Learn everything there is to know about your next car.</p>
                    <div className='mt-12'>
                        <VinForm />
                        {/* <div className='flex justify-center items-center gap-8 mt-7'>
                        <Image
                            src={logo1}
                            height={40}
                        />
                        <Image
                            src={logo2}
                            height={40}
                        />
                        <Image
                            src={logo3}
                            height={40}
                        />
                    </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SaveDollars