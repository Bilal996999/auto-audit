"use client"
import React from 'react'
import ThemeBtn from './ThemeBtn'
import {Checkbox} from "@nextui-org/react";

const ContactForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <form onSubmit={handleSubmit} className='w-[60%] pl-9 relative'>
        <div className='flex justify-center items-center gap-14'>
            <input type="text" className="h-14 rounded-2xl border border-[#99999981] indent-4 outline-none flex-1 text-[16px] text-[#000]" placeholder="Enter Name"/>
            <input type="email" className="h-14 rounded-2xl border border-[#99999981] indent-4 outline-none flex-1 text-[16px] text-[#000]" placeholder="Enter Email Address"/>
        </div>
        <textarea className="pt-4 mt-8 rounded-2xl border border-[#99999981] w-full resize-none indent-4 outline-none flex-1 text-[16px] text-[#000]" rows={10} placeholder='Enter your message...' />
        <Checkbox defaultSelected className='w-full clear-both mt-7'>Subscribe to our newsletter</Checkbox>
        <div className='mt-44 text-right mb-3'>
            <ThemeBtn text="Send Message" />
        </div>
    </form>
  )
}

export default ContactForm