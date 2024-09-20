import React from 'react'
import FloatVinCard from "@/components/FloatVinCard"
import Breadcrumb from '@/components/Breadcrumb'

const PrivatePolicy = () => {
    return (
        <>
            <Breadcrumb currentPage="Privacy Policy" />
            <section className='mb-24 relative'>
                <div className='container mx-auto relative z-10 px-2 sm:px-6 lg:px-8'>
                    <div className='flex justify-between items-start gap-16 relative'>
                        <div className='w-[70%]'>
                            <h1 className='text-[44px] font-bold leading-[1em] mt-10 mb-7'>
                                Privacy Policy
                            </h1>

                            <p className='text-[20px] text-[#666]'>
                                {'Welcome to Auto Audit Pro (“we,” “our,” or “us”), powered by AYS Technologies. Your privacy is important to us, and we are committed to protecting your personal information. This Privacy Policy explains how we collect, use, share, and protect your information when you visit our website autoauditpro.com and use our services.'}
                            </p><br />
                            <h2 className='text-[32px] font-medium leading-[1em] mt-12 mb-7'>
                                Information We Collect
                            </h2>
                            <p className='text-[20px] text-[#666]'>
                                We collect the following types of information:
                            </p><br />
                            <p className='text-[20px] text-[#666]'>
                                <b>Personal Information:</b> Information that identifies you as an individual, such as your name, email address, phone number, and payment details.
                            </p>
                            <p className='text-[20px] text-[#666]'>
                                <b>Vehicle Information:</b> Details about the vehicle you are interested in, including the Vehicle Identification Number (VIN), make, model, and year.
                            </p>
                            <p className='text-[20px] text-[#666]'>
                                <b>Usage Data:</b> Information about how you use our website, including your IP address, browser type, operating system, and pages you visit.
                            </p>
                            <p className='text-[20px] text-[#666]'>
                                <b>Cookies and Tracking Technologies:</b> We use cookies and similar technologies to enhance your experience, track usage patterns, and deliver targeted ads.
                            </p><br/>

                            {/* ======================================================================= */}

                            <h2 className='text-[32px] font-medium leading-[1em] mt-12 mb-7'>
                                How We Use Your Information
                            </h2>
                            <p className='text-[20px] text-[#666]'>
                                We use the information we collect for the following purposes:
                            </p>
                            <ul className='text-[20px] text-[#666] list-disc pl-6'>
                                <li>
                                    To Provide Services: To generate and deliver vehicle history reports.
                                </li>
                                <li>
                                    To Process Payments: To handle transactions securely and efficiently.
                                </li>
                                <li>
                                    To Communicate with You: To respond to your inquiries, send updates, and provide customer support.
                                </li>
                                <li>
                                    To Improve Our Website: To analyze how users interact with our site and improve our services.
                                </li>
                                <li>
                                    To Prevent Fraud: To detect and prevent fraudulent activities and unauthorized access.
                                </li>
                            </ul>

                            {/* ======================================================================= */}

                            <h2 className='text-[32px] font-medium leading-[1em] mt-12 mb-7'>
                                Sharing Your Information
                            </h2>
                            <p className='text-[20px] text-[#666]'>
                                We do not sell, trade, or rent your personal information to third parties. However, we may share your information in the following scenarios:
                            </p><br />
                            <p className='text-[20px] text-[#666]'>
                                Service Providers: We may share your information with trusted third-party service providers who assist us in operating our website, processing payments, and delivering services.
                            </p>
                            <p className='text-[20px] text-[#666]'>
                                Legal Requirements: We may disclose your information if required by law or in response to legal requests, such as subpoenas or court orders.
                            </p>
                            <p className='text-[20px] text-[#666]'>
                                Business Transfers: If our company is merged, acquired, or undergoes reorganization, your information may be transferred as part of the business assets.
                            </p>

                            {/* ======================================================================= */}

                            <h2 className='text-[32px] font-medium leading-[1em] mt-12 mb-7'>
                                Data Security
                            </h2>
                            <p className='text-[20px] text-[#666]'>
                                We implement a variety of security measures to protect your personal information, including encryption, firewalls, and secure server hosting. However, please note that no method of transmission over the internet or electronic storage is 100% secure.
                            </p><br/>

                            {/* ======================================================================= */}

                            <h2 className='text-[32px] font-medium leading-[1em] mt-12 mb-7'>
                                Your Privacy Rights
                            </h2>
                            <p className='text-[20px] text-[#666]'>
                                Depending on your location, you may have certain rights regarding your personal information, including:
                            </p>
                            <ul className='text-[20px] text-[#666] list-disc pl-6'>
                                <li>
                                    Access: Request access to the personal information we hold about you.
                                </li>
                                <li>
                                    Correction: Request corrections to your personal information if it is inaccurate or incomplete.
                                </li>
                                <li>
                                    Deletion: Request deletion of your personal information, subject to certain exceptions.
                                </li>
                                <li>
                                    Opt-Out: Opt-out of receiving marketing communications from us.
                                </li>
                                <li>
                                    To exercise these rights, please contact us using the contact details provided below.
                                </li>
                            </ul>

                            {/* ======================================================================= */}

                            <h2 className='text-[32px] font-medium leading-[1em] mt-12 mb-7'>
                                Cookies and Tracking Technologies
                            </h2>
                            <p className='text-[20px] text-[#666]'>
                                We use cookies and similar technologies to enhance your browsing experience, deliver personalized content, and analyze site traffic. You can manage your cookie preferences through your browser settings. However, disabling cookies may affect your ability to use some features of our website.
                            </p>

                            {/* ======================================================================= */}

                            <h2 className='text-[32px] font-medium leading-[1em] mt-12 mb-7'>
                                Third-Party Websites
                            </h2>
                            <p className='text-[20px] text-[#666]'>
                                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.
                            </p>

                            {/* ======================================================================= */}

                            <h2 className='text-[32px] font-medium leading-[1em] mt-12 mb-7'>
                                Changes to This Privacy Policy
                            </h2>
                            <p className='text-[20px] text-[#666]'>
                                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated “Last Updated” date. Your continued use of our website after such changes will constitute your acceptance of the new Privacy Policy.
                            </p>

                            {/* ======================================================================= */}

                            <h2 className='text-[32px] font-medium leading-[1em] mt-12 mb-7'>
                                Contact Us
                            </h2>
                            <p className='text-[20px] text-[#666]'>
                                If you have any questions or concerns about this Privacy Policy, please contact us at:
                            </p><br/>
                            <a className='text-[20px] text-blue-600' href='mailto:info@autoauditpro.com'>info@autoauditpro.com</a><br/>
                            <a className='text-[20px] text-blue-600' href='tel:+1 (469) 943-0106'>+1 (469) 943-0106</a>
                        </div>
                        <aside className='w-[30%] sticky top-3 bottom-3'>
                            <FloatVinCard />
                        </aside>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PrivatePolicy