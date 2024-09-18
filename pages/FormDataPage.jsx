"use client"
import React, { useState } from 'react'
import SectionHeading from '@/components/SectionHeading'
import Breadcrumb from '@/components/Breadcrumb'
import Link from 'next/link'
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline"
import PaypalConfiguration from '@/pages/PaypalConfiguration'
import { useRouter } from 'next/navigation'

const FormDataPage = ({ vinNum }) => {
    const router = useRouter()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone:'',
        vinNumber: vinNum,
        status:'Payment Pending',
    })

    //OLD FORM DATA POSING FUNCTION
    const addFormData = async() =>{
        try {
            const res = await fetch(`https://auto-audit.vercel.app/api/entries/`,{
                method: "POST",
                headers:{
                    "content-type": "application/json"
                },
                body : JSON.stringify({
                    invoiceNumber: Math.floor(Math.random() * 100001),
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
                setFormData({
                    invoiceNumber: "",
                    name:"",
                    email:"",
                    phone:"",
                    vinNumber:vinNum,
                    status:'Payment Pending',
                })
                alert(message)
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
        // addFormData()
        localStorage.setItem("name", formData.name)
        localStorage.setItem("email", formData.email)
        localStorage.setItem("phone", formData.phone)
        localStorage.setItem("vinNumber", formData.vinNumber)
        localStorage.setItem("status", formData.status)
        localStorage.setItem("invoiceNumber", Math.floor(Math.random() * 100001),)
        router.push('/payment')
    }

    // const sendInvoice = async () => {
    //     try {
    //       const response = await fetch('/api/paypal/send-invoice', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //           item_name: formData.email,
    //           email: formData.email,
    //           phone: formData.phone,
    //           vinNumber: formData.vinNumber,
    //           status: formData.status,
    //           invoice_number: Math.floor(Math.random() * 100001), // Include invoice number
    //         }),
    //       });
    
    //       const data = await response.json();
    
    //       if (response.ok) {
    //         setMessage(`Invoice #${invoiceNumber} sent successfully!`);
    //       } else {
    //         setMessage(`Failed to send invoice: ${data.message}`);
    //       }
    //     } catch (error) {
    //       setMessage('Error sending invoice.');
    //       console.error('Error:', error);
    //     }
    // };

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
                                    <Link href={'/'} className='text-center w-full rounded-2xl border border-[#99999981] px-14 py-4 transition
                                    text-[20px] bg-white text-[#373535] hover:bg-[#222222] hover:text-[#fff]'>
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