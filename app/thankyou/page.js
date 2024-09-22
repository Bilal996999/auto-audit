export const metadata = {
    title: 'Thank You',
    description: 'Thankyou for the submission',
}


import Breadcrumb from '@/components/Breadcrumb'
import React from 'react'
import Link from 'next/link'

const PrivacyPolicy = () => {
    return (
        <main className="relative">
            <Breadcrumb currentPage="Thank You" />
            <section className='mb-24 relative'>
                <div className='container mx-auto relative z-10 px-2 sm:px-6 lg:px-8'>
                    <div className='text-center'>
                        <h1 className='text-[90px] font-bold'>
                            <span className='text-themeColor'>Thank</span> You!
                        </h1>
                        <p className='text-[#777] text-[20px] mb-3'>
                            Your report will be sent to you via email
                        </p>
                        <Link href={'/'} className="text-themeColor underline text-[20px]">Back to Home</Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default PrivacyPolicy
