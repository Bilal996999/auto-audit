import React from 'react'
import VinForm from './VinForm'
import heroMobile from "@/images/hero-img.png"
import heroCar from "@/images/hero-bg-car.png"
import Image from 'next/image'

const HomeHero = () => {
    return (
        <section className='flex relative flex-col h-full items-start justify-between py-[80px] bg-gradient-to-b from-[#EEF8FC] to-[#E1F6FF]'>
            <Image src={heroCar} className='absolute right-0 top-0 bottom-[80px] m-auto 
            2xl:h-[300px] 2xl:w-[660px]
            xl:h-[280px] xl:w-[560px]
            lg:h-[260px] lg:w-[500px]
            md:h-[250px] md:w-[440px]
            '/>
            <div className='container mx-auto relative z-10 px-2 sm:px-6 lg:px-8'>
                <div className='flex justify-center md:flex-row flex-col-reverse items-center flex-wrap gap-5'>
                    <div className='flex-1 md:pt-0 pt-10 md:text-left text-center w-full'>
                        <h3 className='text-themeColor 2xl:text-[25px] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[16px] font-medium'>
                            Find cars audit by VIN numbers
                        </h3>
                        <h1 className='text-[#222] mt-5 leading-[1.1em] 2xl:text-[65px] xl:text-[55px] lg:text-[50px] md:text-[42px] sm:text-[35px] text-[30px] font-bold'>
                            Sell your vehicle <br/>
                            easily by checking <br/>
                            {"it's history report"}
                        </h1>
                        <div className='2xl:mt-[90px] xl:mt-[70px] lg:mt-[50px] mt-[30px]'>
                            <VinForm/>
                        </div>
                    </div>
                    <div className='flex-initial'>
                        <Image src={heroMobile}
                        className='max-w-full md:h-full h-[470px]'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeHero