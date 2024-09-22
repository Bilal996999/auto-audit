import Image from 'next/image'
import React from 'react'

const HowItWorkBox = ({image, title, content, border}) => {
  return (
      <div className={border ? 'md:mb-0 mb-8 md:w-auto w-full xl:px-20 lg:px-10 sm:px-5 px-3 text-center md:border-l-2 md:border-r-2 border-0 border-[#ddd]' : 'md:mb-0 mb-8 xl:px-20 lg:px-10 sm:px-5 px-3 text-center md:w-auto w-full'}>
        <Image
          src={image}
          className='mx-auto lg:w-auto md:w-[70px] w-[40px]'
        />
        <h3 className='lg:text-[24px] md:text-[20px] text-[16px] mt-[16px] mb-2 font-medium'>
          {title}
        </h3>
        <p className='md:text-[16px] sm:text-[14px] text-[12px] text-[#666] md:max-w-56 max-w-full text-center'>{content}</p>
      </div>
  )
}

export default HowItWorkBox