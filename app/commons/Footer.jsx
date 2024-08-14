"use client"
import React from 'react'
import logo from "@/images/logo.png"
import Image from 'next/image'
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline"
import socialIcons from "@/images/social-icons.png"
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='bg-[#EEF8FC] py-20'>
            <div className='container mx-auto px-2 sm:px-6 lg:px-8'>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
                    <div>
                        <Image src={logo} />
                        <ul className='list-none mt-16'>
                            <li className='text-[18px] flex justify-start items-center gap-2 my-5'>
                                <EnvelopeIcon className='size-5' />
                                <a href='mailto:connect@finefin.com' className='text-[#63657E] transition-colors hover:text-themeColor'>connect@finefin.com</a>
                            </li>
                            <li className='text-[18px] flex justify-start items-center gap-2 my-5'>
                                <PhoneIcon className='size-5' />
                                <a href='tel:548574367942' className='text-[#63657E] transition-colors hover:text-themeColor'>548 574 3679 42</a>
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
                                <Link href="/">Sample Report</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-[22px] font-medium'>
                            Pages
                        </h4>
                        <ul className='list-none mt-9'>
                            <li className='text-[18px] text-[#63657E] my-3'>
                                Terms and Condition
                            </li>
                            <li className='text-[18px] text-[#63657E] my-3'>
                                Privacy Policy
                            </li>
                            <li className='text-[18px] text-[#63657E] my-3'>
                                Refund Policy
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-[22px] font-medium'>
                            Our Address
                        </h4>
                        <ul className='list-none mt-12'>
                            <li className='text-[18px] text-[#63657E] my-2 mb-10'>
                                London{','} New area road 04{','} England
                            </li>
                            <Image
                                src={socialIcons}
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer