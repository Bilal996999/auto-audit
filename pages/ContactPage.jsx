import Breadcrumb from '@/components/Breadcrumb'
import Chat from '@/components/Chat'
import ContactWrapper from '@/components/ContactWrapper'
import React from 'react'

const ContactPage = () => {
  return (
    <>
        <Breadcrumb currentPage="Contact Us" />
        <div className='mb-24 relative'>
          <ContactWrapper />
          
        </div>
    </>
  )
}

export default ContactPage