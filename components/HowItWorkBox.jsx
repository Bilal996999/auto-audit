import Image from 'next/image'
import React from 'react'

const HowItWorkBox = ({image, title, content, border}) => {
  return (
      <div className={border ? 'md:px-20 sm:px-5 text-center border-l-2 border-r-2 border-[#ddd]' : 'md:px-20 sm:px-5 text-center'}>
        <Image
          src={image}
          className='mx-auto'
        />
        <h3 className='text-[24px] mt-[16px] mb-2 font-medium'>
          {title}
        </h3>
        <p className='text-[16px] text-[#666] max-w-56'>{content}</p>
      </div>
  )
}

export default HowItWorkBox