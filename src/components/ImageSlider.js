import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: require('../images/new-banner8.jpg') },
    { url: require('../images/num1.jpg') },
    { url: require('../images/new-banner6.jpg') },
    { url: require('../images/peb18.jpg') },
    { url: require('../images/roof.jpg') },
    { url: require('../images/PEB_VC_card.jpg') }
];

const ImageSlider = () => {
    return (
        <SimpleImageSlider className="slider-image"
            width={896}
            height={504}
            images={images}
            showBullets={true}
            showNavs={true}
        />
    )
}

export default ImageSlider
