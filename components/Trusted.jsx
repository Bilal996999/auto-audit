import React from 'react'
import trusted from "@/images/trusted.png"
import logo1 from "@/images/trusted-logo-1.png"
import logo2 from "@/images/trusted-logo-2.png"
import logo3 from "@/images/trusted-logo-3.png"
import logo4 from "@/images/trusted-logo-4.png"
import Image from 'next/image'

const Trusted = () => {
    return (
        <section className='py-5 bg-white'>
            <div className='container py-10 border-b-2 border-[#eee] mx-auto px-2 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-2 justify-stretch'>
                    <div className='flex justify-start items-center gap-8'>
                        <Image
                            src={trusted}
                            width={112}
                            height={52}
                        />
                        <h4 className='text-[16px] text-[#222] font-medium'>
                            Trusted by <span className='text-themeColor'>100,000+</span> <br/>customers around the globe
                        </h4>
                    </div>
                    <div className='flex justify-center items-center gap-8'>
                        <Image
                            src={logo1}
                        />
                        <Image
                            src={logo2}
                        />
                        <Image
                            src={logo3}
                        />
                        <Image
                            src={logo4}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Trusted