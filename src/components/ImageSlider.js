import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../stylesheets/homeAnimation.css"
import img1 from "../images/new-banner8.jpg";
import img2 from "../images/num1.jpg";
import img3 from "../images/new-banner6.jpg";
import img4 from "../images/peb18.jpg";
import img5 from "../images/roof.jpg";
import img6 from "../images/PEB_VC_card.jpg";

const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6
];

const ImageSlider = () => {
    return (
        <div className="box">
            <Carousel useKeyboardArrows={true}>
                {images.map((URL, index) => (
                    <div className="slide">
                        <img alt="sample_file" src={URL} key={index} />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default ImageSlider
