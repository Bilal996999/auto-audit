"use client"
import React, { useState } from 'react'
import SectionHeading from '@/components/SectionHeading'
import Breadcrumb from '@/components/Breadcrumb'
import Link from 'next/link'
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline"

const FormDataPage = ({ vinNum }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone:'',
        vinNumber: vinNum,
        status:'Payment Pending',
    })

    const addFormData = async() =>{
        try {
            const res = await fetch(`http://localhost:3000//api/entries/`,{
                method: "POST",
                headers:{
                    "content-type": "application/json"
                },
                body : JSON.stringify({
                    name:formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    vinNumber: formData.vinNumber,
                    status: formData.status
                })
            })

            const data = await res.json()
            const {message, error} = data

            if(error){
                alert(error)
            }else{
                alert(message)
                setFormData({
                    name:"",
                    email:"",
                    phone:"",
                    vinNumber:vinNum,
                    status:'Payment Pending',
                })
            }
        } catch (error) {
            
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target

        setFormData((prevSate)=>({
            ...prevSate,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addFormData()
    }

    return (
        <>
            <Breadcrumb currentPage="Personal Information" />
            <section className='py-20'>
                <div className='container mx-auto px-2 sm:px-6 lg:px-8'>
                    <SectionHeading smallHeading="Personal Information" mainHeading="Fill The Form Below" />
                    <form onSubmit={handleSubmit} className='relative mt-10 max-w-prose mx-auto'>
                        <div className='flex justify-start items-start gap-6'>
                            <div className='flex-1 flex-col flex gap-6'>
                                <input type="text" onChange={handleChange} value={formData.name} className="h-14 rounded-2xl border border-[#99999981] indent-4 outline-none text-[16px] text-[#000]" placeholder="Enter Full Name" name='name' />
                                <input type="text" disabled value={vinNum} className="h-14 rounded-2xl border bg-stone-200 border-[#99999981] indent-4 outline-none text-[16px] text-[#000]" name='vinNumber' placeholder="Enter VIN Number" />
                                <input type="email" onChange={handleChange} className="h-14 rounded-2xl border border-[#99999981] indent-4 outline-none text-[16px] text-[#000]" placeholder="Enter Email Address" name='email' />
                                <input type="tel" onChange={handleChange} className="h-14 rounded-2xl border border-[#99999981] indent-4 outline-none text-[16px] text-[#000]" placeholder="Enter Phone Number" name='phone' />
                                <small className='flex justify-start items-start gap-3'>
                                    <ExclamationTriangleIcon className='size-10' />
                                    Please be aware that you are about to proceed to the payment step. In the next few moments, you{"'"}ll be asked to enter your payment details to complete your purchase. 
                                    Once the payment is successfully processed, You will receive all the necessary details about the car you requested.</small>
                                <div className='flex justify-between items-center gap-5'>
                                    <Link href={'/'} className='text-center rounded-2xl border border-[#99999981] px-14 py-4 transition
                                    text-[20px] bg-white text-[#373535] hover:bg-[#222222] hover:text-[#fff] w-full'>
                                        Back to Home</Link>
                                    <button className='rounded-2xl px-14 py-4 transition
                                    text-[20px] bg-themeColor text-[#fff] hover:bg-[#527FF4] w-full'>
                                        Proceed to Payment</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default FormDataPage