import Image from 'next/image'
import React from 'react'
import quote from "@/images/quote.png"

const TestimonialBox = ({image, name, designation, content}) => {
  return (
    <div className='
    lg:pt-[60px] lg:pl-[60px] lg:pr-[40px] lg:pb-[80px] 
    md:pt-[40px] md:pl-[40px] md:pr-[30px] md:pb-[60px] 
    pt-[30px] pl-[30px] pr-[20px] pb-[40px] 
    relative text-center mx-0'>
        <Image
            src={image}
            className='mx-auto'
        />
        <h3 className='text-[#525252] text-[24px] font-bold mt-4 mb-2 leading-[1em]'>
            {name}
        </h3>
        <small className='text-[#525252] text-[17px] font-normal'>{designation}</small>
        <Image
            src={quote}
            className='mx-auto'
        />
        <p className='text-[#525252] md:text-[17px] sm:text-[14px] text-[12px] font-normal my-2'>
            {content}
        </p>
    </div>
  )
}

export default TestimonialBox