import React from 'react'
import SectionHeading from './SectionHeading'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'

const ContactWrapper = () => {
  return (
    <div className='container mx-auto px-2 sm:px-6 lg:px-8'>
      <SectionHeading mainHeading="Contact Us" />
      <p className='mt-4 text-center text-[18px]'>Any question or remarks? Just write us a message!</p>
      <div className='mt-20 border border-[#DDDDDD] rounded-xl p-3'>
        <div className='flex justify-center items-center flex-wrap'>
          <ContactInfo />
          <ContactForm/>
        </div>
      </div>
    </div>
  )
}

export default ContactWrapper