"use client"

import ThemeBtn from "@/components/ThemeBtn";
import { useState } from "react";

const VinForm = () => {

    const [vinNum, setVinNum] = useState('')
    const [isLength, setIsLength] = useState(true)
    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    // console.log(vinNum)
    const handleChange = (e) =>{
      setVinNum(e.target.value)
      if(e.target.value.length == 17){
        console.log(e.target.value.length)
        setIsLength(false)
      }
      else{
        setIsLength(true)
      }
    }


  return (
    <form onSubmit={handleSubmit}>
        <div className="lg:h-auto h-16 flex justify-between border rounded-2xl bg-[#fff] p-[6px] border-[#000]/[.1] hover:border-[#000]/[.4] transition">
            <input 
            type="text" 
            className="indent-4 outline-none flex-1 md:text-[16px] text-[14px] text-[#000]" 
            minLength={17} 
            maxLength={17} 
            onChange={handleChange}
            placeholder="Enter VIN Number"
            />
            <ThemeBtn text="Get Report" disabled={isLength} redirect={`/form-data?vin=${vinNum}`}/>
        </div>
    </form>
  )
}

export default VinForm