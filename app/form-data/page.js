export const metadata = {
  title: 'Personal Information',
  description: 'Give the details below',
}

import SectionHeading from '@/components/SectionHeading'
import FormDataPage from '@/pages/FormDataPage'
import PrivatePolicy from '@/pages/PrivatePolicy'
import React from 'react'

const PrivacyPolicy = ({ searchParams }) => {
  const params = searchParams?.vin
  console.log(params)
  return (
    <main className="min-h-screen relative">
      <FormDataPage vinNum={params}/>
    </main>
  )
}

export default PrivacyPolicy
