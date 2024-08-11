import Image from 'next/image'
import React from 'react'
import quote from "@/images/quote.png"

const TestimonialBox = ({image, name, designation, content}) => {
  return (
    <div className='px-[40px] pb-[60px] relative text-center mx-0'>
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
        <p className='text-[#525252] text-[17px] font-normal my-2'>
            {content}
        </p>
    </div>
  )
}

export default TestimonialBox