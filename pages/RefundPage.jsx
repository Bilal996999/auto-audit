"use client"
import React from 'react'
import FloatVinCard from "@/components/FloatVinCard"
import Breadcrumb from '@/components/Breadcrumb'
import refundCar from "@/images/refund-img.png"
import Image from 'next/image'

const RefundPage = () => {


    const handleSubmit = (e) => {
        e.preventDefault()
    }


    return (
        <>
            <Breadcrumb currentPage="Refund Policy" />
            <section className='mb-24 relative'>
                <div className='container mx-auto relative z-10 px-2 sm:px-6 lg:px-8'>
                    <div className='flex justify-between items-start gap-16 relative'>
                        <div className='w-[70%]'>
                            <h1 className='text-[44px] font-bold leading-[1em] mt-10 mb-7'>
                                Refund Policy
                            </h1>

                            <h2 className='text-[32px] font-medium leading-[1em] mt-12 mb-7'>
                                Thank you for choosing Auto Audit PRO VIN!
                            </h2>
                            <p className='text-[20px] text-[#666]'>
                                Please be aware that relying on any vehicle history report when purchasing a vehicle is at your own risk. We cannot be held liable for any purchases made based on our reports.
                            </p><br />
                            <p className='text-[20px] text-[#666]' >
                                A refund may be issued only if the following conditions are met:
                            </p><br />
                            <ol className='text-[20px] text-[#666] list-decimal pl-6'>
                                <li>
                                    The refund request is made within 14 days of the purchase.
                                </li>
                                <li>
                                    The reason for the refund is considered valid according to our policy.
                                </li>
                            </ol>

                            {/* ======================================================================= */}

                            <h2 className='text-[32px] font-medium leading-[1em] mt-12 mb-7'>
                                Valid Reasons for a Refund Include:
                            </h2>
                            <ul className='text-[20px] text-[#666] list-disc pl-6'>
                                <li>
                                    Receiving an empty report.
                                </li>
                                <li>
                                    Being charged twice for the same report.
                                </li>
                            </ul><br />

                            {/* ======================================================================= */}

                            <h2 className='text-[32px] font-medium leading-[1em] mt-12 mb-7'>
                                Invalid Reasons for a Refund Include
                            </h2>
                            <ul className='text-[20px] text-[#666] list-disc pl-6'>
                                <li>
                                    Inaccuracies in the report.
                                </li>
                                <li>
                                    Incomplete report.
                                </li>
                                <li>
                                    Delays in receiving the report.
                                </li>
                                <li>
                                    Failing to cancel the subscription before the renewal date.
                                </li>
                            </ul><br />
                            <p className='text-[20px] text-[#666]'>
                                Please be aware that the monthly fee and subscription terms are clearly stated before purchase, and these terms are also detailed on the purchase page and in our terms and conditions. If the subscription was not canceled before the next billing cycle, this does not qualify as a valid reason for a refund.
                            </p><br />
                            <p className='text-[20px] text-[#666]'>
                                If you believe your refund request is valid, please complete the form below with the necessary details or email the following information to info@autoauditprovin.com:
                            </p><br />
                            <p className='text-[20px] text-[#666]'>
                                Email Subject: Refund Request
                            </p><br/>
                            <ul className='text-[20px] text-[#666] list-disc pl-6'>
                                <li>
                                Your Email
                                </li>
                                <li>
                                Vehicle VIN Number
                                </li>
                                <li>
                                Reason for Refund
                                </li>
                                <li>
                                Your First Name
                                </li>
                                <li>
                                Your Last Name
                                </li>
                                <li>
                                Date of Purchase
                                </li>
                                <li>
                                Payment Method
                                </li>
                                <li>
                                PayPal Transaction ID or Last 4 Digits of Your Credit/Debit Card
                                </li>
                            </ul><br /><br/>


                            <form onSubmit={handleSubmit} className='relative'>
                                <div className='flex justify-start items-start gap-6'>
                                    <div className='flex-1 flex-col flex gap-6'>
                                        <input type="text" className="h-14 rounded-2xl border border-[#99999981] indent-4 outline-none text-[16px] text-[#000]" placeholder="Enter Name" />
                                        <input type="text" className="h-14 rounded-2xl border border-[#99999981] indent-4 outline-none text-[16px] text-[#000]" placeholder="Enter VIN Number" />
                                        <input type="email" className="h-14 rounded-2xl border border-[#99999981] indent-4 outline-none text-[16px] text-[#000]" placeholder="Enter Email Address" />
                                        <input type="text" className="h-14 rounded-2xl border border-[#99999981] indent-4 outline-none text-[16px] text-[#000]" placeholder="Date of Purchase" />
                                        <input type="text" className="h-14 rounded-2xl border border-[#99999981] indent-4 outline-none text-[16px] text-[#000]" placeholder="Your Transaction Paypal ID" />
                                    </div>

                                    <div className='flex-1 flex-col flex gap-6'>
                                    <textarea className="pt-4 rounded-2xl border border-[#99999981] w-full resize-none indent-4 outline-none flex-1 text-[16px] text-[#000]" rows={11} placeholder='Reson for refund' />
                                    <div className='text-right w-full'>
                                        <button className='rounded-2xl px-14 py-4 transition
                                    text-[20px] bg-themeColor text-[#fff] hover:bg-[#527FF4] w-full'>
                                        Submit</button>
                                    </div>
                                </div>
                                </div>
                            </form>


                        </div>
                        <aside className='w-[30%] sticky top-3 bottom-3'>
                            <Image
                                src={refundCar}
                                className=' object-fill'
                            />
                        </aside>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RefundPage