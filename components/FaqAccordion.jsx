
"use client"
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Button } from '@nextui-org/button';

const FaqAccordion = () => {

    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    const itemClasses = {
        base: "py-[32px] w-full",
        title: "font-medium text-[24px]",
        trigger: "py-0 rounded-lg flex items-center",
        indicator: "text-[20px]",
        content: "text-[18px] text-[#666] ps-2 pt-5 pe-20",
    };

    return (
        <div className='faq-accordion'>
            {/* <Accordion title="What is an Auto Audit Vehicle history report?" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
            </Accordion>
            <Accordion title="For whom do we provide Vehicle history report?" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
            </Accordion>
            <Accordion title="Do Auto Audit reports have information on every vehicle?" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
            </Accordion>
            <Accordion title="What is a VIN?" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
            </Accordion>
            <Accordion title="Where can I find my VIN number?" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
            </Accordion> */}
            <Accordion itemClasses={itemClasses}>
                <AccordionItem key="1" aria-label="Accordion 1" title="What Can You Learn From a Vehicle History Report?">
                    With a vehicle history report, anyone can find out every single detail about a vehicle’s past. A VIN check reveals accident history, lien records, theft, flood or fire damage, salvage title brands, mileage rollback, past usage (e.g., taxi, rental, police), and more.
                </AccordionItem>
                <AccordionItem key="2" aria-label="Accordion 2" title="What information is included in a car history report?">
                    <ul className="list-disc ps-7">
                        <li>Accidents history</li>
                        <li>Safety recalls & defects</li>
                        <li>Lien & loan</li>
                        <li>Theft & recovery records</li>
                        <li>Branded titles</li>
                        <li>Flood, water, hail, and Fire damage</li>
                        <li>Salvage, rebuilt, junk title check</li>
                        <li>Mileage rollback</li>
                        <li>Vehicle Specifications</li>
                        <li>Personal, taxi, rental or police use and more</li>
                    </ul>

                </AccordionItem>
                <AccordionItem key="3" aria-label="Accordion 3" title="Is there a cheaper alternative to Carfax?">
                    Yes, there are cheaper alternatives to Carfax, including some free options. However, free reports often lack comprehensive details. Detailed Vehicle History reports are the best affordable alternative, offering more thorough and reliable information.
                </AccordionItem>
                <AccordionItem key="4" aria-label="Accordion 4" title="Can I change my VIN number?">
                    According to the state and federal laws, it is illegal to change, tamper with, or alter your VIN number. It is also important to check for a VIN duplication after parts or accessories of your vehicle have been replaced. As mentioned in California Vehicle Code Sections 10802, 10803, and 10750: VIN Tampering- Illegal Sales, Possession, or Alterations of Vehicle Identification Numbers (VINs) is a federal crime and is punishable by the court of law. This misdemeanor can get you up to three years in prison, in addition to a penalty of up to $25,000 dollars.
                </AccordionItem>
                <AccordionItem key="5" aria-label="Accordion 5" title="Are VIN and chassis numbers the same?">
                    Yes, the VIN or vehicle identification number of your vehicle is sometimes called chassis number. Chassis number and VIN number are two different names of the same thing.
                </AccordionItem>
                <AccordionItem key="6" aria-label="Accordion 6" title="Which vehicle history report is the best?">
                    A vehicle history report is a detailed record of your vehicle’s history. This report is very helpful in creating a high value for your car in the used car sales market place. If you are looking for the best vehicle history report, find one that has the maximum number of checking systems in place to generate a comprehensive, in-depth, and verified history report. Detailed Vehicle History checks each and every vehicle for more than 60 factors of verifications. Our history reports are certified by sources like NADA, NMVTIS, MOT, DMV, KBB, and Edmunds. Our reports have lifetime validity. Our reports take into consideration factors like title brands, loan history, branded history, state transfer history, previous sales records, and weather damages. These factors are usually hidden or unaccounted for by other services because of the limited database sources required to check them.
                </AccordionItem>
                <AccordionItem key="7" aria-label="Accordion 7" title="How to get a free vehicle history report?">
                    It is possible to get a free vehicle history report. However, the information from a free vehicle history report generator is always incomplete, limited, and not bona fide. This is because getting access to the federal and state databases like NADA, NHMTIS, DMV, MOT, KBB, and Edmunds requires money and a lot of hard work. After these databases are obtained they are cross checked and organized to create a valid, verified, and reliable vehicle history reports. A free vehicle report at best may only cover 1-2 factors of your entire vehicle history. Whereas by the standards of used car sales markets, 60 factors all comprehensive vehicle history report is an unspoken mandatory requirement for yielding the maximum returns on your used car sales. Our sample template of a detailed vehicle history arranges your data in such a way that the chances of your used vehicle sold for the highest bid maximize.
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default FaqAccordion