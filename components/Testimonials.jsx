"use client"
import React from 'react'
import Slider from "react-slick";
import SectionHeading from './SectionHeading';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonial1 from "@/images/testimonial-1.png"
import testimonial2 from "@/images/testimonial-2.png"
import testimonial3 from "@/images/testimonial-3.png"
import TestimonialBox from './TestimonialBox';

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        className: "center",
        centerMode: true,
        centerPadding: "00px",
    };

    const testimonialContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim "

    return (
        <section className='py-20 overflow-x-hidden bg-gradient-to-b from-[#fff] to-[#E1F6FF]'>
            <div className='container mx-auto px-2 sm:px-6 lg:px-8'>
                <SectionHeading smallHeading="" mainHeading="What Our Clients Say About Us" />
                <Slider {...settings} className='mt-28'>
                    <div>
                        <TestimonialBox
                            image={testimonial1}
                            name="Hannah Schmitt"
                            designation="Lead designer"
                            content={testimonialContent}
                        />
                    </div>
                    <div>
                        <TestimonialBox
                            image={testimonial2}
                            name="Hannah Schmitt"
                            designation="Lead designer"
                            content={testimonialContent}
                        />
                    </div>
                    <div>
                        <TestimonialBox
                            image={testimonial3}
                            name="Hannah Schmitt"
                            designation="Lead designer"
                            content={testimonialContent}
                        />
                    </div>
                    <div>
                        <TestimonialBox
                            image={testimonial1}
                            name="Hannah Schmitt"
                            designation="Lead designer"
                            content={testimonialContent}
                        />
                    </div>
                    <div>
                        <TestimonialBox
                            image={testimonial2}
                            name="Hannah Schmitt"
                            designation="Lead designer"
                            content={testimonialContent}
                        />
                    </div>
                    <div>
                        <TestimonialBox
                            image={testimonial3}
                            name="Hannah Schmitt"
                            designation="Lead designer"
                            content={testimonialContent}
                        />
                    </div>
                </Slider>
            </div>
        </section>

    )
}

export default Testimonials