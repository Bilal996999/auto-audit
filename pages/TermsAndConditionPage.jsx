import React from 'react'
import FloatVinCard from "@/components/FloatVinCard"
import Breadcrumb from '@/components/Breadcrumb'

const TermsAndConditionPage = () => {
  return (
    <>
      <Breadcrumb currentPage="Terms & Conditions" />
      <section className='mb-24 relative'>
        <div className='container mx-auto relative z-10 px-2 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-start gap-16 relative flex-wrap md:flex-nowrap'>
            <div className='lg:w-[70%] w-full'>
              <h1 className='lg:text-[44px] md:text-[38px] sm:text-[30px] text-[26px] font-bold leading-[1em] mt-10 mb-7'>
                DISCLAIMER
              </h1>
              <p className='lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] text-[#666]'>
                By proceeding with the payment, you acknowledge that you are paying solely for the vehicle history report, and you agree that charges are non-refundable unless the report is not delivered within 24 hours of purchase. In such a case, you are entitled to request a refund. Otherwise, no chargeback or refund claims will be entertained.
              </p> <br/>
              <h1 className='lg:text-[44px] md:text-[38px] sm:text-[30px] text-[26px] font-bold leading-[1em] mt-10 mb-7'>
                Terms and Conditions
              </h1>
              <p className='lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] text-[#666]'>
                Should you continue to browse and use this website, you must agree to comply with and be bound by the following terms and conditions, which together with the NMVTIS Disclaimer and Privacy Policy govern Autoauditpro.com {'’'}s relationship with you in relation to this website.
              </p> <br/>
              <p className='lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] text-[#666]' >
                BY USING THIS SITE, YOU AGREE TO BE BOUND BY THESE TERMS AND CONDITIONS. IF YOU DO NOT WISH TO BE BOUND BY THE THESE TERMS OF USE, PLEASE EXIT THE SITE NOW. YOUR REMEDY FOR DISSATISFACTION WITH THIS SITE, OR ANY PRODUCTS, SERVICES, CONTENTS, OR OTHER INFORMATION AVAILABLE ON OR THROUGH THIS SITE, IS TO STOP USING THE SITE AND/OR THOSE PARTICULAR PRODUCTS OR SERVICES. YOUR AGREEMENT WITH US REGARDING COMPLIANCE WITH THESE TERMS OF USE BECOMES EFFECTIVE IMMEDIATELY UPON COMMENCEMENT OF YOUR USE OF THIS SITE.
              </p> <br/>
              <p className='lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] text-[#666]' >
                We expressly reserve the right to change these Terms and Conditions from time to time without any notice. You acknowledge and agree that it is your responsibility to review this site and these Terms and Conditions from time to time and to familiarize yourself with any modifications. Your continued use of this site after such modifications will constitute acknowledgement of the modified Terms and Conditions and agreement to abide and be bound by the modified Terms and Conditions.
              </p>

              {/* ======================================================================= */}

              <h2 className='lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px] font-medium leading-[1em] mt-12 mb-7'>
                Registration Data and Privacy
              </h2>
              <p className='lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] text-[#666]'>
                In order to access the services on this site, you will be required to use an account and password that can be obtained by completing our online registration form, which requests certain information and data (“Registration Data”). By registering, you agree that all information provided in the Registration Data is true and accurate and that you will maintain and update this information as required, to keep it current, complete, and accurate.
              </p><br/>
              <p className='lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] text-[#666]'>
                The information we obtain through your use of this site, including your Registration Data, is subject to our Privacy Policy, which is specifically incorporated by reference into these Terms and Conditions.
              </p><br/>

              {/* ======================================================================= */}

              <h2 className='lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px] font-medium leading-[1em] mt-12 mb-7'>
                Third Party Sites and Information
              </h2>
              <p className='lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] text-[#666]'>
                This site may link you to other sites on the Internet or otherwise include references to information, documents, software, materials and/or services provided by other parties. These other sites and parties are not under our control. Consequently, we assume no responsibilities for the accuracy, copyright compliance, legality or any other aspect of the sites. The inclusion of such a link or reference is provided merely as a convenience and does not imply endorsement of, or association with, the site or party by us, or any warranty of any kind, either express or implied. We suggest that that you carefully review terms of use and privacy policies on these sites.
              </p><br />

              {/* ======================================================================= */}

              <h2 className='lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px] font-medium leading-[1em] mt-12 mb-7'>
                Payment
              </h2>
              <p className='lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] text-[#666]'>
                Any and all payments for services shall be made by the Customer in United States dollars through an approved payment processor, such as Authorize.net or WePay. Payment are non-refundable, except when an exception is approved by a representative of Autoauditpro.com. An applicable sales tax may be assessed based on the Customer{"'"}s billing zip code. For Washington State residents, the local and state tax rate will be assessed according to the rates given by the Washington State Department of Revenue.
              </p><br/>

              {/* ======================================================================= */}

              <h2 className='lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px] font-medium leading-[1em] mt-12 mb-7'>
                Right to Access and Use Vehicle History Reports
              </h2>
              <p className='lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] text-[#666]'>
                You are hereby granted a limited, revocable, non-exclusive and non-transferable license to access and use the Vehicle History Reports {'(“Reports”)'} generated by Autoauditpro.com solely for your personal use and only in accordance with these Terms and Conditions. You may not modify, publish, transmit, display, participate in the transfer or sale, assign, rent, transfer, act as a service bureau, sublicense or otherwise grant rights in the Report to any other person or entity or in any way exploit any of the Reports or any content therein, in whole or in part. Except as otherwise expressly permitted under these Terms and Conditions or copyright law, no copying, redistribution, retransmission, publication or commercial exploitation of downloaded material will be permitted without the express written permission of Autoauditpro.com.
              </p><br/>
              {/* ======================================================================= */}

              <h2 className='lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px] font-medium leading-[1em] mt-12 mb-7'>
                Intellectual Property Information
              </h2>
              <p className='lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] text-[#666]'>
                By accepting these Terms and Conditions, you acknowledge and agree that all content presented to you on this site is protected by copyrights, trademarks, service marks, patents, other proprietary rights, and laws, and is the sole property of Autoauditpro.com and/or its Affiliates. You are only permitted to use the content as expressly authorized by us or the specific content provider. Except for a single copy made for personal use only, you may not copy, reproduce, modify, republish, upload, post, transmit, or distribute any documents or information from this site in any form or by any means without prior written permission from us or the specific content provider, and you are solely responsible for obtaining permission before reusing any copyrighted material that is available on this site. Any unauthorized use of the materials appearing on this site may violate copyright, trademark and other applicable laws and could result in criminal or civil penalties.
              </p><br/>
              <p className='lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] text-[#666]'>
                Neither we nor our Affiliates warrant that your use of materials displayed on or obtained through this site will not infringe the rights of third parties.
              </p><br/>
              <p className='lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] text-[#666]'>
                All custom graphics, icons, logos and service names are registered trademarks or service marks of Autoauditpro.com or its Affiliates. All other trademarks or service marks are property of their respective owners. Nothing in these Terms and Conditions grants you any right to use any trademark, service mark, logo, and/or the name of Autoauditpro.com or its Affiliates.
              </p><br/>
              {/* ======================================================================= */}

              <h2 className='lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px] font-medium leading-[1em] mt-12 mb-7'>
                Disclaimer of Warranties
              </h2>
              <p className='lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] text-[#666]'>
                {'ALL MATERIALS AND SERVICES ON THIS SITE ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE, OR THE WARRANTY OF NON-INFRINGEMENT. WITHOUT LIMITING THE FOREGOING, WE MAKE NO WARRANTY THAT (A) THE SERVICES AND MATERIALS WILL MEET YOUR REQUIREMENTS, (B) THE SERVICES AND MATERIALS WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, (C) THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE SERVICES OR MATERIALS WILL BE EFFECTIVE, ACCURATE OR RELIABLE, OR (D) THE QUALITY OF ANY PRODUCTS, SERVICES, OR INFORMATION PURCHASED OR OBTAINED BY YOU FROM THE SITE FROM US OR OUR AFFILIATES WILL MEET YOUR EXPECTATIONS OR BE FREE FROM MISTAKES, ERRORS OR DEFECTS.'}
              </p><br/>
              <p className='lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] text-[#666]'>
                {'THIS SITE COULD INCLUDE TECHNICAL OR OTHER MISTAKES, INACCURACIES OR TYPOGRAPHICAL ERRORS. WE MAY MAKE CHANGES TO THE MATERIALS AND SERVICES AT THIS SITE, INCLUDING THE PRICES AND DESCRIPTIONS OF ANY PRODUCTS LISTED HEREIN, AT ANY TIME WITHOUT NOTICE. THE MATERIALS OR SERVICES AT THIS SITE MAY BE OUT OF DATE, AND WE MAKE NO COMMITMENT TO UPDATE SUCH MATERIALS OR SERVICES.'}
              </p><br/>
              <p className='lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] text-[#666]'>
                {'THE USE OF THE SERVICES OR THE DOWNLOADING OR OTHER ACQUISITION OF ANY MATERIALS THROUGH THIS SITE IS DONE AT YOUR OWN DISCRETION AND RISK AND WITH YOUR AGREEMENT THAT YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR LOSS OF DATA THAT RESULTS FROM SUCH ACTIVITIES.'}
              </p><br/>
              {/* ======================================================================= */}

              <h2 className='lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px] font-medium leading-[1em] mt-12 mb-7'>
                Security, Password and Personal Use
              </h2>
              <p className='lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] text-[#666]'>
                {'You are solely responsible for maintaining the confidentiality of your password and account. You must take steps to ensure that others do not gain access to your password and account. Our personnel will never ask you for your password. You may not transfer or share your account with anyone, and we reserve the right to immediately terminate your account if you do transfer or share your account with others.'}
              </p><br/>
              <p className='lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] text-[#666]'>
                {'We offer you access to the Autoauditpro.com website solely for your own personal and non-commercial use. You may not resell or make any commercial use of this website and its content. Any violation in this regard will lead to immediate account termination and appropriate legal actions.'}
              </p><br/>
              {/* ======================================================================= */}

              <h2 className='lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px] font-medium leading-[1em] mt-12 mb-7'>
                Termination of Use
              </h2>
              <p className='lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] text-[#666]'>
                {'You agree that we may, in our sole discretion, terminate or suspend your access to all or part of the site with or without notice and for any reason, including, without limitation, breach of these Terms of Use. Any suspected fraudulent, abusive or illegal activity may be grounds for terminating your relationship and may be referred to appropriate law enforcement authorities.'}
              </p><br/>
              <p className='lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] text-[#666]'>
                {'Upon termination or suspension, regardless of the reasons therefore, your right to use the services available on this site immediately ceases, and you acknowledge and agree that we may immediately deactivate or delete your account. We may also delete all files stored in your account and all the related information. We shall not be liable to you or any third party for any claims or damages arising out of any termination or suspension or any other actions taken by us in connection with such termination or suspension.'}
              </p><br/>
              {/* ======================================================================= */}

              <h2 className='lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px] font-medium leading-[1em] mt-12 mb-7'>
                Governing Law
              </h2>
              <p className='lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] text-[#666]'>
                {'This site (excluding any linked sites) is controlled by us from our offices within the United States of America. You agree to comply with all local, state, federal, and national laws, statutes, ordinances, and regulations that apply to your use of the service.'}
              </p><br/>
              {/* ======================================================================= */}

              <h2 className='lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px] font-medium leading-[1em] mt-12 mb-7'>
                NMVTIS Consumer Access Product Disclaimer
              </h2>
              <p className='lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] text-[#666]'>
                {'The National Motor Vehicle Title Information System (NMVTIS) is an electronic system that contains information on certain automobiles titled in the United States. NMVTIS is intended to serve as a reliable source of title and brand history for automobiles, but it does not contain detailed information regarding a vehicle’s repair history.'}
              </p><br/>
              <p className='lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] text-[#666]'>
                {'All states, insurance companies, and junk and salvage yards are required by federal law to regularly report information to NMVTIS. However, NMVTIS does not contain information on all motor vehicles in the United States because some states are not yet providing their vehicle data to the system. Currently, the data provided to NMVTIS by states is provided in a variety of time frames; while some states report and update NMVTIS data in “real-time” (as title transactions occur), other states send updates less frequently, such as once every 24 hours or within a period of days.'}
              </p><br/>
              <p className='lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] text-[#666]'>
                {'Information on previous, significant vehicle damage may not be included in the system if the vehicle was never determined by an insurance company (or other appropriate entity) to be a “total loss” or branded by a state titling agency. Conversely, an insurance carrier may be required to report a “total loss” even if the vehicle’s titling-state has not determined the vehicle to be “salvage” or “junk.”'}
              </p><br/>
              <p className='lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] text-[#666]'>
                {'A vehicle history report is NOT a substitute for an independent vehicle inspection. Before making a decision to purchase a vehicle, consumers are strongly encouraged to also obtain an independent vehicle inspection to ensure the vehicle does not have hidden damage. The Approved NMVTIS Data Providers (look for the NMVTIS logo) can include vehicle condition data from sources other than NMVTIS.'}
              </p><br/>
              <p className='lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] text-[#666]'>
                {'NMVTIS data includes (as available by those entities required to report to the System): Information from participating state motor vehicle titling agencies.'}
              </p><br/>
              <p className='lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] text-[#666]'>
                {'Information on automobiles, buses, trucks, motorcycles, recreational vehicles, motor homes, and tractors. NMVTIS may not currently include commercial vehicles if those vehicles are not included in a state’s primary database for title records (in some states, those vehicles are managed by a separate state agency), although these records may be added at a later time. Information on “brands” applied to vehicles provided by participating state motor vehicle titling agencies. Brand types and definitions vary by state, but may provide useful information about the condition or prior use of the vehicle. '}
              </p><br/>
              <p className='lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] text-[#666]'>
                {'Most recent odometer reading in the state’s title record. Information from insurance companies, and auto recyclers, including junk and salvage yards, that is required by law to be reported to the system, beginning March 31, 2009. This information will include if the vehicle was determined to be a “total loss” by an insurance carrier. '}
              </p><br/>
              <p className='lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] text-[#666]'>
                {'Information from junk and salvage yards receiving a “cash for clunker” vehicle traded-in under the Consumer Assistance to Recycle and Save Act of 2009 (CARS) Program.'}
              </p><br/>
              <p className='lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] text-[#666]'>
                {'Consumers are advised to visit www.vehiclehistory.gov for details on how to interpret the information in the system and understand the meaning of various labels applied to vehicles by the participating state motor vehicle titling agencies.'}
              </p><br/>
              {/* ======================================================================= */}

              <h2 className='lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px] font-medium leading-[1em] mt-12 mb-7'>
                Autoauditpro.com Report Disclaimer
              </h2>
              <p className='lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] text-[#666]'>
                {'The information used to compile this report is aggregated from various government agencies, non-profit organizations, and industry sources. Access to the National Motor Vehicle Title Information System (NMVTIS) is facilitated through VinAudit Inc., an Approved NMVTIS Data Provider. The accuracy and reliability of the information supplied depends primarily on the reporting sources, and all entities involved in compiling this report accept no liability for any errors or omissions. Furthermore, all warranties, expressed or implied, including any implied warranties of merchantability or fitness for a particular purpose are hereby disclaimed.'}
              </p><br/>
              <p className='lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] text-[#666]'>
                {'Once again, by browsing and using this website and its content, you must agree to comply with and be bound by the Terms and Conditions, along with Privacy Policy stated above. Otherwise, please exit the site now. If you have any questions concerning our Terms and Conditions, Privacy Policy, or any related concerns, please feel free to Contact Us.'}
              </p><br/>

            </div>
            <aside className='md:w-[30%] w-full md:sticky md:top-3 static bottom-3'>
              <FloatVinCard />
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

export default TermsAndConditionPage