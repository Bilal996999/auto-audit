"use client"
import React, { useState } from 'react'
import ThemeBtn from './ThemeBtn'
import { Checkbox } from "@nextui-org/react";

const ContactForm = () => {



  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const sendMailUrl = "https://backend.autoauditpro.com/wp-json/contact-form-7/v1/contact-forms/40/feedback"


  const formEmail = async () => {
    const formData = new FormData();
    formData.append("_wpcf7_unit_tag", "c8d7002")
    formData.append("your-name", name)
    formData.append("your-email", email)
    formData.append("your-message", message)

    try {
      const reqOptions = {
        method: "POST",
        body: formData
      }
      const res = await fetch(sendMailUrl, reqOptions)
      const data = res.json()
      // console.log(data)
      if (data.status) {
        setResponseMessage('Your message was sent successfully!');
      } else {
        setResponseMessage(data.message || 'There was an error sending your message.');
      }
    } catch (error) {

    }

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    formEmail()
    setTimeout(()=>{

      setName('')
      setEmail('')
      setMessage('')
      alert('Message sent')
    },400)

  }

  return (
    <form onSubmit={handleSubmit} className='lg:w-[60%] w-full lg:pl-9 pl-0 relative'>
      <div className='flex sm:flex-nowrap flex-wrap justify-center items-center lg:gap-14 md:gap-6 sm:gap-4 gap-2'>
        <input type="text" value={name} required onChange={(e) => setName(e.target.value)} className="h-14 rounded-2xl border border-[#99999981] indent-4 outline-none flex-1 text-[16px] text-[#000]" placeholder="Enter Name" />
        <input type="email" value={email} required onChange={(e) => setEmail(e.target.value)} className="h-14 rounded-2xl border border-[#99999981] indent-4 outline-none flex-1 text-[16px] text-[#000]" placeholder="Enter Email Address" />
      </div>
      <textarea required value={message} onChange={(e) => setMessage(e.target.value)} className="pt-4 required: mt-8 rounded-2xl border border-[#99999981] w-full resize-none indent-4 outline-none flex-1 text-[16px] text-[#000]" rows={10} placeholder='Enter your message...' />
      <Checkbox defaultSelected className='w-full clear-both mt-7'>Subscribe to our newsletter</Checkbox>
      <div className='lg:mt-44 mt-10 text-right mb-3'>
        <button className='rounded-2xl md:px-14 sm:px-10 px-8 py-4 transition
    xl:text-[20px] lg:text-[16px] text-[13px] bg-themeColor text-[#fff] hover:bg-[#527FF4]'>Send Message</button>
      </div>
    </form>
  )
}

export default ContactForm