import React from 'react'
import Breadcrumb from '@/components/Breadcrumb'
import FloatVinCard from '@/components/FloatVinCard'
import Chat from '@/components/Chat'

const ContactPage = () => {
    return (
        <>
            <Breadcrumb currentPage="About Us" />
            <section className='mb-24 relative'>
                <div className='container mx-auto relative z-10 px-2 sm:px-6 lg:px-8'>
                    <div className='flex justify-between items-start gap-16 relative'>
                        <div className='w-[70%]'>
                            <h1 className='text-[44px] font-bold leading-[1em] mt-10 mb-7'>
                                About Us
                            </h1>
                            <p className='text-[20px] text-[#666]'>
                                {'At Auto Audit Pro, we believe that knowledge is power, especially when it comes to making one of life’s significant investments—buying a car. Our mission is to empower buyers, sellers, and car enthusiasts by providing detailed and transparent vehicle history reports that unveil the true story behind every vehicle.'}
                            </p><br/>
                            {/* <p className='text-[20px] text-[#666]'>
                                Auto Audit PRO VIN is an NMVTIS-approved (National Motor Vehicle Title Information System) data provider. NMVTIS is a national database designed to protect consumers from fraud and unsafe vehicles, prevent stolen vehicles from being resold, and offer accurate vehicle information.
                            </p><br/>
                            <p className='text-[20px] text-[#666]'>
                                The vehicle history reports provided by Auto Audit PRO VIN are essential for anyone interested in making a safe purchase and avoiding potential hidden issues associated with buying a used vehicle.
                            </p> */}
                            
                            {/* ======================================================================= */}

                            <h2 className='text-[32px] font-medium leading-[1em] mt-12 mb-7'>
                                What We Do
                            </h2>
                            <p className='text-[20px] text-[#666]'>
                                {'Powered by AYS Technologies, Auto Audit Pro offers cutting-edge vehicle history reports based on your car’s VIN (Vehicle Identification Number). We go beyond the basics to deliver a thorough, in-depth analysis of a vehicle’s past, including:'}
                            </p>
                            <ul className='text-[20px] text-[#666] list-disc pl-6'>
                                <li>
                                    <b>Ownership History:</b> Know the number of previous owners, transfer details, and title history.
                                </li>
                                <li>
                                    <b>Accident Reports: </b> Find out if the vehicle has been in any accidents, along with the severity and repair details.
                                </li>
                                <li>
                                    <b>Service and Maintenance Records: </b> Get access to a detailed service history, ensuring the car has been well-maintained.
                                </li>
                                <li>
                                    <b>Odometer Verification: </b> Detect potential odometer rollbacks or inconsistencies.
                                </li>
                                <li>
                                    <b>Theft and Salvage Checks: </b> {'Ensure the vehicle hasn’t been reported stolen or labeled as a salvage vehicle.'}
                                </li>
                            </ul><br/>
                            <p className='text-[20px] text-[#666]'>
                                {'We understand that a vehicle’s history plays a crucial role in determining its true value and safety. With Auto Audit Pro, you gain access to data that helps protect you from potential risks, ensuring that your next car purchase is a sound investment.'}
                            </p><br/>

                            {/* ======================================================================= */}

                            <h2 className='text-[32px] font-medium leading-[1em] mt-12 mb-7'>
                                Why Choose Auto Audit Pro?
                            </h2>
                            <ul className='text-[20px] text-[#666] list-disc pl-6'>
                                <li>
                                    <b>Trusted Data: </b> Our reports pull from trusted and verified databases, providing you with accurate and reliable information.
                                </li>
                                <li>
                                    <b>Advanced Technology: </b> Backed by AYS Technologies, we leverage the latest technology to deliver comprehensive and easy-to-read reports within minutes.
                                </li>
                                <li>
                                    <b>Customer-Focused Approach: </b> Our dedicated team is committed to providing exceptional service, ensuring that your experience with Auto Audit Pro is smooth, transparent, and stress-free.
                                </li>
                                <li>
                                    <b>Security and Privacy:  </b> We prioritize the security of your data, ensuring that your information is protected at every step.
                                </li>
                            </ul><br/>

                            {/* ======================================================================= */}

                            <h2 className='text-[32px] font-medium leading-[1em] mt-12 mb-7'>
                                Our Commitment
                            </h2>
                            <p className='text-[20px] text-[#666]'>
                                {'At Auto Audit Pro, we don’t just provide reports; we provide peace of mind. We understand the importance of making informed decisions, especially when it comes to purchasing a vehicle. Our commitment to transparency, accuracy, and customer satisfaction drives everything we do. We are here to guide you through your vehicle research journey with reliable data and unwavering support.'}
                            </p><br/>
                            <p className='text-[20px] text-[#666]'>
                                {'Trust Auto Audit Pro to be your partner in making smarter, safer vehicle decisions. Whether you’re buying, selling, or simply verifying, we’ve got you covered.'}
                            </p><br/>

                            {/* ======================================================================= */}

                            <h2 className='text-[32px] font-medium leading-[1em] mt-12 mb-7'>
                                Payment Terms and Conditions
                            </h2>
                            <p className='text-[20px] text-[#666]'>
                                {'By purchasing a detailed vehicle history report from Auto Audit Pro, you agree to the following payment terms and conditions: '}
                            </p><br/>

                            {/* ======================================================================= */}

                            <h2 className='text-[32px] font-medium leading-[1em] mt-12 mb-7'>
                                Payment Processing
                            </h2>
                            <p className='text-[20px] text-[#666]'>
                                {'All payments for vehicle history reports are processed securely through our payment gateway. Upon successful payment, you will receive an email containing your detailed report within the agreed-upon timeframe.'}
                            </p><br/>
                            <p className='text-[20px] text-[#666]'>
                                {'The payment descriptor on your card or bank statement will appear as AYS Technologies. Please ensure that this name is recognized when reviewing your transaction history.'}
                            </p><br/>

                            {/* ======================================================================= */}

                            <h2 className='text-[32px] font-medium leading-[1em] mt-12 mb-7'>
                                Charges
                            </h2>
                            <p className='text-[20px] text-[#666]'>
                                {'You are only being charged for the detailed vehicle history report based on the information you provided, including the vehicle’s VIN number. The cost of the report is final and covers the comprehensive data retrieval and presentation services offered by Auto Audit Pro.'}
                            </p><br/>
                            {/* ======================================================================= */}

                            <h2 className='text-[32px] font-medium leading-[1em] mt-12 mb-7'>
                                No Refund Policy
                            </h2>
                            <p className='text-[20px] text-[#666]'>
                                {'By completing your purchase, you acknowledge and agree that all sales are final. Given the nature of our service, you are not entitled to ask for any refunds, chargebacks, or reversals after receiving your report.'}
                            </p><br/>
                            <p className='text-[20px] text-[#666]'>
                                {'We take great care in providing accurate and thorough vehicle history reports, and once the report is delivered, the service is considered rendered in full. Any attempts to claim refunds or chargebacks will be considered a violation of these terms and conditions.'}
                            </p><br/>
                            {/* ======================================================================= */}

                            <h2 className='text-[32px] font-medium leading-[1em] mt-12 mb-7'>
                                Acceptance of Terms
                            </h2>
                            <p className='text-[20px] text-[#666]'>
                                {'By proceeding with the payment, you confirm that you have read, understood, and agreed to these payment terms and conditions. Your use of Auto Audit Pro’s services constitutes your binding agreement to these terms, and you waive any rights to contest these conditions after receiving your report.'}
                            </p><br/>
                            {/* ======================================================================= */}

                            <h2 className='text-[32px] font-medium leading-[1em] mt-12 mb-7'>
                                Delivery of Service
                            </h2>
                            <p className='text-[20px] text-[#666]'>
                                {'Auto Audit Pro is committed to delivering your vehicle history report via email to the address provided during the purchase process. It is your responsibility to ensure that the email address you provide is correct and capable of receiving our communications.'}
                            </p><br/>
                            {/* ======================================================================= */}

                            <h2 className='text-[32px] font-medium leading-[1em] mt-12 mb-7'>
                                Dispute Resolution
                            </h2>
                            <p className='text-[20px] text-[#666]'>
                                {'In the unlikely event of any dispute arising from your purchase, you agree to contact Auto Audit Pro directly for resolution before pursuing any external claims. Our team is here to assist with any concerns, but please be reminded that refunds or cancellations are not available for completed services.'}
                            </p><br/>
                        </div>
                        <aside className='w-[30%] sticky top-3 bottom-3'>
                            <FloatVinCard />
                        </aside>
                    </div>
                </div>
                        <Chat/>
            </section>
        </>
    )
}

export default ContactPage