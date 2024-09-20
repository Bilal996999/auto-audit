import React from 'react'
import SectionHeading from '@/components/SectionHeading'
import Breadcrumb from '@/components/Breadcrumb'
import Link from 'next/link'
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline"
import report1 from '@/images/report-1.png'
import report2 from '@/images/report-2.png'
import report3 from '@/images/report-3.png'
import report4 from '@/images/report-4.png'
import Image from 'next/image'

const SampleReport = () => {
    

    return (
        <>
            <Breadcrumb currentPage="Sample Report" />
            <section className='py-20'>
                <div className='container mx-auto px-2 sm:px-6 lg:px-8'>
                    <SectionHeading mainHeading="This is the report you will be getting"  smallHeading="Sample Report" />
                    <div className='flex flex-col justify-center items-center my-14'>
                        <Image src={report1} className='max-w-full' />
                        <p className='text-[20px] text-[#666]'>Sample Report Page 1</p>
                    </div>
                    <div className='flex flex-col justify-center items-center my-14'>
                        <Image src={report2} className='max-w-full' />
                        <p className='text-[20px] text-[#666]'>Sample Report Page 2</p>
                    </div>
                    <div className='flex flex-col justify-center items-center my-14'>
                        <Image src={report3} className='max-w-full' />
                        <p className='text-[20px] text-[#666]'>Sample Report Page 3</p>
                    </div>
                    <div className='flex flex-col justify-center items-center my-14'>
                        <Image src={report4} className='max-w-full' />
                        <p className='text-[20px] text-[#666]'>Sample Report Page 4</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SampleReport