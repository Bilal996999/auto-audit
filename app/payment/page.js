export const metadata = {
    title: 'Payment',
    description: 'Payment Details',
  }
  

import PaypalConfiguration from '@/pages/PaypalConfiguration'
import React from 'react'
  
  const Payment = () => {
    return (
      <main className=" relative">
        <PaypalConfiguration/>
      </main>
    )
  }
  
  export default Payment
  