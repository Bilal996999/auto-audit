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
                                Auto Audit PRO VIN has been delivering detailed vehicle history reports since 2012. Our mission is to reduce uncertainty and fraud in the automotive industry by providing prospective buyers with a clear view of a vehicle{"'"}s history.
                            </p><br/>
                            <p className='text-[20px] text-[#666]'>
                                Auto Audit PRO VIN is an NMVTIS-approved (National Motor Vehicle Title Information System) data provider. NMVTIS is a national database designed to protect consumers from fraud and unsafe vehicles, prevent stolen vehicles from being resold, and offer accurate vehicle information.
                            </p><br/>
                            <p className='text-[20px] text-[#666]'>
                                The vehicle history reports provided by Auto Audit PRO VIN are essential for anyone interested in making a safe purchase and avoiding potential hidden issues associated with buying a used vehicle.
                            </p>
                            
                            {/* ======================================================================= */}

                            <h2 className='text-[32px] font-medium leading-[1em] mt-12 mb-7'>
                                How to Perform a Vehicle Check with Auto Audit PRO VIN?
                            </h2>
                            <p className='text-[20px] text-[#666]'>
                                To check a vehicle{"'"}s history, simply provide the unique 17-character VIN (Vehicle Identification Number) for used vehicles and light trucks from 1980 onwards. An Auto Audit PRO VIN Report will be generated from our extensive database of over 350 million records.
                            </p>

                            {/* ======================================================================= */}

                            <h2 className='text-[32px] font-medium leading-[1em] mt-12 mb-7'>
                                How to Use the Auto Audit PRO VIN Service?
                            </h2>
                            <p className='text-[20px] text-[#666]'>
                                We believe our vehicle history reports empower consumers to make informed decisions about buying a specific used vehicle. Auto Audit PRO VIN Reports may include details such as:
                            </p><br/>
                            <ul className='text-[20px] text-[#666] list-disc pl-6'>
                                <li>
                                    Odometer readings        
                                </li>
                                <li>
                                    Title information       
                                </li>
                                <li>
                                    Junk and salvage titles        
                                </li>
                                <li>
                                    Flood damage history        
                                </li>
                                <li>
                                    Accident history        
                                </li>
                                <li>
                                    Lemon history        
                                </li>
                                <li>
                                    Service records       
                                </li>
                                <li>
                                    Vehicle use records (e.g., if it was used as a taxi, rental, or police vehicle), and more.       
                                </li>
                            </ul>

                            {/* ======================================================================= */}

                            <h2 className='text-[32px] font-medium leading-[1em] mt-12 mb-7'>
                                How Does Auto Audit PRO VIN Obtain Its Information?
                            </h2>
                            <p className='text-[20px] text-[#666]'>
                                Auto Audit PRO VIN collects detailed information about vehicle titles, specifications, sales, accidents, thefts, and other relevant data from official U.S. government sources across the nation. This allows us to provide you with a thorough history report for the vehicle you are considering.
                            </p>

                            {/* ======================================================================= */}

                            <h2 className='text-[32px] font-medium leading-[1em] mt-12 mb-7'>
                                Cost of Auto Audit PRO VIN Membership & Vehicle History Report
                            </h2>
                            <p className='text-[20px] text-[#666]'>
                                We offer reliable, customer-friendly services. You can sign up for a membership account or generate sample reports at a competitive price. Car dealers and businesses can register for our dealer membership program for a fee of $69.99 per month. Our dealer services are available not only to car dealers but also to any licensed business that wishes to access our vehicle history reports.
                            </p>

                            {/* ======================================================================= */}

                            <h2 className='text-[32px] font-medium leading-[1em] mt-12 mb-7'>
                                How Reliable is Auto Audit PRO VIN?
                            </h2>
                            <p className='text-[20px] text-[#666]'>
                                At Auto Audit PRO VIN, we prioritize accuracy and integrity. Our commitment to providing precise and affordable reports makes us a leading choice. We use authoritative databases to ensure the reliability of our information.
                            </p>

                            {/* ======================================================================= */}

                            <h2 className='text-[32px] font-medium leading-[1em] mt-12 mb-7'>
                                Buying a Used Vehicle?
                            </h2>
                            <p className='text-[20px] text-[#666]'>
                                Before making a major purchase, always check the vehicle{"'"}s history. Avoid uncertainty by accessing detailed information on the vehicle’s past. Validate past accidents, previous owners, potential odometer rollbacks, and more to make an informed decision and avoid future issues.
                            </p>

                            {/* ======================================================================= */}

                            <h2 className='text-[32px] font-medium leading-[1em] mt-12 mb-7'>
                                Selling Your Vehicle?
                            </h2>
                            <p className='text-[20px] text-[#666]'>
                                Validate your vehicle{"'"}s condition with our comprehensive history report to potentially secure a higher selling price. Ensure there are no hidden issues and confirm that you are selling a clean vehicle.
                            </p><br/>
                            <p className='text-[20px] text-[#666]'>
                                At Auto Audit PRO VIN, we are committed to providing accurate and comprehensive data to help potential car buyers and owners make safe and informed decisions.
                            </p>
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