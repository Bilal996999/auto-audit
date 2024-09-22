import React from 'react'

const SectionHeading = ({smallHeading, mainHeading}) => {
  return (
    <div className='text-center'>
        <h3 className='text-[#999] 2xl:text-[20px] xl:text-[18px] lg:text-[16px] text-[14px] font-medium mb-5'>
            {smallHeading}
        </h3>
        <h2 className='text-[#222] 2xl:text-[44px] xl:text-[40px] lg:text-[36px] md:text-[30px] text-[26px] font-bold max-w-[720px] mx-auto leading-[1.2em]'>
            {mainHeading}
        </h2>
    </div>
  )
}

export default SectionHeading