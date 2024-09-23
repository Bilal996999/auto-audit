"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const ThemeBtn = ({text, size, redirect, disabled}) => {

  const router = useRouter( )

  return (
    size == "small" ? <button className='rounded-xl md:px-8 sm:px-7 px-5 py-2 transition
    xl:text-[20px] lg:text-[16px] text-[13px] bg-themeColor text-[#fff] hover:bg-[#527FF4]' onClick={() => router.push(`${redirect}`)}>{text}</button> 
    : <button className='rounded-2xl md:px-14 sm:px-10 px-6 py-4 transition
    xl:text-[20px] lg:text-[16px] text-[13px] bg-themeColor text-[#fff] hover:bg-[#527FF4]' disabled={disabled} onClick={() => router.push(`${redirect}`)}>{text}</button>
  )
}

export default ThemeBtn