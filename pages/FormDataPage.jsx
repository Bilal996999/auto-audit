"use client"
import React from 'react'
import SectionHeading from '@/components/SectionHeading'
import Breadcrumb from '@/components/Breadcrumb'
import Link from 'next/link'
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline"

const FormDataPage = ({ vinNum }) => {

    // console.log(props)

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <Breadcrumb currentPage="Personal Information" />
            <section className='py-20'>
                <div className='container mx-auto px-2 sm:px-6 lg:px-8'>
                    <SectionHeading smallHeading="Personal Information" mainHeading="Fill The Form Below" />
                    <form onSubmit={handleSubmit} className='relative mt-10 max-w-prose mx-auto'>
                        <div className='flex justify-start items-start gap-6'>
                            <div className='flex-1 flex-col flex gap-6'>
                                <input type="text" className="h-14 rounded-2xl border border-[#99999981] indent-4 outline-none text-[16px] text-[#000]" placeholder="Enter Full Name" />
                                <input type="text" disabled value={vinNum} className="h-14 rounded-2xl border bg-stone-200 border-[#99999981] indent-4 outline-none text-[16px] text-[#000]" placeholder="Enter VIN Number" />
                                <input type="email" className="h-14 rounded-2xl border border-[#99999981] indent-4 outline-none text-[16px] text-[#000]" placeholder="Enter Email Address" />
                                <input type="tel" className="h-14 rounded-2xl border border-[#99999981] indent-4 outline-none text-[16px] text-[#000]" placeholder="Enter Phone Number" />
                                <small className='flex justify-start items-start gap-3'>
                                    <ExclamationTriangleIcon className='size-10' />
                                    Please be aware that you are about to proceed to the payment step. In the next few moments, you{"'"}ll be asked to enter your payment details to complete your purchase. 
                                    Once the payment is successfully processed, You will receive all the necessary details about the car you requested.</small>
                                <div className='flex justify-between items-center gap-5'>
                                    <Link href={'/'} className='text-center rounded-2xl border border-[#99999981] px-14 py-4 transition
                                    text-[20px] bg-white text-[#373535] hover:bg-[#222222] hover:text-[#fff] w-full'>
                                        Back to Home</Link>
                                    <button className='rounded-2xl px-14 py-4 transition
                                    text-[20px] bg-themeColor text-[#fff] hover:bg-[#527FF4] w-full'>
                                        Proceed to Payment</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default FormDataPage