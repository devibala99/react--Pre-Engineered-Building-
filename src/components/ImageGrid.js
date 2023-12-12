import React from 'react'
import shop from "../images/designshop.jpg";
import infra1 from "../images/design6.jpg";
import infra2 from "../images/roof.jpg";
import indus1 from "../images/peb101.jpeg";
import indus2 from "../images/peb8.jpeg";
import indus3 from "../images/peb7.jpeg";
import infra3 from "../images/design4.jpg";
import indus4 from "../images/design1.jpg";
import indus5 from "../images/peb10.jpeg";
import indus6 from "../images/peb16.jpg";
import indus7 from "../images/peb102.jpeg"
import indus8 from "../images/new-banner8.jpg";
import indus9 from "../images/new-banner6.jpg";
import indus10 from "../images/new-banner11.jpg"
import indus11 from "../images/num1.jpg"
import des3 from "../images/peb18.jpg"

import "../stylesheets/project.css"

const ImageGrid = () => {

    const gridImages = [
        { image: shop, id: 1, alt: "Infrastructure", title: "PEB Shop", desc: "Low cost shop setup" },
        { image: infra1, id: 2, alt: "Infrastructure", title: "Office", desc: "Infrastructure with office interior work" },
        { image: infra2, id: 3, alt: "Infrastructure", title: "Industry", desc: "Industry roofing" },
        { image: indus1, id: 4, alt: "Industrial", title: "Open Shed", desc: "Pre-Enginnered shed" },
        { image: indus2, id: 5, alt: "PEB", title: "Industrial Warehouse", desc: "Industrial warehouse for farming" },
        { image: indus3, id: 6, alt: "PEB", title: "Industry", desc: "Pre Engineered Building - Industry" },
        { image: indus4, id: 7, alt: "PEB", title: "Industrial Warehouse", desc: "Industrial warehouse for instruments and gadgets" },
        { image: infra3, id: 8, alt: "PEB", title: "House/Office Interior", desc: "Pre-Engineered Building Steel Interior" },
        { image: indus5, id: 9, alt: "PEB", title: "Warehouse", desc: "Warehouse for Cotton" },
        { image: indus6, id: 10, alt: "PEB", title: "PEB Industry", desc: "Pre Engineered Building - Industry" },
        { image: des3, id: 11, alt: "PEB", title: "Office/Play School", desc: "PEB with Interiors" },
        { image: indus7, id: 12, alt: "PEB", title: "Open Shed for Vehicles", desc: "Pre-Enginnered shed" },
        { image: indus8, id: 13, alt: "PEB", title: "Office", desc: "Cost effective PEB Office" },
        { image: indus9, id: 14, alt: "PEB", title: "Shop", desc: "Shop with warehouse and parking" },
        { image: indus10, id: 15, alt: "PEB", title: "Industry", desc: "Pre Engineered Building - Industry" },
        { image: indus11, id: 16, alt: "PEB", title: "Industrial Warehouse", desc: "Pre Engineered Warehouse for storage" },
    ]

    const imagesGrid = gridImages.map((list) => {
        return (
            <div className='grid-gallery' key={list.id} >
                <img src={list.image} alt={list.alt} key={list.id} />
                <div className='imageContent'>
                    <h3>{list.title}</h3>
                    <p>{list.desc}</p>
                </div>
            </div>
        )

    })
    console.log(imagesGrid);
    return (
        <div className='gallery'>
            {imagesGrid}
        </div>
    )
}

export default ImageGrid
