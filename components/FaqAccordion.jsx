
"use client"
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import {Button} from '@nextui-org/button';

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
                <AccordionItem key="1" aria-label="Accordion 1" title="What is an Auto Audit Vehicle history report?">
                    {defaultContent}
                </AccordionItem>
                <AccordionItem key="2" aria-label="Accordion 2" title="For whom do we provide Vehicle history report?">
                    {defaultContent}
                </AccordionItem>
                <AccordionItem key="3" aria-label="Accordion 3" title="Do Auto Audit reports have information on every vehicle?">
                    {defaultContent}
                </AccordionItem>
                <AccordionItem key="4" aria-label="Accordion 3" title="What is a VIN?">
                    {defaultContent}
                </AccordionItem>
                <AccordionItem key="5" aria-label="Accordion 3" title="Where can I find my VIN number?">
                    {defaultContent}
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default FaqAccordion