import React from 'react'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline"
import Image from 'next/image'
import socialIcons from "@/images/social-icons.png"
import FbIcon from "@/images/facebook-icon.png"
import InstaIcon from "@/images/instagram-icon.png"

const ContactInfo = () => {
    return (
        <div className='p-10 bg-[#EEF8FC] w-[40%] rounded-xl h-[647px] relative'>
            <h3 className='text-[28px] text-[#222] font-semibold'>
                Contact Information
            </h3>
            <p className='text-[#666] text-[18px]'>Say something to start a live chat!</p>
            <ul className='list-none mt-20'>
                <li className='text-[18px] flex justify-start items-center gap-2 my-5'>
                    <EnvelopeIcon className='size-5' />
                    <a href='mailto:info@autoauditpro.com'>info@autoauditpro.com</a>
                </li>
                <li className='text-[18px] flex justify-start items-center gap-2 my-5'>
                    <PhoneIcon className='size-5' />
                    <a href='tel:4699430106'>469-943-0106</a>
                </li>
                <li className='text-[18px] flex justify-start items-center gap-2 my-5'>
                    <MapPinIcon className='size-5' />
                    <a href='#'>{'Worthington St, Dallas, TX 75204'}</a>
                </li>
            </ul>
            <div className='absolute left-10 bottom-10'>
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