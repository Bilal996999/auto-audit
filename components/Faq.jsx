import React from 'react'
import SectionHeading from './SectionHeading'
import FaqAccordion from './FaqAccordion'


const Faq = () => {
    return (
        <section className='py-20 md:pb-20 sm:pb-10 pb-3'>
            <div className='container mx-auto px-2 sm:px-6 lg:px-8'>
                <SectionHeading
                    smallHeading="FAQ'S"
                    mainHeading="Frequently Asked Questions"
                />

                <div className='mt-20'>
                    <FaqAccordion/>
                </div>
            </div>
        </section>
    )
}

export default Faq