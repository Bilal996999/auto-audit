"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Logo from "@/images/logo.png"
import { ExclamationCircleIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline"
import { useRouter } from 'next/navigation'

const SignInPage = () => {


    const router = useRouter()

    const [loginData, setLoginData] = useState({
        email:'',
        pass:''
    })

    const [error, setError] = useState(false)

    const EMAILField = "admin@admin.com"
    const PASSfield = "admin@1234"

    const handleChange = (e) => {
        
        const name = e.target.name
        const value = e.target.value

        setLoginData((prevState)=>{
            return{
            ...prevState,
            [name]: value
            }
    })

    console.log(loginData)
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(loginData.email == EMAILField && loginData.pass == PASSfield){
            setError(false)
            console.log("valid")
            router.push('/dashboard')
        }
        else{
            setError(true)
            console.log("invalid")
        }
    }

    return (
        <>

            <div className="flex h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <Image
                        alt="Your Company"
                        src={Logo}
                        className="w-full mx-auto mb-16"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSubmit} method="POST" className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input onChange={handleChange} type="email" name="email" className="h-12 w-full rounded-2xl border border-[#99999981] indent-4 outline-none text-[16px] text-[#000]" placeholder="@email.com" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                </div>
                            </div>
                            <div className="mt-2">
                                <input onChange={handleChange} type="password" name='pass' className="h-12 w-full rounded-2xl border border-[#99999981] indent-4 outline-none text-[16px] text-[#000]" placeholder="Password here..." />
                            </div>
                        {error ? <div className='flex justify-start items-center gap-2 pt-[10px] pl-3 mt-0'><ExclamationCircleIcon className='size-6'/> <p className='text-sm text-red-700'> Invalid Credentials</p></div> : ''}
                        </div>


                        <div>
                        <button className='rounded-2xl w-full px-14 py-3 transition
                            text-[20px] bg-themeColor text-[#fff] hover:bg-[#527FF4]' 
                            >Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        </>

    )
}

export default SignInPage