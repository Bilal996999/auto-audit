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
                            name="Sarah Johnson"
                            designation="Positive Review for a Seller"
                            content={'Selling my car was a breeze thanks to the vehicle history report from Auto Audit Pro. The detailed insights helped me highlight my car’s strengths, and I sold it quickly for a great price. Highly recommend!'}
                        />
                    </div>
                    <div>
                        <TestimonialBox
                            image={testimonial2}
                            name="Mike Thompson"
                            designation="Positive Review for a Buyer"
                            content={"As a first-time buyer, I was anxious about making the right choice. The vehicle history report from Auto Audit Pro gave me the confidence I needed. It was comprehensive and clear, helping me avoid potential issues. I'm thrilled with my new car!"}
                        />
                    </div>
                    <div>
                        <TestimonialBox
                            image={testimonial3}
                            name="Emily Davis"
                            designation="Excellent Customer Service"
                            content={'I was really impressed by the customer service at Auto Audit Pro. They answered all my questions and made the report process seamless. The history report was thorough and easy to understand. I felt supported throughout!'}
                        />
                    </div>
                    <div>
                        <TestimonialBox
                            image={testimonial1}
                            name="David Martinez"
                            designation="Detailed and Reliable"
                            content={"The vehicle history report from Auto Audit Pro was incredibly thorough and reliable. The detailed insights helped me make an informed decision. This service is a must for anyone buying or selling a car!"}
                        />
                    </div>
                    <div>
                        <TestimonialBox
                            image={testimonial2}
                            name="Jessica Lee"
                            designation="Quick Turnaround"
                            content={'I needed a vehicle history report on short notice, and Auto Audit Pro delivered! They provided the report in minutes without compromising quality. It helped me finalize my purchase with an ease!'}
                        />
                    </div>
                    <div>
                        <TestimonialBox
                            image={testimonial3}
                            name="John Wilson"
                            designation="Great Value for Money"
                            content={'I was amazed at the value I received from Auto Audit Pro. The history report was detailed and comprehensive, far exceeding my expectations for the price. It’s worth every penny!'}
                        />
                    </div>
                    <div>
                        <TestimonialBox
                            image={testimonial3}
                            name="Karen White"
                            designation="Peace of Mind for Sellers"
                            content={'I felt much more at ease selling my car after getting the history report from Auto Audit Pro. It provided transparency that potential buyers appreciated. Highly recommended!'}
                        />
                    </div>
                    <div>
                        <TestimonialBox
                            image={testimonial3}
                            name="Brian Clark"
                            designation="Comprehensive Inspection"
                            content={'The vehicle history report provided by Auto Audit Pro was incredibly comprehensive. They covered every detail, helping me understand the true condition of the vehicle. I couldn’t be happier with the service!'}
                        />
                    </div>
                    <div>
                        <TestimonialBox
                            image={testimonial3}
                            name="Laura Robinson"
                            designation="User-Friendly Report"
                            content={'The vehicle history report I received from Auto Audit Pro was easy to read and understand. They did a fantastic job breaking down the information, making it accessible even for someone who isn’t a car expert!'}
                        />
                    </div>
                    <div>
                        <TestimonialBox
                            image={testimonial3}
                            name="Chris Hall"
                            designation="Avoided a Bad Purchase"
                            content={'Thanks to Auto Audit Pro, I avoided buying a car that had hidden issues. The history report was thorough and helped me make a smart choice. I’ll definitely use their services again!'}
                        />
                    </div>
                    <div>
                        <TestimonialBox
                            image={testimonial3}
                            name="Megan Young"
                            designation="Expert Insights"
                            content={'The insights in the vehicle history report were invaluable. Auto Audit Pro has a reliable source that really knows their stuff. I felt confident in my buying decision because of their expertise!'}
                        />
                    </div>
                    <div>
                        <TestimonialBox
                            image={testimonial3}
                            name="Robert King"
                            designation="Repeat Customer"
                            content={'I’ve used Auto Audit Pro for multiple vehicle transactions, and I’m always impressed with the quality of their reports. Each history report has been detailed and reliable. I wouldn’t trust anyone else!'}
                        />
                    </div>
                </Slider>
            </div>
        </section>

    )
}

export default Testimonials