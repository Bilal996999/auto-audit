import React from 'react'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline"
import Image from 'next/image'
import socialIcons from "@/images/social-icons.png"

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
                    <a href='mailto:connect@finefin.com'>connect@finefin.com</a>
                </li>
                <li className='text-[18px] flex justify-start items-center gap-2 my-5'>
                    <PhoneIcon className='size-5' />
                    <a href='tel:548574367942'>548 574 3679 42</a>
                </li>
                <li className='text-[18px] flex justify-start items-center gap-2 my-5'>
                    <MapPinIcon className='size-5' />
                    <a href='#'>London, New area road 04, England</a>
                </li>
            </ul>
            <div className='absolute left-10 bottom-10'>
                <Image
                    src={socialIcons}
                />
            </div>
        </div>
    )
}

export default ContactInfo