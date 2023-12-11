import React from 'react'
import "../stylesheets/footer.css"
import { FaArrowRightLong } from "react-icons/fa6";
import logo from "../images/nobackground.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter, } from "react-icons/fa6";
const Footer = () => {
    return (
        <div class="footer-sticky-bottom">
            <div className='footer'>
                <div className='center-section'>
                    <button className='quote-btn-center' id='quote-btn-center'>Get Quote
                        <FaArrowRightLong className='arrowRight' /></button>
                </div>
                <br /><br /><br />
                <div className="sections">

                    <div className="main-section">
                        <div className='first-section'>
                            <div>
                                <img src={logo} alt="sklogo" />
                            </div>
                            <div className='first-section-text'>
                                <h4>Build with Trust <br /> & <br /> Never Compromising Quality</h4>
                            </div>
                        </div>
                        <div className='second-section'>
                            <h2>Company</h2>
                            <ul>
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Services</li>
                                <li>Projects</li>
                                <li>Career</li>
                                <li>Contact</li>
                                <li>Reviews</li>
                            </ul>
                        </div>
                        <div className='third-section'>
                            <h2>Engineering Solutions</h2>
                            <ul>
                                <li>Infrastructure</li>
                                <li>Industrial</li>
                                <li>Warehousing</li>
                            </ul>
                        </div>
                        <div className='fourth-section'>
                            <h2>Our Services</h2>
                            <ul>
                                <li>Ceiling</li>
                                <li>Cladding</li>
                                <li>Floor</li>
                                <li>Pre-engineered Building</li>
                                <li>Wall</li>
                            </ul>
                        </div>
                        <div className='fifth-section'>
                            <ul>
                                <li><FaFacebook /></li>
                                <li><FaXTwitter /></li>
                                <li><FaInstagram /></li>
                                <li><FaLinkedin /></li>
                                <li><FaYoutube /></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
