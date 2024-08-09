import React from 'react'

const ThemeBtn = ({text, size}) => {
  return (
    size == "small" ? <button className='rounded-xl px-8 py-2 transition
    text-[20px] bg-themeColor text-[#fff] hover:bg-[#527FF4]'>{text}</button> 
    : <button className='rounded-2xl px-14 py-4 transition
    text-[20px] bg-themeColor text-[#fff] hover:bg-[#527FF4]'>{text}</button>
  )
}

export default ThemeBtn