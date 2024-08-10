import Image from 'next/image'
import React from 'react'

const KeyFeatureBox = ({image, title, title2, content}) => {
  return (
    <div className='border border-[#DDDDDD] rounded-2xl p-7 bg-[#fff]'>
        <Image
            src={image}
        />
        <h3 className='text-[32px] font-semibold my-3 leading-[1.3em]'>
            {title}<br/>
            {title2}
        </h3>
        <p className='text-[#666] text-[20px] leading-[1.3em]'>
            {content}
        </p>
    </div>
  )
}

export default KeyFeatureBox