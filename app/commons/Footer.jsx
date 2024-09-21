"use client"
import React from 'react'
import logo from "@/images/logo.png"
import Image from 'next/image'
import { EnvelopeIcon, PhoneIcon,MapPinIcon } from "@heroicons/react/24/outline"
import FbIcon from "@/images/facebook-icon.png"
import InstaIcon from "@/images/instagram-icon.png"
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='bg-[#EEF8FC] py-20 my-footer'>
            <div className='container mx-auto px-2 sm:px-6 lg:px-8'>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
                    <div>
                        <Image src={logo} />
                        <ul className='list-none mt-16'>
                            <li className='text-[18px] flex justify-start items-center gap-2 my-5'>
                                <EnvelopeIcon className='size-5' />
                                <a href='mailto:info@autoauditpro.com' className='text-[#63657E] transition-colors hover:text-themeColor'>info@autoauditpro.com</a>
                            </li>
                            <li className='text-[18px] flex justify-start items-center gap-2 my-5'>
                                <PhoneIcon className='size-5' />
                                <a href='tel:4699430106' className='text-[#63657E] transition-colors hover:text-themeColor'>469-943-0106</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-[22px] font-medium'>
                            Quick Links
                        </h4>
                        <ul className='list-none mt-9'>
                            <li className='text-[18px] text-[#63657E] my-3 transition-colors hover:text-themeColor'>
                                <Link href="/">Home</Link>
                            </li>
                            <li className='text-[18px] text-[#63657E] my-3 transition-colors hover:text-themeColor'>
                                <Link href="/about-us">About Us</Link>
                            </li>
                            <li className='text-[18px] text-[#63657E] my-3 transition-colors hover:text-themeColor'>
                                <Link href="/contact-us">Contact Us</Link>
                            </li>
                            <li className='text-[18px] text-[#63657E] my-3 transition-colors hover:text-themeColor'>
                                <Link href="/sample-report">Sample Report</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-[22px] font-medium'>
                            Pages
                        </h4>
                        <ul className='list-none mt-9'>
                            <li className='text-[18px] text-[#63657E] my-3 transition-colors hover:text-themeColor'>
                                <Link href="/terms-and-condition">Terms and Condition</Link>
                            </li>
                            <li className='text-[18px] text-[#63657E] my-3 transition-colors hover:text-themeColor'>
                                <Link href="/privacy-policy">Privacy Policy</Link>
                            </li>
                            <li className='text-[18px] text-[#63657E] my-3 transition-colors hover:text-themeColor'>
                                <Link href="/refund-policy">Refund Policy</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-[22px] font-medium'>
                            Our Address
                        </h4>
                        <ul className='list-none mt-12'>
                            <li className='text-[18px] text-[#63657E] my-2 mb-10'>
                                <div className='flex items-center justify-start gap-2'>
                                    <MapPinIcon className='size-5' />{'Worthington St, Dallas, TX 75204'}
                                </div>
                            </li>
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
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer