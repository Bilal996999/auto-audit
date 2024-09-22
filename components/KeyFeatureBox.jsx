import Image from 'next/image'
import React from 'react'

const KeyFeatureBox = ({image, title, title2, content}) => {
  return (
    <div className='border border-[#DDDDDD] rounded-2xl p-7 bg-[#fff] transition-shadow hover:shadow-md md:text-left text-center'>
        <Image
            src={image}
            className='md:ml-0 mx-auto'
        />
        <h3 className='xl:text-[32px] lg:text-[26px] sm:text-[22px] text-[18px] font-semibold my-3 leading-[1.3em]'>
            {title}<br/>
            {title2}
        </h3>
        <p className='text-[#666] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] leading-[1.3em]'>
            {content}
        </p>
    </div>
  )
}

export default KeyFeatureBox