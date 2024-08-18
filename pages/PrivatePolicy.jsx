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

                            <h2 className='text-[32px] font-medium leading-[1em] mt-12 mb-7'>
                                What Information Do We Collect?
                            </h2>
                            <p className='text-[20px] text-[#666]'>
                                We collect information when you register on our site, place an order, participate in surveys, fill out forms, or subscribe to our newsletter.
                            </p><br />
                            <p className='text-[20px] text-[#666]'>
                                When placing an order or registering, we may request details such as your email address, name, mailing address, phone number, and/or credit card information.
                            </p><br />
                            <p className='text-[20px] text-[#666]'>
                                Alternatively, you may visit our site anonymously if you prefer.
                            </p>

                            {/* ======================================================================= */}

                            <h2 className='text-[32px] font-medium leading-[1em] mt-12 mb-7'>
                                How Do We Use Your Information?
                            </h2>
                            <p className='text-[20px] text-[#666]'>
                                We use the collected information in the following ways:
                            </p>
                            <ul className='text-[20px] text-[#666] list-disc pl-6'>
                                <li>
                                    Personalized Experience: Your information helps us tailor our responses to meet your individual needs.
                                </li>
                                <li>
                                    Website Improvement: We use feedback and information from you to enhance our website and services.
                                </li>
                                <li>
                                    Customer Service: Your information allows us to address support and service requests more effectively.
                                </li>
                                <li>
                                    Transaction Processing: Your information is used solely to complete the transaction you requested. We do not transfer, exchange, sell, or provide your information to outside parties without your consent, except as needed to fulfill the service or product you ordered.
                                </li>
                                <li>
                                    Site Features: We may use your information to manage surveys, promotions, or contests.
                                </li>
                                <li>
                                    Email Communications: We use your email address to send order confirmations, updates, and occasional newsletters about company news, services, or products.
                                </li>
                                <li>
                                    Email Unsubscribe: You can unsubscribe from our emails at any time by following the instructions at the bottom of each email.
                                </li>
                            </ul>

                            {/* ======================================================================= */}

                            <h2 className='text-[32px] font-medium leading-[1em] mt-12 mb-7'>
                                How Do We Protect Your Information?
                            </h2>
                            <p className='text-[20px] text-[#666]'>
                                We employ various security measures to protect your personal information during access, submission, or order placement. We use Secure Socket Layer (SSL) technology to encrypt sensitive and credit card information during transmission, and this information is stored securely with our payment gateway provider. Only authorized personnel with special access can view this data and are required to keep it confidential.
                            </p><br />

                            {/* ======================================================================= */}

                            <h2 className='text-[32px] font-medium leading-[1em] mt-12 mb-7'>
                                Cookies
                            </h2>
                            <p className='text-[20px] text-[#666]'>
                                Yes, we use cookies—small files transferred to your computer{"'"}s hard drive by our site or its service provider. Cookies help us recognize your browser and remember your preferences for future visits. They also provide aggregate data on site interaction and traffic to improve our website. You can disable cookies through your browser settings, but doing so may affect the functionality of our site and our ability to provide you with services.
                            </p>

                            {/* ======================================================================= */}

                            <h2 className='text-[32px] font-medium leading-[1em] mt-12 mb-7'>
                                Disclosure to Outside Parties
                            </h2>
                            <p className='text-[20px] text-[#666]'>
                                We do not sell, trade, or transfer personally identifiable information to external parties, except for trusted third parties who assist in website operations, business functions, or providing services, provided they agree to keep the information confidential. We may disclose information when required to comply with legal obligations, enforce site policies, or protect the rights and safety of ourselves or others. Non-personally identifiable visitor information may be shared with outside parties for purposes like advertising and marketing.
                            </p>

                            {/* ======================================================================= */}

                            <h2 className='text-[32px] font-medium leading-[1em] mt-12 mb-7'>
                                Third-Party Links
                            </h2>
                            <p className='text-[20px] text-[#666]'>
                                Our site may occasionally include links to third-party products or websites. Each third-party site has its own privacy policy, and we are not responsible for their content or practices. We aim to maintain the integrity of our site and welcome feedback on these external sites.
                            </p>

                            {/* ======================================================================= */}

                            <h2 className='text-[32px] font-medium leading-[1em] mt-12 mb-7'>
                                California Online Privacy Protection Act Compliance
                            </h2>
                            <p className='text-[20px] text-[#666]'>
                                We are committed to complying with the California Online Privacy Protection Act and will not share personal information with outside parties without explicit consent. Users can update their information by visiting {'"'}My Account{'"'} and selecting {'"'}Account Settings.{'"'}
                            </p>

                            {/* ======================================================================= */}

                            <h2 className='text-[32px] font-medium leading-[1em] mt-12 mb-7'>
                                Do Not Track Requests
                            </h2>
                            <p className='text-[20px] text-[#666]'>
                                We do not respond to Do Not Track requests. For more information, visit <a href="https://allaboutdnt.com">https://allaboutdnt.com</a>
                            </p>

                            {/* ======================================================================= */}

                            <h2 className='text-[32px] font-medium leading-[1em] mt-12 mb-7'>
                                Access, Correction, and Deletion of Personal Information
                            </h2>
                            <p className='text-[20px] text-[#666]'>
                                You have the right to access, correct, and request deletion of your personal information. Requests can be made by contacting us at info@autoauditprovin.com. We verify the identity of requestors to ensure that they are legally entitled to make such requests. We may charge a reasonable fee for repetitive or burdensome requests.
                            </p>

                            {/* ======================================================================= */}

                            <h2 className='text-[32px] font-medium leading-[1em] mt-12 mb-7'>
                                Children{"'"}s Online Privacy Protection Act Compliance
                            </h2>
                            <p className='text-[20px] text-[#666]'>
                                We comply with COPPA (Children{"'"}s Online Privacy Protection Act) and do not collect information from individuals under 13 years old. If a minor provides us with information, it can be deleted by contacting us at info@autoauditprovin.com.
                            </p>

                            {/* ======================================================================= */}

                            <h2 className='text-[32px] font-medium leading-[1em] mt-12 mb-7'>
                                Consult Terms and Conditions
                            </h2>
                            <p className='text-[20px] text-[#666]'>
                                Please review our Terms and Conditions for additional details regarding the limitations, disclaimers, and liabilities associated with using our website.
                            </p>

                            {/* ======================================================================= */}

                            <h2 className='text-[32px] font-medium leading-[1em] mt-12 mb-7'>
                                Consent
                            </h2>
                            <p className='text-[20px] text-[#666]'>
                                By using our website, you consent to our privacy policy.
                            </p>

                            {/* ======================================================================= */}

                            <h2 className='text-[32px] font-medium leading-[1em] mt-12 mb-7'>
                                Policy Updates
                            </h2>
                            <p className='text-[20px] text-[#666]'>
                                Any changes to our privacy policy will be posted on this page, with an updated modification date.
                            </p>
                                   
                            {/* ======================================================================= */}

                            <h2 className='text-[32px] font-medium leading-[1em] mt-12 mb-7'>
                                Policy Updates
                            </h2>
                            <p className='text-[20px] text-[#666]'>
                            For any questions about our privacy policy, please contact us at:<br/><br/>

                            <a href='https://autoauditprovin.com'>https://autoauditprovin.com</a><br/><br/>

                            15173B NE 21st Ave, North Miami Beach, FL 33162<br/><br/>

                            info@autoauditprovin.com<br/><br/>
                            </p>
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