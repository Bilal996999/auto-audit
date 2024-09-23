import React from 'react'
import SectionHeading from './SectionHeading'

const Breadcrumb = ({ currentPage }) => {
    return (
        <>
            <div className='py-8 bg-[#EEF8FC]'>
            </div>
            <section className='pt-14 pb-7'>
                <div className='container mx-auto px-2 sm:px-6 lg:px-8'>
                    <h3 className='text-[#999] md:text-[24px] sm:text-[20px] text-[17px] font-medium'>
                        Home {'>'} 
                        <span className='text-themeColor'> {currentPage}</span>
                    </h3>
                </div>
            </section>
        </>
    )
}

export default Breadcrumb