import React from 'react'
import ThemeBtn from './ThemeBtn'

const FloatVinCard = () => {
  return (
    <div className='p-11 bg-[#EEF8FC] rounded-2xl text-center sticky top-0'>
        <h3 className='font-medium text-[32px] leading-[1.3em]'>
            Buying a Used car? Check it using Auto Audit PRO
        </h3>
        <input type="text" className="w-full my-8 indent-4 h-[60px] rounded-2xl outline-none flex-1 text-[16px] text-[#000] text-center" maxLength={17} placeholder="Enter VIN Number"/>
        <button className='rounded-2xl px-14 py-4 transition w-full
        text-[20px] bg-themeColor text-[#fff] hover:bg-[#527FF4]'>Get Report</button>
        <small className='block text-[18px] text-[#999] mt-6'>No VIN yet? Get a prepaid Auto Audit PRO VINreport</small>
    </div>
  )
}

export default FloatVinCard