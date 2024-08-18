import React from 'react'
import FloatVinCard from "@/components/FloatVinCard"
import Breadcrumb from '@/components/Breadcrumb'

const TermsAndConditionPage = () => {
  return (
    <>
      <Breadcrumb currentPage="Terms & Conditions" />
      <section className='mb-24 relative'>
        <div className='container mx-auto relative z-10 px-2 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-start gap-16 relative'>
            <div className='w-[70%]'>
              <h1 className='text-[44px] font-bold leading-[1em] mt-10 mb-7'>
                Terms and Conditions
              </h1>
              <p className='text-[20px] text-[#666]'>
                Welcome to autoauditpro.com, owned by Auto Audit Pro™ (“we,” “us,” “our”). By staying on this site and using its features, you agree to comply with our Terms of Service. Together with the NMVTIS Disclaimer and Privacy Policy, these Terms of Service govern your use of this website.
              </p> <br/>
              <p className='text-[20px] text-[#666]' >
                Service govern your use of this website.
              </p>

              {/* ======================================================================= */}

              <h2 className='text-[32px] font-medium leading-[1em] mt-12 mb-7'>
                Agreement to be bound; changes to terms
              </h2>
              <p className='text-[20px] text-[#666]'>
                This document is a legal agreement between you and Auto Audit Pro that outlines the rules for using our products and services (“Services”), which are available through our Website, https://autoauditpro.com. By using the Website, products, or services, you accept these Terms.
              </p><br/>
              <p className='text-[20px] text-[#666]'>
                We may update these Terms periodically and at our discretion, which could include new terms, licenses, or policies. If we make changes, we will notify you via email and by posting a notice on the Website. If you do not agree with these changes, do not use our Services. Continuing to use autoauditpro.com after changes are posted means you accept the updated Terms.
              </p>
              <p className='text-[20px] text-[#666]'>
                We reserve the right to deny access to any Service for any reason or no reason, including non-compliance with these Terms.
              </p>

              {/* ======================================================================= */}

              <h2 className='text-[32px] font-medium leading-[1em] mt-12 mb-7'>
                Description Auto Audit PRO Services
              </h2>
              <p className='text-[20px] text-[#666]'>
                We provide essential, real-time data through Vehicle History Reports and Auto Auction Records Reports to automotive dealers and consumers interested in buying used vehicles. Our additional services include a VIN Decoder and Vehicle Recalls Check. Our Vehicle History Reports include data from the National Motor Vehicle Title Information System (NMVTIS) as well as lien and theft information not provided by NMVTIS. If a vehicle has been sold via auction, our Vehicle History Reports may also include auction database information, including photos and details that were publicly accessible on the auction website. This information is also available in Auto Audit Pro Auto Auction Records Reports. Our Vehicle Inspection Reports are based on data collected by our representatives who perform the inspections.
              </p><br />
              <p className='text-[20px] text-[#666]'>
                We do not guarantee that the information in these reports is always accurate, up-to-date, or complete. It is provided for informational purposes only and should not be solely relied upon when purchasing a used vehicle. Any reliance on our reports is at your own risk. We are not liable for any purchases made based on our reports.
              </p><br />

              {/* ======================================================================= */}

              <h2 className='text-[32px] font-medium leading-[1em] mt-12 mb-7'>
                Age Requirements for use of service
              </h2>
              <p className='text-[20px] text-[#666]'>
                Auto Audit Pro{"'"}s services are available to individuals aged 13 and older. Those under 18 must obtain parental or guardian consent, with the understanding that the parent or guardian agrees to be bound by these Terms as well.
              </p>

              {/* ======================================================================= */}

              <h2 className='text-[32px] font-medium leading-[1em] mt-12 mb-7'>
                Software and hardware requirements
              </h2>
              <p className='text-[20px] text-[#666]'>
                To use Auto Audit Pro{"'"}s services, you need Internet access and certain software, which you may need to purchase. Upgrades and updates may be required occasionally. For optimal performance, we recommend a high-speed Internet connection. We do not guarantee that your computer or device will be compatible with the Services. We are not responsible for any failure to access the site or our Services, and no refunds will be provided in such cases.
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

export default TermsAndConditionPage