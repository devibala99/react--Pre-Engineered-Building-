import React from 'react'
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { Parallax } from "react-scroll-parallax";
import HomepageAnimation from './HomepageAnimation';
import peb21 from "../images/peb21.jpg"
import ware from "../images/peb9.jpeg"
import indus from "../images/new-banner14.jpg"
import ImageSlider from './ImageSlider';
import KnowUs from './KnowUs';

const HomeLayout = () => {


    return (
        <div className='home_page'>
            <HomepageAnimation />

            <KnowUs />
            <div>

                <Parallax speed={-1}>
                    <div className="slow">
                        <AnimatedOnScroll className='roll-in'
                            animationIn="bounceInRight"
                            style={{
                                marginTop: "80px",
                                color: "green",
                            }}>

                            <h2>Why to choose PEB's over Traditional Buildings</h2>
                            <ul className='slow-list' id='slow-lost'>
                                <li>Cose Effective</li>
                                <li>Life span of PEB buildings are like 50-100 years</li>
                                <li>Reduced Construction time</li>
                                <li>Less Manpower at Site</li>
                                <li>Scope for Future Expansion</li>
                                <li>Flexibility in Design</li>
                                <li>Seismic Resistance</li>
                                <li>Low Maintenance</li>
                            </ul>
                        </AnimatedOnScroll>
                        <p>

                        </p>
                    </div>
                </Parallax>
                <AnimatedOnScroll animationIn="fadeInDownBig" duration="7000">
                    <div className="fast">
                        <div className='text-fast'>
                            <h2>Our Services</h2>
                            <p>We'he got all kind of solutions across pre engineered buildings.</p>
                        </div>

                        <div className='cards-fast'>
                            <div className='card' id="card1">
                                <img src={peb21} alt="" />
                                <div className='card-text' id="card-text1">
                                    <h3>Infrastructure</h3>
                                    <p>
                                        It is modern, versatile and flexible. There is a wide range of variety which challenges tranditional buildings.
                                    </p>
                                </div>
                            </div>
                            <div className='card' id="card2">
                                <img src={indus} alt="" />
                                <div className='card-text' id="card-text2">
                                    <h3>Industrial</h3>
                                    <p>
                                        Robust instrial design which is very cost effective. Highly scalable design structure.
                                    </p>
                                </div>
                            </div>
                            <div className='card' id="card3">
                                <img src={ware} alt="" />
                                <div className='card-text' id="card-text3">
                                    <h3>Warehouse</h3>
                                    <p>
                                        With the huge functionality the building structure could be remodel and enhance the utmost space by extending.
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>

                </AnimatedOnScroll>

                <div className="slider-image">
                    <div className='slider-text'>
                        <h2>Our Work</h2>
                        <p>Modern and highly scalable design by our team.</p>
                    </div>
                    <ImageSlider />
                </div>

            </div>
        </div>
    )
}

export default HomeLayout

// <div className="peb container">
// <h2>Our Work</h2>
// <div className='image-slider'>
//     <div className="control">
//         <div className="control-up">
//             <FaArrowCircleUp />
//         </div>
//         <div className="control-down">
//             <FaArrowCircleDown />
//         </div>
//     </div>

//     <div className="wrapper">
//         <div className="left-content">
//             <div>
//                 <h2>Coimbator</h2>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem obcaecati esse a aspernatur saepe nemo, reiciendis sapiente id fugit recusandae, distinctio dolor et sed.
//                 </p>
//             </div>
//             <div>
//                 <h2>Erode</h2>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem obcaecati esse a aspernatur saepe nemo, reiciendis sapiente id fugit recusandae, distinctio dolor et sed.
//                 </p>
//             </div>
//             <div>
//                 <h2>Pollachi</h2>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem obcaecati esse a aspernatur saepe nemo, reiciendis sapiente id fugit recusandae, distinctio dolor et sed.
//                 </p>
//             </div>

//             <div>
//                 <h2>Tirupur</h2>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem obcaecati esse a aspernatur saepe nemo, reiciendis sapiente id fugit recusandae, distinctio dolor et sed.
//                 </p>
//             </div>

//         </div>
//     </div>
// </div>
// </div>
// </div>