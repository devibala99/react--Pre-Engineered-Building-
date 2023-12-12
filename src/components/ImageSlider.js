import React, { useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img11 from "../images/new-banner12.jpg";
import img21 from "../images/num1.jpg";
import img31 from "../images/new-banner6.jpg";
import img41 from "../images/peb18.jpg";
import img51 from "../images/roof.jpg";
import img61 from "../images/PEB_VC_card.jpg";
import img71 from "../images/metalShop1.jpg";
import img81 from "../images/metalRoof.jpg";
import img91 from "../images/cotton.jpg";

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import "../stylesheets/imageSlider.css"


const slides = [
    { image: img11 },
    { image: img21 },
    { image: img31 },
    { image: img41 },
    { image: img51 },
    { image: img61 },
    { image: img71 },
    { image: img81 },
    { image: img91 },
];

const ImageSlider = () => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }
    const prevSlide = () => {
        setCurrent(current === length - 1 ? 0 : current - 1);
    }
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    return (
        <section className='slider'>
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
            {slides.map((slide, index) => {
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}

                        key={index}
                    >
                        {index === current && (
                            <img src={slide.image} alt='slide' className='slideClick' />
                        )}
                    </div>
                );
            })}
        </section>
    )
}

export default ImageSlider
