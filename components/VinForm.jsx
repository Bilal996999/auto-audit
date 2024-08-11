"use client"

import ThemeBtn from "@/components/ThemeBtn";

const VinForm = () => {

    const handleSubmit = (e) =>{
        e.preventDefault();
    }

  return (
    <form onSubmit={handleSubmit}>
        <div className="flex justify-between border rounded-2xl bg-[#fff] p-[6px] border-[#000]/[.1] hover:border-[#000]/[.4] transition">
            <input type="text" className="indent-4 outline-none flex-1 text-[16px] text-[#000]" maxLength={17} placeholder="Enter VIN Number"/>
            <ThemeBtn text="Get Report"/>
        </div>
    </form>
  )
}

export default VinForm