import React from 'react'
import '../stylesheets/knowus.css'
import img from '../images/about.jpg'
import { AnimatedOnScroll } from "react-animated-css-onscroll";


const KnowUs = () => {
    return (
        <AnimatedOnScroll animationIn="fadeIn" >
            <div className='aboutSection'>
                <div className="container">
                    <div className="content-column">
                        <h2>ABOUT S.K ENGINEERS</h2>
                        <p>
                            <span>S.K ENGINEERS</span> was established in <span>2016</span> at the prime location of <span>Coimbator</span> which is <span>ISO 9001-2015 and ISO 14001:2015 </span>certified company. We grew as <span>trusted</span> company over a period of time.

                            <br />

                            We have great team of engineers who design and build <span>Pre-Engineered Buildings</span> in vast variety includes warehouse, industries, infrastructural buildings like school, shop, hospital, office, automobiles, logistics, etc. We provide client support to custom their buildings based on their needs. Diverse range of building designs, project management, support is our strength.
                            <br />
                        </p>
                    </div>
                    <div className="image-column">
                        <div className="border-image">
                            <img src={img} alt="aboutus" />
                        </div>
                    </div>
                </div>
            </div>


        </AnimatedOnScroll>
    )
}

export default KnowUs
