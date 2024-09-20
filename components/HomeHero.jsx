import React from 'react'
import VinForm from './VinForm'
import heroMobile from "@/images/hero-img.png"
import heroCar from "@/images/hero-bg-car.png"
import Image from 'next/image'

const HomeHero = () => {
    return (
        <section className='flex relative flex-col h-full items-start justify-between py-[80px] bg-gradient-to-b from-[#EEF8FC] to-[#E1F6FF]'>
            <Image src={heroCar} className='absolute right-0 top-0 bottom-[80px] m-auto h-[300px] w-[660px]'/>
            <div className='container mx-auto relative z-10 px-2 sm:px-6 lg:px-8'>
                <div className='flex justify-center items-center flex-wrap gap-5'>
                    <div className='flex-1'>
                        <h3 className='text-themeColor text-[25px] font-medium'>
                            Find cars audit by VIN numbers
                        </h3>
                        <h1 className='text-[#222] mt-5 leading-[1.1em] text-[65px] font-bold'>
                            Three easy steps <br/>to get your vehicle<br/> history report
                        </h1>
                        <div className='mt-[90px]'>
                            <VinForm/>
                        </div>
                    </div>
                    <div className='flex-initial'>
                        <Image src={heroMobile}
                        className='max-w-full'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeHero