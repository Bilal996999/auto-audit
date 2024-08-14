"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const ThemeBtn = ({text, size, redirect}) => {

  const router = useRouter( )

  return (
    size == "small" ? <button className='rounded-xl px-8 py-2 transition
    text-[20px] bg-themeColor text-[#fff] hover:bg-[#527FF4]' onClick={() => router.push(`${redirect}`)}>{text}</button> 
    : <button className='rounded-2xl px-14 py-4 transition
    text-[20px] bg-themeColor text-[#fff] hover:bg-[#527FF4]' onClick={() => router.push(`${redirect}`)}>{text}</button>
  )
}

export default ThemeBtn