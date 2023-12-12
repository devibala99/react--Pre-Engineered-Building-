import React, { useState } from 'react'
import "../stylesheets/review.css"
import Footer from './Footer'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const Reviews = () => {

    const reviewData = [{
        id: 1, name: 'Sathya', title: "Testimonial", msg: "One of the things I appreciate most about Pre Engineered Buildings is that they are always willing to go the extra mile. When I had a problem with one of my buildings, they were right there to help me fix it. They even went so far as to send me a replacement part at no charge.",
    },
    {
        id: 2, name: 'Mahesh Kannan', title: "Review", msg: "I am very happy with the pre-engineered building that was built for my company. It is well-built and sturdy, and it was completed on time and within budget. The staff at the company was very professional and helpful, and they made the whole process very easy. I would definitely recommend this company to anyone looking for a pre-engineered building.",
    },
    {
        id: 3, name: "Sri Harish Vel", title: "Review", msg: "I am very impressed with the quality of the pre engineered building that was constructed by your company. The building is very sturdy and well-built, and it was completed on time and within budget. I would highly recommend your company to anyone looking for a pre engineered building.",
    },
    {
        id: 4, name: "Jaya Sri Ambigai", title: "Testimonial", msg: "I am very impressed with the quality of the pre engineered building that was constructed by your company. The building is very sturdy and well-built, and it was completed on time and within budget. I would highly recommend your company to anyone looking for a pre engineered building.",
    }
    ];

    const [current, setCurrent] = useState(0);
    const length = reviewData.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }
    const prevSlide = () => {
        setCurrent(current === length - 1 ? 0 : current - 1);
    }
    if (!Array.isArray(reviewData) || reviewData.length <= 0) {
        return null;
    }
    return (
        <div className='review-container'>
            <br /><br /><br /><br />

            <div className="review-box">

                <div className="review">
                    <h1 id="review-heading">HAPPY CUSTOMERS</h1>
                    <div className="review-people">


                        <section className='slider'>
                            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
                            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
                            {reviewData.map((item, index) => {
                                return (
                                    <div
                                        className={index === current ? 'slide active' : 'slide'}

                                        key={index}
                                    >
                                        {index === current && (
                                            <div className="center" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", lineHeight: "2", margin: "2rem 0 0 8rem", padding: "1.5rem", width: "80%" }}>

                                                <h1>{item.title}</h1>
                                                <p style={{ color: "#555555", letterSpacing: ".6px", fontSize: "1.2rem" }}>{item.msg}</p>
                                                <p style={{
                                                    textAlign: "right",
                                                    fontWeight: "500", fontSize: "1.3rem", color: "#cd1e2d"
                                                }}>--{item.name}</p>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </section>


                    </div>
                </div>
            </div>

            <Footer />

        </div >
    )

}

export default Reviews

