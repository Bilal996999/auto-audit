import React from 'react'

const SectionHeading = ({smallHeading, mainHeading}) => {
  return (
    <div className='text-center'>
        <h3 className='text-[#999] text-[20px] font-medium mb-5'>
            {smallHeading}
        </h3>
        <h2 className='text-[#222] text-[44px] font-bold'>
            {mainHeading}
        </h2>
    </div>
  )
}

export default SectionHeading