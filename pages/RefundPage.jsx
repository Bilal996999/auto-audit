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
                    <div className='flex justify-between items-start gap-16 relative flex-wrap md:flex-nowrap'>
                        <div className='lg:w-[70%] w-full'>
                            <h1 className='lg:text-[44px] md:text-[38px] sm:text-[30px] text-[26px] font-bold leading-[1em] mt-10 mb-7'>
                                Refund Policy
                            </h1>

                            <h2 className='lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px] font-medium leading-[1em] mt-12 mb-7'>
                                Refund Policy Details:
                            </h2>
                            <p className='lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] text-[#666]'>
                                {'If you receive any defective data in a report, you are required to send us proof of the defective data. If you wish to request a refund, you must contact us at refund@Autoauditpro.com. Autoauditpro.com will return your payment within 1–2 working days. If the data is correct, there will be no option for a refund. You can contact us anytime via email or live chat support. We are available 24/7 via live chat support, and we prefer that you contact us through live chat for faster resolution of your queries.'}
                            </p><br />
                            {/* ======================================================================= */}

                            <h2 className='lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px] font-medium leading-[1em] mt-12 mb-7'>
                                Grounds for Refund:
                            </h2>
                            <ul className='lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] text-[#666] list-disc pl-6'>
                                <li>
                                    Inaccurate or incomplete information in the report.
                                </li>
                                <li>
                                    Technical issues or errors preventing access to the report.
                                </li><br/>
                            <p className='lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] text-[#666]'>
                                {'Refunds will not be granted for dissatisfaction with the information contained in the report if it aligns with the data presented at the time of purchase.'}
                            </p><br />
                            </ul><br />

                            {/* ======================================================================= */}

                            <h2 className='lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px] font-medium leading-[1em] mt-12 mb-7'>
                                Money-Back Guarantee:
                            </h2>
                            <p className='lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] text-[#666]'>
                                {'We stand by the accuracy and quality of our reports. As part of our commitment to customer satisfaction, all our services come with a 100% money-back guarantee. If the report does not meet our quality standards, you are entitled to a full or partial refund.'}
                            </p><br />
                            {/* ======================================================================= */}

                            <h2 className='lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px] font-medium leading-[1em] mt-12 mb-7'>
                                NOTE: 
                            </h2>
                            <p className='lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] text-[#666]'>
                                {'The Descriptor in Your Statement will appear as AYS Technologies '}
                            </p><br />

                            <p className='lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] text-[#666]'>
                                If you believe your refund request is valid, please complete the form below with the necessary details or email the following information to info@autoauditprovin.com:
                            </p><br />
                            <p className='lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] text-[#666]'>
                                Email Subject: Refund Request
                            </p><br/>
                            <ul className='lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] text-[#666] list-disc pl-6'>
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
                                PayPal Invoice NO # 
                                {/* PayPal Invoice ID or Last 4 Digits of Your Credit/Debit Card */}
                                </li>
                            </ul><br /><br/>


                            <form onSubmit={handleSubmit} className='relative'>
                                <div className='flex justify-start items-start gap-6 lg:flex-nowrap flex-wrap'>
                                    <div className='flex-1 flex-col flex gap-6'>
                                        <input type="text" required className="h-14 rounded-2xl border border-[#99999981] indent-4 outline-none text-[16px] text-[#000]" placeholder="Enter Name" />
                                        <input type="text" required className="h-14 rounded-2xl border border-[#99999981] indent-4 outline-none text-[16px] text-[#000]" placeholder="Enter VIN Number" />
                                        <input type="email" required className="h-14 rounded-2xl border border-[#99999981] indent-4 outline-none text-[16px] text-[#000]" placeholder="Enter Email Address" />
                                        <input type="text" className="h-14 rounded-2xl border border-[#99999981] indent-4 outline-none text-[16px] text-[#000]" placeholder="Date of Purchase" />
                                        <input type="text" required className="h-14 rounded-2xl border border-[#99999981] indent-4 outline-none text-[16px] text-[#000]" placeholder="Your Invoice No #XXXXXXXXXXXX" />
                                    </div>

                                    <div className='flex-1 flex-col flex gap-6'>
                                    <textarea required className="pt-4 rounded-2xl border border-[#99999981] w-full resize-none indent-4 outline-none flex-1 text-[16px] text-[#000]" rows={11} placeholder='Reson for refund' />
                                    <div className='text-right w-full'>
                                        <button className='rounded-2xl px-14 py-4 transition
                                    lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] bg-themeColor text-[#fff] hover:bg-[#527FF4] w-full'>
                                        Submit</button>
                                    </div>
                                </div>
                                </div>
                            </form>


                        </div>
                        <aside className='md:w-[30%] w-full md:sticky md:top-3 static  bottom-3'>
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