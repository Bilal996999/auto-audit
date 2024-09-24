"use client"
import { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Chip } from "@nextui-org/react";
import { CheckIcon } from "../components/CheckIcon";
import Breadcrumb from '../components/Breadcrumb';
import { useRouter } from 'next/navigation';

const PaypalConfiguration = () => {
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter()

  const sendMailUrl = "https://backend.autoauditpro.com/wp-json/contact-form-7/v1/contact-forms/6/feedback"

  // Encode the data in URL-encoded format
  //  const urlEncodeData = (data) => {
  //   return Object.keys(data)
  //     .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
  //     .join('&');
  // };



  const formEmail = async (orderID) => {
    const formData = new FormData();
    formData.append("_wpcf7_unit_tag", "2b0f014")
    formData.append("your-invoice-number", orderID)
    formData.append("your-name", localStorage.getItem("name"))
    formData.append("your-email", localStorage.getItem("email"))
    formData.append("your-phone", localStorage.getItem("phone"))
    formData.append("your-vin-number", localStorage.getItem("vinNumber"))
    formData.append("your-status", localStorage.getItem("status"))

    try {
      const reqOptions = {
        method: "POST",
        body: formData

      }
      const res = await fetch(sendMailUrl, reqOptions)
      const data = await res.json()
      if (data.status === 'mail_sent') {
        setResponseMessage('Your message was sent successfully!');
      } else {
        setResponseMessage(data.message || 'There was an error sending your message.');
      }
    } catch (error) {

    }

  }

  const addFormData = async (orderID) => {
    try {
      const res = await fetch(`/api/entries/`, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          invoiceNumber: orderID,
          name: localStorage.getItem("name"),
          email: localStorage.getItem("email"),
          phone: localStorage.getItem("phone"),
          vinNumber: localStorage.getItem("vinNumber"),
          status: localStorage.getItem("status")
        })
      })

      const data = await res.json()
      const { message, error } = data

      if (error) {
        alert(error)
      } else {
        setFormData({
          invoiceNumber: "",
          name: "",
          email: "",
          phone: "",
          vinNumber: vinNum,
          status: 'Payment Pending',
        })
        alert(message)
      }
    } catch (error) {

    }
  }

  const handleApprove = (orderID) => {
    // Handle successful payment here
    addFormData(orderID)
    setPaidFor(true);
    console.log("Payment successful, Order ID:", orderID);

    setTimeout(() => {
      setPaidFor(false)
      router.push('/thankyou')
    }, 1000);

    formEmail(orderID)

    localStorage.setItem("name", "")
    localStorage.setItem("email", "")
    localStorage.setItem("phone", "")
    localStorage.setItem("vinNumber", "")
    localStorage.setItem("status", "")
  }

  const handleError = (err) => {
    setError(err);
    console.error("PayPal Checkout error:", err);
  };

  return (
    <>
      <Breadcrumb currentPage="Select Payment Option" />
      <section className='py-20 w-full flex flex-col justify-center items-center'>
        <div className='container mx-auto px-2 sm:px-6 lg:px-8'>
          <PayPalScriptProvider options={{ "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID }}>
            <PayPalButtons
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: "2.00", // Set the payment amount here
                      },
                      shipping_preference: "NO_SHIPPING",
                    },
                  ],
                  // Minimize the need for billing address
                  application_context: {
                    shipping_preference: "NO_SHIPPING",  // Disables shipping
                    user_action: "PAY_NOW",              // Skips review step
                  },
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                  handleApprove(details.id);
                });
              }}
              onError={handleError}
            />
          </PayPalScriptProvider>
          {paidFor && <Chip
            startContent={<CheckIcon size={18} />}
            variant="faded"
            color="success"
          >Thank you for your payment!</Chip>}
          {error && <div>Error occurred during payment: {error.message}</div>}
        </div>
      </section>
    </>
  )


}

export default PaypalConfiguration