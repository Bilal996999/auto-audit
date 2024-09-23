import React, { useState } from 'react'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline"
import Image from 'next/image'
import socialIcons from "@/images/social-icons.png"
import FbIcon from "@/images/facebook-icon.png"
import InstaIcon from "@/images/instagram-icon.png"
import Link from 'next/link'

const ContactInfo = () => {
    


    return (
        <div className='p-10 bg-[#EEF8FC] lg:w-[40%] w-full rounded-xl lg:h-[647px] h-auto relative lg:mb-0 mb-10'>
            <h3 className='text-[28px] text-[#222] font-semibold'>
                Contact Information
            </h3>
            <p className='text-[#666] md:text-[18px] text-[15px]'>Say something to start a live chat!</p>
            <ul className='list-none md:mt-20 mt-10'>
                <li className='lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px] flex justify-start items-center gap-2 my-5'>
                    <EnvelopeIcon className='size-5' />
                    <a href='mailto:info@autoauditpro.com'>info@autoauditpro.com</a>
                </li>
                <li className='lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px] flex justify-start items-center gap-2 my-5'>
                    <PhoneIcon className='size-5' />
                    <a href='tel:4699430106'>469-943-0106</a>
                </li>
                <li className='lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px] flex justify-start items-center gap-2 my-5'>
                    <MapPinIcon className='size-5' />
                    <a href='#'>{'Worthington St, Dallas, TX 75204'}</a>
                </li>
            </ul>
            <div className='lg:absolute left-10 bottom-10 static lg:mt-0 mt-10'>
                <div className='flex justify-start items-center'>
                    <Link href={'https://www.facebook.com/autoauditpro'}><Image
                        src={FbIcon}
                        className='max-w-8'
                    /></Link>
                    <Link href={'https://www.instagram.com/autoauditpro/'}>
                        <Image
                            src={InstaIcon}
                            className='max-w-8'
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo